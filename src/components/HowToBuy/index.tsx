"use client"
import React from "react";
import SectionHeader from "./SectionHeader";
import SectionCard from "./SectionCard";

const HowToBuy = () => {
  return (
    <div
      id="buy"
      className="w-full flex flex-col items-center px-4 lg:px-12 2xl:px-20 md:gap-12 bg-buySectionBg py-12"
    >
      <SectionHeader />
      <SectionCard />
    </div>
  );
};

export default HowToBuy;
