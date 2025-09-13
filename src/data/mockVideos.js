import thumbnail3 from "../assets/mock_thumbnail_3.png";
import channelImage3 from "../assets/mock_channelImage_3.jpg";

const mockVideos = Array.from({ length: 15 }, (_, i) => ({
  videoId: i + 1,
  title: `아, 𝐗𝐗 하기 싫다: 그래도 해야할때 틀어두는 플리 ${i + 1}`,
  thumbnail: thumbnail3,
  channelImage: channelImage3,
  channelName: `Channel${i + 1}`,
  views: `${(Math.random() * 900 + 100).toFixed(0)}K views`,
  publishedAt: `${Math.floor(Math.random() * 11) + 1} months ago`,
  description: `아, XX...XX 하기 싫다...  (ꐦ ¯−¯ )
  의욕 0%일 때 강제 부스터, 펑키 리듬이 강한 플리를 준비했어요.
  리듬에 맞춰 둠칫둠칫, 이 음악들로 리프레시 되시기를 🫶`,
}));

export default mockVideos;
