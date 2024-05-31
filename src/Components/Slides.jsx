import React from "react";
import Button from "./Button";

const Slides = ({ id, heading, description, caseStudy, bgColor }) => {
  console.log(id, heading, description, caseStudy, bgColor);
  return (
    <div className="h-[25vh] w-full flex justify-between items-center">
      <span className="flex text-white w-[65%] text-5xl">
        <p>{heading}</p>
      </span>
      <div className="h-full w-[35%] flex flex-col justify-evenly border-2 border-cyan-400">
        <p className="text-white text-[18px] w-[48%]">{description}</p>
        {caseStudy ? <Button text={"Case Study"} /> : <Button />}
      </div>
    </div>
  );
};

export default Slides;
