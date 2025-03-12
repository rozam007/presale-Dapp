import React from "react";
import styles from "./claim.module.css";
import { useActiveAccount, useReadContract } from "thirdweb/react";
import { useGetPresaleContract } from "../../Hooks";
import presaleAbi from "../../ABI/presaleContract.json";

const RefundDetailCard = ({ presaleAddress }) => {
  const contract = useGetPresaleContract(presaleAddress, presaleAbi);
  const account = useActiveAccount();
  
  const { data: pool } = useReadContract({
    contract,
    method:
    "function pool() public view returns (uint64, uint64, uint8, uint256, uint256, uint256, uint256, uint256, uint256)",
  });
  
  const { data: tokenDecimals } = useReadContract({
    contract,
    method: "function tokenDecimals() public view returns(uint8)",
  });

   const { data: ethContributed } = useReadContract({
    contract,
    method: "function ethContribution(address) public view returns (uint256)",
    params: [account?.address],
  });
  
  console.log("eth: ", ethContributed);
  let computedTokens = 0;
  if (ethContributed !== undefined) {
    computedTokens =
      (Number(ethContributed) * Number(pool?.[3])) / 10 ** (18 + tokenDecimals - 18);
  }
  return (
    <>
      <div className={`${styles.cardBox} w-full lg:w-[576px]`}>
        <div
          className={`${styles.cardBg} flex flex-col gap-4 p-4 text-[10.28px] md:text-[15.05px]`}
        >
          {/* Heading  */}
          <div className="flex flex-col items-center text-[18.58px] md:text-[27.17px] font-bold">
            <span className="">Refund Detail</span>
            {/* <span className="text-themeColor">Your Claim Detail</span> */}
          </div>

          {/*  Funds Stats */}
          <div className="flex flex-col items-center w-full mt-1">
            <div>
              <span className="text-themeColor">Contributed Etherium :</span>
              {ethContributed}
            </div>
            <div>
              <span className="text-themeColor">Refund Tokens : </span>
              {computedTokens}
            </div>
          </div>

          {/* Connect button  */}
          <button
            className={`${styles.connectButton} text-center h-[30.78px] md:h-[45px]`}
          >
            Refund
          </button>
        </div>
      </div>
    </>
  );
};

export default RefundDetailCard;
