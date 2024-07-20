import React, { useState } from "react";

const Para = ({ category, heading, description }) => {
  const [increase, setIncrease] = useState(false);
  return (
    <div
      onMouseMove={() => setIncrease(true)}
      onMouseLeave={() => setIncrease(false)}
      className="flex flex-col gap-5 py-5 border-b-[1px] border-[#1F1F23] text-white relative"
    >
      <span className="grid grid-cols-[10%_90%] items-center">
        <p className="text-2xl text-[#dddde8]">{category}</p>
        <p className="text-xl">{heading}</p>
      </span>
      <p className="text-xl hidden">{description}</p>
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
