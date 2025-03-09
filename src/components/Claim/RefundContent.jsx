import React from "react";

const RefundContent = () => {
  return (
    <div className="">
      <h1 className="text-[45px] sm:text-[50px] md:text-[90px] leading-[54px] md:leading-[96px] traking-[-2px] text-whiteColor w-full lg:max-w-[750px] text-center md:text-left">
        <span className="text-themeColor">Refund </span>
        Tokens
      </h1>
      <h2 className="text-xl traking-[-2px] mt-6 font-normal text-light-white w-full lg:max-w-[750px] text-center md:text-left">
        The presale has been canceled as the hard cap was not met. You are now eligible for a refund. Click the 'Refund' button below to reclaim your contributed funds securely.
      </h2>
    </div>
  );
};

export default RefundContent;
