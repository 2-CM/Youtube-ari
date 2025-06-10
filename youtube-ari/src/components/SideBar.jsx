import { Link } from "react-router-dom";
import { House, UserCircle } from "lucide-react";

const SideBar = () => {
  return (
    <div className="fixed bottom-0 left-0 top-14 z-[2028] box-border inline-block w-[72px] px-1">
      <div className="mt-1 flex flex-col">
        <div className="sidebarIconWrapper">
          <Link to="/" title="Home" className="sidebarIconLink">
            <div className="mb-2">
              <House alt="Home Page" strokeWidth={1.5} className="h-6 w-6" />
            </div>
            <span className="sidebarIconText">Home</span>
          </Link>
        </div>
        <div className="sidebarIconWrapper">
          <Link to="/" title="You" className="sidebarIconLink">
            <div className="mb-2">
              <UserCircle
                alt="User Page"
                strokeWidth={1.5}
                className="h-6 w-6"
              />
            </div>
            <span className="sidebarIconText">You</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
