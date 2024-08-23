import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

const Expander = ({ question, answer }) => {
  const containerControls = useAnimation();
  const paraControls = useAnimation();
  const plusControls = useAnimation();
  const paraToAppear = useRef();
  const rotateInitial = useMotionValue(0);
  const container = useRef();
  const [data, setData] = useState({
    container: 0,
    para: 0,
    direction: "forward",
    padding: 0,
  });

  useEffect(() => {
    document.fonts.ready.then(() => {
      let heightContainer = container.current.getBoundingClientRect().height;
      let heightPara = paraToAppear.current.getBoundingClientRect().height;
      let paddingTop = Number.parseInt(
        window.getComputedStyle(paraToAppear.current).paddingTop
      );
      setData({
        container: heightContainer,
        para: heightPara,
        direction: "forward",
        padding: paddingTop,
      });
    });
  }, []);

  const beginAnimation = () => {
    containerControls.start({
      height: data.container + data.para,
      transition: { duration: 0.5 },
    });
    paraControls.start({
      opacity: 1,
      transition: { delay: 0.3, duration: 0.5 },
    });
    paraControls.start({
      top: data.container - data.padding,
      y: 0,
      transition: { duration: 0.5 },
    });
    plusControls.start({
      rotate: rotateInitial.get() + 45,
      transition: { duration: 0.5 },
    });

    setData({ ...data, direction: "backward" });
  };

  const closeAnimation = () => {
    containerControls.start({
      height: data.container,
      transition: { duration: 0.5 },
    });
    paraControls.start({
      opacity: 0,
      transition: { duration: 0.25 },
    });
    paraControls.start({
      top: 0,
      y: "-100%",
      transition: { duration: 1 },
    });
    plusControls.start({
      rotate: rotateInitial.get() - 45,
      transition: { duration: 0.5 },
    });
    setData({ ...data, direction: "forward" });
  };
  return (
    <>
      <motion.div
        ref={container}
        animate={containerControls}
        onClick={() =>
          data.direction === "forward" ? beginAnimation() : closeAnimation()
        }
        className="shrink-0 w-full text-[#e8e3e3] text-[13px] sm-custom:text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl tracking-wide py-1 xl:py-3 flex justify-between border-b border-[#807E7E] select-none relative overflow-clip cursor-grab"
      >
        <p className="h-fit pointer-events-none">{question}</p>
        <motion.p
          animate={plusControls}
          style={{ rotate: rotateInitial }}
          className="h-fit pointer-events-none text-[#807E7E]"
        >
          +
        </motion.p>
        <motion.p
          ref={paraToAppear}
          initial={{ top: 0, y: "-100%", opacity: 0 }}
          animate={paraControls}
          style={{ lineHeight: "1" }}
          className="absolute left-0 h-fit w-fit pt-0.5 lg:pt-1.5 xl:pt-2.5 pb-1 text-[10px] sm-custom:text-xs sm:text-[13px] md:text-base lg:text-lg xl:text-xl pointer-events-none"
        >
          {answer}
        </motion.p>
      </motion.div>
    </>
  );
};

export default Expander;
