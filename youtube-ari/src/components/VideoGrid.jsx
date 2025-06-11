import VideoCard from "./VideoCard";

const VideoGrid = () => {
  return (
    <div className="ml-[72px] mt-14 bg-gray-100">
      <div className="mx-4 flex justify-center">
        <div className="grid w-full grid-cols-3 justify-start pt-6">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    </div>
  );
};

export default VideoGrid;
