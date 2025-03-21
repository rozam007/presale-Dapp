import React, { useState } from "react";
// import { useRouter } from "next/navigation";
import LaunchpadListCard from "../../components/LaunchpadListCard/index";
// import FiltersBar from "./FiltersBar";
// import { CirclePlus } from "@/icons";
import PresaleFilters from "../../components/PresaleFilters/index";
import { useNavigate } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import SkeletonPresaleCard from "../../Skeletons/SkeletonPresaleCard";

const Lanunchpad = () => {
  //   const router = useRouter();
  const navigate = useNavigate();
  //   const history = useHistory();
  const [presales, setPresales] = useState([]);
  const [loading, setLoading] = useState([]);

  const handleRouting = () => {
    console.log("click");
    navigate(`/createPresale`);
  };

  return (
    <div className="w-full px-4 py-5 lg:px-12 2xl:px-20">
      <div className="flex justify-between items-center bg-launchpadBg border-b px-2 py-4">
        <h1 className="font-semibold text-xl p-4 uppercase">
          Launchpad List 🚀
        </h1>
        <button
          onClick={handleRouting}
          className="flex gap-1 items-center justify-center bg-themeColor px-3 py-3 rounded-md"
        >
          <CiCirclePlus />
          Create
        </button>
      </div>

      <div className="mb-4 mt-4">
        <PresaleFilters setPresales={setPresales} setLoading={setLoading} />
      </div>

      {/* Cards Listing Grid  */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-60">
          {[1, 2, 3, 4].map((value) => (
            <div key={value} className="h-full">
              <SkeletonPresaleCard />
            </div>
          ))}
        </div>
      ) : presales.length === 0 ? (
        <div className="flex justify-center items-center min-h-60">
          <p>No Presale Found!!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center mb-4 gap-6">
          <LaunchpadListCard presales={presales} />
        </div>
      )}
    </div>
  );
};

export default Lanunchpad;
