import React, { useState } from "react";
import styles from "./herosection.module.css";
import { currencyNavTabs, exchangedToken, exchangeRateInput } from "../../Data/index";

const CurrencyForm = () => {
  const [activeTab, setActiveTab] = useState(0);

  const progressBarWidth = 50;

  return (
    <div className={`${styles.cardBox}`}>
      <div
        className={`${styles.cardBg} flex flex-col gap-4 p-4 text-[10.28px] md:text-[15.05px]`}
      >
        {/* Heading  */}
        <div className="flex flex-col items-center text-[18.58px] md:text-[27.17px] font-bold">
          <span className="">Buy Now</span>
          <span className="text-themeColor">Before Price Rises</span>
        </div>

        {/* Funds raising Progress bar  */}
        <div className="bg-[#091F2F] h-[22px] w-full relative flex items-center">
          <div
            className={`${styles.progressBar} w-[0%]  max-w-full transition-all duration-300 ease-in-out`}
            style={{ width: `${progressBarWidth}%` }}
          ></div>
          <span className="absolute font-medium right-2 opacity-60 text-green-300">
            63.94 - % - Sold
          </span>
        </div>

        {/*  Funds Stats */}
        <div className="flex flex-col items-center w-full mt-1">
          <div>
            <span className="text-themeColor">USD RAISED SO FAR : </span>$
            11,020,809.21
          </div>
          <div>
            <span className="text-themeColor">Tokens Sold : </span>$
            443,337,246.98
          </div>
          <div>
            <span className="text-themeColor">Hard Cap : </span>$ 11,021
          </div>
          <div>
            <span className="text-themeColor">Soft Cap : </span>$ 443,3
          </div>
          <div>
            <span className="text-themeColor">Start Date :</span>2024-05-29
          </div>
          <div>
            <span className="text-themeColor">End Date : </span>2025-10-06
          </div>
        </div>

        {/* Read only input  */}

        {/* <div className={`${styles.inputBox} w-full`}>
          <input
            className="w-full bg-transparent outline-none border-none"
            defaultValue="1 $RTX = $0.0539"
            readOnly
          />
          <span className="w-fit text-nowrap text-green-300">
            Next Price: $0.0567
          </span>
        </div> */}

        {/* Currency Tabs  */}
        {/* <div className="grid grid-cols-3 gap-2">
          {currencyNavTabs?.map((currency, index) => (
            <button
              key={currency.name}
              className={`${
                index === activeTab
                  ? `${styles.currencyButtonActive}`
                  : `${styles.currencyButton}`
              } 
                 flex justify-center items-center gap-2`}
              onClick={() => setActiveTab(index)}
            >
              <img
                src={currency.image}
                // width={10}
                // height={10}
                alt="Currency Image"
                className="size-[21.89px] md:size-[32px]"
              />
              <span className="">{currency.name}</span>
            </button>
          ))}
        </div> */}

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

                  <div className={`${styles.inputBox} flex`}>
                    <input
                      type={item.inputType}
                      className="w-full bg-transparent outline-none border-none"
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
          className={`${styles.connectButton} text-center h-[30.78px] md:h-[45px]`}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default CurrencyForm;
