import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="h-[10vh] w-screen px-20 flex gap-5 items-center bg-black">
      <img
        className="w-fit h-fit"
        src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        alt=""
      />
      {/* Navigation Links */}
      <div className="text-xl tracking-wider text-[#C4C4C4] ml-16 flex gap-12">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/carrers">Carrers</NavLink>
      </div>
    </div>
  );
};

export default Nav;
