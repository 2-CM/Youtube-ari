import search from "../../assets/search-btn.svg";

const HeaderSearchBar = () => {
  return (
    <div className="flex flex-shrink flex-grow-0 basis-[732px] flex-row items-center">
      <div className="relative ml-10 flex h-10 flex-1 px-1">
        <div className="relative ml-8 flex flex-1 cursor-text items-center rounded-[40px_0_0_40px] border border-r-0 border-[#c6c6c6] bg-white pl-4 pr-1 shadow-[inset_0_1px_2px_#eee] focus-within:ml-0 focus-within:border-r focus-within:border-[#1c62b9] focus-within:py-[2px] focus-within:pl-12 focus-within:pr-1 focus-within:shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]">
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
              className="text-4 peer my-0 w-full appearance-none border-none bg-transparent py-px font-normal leading-[22px] antialiased shadow-none outline-none"
            />
            <img
              src={search}
              alt="Search Icon"
              className="pointer-events-none absolute left-4 top-1/2 hidden h-5 w-5 translate-y-[-50%] peer-focus:block"
            />
          </form>
        </div>
        <button
          aria-label="Search"
          title="Search"
          className="m-0 w-16 cursor-pointer justify-center rounded-r-[40px] border border-[#d3d3d3] bg-[#f8f8f8] p-0 text-inherit hover:border-[#c6c6c6] hover:bg-[#f0f0f0]"
        >
          <img
            src={search}
            alt="Search Btn"
            className="inline-flex h-6 w-6 items-center justify-center"
          />
        </button>
        <div></div>
      </div>
    </div>
  );
};

export default HeaderSearchBar;
