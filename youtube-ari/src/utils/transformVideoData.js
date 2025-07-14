// 뷰 카운트 포맷팅 함수
export function formatViewCount(count) {
  if (count === undefined || count === null) return "N/A views";
  const num = parseInt(count, 10);

  if (num >= 1000000000) {
    const formatted = (num / 1000000000).toFixed(1);
    return `${formatted.endsWith(".0") ? formatted.slice(0, -2) : formatted}B views`;
  }
  if (num >= 1000000) {
    const formatted = (num / 1000000).toFixed(1);
    return `${formatted.endsWith(".0") ? formatted.slice(0, -2) : formatted}M views`;
  }
  if (num >= 1000) {
    const formatted = (num / 1000).toFixed(1);
    return `${formatted.endsWith(".0") ? formatted.slice(0, -2) : formatted}K views`;
  }
  return `${num} views`;
}

// 시간 포맷팅 함수
export function formatTimeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  let interval = seconds / 31536000;
  if (interval > 1) return `${Math.floor(interval)} years ago`;
  interval = seconds / 2592000;
  if (interval > 1) return `${Math.floor(interval)} months ago`;
  interval = seconds / 86400;
  if (interval > 1) return `${Math.floor(interval)} days ago`;
  interval = seconds / 3600;
  if (interval > 1) return `${Math.floor(interval)} hours ago`;
  interval = seconds / 60;
  if (interval > 1) return `${Math.floor(interval)} minutes ago`;
  return `${Math.floor(seconds)} seconds ago`;
}

// YouTube API의 raw video 객체와 채널 이미지 정보를 받아 UI에 보여줄 데이터 형태로 변환하는 함수
export function transformVideo(video, channelImageUrl) {
  return {
    videoId: video.id,
    channelname: video.snippet.channelTitle,
    title: video.snippet.title,
    views: formatViewCount(video.statistics?.viewCount || 0),
    publishedAt: formatTimeAgo(video.snippet.publishedAt),
    thumbnail: video.snippet.thumbnails.medium.url,
    channelImage: channelImageUrl,
    description: video.snippet.description || "",
  };
}
