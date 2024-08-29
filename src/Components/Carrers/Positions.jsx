import React from "react";
import Button from "../Buttons/Button";

const Positions = ({ title, role }) => {
  return (
    <div className="h-fit w-[95%] mx-auto py-8 sm:py-10 md:py-14 grid grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-cols-3 justify-center items-center gap-[12px_0px] md-gap-[0_0] border-t-2 border-[#7a7a76] text-white">
      <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide">
        {title}
      </span>
      <div className="flex flex-col justify-center items-center leading-none">
        <p className="w-full text-xs sm:text-2xl lg:text-3xl tracking-wider text-end">
          {role}
        </p>
        <div className="w-full text-end">
          <span>Remote </span>
          <span>Full-time</span>
        </div>
      </div>
      <span className="my-1 md:my-0 col-span-2 md:col-span-1 justify-self-center md:justify-self-end">
        <Button bgColor="transparent" text="Start a project" />
      </span>
    </div>
  );
};

export default Positions;
