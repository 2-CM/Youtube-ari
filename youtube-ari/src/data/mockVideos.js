import thumbnail3 from "../assets/mock_thumnail_3.png";
import channelImage3 from "../assets/mock_channelImage_3.jpg";

const mockVideos = Array.from({ length: 15 }, (_, i) => ({
  videoId: i + 1,
  title: `아, 𝐗𝐗 하기 싫다: 그래도 해야할때 틀어두는 플리 ${i + 1}`,
  thumbnail: thumbnail3,
  channelImage: channelImage3,
  channelName: `Channel${i + 1}`,
  views: `${(Math.random() * 900 + 100).toFixed(0)}K views`,
  publishedAt: `${Math.floor(Math.random() * 11) + 1} months ago`,
}));

export default mockVideos;
