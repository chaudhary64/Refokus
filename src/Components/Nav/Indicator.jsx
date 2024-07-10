import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Indicator = () => {
  return (
    <motion.span
      style={{
        backgroundColor: "#Ffd700",
        boxShadow: "0px 0px 3px 1px #Ffd700",
      }}
      exit={{ opacity: 0, delay: 1.75 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-[4.25px] w-[4.25px] rounded-full absolute top-1/2 left-0 -translate-x-[100%] -translate-y-1/2"
    ></motion.span>
  );
};

export default Indicator;
