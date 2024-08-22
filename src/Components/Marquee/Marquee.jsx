import React from "react";

const Marquee = ({ id, length, src, number }) => {
  const width = 100 / length;
  return number ? (
    <div
      style={{ width: width + "%" }}
      className={`h-full ${
        id == 1
          ? "border-b-[1px] border-t-[1px] border-r-[1px]"
          : "border-[1px]"
      } border-[#3E3E46] flex justify-evenly items-center`}
    >
      <img
        className="w-9 sm-custom:w-10 sm:w-12 md:w-16 lg:w-24 xl:w-28"
        src={`${src}`}
        alt=""
      />
      <p className="text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl text-white">
        {number}
      </p>
    </div>
  ) : (
    <div className={`shrink-0 flex justify-evenly items-center`}>
      <img
        className="w-8 sm-custom:w-9 sm:w-12 md:w-14 lg:w-16 xl:w-24"
        src={`${src}`}
        alt=""
      />
    </div>
  );
};

export default Marquee;
