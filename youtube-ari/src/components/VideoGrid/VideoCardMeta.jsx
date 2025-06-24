import { EllipsisVertical } from "lucide-react";

const VideoCardMeta = ({
  channelImage,
  title,
  channelName,
  views,
  publishedAt,
  handleChannelClick,
}) => {
  return (
    <div className="relative flex flex-row">
      {/* 채널 이미지 */}
      {/* 채널 이미지가 있는 경우에만 렌더링 */}
      {channelImage && (
        <div
          onClick={handleChannelClick}
          className="mr-3 mt-3 flex h-9 w-9 justify-center"
        >
          <img
            src={channelImage}
            alt="Channel Image"
            className="rounded-full object-cover"
          />
        </div>
      )}

      {/* 제목 및 채널 정보 */}
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
          <div className="line-clamp-2 flex flex-row text-ellipsis">
            <span>{views}</span>
            <span className="before:mx-1 before:content-['•']">
              {publishedAt}
            </span>
          </div>
        </div>
      </div>

      {/* 우측 메뉴 버튼 */}
      <div
        className="absolute -right-3 top-1"
        onClick={(e) => {
          e.stopPropagation(); // 카드 클릭 이벤트 차단
        }}
      >
        <button
          className="ripple-effect h-10 w-10 rounded-full"
          onMouseDown={(e) => e.stopPropagation()} // 이벤트 버블링 사전 차단
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
