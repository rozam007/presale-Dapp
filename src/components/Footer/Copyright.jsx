import React from "react";
import { logoTitle } from "../../Data/index";
import { getCurrentYear } from "../../Utils/index";

const Copyright = () => {
  const year = getCurrentYear();
  return (
    <div className="pt-[31px] md:pt-0">
      <div className="text-left md:text-right text-wrap">
        <p className="text-[12px] md:text-[15px] leading-6 text-footerColor">
          © All Rights reserved by {logoTitle.title} - {year}
        </p>
      </div>
    </div>
  );
};

export default Copyright;
