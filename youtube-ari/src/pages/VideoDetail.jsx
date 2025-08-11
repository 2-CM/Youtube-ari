import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useVideoDetail } from "../hooks/useVideoDetail";
import { useSimilarVideos } from "../hooks/useSimilarVideos";
import { sanitizeVideoId } from "../utils/videoId";

import ChannelInfo from "../components/VideoDetail/ChannelInfo";
import Description from "../components/VideoDetail/Description";
import RelatedVideos from "../components/VideoDetail/RelatedVideos";

const VideoDetail = () => {
  const { id } = useParams();
  const cleanId = sanitizeVideoId(id);
  const location = useLocation();
  const initialVideoData = location.state?.video; // VideoCard에서 넘어온 초기 데이터

  // useVideoDetail 커스텀 훅
  const {
    videoDetail: apiFetchedVideoDetail,
    loading: apiLoading,
    error: apiError,
  } = useVideoDetail(cleanId);

  // useRelatedVideos 커스텀 훅
  const {
    videos: relatedVideos,
    loading: relatedLoading,
    error: relatedError,
  } = useSimilarVideos(cleanId);

  // 현재 재생 중인 비디오 상태
  const [currentVideo, setCurrentVideo] = useState(initialVideoData);
  const [loading, setLoading] = useState(!initialVideoData);
  const [error, setError] = useState(null);

  // id/초기데이터/API 응답에 따라 현재 비디오 결정
  useEffect(() => {
    setLoading(true); // 새 비디오 로딩 시작
    setError(null); // 에러 초기화
    setCurrentVideo(null); // 이전 비디오 정보 초기화

    if (!cleanId) {
      // ID가 없는 경우 (잘못된 URL 접근)
      setError(new Error("Video ID is missing."));
      setLoading(false);
      return;
    }

    if (initialVideoData && initialVideoData.videoId === cleanId) {
      // 1. initialVideoData가 있고 현재 URL의 ID와 일치하면 그 데이터를 바로 사용 (클릭을 통해 넘어온 경우)
      setCurrentVideo(initialVideoData);
      setLoading(false);
    } else {
      // 2. initialVideoData가 없거나 ID가 다르면 API 호출 결과를 기다림 (직접 URL 접근 또는 다른 비디오 클릭 시)
      if (apiLoading) {
        // 로딩 중이므로 별도 처리 없음 (로딩 상태는 이미 true)
      } else if (apiError) {
        setError(apiError);
        setLoading(false);
      } else if (apiFetchedVideoDetail) {
        setCurrentVideo(apiFetchedVideoDetail);
        setLoading(false);
      }
    }
  }, [cleanId, initialVideoData, apiLoading, apiError, apiFetchedVideoDetail]);

  // 로딩 UI
  if (loading) {
    return (
      <div className="ml-[72px] pt-14 text-center text-lg text-gray-600">
        Loading video details...
      </div>
    );
  }

  // 에러 UI
  if (error) {
    return (
      <div className="ml-[72px] pt-14 text-center text-lg text-red-500">
        Failed to load video details: {error.message}
      </div>
    );
  }

  // 동영상 정보가 없는 경우 (예: API에서 찾을 수 없는 ID)
  if (!currentVideo) {
    return (
      <div className="ml-[72px] mt-14 text-center text-lg text-gray-600">
        Video not found.
      </div>
    );
  }

  const handleChannelClick = () => {
    // navigate(`/@${video.channelName}`);
  };

  const {
    title,
    channelName,
    channelImage,
    views,
    publishedAt,
    description,
    channelId,
  } = currentVideo;

  return (
    <>
      <div className="mx-auto flex flex-col pl-6 pt-14 lg:flex-row">
        <div className="flex-1 pr-6 pt-6">
          <div className="aspect-video min-h-[320px] min-w-[640px] overflow-hidden rounded-lg">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${cleanId}?autoplay=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mb-6 mt-3">
            <h1 className="dark:text-white">{title}</h1>
            <ChannelInfo
              channelImage={channelImage}
              channelName={channelName}
              channelId={channelId}
              handleChannelClick={handleChannelClick}
            />
            <Description
              views={views}
              publishedAt={publishedAt}
              description={description}
            />
          </div>
        </div>

        {/* 추천영상 */}
        <div className="pr-6 pt-6">
          <RelatedVideos
            videos={relatedVideos}
            loading={relatedLoading}
            error={relatedError}
          />
        </div>
      </div>
    </>
  );
};

export default VideoDetail;
