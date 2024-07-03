import React, { useEffect } from "react";
import Button from "../Buttons/Button";
import { useState, useRef } from "react";

const Slides = ({
  id,
  heading,
  description,
  caseStudy,
  bgColor,
  MoveVideoWrapper,
  setVideoData,
  x,
  sliderWidth,
}) => {
  const [hide, setHide] = useState(true);
  const Slides = useRef(null);
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
  const MouseMoveHandler = (e) => {
    const slidesWidth = Slides.current.getBoundingClientRect().width;
    const xNew = ((e.clientX / slidesWidth) * 2 - 1) * 0.5; // Make the value between -0.5 and 0.5
    x.set(xNew);
  };
  return (
    <section
      ref={Slides}
      onMouseEnter={(e) => MouseEnterHandler(e)}
      onMouseLeave={(e) => MouseLeaveHandler(e)}
      onMouseMove={(e) => MouseMoveHandler(e)}
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
