import Skeleton from "react-loading-skeleton";

const VideoCardSkeleton = () => {
  return (
    <div>
      {/* 썸네일 스켈레톤 */}
      <div className="block aspect-video overflow-hidden rounded-lg">
        <Skeleton className="h-full w-full" />
      </div>

      {/* 메타 정보 스켈레톤 */}
      <div className="relative mt-3 flex w-full">
        {/* 채널 이미지 */}
        <div className="mr-3 shrink-0">
          <Skeleton circle width={36} height={36} />
        </div>

        {/* 제목 및 채널 정보 */}
        <div className="w-full pr-6">
          <Skeleton />
          <Skeleton width="50%" className="mt-2" />
          <Skeleton width="80%" />
        </div>
      </div>
    </div>
  );
};

export default VideoCardSkeleton;
