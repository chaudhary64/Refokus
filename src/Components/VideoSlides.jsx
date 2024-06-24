import React from "react";
import { motion } from "framer-motion";

const VideoSlides = ({ src, id, videoSlidesControls }) => {
  return (
    <>
      <motion.video
        animate={videoSlidesControls}
        id={id}
        src={src}
        className="h-full w-full pointer-events-none object-cover"
      ></motion.video>
    </>
  );
};

export default VideoSlides;
