import { useNavigate } from "react-router-dom";

// 동영상 클릭 시 라우팅을 처리하는 커스텀 훅.

export const useVideoNavigation = () => {
  const navigate = useNavigate();

  /**
   * 동영상 클릭 시 상세 페이지로 이동하거나 커스텀 핸들러를 호출합니다.
   * @param {object} video - 클릭된 동영상 데이터 객체 (videoId 필수)
   * @param {function} [onClick] - 선택적 커스텀 클릭 핸들러
   */
  const handleVideoClick = (video, onClick) => {
    if (onClick) {
      // 커스텀 클릭 핸들러가 있으면 이를 호출
      onClick(video);
    } else {
      // 커스텀 핸들러가 없으면 기본 라우팅 처리
      navigate(`/video/${video.videoId}`, {
        state: { video },
      });
    }
  };

  return { handleVideoClick };
};
