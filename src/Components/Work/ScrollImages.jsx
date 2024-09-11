import React from "react";

const ScrollImages = ({ src, display, top, left }) => {
  return (
    <img
      src={src}
      style={{ display: display, top: top, left: left }}
      className="absolute w-20 sm-custom:w-28 sm:w-[135px] md:w-44 lg:w-52 xl:w-72 rounded-md xl:rounded-xl"
      alt="images"
    />
  );
};

export default ScrollImages;
