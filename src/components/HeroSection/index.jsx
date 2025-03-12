import React from "react";
import CurrencyForm from "./CurrencyForm";
import SectionContent from "./SectionContent";

const HeroSection = ({ presaleAddress }) => {
  

  return (
    <div className="flex flex-col items-center px-28">
 
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-around items-center gap-6 lg:gap-4 pt-8">
          <SectionContent presaleAddress={presaleAddress} />
          <CurrencyForm presaleAddress={presaleAddress} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
