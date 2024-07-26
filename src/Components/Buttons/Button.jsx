import React from "react";

const Button = ({ text = "Live Website", bgColor = "white" }) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: bgColor === "white" ? "black" : "white",
        border: bgColor === "transparent" ? "1px solid white" : "none",
      }}
      className={`px-4 py-2 h-fit w-fit rounded-full flex justify-center gap-3 items-center`}
    >
      <p className="text-sm tracking-wide font-[Satoshi-Regular]">{text}</p>
      <span style={{ transform: "translateY(35%)" }}>
        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 4.00049V4.50049H5.5V4.00049H6ZM13.8536 3.64693C14.0488 3.8422 14.0488 4.15878 13.8536 4.35404L10.6716 7.53602C10.4763 7.73128 10.1597 7.73128 9.96447 7.53602C9.7692 7.34076 9.7692 7.02418 9.96447 6.82892L12.7929 4.00049L9.96447 1.17206C9.7692 0.976799 9.7692 0.660217 9.96447 0.464954C10.1597 0.269692 10.4763 0.269692 10.6716 0.464954L13.8536 3.64693ZM6 3.50049H13.5V4.50049H6V3.50049ZM5.5 4.00049V0.999023H6.5V4.00049H5.5Z"
            fill="currentColor"
          ></path>
        </svg>
      </span>
    </div>
  );
};

export default Button;
