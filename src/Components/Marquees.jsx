import React from "react";
import Marquee from "./Marquee";
import { MotionConfig, motion } from "framer-motion";

const Marquees = ({
  marqueeDataWithNumber: marqueeData,
  marqueeWithNumber,
  marqueeDataWithoutNumber: marqueeDataBrands,
}) => {
  return marqueeWithNumber ? (
    // Marquee with number
    <div className="h-[10vh] w-full mt-[7vh] flex flex-nowrap overflow-hidden">
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
    <div className="w-full flex flex-nowrap overflow-hidden">
      {/* First Marquee Conatiner */}
      <div className="h-full w-full flex justify-evenly gap-5 shrink-0">
        {marqueeDataBrands.map((marquee) => {
          return <Marquee key={marquee.id} id={marquee.id} src={marquee.src} />;
        })}
      </div>
      {/* Second Marquee Conatiner */}
      <div className="h-full w-full flex justify-evenly gap-5 shrink-0">
        {marqueeDataBrands.map((marquee) => {
          return <Marquee key={marquee.id} id={marquee.id} src={marquee.src} />;
        })}
      </div>
    </div>
  );
};

export default Marquees;
