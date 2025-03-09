import React from "react";
import ClaimContent from "./ClaimContent";
import ClaimCard from "./ClaimDetailCard";
import RefundContent from "./RefundContent";
import RefundDetailCard from "./RefundDetailCard";
import SectionPartition from "../Common/SectionPartition";
import { useActiveAccount, useReadContract } from "thirdweb/react";
import { useGetPresaleContract } from "../../Hooks";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Claim = ({ presaleAddress }) => {
  const contract = useGetPresaleContract(presaleAddress);
   if (!contract) {
      toast.error("Please connect your wallet.");
    }
  const walletAddress = useActiveAccount()

  const {
    data: isRefund,
    error,
    isError,
  } = useReadContract({
    contract,
    method: "isRefund",
  });

  const {
    data: ethContributed
  } = useReadContract({
    contract,
    method: "ethRaised",
    params: [walletAddress]
  });

  const {
    data: isFinished
  } = useReadContract({
    contract,
    method: "isFinish",
  });
  console.log("isRefund: ", isRefund, error, isError);
  console.log('ethRaised: ', ethContributed)
  console.log('isFinished: ', isFinished)

  return (
    <div>
      {/* Claim Section  */}
      {/* {!isRefund && isFinished && ethContributed > 0 ( */}
        <div className="container mx-auto my-10 p-4">
          <div className="flex flex-col md:flex-row justify-evenly items-center gap-10">
            <ClaimContent />
          <ClaimCard ethContributed={ethContributed} presaleAddress={ presaleAddress} />
          </div>
        </div>
      {/* )} */}

      <div className="hidden md:block">
        <SectionPartition />
      </div>

      {/* Refund Section  */}

      {/* {isRefund && ( */}
        <div className="container mx-auto my-10 p-4">
          <div className="flex flex-col lg:flex-row justify-evenly items-start lg:items-center gap-10">
            <RefundDetailCard />
            <RefundContent />
          </div>
        </div>
      {/* )} */}
    </div>
  );
};

export default Claim;
