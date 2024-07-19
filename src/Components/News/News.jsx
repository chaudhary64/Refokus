import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const News = () => {
  const [active, setActive] = useState(false);
  const [activeFormat, setActiveFormat] = useState(true);
  return (
    <>
      <div className="h-fit w-[95%] mx-auto my-16 pr-10 flex justify-between items-center bg-black text-white">
        <p className="text-[110px] leading-none font-[Satoshi-Regular]">NEWS</p>
        <p className="text-xl tracking-widest">
          Web Design, Webflow Development, <br /> Agency Life and more news and
          insights <br /> from Refokus Team.
        </p>
      </div>
      <div className="h-fit w-[95%] mx-auto py-5 pr-10 border-t border-[#3e3e46] flex justify-between items-center relative">
        {/* LeftPart */}
        <span className="inline-block h-fit w-fit relative">
          <IoIosSearch
            className={`${
              active ? "text-[#A88BF7]" : "text-[#d7d7dc]"
            } absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none`}
          />
          <input
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            style={{
              transition: "border 0.5s linear",
              border: active ? "2px solid #A88BF7" : "2px solid transparent",
              outline: "none",
            }}
            className="rounded-full py-0.5 pl-10 pr-12 bg-[#3E3E46] text-lg tracking-wider text-[#d7d7dc]"
            type="text"
            placeholder="Search Something"
          />
        </span>
        {/* RightPart */}
        <span className="h-fit w-fit flex items-center gap-16 text-lg tracking-wider">
          <div className="h-fit w-fit flex justify-center items-center gap-3">
            <span className={`bg-white py-0.5 px-3.5 rounded-full`}>All</span>
            <span className={`bg-white py-0.5 px-3.5 rounded-full`}>
              Article
            </span>
            <span className={`bg-white py-0.5 px-3.5 rounded-full`}>News</span>
            <span className={`bg-white py-0.5 px-3.5 rounded-full`}>
              Resource
            </span>
          </div>
          <div className="text-white flex items-center gap-3">
            <p
              onClick={() => setActiveFormat(true)}
              className={`leading-none ${
                activeFormat ? "border-b" : ""
              } cursor-grab`}
            >
              List
            </p>
            <p
              onClick={() => setActiveFormat(false)}
              className={`leading-none ${
                activeFormat ? "" : "border-b"
              } cursor-grab`}
            >
              Grid
            </p>
          </div>
        </span>
        {/* Dot at upper Side */}
        <span className="h-1.5 w-1.5 rounded-full absolute bg-white top-[-10px] left-1 -translate-y-full"></span>
      </div>
    </>
  );
};

export default News;
