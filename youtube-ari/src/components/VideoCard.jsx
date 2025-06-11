import { EllipsisVertical } from "lucide-react";

const VideoCard = ({
  title,
  thumbnail,
  channelImage,
  channelName,
  views,
  publishedAt,
}) => {
  return (
    <div className="relative mx-2 mb-8">
      <div className="w-full min-w-[327px] max-w-[700px]">
        <div className="relative flex flex-col">
          <div className="relative w-full">
            <a href="/" className="block overflow-hidden rounded-xl">
              <img
                src={thumbnail}
                alt="Video Thumnail"
                className="h-full w-full object-cover"
              />
            </a>
          </div>
          <div className="relative flex flex-row">
            <div className="mr-3 mt-3 h-9">
              <a href="/">
                <div className="flex h-9 w-9 justify-center">
                  <img
                    src={channelImage}
                    alt="Channel Image"
                    className="rounded-full object-cover"
                  />
                </div>
              </a>
            </div>
            <div className="overflow-x-hidden pr-6">
              <h3 className="mb-1 mt-3">
                <a href="/" className="block">
                  <div className="line-clamp-2 max-h-11 text-ellipsis whitespace-normal">
                    {title}
                  </div>
                </a>
              </h3>
              <div className="flex flex-col text-left text-sm text-ytGray-90">
                <div className="flex flex-wrap items-center">
                  <a href="/" className="hover:text-black">
                    {channelName}
                  </a>
                </div>
                <div className="line-clamp-2 flex flex-row text-ellipsis">
                  <span>{views}</span>
                  <span className="before:mx-1 before:content-['•']">
                    {publishedAt}
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute -right-3 top-1">
              <button className="h-10 w-10">
                <div className="flex items-center justify-center">
                  <EllipsisVertical
                    strokeWidth={1}
                    fill="black"
                    alt="videoCard Menu"
                    className="h-6 w-6"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
