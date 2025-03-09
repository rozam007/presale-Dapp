import React from "react";
import CurrencyForm from "./CurrencyForm";
import SectionContent from "./SectionContent";
import { useNavigate } from "react-router-dom";

const HeroSection = ({ presaleAddress }) => {
  const navigate = useNavigate();
  const handleAdminClick = () => {
    navigate(`/presale/${presaleAddress}/admin`);
  };
  const handleClaimClick = () => {
    navigate(`/presale/${presaleAddress}/claim`);
  };
  return (
    <div className="flex flex-col items-end px-28">
      <div className="flex gap-4">

      <button
        className="w-[150px] px-2 py-4 bg-themeColor my-10 rounded-md text-white"
        onClick={() => handleClaimClick()}
      >
        Claim Tokens
      </button>
      <button
        className="w-[150px] px-2 py-4 bg-themeColor my-10 rounded-md text-white"
        onClick={() => handleAdminClick()}
        >
        Go to Admin
      </button>
        </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-around items-center gap-6 lg:gap-4">
          <SectionContent presaleAddress={presaleAddress}/>
          <CurrencyForm />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
