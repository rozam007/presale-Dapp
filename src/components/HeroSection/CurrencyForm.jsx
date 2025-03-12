import React, { useState } from "react";
import styles from "./herosection.module.css";
import {
  currencyNavTabs,
  exchangedToken,
  exchangeRateInput,
} from "../../Data/index";
import {
  useActiveAccount,
  useReadContract,
  useSendTransaction,
} from "thirdweb/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetPresaleContract, useTokensSold } from "../../Hooks";
import { prepareContractCall } from "thirdweb";
import presaleAbi from "../../ABI/presaleContract.json";
import { poolMappings } from "../../Contants";
import { formatUnixTimestamp } from "../../Utils";
import SaleStatus, { getSaleStatus } from "../SaleStatus";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {GET_EXACT_PRESALES} from "../../queries/index"

const CurrencyForm = ({ presaleAddress }) => {
  const [activeTab, setActiveTab] = useState(0);
  setActiveTab
  const navigate = useNavigate();
  const account = useActiveAccount();
  const contract = useGetPresaleContract(presaleAddress, presaleAbi);
  const { mutateAsync: buyTheTokens, isPending: isPendingBuyTokens } =
    useSendTransaction();

  const [eth, setEth] = useState();
  const [ethFieldError, setEthFieldError] = useState();
  const buyTokens = async () => {
    if (!eth || isNaN(eth) || eth <= 0) {
      setEthFieldError("Enter a valid amount.");
      return;
    } else {
      console.log("hello");
      setEthFieldError("");
    }
    try {
      if (!account) {
        toast.error("Please connect your wallet.");
        return;
      }

      if (!contract) {
        console.log("Contract not found.");
        return;
      }

      const approveTx = await prepareContractCall({
        contract,
        method:
          "function buyTokens (address _contributor) public payable onlyActive",
        value: eth,
      });
      await buyTheTokens(approveTx);
      console.log("bought successful:", approveTx);
    } catch (error) {
      console.error("Transaction failed:", error);
      toast.error("Transaction failed. Check console for details.");
    }
  };

  const { data: presaleData } = useReadContract({
    contract,
    method:
      "function pool() public view returns (uint64, uint64, uint8, uint256, uint256, uint256, uint256, uint256, uint256)",
  });
  const { data: ethRaised } = useReadContract({
    contract: contract,
    method: "function ethRaised() public view returns (uint256)",
  });

    // const { data } = useQuery(GET_EXACT_PRESALES, {
    // fetchPolicy: "network-only",
    // });
  
  // console.log('data: ',data)

  console.log("raised: ", ethRaised);

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

  const handleEthChange = (event) => {
    setEth(event.target.value);
  };

    const handleAdminClick = () => {
    navigate(`/presale/${presaleAddress}/admin`);
  };
  const handleClaimClick = () => {
    navigate(`/presale/${presaleAddress}/claim`);
  };

  return (
    <div className={`${styles.cardBox}`}>
      <div
        className={`${styles.cardBg} flex flex-col gap-4 p-4 text-[10.28px] md:text-[15.05px]`}
      >
        <SaleStatus startTime={presaleData?.[0]} endTime={presaleData?.[1]} />
        {/* Heading  */}
        <div className="flex flex-col items-center text-[18.58px] md:text-[27.17px] font-bold">
          <span className="">Buy Now</span>
          <span className="text-themeColor">Before Price Rises</span>
        </div>

        {/* Funds raising Progress bar  */}
        {/* <div className="bg-[#091F2F] h-[22px] w-full relative flex items-center">
          <div
            className={`${styles.progressBar} w-[0%]  max-w-full transition-all duration-300 ease-in-out`}
            style={{ width: `${progressBarWidth}%` }}
          ></div>
          <span className="absolute font-medium right-2 opacity-60 text-green-300">
            63.94 - % - Sold
          </span>
        </div> */}

        <div className="relative w-full mt-8">
          {/* Softcap Label */}
          <div
            className="absolute text-xs text-white font-medium -top-6"
            style={{
              left: `${softCapPercentage}%`,
              transform: "translateX(-100%)",
            }}
          >
            Softcap
          </div>

          {/* Hardcap Label */}
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
              className={`${styles.progressBar} max-w-full transition-all duration-300 ease-in-out bg-themeColor h-full`}
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
              {tokensSoldPercentage.toFixed(2)} % Sold
            </span>
          </div>
        </div>

        {/*  Funds Stats */}
        <div className="flex flex-col items-center w-full mt-1">
          <div>
            <span className="text-themeColor">Eth Raised : </span>
            {ethRaised}
          </div>
          <div>
            <span className="text-themeColor">Tokens Sold : </span>
            {tokenSold}
          </div>
          <div>
            <span className="text-themeColor">Start Date :</span>
            {startDate}
          </div>
          <div>
            <span className="text-themeColor">End Date : </span>
            {endDate}
          </div>
          <div>
            <span className="text-themeColor">Liquidity Portion :</span>
            {liquidityPortion}
          </div>
          <div>
            <span className="text-themeColor">Sale Rate : </span>
            {saleRate}
          </div>
          <div>
            <span className="text-themeColor">Listing Rate :</span>
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

        <div className="grid grid-cols-2 gap-2">
          {/* Currency Inputs  */}
          <div className={`grid grid-cols-1`}>
            {exchangeRateInput
              .filter(
                (item) => item.currency === currencyNavTabs[activeTab]?.name
              )
              .map((item) => (
                <div key={item.currency} className="flex flex-col gap-2">
                  {/* Title Heading  */}
                  <span className="text-themeColor">
                    {item.currency === "Tokens"
                      ? `$${item.currency} you receieve`
                      : `${item.currency} you pay`}
                  </span>

                  <div className="flex flex-col justify-end gap-2">
                    <div className={`${styles.inputBox} flex`}>
                      <input
                        type={item.inputType}
                        className="w-full bg-transparent outline-none border-none"
                        onClick={handleEthChange}
                        //   value={``}
                      />
                      <img
                        src={item.image}
                        alt={`${item.currency} logo`}
                        //   width={24}
                        //   height={24}
                        className="size-[21.89px] md:size-[32px]"
                      />
                    </div>
                    {ethFieldError && <p>{ethFieldError}</p>}
                  </div>
                </div>
              ))}
          </div>

          {/* RTX Token  */}

          <div className="flex flex-col gap-2">
            {/* Title Heading  */}
            <span className="text-themeColor">
              {exchangedToken.token} you receieve
            </span>

            <div className={`${styles.inputBox} flex`}>
              <input
                type={exchangedToken.inputType}
                className="w-full bg-transparent outline-none border-none"
                //   value={``}
                readOnly
              />
              <img
                src={exchangedToken.image}
                alt={`Token Image`}
                //   width={24}
                //   height={24}
                className="size-[21.89px] md:size-[32px]"
              />
            </div>
          </div>
        </div>

        {/* Connect button  */}
        <button
          disabled={saleStatus === "Ended" || isPendingBuyTokens}
          onClick={() => buyTokens()}
          className={`${styles.connectButton} text-center h-[30.78px] md:h-[45px]`}
        >
          {isPendingBuyTokens ? "Buying..." : "Buy"}
        </button>

             <div className="flex flex-col md:flex-row gap-4">
        <button
          className="w-[100%] md:w-[50%] px-2 py-4 bg-themeColor rounded-md text-white"
          onClick={() => handleClaimClick()}
        >
          Claim Tokens
        </button>
        <button
          className="w-[100%] md:w-[50%] px-2 py-4 bg-themeColor rounded-md text-white"
          onClick={() => handleAdminClick()}
        >
          Admin
        </button>
      </div>
      </div>
    </div>
  );
};

export default CurrencyForm;
