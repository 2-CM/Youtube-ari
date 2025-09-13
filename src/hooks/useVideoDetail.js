import { useEffect, useState } from "react";
import { getVideoDetails, getChannelImage } from "../api/youtube";
import { transformVideo } from "../utils/transformVideoData";

export function useVideoDetail(videoId) {
  const [videoDetail, setVideoDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      // videoId가 null이면 API 호출을 건너뛰고 바로 로딩 종료
      // 이는 VideoCard에서 state로 데이터가 넘어왔을 때 불필요한 API 호출을 방지하기 위함
      if (!videoId) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const rawVideo = await getVideoDetails(videoId);
        if (!rawVideo) {
          setError(new Error("Video not found."));
          setLoading(false);
          return;
        }

        const channelImageUrl = await getChannelImage(
          rawVideo.snippet.channelId,
        );
        const transformedDetail = transformVideo(rawVideo, channelImageUrl);
        setVideoDetail(transformedDetail);
      } catch (err) {
        console.error("Error fetching video detail:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [videoId]); // videoId가 변경될 때마다 다시 fetch (null -> 실제 ID)

  return { videoDetail, loading, error };
}
