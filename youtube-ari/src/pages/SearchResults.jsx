import { useLocation } from "react-router-dom";
import VideoCard from "../components/VideoGrid/VideoCard";
import VideoGridSkeleton from "../components/VideoGrid/VideoGridSkeleton";
import { useSearchVideos } from "../hooks/useSearchVideos";

const SearchResults = () => {
  const location = useLocation();
  // URL에서 'search_query' 쿼리 파라미터(검색어)를 추출
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search_query");
  const { videos, loadingMore, loadingInitial, error, hasMore, sentinelRef } =
    useSearchVideos(searchQuery);

  // 로딩 상태 UI
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
        Failed to load search results: {error.message || "Unknown error"}
      </div>
    );
  }

  return (
    <div className="ml-[72px] pt-14">
      <div className="mx-4 flex justify-center">
        <div className="videoGridCols">
          {videos
            .filter((v) => v.videoId)
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

export default SearchResults;
