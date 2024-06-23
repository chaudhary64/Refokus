import React from "react";

const VideoSlides = ({src,id}) => {
  return (
    <>
      <video id={id} src={src} className="h-[37vh] pointer-events-none"></video>
    </>
  );
};

export default VideoSlides;
