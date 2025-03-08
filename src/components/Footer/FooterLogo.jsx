import React from "react";
// import logo from "../../../public/logo-black.svg";
// import Image from "next/image";
import { logoTitle } from "../../Data/index";

const FooterLogo = () => {
  return (
    <>
      <div className="">
        <div className="flex items-center pb-4 text-black md:pb-0">
          <img
            src="logo-black.svg"
            alt="log"
            className="w-[31.01px] h-[16.02px] md:w-[55.71px] md:h-[28.78px]"
          />
          <span className="text-[20.9px] md:text-[37.55px] ml-1 md:ml-2">
            {logoTitle.title}
          </span>
        </div>
      </div>
    </>
  );
};

export default FooterLogo;
