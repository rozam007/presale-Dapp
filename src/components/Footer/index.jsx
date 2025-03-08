import React from "react";
import FooterLogo from "./FooterLogo";
import Disclaimer from "./Disclaimer";
import Copyright from "./Copyright";
// import PolicyLinks from "./PolicyLinks";
import ContactInfo from "./ContactInfo";
// import NavLinks from "../common/Navlinks";

const Footer = () => {
  return (
    <div className="pt-[43px] md:pt-[55px] pb-[26px] md:pb-[103px] bg-whiteColor text-black">
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-[88%]">
          {/*<-------- Layout form medium screens --------->  */}
          <div className="hidden md:flex items-center justify-between w-full pb-8 border-b-2 border-black md:pb-12">
            <FooterLogo />
            {/* <PolicyLinks /> */}
          </div>

          <div className="hidden md:flex justify-between w-full items-start border-b-2 py-12 border-black">
            <Disclaimer />
            <ContactInfo />
          </div>
          <div className="hidden md:flex flex-wrap items-center justify-center w-full pt-[31px]">
            {/* <NavLinks /> */}
            <Copyright />
          </div>

          {/* <------------Layout for small screens only--------> */}
          <div className="flex flex-col justify-between w-full pb-8 border-b-2 border-black md:hidden">
            <FooterLogo />
            <Disclaimer />
          </div>

          {/* <div className="flex flex-col gap-4 w-full border-b-2 py-12 border-black md:hidden">
            <NavLinks />
            <PolicyLinks />
          </div> */}
          <div className="md:hidden">
            <ContactInfo />
          </div>
          <div className="md:hidden flex justify-center">
            <Copyright />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
