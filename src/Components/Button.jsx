import React from "react";
import { MdSubdirectoryArrowRight } from "react-icons/md";

const Button = ({ text = "Live Website" }) => {
  return (
    <div className="h-9 w-40 rounded-full flex justify-evenly items-center bg-white">
      <p className="text-lg tracking-wide">{text}</p>
      <MdSubdirectoryArrowRight style={{ transform: "translateY(15%)" }} />
    </div>
  );
};

export default Button;
