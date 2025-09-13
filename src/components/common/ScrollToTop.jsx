import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 이동 또는 쿼리 변경 시 스크롤 최상단으로 이동
  }, [pathname, search]);

  return null;
};

export default ScrollToTop;
