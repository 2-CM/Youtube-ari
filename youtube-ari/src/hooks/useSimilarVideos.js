import { useEffect, useState } from "react";
import {
  getVideoDetails,
  searchSimilarVideos,
  getVideosByIds,
  getChannelImage,
} from "../api/youtube";
import { transformVideo } from "../utils/transformVideoData";

// 유사 검색어 만들기 (title + tags 기반)
const buildQuery = (title = "", tags = []) => {
  const stopWords = new Set([
    "official",
    "mv",
    "the",
    "and",
    "with",
    "feat",
    "live",
    "방송",
    "영상",
  ]);
  const fromTitle = title
    .toLowerCase()
    .replace(/[^\w가-힣\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !stopWords.has(w));
  const fromTags = (tags || [])
    .map((t) => String(t).toLowerCase())
    .filter((w) => w.length > 1 && !stopWords.has(w));

  const merged = Array.from(new Set([...fromTitle, ...fromTags]));
  return merged.slice(0, 6).join(" ");
};

export const useSimilarVideos = (videoId) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let alive = true;

    const run = async () => {
      if (!videoId) {
        setVideos([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      setError(null);

      try {
        // 기준 영상 상세
        const baseVideo = await getVideoDetails(videoId);
        if (!baseVideo) throw new Error("Base video not found");

        const title = baseVideo.snippet?.title || "";
        const tags = baseVideo.snippet?.tags || [];
        const categoryId = baseVideo.snippet?.categoryId || undefined;
        const channelId = baseVideo.snippet?.channelId || undefined;

        // 검색어 생성 후 유사 검색
        const query = buildQuery(title, tags);
        const similarList = await searchSimilarVideos({
          query,
          categoryId,
          excludeChannelId: channelId,
          maxResults: 20,
        });

        // videoId 배열 추출 + 현재 영상 제외
        const ids = Array.from(
          new Set(similarList.map((it) => it.id?.videoId).filter(Boolean)),
        ).filter((id) => id !== videoId);

        // 상세 보강
        const details = await getVideosByIds(ids);

        // 채널 이미지 붙이고 transform
        const merged = await Promise.all(
          details.map(async (v) => {
            const channelImage = await getChannelImage(v.snippet.channelId);
            return transformVideo({ ...v, channelImage });
          }),
        );

        if (alive) setVideos(merged);
      } catch (err) {
        if (alive) setError(err);
      } finally {
        if (alive) setLoading(false);
      }
    };

    run();
    return () => {
      alive = false;
    };
  }, [videoId]);

  return { videos, loading, error };
};
