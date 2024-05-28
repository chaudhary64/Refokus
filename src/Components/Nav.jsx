import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Nav = () => {
  return (
    <div className="h-[10vh] w-screen px-20 flex gap-[3%] items-center bg-black">
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
      <div className="w-[60%] flex justify-end border-2 border-red-900">
        <Button text={"Start a Project"} />
      </div>
    </div>
  );
};

export default Nav;
