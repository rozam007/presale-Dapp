import React from "react";
import { buySectionCard } from "../../Data/index";

const SectionCard = () => {
  return (
    <>
      <div className="flex-grow mt-12">
        <div className="flex flex-wrap justify-center m-auto gap-12">
          {buySectionCard.map((card) => (
            // Section Card
            <div
              key={card.title}
              className={`flex flex-col w-auto h-auto sm:w-[370px] sm:h-[318px] p-4 gap-4 ${
                card.title === "Select Currency" ? "2xl:mt-0" : "2xl:mt-12"
              } bg-whiteColor rounded-lg`}
            >
              {/* Card Header  */}
              <div className="flex flex-col gap-2">
                <img className="w-6" src={card.image} alt="title-image" />
                <span className="text-[21px] font-semibold text-black">
                  {card.title}
                </span>
              </div>

              {/* Card Body */}
              <span className="flex-grow text-buySectionCardColor text-[15px]">
                {card.paragraph}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionCard;
