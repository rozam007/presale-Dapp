import React from "react";
import styles from "../HeroSection/herosection.module.css";
// import { presaleSummary } from "../../Data/index";
// import StatusTag from "../Common/StatusTag";
import SectionPartition from "../Common/SectionPartition";
import {
  useActiveAccount,
  useReadContract,
  useSendTransaction,
} from "thirdweb/react";
import { prepareContractCall } from "thirdweb";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetPresaleContract, useTokensSold } from "../../Hooks";
import { useParams } from "react-router-dom";
import presaleAbi from "../../ABI/presaleContract.json";
import { poolMappings } from "../../Contants";
import { formatUnixTimestamp } from "../../Utils";
import SaleStatus, { getSaleStatus } from "../SaleStatus";

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
  const { presaleAddress } = useParams();
  const presaleContract = useGetPresaleContract(presaleAddress, presaleAbi);

  const walletAddress = useActiveAccount();
  const { mutateAsync: depositTheTokens, isPending: isPendingDepositTokens } =
    useSendTransaction();
  const { mutateAsync: finishTheSales, isPending: isPendingFinishSales } =
    useSendTransaction();
  const { mutateAsync: withDrawTheTokens, isPending: isPendingWithDrawTokens } =
    useSendTransaction();
  const { mutateAsync: cancelTheSales, isPending: isPendingCancelSales } =
    useSendTransaction();
  // const { mutateAsync: enableTheRefund, isPending: isPendingEnableRefund } = useSendTransaction();

  const { data: isRefund } = useReadContract({
    contract: presaleContract,
    method: "function isRefund() public returns (bool)",
  });

  console.log("isRefund: ", isRefund);

  const depositTokens = async () => {
    try {
      if (!walletAddress) {
        toast.error("Please connect your wallet.");
        return;
      }

      if (!presaleContract) {
        alert("Contract not found.");
        return;
      }

      const approveTx = await prepareContractCall({
        contract: presaleContract,
        method: "function deposit() external onlyOwner",
      });
      await depositTheTokens(approveTx);
      console.log("Approval successful:", approveTx);
    } catch (error) {
      console.error("Transaction failed:", error);
      toast.error("Transaction failed. Check console for details.");
    }
  };
  const finishSales = async () => {
    try {
      if (!walletAddress) {
        toast.error("Please connect your wallet.");
        return;
      }

      if (!presaleContract) {
        alert("Contract not found.");
        return;
      }

      const approveTx = await prepareContractCall({
        contract: presaleContract,
        method: "function finishSale() external onlyOwner onlyInactive ",
      });
      await finishTheSales(approveTx);
      console.log("Finished Successfully:", approveTx);
      toast.success("Finished Successfully!!");
    } catch (error) {
      console.error("Transaction failed:", error);
      toast.error("Transaction failed. Check console for details.");
    }
  };
  const withDrawTokens = async () => {
    try {
      if (!walletAddress) {
        toast.error("Please connect your wallet.");
        return;
      }

      if (!presaleContract) {
        alert("Contract not found.");
        return;
      }

      const approveTx = await prepareContractCall({
        contract: presaleContract,
        method:
          "function withrawTokens() external onlyOwner onlyInactive onlyRefund",
      });
      await withDrawTheTokens(approveTx);
      console.log("Withdrawed Successfully:", approveTx);
      toast.success("Withdrawed Successfully!!");
    } catch (error) {
      console.error("Transaction failed:", error);
      toast.error("Transaction failed. Check console for details.");
    }
  };
  const cancelSales = async () => {
    try {
      if (!walletAddress) {
        toast.error("Please connect your wallet.");
        return;
      }

      if (!presaleContract) {
        alert("Contract not found.");
        return;
      }

      const approveTx = await prepareContractCall({
        contract: presaleContract,
        method: "function cancelSale() external onlyOwner onlyActive",
      });
      await cancelTheSales(approveTx);
      console.log("Cancelled Successfully:", approveTx);
      toast.success("Cancelled Successfully!!");
    } catch (error) {
      console.error("Transaction failed:", error);
      toast.error("Transaction failed. Check console for details.");
    }
  };
  // const enableRefund = async () => {
  //   try {
  //     if (!walletAddress) {
  //       alert("Please connect your wallet.");
  //       return;
  //     }

  //     if (!presaleContract) {
  //       alert("Contract not found.");
  //       return;
  //     }

  //     const approveTx = await prepareContractCall({
  //       contract: presaleContract,
  //       method: "function deposit() external onlyOwner",
  //     });
  //     await enableTheRefund(approveTx);
  //     console.log("Enabled Refund Successfully:", approveTx);
  //     toast.success("Enabled Refund Successfully!!")
  //   } catch (error) {
  //     console.error("Transaction failed:", error);
  //     toast.error("Transaction failed. Check console for details.");
  //   }
  // };

  const contract = useGetPresaleContract(presaleAddress, presaleAbi);
  const { data: presaleData } = useReadContract({
    contract: contract,
    method:
      "function pool() public view returns (uint64, uint64, uint8, uint256, uint256, uint256, uint256, uint256, uint256)",
  });

  const { data: ethRaised } = useReadContract({
    contract: contract,
    method: "function ethRaised() public view returns (uint256)",
  });

  console.log("isRefund: ", isRefund);

  const startDateIndex = poolMappings["startDate"];
  const endDateIndex = poolMappings["endDate"];
  const liquidityPortionIndex = poolMappings["liquidityPortion"];
  const saleRateIndex = poolMappings["saleRate"];
  const listingRateIndex = poolMappings["listingRate"];
  const hardCapIndex = poolMappings["hardCap"];
  const softCapIndex = poolMappings["softCap"];
  const maxBuyIndex = poolMappings["maxBuy"];
  const minBuyIndex = poolMappings["minBuy"];

  let startDate = null;
  let endDate = null;
  let liquidityPortion = null;
  let saleRate = null;
  let listingRate = null;
  let hardCap = null;
  let softCap = null;
  let maxBuy = null;
  let minBuy = null;
  if (presaleData) {
    startDate = formatUnixTimestamp(Number(presaleData[startDateIndex]));
    endDate = formatUnixTimestamp(Number(presaleData[endDateIndex]));
    liquidityPortion = presaleData[liquidityPortionIndex];
    saleRate = Number(presaleData[saleRateIndex]);
    listingRate = Number(presaleData[listingRateIndex]);
    hardCap = Number(presaleData[hardCapIndex]);
    softCap = Number(presaleData[softCapIndex]);
    maxBuy = Number(presaleData[maxBuyIndex]);
    minBuy = Number(presaleData[minBuyIndex]);
  }

  const { tokenSold } = useTokensSold(presaleAddress, saleRate);
  const saleStatus = getSaleStatus(presaleData?.[0], presaleData?.[1]);
  const hardCapPercentage = 100;
  const softCapPercentage = (softCap / hardCap) * 100;
  const tokensSoldPercentage = (Number(tokenSold || 0) / Number(hardCap)) * 100;
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

              {/* <DepositTokenInput /> */}

              {/* Connect button  */}
              <div className="flex justify-between gap-4">
                <button
                  onClick={() => depositTokens()}
                  className={`${styles.connectButton} w-full text-center h-[30.78px] md:h-[45px]`}
                >
                  {isPendingDepositTokens ? "Depositing..." : "Deposit"}
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
              As an admin, you have the authority to cancel the token sale if it
              fails to meet the soft cap. Once canceled, you can enable refunds,
              allowing investors to reclaim their contributions seamlessly.{" "}
              <br></br>
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
                {/* <StatusTag status="Sale Live" /> */}
                <SaleStatus
                  startTime={presaleData?.[0]}
                  endTime={presaleData?.[1]}
                />
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
                    left: `${softCapPercentage}%`,
                    transform: "translateX(-100%)",
                  }}
                >
                  Softcap
                </div>

                {/* Hardcap Label (Above Marker) */}
                <div
                  className="absolute text-xs text-white font-medium -top-6"
                  style={{
                    left: `${hardCapPercentage}%`,
                    transform: "translateX(-100%)",
                  }}
                >
                  Hardcap
                </div>

                {/* Progress Bar */}
                <div className="bg-[#091F2F] h-[22px] w-full relative flex items-center">
                  <div
                    className={`${styles.progressBar} max-w-full transition-all duration-300 ease-in-out bg-green-500 h-full`}
                    style={{ width: `${tokensSoldPercentage}%` }}
                  ></div>

                  {/* Softcap Marker */}
                  <div
                    className="absolute h-[150%] w-[2px] bg-yellow-300"
                    style={{ left: `${softCapPercentage}%` }}
                  ></div>

                  {/* Hardcap Marker */}
                  <div
                    className="absolute h-[150%] w-[2px] bg-red-500"
                    style={{ left: `${hardCapPercentage}%` }}
                  ></div>

                  {/* Sold Percentage */}
                  <span className="absolute font-medium right-2 opacity-60 text-white">
                    {tokensSoldPercentage.toFixed(2)}% Sold
                  </span>
                </div>

                {/* Softcap Amount (Below Marker) */}
                <div
                  className="absolute text-xs text-white font-medium mt-2"
                  style={{
                    left: `${softCapPercentage}%`,
                    transform: "translateX(-100%)",
                  }}
                >
                  {softCap}
                </div>

                {/* Hardcap Amount (Below Marker) */}
                <div
                  className="absolute text-xs text-white font-medium mt-2"
                  style={{
                    left: `${hardCapPercentage}%`,
                    transform: "translateX(-100%)",
                  }}
                >
                  {hardCap}
                </div>
              </div>

              {/*  Funds Stats */}
              <div className="flex flex-col items-center w-full mt-1">
                {/* {presaleSummary.map(({ title, value }) => (
                  <InfoTag key={title} title={title} value={value} />
                ))} */}
                <div>
                  <span className="text-themeColor">Eth Raised : </span>
                  {ethRaised}
                </div>

                <div>
                  <span className="text-themeColor">Tokens Sold : </span>
                  {tokenSold}
                </div>
                <div>
                  <span className="text-themeColor">Start Date : </span>
                  {startDate}
                </div>
                <div>
                  <span className="text-themeColor">End Date : </span>
                  {endDate}
                </div>

                <div>
                  <span className="text-themeColor">Liquidity Portion : </span>
                  {liquidityPortion}
                </div>

                <div>
                  <span className="text-themeColor">Sale Rate : </span>
                  {saleRate}
                </div>

                <div>
                  <span className="text-themeColor">Listing Rate : </span>
                  {listingRate}
                </div>

                <div>
                  <span className="text-themeColor">Hard Cap : </span>
                  {hardCap}
                </div>

                <div>
                  <span className="text-themeColor">Soft Cap : </span>
                  {softCap}
                </div>

                <div>
                  <span className="text-themeColor">Max Buy : </span>
                  {maxBuy}
                </div>

                <div>
                  <span className="text-themeColor">Min Buy : </span>
                  {minBuy}
                </div>
              </div>

              {/* Connect button  */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-4">
                  <button
                    // disabled={saleStatus === 'Ended'}
                    onClick={() => finishSales()}
                    className={`${styles.connectButton} w-full text-center h-[30.78px] md:h-[45px]`}
                  >
                    {isPendingFinishSales ? "Finishing..." : "Finish Sale"}
                  </button>
                  <button
                    disabled={isRefund === false}
                    onClick={() => withDrawTokens()}
                    className={`${styles.connectButton} w-full text-center h-[30.78px] md:h-[45px]`}
                  >
                    {isPendingWithDrawTokens
                      ? "Withdrawing..."
                      : "Withdraw Funds"}
                  </button>
                </div>
                <div className="flex justify-between gap-4">
                  <button
                    disabled={saleStatus === "Ended"}
                    onClick={() => cancelSales()}
                    className={`${styles.connectButton} w-full text-center h-[30.78px] md:h-[45px]`}
                  >
                    {isPendingCancelSales ? "Cancelling..." : "Cancel Sale"}
                  </button>
                  {/* <button
                    onClick={() => enableRefund()}
                    className={`${styles.connectButton} w-full text-center h-[30.78px] md:h-[45px]`}
                  >
                    {isPendingEnableRefund ? "Enabling..." : "Enable Funds"}
                  </button> */}
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
