// 시청 기록 로컬 저장 유틸 (LocalStorage)
// 스키마: { id, title, channelTitle, thumb, channelImage, views, publishedAt, watchedAt }

const KEY = (uid) => `ytclone:history:${uid || "guest"}`;
const MAX_SAVE = 50; // 저장 상한

/* 전체 로드(최신순 정렬) */
export function loadHistory(uid) {
  try {
    const raw = localStorage.getItem(KEY(uid));
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr)
      ? arr.sort((a, b) => (b.watchedAt || 0) - (a.watchedAt || 0))
      : [];
  } catch {
    return [];
  }
}

/* 전체 저장 */
export function saveHistory(uid, items) {
  localStorage.setItem(KEY(uid), JSON.stringify(items.slice(0, MAX_SAVE)));
}

/* 영상 클릭 시 기록 추가(최상단 이동) */
export function upsertHistory(uid, entry) {
  const list = loadHistory(uid);
  const map = new Map(list.map((it) => [it.id, it]));
  map.set(entry.id, { ...map.get(entry.id), ...entry, watchedAt: Date.now() });
  const next = Array.from(map.values()).sort(
    (a, b) => b.watchedAt - a.watchedAt,
  );
  saveHistory(uid, next);
  return next;
}

export function patchHistory(uid, videoId, partial) {
  const list = loadHistory(uid);
  const idx = list.findIndex((it) => it.id === videoId);
  if (idx === -1) return list;
  list[idx] = { ...list[idx], ...partial };
  saveHistory(uid, list);
  return list;
}

export function clearHistory(uid) {
  localStorage.setItem(KEY(uid), JSON.stringify([]));
  return [];
}
