import React from "react";
import { MdSubdirectoryArrowRight } from "react-icons/md";

const Button = ({ text = "Live Website" }) => {
  return (
    <div className="h-8 w-36 rounded-full flex justify-evenly items-center bg-white">
      <p className="text-sm tracking-wide font-[Satoshi-Regular]">{text}</p>
      <MdSubdirectoryArrowRight style={{ transform: "translateY(15%)" }} />
    </div>
  );
};

export default Button;
