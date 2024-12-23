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
  }, [location]);

  return (
    <nav className="h-[4vh] sm:h-[6vh] xl:h-[8vh] w-full sticky top-0 z-[9999] backdrop-blur-md overflow-hidden">
      <div className="h-full w-[95%] mx-auto flex justify-between items-center lg:gap-14 xl:gap-28 font-[Satoshi-Regular] backdrop-blur-md overflow-hidden">
        {/* Refokus Logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 84 22"
          fill="none"
          className="w-12 sm:w-14 md:w-[65px] lg:w-[80px] xl:w-20 justify-self-center self-center"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.43934 7.63715C1.02513 7.08391 1.97487 7.08391 2.56066 7.63716L12.5607 17.0816C13.1464 17.6348 13.1464 18.5318 12.5607 19.0851C11.9749 19.6383 11.0251 19.6383 10.4393 19.0851L0.43934 9.64062C-0.146447 9.08738 -0.146447 8.1904 0.43934 7.63715Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.30152e-07 3.91667C1.30152e-07 3.13426 0.671573 2.5 1.5 2.5H11.5C12.3284 2.5 13 3.13426 13 3.91667C13 4.69907 12.3284 5.33333 11.5 5.33333H1.5C0.671573 5.33333 1.30152e-07 4.69907 1.30152e-07 3.91667Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 10.0556L3 18.0833C3 18.8657 2.32843 19.5 1.5 19.5C0.671574 19.5 9.35261e-07 18.8657 8.9905e-07 18.0833L1.04308e-07 8.63889C8.69187e-08 8.26317 0.158036 7.90283 0.43934 7.63715C0.720645 7.37148 1.10218 7.22222 1.5 7.22222L11.5 7.22222C12.3284 7.22222 13 7.85648 13 8.63889C13 9.42129 12.3284 10.0556 11.5 10.0556L3 10.0556Z"
            fill="white"
          />
          <path
            d="M28.344 17V12.632H30.856L32.84 17H35.08L32.856 12.2C34.232 11.64 34.968 10.52 34.968 8.952C34.968 6.648 33.416 5.304 30.76 5.304H26.296V17H28.344ZM28.344 7.128H30.76C32.056 7.128 32.824 7.784 32.824 8.952C32.824 10.136 32.056 10.824 30.76 10.824H28.344V7.128ZM39.7003 17.208C41.7643 17.208 43.2043 16.168 43.5403 14.44H41.7323C41.5083 15.192 40.8043 15.608 39.7323 15.608C38.4363 15.608 37.7003 14.904 37.5563 13.512L43.5083 13.496V12.904C43.5083 10.44 42.0043 8.856 39.6363 8.856C37.3163 8.856 35.7003 10.568 35.7003 13.048C35.7003 15.496 37.3483 17.208 39.7003 17.208ZM39.6523 10.456C40.8203 10.456 41.5723 11.176 41.5723 12.264H37.6043C37.7963 11.08 38.5003 10.456 39.6523 10.456ZM44.2865 9.096V10.728H45.4225V17H47.3585V10.728H49.2465V9.096H47.3585V8.136C47.3585 7.352 47.5985 6.84 48.5905 6.84H49.2785V5.176C48.9425 5.112 48.5745 5.096 48.2705 5.096C46.5585 5.096 45.4225 5.992 45.4225 8.136V9.096H44.2865ZM49.794 13.032C49.794 15.496 51.57 17.192 54.018 17.192C56.466 17.192 58.242 15.496 58.242 13.032C58.242 10.568 56.466 8.872 54.018 8.872C51.57 8.872 49.794 10.568 49.794 13.032ZM51.746 13.032C51.746 11.592 52.674 10.616 54.018 10.616C55.362 10.616 56.29 11.592 56.29 13.032C56.29 14.472 55.362 15.448 54.018 15.448C52.674 15.448 51.746 14.472 51.746 13.032ZM61.7573 17V14.872L62.9093 13.672L64.9733 17H67.2133L64.2693 12.232L67.2773 9.096H64.8293L61.7573 12.408V5.096H59.8213V17H61.7573ZM73.7586 9.096V13.24C73.7586 14.744 73.1666 15.464 71.9346 15.464C70.8466 15.464 70.2546 14.856 70.2546 13.352V9.096H68.3026V14.04C68.3026 15.976 69.3746 17.208 71.1986 17.208C72.2546 17.208 73.2786 16.696 73.7586 15.944L73.9026 17H75.7106V9.096H73.7586ZM76.9625 14.6C76.9625 16.152 78.2105 17.208 80.1785 17.208C82.1305 17.208 83.4905 16.216 83.4905 14.616C83.4905 13.4 82.8185 12.792 81.4905 12.488L80.0665 12.152C79.3945 11.992 79.0425 11.704 79.0425 11.256C79.0425 10.664 79.4905 10.312 80.2585 10.312C81.0105 10.312 81.4585 10.744 81.4745 11.416H83.3305C83.3145 9.88 82.1145 8.856 80.3385 8.856C78.5145 8.856 77.2025 9.784 77.2025 11.336C77.2025 12.6 77.8905 13.272 79.3145 13.592L80.7385 13.928C81.4425 14.088 81.6505 14.376 81.6505 14.776C81.6505 15.352 81.1545 15.72 80.2425 15.72C79.3465 15.72 78.8345 15.288 78.8185 14.6H76.9625Z"
            fill="white"
          />
        </svg>
        {/* Navigation Links */}
        <div className="text-[9.5px] sm:text-[12px] lg:text-[13px] xl:text-sm tracking-wider text-[#f3f0f0] flex justify-start items-center gap-5 sm:gap-7 md:gap-5 lg:gap-9">
          <NavLink to="/" className="relative px-1">
            {({ isActive }) => (
              <>
                Home{" "}
                <AnimatePresence initial={false}>
                  {isActive && <Indicator />}
                </AnimatePresence>
              </>
            )}
          </NavLink>
          <NavLink to="/work" className="relative px-1">
            {({ isActive }) => (
              <>
                Work{" "}
                <AnimatePresence initial={false}>
                  {isActive && <Indicator />}
                </AnimatePresence>
              </>
            )}
          </NavLink>
          <NavLink to="/about" className="relative px-1">
            {({ isActive }) => (
              <>
                About{" "}
                <AnimatePresence initial={false}>
                  {isActive && <Indicator />}
                </AnimatePresence>
              </>
            )}
          </NavLink>
          <NavLink to="/news" className="relative px-1">
            {({ isActive }) => (
              <>
                News{" "}
                <AnimatePresence initial={false}>
                  {isActive && <Indicator />}
                </AnimatePresence>
              </>
            )}
          </NavLink>
          <NavLink to="/careers" className="relative px-1">
            {({ isActive }) => (
              <>
                Careers
                <AnimatePresence initial={false}>
                  {isActive && <Indicator />}
                </AnimatePresence>
              </>
            )}
          </NavLink>
        </div>
        <div className="lg:ml-auto hidden sm:flex gap-4 lg:gap-6 xl:gap-8 justify-center overflow-hidden">
          <div
            id="Languages"
            className="hidden md:flex gap-2 tracking-wide text-[9.5px] sm:text-[12px] lg:text-[13px] xl:text-sm font-sans"
          >
            <span className="flex justify-center items-center text-white">
              EN
            </span>
            <span className="flex justify-center items-center text-[#4E4E55]">
              DE
            </span>
          </div>
          <span className="hidden sm:inline-block">
            <Button text={"Start a project"} />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
