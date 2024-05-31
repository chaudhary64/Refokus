import React from "react";

const Marquee = ({ id, length, src, number }) => {
  const width = 100 / length;
  //   console.log(id);
  return (
    <div
      style={{ width: width + "%" }}
      className={`h-full bg-slate-900 ${
        id == 1 ? "border-b-2 border-t-2 border-r-2" : "border-2"
      } border-white flex justify-evenly items-center`}
    >
      <img src={`${src}`} alt="" />
      <p className="text-4xl text-white">{number}</p>
    </div>
  );
};

export default Marquee;
