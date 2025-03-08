import React from "react";
// import Link from "next/link";
import { policyLinks } from "@/data";
import { Link } from "react-router-dom";

const PolicyLinks = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:flex text-black md:gap-x-5 text-xs md:text-[15px]">
        {policyLinks.map((link) => (
          <div key={link.name}>
            <Link to={link.url}>
              <span className="border-b border-blackColor">{link.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default PolicyLinks;
