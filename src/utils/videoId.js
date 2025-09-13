export function sanitizeVideoId(raw) {
  if (!raw) return null;
  // 정확히 11자라면 통과
  if (/^[a-zA-Z0-9_-]{11}$/.test(raw)) return raw;
  // 경로/쿼리에서 11자 토큰 추출
  const m = raw.match(/([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : null;
}
