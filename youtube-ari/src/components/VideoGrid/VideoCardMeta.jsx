import { EllipsisVertical } from "lucide-react";

const VideoCardMeta = ({
  channelImage,
  title,
  channelName,
  views,
  publishedAt,
  handleChannelClick,
  mode = "videoGrid",
}) => {
  return (
    <div className="relative flex flex-row">
      {/* 채널 이미지 */}
      {/* 채널 이미지가 있는 경우에만 렌더링 */}
      {channelImage && (
        <div
          onClick={handleChannelClick}
          className="mr-3 mt-3 flex h-9 w-9 shrink-0 justify-center"
        >
          <img
            src={channelImage}
            alt="Channel Image"
            className="h-9 w-9 rounded-full object-cover"
          />
        </div>
      )}

      {/* 제목 및 채널 정보 */}
      <div className="cursor-pointer overflow-x-hidden pr-6">
        <h3
          className={`mb-1 ${mode === "relatedVideos" ? "text-sm" : "mt-3 text-base"}`}
        >
          <div
            title={title}
            className="line-clamp-2 max-h-11 text-ellipsis whitespace-normal"
          >
            {title}
          </div>
        </h3>
        <div
          className={`flex ${
            mode === "relatedVideos"
              ? "flex-row text-xs lg:flex-col"
              : "flex-col text-sm"
          } text-left text-ytGray-90`}
        >
          <div>
            <span
              title={channelName}
              onClick={handleChannelClick}
              className="channelNameText"
            >
              {channelName}
              <div
                role="tooltip"
                aria-label="tooltip"
                className="tooltip -top-1"
              >
                {channelName}
              </div>
            </span>
          </div>
          <div className="line-clamp-1 text-ellipsis whitespace-nowrap">
            {mode === "relatedVideos" && (
              <span className="mx-1 inline lg:hidden">•</span>
            )}
            <span>{views}</span>
            <span className="dot-separator">{publishedAt}</span>
          </div>
        </div>
      </div>

      {/* 우측 메뉴 버튼 */}
      <div>
        <button
          className={`ripple-effect absolute rounded-full ${
            mode === "relatedVideos"
              ? "right-0 h-6 w-6"
              : "-right-3 top-1 h-10 w-10"
          }`}
          onClick={(e) => {
            e.stopPropagation(); // 카드 클릭 이벤트 차단
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
  );
};

export default VideoCardMeta;
