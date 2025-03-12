import { useParams } from "react-router-dom";
import PresaleSummary from "../../components/PresaleSummary/index";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useActiveAccount } from "thirdweb/react";

const AdminPage = () => {
  const { presaleAddress } = useParams;
  const account = useActiveAccount();

  useEffect(() => {
    if (!account) {
      toast.error("Please connect your wallet.");
    }
  }, [account]);
  return (
    <div className="py-12 flex justify-center items-center">
      <PresaleSummary presaleAddress={presaleAddress} />
    </div>
  );
};

export default AdminPage;
