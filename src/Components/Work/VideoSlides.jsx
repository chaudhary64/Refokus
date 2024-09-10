import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const VideoSlides = ({ src, id, videoSlidesControls, play }) => {
  const videoElem = useRef(null);
  useEffect(
    () =>
      (function () {
        play ? videoElem.current.play() : videoElem.current.pause();
      })(),
    [play]
  );
  return (
    <>
      <motion.video
        ref={videoElem}
        animate={videoSlidesControls}
        id={id}
        src={src}
        autoPlay={play}
        loop
        muted
        className="h-full w-full pointer-events-none object-cover rounded-lg md:rounded-xl lg:rounded-2xl"
      ></motion.video>
    </>
  );
};

export default VideoSlides;
