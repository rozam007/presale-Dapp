import React from "react";
import { contactInfo } from "../../Data/index";
import { Link } from "react-router-dom";
// import Link from "next/link";

const ContactInfo = () => {
  return (
    <>
      {/* Contact Information  */}

      {/* Layout from medium screens  */}
      <div className="hidden md:flex flex-col leading-9 text-black">
        <h1 className="text-footerColor pb-[6px]">Contact info:</h1>

        {/* Mails  */}
        {contactInfo.map((contact) => (
          <div key={contact.title} className="hover:underline">
            <Link to={`mailto:${contact.mail}`}>{contact.title}</Link>
          </div>
        ))}
      </div>

      {/* Layout for small screems  */}

      <div className="text-xs border-b-2 border-black py-6 md:py-0 md:border-none">
        {/* Contact info for Small screens  */}
        <div className="grid grid-cols-2 leading-9 text-black md:hidden">
          <h1 className="text-footerColor pb-[6px]">Contact info:</h1>
          <div>
            {/* Mails  */}
            {contactInfo.map((contact) => (
              <div
                key={contact.title}
                className="hover:underline flex flex-col gap-2"
              >
                <Link to={`mailto:${contact.mail}`}>{contact.title}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
