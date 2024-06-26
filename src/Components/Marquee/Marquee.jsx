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
      <img src={`${src}`} alt="" />
      <p className="text-4xl text-white">{number}</p>
    </div>
  ) : (
    <div className={`h-full flex justify-evenly items-center`}>
      <img src={`${src}`} alt="" />
    </div>
  );
};

export default Marquee;
