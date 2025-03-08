import React from "react";
import styles from "./claim.module.css";

const RefundDetailCard = () => {
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
              <span className="text-themeColor">Contributed Etherium :</span>{" "}
              0.0017
            </div>
            <div>
              <span className="text-themeColor">Refund Tokens : </span>5
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
