import React, { useEffect, useRef } from "react";
import Nav from "./Components/Nav/Nav.jsx";
import RoutesForNav from "./Components/Routes/RoutesForNav.jsx";
import { ReactLenis, useLenis } from "lenis/react";

const App = () => {
  return (
    <ReactLenis root>
      <main>
        <Nav />
        <RoutesForNav />
      </main>
    </ReactLenis>
  );
};

export default App;
