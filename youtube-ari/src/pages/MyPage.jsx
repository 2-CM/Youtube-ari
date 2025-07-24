import VideoCard from "../components/VideoGrid/VideoCard";
import mockVideos from "../data/mockVideos";

import {
  ChevronRight,
  ChevronLeft,
  LogOut,
  UserCircle,
  TvMinimalPlay,
} from "lucide-react";

import { useAuthContext } from "../../hooks/useAuthContext";

const MyPage = () => {
  const historyVideos = mockVideos.slice(0, 4);
  const { currentUser, login, logout } = useAuthContext();

  if (!currentUser) {
    return (
      <div className="ml-[72px] flex flex-col items-center justify-center px-6 pt-32">
        <TvMinimalPlay strokeWidth={1} className="h-32 w-32" />
        <p className="mb-4 mt-10 text-center text-xl font-semibold">
          이 페이지는 로그인 후 이용할 수 있습니다.
        </p>
        <p className="text-md pb-10 text-ytGray-90 dark:text-ytGray-20">
          나만의 시청 기록을 확인하려면 로그인하세요.
        </p>

        <button onClick={login} className="signInBtn">
          <UserCircle strokeWidth={1.25} className="-ml-2 mr-2 h-6 w-6" />
          <span className="font-medium">Sign in</span>
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="ml-[72px] px-6 pt-14">
        {/* 사용자 프로필 영역 */}
        <div className="flex pt-3">
          <div className="mr-3 flex-shrink-0 items-center">
            <div className="avatarImageWrapper">
              <img
                src={`${currentUser.photoURL}?sz=100`}
                alt="Avatar Image"
                className="h-32 w-32"
              />
            </div>
          </div>
          <div className="flex cursor-pointer flex-col justify-between">
            <div className="text-4xl font-bold">{currentUser.displayName}</div>
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
