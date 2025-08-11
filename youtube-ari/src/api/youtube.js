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
export const getPopularVideos = async (maxResults = 12, regionCode = "KR") => {
  try {
    const response = await youtube.get("/videos", {
      params: {
        part: DEFAULT_VIDEO_PARTS,
        chart: "mostPopular",
        regionCode,
        maxResults,
      },
    });
    return response.data.items;
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
