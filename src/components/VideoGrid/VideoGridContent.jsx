import VideoCard from "./VideoCard";

const VideoGridContent = ({ videos }) => {
  return (
    <div className="mx-4 flex justify-center">
      <div className="videoGridCols">
        {videos
          .filter((v) => v.videoId)
          .map((v) => (
            <VideoCard
              key={v.videoId}
              videoId={v.videoId}
              channelId={v.channelId}
              title={v.title}
              thumbnail={v.thumbnail}
              channelImage={v.channelImage}
              channelName={v.channelName}
              views={v.views}
              publishedAt={v.publishedAt}
              description={v.description}
              mode="videoGrid"
            />
          ))}
      </div>
    </div>
  );
};

export default VideoGridContent;
