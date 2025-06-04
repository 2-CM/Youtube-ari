const SideBar = () => {
  return (
    <div className="fixed bottom-0 left-0 top-14 z-[2028] box-border inline-block w-[72px] px-1">
      <div className="mt-1 flex flex-col">
        <div className="relative inline-block rounded-lg bg-transparent hover:bg-[#f2f2f2] active:bg-[#d9d9d9]">
          <a
            href="/"
            title="Home"
            className="flex w-16 flex-col items-center justify-center py-4 outline-none"
          >
            <div className="mb-[6px]">
              <img src="" alt="" className="h-6 w-6" />
            </div>
            <span className="block max-w-full overflow-ellipsis whitespace-nowrap text-[10px] font-normal">
              Home
            </span>
          </a>
        </div>
        <div className="relative inline-block rounded-lg bg-transparent hover:bg-[#f2f2f2] active:bg-[#d9d9d9]">
          <a
            href="/"
            title="You"
            className="flex w-16 flex-col items-center justify-center pb-[14px] pt-4 outline-none"
          >
            <div className="mb-2">
              <img src="" alt="" className="h-6 w-6" />
            </div>
            <span className="block max-w-full overflow-ellipsis whitespace-nowrap text-[10px] font-normal">
              You
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
