import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Button from "../Buttons/Button";

const Card = ({ heading, text, footer, header, button, width, id }) => {
  const [pad, setPad] = useState(0);
  return (
    <div
      style={{
        width: width,
        transition: "background-color 0.5s cubic-bezier(.86, 0, .07, 1)",
      }}
      onMouseEnter={() => setPad(6)}
      onMouseLeave={() => setPad(0)}
      className={`h-full p-4 flex flex-col justify-between font-[Satoshi-Regular] text-white bg-[#323238] ${
        id == 2 ? "hover:bg-[#7443FF]" : "hover:bg-[#3E3E46]"
      } duration-200 rounded-2xl`}
    >
      {/* Upper Part */}
      <span className="inline-block">
        <span
          style={{
            padding: `0px ${pad}px`,
            transition: "padding 0.5s cubic-bezier(.86, 0, .07, 1)",
          }}
          className="flex justify-between items-center text-xs sm:text-sm md:text-base lg:text-lg"
        >
          <p>{heading}</p>
          <FaArrowRight className="text-xs" />
        </span>
        {/* Text */}
        <p
          style={{
            padding: `0px ${pad}px`,
            transition: "padding 0.5s cubic-bezier(.86, 0, .07, 1)",
          }}
          className="mt-2 text-sm sm:text-base md:text-lg lg:text-2xl whitespace-pre-wrap"
        >
          {text}
        </p>
      </span>
      {/* Bottom Part Conditional Rendering */}
      <span className="flex flex-col gap-5 sm:gap-7 md:gap-9 lg:gap-11">
        {header && (
          <p className="shrink-0 inline-block h-fit text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-[GreyQo-Regular] tracking-wider">
            {header}
          </p>
        )}
        {footer && <p className="text-xs sm:text-sm">{footer}</p>}
        {button && <Button bgColor="transparent" text="Contact Us" />}
      </span>
    </div>
  );
};

export default Card;
