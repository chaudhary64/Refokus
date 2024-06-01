import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import Nav from "./Components/Nav";
import RoutesForNav from "./Components/RoutesForNav";

const App = () => {
  const location = useLocation();
  const scrollRef = useRef(null);

  useEffect(() => {
    // Initialize or re-initialize Locomotive Scroll
    const scrollElement = document.querySelector("[data-scroll-container]");
    if (scrollRef.current) {
      scrollRef.current.destroy();
    }

    scrollRef.current = new LocomotiveScroll({
      el: scrollElement,
      smooth: true,
    });

    // Update the instance on route change
    scrollRef.current.update();

    // Cleanup on component unmount
    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
      }
    };
  }, [location.pathname]);

  return (
    <div data-scroll-container>
      <Nav />
      <RoutesForNav />
    </div>
  );
};

export default App;
