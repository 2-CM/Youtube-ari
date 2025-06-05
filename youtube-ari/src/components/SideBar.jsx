import { House, UserCircle } from "lucide-react";

const SideBar = () => {
  return (
    <div className="fixed bottom-0 left-0 top-14 z-[2028] box-border inline-block w-[72px] px-1">
      <div className="mt-1 flex flex-col">
        <div className="relative inline-block rounded-lg bg-transparent hover:bg-[#f2f2f2] active:bg-[#d9d9d9]">
          <Link
            to="/"
            title="Home"
            className="flex w-16 flex-col items-center justify-center py-4 outline-none"
          >
            <div className="mb-[6px]">
              <House alt="Home Page" strokeWidth={1.5} className="h-6 w-6" />
            </div>
            <span className="block max-w-full overflow-ellipsis whitespace-nowrap text-[10px] font-normal">
              Home
            </span>
          </Link>
        </div>
        <div className="relative inline-block rounded-lg bg-transparent hover:bg-[#f2f2f2] active:bg-[#d9d9d9]">
          <Link
            to="/"
            title="You"
            className="flex w-16 flex-col items-center justify-center pb-[14px] pt-4 outline-none"
          >
            <div className="mb-2">
              <UserCircle
                alt="User Page"
                strokeWidth={1.5}
                className="h-6 w-6"
              />
            </div>
            <span className="block max-w-full overflow-ellipsis whitespace-nowrap text-[10px] font-normal">
              You
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
