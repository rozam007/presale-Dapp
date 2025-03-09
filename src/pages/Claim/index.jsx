import { useParams } from "react-router-dom";
import Claim from "../../components/Claim/index";
import React from "react";

const ClaimPage = () => {
    const {presaleAddress} = useParams();
  return (
    <div>
          <Claim presaleAddress={presaleAddress } />
    </div>
  );
};

export default ClaimPage;
