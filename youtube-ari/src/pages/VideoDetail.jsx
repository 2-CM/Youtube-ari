import ChannelInfo from "../components/VideoDetail/ChannelInfo";
import Description from "../components/VideoDetail/Description";
import RelatedVideos from "../components/VideoDetail/RelatedVideos";

const VideoDetail = () => {
  return (
    <div className="mx-auto mt-14 flex flex-row">
      <div className="ml-6 flex-1 pr-6 pt-6">
        <div className="aspect-video overflow-hidden rounded-lg">
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
        <ChannelInfo />
        <Description />
      </div>
      <div className="pr-6 pt-6">
        <RelatedVideos />
      </div>
    </div>
  );
};

export default VideoDetail;
