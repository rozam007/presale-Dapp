import React from "react";

const ClaimContent = () => {
  return (
    <div>
      <h1 className="text-[45px] sm:text-[50px] md:text-[90px] leading-[54px] md:leading-[96px] traking-[-2px] text-whiteColor max-w-[700px] text-center md:text-left">
        <span className="text-themeColor">Claim </span>
        Tokens
      </h1>
      <h2 className="text-xl traking-[-2px] mt-6 font-normal text-light-white max-w-[700px] text-center md:text-left">
        Congratulations! Your contribution has been successfully recorded. You are now eligible to claim your tokens. Click the 'Claim Tokens' button to finalize your transaction and receive your allocated tokens directly to your wallet. Don't miss out—claim your tokens now!"
      </h2>
    </div>
  );
};

export default ClaimContent;
