import ChannelInfo from "../components/VideoDetail/ChannelInfo";
import Description from "../components/VideoDetail/Description";
import RelatedVideos from "../components/VideoDetail/RelatedVideos";
import { useParams } from "react-router-dom";

const VideoDetail = () => {
  const { id } = useParams();

  return (
    <div className="mt-14">
      <h1>Video Detail Page - Video ID: {id}</h1>
      <div>Video</div>
      <ChannelInfo />
      <Description />
      <RelatedVideos />
    </div>
  );
};

export default VideoDetail;
