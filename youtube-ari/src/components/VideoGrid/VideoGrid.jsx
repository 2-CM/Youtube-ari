import VideoCard from "./VideoCard";
import mockVideos from "../../data/mockVideos";

const VideoGrid = () => {
  return (
    <div className="ml-[72px] mt-14">
      <div className="mx-4 flex justify-center">
        <div className="videoGridCols">
          {mockVideos.map((video) => (
            <VideoCard
              key={video.videoId}
              videoId={video.videoId}
              title={video.title}
              thumbnail={video.thumbnail}
              channelImage={video.channelImage}
              channelName={video.channelName}
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
