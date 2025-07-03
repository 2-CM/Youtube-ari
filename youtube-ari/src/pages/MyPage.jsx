import SideBar from "../components/SideBar/SideBar";
import channelImage from "../assets/mock_channelImage_3.jpg";
import { ChevronRight, ChevronLeft, LogOut } from "lucide-react";

const MyPage = () => {
  return (
    <>
      <SideBar />
      <div className="ml-[72px] mt-14 px-6">
        <div className="flex pt-3">
          <div className="mr-3 flex-shrink-0 items-center">
            <div className="avatarImageWrapper">
              <img
                src={channelImage}
                alt="Avatar Image"
                className="h-32 w-32"
              />
            </div>
          </div>
          <div className="flex cursor-pointer flex-col">
            <div className="text-4xl font-bold">최아로인</div>
            <div className="text-sm text-ytGray-90">Create a channel</div>
            <button className="logoutBtn">
              <LogOut className="mr-2 h-4 w-4" />
              <span className="text-sm font-medium">Log Out</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPage;
