import React from "react";
import Marquees from "./Marquees";
import SliderSection from "./SliderSection";

const Work = () => {
  return (
    <>
      <div className="h-[90vh] w-full py-5 flex flex-col justify-end items-center gap-10">
        <p className="text-[37vw] font-[Raleway-Medium] text-white font-thin tracking-tight leading-[0.8] select-none overflow-hidden">
          work
        </p>
        <p className="text-2xl text-[#646464] font-[SmoochSans-Light]">
          Web Design, Webflow Development, Creative Development
        </p>
      </div>
      <Marquees />
      <SliderSection />
    </>
  );
};

export default Work;
