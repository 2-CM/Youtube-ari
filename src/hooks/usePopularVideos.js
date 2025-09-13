import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getPopularVideos, getChannelImage } from "../api/youtube";
import { transformVideo } from "../utils/transformVideoData";

export function usePopularVideos({ regionCode = "KR", pageSize = 12 } = {}) {
  const [videos, setVideos] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);

  const { ref: sentinelRef, inView } = useInView({
    root: null,
    rootMargin: "200px 0px",
    threshold: 0,
  });

  const fetchPage = async (cursorParam = null) => {
    // 초기/추가 로딩 구분
    const isInitial = videos.length === 0 && !cursorParam;
    isInitial ? setLoadingInitial(true) : setLoadingMore(true);

    try {
      setError(null);
      // 1. 인기 동영상 가져오기
      const { items, nextCursor } = await getPopularVideos(
        pageSize,
        regionCode,
        cursorParam,
      );

      // 2. 채널 이미지
      const channelIds = [
        ...new Set(items.map((it) => it?.snippet?.channelId).filter(Boolean)),
      ];
      const channelImages = await Promise.all(
        channelIds.map((id) => getChannelImage(id)),
      );
      const channelImageMap = {};
      channelIds.forEach((id, idx) => {
        channelImageMap[id] = channelImages[idx] || "";
      });

      // 3. transform + append
      const transformed = items.map((it) =>
        transformVideo(it, channelImageMap[it?.snippet?.channelId] || ""),
      );
      setVideos((prev) => {
        const seen = new Set(prev.map((v) => v.videoId));
        const deduped = transformed.filter((v) => !seen.has(v.videoId));
        return [...prev, ...deduped];
      });

      setCursor(nextCursor || null);
      setHasMore(Boolean(nextCursor));
      setError(null);
    } catch (err) {
      setError(err); // 에러 발생 시 에러 상태 설정
      console.error("동영상 및 채널 이미지 로딩 실패:", err);
      if (!cursorParam) setVideos([]); // 첫 로드 실패 시 초기화
    } finally {
      isInitial ? setLoadingInitial(false) : setLoadingMore(false); // 로딩 종료
    }
  };

  // 첫 페이지
  useEffect(() => {
    if (videos.length === 0) fetchPage(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 센티널 트리거
  useEffect(() => {
    if (inView && hasMore && !loadingMore && !loadingInitial) {
      fetchPage(cursor);
    }
  }, [inView, hasMore, loadingMore, loadingInitial, cursor]); // eslint-disable-line

  return { videos, loadingInitial, loadingMore, error, hasMore, sentinelRef };
}
