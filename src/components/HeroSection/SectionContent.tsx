import { useNavigate } from "react-router-dom";
import React from "react";

const SectionContent = () => {
  const navigate = useNavigate()

  const handleRouting = () => {
    navigate(`/claim`);
  };

  return (
    <div className="">
      <h1 className="text-[45px] sm:text-[50px] md:text-[90px] leading-[54px] md:leading-[96px] traking-[-2px] text-light-white max-w-[700px] text-center md:text-left">
        Cross-border Payments{" "}
        <span className="text-themeColor">Reinvented</span>
      </h1>
      <h2 className="text-xl traking-[-2px] mt-6 font-normal text-light-white max-w-[700px] text-center md:text-left">
        EarlyMint enables users to pay fiat into any bank account around the
        world using crypto, by just simply connecting your wallet. <br></br>
        <span className="text-themeColor text-xl text-center md:text-left">
          Welcome to the PayFi revolution!
        </span>
      </h2>
      <button
        onClick={handleRouting}
        className="px-4 py-6 bg-themeColor my-10 rounded-full text-white"
      >
        Click here to claim
      </button>
    </div>
  );
};

export default SectionContent;
