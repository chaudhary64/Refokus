import React from "react";
import Marquee from "./Marquee";
import { MotionConfig, motion } from "framer-motion";

const Marquees = ({
  marqueeDataWithNumber: marqueeData,
  marqueeWithNumber,
  marqueeDataWithoutNumber: marqueeDataBrands,
  reverse,
}) => {
  return marqueeWithNumber ? (
    // Marquee with number
    <div className="w-full mt-[7vh] flex flex-nowrap overflow-hidden">
      <MotionConfig
        animate={{
          x: ["0%", "-100%"], // Move from 0% to -100% of the container width
          transition: {
            duration: 15,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
        }}
      >
        {/* First Marquee Conatiner */}
        <motion.div className="h-full w-full flex shrink-0">
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
        </motion.div>
        {/* Second Marquee Conatiner */}
        <motion.div className="h-full w-full flex shrink-0">
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
        </motion.div>
      </MotionConfig>
    </div>
  ) : (
    // Marquee without number
    <section
      id="marqueeDataWithoutNumber"
      className="w-full flex flex-nowrap overflow-hidden"
    >
      <MotionConfig
        animate={{
          x: reverse ? ["0%", "-100%"] : ["-100%", "0%"], // Move from 0% to -100% of the container width
          transition: {
            duration: 30,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
        }}
      >
        {/* First Marquee Conatiner */}
        <motion.div
          initial={{ x: reverse ? "-100%" : 0 }}
          className="w-full flex justify-around items-center shrink-0"
        >
          {marqueeDataBrands.map((marquee) => {
            return (
              <Marquee key={marquee.id} id={marquee.id} src={marquee.src} />
            );
          })}
        </motion.div>
        {/* Second Marquee Conatiner */}
        <motion.div
          initial={{ x: reverse ? "-100%" : 0 }}
          className="w-full flex justify-around items-center shrink-0"
        >
          {marqueeDataBrands.map((marquee) => {
            return (
              <Marquee key={marquee.id} id={marquee.id} src={marquee.src} />
            );
          })}
        </motion.div>
      </MotionConfig>
    </section>
  );
};

export default Marquees;
