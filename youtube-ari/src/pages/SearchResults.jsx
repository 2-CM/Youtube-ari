import { useLocation } from "react-router-dom";
import VideoCard from "../components/VideoGrid/VideoCard";
import VideoGridSkeleton from "../components/VideoGrid/VideoGridSkeleton";
import { useSearchVideos } from "../hooks/useSearchVideos";

const SearchResults = () => {
  const location = useLocation();
  // URL에서 'search_query' 쿼리 파라미터(검색어)를 추출
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search_query");
  const { videos, loading, error } = useSearchVideos(searchQuery);

  // 로딩 상태 UI
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
        Failed to load search results: {error.message || "Unknown error"}
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

export default SearchResults;
