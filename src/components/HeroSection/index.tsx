"use client"
import CurrencyForm from "./CurrencyForm";
import SectionContent from "./SectionContent";

const HeroSection = () => {
  return (
    <div>
      <div className="container mx-auto mt-10 p-4">
        <div className="flex flex-col lg:flex-row justify-around items-center gap-6 lg:gap-4">
          <SectionContent />
          <CurrencyForm />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
