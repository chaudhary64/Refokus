import React from "react";
import Positions from "./Positions";
import Footer from "../Footer/Footer";

const Carrers = () => {
  return (
    <>
      <p className="w-[95%] mx-auto my-20 pr-10 text-9xl text-end text-white">
        Carrers
      </p>
      <section className="mb-14">
        <Positions title="Operations" role="Senior Project Manager" />
        <Positions title="Development" role="Webflow Developer" />
      </section>
      <Footer />
    </>
  );
};

export default Carrers;
