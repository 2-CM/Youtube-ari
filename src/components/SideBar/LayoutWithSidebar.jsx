import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

const LayoutWithSidebar = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutWithSidebar;
