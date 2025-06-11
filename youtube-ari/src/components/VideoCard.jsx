import { EllipsisVertical } from "lucide-react";
import thumnail from "../assets/mock_thumnail.png";
import channelImage from "../assets/mock_channelImage.jpg";

const VideoCard = () => {
  return (
    <div className="relative mx-2 mb-8">
      <div className="w-full min-w-[327px] max-w-[700px]">
        <div className="relative flex flex-col">
          <div className="relative w-full">
            <a href="/" className="block overflow-hidden rounded-xl">
              <img
                src={thumnail}
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
                    𝒑𝒍𝒂𝒚𝒍𝒊𝒔𝒕 이게 진짜 노동요지! 시원하게 그루브 한 잔해🍸😎 |
                    쌈뽕한 그루브 & 베이스라인 팝송 플리
                  </div>
                </a>
              </h3>
              <div className="flex flex-col text-left text-sm text-ytGray-90">
                <div className="flex flex-wrap items-center">
                  <a href="/" className="hover:text-black">
                    모카냥 MoccaCat
                  </a>
                </div>
                <div className="line-clamp-2 flex flex-row text-ellipsis">
                  <span>29K views </span>
                  <span className="before:mx-1 before:content-['•']">
                    13 days ago
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
