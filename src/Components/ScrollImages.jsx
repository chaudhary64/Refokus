import React from "react";

const ScrollImages = ({ src, display, top, left }) => {
  return (
    <img
      src={src}
      style={{ display: display, top: top, left: left }}
      className="absolute w-72 rounded-xl"
      alt="images"
    />
  );
};

export default ScrollImages;
