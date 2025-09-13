import { useVideoNavigation } from "../../hooks/useVideoNavigation";

import VideoThumbnail from "./VideoThumbnail";
import VideoCardMeta from "./VideoCardMeta";

const VideoCard = ({
  videoId,
  channelId,
  title,
  thumbnail,
  channelImage,
  channelName,
  views,
  publishedAt,
  mode,
  variant,
  description,
}) => {
  const { handleVideoClick } = useVideoNavigation();

  const onCardClick = () => {
    handleVideoClick({
      videoId,
      channelId,
      title,
      thumbnail,
      channelImage,
      channelName,
      views,
      publishedAt,
      description,
    });
  };

  const handleChannelClick = (e) => {
    e.stopPropagation(); // 카드 클릭 이벤트 차단
    //navigate(`/@${channelName}`);
  };

  return (
    <div
      className="group relative mx-2 mb-8 cursor-pointer"
      onClick={onCardClick}
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
            description={description}
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
