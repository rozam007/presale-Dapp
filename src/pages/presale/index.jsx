import SectionPartition from "../../components/Common/SectionPartition";
import HeroSection from "../../components/HeroSection/index";
import HowToBuy from "../../components/HowToBuy/index";
import React, { useEffect } from "react";
import { useActiveAccount } from "thirdweb/react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Presale = () => {
  const { presaleAddress } = useParams();
  const account = useActiveAccount();

  useEffect(() => {
    if (!account) {
      toast.error("Please connect your wallet.");
    }
  }, [account]);

  return (
    <>
      <HeroSection presaleAddress={presaleAddress} />
      <SectionPartition />
      <HowToBuy />
      {/* <TokenDetail /> */}
    </>
  );
};

export default Presale;
