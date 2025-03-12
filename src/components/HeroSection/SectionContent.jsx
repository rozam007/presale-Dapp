import React from "react";
import { useGetPresaleContract } from "../../Hooks";
import { useReadContract } from "thirdweb/react";
import presaleAbi from "../../ABI/presaleContract.json"

const SectionContent = ({presaleAddress}) => {
  const contract = useGetPresaleContract(presaleAddress, presaleAbi);
  
  const { data: owner } = useReadContract({ contract, method: "function owner() public view returns (address)" });
  
  console.log('owner: ', owner)

  return (
    <div>
      <h1 className="text-[45px] sm:text-[50px] md:text-[90px] leading-[54px] md:leading-[96px] traking-[-2px] text-light-white max-w-[700px] text-center md:text-left">
        Buy{" "}
        <span className="text-themeColor">Tokens</span>
      </h1>
      <h2 className="text-xl traking-[-2px] mt-6 font-normal text-light-white max-w-[700px] text-center md:text-left">
        Buy tokens effortlessly from your selected presale and secure your investment in just a few clicks!
      </h2>
    </div>
  );
};

export default SectionContent;
