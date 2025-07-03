import { useNavigate, useParams } from "react-router-dom";

import mockVideos from "../data/mockVideos";

import ChannelInfo from "../components/VideoDetail/ChannelInfo";
import Description from "../components/VideoDetail/Description";
import RelatedVideos from "../components/VideoDetail/RelatedVideos";

const VideoDetail = () => {
  // VideoDetail에서 URL param을 통해 mockVideos에서 해당 video 찾기
  const { id } = useParams();
  const video = mockVideos.find((v) => v.videoId === Number(id));

  const navigate = useNavigate();
  const handleChannelClick = () => {
    navigate(`/@${video.channelName}`);
  };

  const {
    title,
    thumbnail,
    channelName,
    channelImage,
    views,
    publishedAt,
    description,
  } = video;

  // Related video 목록 (자기 자신 제외)
  const relatedVideos = mockVideos.filter((v) => v.videoId !== Number(id));

  return (
    <div className="mx-auto ml-6 mt-14 flex flex-col lg:flex-row">
      <div className="flex-1 pr-6 pt-6">
        <div className="aspect-video min-h-[320px] min-w-[640px] overflow-hidden rounded-lg">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/C-hQpbS5gHI?si=aPtc1QWE5sgLTjda"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="mb-6 mt-3">
          <h1>{title}</h1>
          <ChannelInfo
            channelImage={channelImage}
            channelName={channelName}
            handleChannelClick={handleChannelClick}
          />
          <Description
            views={views}
            publishedAt={publishedAt}
            description={description}
          />
        </div>
      </div>

      {/* 추천영상 */}
      <div className="pr-6 pt-6">
        <RelatedVideos videos={relatedVideos} />
      </div>
    </div>
  );
};

export default VideoDetail;
