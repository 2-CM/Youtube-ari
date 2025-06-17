import VideoCard from "./VideoCard";
import mockVideos from "../data/mockVideos";

const VideoGrid = () => {
  return (
    <div className="ml-[72px] mt-14">
      <div className="mx-4 flex justify-center">
        <div className="videoGridCols">
          {[...Array(4)]
            .flatMap(() => mockVideos)
            .map((video, index) => (
              <VideoCard
                key={index}
                title={video.title}
                thumbnail={video.thumbnail}
                channelImage={video.channelImage}
                channelName={video.channelName}
                views={video.views}
                publishedAt={video.publishedAt}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGrid;
