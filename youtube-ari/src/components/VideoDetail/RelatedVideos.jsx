import RelatedVideoItem from "./RelatedVideoItem";

const RelatedVideos = ({ videos, handleChannelClick }) => {
  return (
    <div className="flex flex-col gap-2">
      {videos.map((video) => (
        <RelatedVideoItem
          key={video.videoId}
          video={video}
          handleChannelClick={handleChannelClick}
        />
      ))}
    </div>
  );
};

export default RelatedVideos;
