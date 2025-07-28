import VideoCard from "./VideoCard";
import { usePopularVideos } from "../../hooks/usePopularVideos";
import VideoGridSkeleton from "./VideoGridSkeleton";

const VideoGrid = () => {
  const { videos, loading, error } = usePopularVideos();

  // 로딩 상태 UI (분리된 VideoSkeleton 컴포넌트 사용)
  if (loading) {
    return (
      <div className="ml-[72px] pt-14">
        <VideoGridSkeleton count={12} />
      </div>
    );
  }

  // 에러 상태 UI
  if (error) {
    return (
      <div className="ml-[72px] pt-14 text-center text-lg text-red-500">
        데이터를 불러오는 데 실패했습니다: {error.message}
      </div>
    );
  }

  return (
    <div className="ml-[72px] pt-14">
      <div className="mx-4 flex justify-center">
        <div className="videoGridCols">
          {videos.map((video) => (
            <VideoCard
              key={video.videoId}
              videoId={video.videoId}
              channelId={video.channelId}
              title={video.title}
              thumbnail={video.thumbnail}
              channelImage={video.channelImage}
              channelName={video.channelName}
              views={video.views}
              publishedAt={video.publishedAt}
              description={video.description}
              mode="videoGrid"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGrid;
