import { useState, useRef, useEffect } from "react";

const MAX_VISIBLE_LINES = 2;

const Description = ({ views, publishedAt, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState("none");
  const [shouldShowToggle, setShouldShowToggle] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const el = textRef.current;
      const lineHeight = parseFloat(getComputedStyle(el).lineHeight || "20");
      const collapsedHeight = lineHeight * MAX_VISIBLE_LINES;

      if (!isExpanded) {
        setMaxHeight(`${collapsedHeight}px`);
      } else {
        setMaxHeight("none");
      }

      // "더보기" 버튼을 보여줄지 여부
      setShouldShowToggle(el.scrollHeight > collapsedHeight + 1);
    }
  }, [isExpanded, description]);

  if (!description) return null; // description이 없으면 아무것도 렌더링하지 않음

  return (
    <div className="mt-3 rounded-xl bg-ytGray-30 text-sm font-normal">
      <div className="p-3">
        {/* 조회수, 날짜 */}
        {(views || publishedAt) && (
          <div className="mb-2 flex font-medium">
            {views && <span>{views}</span>}
            {publishedAt && (
              <span className="before:mx-1 before:content-['•']">
                {publishedAt}
              </span>
            )}
          </div>
        )}

        {/* 본문 설명 */}
        <div
          ref={textRef}
          className="overflow-hidden whitespace-pre-line transition-all duration-300"
          style={{ maxHeight }}
        >
          {description}
        </div>

        {/* 더보기/간략히 버튼 */}
        {shouldShowToggle && (
          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            className="mt-2 rounded font-medium transition-colors active:bg-black/20"
          >
            {isExpanded ? "Show less" : "...more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Description;
