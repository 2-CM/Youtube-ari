import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3";
const DEFAULT_PARTS = "snippet,contentDetails,statistics";

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
        part: DEFAULT_PARTS,
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
