import { House, UserCircle } from "lucide-react";

import SideBarItem from "./SideBarItem";

const SideBar = () => {
  return (
    <div className="fixed bottom-0 left-0 top-14 z-[2028] box-border inline-block w-[72px] px-1">
      <div className="mt-1 flex flex-col">
        <SideBarItem to="/" title="Home" icon={House} />
        <SideBarItem to="/you" title="You" icon={UserCircle} />
      </div>
    </div>
  );
};

export default SideBar;
