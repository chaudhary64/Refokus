import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Work from "./Work";
import About from "./About";
import News from "./News";
import Carrers from "./Carrers";

const RoutesForNav = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/carrers" element={<Carrers />} />
      </Routes>
    </div>
  );
};

export default RoutesForNav;
