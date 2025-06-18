import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EllipsisVertical } from "lucide-react";

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
          <div className="relative w-full">
            <div className="block aspect-video overflow-hidden rounded-xl">
              <img
                src={thumbnail}
                alt="Video Thumbnail"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="relative flex flex-row">
            <div className="mr-3 mt-3 h-9">
              <div
                onClick={handleChannelClick}
                className="flex h-9 w-9 justify-center"
              >
                <img
                  src={channelImage}
                  alt="Channel Image"
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <div className="overflow-x-hidden pr-6">
              <h3 className="mb-1 mt-3">
                <div
                  title={title}
                  className="line-clamp-2 max-h-11 text-ellipsis whitespace-normal"
                >
                  {title}
                </div>
              </h3>
              <div className="flex flex-col text-left text-sm text-ytGray-90">
                <div className="flex flex-wrap items-center">
                  <div
                    onClick={handleChannelClick}
                    title={channelName}
                    className="group hover:text-black"
                  >
                    {channelName}
                    <div
                      role="tooltip"
                      aria-label="tooltip"
                      className="tooltip -top-1 left-8 group-hover:opacity-90"
                    >
                      {channelName}
                    </div>
                  </div>
                </div>
                <div className="line-clamp-2 flex flex-row text-ellipsis">
                  <span>{views}</span>
                  <span className="before:mx-1 before:content-['•']">
                    {publishedAt}
                  </span>
                </div>
              </div>
            </div>
            <div
              className="absolute -right-3 top-1"
              onClick={(e) => e.stopPropagation()} // 카드 클릭 이벤트 차단
            >
              <button
                className="ripple-effect h-10 w-10 rounded-full"
                onMouseDown={(e) => {
                  e.stopPropagation(); // 이벤트 버블링 사전 차단
                }}
              >
                <div className="flex items-center justify-center">
                  <EllipsisVertical
                    strokeWidth={1}
                    fill="black"
                    aria-label="videoCard Menu"
                    className="h-6 w-6"
                  />
                </div>
              </button>
            </div>
          </div>
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
