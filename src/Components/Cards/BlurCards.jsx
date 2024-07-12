import React from "react";

const BlurCards = ({ heading, number, text, top, left }) => {
  return (
    <div
      style={{
        backdropFilter: "blur(30px)",
        top,
        left,
        backgroundColor: "rgba(255, 255, 255, .04)",
        boxShadow: "0 25px 500px -12px rgba(255, 255, 255, .08)",
      }}
      className="min-h-[400px] w-[440px] p-6 grid auto-rows-min item content-evenly border border-[#1C191A] text-white leading-none rounded-3xl absolute z-[2]"
    >
      <p className="text-3xl">{heading}</p>
      <p className="text-[150px]">{number}</p>
      <p className="text-xl">{text}</p>
    </div>
  );
};

export default BlurCards;
