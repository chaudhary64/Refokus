import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Work from "../Work/Work";
import About from "../About/About";
import News from "../News/News";
import Carrers from "../Carrers/Carrers";

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
