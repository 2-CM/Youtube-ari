import { useState, useEffect } from "react";
import { searchVideos, getChannelImage, getVideoDetails } from "../api/youtube";
import { transformVideo } from "../utils/transformVideoData";

// 주어진 검색어에 대한 YouTube 동영상 검색 결과를 가져오는 커스텀 훅.

export const useSearchVideos = (searchQuery) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      // 검색어가 없으면 로딩 상태를 해제하고 비디오를 비움
      if (!searchQuery) {
        setLoading(false);
        setVideos([]);
        return;
      }

      setLoading(true); // 데이터 로딩 시작
      setError(null); // 이전 에러 초기화
      try {
        // 1. YouTube Data API의 search 엔드포인트를 사용하여 초기 검색 결과 가져오기
        const searchData = await searchVideos(searchQuery);

        // 2. 각 비디오에 대한 추가 정보 (채널 이미지, 조회수) 비동기적으로 가져오기
        const videosWithDetailsPromises = searchData.map(async (video) => {
          // 여기서는 비디오 (kind: "youtube#video")만 처리하고, 추가 정보를 가져옴
          if (video.id.kind === "youtube#video") {
            const channelId = video.snippet.channelId;
            const videoId = video.id.videoId;

            // 채널 이미지와 비디오 상세 정보를 동시에 가져옴
            const [channelImage, videoDetails] = await Promise.all([
              getChannelImage(channelId),
              getVideoDetails(videoId),
            ]);

            // search API에서 받은 video 객체와 getVideoDetails에서 받은 videoDetails를 합쳐서 전달
            const combinedVideoData = {
              ...video,
              statistics: videoDetails?.statistics, // getVideoDetails에서 가져온 통계 정보 추가
            };
            return transformVideo(combinedVideoData, channelImage);
          }
          return null; // 비디오가 아닌 항목은 null 반환
        });

        // 모든 비디오의 상세 정보가 로드될 때까지 기다린 후, null 값 필터링
        const detailedVideos = (
          await Promise.all(videosWithDetailsPromises)
        ).filter(Boolean);
        setVideos(detailedVideos);
      } catch (err) {
        console.error("Failed to fetch search results:", err);
        setError(err); // 에러 객체를 그대로 저장하여 더 자세한 정보 제공
      } finally {
        setLoading(false); // 로딩 완료
      }
    };

    fetchResults();
    // searchQuery가 변경될 때마다 다시 검색을 수행하도록 의존성 배열에 추가
  }, [searchQuery]);

  return { videos, loading, error };
};
