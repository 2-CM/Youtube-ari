import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { searchVideos, getChannelImage, getVideoDetails } from "../api/youtube";
import { transformVideo } from "../utils/transformVideoData";

// 주어진 검색어에 대한 YouTube 동영상 검색 결과를 가져오는 커스텀 훅.

export const useSearchVideos = (searchQuery, pageSize = 20) => {
  const [videos, setVideos] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { ref: sentinelRef, inView } = useInView({
    root: null,
    rootMargin: "200px 0px",
    threshold: 0,
  });

  const fetchPage = async (cursorParam = null, replace = false) => {
    if (!searchQuery) {
      setVideos([]);
      setHasMore(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // 1. 검색 API 호출
      const { items, nextCursor } = await searchVideos(
        searchQuery,
        pageSize,
        cursorParam,
      );

      // 2. 상세정보/채널이미지 병합
      const videoPromises = items.map(async (video) => {
        if (video.id.kind === "youtube#video") {
          const channelId = video.snippet.channelId;
          const videoId = video.id.videoId;
          const [channelImage, videoDetails] = await Promise.all([
            getChannelImage(channelId),
            getVideoDetails(videoId),
          ]);
          const combined = {
            ...video,
            snippet: {
              ...video.snippet,
              ...(videoDetails?.snippet && {
                title: videoDetails.snippet.title,
                description: videoDetails.snippet.description,
                publishedAt: videoDetails.snippet.publishedAt,
                channelTitle: videoDetails.snippet.channelTitle,
                channelId: videoDetails.snippet.channelId,
                thumbnails: videoDetails.snippet.thumbnails,
              }),
            },
            statistics: videoDetails?.statistics ?? video.statistics,
          };
          return transformVideo(combined, channelImage);
        }
        return null;
      });

      const detailedVideos = (await Promise.all(videoPromises)).filter(Boolean);

      // 3. 상태 업데이트
      setVideos((prev) =>
        replace ? detailedVideos : [...prev, ...detailedVideos],
      );
      setCursor(nextCursor || null);
      setHasMore(Boolean(nextCursor));
    } catch (err) {
      console.error("Failed to fetch search results:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // 검색어 변경 시 초기화 + 첫 페이지
  useEffect(() => {
    setVideos([]);
    setCursor(null);
    setHasMore(true);
    if (searchQuery) {
      fetchPage(null, true);
    }
  }, [searchQuery]);

  // 센티널이 보이면 다음 페이지
  useEffect(() => {
    if (inView && hasMore && !loading) {
      fetchPage(cursor);
    }
  }, [inView, hasMore, loading, cursor]); // eslint-disable-line

  return { videos, loading, error, hasMore, sentinelRef };
};
