import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Para = ({ category, heading, description, grid }) => {
  const [increase, setIncrease] = useState(false);
  const controls = useAnimation();
  function mouseEnterHandler() {
    setIncrease(true);
  }
  function mouseLeaveHandler() {
    setIncrease(false);
    grid && controls.start({ height: 0 });
  }
  return (
    <div
      onMouseEnter={() => grid && controls.start({ height: "auto" })}
      onMouseMove={() => mouseEnterHandler()}
      onMouseLeave={() => mouseLeaveHandler()}
      className={`${
        grid ? "min-h-32 justify-center gap-3 py-3" : "py-5"
      } flex flex-col border-b-[1px] border-[#1F1F23] text-white relative`}
    >
      <span
        className={` ${
          grid
            ? "flex gap-7"
            : "grid grid-cols-[20%_80%] min-[470px]:grid-cols-[17%_87%] sm:grid-cols-[16%_84%] md:grid-cols-[13%_87%] lg:grid-cols-[10%_90%]"
        } items-center tracking-wider pointer-events-none`}
      >
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-[#dddde8]">
          {category}
        </p>
        <p className="text-xs sm:text-base md:text-lg lg:text-xl">{heading}</p>
      </span>
      <motion.p
        initial={{ height: 0 }}
        animate={controls}
        transition={{ duration: 0.3, ease: "linear" }}
        className={`text-lg text-center tracking-wider text-[#b3b3b9] overflow-hidden origin-top pointer-events-none`}
      >
        {description}
      </motion.p>
      <span
        style={{ transition: "transform 1s" }}
        className={`inline-block h-[1px] w-full absolute top-full ${
          increase ? "scale-x-1" : "scale-x-0"
        } bg-white pointer-events-none`}
      ></span>
    </div>
  );
};
export default Para;
