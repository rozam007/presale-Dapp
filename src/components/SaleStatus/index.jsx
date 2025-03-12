import { useEffect, useState } from "react";
import StatusTag from "../Common/StatusTag";

const SaleStatus = ({ startTime, endTime }) => {
  console.log("time: ", startTime, endTime);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const updateStatus = () => {
      const now = Math.floor(Date.now() / 1000);

      if (now < startTime) {
        setStatus("Upcoming");
      } else if (now >= startTime && now < endTime) {
        setStatus("Sale Live");
      } else if (now > endTime) {
        setStatus("Ended");
      } else {
        setStatus("Unknown");
      }
    };

    updateStatus(); // Set initial status
    const interval = setInterval(updateStatus, 1000);

    return () => clearInterval(interval);
  }, [startTime, endTime]);

  return (
    status && (
      <div className="flex justify-end text-center">
        <StatusTag status={status} />
      </div>
    )
  );
};

export default SaleStatus;

/**
 * Utility function to get the sale status without hooks.
 */
export const getSaleStatus = (startTime, endTime) => {
  console.log("time: ", startTime, endTime);
  const now = Math.floor(Date.now() / 1000);

  if (now < startTime) {
    return "Upcoming";
  } else if (now >= startTime && now < endTime) {
    return "Sale Live";
  } else if (now > endTime) {
    return "Ended";
  } else {
    return "Unknown";
  }
};
