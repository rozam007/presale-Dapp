import React, { useEffect } from "react";
import ClaimContent from "./ClaimContent";
import ClaimCard from "./ClaimDetailCard";
import RefundContent from "./RefundContent";
import RefundDetailCard from "./RefundDetailCard";
import SectionPartition from "../Common/SectionPartition";
import { useActiveAccount, useReadContract } from "thirdweb/react";
import { useGetPresaleContract } from "../../Hooks";
import presaleAbi from "../../ABI/presaleContract.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Claim = ({ presaleAddress }) => {
  const contract = useGetPresaleContract(presaleAddress, presaleAbi);
  const account = useActiveAccount();

  const { data: isRefund } = useReadContract({
    contract,
    method: "function isRefund() public view returns (bool)",
  });

  console.log("isRefund: ", isRefund);

  const { data: isFinished } = useReadContract({
    contract,
    method: "function isFinish() public view returns (bool)",
  });

  const { data: ethContributed } = useReadContract({
    contract,
    method: "function ethContribution(address) public view returns (uint256)",
    params: [account?.address],
  });

  console.log("isFinished: ", isFinished);
  console.log("ethContributed: ", ethContributed);

  useEffect(() => {
    if (!account) {
      toast.error("Please connect your wallet.");
    }
  }, [account]);

  return (
    <div>
      {/* Claim Section  */}
      {/* {!isRefund &&
        isFinished &&
        ethContributed >
          0 && ( */}
      <div className="container mx-auto my-10 p-4">
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-10">
          <ClaimContent />
          <ClaimCard presaleAddress={presaleAddress} />
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
          <RefundDetailCard presaleAddress={presaleAddress} />
          <RefundContent />
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Claim;
