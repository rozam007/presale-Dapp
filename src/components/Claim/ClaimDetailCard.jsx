import React from "react";
import styles from "./claim.module.css";
import { useReadContract } from "thirdweb/react";
import { useGetPresaleContract } from "../../Hooks";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClaimDetailCard = ({ ethContributed, presaleAddress }) => {
  const presaleContract = useGetPresaleContract(presaleAddress);

  if (!presaleContract) {
    toast.error("Please connect your wallet.");
  }
  const { data: saleRate } = useReadContract({
    presaleContract,
    method: "saleRate",
  });

  const { data: tokenDecimals } = useReadContract({
    presaleContract,
    method: "saleRate",
  });

  let computedTokens = 0;
  if (ethContributed !== undefined) {
    computedTokens =
      (Number(ethContributed) * saleRate) / 10 ** (18 + tokenDecimals - 18);
  }
  return (
    <>
      <div className={`${styles.cardBox} w-full lg:w-[576px]`}>
        <div
          className={`${styles.cardBg} flex flex-col gap-4 p-4 text-[10.28px] md:text-[15.05px]`}
        >
          {/* Heading  */}
          <div className="flex flex-col items-center text-[18.58px] md:text-[27.17px] font-bold">
            <span className="">Claim Detail</span>
            {/* <span className="text-themeColor">Your Claim Detail</span> */}
          </div>

          {/*  Funds Stats */}
          <div className="flex flex-col items-center w-full mt-1">
            <div>
              <span className="text-themeColor">Contributed Etherium :</span>{" "}
              {ethContributed}
            </div>
            <div>
              <span className="text-themeColor">Claimed Tokens : </span>
              {computedTokens}
            </div>
          </div>

          {/* Connect button  */}
          <button
            className={`${styles.connectButton} text-center h-[30.78px] md:h-[45px]`}
          >
            Claim Tokens
          </button>
        </div>
      </div>
    </>
  );
};

export default ClaimDetailCard;
