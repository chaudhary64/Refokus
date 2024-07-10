import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Button from "../Buttons/Button";
import Indicator from "./Indicator";
import { AnimatePresence } from "framer-motion";

const Nav = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
    console.log(location.pathname);
  }, [location]);

  return (
    <nav className="h-[10vh] w-full px-20 sticky top-0 z-[9999] flex gap-[3.5%] items-center font-[Satoshi-Regular] bg-black">
      <img
        className="w-[6%]"
        src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        alt="Logo"
      />
      {/* Navigation Links */}
      <div className="text-sm w-[37%] tracking-wider text-[#f3f0f0] flex justify-evenly">
        <NavLink to="/" className="relative px-1">
          {({ isActive }) => (
            <>
              Home{" "}
              <AnimatePresence>{isActive && <Indicator />}</AnimatePresence>
            </>
          )}
        </NavLink>
        <NavLink to="/work" className="relative px-1">
          {({ isActive }) => (
            <>
              Work{" "}
              <AnimatePresence>{isActive && <Indicator />}</AnimatePresence>
            </>
          )}
        </NavLink>
        <NavLink to="/about" className="relative px-1">
          {({ isActive }) => (
            <>
              About{" "}
              <AnimatePresence>{isActive && <Indicator />}</AnimatePresence>
            </>
          )}
        </NavLink>
        <NavLink to="/news" className="relative px-1">
          {({ isActive }) => (
            <>
              News{" "}
              <AnimatePresence>{isActive && <Indicator />}</AnimatePresence>
            </>
          )}
        </NavLink>
        <NavLink to="/careers" className="relative px-1">
          {({ isActive }) => (
            <>
              Careers
              <AnimatePresence>{isActive && <Indicator />}</AnimatePresence>
            </>
          )}
        </NavLink>
      </div>
      <div className="w-[57%] flex gap-[4%] justify-end">
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
    </nav>
  );
};

export default Nav;
