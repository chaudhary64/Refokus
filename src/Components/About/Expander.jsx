import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Expander = ({ question, answer }) => {
  const containerControls = useAnimation();
  const paraControls = useAnimation();
  const paraToAppear = useRef();
  const container = useRef();
  const [direction, setDirection] = useState("forward");
  const [height, setHeight] = useState({
    container: 0,
    para: 0,
  });

  useEffect(() => {
    document.fonts.ready.then(() => {
      let heightContainer = container.current.getBoundingClientRect().height;
      let heightPara = paraToAppear.current.getBoundingClientRect().height;
      setHeight({ container: heightContainer, para: heightPara });
      console.log(heightContainer, heightPara);
    });
  }, []);

  const beginAnimation = () => {
    containerControls.start({
      height: height.container + height.para,
      transition: { duration: 0.5 },
    });
    paraControls.start({
      bottom: 0,
      transition: { duration: 0.5 },
    });
    paraControls.start({
      opacity: 1,
      transition: { delay: 0.25, duration: 0.25 },
    });

    setDirection("backward");
  };

  const closeAnimation = () => {
    containerControls.start({
      height: height.container,
      transition: { duration: 0.5 },
    });
    paraControls.start({
      opacity: 0,
      transition: { duration: 0.13 },
    });
    paraControls.start({
      bottom: "100%",
      transition: { duration: 1 },
    });
    setDirection("forward");
  };
  return (
    <>
      <motion.div
        ref={container}
        animate={containerControls}
        onClick={() =>
          direction === "forward" ? beginAnimation() : closeAnimation()
        }
        className="shrink-0 w-full text-white text-3xl py-2 flex justify-between px-10 border-b-2 relative overflow-clip"
      >
        <p className="h-fit pointer-events-none">{question}</p>
        <p className="h-fit pointer-events-none">+</p>
        <motion.p
          ref={paraToAppear}
          initial={{ bottom: "100%", opacity: 0 }}
          animate={paraControls}
          className="absolute left-0 h-fit w-fit mx-10 text-xl leading-none pointer-events-none"
        >
          {answer}
        </motion.p>
      </motion.div>
    </>
  );
};

export default Expander;
