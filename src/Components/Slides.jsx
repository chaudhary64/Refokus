import React, { useEffect } from "react";
import Button from "./Button";
import { useState } from "react";

const Slides = ({
  id,
  heading,
  description,
  caseStudy,
  bgColor,
  MoveVideoWrapper,
  setVideoData,
}) => {
  const [hide, setHide] = useState(true);
  const MouseEnterHandler = (e) => {
    MoveVideoWrapper(e.target.id);
    setHide(false);
    setVideoData((prev) =>
      prev.map((item) =>
        e.target.id == item.id
          ? { ...item, play: true }
          : { ...item, play: false }
      )
    );
  };
  const MouseLeaveHandler = (e) => {
    setHide(true);
    setVideoData((prev) => prev.map((item) => ({ ...item, play: false })));
  };
  return (
    <section
      onMouseEnter={(e) => MouseEnterHandler(e)}
      onMouseLeave={(e) => MouseLeaveHandler(e)}
      id={id}
      className="h-[37vh] w-full font-[Satoshi-Regular] flex justify-between items-center"
    >
      <span className="flex text-white w-[65%] text-5xl pointer-events-none">
        <p>{heading}</p>
      </span>
      <div className="w-[35%] flex flex-col justify-evenly gap-5 pointer-events-none">
        <p className="text-white text-[18px] w-[69%]">{description}</p>
        <span
          style={{ transition: "opacity 0.3s linear" }}
          className={`flex gap-5 ${hide ? "opacity-0" : "opacity-1"}`}
        >
          <Button />
          {caseStudy && <Button text={"Case Study"} />}
        </span>
      </div>
    </section>
  );
};

export default Slides;
