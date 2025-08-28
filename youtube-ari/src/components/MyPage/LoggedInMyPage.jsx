import VideoCard from "../VideoGrid/VideoCard";
import Avatar from "../common/Avatar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import useAuthContext from "../../hooks/useAuthContext";
import { useWatchHistory } from "../../hooks/useWatchHistory";
import { ChevronRight, ChevronLeft, LogOut } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

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

  return (
    <>
      <div className="w-full max-w-7xl px-6 pl-[72px] pt-14">
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
        <div className="mb-12 w-full pt-6">
          <div className="mb-4 flex w-full flex-wrap items-center justify-between gap-y-2">
            <h1 className="ml-2">History</h1>
            <div className="flex items-center gap-2">
              <button
                onClick={handleClearAll}
                className="myPageBtn-common px-4 text-sm font-medium"
              >
                Clear all
              </button>
              <button
                id="historyPrev"
                className="myPageBtn-common w-9"
                aria-label="이전"
              >
                <ChevronLeft strokeWidth={1} />
              </button>
              <button
                id="historyNext"
                className="myPageBtn-common w-9"
                aria-label="다음"
              >
                <ChevronRight strokeWidth={1} />
              </button>
            </div>
          </div>

          {/* 비었을 때 */}
          {historyItems.length === 0 ? (
            <div className="ml-2 flex h-40 items-center justify-center rounded-lg border text-sm text-ytGray-70 dark:text-ytGray-20">
              아직 시청 기록이 없어요.
            </div>
          ) : (
            <div className="relative w-full overflow-hidden">
              <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={12}
                slidesPerView={4}
                slidesPerGroup={4}
                speed={300}
                navigation={{ nextEl: "#historyNext", prevEl: "#historyPrev" }}
                allowTouchMove
                className="w-full"
                breakpoints={{
                  1280: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 12,
                  },
                  1024: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 12,
                  },
                  900: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 12,
                  },
                  640: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 12,
                  },
                  0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 12 },
                }}
              >
                {historyItems.map((it) => (
                  <SwiperSlide
                    key={it.id}
                    className="!h-auto min-w-0 overflow-hidden"
                  >
                    <VideoCard
                      videoId={it.id}
                      title={it.title}
                      thumbnail={it.thumb}
                      channelImage={it.channelImage}
                      channelName={it.channelTitle}
                      views={it.views}
                      publishedAt={it.publishedAt}
                      mode="videoGrid"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LoggedInMyPage;
