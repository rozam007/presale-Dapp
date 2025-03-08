import React from "react";
import styles from "../../pages/Launchpad/launchpad.module.css";
import { useTokensSold } from "../../Hooks/index";
// import { Presale } from "@/types";
import SaleCountdown from "../../components/SaleCountDown.jsx/index";
import { Link } from "react-router-dom";

const LaunchpadListCard = ({ presales }) => {
  console.log("presales: ", presales);
  return (
    <>
      {presales.map((card) => (
        <PresaleCard key={card.id} card={card} />
      ))}
    </>
  );
};

const PresaleCard = ({ card }) => {
  const { hardCap, softCap, saleRate } = card;
  const softCapPercentage = (Number(softCap) / Number(hardCap)) * 100;
  const hardCapPercentage = 100;

  // Call useTokensSold hook inside a component, NOT in .map()
  const { tokenSold } = useTokensSold(Number(saleRate));
  console.log("token sold: ", tokenSold);
  const tokensSoldPercentage = (Number(tokenSold || 0) / Number(hardCap)) * 100;
  // const tokensSoldPercentage = 70;

  return (
    <div className="text-sm p-4 rounded-md w-full max-w-[368px] bg-launchpadBg">
      <div className="flex flex-col">
        {/* Soft & Hard Cap */}
        <div className="flex justify-between items-center gap-4 mt-0.5">
          <div className="text-sm text-whiteColor whitespace-nowrap text-ellipsis mt-6">
            <p>Soft - Hard</p>
            <div className="flex gap-2 text-lg font-medium">
              <span className="text-themeColor">
                {softCap} - {hardCap}
              </span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 text-sm">
          <span>Progress</span> {""}
          <span>({tokensSoldPercentage}) %</span>
        </div>

        {/* <div className="mt-0.5">
          <div className="bg-[#113956] h-[22px] w-full relative flex items-center">
            <div
              className={`${styles.progressBar} w-[0%] max-w-full transition-all duration-300 ease-in-out`}
              style={{ width: `${card.progressValue}%` }}
            ></div>
          </div>
        </div> */}

        {/* Fundraising Progress Bar */}
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

        {/* Sale Start & End */}
        <div className="flex items-center justify-between mt-4">
          <SaleCountdown
            startTime={Number(card.startTime) || 0}
            endTime={Number(card.endTime) || 0}
          />

          <div>
            <Link
              to={`/presale/${card.presaleAddress}`}
              className="bg-themeColor text-whiteColor px-2 py-1 rounded-sm"
            >
              View
            </Link>
          </div>
        </div>
        {/* <div className="flex justify-between items-center text-sm gap-2 mt-4">
          {
            currentTime < Number(card.startTime) ? 
            <div className="flex flex-col">
              <div>Sale Starts In</div>
              <div className="font-medium text-sm">
                {card.startTime || card.endTime}
              </div>
            </div>
              :
              
               <div className="flex flex-col">
              <div>Sale Ends In</div>
              <div className="font-medium text-sm">
                {card.startTime || card.endTime}
              </div>
            </div>
        }
          <div>
            <Link href="/presale" className="bg-themeColor text-whiteColor px-2 py-1 rounded-sm">
              View
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LaunchpadListCard;
