const VideoThumbnail = ({ thumbnail }) => {
  return (
    <div className="relative w-full">
      <div className="block aspect-video overflow-hidden rounded-lg">
        <img
          src={thumbnail}
          alt="Video Thumbnail"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default VideoThumbnail;
