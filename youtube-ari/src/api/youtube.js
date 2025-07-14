import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3";
const DEFAULT_VIDEO_PARTS = "snippet,contentDetails,statistics";
const DEFAULT_CHANNEL_PARTS = "snippet";

// axios 인스턴스 생성
const youtube = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
});

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

export const getChannelImage = async (channelId) => {
  try {
    const response = await youtube.get("/channels", {
      params: {
        part: DEFAULT_CHANNEL_PARTS,
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
