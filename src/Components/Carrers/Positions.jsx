import React from "react";
import Button from "../Buttons/Button";

const Positions = ({ title, role }) => {
  return (
    <div className="h-fit w-[95%] mx-auto py-14 grid grid-cols-3 justify-center items-center border-t-2 border-[#7a7a76] text-white">
      <span className="text-7xl tracking-wide">{title}</span>
      <div className="flex flex-col justify-center items-center leading-none">
        <p className="text-3xl tracking-wider">{role}</p>
        <div>
          <span>Remote</span>
          <span>Full-time</span>
        </div>
      </div>
      <span className="justify-self-end">
        <Button bgColor="transparent" text="Start a project" />
      </span>
    </div>
  );
};

export default Positions;
