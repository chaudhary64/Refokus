import React from "react";

const Marquee = ({ id, length, src, number }) => {
  const width = 100 / length;
  return (
    <div
      style={{ width: width + "%" }}
      className={`h-full ${
        id == 1 ? "border-b-2 border-t-2 border-r-2" : "border-2"
      } border-[#3E3E46] flex justify-evenly items-center`}
    >
      <img src={`${src}`} alt="" />
      <p className="text-4xl text-white">{number}</p>
    </div>
  );
};

export default Marquee;
