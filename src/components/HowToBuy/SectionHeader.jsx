import TitleColorBar from "../Common/TitleColorBar";
import React from "react";

const SectionHeader = () => {
  return (
    <>
      {/* Heading Title  */}
      <div className="flex flex-col items-center text-blackColor">
        <div className="relative">
          <span className="text-[40px] leading-[46px] md:text-[80px] md:leading-[86px] font-bold relative z-10">
            How to Buy
          </span>

          <TitleColorBar
            color="bg-teal-300"
            width="w-24"
            height="h-4"
            top="top-6"
            right="-right-4"
            mdTop="md:top-16"
            mdRight="md:right-0"
          />
        </div>
        <span className="text-[15px] md:text-xl font-normal text-center">
          Follow these 2 simple steps to buy presale tokens.
        </span>
      </div>
    </>
  );
};

export default SectionHeader;
