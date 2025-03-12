import React from "react";
import { ConnectButton } from "thirdweb/react";
import { thirdWebClient } from "../../ThirdWebClient/index";
// import Link from "next/link";
// import logo from "../../public";
// import Image from "next/image";
import { logoTitle } from "../../Data/index";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={`w-full h-20 px-4 py-5 lg:px-12 2xl:px-20`}>
      <div className={`flex justify-between items-center`}>
        
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="logo"
            width={50}
            height={10}
            className="w-[31.01px] h-[16.02px] md:w-[55.71px] md:h-[28.78px]"
          />
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-whiteColor font-bold">
            {logoTitle.title}
          </h1>
        </Link>

        <div>
          <ConnectButton client={thirdWebClient} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
