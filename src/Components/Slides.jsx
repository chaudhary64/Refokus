import React from "react";
import Button from "./Button";
import { useState } from "react";

const Slides = ({
  id,
  heading,
  description,
  caseStudy,
  bgColor,
  MoveVideoWrapper,
}) => {
  const [hide, setHide] = useState(true);
  return (
    <section
      onMouseEnter={(e) => {
        MoveVideoWrapper(e.target.id);
        setHide(false);
      }}
      onMouseLeave={() => setHide(true)}
      id={id}
      className="h-[37vh] w-full font-[Satoshi-Regular] flex justify-between items-center"
    >
      <span className="flex text-white w-[65%] text-5xl pointer-events-none">
        <p>{heading}</p>
      </span>
      <div className="w-[35%] flex flex-col justify-evenly gap-5 pointer-events-none">
        <p className="text-white text-[18px] w-[69%]">{description}</p>
        <span className={`flex gap-5 ${hide ? "opacity-0" : "opacity-1"}`}>
          <Button />
          {caseStudy && <Button text={"Case Study"} />}
        </span>
      </div>
    </section>
  );
};

export default Slides;
