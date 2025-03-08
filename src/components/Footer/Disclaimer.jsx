import React from "react";
import { disclaimer } from "../../Data/index";

const Disclaimer = () => {
  return (
    <div className="">
      {/* Disclaimer  */}
      <div className="flex flex-col text-xs md:text-[15px] text-black w-full md:w-[40%]">
        <p className="text-footerColor pb-[24px]">{disclaimer.title}</p>
        <p className="leading-6 text-wrap">{disclaimer.Paragraph}</p>
      </div>
    </div>
  );
};

export default Disclaimer;
