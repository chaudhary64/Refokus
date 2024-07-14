import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Expander = ({question, answer}) => {
  const containerControls = useAnimation();
  const paraControls = useAnimation();
  const paraToAppear = useRef();
  const container = useRef();
  const [direction, setDirection] = useState("forward");
  const [initialHeight, setInitialHeight] = useState(0);
  const beginAnimation = () => {
    let heightPara = paraToAppear.current.getBoundingClientRect().height;
    let heightContainer = container.current.getBoundingClientRect().height;
    setInitialHeight(heightContainer);

    containerControls.start({
      height: heightPara + heightContainer,
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
      height: initialHeight,
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
        className="shrink-0 w-full text-white text-3xl py-4 flex justify-between px-10 border-b-2 relative overflow-clip"
      >
        <p>{question}</p>
        <p>+</p>
        <motion.p
          ref={paraToAppear}
          initial={{ bottom: "100%", opacity: 0 }}
          animate={paraControls}
          className="absolute left-0 h-fit w-full px-10 pb-4 text-xl leading-none"
        >
          {answer}
        </motion.p>
      </motion.div>
    </>
  );
};

export default Expander;
