import SideBar from "../components/SideBar/SideBar";
import VideoCard from "../components/VideoGrid/VideoCard";
import mockVideos from "../data/mockVideos";

import { ChevronRight, ChevronLeft, LogOut } from "lucide-react";

const MyPage = ({ user, logout }) => {
  if (!user) {
    return <p className="pt-14">로그인 후 접근 가능합니다.</p>;
  }

  const historyVideos = mockVideos.slice(0, 4);

  return (
    <>
      <SideBar />
      <div className="ml-[72px] px-6 pt-14">
        {/* 사용자 프로필 영역 */}
        <div className="flex pt-3">
          <div className="mr-3 flex-shrink-0 items-center">
            <div className="avatarImageWrapper">
              <img
                src={`${user.photoURL}?sz=100`}
                alt="Avatar Image"
                className="h-32 w-32"
              />
            </div>
          </div>
          <div className="flex cursor-pointer flex-col justify-between">
            <div className="text-4xl font-bold">{user.displayName}</div>
            <div className="text-sm text-ytGray-90 dark:text-ytGray-20">
              Create a channel
            </div>
            <button onClick={logout} className="logoutBtn">
              <LogOut className="mr-2 h-4 w-4" />
              <span className="text-sm font-medium">Sign Out</span>
            </button>
          </div>
        </div>

        {/* history 영역 */}
        <div className="mb-12 w-full pt-6">
          <div className="mb-4 flex w-full justify-between">
            <h1 className="ml-2">History</h1>
            <div className="flex items-center gap-2">
              <button className="myPageBtn-common px-4 text-sm font-medium">
                View all
              </button>
              <button className="myPageBtn-common w-9">
                <ChevronLeft strokeWidth={1} />
              </button>
              <button className="myPageBtn-common w-9">
                <ChevronRight strokeWidth={1} />
              </button>
            </div>
          </div>
          <div className="flex w-full gap-x-4 pt-1">
            {historyVideos.map((video) => (
              <div key={video.videoId} className="w-64 flex-shrink-0">
                <VideoCard
                  videoId={video.videoId}
                  title={video.title}
                  thumbnail={video.thumbnail}
                  channelImage={video.channelImage}
                  channelName={video.channelName}
                  views={video.views}
                  publishedAt={video.publishedAt}
                  mode="relatedVideos"
                  variant="grid"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPage;
