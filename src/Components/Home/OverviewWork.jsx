import React, { useRef } from "react";
import Button from "../Buttons/Button";
import { motion, useInView } from "framer-motion";

const OverviewWork = ({
  heading,
  img1,
  img2,
  video,
  bgColor,
  rightUpperText,
  rightLowerText,
}) => {
  const elem = useRef(null);
  const isInView = useInView(elem, { threshold: 0.1, once: true });

  return (
    <motion.div
      ref={elem}
      initial={{ scale: 0.85 }}
      animate={{ scale: isInView ? 1 : 0.85 }}
      transition={{ duration: 1 }}
      style={{ backgroundColor: bgColor }}
      className="h-fit w-full text-white flex gap-4 sm:gap-5 p-5 sm:p-8 md:p-10 lg:p-12 xl:p-14 rounded-xl overflow-hidden"
    >
      {/* LeftPart */}
      <div className="h-full w-1/2 flex flex-col gap-5 sm:gap-6 justify-evenly overflow-hidden">
        <p
          style={{
            lineHeight: "1",
          }}
          className="text-2xl sm:text-3xl md:text-4xl xl:text-6xl tracking-widest"
        >
          {heading}
        </p>
        <img
          src={img1}
          className="h-24 sm:h-28 md:h-32 lg:h-44 xl:h-64 self-end rounded-xl"
          alt=""
        />
        <img src={img2} className="w-full rounded-xl" alt="" />
      </div>
      {/* RightPart */}
      <div className="h-full w-1/2 mt-auto flex flex-col gap-3 sm:gap-4 xl:gap-9">
        <span className="inline-block overflow-hidden rounded-xl">
          <video
            muted
            loop
            autoPlay
            src={video}
            className="w-full rounded-xl"
          ></video>
        </span>
        <span
          style={{
            lineHeight: "1",
          }}
          className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl pl-2 xl:pl-5 tracking-wider flex flex-col gap-2 xl:gap-3"
        >
          <p>{rightUpperText}</p>
          <p>{rightLowerText}</p>
        </span>
        <span className="mx-1 sm:mx-1.5 lg:mx-2 xl:mx-5">
          <Button text={"Start a Project"} />
        </span>
      </div>
    </motion.div>
  );
};

export default OverviewWork;
