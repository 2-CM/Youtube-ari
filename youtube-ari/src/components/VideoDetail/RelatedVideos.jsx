import RelatedVideoItem from "./RelatedVideoItem";

const RelatedVideos = ({ videos }) => {
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
