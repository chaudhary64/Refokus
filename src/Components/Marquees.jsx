import React from "react";
import Marquee from "./Marquee";

const Marquees = ({
  marqueeDataWithNumber: marqueeData,
  marqueeWithNumber,
  marqueeDataWithoutNumber: marqueeDataBrands,
}) => {
  return marqueeWithNumber ? (
    // Marquee with number
    <div className="h-[10vh] w-full mt-[7vh] flex flex-nowrap overflow-hidden">
      {/* First Marquee Conatiner */}
      <div className="h-full w-full flex shrink-0">
        {marqueeData.map((marquee) => {
          return (
            <Marquee
              key={marquee.id}
              id={marquee.id}
              length={marqueeData.length}
              src={marquee.src}
              number={marquee.number}
            />
          );
        })}
      </div>
      {/* Second Marquee Conatiner */}
      <div className="h-full w-full flex shrink-0">
        {marqueeData.map((marquee) => {
          return (
            <Marquee
              key={marquee.id}
              id={marquee.id}
              length={marqueeData.length}
              src={marquee.src}
              number={marquee.number}
            />
          );
        })}
      </div>
    </div>
  ) : (
    // Marquee without number
    <div className="w-full flex flex-nowrap overflow-hidden">
      {/* First Marquee Conatiner */}
      <div className="h-full w-full flex justify-evenly gap-5 shrink-0">
        {marqueeDataBrands.map((marquee) => {
          return <Marquee key={marquee.id} id={marquee.id} src={marquee.src} />;
        })}
      </div>
      {/* Second Marquee Conatiner */}
      <div className="h-full w-full flex justify-evenly gap-5 shrink-0">
        {marqueeDataBrands.map((marquee) => {
          return <Marquee key={marquee.id} id={marquee.id} src={marquee.src} />;
        })}
      </div>
    </div>
  );
};

export default Marquees;
