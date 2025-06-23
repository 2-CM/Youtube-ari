import { useState } from "react";
import { useNavigate } from "react-router-dom";

import VideoThumbnail from "./VideoThumbnail";
import VideoCardMeta from "./VideoCardMeta";

const VideoCard = ({
  videoId,
  title,
  thumbnail,
  channelImage,
  channelName,
  views,
  publishedAt,
}) => {
  const navigate = useNavigate();
  const [isPressed, setIsPressed] = useState(false);

  const handleVideoClick = () => {
    navigate(`/video/${videoId}`);
  };

  const handleChannelClick = (e) => {
    e.stopPropagation(); // 카드 클릭 이벤트 차단
    navigate(`/@${channelName}`);
  };

  const handleCardMouseDown = () => {
    setIsPressed(true);
  };

  const handleCardMouseUp = () => {
    setIsPressed(false);
  };

  return (
    <div
      className="relative mx-2 mb-8 cursor-pointer"
      onClick={handleVideoClick}
      onMouseDown={handleCardMouseDown}
      onMouseUp={handleCardMouseUp}
    >
      <div className="w-full min-w-0 max-w-[700px]">
        <div className="relative flex flex-col">
          <VideoThumbnail thumbnail={thumbnail} />
          <VideoCardMeta
            channelImage={channelImage}
            title={title}
            channelName={channelName}
            views={views}
            publishedAt={publishedAt}
            handleChannelClick={handleChannelClick}
          />
        </div>
      </div>
      <div className="pointer-events-none absolute -inset-1">
        <div
          className={`videoCardOverlay ${
            isPressed ? "opacity-10" : "opacity-0"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default VideoCard;
