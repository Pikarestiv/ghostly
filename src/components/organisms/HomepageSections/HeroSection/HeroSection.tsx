import React from "react";
import "./herosection.scss";
import Typography from "@atoms/Typography";
import CustomButton from "@atoms/CustomButton";
import largeGhost from "@/images/ghost.svg";
import Header from "@mols/Header";

const HeroSection: React.FC = () => {
  return (
    <div className="hero__section h-screen relative flex flex-col items-center">
      <Header />
      <div className="absolute h-screen hero__section-image w-full z-[-1]">
        <div className="relative w-full overflow-hidden">
          <img
            className="absolute top-[40px] right-[-320px]"
            src={largeGhost}
            alt="large ghost"
          />
        </div>
      </div>
      <Typography
        variant="h2"
        className="text-6xl text-light font-semibold text-center"
      >
        Speak Your Mind
      </Typography>
      <Typography
        variant="h1"
        className="text-[64px] text-light font-extrabold text-center mb-[40px]"
      >
        Anonymously
      </Typography>
      <Typography className="text-2xl text-white font-normal text-center max-w-[1090px] mb-[40px]">
        Use Ghost to send anonymous messages to anyone, anywhere in the world.
        Whether it's a confession, a compliment, or just a random thought, you
        can express yourself freely and without revealing your identity.
      </Typography>
      <CustomButton
        children="Sign Up"
        className="bg-red hover:bg-light text-white hover:text-red"
        onClick={() => window.open("/register", "_self")}
      />
    </div>
  );
};

export default HeroSection;
