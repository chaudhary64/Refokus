import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Home/Home";
import Work from "../Work/Work";
import About from "../About/About";
import News from "../News/News";
import Carrers from "../Carrers/Carrers";
import { AnimatePresence } from "framer-motion";

const RoutesForNav = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/carrers" element={<Carrers />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutesForNav;
