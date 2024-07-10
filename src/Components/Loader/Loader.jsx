import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLenis } from "lenis/react";

const Loader = ({ children }) => {
  // Accepting the component that is passed to it from children prop

  const [text, setText] = useState("ABOUT.");
  const lenis = useLenis();

  function getRouteName(path) {
    if (path === "/") return "HOME.";
    if (path === "/work") return "WORK.";
    if (path === "/about") return "ABOUT.";
    if (path === "/news") return "NEWS.";
    if (path === "/careers") return "CARRERS.";
  }

  return (
    <>
      {/* Removing The Previous Component from DOM */}
      <motion.div
        // Animations
        exit={{ display: "none", transition: { delay: 1.75 } }}
      >
        {children} {/* Displaying the Component which is wrapped in it */}
      </motion.div>

      {/* Loader Component */}
      <motion.span
        // Directly using location.pathname will not work as the component is not wrapped in a <Routes> component so we need to pass the location prop from the parent component to this component and then use it to get the pathname of the current route and set the text accordingly in the loader component using the setText function from useState hook. i.e why we are using window.location.pathname in the getRouteName function.

        onAnimationStart={() => {
          setText(getRouteName(window.location.pathname));
          document.body.style.overflow = "hidden";
          lenis.__isLocked = true;
          /*

            It is neccessary to set the overflow to hidden because the loader will  appear as i am using AnimatePresence default mode which is sync due to which the next component will get mounted when the exit animation of the previous component is started so i am removing the previous component from the DOM using display:none in  the exit prop in duration of 1.5s which is the time at which loader covers the whole screen so after removing the previous element at that point of time will move the next component to its place and it will looks like the whole page has been changed  and after the loader animation is completed  we will set the overflow to auto so that the user can scroll the page.

            Note : document.body.style.overflow = "hidden"; will also prevent the user from scrolling the page but if you are using lenis or locomotive then always make sure to stop the scrolling by using its methods as sometmes the user can scroll the page when we are using these LIBRARIES.

           */
        }}
        onAnimationComplete={() => {
          document.body.style.overflow = "auto";
          lenis.__isLocked = false;
        }}
        // Animations
        initial={{ y: "-100%" }}
        exit={{
          y: ["-100%", "0%", "0%", "-100%"],
          transition: { duration: 5, times: [0, 0.35, 0.65, 1] },
        }}
        className="fixed inset-0  p-16 z-[99999999999] bg-black font-[Satoshi-Regular] text-[140px] text-white flex justify-center items-center pointer-events-none"
      >
        <span className="h-full w-full flex justify-center items-center border-t-[1px] border-b-[1px] border-neutral-600">
          <p className="leading-none relative pt-5 pr-8 tracking-tight">
            {text}
            <motion.span
              initial={{ backgroundColor: "#a3a08d" }}
              exit={{
                backgroundColor: "#Ffd700",
                boxShadow: "0px 0px 15px 3px #Ffd700",
                transition: { delay: 2, duration: 0.6 },
              }}
              className="inline-block h-[14px] w-[14px] rounded-full absolute right-0 top-0 "
            ></motion.span>
          </p>
        </span>
      </motion.span>
    </>
  );
};

export default Loader;
