import VideoCard from "./VideoCard";
import { usePopularVideos } from "../../hooks/usePopularVideos";
import VideoGridSkeleton from "./VideoGridSkeleton";

const VideoGrid = () => {
  const { videos, loadingInitial, loadingMore, error, hasMore, sentinelRef } =
    usePopularVideos();

  // 로딩 상태 UI (분리된 VideoGridSkeleton 컴포넌트 사용)
  if (loadingInitial) {
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
        Failed to load video: {error.message}
      </div>
    );
  }

  return (
    <div className="ml-[72px] pt-14">
      <div className="mx-4 flex justify-center">
        <div className="videoGridCols">
          {videos
            .filter((video) => video.videoId)
            .map((video) => (
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

      {/* 무한스크롤 센티널 */}
      {hasMore && (
        <div ref={sentinelRef} style={{ height: 1 }} aria-hidden="true" />
      )}

      {/* 추가 로딩 UI (다음 페이지 불러올 때) */}
      {loadingMore && videos.length > 0 && <VideoGridSkeleton count={12} />}

      {/* 끝까지 다 불러왔을 때 표시 */}
      {!hasMore && videos.length > 0 && (
        <div className="py-6 text-center text-sm text-gray-400">
          No more videos
        </div>
      )}
    </div>
  );
};

export default VideoGrid;
