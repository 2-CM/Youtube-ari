import VideoCard from "./VideoCard";
import { usePopularVideos } from "../../hooks/usePopularVideos";

const VideoGrid = () => {
  const { videos, loading, error } = usePopularVideos();

  // 로딩 상태 UI
  if (loading) {
    return (
      <div className="ml-[72px] mt-14 text-center text-lg text-gray-600">
        동영상을 불러오는 중입니다...
      </div>
    );
  }

  // 에러 상태 UI
  if (error) {
    return (
      <div className="ml-[72px] mt-14 text-center text-lg text-red-500">
        데이터를 불러오는 데 실패했습니다: {error.message}
      </div>
    );
  }

  return (
    <div className="ml-[72px] mt-14">
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
              channelName={video.channelname}
              views={video.views}
              publishedAt={video.publishedAt}
              mode="videoGrid"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGrid;
