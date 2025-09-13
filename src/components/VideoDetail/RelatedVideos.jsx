import RelatedVideoItem from "./RelatedVideoItem";

const RelatedVideos = ({ videos, error }) => {
  // 추천 영상 로딩 중 에러 발생 시 메시지 표시
  if (error) {
    return (
      <div className="p-4 text-center text-red-500">
        Failed to load recommended videos: {error.message}
      </div>
    );
  }

  // 추천 영상이 없거나 로딩 중일 때 메시지 표시
  if (!videos || videos.length === 0) {
    return (
      <div className="p-4 text-center text-gray-600">
        Loading recommended videos...
      </div>
    );
  }

  return (
    <>
      {/* 사이드바 */}
      <div className="hidden flex-col gap-2 lg:flex">
        {videos.map((video) => (
          <RelatedVideoItem
            key={video.videoId}
            video={video}
            variant="sidebar"
          />
        ))}
      </div>

      {/* 그리드형 카드 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:hidden">
        {videos.map((video) => (
          <RelatedVideoItem key={video.videoId} video={video} variant="grid" />
        ))}
      </div>
    </>
  );
};

export default RelatedVideos;
