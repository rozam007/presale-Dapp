import React from "react";

const SkeletonPresaleCard = () => {
  return (
    <div className="text-sm p-4 rounded-md w-full bg-launchpadBg animate-pulse h-full">
      <div className="flex flex-col">
        {/* Sale Status Skeleton */}
        <div className="h-6 w-24 bg-gray-700 rounded mb-4"></div>

        {/* Soft & Hard Cap Skeleton */}
        <div className="flex justify-between items-center gap-4 mt-0.5">
          <div className="text-sm text-whiteColor whitespace-nowrap text-ellipsis mt-6">
            <div className="h-4 w-20 bg-gray-700 rounded mb-2"></div>
            <div className="flex gap-2 text-lg font-medium">
              <div className="h-6 w-24 bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>

        {/* Progress Bar Skeleton */}
        <div className="mt-4 text-sm">
          <div className="h-4 w-32 bg-gray-700 rounded"></div>
        </div>

        {/* Fundraising Progress Bar Skeleton */}
        <div className="relative w-full mt-8">
          {/* Progress Bar */}
          <div className="bg-[#091F2F] h-[22px] w-full relative flex items-center">
            <div className="bg-gray-700 h-full w-1/2"></div>

            {/* Sold Percentage */}
            <div className="absolute font-medium right-2 opacity-60">
              <div className="h-4 w-12 bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>

        {/* Sale Start & End Skeleton */}
        <div className="flex items-center justify-between mt-4">
          <div className="h-6 w-32 bg-gray-700 rounded"></div>
          <div className="h-8 w-16 bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonPresaleCard;