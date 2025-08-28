import { useEffect, useState, useMemo, useCallback } from "react";
import {
  loadHistory,
  upsertHistory,
  clearHistory as clearAll,
} from "../storage/historyLocal";

const VISIBLE_MAX = 12; // 노출 상한

export function useWatchHistory({ uid }) {
  const [items, setItems] = useState([]);

  // uid(guest/사용자) 변경 시 로드
  useEffect(() => {
    setItems(loadHistory(uid));
  }, [uid]);

  // 화면에는 최대 12개만
  const visible = useMemo(() => items.slice(0, VISIBLE_MAX), [items]);

  // 영상 클릭 시 호출
  const addByClick = useCallback(
    (entry) => {
      const next = upsertHistory(uid, entry);
      setItems(next);
    },
    [uid],
  );

  const clear = useCallback(() => {
    const next = clearAll(uid);
    setItems(next);
  }, [uid]);

  return { items, visible, addByClick, clear };
}
