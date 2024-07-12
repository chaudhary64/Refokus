import React from "react";

const BlurCards = ({ heading, number, text, top, left }) => {
  return (
    <div
      style={{ backdropFilter: "blur(50px)", top, left }}
      className="min-h-[400px] w-[440px] p-6 grid auto-rows-min item content-evenly border border-[#1C191A] text-white leading-none bg-[#0A0A0A] rounded-3xl absolute"
    >
      <p className="text-3xl">{heading}</p>
      <p className="text-[150px]">{number}</p>
      <p className="text-xl">{text}</p>
    </div>
  );
};

export default BlurCards;
