import React from "react";
import { FaArrowRight } from "react-icons/fa6";
const Card = ({ heading, text, footer, header, button, width, id }) => {
  return (
    <div
      style={{ width: width }}
      className={`h-full p-4 relative font-[Satoshi-Regular] text-white bg-[#323238] ${
        id == 2 ? "hover:bg-[#7443FF]" : "hover:bg-[#3E3E46]"
      } duration-200 rounded-2xl`}
    >
      {/* Upper Part */}
      <span className="flex justify-between text-lg">
        <p>{heading}</p>
        <FaArrowRight className="text-xs" />
      </span>
      {/* Text */}
      <p className="mt-2 text-2xl whitespace-pre-wrap">{text}</p>
      {/* Bottom Conditional Rendering */}
      <span className="flex flex-col absolute gap-7 bottom-3">
        {header && (
          <p className="text-[110px] leading-none font-[Satoshi-Regular] tracking-tight">
            {header}
          </p>
        )}
        {footer && <p className="text-sm">{footer}</p>}
        {button && (
          <button className="text-base h-10 w-32 rounded-full border-[1px] border-white">
            Contact Us
          </button>
        )}
      </span>
    </div>
  );
};

export default Card;
