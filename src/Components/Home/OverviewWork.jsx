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
      className="h-fit w-full text-white flex gap-5 p-5 rounded-xl overflow-hidden"
    >
      {/* LeftPart */}
      <div className="h-full w-1/2 flex flex-col gap-5 justify-evenly overflow-hidden">
        <p className="text-5xl tracking-widest">{heading}</p>
        <img src={img1} className="h-64 self-end rounded-xl" alt="" />
        <img src={img2} className="w-full rounded-xl" alt="" />
      </div>
      {/* RightPart */}
      <div className="h-full w-1/2 flex flex-col gap-9">
        <span className="inline-block overflow-hidden rounded-xl">
          <video
            muted
            loop
            autoPlay
            src={video}
            className="w-full rounded-xl"
          ></video>
        </span>
        <span className="text-xl px-5 tracking-wider leading-none flex flex-col gap-3">
          <p>{rightUpperText}</p>
          <p>{rightLowerText}</p>
        </span>
        <span className="mx-5">
          <Button text={"Start a Project"} />
        </span>
      </div>
    </motion.div>
  );
};

export default OverviewWork;
