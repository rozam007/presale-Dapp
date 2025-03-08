import React from "react";

const ClaimContent = () => {
  return (
    <div>
      <h1 className="text-[45px] sm:text-[50px] md:text-[90px] leading-[54px] md:leading-[96px] traking-[-2px] text-whiteColor max-w-[700px] text-center md:text-left">
        Our <span className="text-themeColor">Claim </span>
        Policy
      </h1>
      <h2 className="text-xl traking-[-2px] mt-6 font-normal text-light-white max-w-[700px] text-center md:text-left">
        All coin purchases are final and non-refundable once the transaction is
        completed. We encourage users to carefully review their order before
        confirming payment, as refunds cannot be issued after the transaction is
        processed. We guarantee the successful delivery of purchased coins to
        your account. If you encounter any issues with your order, you must
        contact our support team within 24 hours of purchase so we can assist
        you in resolving the matter. If you notice any unauthorized transactions
        on your account, it is your responsibility to report them immediately.
      </h2>
    </div>
  );
};

export default ClaimContent;
