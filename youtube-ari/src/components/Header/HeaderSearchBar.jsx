import { Search, Mic } from "lucide-react";

const HeaderSearchBar = () => {
  return (
    <div className="flex flex-shrink flex-grow-0 basis-[732px] flex-row items-center">
      <div className="relative ml-10 flex h-10 flex-1 px-1">
        <div className="searchContainer">
          <form action="/result" className="flex flex-1">
            <input
              name="search_query"
              type="text"
              role="combobox"
              placeholder="Search"
              autoComplete="off"
              autoCorrect="off"
              aria-expanded="false"
              aria-controls="autocomplete-list"
              className="peer my-0 w-full py-px text-base font-normal"
            />
            <div className="absolute left-4 top-1/2 hidden translate-y-[-50%] peer-focus:block">
              <Search
                strokeWidth={1}
                alt="Search Icon"
                className="pointer-events-none h-5 w-5"
              />
            </div>
          </form>
        </div>
        <button
          aria-label="Search Btn"
          title="Search"
          className="w-16 rounded-r-[40px] border border-[#d3d3d3] bg-[#f8f8f8] hover:border-[#c6c6c6] hover:bg-[#f0f0f0]"
        >
          <Search
            alt="Search Btn"
            className="inline-flex h-6 w-6"
            strokeWidth={1}
          />
        </button>
      </div>
      <div className="group relative ml-3 rounded-full bg-[#f2f2f2] hover:bg-[#d9d9d9]">
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
