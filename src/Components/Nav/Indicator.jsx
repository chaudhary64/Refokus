import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Indicator = () => {
  return (
    <motion.span
      style={{
        backgroundColor: "#Ffd700",
        boxShadow: "0px 0px 3px 1px #Ffd700",
      }}
      exit={{ opacity: 0, transition: { delay: 1.75 } }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.75 } }}
      className="h-[2.2px] sm-custom:h-[2.8px] sm:h-[3px] md:h-[3.2px] lg:h-[3.3px] xl:h-[4.1px] w-[2.2px] sm-custom:w-[2.8px] sm:w-[3px] md:w-[3.2px] lg:w-[3.3px] xl:w-[4.1px] rounded-full absolute top-1/2 left-0 -translate-x-[105%] -translate-y-1/2"
    ></motion.span>
  );
};

export default Indicator;
