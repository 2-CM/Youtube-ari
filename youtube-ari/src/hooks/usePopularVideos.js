import { useEffect, useState } from "react";
import { getPopularVideos, getChannelImage } from "../api/youtube";
import { transformVideo } from "../utils/transformVideoData";

export function usePopularVideos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllVideosData = async () => {
      try {
        setLoading(true); // 로딩 시작

        // 1. 인기 동영상 데이터 가져오기 (raw 비디오 데이터)
        const videoData = await getPopularVideos();

        // 2. 모든 동영상에서 채널 ID 추출 (중복 제거)
        const channelIds = [
          ...new Set(videoData.map((item) => item.snippet.channelId)),
        ];

        // 3. 각 채널 ID에 해당하는 채널 이미지를 병렬로 가져오기
        const channelImagePromises = channelIds.map((id) =>
          getChannelImage(id),
        );
        const channelImages = await Promise.all(channelImagePromises);

        // 4. 채널 ID와 채널 이미지 URL을 매핑하는 객체 생성
        const channelImageMap = {};
        channelIds.forEach((id, index) => {
          channelImageMap[id] = channelImages[index];
        });

        // 5. 비디오 데이터와 채널 이미지를 결합하고 `transformVideo`를 사용하여 최종 형태로 변환
        const transformedVideos = videoData.map((item) => {
          const channelImageUrl = channelImageMap[item.snippet.channelId] || ""; // 해당 채널의 이미지 URL
          return transformVideo(item, channelImageUrl); // `transformVideo`에 raw 비디오와 채널 이미지 URL 전달
        });

        setVideos(transformedVideos); // 변환된 동영상 데이터를 상태에 저장
        setError(null); // 성공 시 에러 상태 초기화
      } catch (err) {
        setError(err); // 에러 발생 시 에러 상태 설정
        console.error("동영상 및 채널 이미지 로딩 실패:", err);
        setVideos([]); // 에러 발생 시 비디오 목록 초기화
      } finally {
        setLoading(false); // 로딩 종료
      }
    };

    fetchAllVideosData();
  }, []); // 의존성 배열이 비어있으므로 컴포넌트 마운트 시 한 번만 실행

  // 동영상 데이터, 로딩 상태, 에러 상태를 반환
  return { videos, loading, error };
}
