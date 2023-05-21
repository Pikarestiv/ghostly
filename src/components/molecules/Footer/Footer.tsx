import Typography from "@atoms/Typography";
import React from "react";
import largeGhost from "@/images/ghost.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark py-[36px] text-light w-full flex flex-col gap-[28px] items-center justify-center">
      <img className="w-[128px] h-[128px]" src={largeGhost} alt="large ghost" />
      <Typography className="text-light font-bold text-[32px]">
        Ghostly | 2023
      </Typography>
    </footer>
  );
};

export default Footer;
