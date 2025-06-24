import { useNavigate } from "react-router-dom";
import VideoThumbnail from "../VideoGrid/VideoThumbnail";
import VideoCardMeta from "../VideoGrid/VideoCardMeta";

const RelatedVideoItem = ({ video, variant = "sidebar" }) => {
  const navigate = useNavigate();

  const handleVideoClick = () => {
    navigate(`/video/${video.videoId}`);
  };

  const handleChannelClick = (e) => {
    e.stopPropagation();
    navigate(`/@${video.channelName}`);
  };

  const { title, thumbnail, channelName, views, publishedAt } = video;
  const isGrid = variant === "grid";

  return (
    <div
      onClick={handleVideoClick}
      className={`relative cursor-pointer overflow-hidden ${
        isGrid
          ? "flex max-w-full flex-col"
          : "flex max-h-[94px] max-w-[402px] flex-row"
      }`}
    >
      <div className={isGrid ? "w-full" : "mr-2 h-24 w-40"}>
        <VideoThumbnail thumbnail={thumbnail} />
      </div>
      <div className={isGrid ? "" : "flex-1 overflow-hidden"}>
        <VideoCardMeta
          title={title}
          channelName={channelName}
          views={views}
          publishedAt={publishedAt}
          handleChannelClick={handleChannelClick}
          mode="relatedVideos"
        />
      </div>
    </div>
  );
};

export default RelatedVideoItem;
