// import { useNavigate } from "react-router-dom";
import React from "react";
import { useGetContract } from "../../Hooks";
import { useReadContract } from "thirdweb/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SectionContent = ({presaleAddress}) => {
  // const navigate = useNavigate()

  const contract = useGetContract();

  if (!contract) {
    toast.error("Please connect your wallet.")
  }
  
  const { data: owner } = useReadContract({ contract, method: "owner" });
  
  console.log('owner: ', owner)

  return (
    <div>
      <h1 className="text-[45px] sm:text-[50px] md:text-[90px] leading-[54px] md:leading-[96px] traking-[-2px] text-light-white max-w-[700px] text-center md:text-left">
        Buy{" "}
        <span className="text-themeColor">Tokens</span>
      </h1>
      <h2 className="text-xl traking-[-2px] mt-6 font-normal text-light-white max-w-[700px] text-center md:text-left">
        Buy tokens effortlessly from your selected presale and secure your investment in just a few clicks!
        {/* <br></br> */}
        {/* <span className="text-themeColor text-xl text-center md:text-left">
          Welcome to the PayFi revolution!
        </span> */}
      </h2>
      {/* <button
        onClick={handleRouting}
        className="px-4 py-6 bg-themeColor my-10 rounded-full text-white"
      >
        Click here to claim
      </button> */}
    </div>
  );
};

export default SectionContent;
