import React from "react";

const BlurCards = ({ heading, number, text, top, left, screenWidth }) => {
  let leftPosition, topPosition;
  if (screenWidth < 640) {
    leftPosition = left.small_sm;
    topPosition = top.small_sm;
  } else if (screenWidth >= 640 && screenWidth < 768) {
    leftPosition = left.sm;
    topPosition = top.sm;
  } else if (screenWidth >= 768 && screenWidth < 1024) {
    leftPosition = left.md;
    topPosition = top.md;
  } else if (screenWidth >= 1024 && screenWidth < 1280) {
    leftPosition = left.lg;
    topPosition = top.lg;
  } else if (screenWidth >= 1280) {
    leftPosition = left.xl;
    topPosition = top.xl;
  }
  return (
    <div
      style={{
        backdropFilter: "blur(30px)",
        top: topPosition,
        left: number == "77" ? "auto" : leftPosition,
        right: number == "77" ? leftPosition : "auto",
        backgroundColor: "rgba(255, 255, 255, .04)",
        boxShadow: "0 25px 500px -12px rgba(255, 255, 255, .08)",
      }}
      className="h-fit sm:min-h-[250px] md:min-h-[300px] lg:min-h-[350px] xl:min-h-[400px] w-[200px] sm:w-[250px] md:w-[300px] lg:w-[375px] xl:w-[440px] p-5 sm:p-6 grid auto-rows-min item content-evenly border border-[#1C191A] text-white leading-none rounded-3xl absolute z-[2]"
    >
      <p className="text-base sm:text-xl md:text-2xl lg:text-3xl">{heading}</p>
      <p className="text-3xl sm:text-5xl md:text-7xl lg:text-[150px]">
        {number}
      </p>
      <p className="text-xs sm:text-base md:text-lg lg:text-xl">{text}</p>
    </div>
  );
};

export default BlurCards;
