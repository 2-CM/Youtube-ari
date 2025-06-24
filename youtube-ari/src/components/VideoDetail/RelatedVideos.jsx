import RelatedVideoItem from "./RelatedVideoItem";

const RelatedVideos = ({ videos }) => {
  return (
    <div className="flex flex-col gap-2">
      {videos.map((video) => (
        <RelatedVideoItem key={video.videoId} video={video} />
      ))}
    </div>
  );
};

export default RelatedVideos;
