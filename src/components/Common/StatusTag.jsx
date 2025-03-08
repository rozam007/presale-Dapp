import { CiCirclePlus } from "react-icons/ci";
import React from "react";

const statusColors = {
  Upcoming: "border-yellow-500 text-yellow-500",
  "Sale Live": "border-green-500 text-green-500",
  Ended: "border-red-500 text-red-500",
  Canceled: "border-gray-300 text-gray-300",
};
const StatusTag = ({ status }) => {
  return (
    <div
      className={`flex items-center gap-1 bg- px-3 py-1 rounded-full border ${statusColors[status]}`}
    >
          {/* <CircleFillIcon size={10} /> */}
          <CiCirclePlus size={10} />
      <span>{status}</span>
    </div>
  );
};
export default StatusTag;