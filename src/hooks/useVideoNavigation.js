import { useNavigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import { upsertHistory, patchHistory } from "../storage/historyLocal";
import { getChannelImage } from "../api/youtube";

// 동영상 클릭 시 라우팅을 처리하는 커스텀 훅.

// 모듈 스코프 메모: 같은 채널 중복 요청 방지
const inflight = new Set();

export const useVideoNavigation = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuthContext();
  /**
   * @param {object} video - 클릭된 동영상 데이터 (videoId 필수)
   * @param {function} [onClick] - 선택적 커스텀 클릭 핸들러
   */
  const handleVideoClick = (video, onClick) => {
    if (!video?.videoId) return;

    // 시청 기록 저장
    upsertHistory(currentUser?.uid, {
      id: video.videoId,
      title: video.title,
      channelTitle: video.channelName,
      thumb: video.thumbnail,
      channelImage: video.channelImage,
      views: video.views,
      publishedAt: video.publishedAt,
    });

    // channelImage가 없고 channelId가 있으면 즉시 보완
    if (
      !video.channelImage &&
      video.channelId &&
      !inflight.has(video.channelId)
    ) {
      inflight.add(video.channelId);
      getChannelImage(video.channelId)
        .then((url) => {
          if (url) {
            patchHistory(currentUser?.uid, video.videoId, {
              channelImage: url,
            });
          }
        })
        .finally(() => inflight.delete(video.channelId));
    }

    // 라우팅 or 커스텀
    if (typeof onClick === "function") onClick(video);
    else navigate(`/video/${video.videoId}`, { state: { video } });
  };

  return { handleVideoClick };
};
