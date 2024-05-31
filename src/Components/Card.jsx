import React from "react";
import { FaArrowRight } from "react-icons/fa6";
const Card = ({ heading, text, footer, header, button, width }) => {
  return (
    <div
      style={{ width: width }}
      className={`h-full p-4 relative font-[Raleway-Medium] text-white bg-[#323238] rounded-2xl`}
    >
      {/* Upper Part */}
      <span className="flex justify-between text-lg">
        <p>{heading}</p>
        <FaArrowRight className="text-xs" />
      </span>
      <p className="mt-2 text-4xl whitespace-pre-wrap">{text}</p>
      <span className="flex flex-col absolute bottom-3">
        {header && (
          <p className="text-[110px] font-[Raleway-Medium] tracking-tight">
            {header}
          </p>
        )}
        {footer && <p className="text-xl">{footer}</p>}
        {button && (
          <button className="text-lg h-10 w-32 rounded-full border-[1px] border-white">
            Contact Us
          </button>
        )}
      </span>
    </div>
  );
};

export default Card;
