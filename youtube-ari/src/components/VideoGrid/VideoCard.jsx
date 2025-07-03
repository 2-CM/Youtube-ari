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
  mode,
  variant,
}) => {
  const navigate = useNavigate();

  const handleVideoClick = () => {
    navigate(`/video/${videoId}`);
  };

  const handleChannelClick = (e) => {
    e.stopPropagation(); // 카드 클릭 이벤트 차단
    navigate(`/@${channelName}`);
  };

  return (
    <div
      className="group relative mx-2 mb-8 cursor-pointer"
      onClick={handleVideoClick}
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
            mode={mode}
            variant={variant}
          />
        </div>
      </div>

      <div className="pointer-events-none absolute -inset-1">
        <div className="videoCardOverlay opacity-0 group-hover:opacity-10"></div>
      </div>
    </div>
  );
};

export default VideoCard;
