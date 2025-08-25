import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3";
const DEFAULT_VIDEO_PARTS = "snippet,contentDetails,statistics";
const FULL_VIDEO_PARTS = "snippet,contentDetails,statistics";

// axios 인스턴스 생성
const youtube = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
});

// 인기 동영상
export const getPopularVideos = async (
  maxResults = 12,
  regionCode = "KR",
  cursor = null,
) => {
  try {
    const response = await youtube.get("/videos", {
      params: {
        part: DEFAULT_VIDEO_PARTS,
        chart: "mostPopular",
        regionCode,
        maxResults,
        pageToken: cursor || undefined,
      },
    });
    return {
      items: response.data.items ?? [],
      nextCursor: response.data.nextPageToken ?? null,
    };
  } catch (error) {
    console.error("Error fetching popular videos", error);
    throw error;
  }
};

// 채널 이미지
export const getChannelImage = async (channelId) => {
  try {
    const response = await youtube.get("/channels", {
      params: {
        part: "snippet",
        id: channelId,
      },
    });
    // 채널 썸네일 중 'default' 또는 'medium' 이미지 URL 반환
    return (
      response.data.items[0]?.snippet?.thumbnails?.default?.url ||
      response.data.items[0]?.snippet?.thumbnails?.medium?.url
    );
  } catch (error) {
    console.error(`Error fetching channel image for ${channelId}:`, error);
    // 에러 발생 시 빈 문자열 또는 기본 이미지 URL 반환
    return "";
  }
};

// 특정 동영상의 상세 정보
export const getVideoDetails = async (videoId) => {
  try {
    const response = await youtube.get("/videos", {
      params: {
        part: FULL_VIDEO_PARTS,
        id: videoId,
      },
    });
    return response.data.items[0]; // 첫 번째 아이템이 해당 비디오 정보
  } catch (error) {
    console.error(`Error fetching video details for ${videoId}:`, error);
    throw error;
  }
};

// 검색 결과 동영상
export const searchVideos = async (query, maxResults = 20) => {
  try {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        q: query, // 사용자가 입력한 검색어
        type: "video", // 동영상만 검색하도록 지정 (채널, 재생목록 제외)
        maxResults,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error(`Error searching videos for "${query}":`, error);
    throw error;
  }
};

/**
 * (대체) 연관 영상: 제목/태그/카테고리 기반 유사 검색
 * relatedToVideoId는 더 이상 지원되지 않아 INVALID_ARGUMENT(400) 발생.
 * - query: 제목/태그로 만든 질의어
 * - categoryId: 기준 영상 categoryId
 * - excludeChannelId: 같은 채널 과다 노출을 줄이고 싶을 때 제외
 */
export const searchSimilarVideos = async ({
  query,
  categoryId,
  excludeChannelId,
  maxResults = 20,
  regionCode = "KR",
}) => {
  try {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        type: "video",
        q: query,
        videoCategoryId: categoryId || undefined,
        regionCode,
        maxResults: Math.min(Math.max(maxResults, 1), 50),
        videoEmbeddable: "true",
        relevanceLanguage: "ko",
      },
    });

    const items = response.data.items || [];
    return excludeChannelId
      ? items.filter((it) => it.snippet?.channelId !== excludeChannelId)
      : items;
  } catch (error) {
    console.error(
      "Error searching similar videos >",
      error?.response?.data || error,
    );
    throw error;
  }
};

// 상세 보강용: 여러 ID 한 번에 조회 (통계/길이/전체 설명 포함)
export const getVideosByIds = async (ids = []) => {
  if (!ids.length) return [];
  try {
    const res = await youtube.get("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        id: ids.join(","),
        maxResults: ids.length,
      },
    });
    return res.data.items || [];
  } catch (error) {
    console.error(
      "Error fetching videos by ids >",
      error?.response?.data || error,
    );
    throw error;
  }
};
