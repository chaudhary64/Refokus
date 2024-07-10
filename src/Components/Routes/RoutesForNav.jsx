import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Importing the Components for the Routes
import Home from "../Home/Home";
import Work from "../Work/Work";
import About from "../About/About";
import News from "../News/News";
import Carrers from "../Carrers/Carrers";

// Import Loader Component for wrapping the Routes Components and perfroming the Page Transition Animation
import Loader from "../Loader/Loader";

const RoutesForNav = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="sync">
      <Routes location={location} key={location.pathname}>
        {/* In Each Route Element Wrap the Element with our custom Loader Component as when route changes the whole component gets unmounted  */}
        <Route
          path="/"
          element={
            // Wrapping the Home Component with Loader Component
            <Loader>
              <Home />
            </Loader>
          }
        />
        <Route
          path="/work"
          element={
            // Wrapping the Work Component with Loader Component
            <Loader>
              <Work />
            </Loader>
          }
        />
        <Route
          path="/about"
          element={
            // Wrapping the About Component with Loader Component
            <Loader>
              <About />
            </Loader>
          }
        />
        <Route
          path="/news"
          element={
            // Wrapping the News Component with Loader Component
            <Loader>
              <News />
            </Loader>
          }
        />
        <Route
          path="/careers"
          element={
            // Wrapping the Carrers Component with Loader Component
            <Loader>
              <Carrers />
            </Loader>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutesForNav;
