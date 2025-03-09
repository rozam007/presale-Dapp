import { Navigate, useParams } from "react-router-dom";
import { useActiveAccount } from "thirdweb/react";
import { useQuery } from "@apollo/client";
import { GET_EXACT_PRESALES } from "../queries";

const PrivateRoutes = ({ dest }) => {
  const { presaleAddress } = useParams();
  console.log('address: ', presaleAddress)
  const walletAddress = useActiveAccount();

  const { data, loading, error } = useQuery(GET_EXACT_PRESALES, {
    fetchPolicy: "network-only",
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <Navigate to="/" />;

  const presale = data?.presaleCreateds?.find((p) => p.presaleAddress === presaleAddress);
  const presaleOwner = presale?.owner;

  console.log("Presale Address:", presaleAddress);
  console.log("Presale Owner:", presaleOwner);
  console.log("Wallet Address:", walletAddress);

  return presaleOwner === walletAddress ? dest : <Navigate to="/" />;
};

export default PrivateRoutes;
