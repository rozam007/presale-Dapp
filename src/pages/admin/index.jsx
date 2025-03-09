import { useParams } from "react-router-dom";
import PresaleSummary from "../../components/PresaleSummary/index";
import React from "react";

const AdminPage = () => {
  const { presaleAddress } = useParams;
  console.log("presaleAddress: ", presaleAddress);
  return (
    <div className="py-12 flex justify-center items-center">
      <PresaleSummary presaleAddress={presaleAddress} />
    </div>
  );
};

export default AdminPage;
