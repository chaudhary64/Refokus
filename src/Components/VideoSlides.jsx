import React from "react";
import { motion } from "framer-motion";

const VideoSlides = ({ src, id, videoSlidesControls }) => {
  return (
    <>
      <motion.video
        animate={videoSlidesControls}
        id={id}
        src={src}
        className="h-[37vh] pointer-events-none"
      ></motion.video>
    </>
  );
};

export default VideoSlides;
