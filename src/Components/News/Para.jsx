import React, { useState } from "react";

const Para = ({ category, heading, description, grid }) => {
  const [increase, setIncrease] = useState(false);
  return (
    <div
      onMouseMove={() => setIncrease(true)}
      onMouseLeave={() => setIncrease(false)}
      className={`${
        grid ? "" : ""
      } flex flex-col gap-5  py-5 border-b-[1px] border-[#1F1F23] text-white relative`}
    >
      <span
        className={`grid ${
          grid ? "grid-cols-[22%_78%]" : "grid-cols-[10%_90%]"
        } items-center tracking-wider`}
      >
        <p className="text-2xl text-[#dddde8]">{category}</p>
        <p className="text-xl">{heading}</p>
      </span>
      <p className={`text-xl hidden bg-red-500`}>{description}</p>
      <span
        style={{ transition: "transform 1s" }}
        className={`inline-block h-[1px] w-full absolute top-full ${
          increase ? "scale-x-1" : "scale-x-0"
        } bg-white`}
      ></span>
    </div>
  );
};
export default Para;
