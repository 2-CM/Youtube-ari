import { useEffect, useState } from "react";
import { getPopularVideos } from "../../api/youtube";
import VideoCard from "./VideoCard";

const VideoGrid = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getPopularVideos(); // API 호출
        const transformed = data.map((item) => ({
          videoId: item.id,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url,
          channelName: item.snippet.channelTitle,
          views: item.statistics.viewCount,
          publishedAt: new Date(item.snippet.publishedAt).toLocaleDateString(),
          channelImage: "", // 이후 채널 이미지 추가
        }));
        setVideos(transformed);
      } catch (error) {
        console.error("Failed to fetch videos", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="ml-[72px] mt-14">
      <div className="mx-4 flex justify-center">
        <div className="videoGridCols">
          {videos.map((video) => (
            <VideoCard
              key={video.videoId}
              videoId={video.videoId}
              title={video.title}
              thumbnail={video.thumbnail}
              channelImage={video.channelImage}
              channelName={video.channelName}
              views={video.views}
              publishedAt={video.publishedAt}
              mode="videoGrid"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGrid;
