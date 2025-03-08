import React from "react";
import styles from "../HeroSection/herosection.module.css";
import { presaleSummary } from "../../Data/index";
import StatusTag from "../Common/StatusTag";
import SectionPartition from "../Common/SectionPartition";

const InfoTag = ({ title, value }) => {
  return (
    <div>
      <span className="text-themeColor">{title} </span>
      {value}
    </div>
  );
};

const DepositTokenInput = () => (
  <input
    type="number"
    className="bg-[rgba(17,24,30,0.32)] border border-[hsla(0,0%,100%,0.12)] shadow-[inset_0_0.626406px_0.626406px_hsla(0,0%,100%,0.12)]  rounded-lg h-12 p-4 font-medium flex items-center justify-between outline-none"
    placeholder="Tokens..."
  />
);

const PresaleSummary = () => {
  const tokenSoldPercentage = 70;
  const softcapPercentage = 33; // Softcap percentage (e.g., 30%)
  const hardcapPercentage = 100; // Hardcap percentage (e.g., 80%)
  const softcapAmount = "3000"; // Softcap amount
  const hardcapAmount = "10000"; // Hardcap amount

  return (
    <div className="flex flex-col gap-16">
      {/* Deposit Tokens */}
      <div className="container mx-auto my-10 p-4">
        <div className="flex flex-col lg:flex-row justify-evenly items-center gap-10">
          <div className={`w-[500px] ${styles.cardBox}`}>
            <div
              className={`${styles.cardBg} w-full flex flex-col gap-6 p-4 text-[10.28px] md:text-[15.05px]`}
            >
              {/* Heading  */}
              <div className="flex flex-col items-center text-[18.58px] md:text-[27.17px] font-bold">
                <span className="">Deposit Tokens</span>
              </div>

              <DepositTokenInput />

              {/* Connect button  */}
              <div className="flex justify-between gap-4">
                <button
                  className={`${styles.connectButton} w-full text-center h-[30.78px] md:h-[45px]`}
                >
                  Deposit
                </button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[25px] sm:text-[50px] md:text-[60px] leading-[54px] md:leading-[96px] traking-[-2px] text-light-white max-w-[700px] text-center md:text-left">
              Deposit <span className="text-themeColor">Tokens</span>
            </h3>
            <h2 className="text-xl traking-[-2px] mt-6 font-normal text-light-white max-w-[350px] text-center md:text-left">
              As an admin, you have the authority to deposit the tokens into the
              presale before user can buy them. <br></br>
            </h2>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <SectionPartition />
      </div>

      {/* Admin Actions */}
      <div className="container mx-auto my-10 p-4">
      
          <div className="flex flex-col lg:flex-row justify-evenly items-center gap-10">
            <div>
              <h3 className="text-[25px] sm:text-[50px] md:text-[60px] leading-[54px] md:leading-[96px] traking-[-2px] text-light-white max-w-[700px] text-center md:text-left">
                Manage <span className="text-themeColor">Pre-sale</span>
              </h3>
              <h2 className="text-xl traking-[-2px] mt-6 font-normal text-light-white max-w-[350px] text-center md:text-left">
                As an admin, you have the authority to cancel the token sale if
                it fails to meet the soft cap. Once canceled, you can enable
                refunds, allowing investors to reclaim their contributions
                seamlessly. <br></br>
                {/* <span className="text-themeColor text-xl text-center md:text-left">
            Welcome to the PayFi revolution!
          </span> */}
              </h2>
            </div>
            <div className={`w-[500px] ${styles.cardBox}`}>
              <div
                className={`${styles.cardBg} w-full flex flex-col gap-6 p-4 text-[10.28px] md:text-[15.05px]`}
              >
                <div className="flex justify-end">
                  <StatusTag status="Sale Live" />
                </div>
                {/* Heading  */}
                <div className="flex flex-col items-center text-[18.58px] md:text-[27.17px] font-bold">
                  <span className="">Presale Summary</span>
                </div>

                {/* Funds raising Progress bar  */}
                <div className="relative w-full">
                  {/* Softcap Label (Above Marker) */}
                  <div
                    className="absolute text-xs text-white font-medium -top-6"
                    style={{
                      left: `${softcapPercentage}%`,
                      transform: "translateX(-100%)",
                    }}
                  >
                    Softcap
                  </div>

                  {/* Hardcap Label (Above Marker) */}
                  <div
                    className="absolute text-xs text-white font-medium -top-6"
                    style={{
                      left: `${hardcapPercentage}%`,
                      transform: "translateX(-100%)",
                    }}
                  >
                    Hardcap
                  </div>

                  {/* Progress Bar */}
                  <div className="bg-[#091F2F] h-[22px] w-full relative flex items-center">
                    <div
                      className={`${styles.progressBar} max-w-full transition-all duration-300 ease-in-out bg-green-500 h-full`}
                      style={{ width: `${tokenSoldPercentage}%` }}
                    ></div>

                    {/* Softcap Marker */}
                    <div
                      className="absolute h-[150%] w-[2px] bg-yellow-300"
                      style={{ left: `${softcapPercentage}%` }}
                    ></div>

                    {/* Hardcap Marker */}
                    <div
                      className="absolute h-[150%] w-[2px] bg-red-500"
                      style={{ left: `${hardcapPercentage}%` }}
                    ></div>

                    {/* Sold Percentage */}
                    <span className="absolute font-medium right-2 opacity-60 text-white">
                      {tokenSoldPercentage.toFixed(2)}% Sold
                    </span>
                  </div>

                  {/* Softcap Amount (Below Marker) */}
                  <div
                    className="absolute text-xs text-white font-medium mt-2"
                    style={{
                      left: `${softcapPercentage}%`,
                      transform: "translateX(-100%)",
                    }}
                  >
                    {softcapAmount}
                  </div>

                  {/* Hardcap Amount (Below Marker) */}
                  <div
                    className="absolute text-xs text-white font-medium mt-2"
                    style={{
                      left: `${hardcapPercentage}%`,
                      transform: "translateX(-100%)",
                    }}
                  >
                    {hardcapAmount}
                  </div>
                </div>

                {/*  Funds Stats */}
                <div className="flex flex-col items-center w-full mt-1">
                  {presaleSummary.map(({ title, value }) => (
                    <InfoTag key={title} title={title} value={value} />
                  ))}
                </div>

                {/* Connect button  */}
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between gap-4">
                    <button
                      className={`${styles.connectButton} w-full text-center h-[30.78px] md:h-[45px]`}
                    >
                      Finish Sale
                    </button>
                    <button
                      className={`${styles.connectButton} w-full text-center h-[30.78px] md:h-[45px]`}
                    >
                      Withdraw Funds
                    </button>
                  </div>
                  <div className="flex justify-between gap-4">
                    <button
                      className={`${styles.connectButton} w-full text-center h-[30.78px] md:h-[45px]`}
                    >
                      Cancel Sale
                    </button>
                    <button
                      className={`${styles.connectButton} w-full text-center h-[30.78px] md:h-[45px]`}
                    >
                      Enable Funds
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
      </div>
    </div>
  );
};

export default PresaleSummary;