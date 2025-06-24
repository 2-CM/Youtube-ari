import { useNavigate } from "react-router-dom";
import VideoThumbnail from "../VideoGrid/VideoThumbnail";
import VideoCardMeta from "../VideoGrid/VideoCardMeta";

const RelatedVideoItem = ({ video, handleChannelClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/video/${video.videoId}`);
  };

  const { title, thumbnail, channelName, views, publishedAt } = video;

  return (
    <div
      onClick={handleClick}
      className="relative flex max-h-[94px] max-w-[402px] flex-row"
    >
      <div className="mr-2 h-24 w-40">
        <VideoThumbnail thumbnail={thumbnail} />
      </div>
      <div className="flex-1 overflow-hidden">
        <VideoCardMeta
          title={title}
          channelName={channelName}
          views={views}
          publishedAt={publishedAt}
          handleChannelClick={handleChannelClick}
          size="small"
        />
      </div>
    </div>
  );
};

export default RelatedVideoItem;
