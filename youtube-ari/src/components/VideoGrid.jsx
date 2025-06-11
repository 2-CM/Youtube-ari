import VideoCard from "./VideoCard";
import mockVideos from "../data/mockVideos";

const VideoGrid = () => {
  return (
    <div className="ml-[72px] mt-14 bg-gray-100">
      <div className="mx-4 flex justify-center">
        <div className="grid w-full grid-cols-3 justify-start pt-6">
          {mockVideos.map((video) => (
            <VideoCard
              key={video.id}
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
