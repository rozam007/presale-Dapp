import React from "react";
import ClaimContent from "./ClaimContent";
import ClaimCard from "./ClaimDetailCard";
import RefundContent from "./RefundContent";
import RefundDetailCard from "./RefundDetailCard";
import SectionPartition from "../Common/SectionPartition";

const Claim = () => {
  return (
    <div>
      {/* Claim Section  */}
      <div className="container mx-auto my-10 p-4">
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-10">
          <ClaimContent />
          <ClaimCard />
        </div>
      </div>

      <div className="hidden md:block">
        <SectionPartition />
      </div>

      {/* Refund Section  */}
      <div className="container mx-auto my-10 p-4">
        <div className="flex flex-col lg:flex-row justify-evenly items-start lg:items-center gap-10">
          <RefundDetailCard />
          <RefundContent />
        </div>
      </div>
    </div>
  );
};

export default Claim;
