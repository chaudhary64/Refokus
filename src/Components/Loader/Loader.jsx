import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Loader = () => {
  const location = useLocation();
  const text =
    location.pathname === "/"
      ? "HOME"
      : location.pathname.slice(1).toUpperCase();
  return (
    <motion.div className="fixed inset-0 z-[99999999999] bg-black text-9xl text-white flex justify-center items-center pointer-events-none">
      {text}
    </motion.div>
  );
};

export default Loader;
