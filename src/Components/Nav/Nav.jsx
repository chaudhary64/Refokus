import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Buttons/Button";

const Nav = () => {
  return (
    <div className="h-[10vh] w-full px-20 fixed flex gap-[3%] items-center bg-black">
      <img
        className="w-[6%]"
        src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        alt=""
      />
      {/* Navigation Links */}
      <div className="text-xl w-[34%] tracking-wider text-[#C4C4C4] flex justify-evenly">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/carrers">Carrers</NavLink>
      </div>
      <div className="w-[60%] flex gap-[4%] justify-end">
        <div
          id="Languages"
          className="flex gap-2 tracking-wide text-sm font-sans"
        >
          <span className="flex justify-center items-center text-white">
            EN
          </span>
          <span className="flex justify-center items-center text-[#4E4E55]">
            DE
          </span>
        </div>
        <Button text={"Start a Project"} />
      </div>
    </div>
  );
};

export default Nav;
