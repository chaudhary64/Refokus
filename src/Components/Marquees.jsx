import React from "react";
import Marquee from "./Marquee";

const Marquees = () => {
  const marqueeData = [
    {
      id: 1,
      number: 9,
      src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
    },
    {
      id: 2,
      number: 8,
      src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
    },
    {
      id: 3,
      number: 2,
      src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
    },
    {
      id: 4,
      number: 9,
      src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
    },
    {
      id: 5,
      number: 8,
      src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
    },
  ];
  return (
    <div className="h-[10vh] w-full flex flex-nowrap overflow-hidden bg-red-200">
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
  );
};

export default Marquees;
