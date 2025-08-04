import { Search, Mic, X } from "lucide-react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const HeaderSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태
  const inputRef = useRef(null); // input 요소에 접근하기 위한 ref 생성

  const navigate = useNavigate();
  const handleSearchSubmit = (event) => {
    event.preventDefault(); // 기본 폼 제출 방지

    if (searchTerm.trim()) {
      // 검색어가 비어있지 않은지 확인
      // 검색 결과 페이지로 이동하며 검색어를 쿼리 파라미터로 전달
      navigate(
        `/results?search_query=${encodeURIComponent(searchTerm.trim())}`,
      );
    }
  };

  // X 버튼 클릭 시 검색어 지우는 핸들러
  const handleClearSearch = () => {
    setSearchTerm("");
    // inputRef.current가 존재하면 포커스 설정
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex flex-shrink flex-grow-0 basis-[732px] flex-row items-center">
      <div className="relative ml-10 flex h-10 flex-1 px-1">
        <div className="searchContainer dark:bg-ytGray-90 dark:shadow-none">
          <form onSubmit={handleSearchSubmit} className="flex flex-1">
            <input
              ref={inputRef}
              name="search_query"
              type="text"
              role="combobox"
              placeholder="Search"
              autoComplete="off"
              autoCorrect="off"
              aria-expanded="false"
              aria-controls="autocomplete-list"
              className="peer my-0 w-full py-px text-base font-normal"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // 입력 값 업데이트
            />
            <div className="absolute left-4 top-1/2 hidden translate-y-[-50%] peer-focus:block">
              <Search
                strokeWidth={1}
                alt="Search Icon"
                className="pointer-events-none h-5 w-5"
              />
            </div>
          </form>

          {/* 검색어가 있을 때만 X 버튼 표시 */}
          {searchTerm && (
            <button
              type="button" // 폼 제출을 막기 위해 type="button" 설정
              onClick={handleClearSearch}
              className="absolute right-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full p-1 hover:bg-black/10 focus:outline-none dark:hover:bg-white/20"
              aria-label="Clear search"
            >
              <X
                strokeWidth={0.75}
                className="h-full w-full text-black dark:text-white"
              />
            </button>
          )}
        </div>
        <button
          onClick={handleSearchSubmit}
          aria-label="Search Btn"
          title="Search"
          className="searchBtn"
        >
          <Search
            alt="Search Btn"
            className="inline-flex h-6 w-6"
            strokeWidth={1}
          />
        </button>
      </div>
      <div className="group relative ml-3 rounded-full bg-ytGray-30 hover:bg-ytGray-50">
        <button className="inline-flex h-10 w-10 items-center justify-center rounded-full">
          <Mic strokeWidth={1.25} alt="Voice Search Btn" className="h-6 w-6" />
        </button>
        <div
          role="tooltip"
          aria-label="tooltip"
          className="tooltip -left-14 top-12 group-hover:opacity-90"
        >
          Search with your voice
        </div>
      </div>
    </div>
  );
};

export default HeaderSearchBar;
