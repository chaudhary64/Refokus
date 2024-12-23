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
  opacityController,
  x,
  y,
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
    const slidesHeight = Slides.current.getBoundingClientRect().height;
    const xCoordinate = e.nativeEvent.offsetX;
    const yCoordinate = e.nativeEvent.offsetY;
    const xNew = ((xCoordinate / slidesWidth) * 2 - 1) * 0.5; // Make the value between -0.5 and 0.5
    const yNew = ((yCoordinate / slidesHeight) * 2 - 1) * 0.5; // Make the value between -0.5 and 0.5
    x.set(xNew);
    y.set(yNew);
  };
  return (
    <div
      ref={Slides}
      onMouseEnter={(e) => {
        MouseEnterHandler(e);
        opacityController(1);
      }}
      onMouseLeave={(e) => {
        MouseLeaveHandler(e);
        opacityController(0);
      }}
      onMouseMove={(e) => MouseMoveHandler(e)}
      id={id}
      style={{
        backgroundColor: hide ? "" : bgColor,
        transition: "all 0.8s cubic-bezier(.86,0,.07,1)",
      }}
      className="h-[25vh] sm:h-[20vh] md:h-[25vh] lg:h-[30vh] xl:h-[35vh] px-[2.5%] w-full font-[Satoshi-Regular] flex justify-between items-center hover:scale-y-[1.1]"
    >
      <span className="flex text-white text-[16px] sm-custom:text-2xl lg:text-3xl xl:text-5xl pointer-events-none">
        <p>{heading}</p>
      </span>
      <div className="w-[38%] flex flex-col justify-evenly gap-1.5 sm:gap-2 pointer-events-none">
        <p
          style={{
            lineHeight: "1.1",
          }}
          className="text-white text-[10px] sm:text-[11px] lg:text-xs xl:text-sm xl:w-[70%]"
        >
          {description}
        </p>
        <span
          style={{ transition: "opacity 0.3s linear" }}
          className={`flex flex-wrap gap-1 xl:gap-5 ${
            hide ? "opacity-0" : "opacity-1"
          }`}
        >
          <Button />
          {caseStudy && <Button text={"Case Study"} />}
        </span>
      </div>
    </div>
  );
};

export default Slides;
