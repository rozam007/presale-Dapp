"use client";

import SectionPartition from "../../components/Common/SectionPartition";
import HeroSection from "../../components/HeroSection/index";
import HowToBuy from "../../components/HowToBuy/index";
import { useGetContract } from "../../Hooks/index";
// import TokenDetail from "@/components/TokenDetail";
import React from "react";
import { useReadContract } from "thirdweb/react";
import {useParams} from "react-router-dom"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { sepolia } from "thirdweb/chains";
// import { getContract, Contract } from "thirdweb";
// import { useReadContract } from "thirdweb/react";
// import { thirdWebClient } from "@/app/client";

// interface PresalePageProps {
//   params: Promise<{
//     presaleAddress: string;
//   }>;
// }

const Presale = () => {
    const { presaleAddress } = useParams()
    console.log("presaleAddress: ", presaleAddress)
  // ✅ Unwrap `params` using `use()`
//   const { presaleAddress } = params;
  const contract = useGetContract();

  if (!contract) {
      toast.error("Please connect your wallet.")
    }

  const { data: pool } = useReadContract({contract, method: "owner", params: ["0x942e8b700c0f72aC653D962E12CcDB81c1AEc09d"]});
  console.log('pool: ', pool)

  // const [contract, setContract] = useState<Contract | null>(null);
  // const [isContractReady, setIsContractReady] = useState(false);

  // useEffect(() => {
  //   const fetchContract = async () => {
  //     if (presaleAddress) {
  //       try {
  //         const newContract = await getContract({
  //           client: thirdWebClient,
  //           address: presaleAddress,
  //           chain: sepolia,
  //         });

  //         setContract(newContract);
  //         setIsContractReady(true); // ✅ Mark contract as ready
  //       } catch (error) {
  //         console.error("Error fetching contract:", error);
  //       }
  //     }
  //   };

  //   fetchContract();
  // }, [presaleAddress]);

//   console.log("router: ", presaleAddress);
  // console.log("contract: ", contract);

  // ✅ Only call `useReadContract` when the contract is ready
  // const { data, isLoading } = useReadContract(
  //   isContractReady && contract ? { contract, method: "Pool" } : undefined
  // ) || { data: null, isLoading: true };

  // console.log("data: ", data, isLoading);

  return (
    <>
          <HeroSection presaleAddress={ presaleAddress} />
      <SectionPartition />
      <HowToBuy />
      {/* <TokenDetail /> */}
    </>
  );
};

export default Presale;
