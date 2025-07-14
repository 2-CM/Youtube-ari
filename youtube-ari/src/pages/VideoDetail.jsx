import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useVideoDetail } from "../hooks/useVideoDetail";
import mockVideos from "../data/mockVideos";

import ChannelInfo from "../components/VideoDetail/ChannelInfo";
import Description from "../components/VideoDetail/Description";
import RelatedVideos from "../components/VideoDetail/RelatedVideos";

const VideoDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const initialVideoData = location.state?.video; // VideoCard에서 넘어온 데이터

  // useVideoDetail 훅: initialVideoData가 있다면 API 호출을 건너뜀
  const {
    videoDetail: apiFetchedVideoDetail,
    loading: apiLoading,
    error: apiError,
  } = useVideoDetail(initialVideoData ? null : id); // 초기 데이터 있으면 null 전달

  // 현재 동영상 데이터, 로딩, 에러 상태 관리
  const [currentVideo, setCurrentVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (initialVideoData) {
      // 1. VideoCard에서 state로 데이터가 넘어왔다면, 바로 사용
      setCurrentVideo(initialVideoData);
      setLoading(false);
      setError(null);
    } else if (id) {
      // 2. URL 파라미터(id)는 있지만 initialVideoData가 없는 경우 (API 호출 필요)
      if (apiLoading) {
        setLoading(true);
        setError(null);
      } else if (apiError) {
        setLoading(false);
        setError(apiError);
        setCurrentVideo(null); // 에러 발생 시 데이터 초기화
      } else if (apiFetchedVideoDetail) {
        // API 호출이 성공적으로 완료되면 해당 데이터 사용
        setCurrentVideo(apiFetchedVideoDetail);
        setLoading(false);
        setError(null);
      }
    } else {
      // videoId 자체가 없는 경우 (예: 잘못된 URL)
      setLoading(false);
      setError(new Error("Video ID is missing."));
      setCurrentVideo(null);
    }
  }, [id, initialVideoData, apiLoading, apiError, apiFetchedVideoDetail]); // 의존성 배열

  // 로딩 UI
  if (loading) {
    return (
      <div className="ml-[72px] mt-14 text-center text-lg text-gray-600">
        Loading video details...
      </div>
    );
  }

  // 에러 UI
  if (error) {
    return (
      <div className="ml-[72px] mt-14 text-center text-lg text-red-500">
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

  // Related video 목록 (자기 자신 제외)
  const relatedVideos = mockVideos.filter((v) => v.videoId !== Number(id));

  return (
    <div className="mx-auto ml-6 mt-14 flex flex-col lg:flex-row">
      <div className="flex-1 pr-6 pt-6">
        <div className="aspect-video min-h-[320px] min-w-[640px] overflow-hidden rounded-lg">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mb-6 mt-3">
          <h1>{title}</h1>
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
        <RelatedVideos videos={relatedVideos} />
      </div>
    </div>
  );
};

export default VideoDetail;
