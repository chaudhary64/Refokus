import React from "react";

const BlurCards = ({ heading, number, text }) => {
  return (
    <div
      style={{ backdropFilter: "blur(50px)" }}
      className="min-h-96 w-96 px-5 grid auto-rows-min item content-evenly border border-[#1C191A] text-white bg-[#0A0A0A] rounded-3xl"
    >
      <p className="text-xl">{heading}</p>
      <p className="text-9xl">{number}</p>
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default BlurCards;
