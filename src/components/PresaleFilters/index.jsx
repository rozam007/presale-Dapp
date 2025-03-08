import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
// import styles from "../../forms/CreatePresaleForm/cpf.module.css";
import filtersStyles from "./presaleFilters.module.css";
import client from "../../lib/apollo-client";
// import { GET_PRESALES, query } from "@/queries/presaleQueries";
// import { gql } from "@apollo/client";
import { GET_EXACT_PRESALES } from "../../queries/index";

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
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  liquidityPortion: z.string().optional(),
  softCap: z.string().optional(),
  hardCap: z.string().optional(),
  minBuy: z.string().optional(),
  maxBuy: z.string().optional(),
  saleRate: z.string().optional(),
  listingRate: z.string().optional(),
  softCapCondition: z.enum(["gt", "lt", "gte", "lte"]).optional(),
  hardCapCondition: z.enum(["gt", "lt", "gte", "lte"]).optional(),
  minBuyCondition: z.enum(["gt", "lt", "gte", "lte"]).optional(),
  maxBuyCondition: z.enum(["gt", "lt", "gte", "lte"]).optional(),
  saleRateCondition: z.enum(["gt", "lt", "gte", "lte"]).optional(),
  listingRateCondition: z.enum(["gt", "lt", "gte", "lte"]).optional(),
  liquidityPortionCondition: z.enum(["gt", "lt", "gte", "lte"]).optional(),
});

const PresaleFilters = ({ setPresales }) => {
   const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(filterSchema),
  });

  // Fetch all presales on component mount
  useEffect(() => {
    fetchPresales();
  }, []);

  const fetchPresales = async (filters = {}) => {
    try {
      const result = await client.query({
        query: GET_EXACT_PRESALES,
        variables: filters,
        fetchPolicy: "network-only",
      });

      setPresales(result?.data?.presaleCreateds);
    } catch (error) {
      console.error("Error fetching presales:", error);
    }
  };

  const onSubmit = async (data) => {
    const formattedFilters = {};

    // Convert values into numbers and apply conditions
    const fields = [
      "hardCap",
      "softCap",
      "minBuy",
      "maxBuy",
      "saleRate",
      "listingRate",
      "liquidityPortion",
    ];
    fields.forEach((field) => {
      if (data[field] && data[`${field}Condition`]) {
        formattedFilters[field] = {
          [data[`${field}Condition`]]: Number(data[field]),
        };
      }
    });

    console.log("Applying filters:", formattedFilters);
    fetchPresales(formattedFilters); // Fetch presales with filters
  };

  const handleClear = () => {
    reset(); // Reset form fields
    fetchPresales(); // Fetch all presales again
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 border rounded bg-launchpadBg border-white shadow"
    >
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-2">
          <p>Start Date</p>
          {/* <div className="flex">
            <select
              {...register("startDate")}
              className={`${filtersStyles.dropdown}`}
            >
              <option value="gt">{">"}</option>
              <option value="lt">{"<"}</option>
              <option value="gte">{">="}</option>
              <option value="lte">{"<="}</option>
            </select> */}
          <input
            type="datetime-local"
            {...register("startDateCondition")}
            className={`${filtersStyles.inputBox}`}
          />
          {/* </div> */}
        </div>

        <div className="flex flex-col gap-2">
          <p>End Date</p>
          {/* <div className="flex">
            <select
              {...register("endDate")}
              className={`${filtersStyles.dropdown}`}
            >
              <option value="gt">{">"}</option>
              <option value="lt">{"<"}</option>
              <option value="gte">{">="}</option>
              <option value="lte">{"<="}</option>
            </select> */}
          <input
            type="datetime-local"
            {...register("endDateCondition")}
            className={`${filtersStyles.inputBox}`}
          />
          {/* </div> */}
        </div>
        {/* Sale Rate */}

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

        {/* Listing Rate */}
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
  );
};

export default PresaleFilters;
