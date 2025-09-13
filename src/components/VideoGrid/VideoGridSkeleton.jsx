import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import VideoCardSkeleton from "./VideoCardSkeleton";

const VideoGridSkeleton = ({ count = 12 }) => {
  return (
    <SkeletonTheme>
      <div className="mx-4 flex justify-center">
        <div className="videoGridCols">
          {[...Array(count)].map((_, index) => (
            <div key={index} className="mx-2 mb-8">
              <VideoCardSkeleton />
            </div>
          ))}
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default VideoGridSkeleton;
