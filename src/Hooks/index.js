import { getContract, prepareContractCall } from "thirdweb";
import {
  useActiveWalletChain,
  useReadContract,
  useSendTransaction,
} from "thirdweb/react";
import { thirdWebClient } from "../ThirdWebClient/index";
// import { PresalePayload } from "@/types";
import { factoryContractAddress } from "../Contants/index";

if (!factoryContractAddress) {
  throw new Error("Factory contract address is not defined");
}

export const useGetContract = () => {
  const chain = useActiveWalletChain();

  const contract = getContract({
    client: thirdWebClient,
    address: factoryContractAddress,
    chain,
  });

  return contract;
};

export const useCreatePresale = () => {
  const {
    mutateAsync: sendTransaction,
    isPending,
    isSuccess,
    isError,
    error,
  } = useSendTransaction(); // Use mutateAsync for async handling
  const contract = useGetContract();

  const createPresale = async (payload) => {
    try {
      if (!contract) {
        throw new Error(
          "Contract is not initialized. Please check the connection."
        );
      }

      const {
        startTime,
        endTime,
        liquidity,
        saleRate,
        listingRate,
        hardCap,
        softCap,
        maxBuy,
        minBuy,
      } = payload;

      console.log("payload: ", payload);

      if (
        startTime === undefined ||
        endTime === undefined ||
        liquidity === undefined ||
        saleRate === undefined ||
        listingRate === undefined ||
        hardCap === undefined ||
        softCap === undefined ||
        maxBuy === undefined ||
        minBuy === undefined
      ) {
        throw new Error(
          "One or more required parameters are missing or undefined."
        );
      }

      const transaction = prepareContractCall({
        contract: contract,
        method:
          "function createPresale( uint64 _startTime, uint64 _endTime, uint8 _liquidityPortion, uint256 _saleRate, uint256 _listingRate, uint256 _hardCap, uint256 _softCap, uint256 _maxBuy, uint256 _minBuy ) external returns (address)",
        params: [
          BigInt(startTime),
          BigInt(endTime),
          Number(liquidity),
          BigInt(saleRate),
          BigInt(listingRate),
          BigInt(hardCap),
          BigInt(softCap),
          BigInt(maxBuy),
          BigInt(minBuy),
        ],
      });

      console.log("Prepared Transaction:", transaction);

      const txReceipt = await sendTransaction(transaction);
      console.log("Transaction Success:", txReceipt);

      return txReceipt;
    } catch (error) {
      console.error("Transaction Failed:", error);
      throw error;
    }
  };

  return {
    createPresale,
    isPending,
    isSuccess,
    isError,
    error,
  };
};

export const useTokensSold = (saleRate) => {
  const contract = useGetContract();
  const TOKEN_DECIMALS = 18;

  const {data: ethRaised} = useReadContract({contract, method: "ethRaised"});

  let computedTokensSold = 0;
  if (ethRaised !== undefined) {
    computedTokensSold =
      (Number(ethRaised) * saleRate) / 10 ** (18 + TOKEN_DECIMALS - 18);
  }
  return {
    tokenSold: computedTokensSold,
  };
};
