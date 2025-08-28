import Avatar from "../common/Avatar";
import useAuthContext from "../../hooks/useAuthContext";
import { useWatchHistory } from "../../hooks/useWatchHistory";
import { LogOut } from "lucide-react";
import VideoGridContent from "../VideoGrid/VideoGridContent";

const LoggedInMyPage = ({ currentUser }) => {
  const { logout } = useAuthContext();
  const { visible: historyItems, clear } = useWatchHistory({
    uid: currentUser?.uid,
  }); // 최대 12개만 반환

  const handleClearAll = () => {
    if (historyItems.length === 0) return;
    if (window.confirm("시청 기록을 모두 삭제할까요?")) {
      clear(); // 로컬스토리지 비우고 state 갱신
    }
  };

  // 히스토리 포맷 -> VideoGrid에서 쓰는 포맷으로 변환
  const videos = historyItems.map((it) => ({
    videoId: it.id,
    channelId: it.channelId ?? null,
    title: it.title,
    thumbnail: it.thumb,
    channelImage: it.channelImage,
    channelName: it.channelTitle,
    views: it.views,
    publishedAt: it.publishedAt,
    description: "",
  }));

  return (
    <>
      <div className="w-full px-6 pl-[72px] pt-14">
        {/* 사용자 프로필 영역 */}
        <div className="flex pt-3">
          <div className="mr-3 flex-shrink-0 items-center">
            <div className="avatarImageWrapper">
              <Avatar src={currentUser.photoURL} className="h-32 w-32" />
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
        <div className="mb-12 w-full pt-10">
          <div className="mb-4 flex w-full flex-wrap items-center justify-between gap-y-2">
            <span className="ml-2 text-3xl font-extrabold">History</span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleClearAll}
                className="myPageBtn-common px-4 text-sm font-medium"
              >
                Clear all
              </button>
            </div>
          </div>

          {/* 비었을 때 */}
          {videos.length === 0 ? (
            <div className="ml-2 flex h-40 items-center justify-center rounded-lg border text-sm text-ytGray-70 dark:text-ytGray-20">
              아직 시청 기록이 없어요.
            </div>
          ) : (
            <VideoGridContent videos={videos} />
          )}
        </div>
      </div>
    </>
  );
};

export default LoggedInMyPage;
