import React from "react";
import FeaturesSection from "@orgs/HomepageSections/FeaturesSection";
import Footer from "@mols/Footer";
import HeroSection from "@orgs/HomepageSections/HeroSection";

const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      <HeroSection />
      {/* <div className="mt-[100px] mx-[175px] flex flex-col items-center"> */}
      <div className="container mt-[100px]">
        <div className="flex flex-col items-center">
          <FeaturesSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
