import React from "react";
// import AppLayout from "@temps/AppLayout";
// import AppLayout from "../../templates/AppLayout";
import "./homepage.scss";
import FeaturesSection from "@orgs/HomepageSections/FeaturesSection.tsx";
import Footer from "@mols/Footer";
import HeroSection from "@/components/organisms/HomepageSections/HeroSection";

const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <div className="container mt-[100px]">
        <FeaturesSection />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
