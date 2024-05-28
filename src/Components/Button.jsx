import React from "react";
import { MdSubdirectoryArrowRight } from "react-icons/md";

const Button = () => {
  return (
    <div className="h-9 w-40 rounded-full flex justify-evenly items-center bg-white">
      <p className="text-lg tracking-wide">Start a project</p>
      <MdSubdirectoryArrowRight style={{ transform: "translateY(15%)" }} />
    </div>
  );
};

export default Button;
