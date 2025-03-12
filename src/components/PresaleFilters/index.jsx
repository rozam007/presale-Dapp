import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
// import styles from "../../forms/CreatePresaleForm/cpf.module.css";
import filtersStyles from "./presaleFilters.module.css";
import client from "../../lib/apollo-client";
// import { GET_PRESALES, query } from "@/queries/presaleQueries";
// import { gql } from "@apollo/client";
import { GET_EXACT_PRESALES } from "../../queries/index";
import { buildQuery } from "../../queries/queryBuilder";
import { getSaleStatus } from "../SaleStatus";
import Pagination from "../Pagination";

// const subgraphQlUrl = process.env.NEXT_PUBLIC_SUBGRAPH_URL;

// const filterSchema = z.object({
//   startDate: z.string().optional(),
//   endDate: z.string().optional(),
//   liquidityPortion: z.string().optional(),
//   softCap: z.string().optional(),
//   hardCap: z.string().optional(),
//   minBuy: z.string().optional(),
//   maxBuy: z.string().optional(),
//   saleRate: z.string().optional(),
//   listingRate: z.string().optional(),
// softCapCondition: z.enum(["gt", "lt", "gte", "lte"]).optional(),
// hardCapCondition: z.enum(["gt", "lt", "gte", "lte"]).optional(),
// minBuyCondition: z.enum(["gt", "lt", "gte", "lte"]).optional(),
// maxBuyCondition: z.enum(["gt", "lt", "gte", "lte"]).optional(),
// saleRateCondition: z.enum(["gt", "lt", "gte", "lte"]).optional(),
// listingRateCondition: z.enum(["gt", "lt", "gte", "lte"]).optional(),
// liquidityPortionCondition: z.enum(["gt", "lt", "gte", "lte"]).optional(),
// startDateCondition: z.string().optional(),
// endDateCondition: z.string().optional(),
// });

const filterSchema = z.object({
  // startTime: z.string().optional(),
  // endTime: z.string().optional(),
  liquidityPortion: z.string().optional(),
  softCap: z.string().optional(),
  hardCap: z.string().optional(),
  minBuy: z.string().optional(),
  maxBuy: z.string().optional(),
  saleRate: z.string().optional(),
  listingRate: z.string().optional(),
  // startTimeCondition: z.enum(["gt", "lt", "gte", "lte"]).optional(),
  // endTimeCondition: z.enum(["gt", "lt", "gte", "lte"]).optional(),
  softCapCondition: z.enum(["gt", "lt", "gte", "lte"]).optional(),
  hardCapCondition: z.enum(["gt", "lt", "gte", "lte"]).optional(),
  minBuyCondition: z.enum(["gt", "lt", "gte", "lte"]).optional(),
  maxBuyCondition: z.enum(["gt", "lt", "gte", "lte"]).optional(),
  saleRateCondition: z.enum(["gt", "lt", "gte", "lte"]).optional(),
  listingRateCondition: z.enum(["gt", "lt", "gte", "lte"]).optional(),
  liquidityPortionCondition: z.enum(["gt", "lt", "gte", "lte"]).optional(),
});

const PresaleFilters = ({ setPresales, setLoading }) => {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [totalPages, setTotalPages] = useState(1);
  // const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const limitArray = [10, 20, 30, 40, 50];
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(filterSchema),
  });

  const fetchPresales = useCallback(
    async (filters = {}) => {
      setLoading(true)
      const offset = (page - 1) * limit;
      const query = buildQuery(filters, limit, offset);
      try {
        const obj = {
          query: query,
          variables: { ...filters, limit, offset },
          fetchPolicy: "network-only",
        };

        const result = await client.query(obj);
        let updatedResult = result?.data?.presaleCreateds?.map((presale) => ({
          ...presale,
          status: getSaleStatus(presale.startTime, presale.endTime),
        }));

        if (selectedStatus && selectedStatus !== "All") {
          updatedResult = updatedResult.filter(
            (presale) => presale.status === selectedStatus
          );
        }

        setTotalPages(Math.ceil(updatedResult.length / limit));

        setPresales(updatedResult);
      } catch (error) {
        console.error("Error fetching presales:", error);
      } finally {
        setLoading(false)
      }
    },
    [selectedStatus, setPresales, limit, page]
  );

  const onSubmit = async (data) => {
    const formattedFilters = {};

    // Convert values into numbers and apply conditions
    const fields = [
      "startTime",
      "endTime",
      "liquidityPortion",
      "saleRate",
      "listingRate",
      "hardCap",
      "softCap",
      "maxBuy",
      "minBuy",
    ];
    // fields.forEach((field) => {
    //   if (data[field]){
    //     formattedFilters[field] = Number(data[field]);
    //   }
    // });

    fields.forEach((field) => {
      if (data[field]) {
        const conditionKey = data[`${field}Condition`]
          ? `_${data[`${field}Condition`]}`
          : "";
        formattedFilters[`${field}${conditionKey}`] = Number(data[field]);
      }
    });

    console.log("Applying filters:", formattedFilters);
    fetchPresales(formattedFilters); // Fetch presales with filters
  };

  const handleClear = () => {
    reset(); // Reset form fields
    fetchPresales(); // Fetch all presales again
  };

  const handleStatusFilterChange = (event) => {
    const status = event.target.value;
    setSelectedStatus(status);
  };

  const handlePageChange = (value) => {
    setPage(value);
  };

  const handleItemChange = (event) => {
    setLimit(event.target.value);
  };

  useEffect(() => { fetchPresales(); }, [selectedStatus, page, limit, fetchPresales]);


  return (
    <div>
      <div className="flex justify-between items-center bg-launchpadBg border-b px-2 py-2">
        <h1 className="font-semibold text-xl p-4 uppercase">Filters 🚀</h1>
      </div>

      <div className="flex flex-col gap-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-4 rounded bg-launchpadBg shadow"
        >
          <div className="grid grid-cols-3 gap-4">
            {/* Start Time */}
            {/* <div className="flex flex-col gap-2">
            <p>Start Date</p>
            <div className="flex">
              <select
                {...register("startTimeCondition")}
                className={`${filtersStyles.dropdown}`}
              >
                <option value="gt">{">"}</option>
                <option value="lt">{"<"}</option>
                <option value="gte">{">="}</option>
                <option value="lte">{"<="}</option>
              </select>
              <input
                type="datetime-local"
                {...register("startTime")}
                className={`${filtersStyles.inputBox}`}
              />
            </div>
          </div> */}

            {/* End Time */}
            {/* <div className="flex flex-col gap-2">
            <p>End Date</p>
            <div className="flex">
            <select
              {...register("endTimeCondition")}
              className={`${filtersStyles.dropdown}`}
            >
              <option value="gt">{">"}</option>
              <option value="lt">{"<"}</option>
              <option value="gte">{">="}</option>
              <option value="lte">{"<="}</option>
            </select>
            <input
              type="datetime-local"
              {...register("endTime")}
              className={`${filtersStyles.inputBox}`}
            />
            </div>
          </div> */}

            {/* Liquidity Portion */}
            <div className="flex flex-col gap-2">
              <p>Liquidity Portion</p>
              <div className="flex">
                <select
                  {...register("liquidityPortionCondition")}
                  className={`${filtersStyles.dropdown}`}
                >
                  <option value="gt">{">"}</option>
                  <option value="lt">{"<"}</option>
                  <option value="gte">{">="}</option>
                  <option value="lte">{"<="}</option>
                </select>

                <input
                  className={`${filtersStyles.inputBox}`}
                  type="number"
                  placeholder="Liquidity Portion"
                  {...register("liquidityPortion")}
                />
              </div>
            </div>

            {/* Sale Rate */}
            <div className="flex flex-col gap-2">
              <p> Sale Rate</p>
              <div className="flex">
                <select
                  {...register("saleRateCondition")}
                  className={`${filtersStyles.dropdown}`}
                >
                  <option value="gt">{">"}</option>
                  <option value="lt">{"<"}</option>
                  <option value="gte">{">="}</option>
                  <option value="lte">{"<="}</option>
                </select>

                <input
                  className={`${filtersStyles.inputBox}`}
                  type="number"
                  placeholder="Sale Rate"
                  {...register("saleRate")}
                />
              </div>
            </div>

            {/* Listing Rate */}
            <div className="flex flex-col gap-2">
              <p>Listing Rate</p>
              <div className="flex">
                <select
                  {...register("listingRateCondition")}
                  className={`${filtersStyles.dropdown}`}
                >
                  <option value="gt">{">"}</option>
                  <option value="lt">{"<"}</option>
                  <option value="gte">{">="}</option>
                  <option value="lte">{"<="}</option>
                </select>

                <input
                  className={`${filtersStyles.inputBox}`}
                  type="number"
                  placeholder="Listing Rate"
                  {...register("listingRate")}
                />
              </div>
            </div>

            {/* Soft Cap */}
            <div className="flex flex-col gap-2">
              <p>Soft Cap</p>
              <div className="flex">
                <select
                  {...register("softCapCondition")}
                  className={`${filtersStyles.dropdown}`}
                >
                  <option value="gt">{">"}</option>
                  <option value="lt">{"<"}</option>
                  <option value="gte">{">="}</option>
                  <option value="lte">{"<="}</option>
                </select>
                <input
                  type="number"
                  placeholder="Soft Cap"
                  {...register("softCap")}
                  className={`${filtersStyles.inputBox}`}
                />
              </div>
            </div>

            {/* Hard Cap */}
            <div className="flex flex-col gap-2">
              <p>Hard Cap</p>
              <div className="flex">
                <select
                  {...register("hardCapCondition")}
                  className={`${filtersStyles.dropdown}`}
                >
                  <option value="gt">{">"}</option>
                  <option value="lt">{"<"}</option>
                  <option value="gte">{">="}</option>
                  <option value="lte">{"<="}</option>
                </select>

                <input
                  className={`${filtersStyles.inputBox}`}
                  type="number"
                  placeholder="Hard Cap"
                  {...register("hardCap")}
                />
              </div>
            </div>

            {/* Min Buy */}
            <div className="flex flex-col gap-2">
              <p>Min Buy</p>
              <div className="flex">
                <select
                  {...register("minBuyCondition")}
                  className={`${filtersStyles.dropdown}`}
                >
                  <option value="gt">{">"}</option>
                  <option value="lt">{"<"}</option>
                  <option value="gte">{">="}</option>
                  <option value="lte">{"<="}</option>
                </select>
                <input
                  type="number"
                  placeholder="Min Buy"
                  {...register("minBuy")}
                  className={`${filtersStyles.inputBox}`}
                />
              </div>
            </div>

            {/* Max Buy */}
            <div className="flex flex-col gap-2">
              <p>Max Buy</p>
              <div className="flex">
                <select
                  {...register("maxBuyCondition")}
                  className={`${filtersStyles.dropdown}`}
                >
                  <option value="gt">{">"}</option>
                  <option value="lt">{"<"}</option>
                  <option value="gte">{">="}</option>
                  <option value="lte">{"<="}</option>
                </select>
                <input
                  type="number"
                  placeholder="Max Buy"
                  {...register("maxBuy")}
                  className={`${filtersStyles.inputBox}`}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-2 justify-end">
            <button
              type="button"
              className="mt-4 bg-themeColor text-white p-2 rounded"
              onClick={() => handleClear()}
            >
              Clear
            </button>
            <button
              type="submit"
              className="mt-4 bg-themeColor text-white p-2 rounded"
            >
              Apply Filters
            </button>
          </div>
        </form>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col bg-launchpadBg border-b px-2 pb-4 ">
            <div className="flex justify-between">
              <h1 className="font-semibold text-xl p-4 uppercase">
                Presales 🚀
              </h1>

              <div className="flex justify-end items-center gap-4 w-[20%]">
                <p>filter by status</p>
                <select
                  value={selectedStatus}
                  onChange={handleStatusFilterChange}
                  className={`${filtersStyles.filterDropdown}`}
                >
                  <option value="All">All</option>
                  <option value="Upcoming">Upcoming</option>
                  <option value="Sale Live">Sale Live</option>
                  <option value="Ended">Ended</option>
                </select>
              </div>
            </div>

            

            <div className="flex gap-4 items-center justify-end">

              
              <div className="flex items-center gap-4 w-[30%]">
               <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />

               <p className="w-[55%]">Items Per Page</p>
                <select
                  value={limit}
                  onChange={handleItemChange}
                  className={filtersStyles.filterDropdown}
                  >
                  {limitArray.map((limit) => (
                    <option key={limit} value={limit}>
                      {limit}
                    </option>
                  ))}
                </select>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresaleFilters;
