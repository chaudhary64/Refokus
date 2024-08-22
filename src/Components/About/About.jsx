import React, { useRef, useState, useEffect } from "react";
import BlurCards from "../Cards/BlurCards";
import Marquees from "../Marquee/Marquees";
import Expander from "./Expander";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const About = () => {
  const blurCardsData = [
    {
      id: 1,
      heading: "Our People",
      number: "25+",
      text: "We are a world-class team of experts working remotely across different time zones, mostly in Germany, the UK, Argentina, and the US East Coast—the world's leading hubs for creative talent.",
      top: {
        small_sm: "5%",
        sm: "5%",
        md: "5%",
        lg: "5%",
        xl: "5%",
      },
      left: {
        small_sm: "5%",
        sm: "5%",
        md: "5%",
        lg: "5%",
        xl: "5%",
      },
    },
    {
      id: 2,
      heading: "Our Awards",
      number: "77",
      text: "We are results-driven and people-focused (but awards are nice too!). We've won website of the day from multiple awards organizations and have been nominated twice for Webflow Agency of the year.",
      top: {
        small_sm: "37%",
        sm: "32%",
        md: "34%",
        lg: "40%",
        xl: "35%",
      },
      left: {
        small_sm: "5%",
        sm: "5%",
        md: "5%",
        lg: "5%",
        xl: "5%",
      },
    },
    {
      id: 3,
      heading: "Our History",
      number: "2021",
      text: "We are proud of our short history, positioning ourselves as market leaders and demonstrating that great work fuels growth.",
      top: {
        small_sm: "72%",
        sm: "60%",
        md: "56%",
        lg: "55%",
        xl: "60%",
      },
      left: {
        small_sm: "5%",
        sm: "12%",
        md: "13%",
        lg: "15.5%",
        xl: "20%",
      },
    },
  ];
  const marqueeDataWithoutNumber = [
    [
      {
        id: 1,
        src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275e12177716cb3f2ea_basf.svg",
      },
      {
        id: 2,
        src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27505e3a120466b87aa_singularity.svg",
      },
      {
        id: 3,
        src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275c2fcf540272672ef_intenseeye.svg",
      },
      {
        id: 4,
        src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg",
      },
      {
        id: 5,
        src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2756e8df24e52915c71_flowcode.svg",
      },
      {
        id: 6,
        src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275e1d5aa08ccc379dd_ypo.svg",
      },
      {
        id: 7,
        src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275909535ff431975cf_lavender.svg",
      },
      {
        id: 8,
        src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg",
      },
      {
        id: 9,
        src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2ce14e6c85b010c2e1e3c_Logo%20White%201.svg",
      },
    ],
    [
      {
        id: 1,
        src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275a4f001b08a4e28bc_weglot.svg",
      },
      {
        id: 2,
        src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2754882567001f1ee80_spotify.svg",
      },
      {
        id: 3,
        src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275999da7719dc1fe2c_haufe.svg",
      },
      {
        id: 4,
        src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2759c8b021207af521b_yahoo.svg",
      },
      {
        id: 5,
        src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27565c41bb608f7f7c0_rainfall.svg",
      },
      {
        id: 6,
        src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275ff2309d9d743ec75_doxel.svg",
      },
      {
        id: 7,
        src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2755ba681134c9d9b5c_mural.svg",
      },
      {
        id: 8,
        src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/661b2455cb60f1919ab48e20_Logo.svg",
      },
      {
        id: 9,
        src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2753d48394d8adeff14_rocket.svg",
      },
      {
        id: 10,
        src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275f0442508aceaec02_accel.svg",
      },
    ],
  ];
  const expanderData = [
    {
      id: 1,
      question: "What type of clients do you work with?",
      answer:
        "We work with a range from startups to Fortune 500 companies, including some cool niches like Venture Capital firms. Sometimes we work with founders, and other times with marketing managers, but what's most important is that our clients are ready to break the mold and refocus their brand and website with unique experiences.",
    },
    {
      id: 2,
      question: "How big does my project need to be?",
      answer:
        "It doesn't matter the size; we build everything from single-page landings to enterprise-level migrations of 1000+ pages and anything in between.",
    },
    {
      id: 3,
      question: "What's your pricing looking like?",
      answer:
        "Our pricing typically ranges from $25k to $150k, though most of our projects are around $50k. We like to work smart with budgets and strategize around your needs. For example, if you have a few pages but not a big budget, we could do something really cool for the homepage and opt for CMS templates or a component-driven approach for internal pages. But if you give us a huge budget, we can go crazy, add 3D animations, and all the good stuff.",
    },
    {
      id: 4,
      question: "Do you also make normal websites?",
      answer:
        "We get this a lot. Yes, we do make normal websites, but with our own twist. Everything we do feels high-end and carefully crafted, and it doesn't need to be crazy animated to feel amazing.",
    },
    {
      id: 5,
      question: "Is Refokus a Webflow agency?",
      answer:
        "We are a Webflow Enterprise Partner and have been nominated (twice) for Webflow Agency of the Year. So yeah, we are kind of a Webflow agency, but not your typical one: we use Webflow as an engineering tool, coding cool stuff on top like GSAP animations, WebGL, and some other black magic.",
    },
    {
      id: 6,
      question: "How much time do you need for websites?",
      answer:
        "Typically, it's between 8 to 12 weeks, but we also have huge 6-month projects for large enterprise clients and created campaign pages in 4 weeks.",
    },
  ];
  const pinnedElem = useRef();
  const { scrollYProgress: scrollY } = useScroll();
  const { scrollYProgress: scrollYPinned } = useScroll({
    target: pinnedElem,
    offset: ["start end", "end start"],
  });

  // ImagesScrolling Info

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getTransforms = () => {
    if (screenWidth < 590) {
      return {
        image1Left: useTransform(scrollY, [0, 0.03], ["18%", "15%"]),
        image1Scale: useTransform(scrollY, [0.025, 0.035], [1, 0.8]),

        imageTop: useTransform(scrollY, [0, 0.03], ["2%", "-10%"]),
        image2Scale: useTransform(scrollY, [0.025, 0.035], [1, 0.8]),

        image11Left: useTransform(scrollY, [0, 0.07], ["48%", "55%"]),
        image11Top: useTransform(scrollY, [0, 0.07], ["18%", "2%"]),
        image11Scale: useTransform(scrollY, [0.03, 0.07], [1, 0.8]),

        image4Top: useTransform(scrollY, [0, 0.1], ["50%", "20%"]),
        image4Scale: useTransform(scrollY, [0.08, 0.1], [1, 0.8]),

        image5Top: useTransform(scrollY, [0, 0.095], ["41%", "25%"]),
        image5Right: useTransform(scrollY, [0, 0.095], ["17%", "30%"]),
        image5Scale: useTransform(scrollY, [0.06, 0.09], [1, 0.8]),

        image6Left: useTransform(scrollY, [0, 0.13], ["14%", "0%"]),
        image6Scale: useTransform(scrollY, [0.1, 0.12], [1, 0.8]),

        image7Left: useTransform(scrollY, [0, 0.15], ["54%", "40%"]),
        image7Top: useTransform(scrollY, [0, 0.15], ["72%", "50%"]),
        image7Scale: useTransform(scrollY, [0.1, 0.12], [1, 0.8]),

        image3Top: useTransform(scrollY, [0.00011, 0.2], ["25%", "0%"]),

        image9Top: useTransform(scrollY, [0.00011, 0.12], ["40%", "51%"]),
        image9Right: useTransform(scrollY, [0.00011, 0.12], ["7%", "10%"]),

        image10Top: useTransform(scrollY, [0.00011, 0.12], ["63%", "48%"]),

        image8Left: useTransform(scrollY, [0.028, 0.13], ["25%", "5%"]),

        image12Left: useTransform(scrollY, [0.028, 0.14], ["35%", "55%"]),

        // Some Text

        para1: useTransform(scrollY, [0.35, 0.4903], [10, 30]),
        para2: useTransform(scrollY, [0.35, 0.4903], [10, 60]),
        para3: useTransform(scrollY, [0.35, 0.4903], [10, 95]),
      };
    } else if (screenWidth >= 590 && screenWidth < 640) {
      // Tablet (md: 768px and above in Tailwind)
      return {
        image1Left: useTransform(scrollY, [0, 0.03], ["18%", "15%"]),
        image1Scale: useTransform(scrollY, [0.025, 0.035], [1, 0.8]),

        imageTop: useTransform(scrollY, [0, 0.03], ["2%", "-10%"]),
        image2Scale: useTransform(scrollY, [0.025, 0.035], [1, 0.8]),

        image11Left: useTransform(scrollY, [0, 0.07], ["48%", "60%"]),
        image11Top: useTransform(scrollY, [0, 0.07], ["18%", "5%"]),
        image11Scale: useTransform(scrollY, [0.03, 0.07], [1, 0.8]),

        image4Top: useTransform(scrollY, [0, 0.1], ["50%", "30%"]),
        image4Scale: useTransform(scrollY, [0.08, 0.1], [1, 0.8]),

        image5Top: useTransform(scrollY, [0, 0.095], ["41%", "30%"]),
        image5Right: useTransform(scrollY, [0, 0.095], ["17%", "30%"]),
        image5Scale: useTransform(scrollY, [0.06, 0.09], [1, 0.8]),

        image6Left: useTransform(scrollY, [0, 0.13], ["14%", "0%"]),
        image6Scale: useTransform(scrollY, [0.1, 0.12], [1, 0.8]),

        image7Left: useTransform(scrollY, [0, 0.15], ["54%", "40%"]),
        image7Top: useTransform(scrollY, [0, 0.15], ["72%", "55%"]),
        image7Scale: useTransform(scrollY, [0.1, 0.12], [1, 0.8]),

        image3Top: useTransform(scrollY, [0.0017, 0.09], ["25%", "15%"]),

        image9Top: useTransform(scrollY, [0.0017, 0.15], ["40%", "51%"]),
        image9Right: useTransform(scrollY, [0.0017, 0.15], ["10%", "15%"]),

        image10Top: useTransform(scrollY, [0.0017, 0.115], ["61%", "45%"]),

        image8Left: useTransform(scrollY, [0.0419, 0.157], ["18%", "7%"]),

        image12Left: useTransform(scrollY, [0.0419, 0.161], ["30%", "40%"]),

        // Some Text

        para1: useTransform(scrollY, [0.385, 0.5406], [10, 40]),
        para2: useTransform(scrollY, [0.385, 0.5406], [10, 80]),
        para3: useTransform(scrollY, [0.385, 0.5406], [10, 125]),
      };
    } else if (screenWidth >= 640 && screenWidth < 768) {
      // Tablet (md: 768px and above in Tailwind)
      return {
        image1Left: useTransform(scrollY, [0, 0.03], ["18%", "15%"]),
        image1Scale: useTransform(scrollY, [0.025, 0.035], [1, 0.8]),

        imageTop: useTransform(scrollY, [0, 0.03], ["2%", "-10%"]),
        image2Scale: useTransform(scrollY, [0.025, 0.035], [1, 0.8]),

        image11Left: useTransform(scrollY, [0, 0.07], ["48%", "60%"]),
        image11Top: useTransform(scrollY, [0, 0.07], ["18%", "5%"]),
        image11Scale: useTransform(scrollY, [0.03, 0.07], [1, 0.8]),

        image4Top: useTransform(scrollY, [0, 0.1], ["50%", "30%"]),
        image4Scale: useTransform(scrollY, [0.08, 0.1], [1, 0.8]),

        image5Top: useTransform(scrollY, [0, 0.095], ["41%", "30%"]),
        image5Right: useTransform(scrollY, [0, 0.095], ["17%", "30%"]),
        image5Scale: useTransform(scrollY, [0.06, 0.09], [1, 0.8]),

        image6Left: useTransform(scrollY, [0, 0.13], ["14%", "0%"]),
        image6Scale: useTransform(scrollY, [0.1, 0.12], [1, 0.8]),

        image7Left: useTransform(scrollY, [0, 0.15], ["54%", "40%"]),
        image7Top: useTransform(scrollY, [0, 0.15], ["72%", "55%"]),
        image7Scale: useTransform(scrollY, [0.1, 0.12], [1, 0.8]),

        image3Top: useTransform(scrollY, [0.085, 0.19], ["35%", "15%"]),

        image9Top: useTransform(scrollY, [0.085, 0.23], ["40%", "51%"]),
        image9Right: useTransform(scrollY, [0.085, 0.23], ["10%", "15%"]),

        image10Top: useTransform(scrollY, [0.085, 0.23], ["68%", "55%"]),

        image8Left: useTransform(scrollY, [0.16, 0.29], ["26%", "7%"]),

        image12Left: useTransform(scrollY, [0.16, 0.4], ["41%", "70%"]),

        // Some Text

        para1: useTransform(scrollY, [0.451, 0.575], [10, 40]),
        para2: useTransform(scrollY, [0.451, 0.575], [10, 80]),
        para3: useTransform(scrollY, [0.451, 0.575], [10, 120]),
      };
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      // Tablet (md: 768px and above in Tailwind)
      return {
        image1Left: useTransform(scrollY, [0, 0.03], ["18%", "15%"]),
        image1Scale: useTransform(scrollY, [0.025, 0.035], [1, 0.8]),

        imageTop: useTransform(scrollY, [0, 0.03], ["2%", "-10%"]),
        image2Scale: useTransform(scrollY, [0.025, 0.035], [1, 0.8]),

        image11Left: useTransform(scrollY, [0, 0.07], ["48%", "60%"]),
        image11Top: useTransform(scrollY, [0, 0.07], ["18%", "5%"]),
        image11Scale: useTransform(scrollY, [0.03, 0.07], [1, 0.8]),

        image4Top: useTransform(scrollY, [0, 0.1], ["50%", "30%"]),
        image4Scale: useTransform(scrollY, [0.08, 0.1], [1, 0.8]),

        image5Top: useTransform(scrollY, [0, 0.095], ["41%", "30%"]),
        image5Right: useTransform(scrollY, [0, 0.095], ["17%", "30%"]),
        image5Scale: useTransform(scrollY, [0.06, 0.09], [1, 0.8]),

        image6Left: useTransform(scrollY, [0, 0.13], ["14%", "0%"]),
        image6Scale: useTransform(scrollY, [0.1, 0.12], [1, 0.8]),

        image7Left: useTransform(scrollY, [0, 0.15], ["54%", "40%"]),
        image7Top: useTransform(scrollY, [0, 0.15], ["72%", "55%"]),
        image7Scale: useTransform(scrollY, [0.1, 0.12], [1, 0.8]),

        image3Top: useTransform(scrollY, [0.085, 0.19], ["37%", "20%"]),

        image9Top: useTransform(scrollY, [0.085, 0.23], ["38%", "51%"]),
        image9Right: useTransform(scrollY, [0.085, 0.23], ["9%", "20%"]),

        image10Top: useTransform(scrollY, [0.085, 0.23], ["70%", "60%"]),

        image8Left: useTransform(scrollY, [0.16, 0.29], ["28%", "7%"]),

        image12Left: useTransform(scrollY, [0.16, 0.4], ["39%", "70%"]),

        // Some Text

        para1: useTransform(scrollY, [0.525, 0.622], [10, 40]),
        para2: useTransform(scrollY, [0.525, 0.622], [10, 80]),
        para3: useTransform(scrollY, [0.525, 0.622], [10, 130]),
      };
    } else if (screenWidth >= 1024 && screenWidth < 1280) {
      // Desktop (lg: 1024px and above in Tailwind)
      return {
        image1Left: useTransform(scrollY, [0, 0.03], ["18%", "15%"]),
        image1Scale: useTransform(scrollY, [0.025, 0.035], [1, 0.8]),

        imageTop: useTransform(scrollY, [0, 0.03], ["2%", "-10%"]),
        image2Scale: useTransform(scrollY, [0.025, 0.035], [1, 0.8]),

        image11Left: useTransform(scrollY, [0, 0.07], ["48%", "55%"]),
        image11Top: useTransform(scrollY, [0, 0.07], ["18%", "8%"]),
        image11Scale: useTransform(scrollY, [0.03, 0.07], [1, 0.8]),

        image4Top: useTransform(scrollY, [0, 0.1], ["50%", "40%"]),
        image4Scale: useTransform(scrollY, [0.08, 0.1], [1, 0.8]),

        image5Top: useTransform(scrollY, [0, 0.095], ["41%", "30%"]),
        image5Right: useTransform(scrollY, [0, 0.095], ["18%", "30%"]),
        image5Scale: useTransform(scrollY, [0.06, 0.09], [1, 0.8]),

        image6Left: useTransform(scrollY, [0, 0.13], ["14%", "2%"]),
        image6Scale: useTransform(scrollY, [0.1, 0.12], [1, 0.8]),

        image7Left: useTransform(scrollY, [0, 0.15], ["54%", "45%"]),
        image7Top: useTransform(scrollY, [0, 0.15], ["72%", "55%"]),
        image7Scale: useTransform(scrollY, [0.1, 0.12], [1, 0.8]),

        image3Top: useTransform(scrollY, [0.085, 0.19], ["40%", "28%"]),

        image9Top: useTransform(scrollY, [0.085, 0.23], ["45%", "51%"]),
        image9Right: useTransform(scrollY, [0.085, 0.23], ["8%", "15%"]),

        image10Top: useTransform(scrollY, [0.085, 0.23], ["80%", "60%"]),

        image8Left: useTransform(scrollY, [0.16, 0.29], ["35%", "2%"]),

        image12Left: useTransform(scrollY, [0.16, 0.4], ["42%", "70%"]),

        // Some Text

        para1: useTransform(scrollY, [0.626, 0.693], [10, 40]),
        para2: useTransform(scrollY, [0.626, 0.693], [10, 80]),
        para3: useTransform(scrollY, [0.626, 0.693], [10, 135]),
      };
    } else {
      // For any other large screen size screenWidth >= 1280
      return {
        image1Left: useTransform(scrollY, [0, 0.03], ["18%", "15%"]),
        image1Scale: useTransform(scrollY, [0.025, 0.035], [1, 0.8]),

        imageTop: useTransform(scrollY, [0, 0.03], ["2%", "-10%"]),
        image2Scale: useTransform(scrollY, [0.025, 0.035], [1, 0.8]),

        image11Left: useTransform(scrollY, [0, 0.07], ["48%", "55%"]),
        image11Top: useTransform(scrollY, [0, 0.07], ["18%", "8%"]),
        image11Scale: useTransform(scrollY, [0.03, 0.07], [1, 0.8]),

        image4Top: useTransform(scrollY, [0, 0.1], ["50%", "40%"]),
        image4Scale: useTransform(scrollY, [0.08, 0.1], [1, 0.8]),

        image5Top: useTransform(scrollY, [0, 0.095], ["41%", "30%"]),
        image5Right: useTransform(scrollY, [0, 0.095], ["18%", "30%"]),
        image5Scale: useTransform(scrollY, [0.06, 0.09], [1, 0.8]),

        image6Left: useTransform(scrollY, [0, 0.13], ["14%", "2%"]),
        image6Scale: useTransform(scrollY, [0.1, 0.12], [1, 0.8]),

        image7Left: useTransform(scrollY, [0, 0.15], ["54%", "45%"]),
        image7Top: useTransform(scrollY, [0, 0.15], ["72%", "55%"]),
        image7Scale: useTransform(scrollY, [0.1, 0.12], [1, 0.8]),

        image3Top: useTransform(scrollY, [0.085, 0.19], ["40%", "25%"]),

        image9Top: useTransform(scrollY, [0.085, 0.23], ["36%", "51%"]),
        image9Right: useTransform(scrollY, [0.085, 0.23], ["6%", "15%"]),

        image10Top: useTransform(scrollY, [0.085, 0.3], ["80%", "50%"]),

        image8Left: useTransform(scrollY, [0.16, 0.3], ["35%", "10%"]),

        image12Left: useTransform(scrollY, [0.17, 0.42], ["40%", "60%"]),

        // Some Text

        para1: useTransform(scrollY, [0.635, 0.72], [10, 40]),
        para2: useTransform(scrollY, [0.635, 0.72], [10, 112]),
        para3: useTransform(scrollY, [0.635, 0.72], [10, 192]),
      };
    }
  };

  const {
    image1Left,
    image1Scale,
    imageTop,
    image2Scale,
    image11Left,
    image11Top,
    image11Scale,
    image4Top,
    image4Scale,
    image5Top,
    image5Right,
    image5Scale,
    image6Left,
    image6Scale,
    image7Left,
    image7Top,
    image7Scale,
    image3Top,
    image9Top,
    image9Right,
    image10Top,
    image8Left,
    image12Left,
    para1,
    para2,
    para3,
  } = getTransforms();

  // VideoHolder Width Increaser
  const holderWidth = useTransform(scrollYPinned, [0, 1], ["24%", "98%"]);
  const sideItemsScale = useTransform(scrollYPinned, [0, 1], [1, 0.7]);
  const sideRotation = useTransform(scrollYPinned, [0.15, 0.5], [0, 180]);

  return (
    <section className="h-fit w-full">
      <section
        id="ForwardThinking"
        className="h-[45vh] sm:h-[80vh] md:h-[95vh] lg:h-[115vh] w-full pt-10 pl-10 sm:p-20 text-7xl min-[410px]:text-8xl sm:text-9xl md:text-[150px] lg:text-[200px] leading-[0.75] tracking-wide text-white relative"
      >
        <p>Forward</p>
        <p>
          <span className="mr-2 sm:mr-6 lg:mr-0 tracking-[-15px] sm:tracking-[-50px]">
            --
          </span>{" "}
          Thinking
        </p>
        {/* ImageContainer */}
        <div className="absolute z-[-1] inset-0 overflow-hidden">
          <motion.img
            src="/src/assets/images/about/01.webp"
            style={{
              top: "1%",
              left: image1Left,
              scale: image1Scale,
            }}
            className="w-20 sm-custom:w-[90px] sm:w-36 md:w-44 lg:w-48 xl:w-52 rounded-md absolute"
            alt="01"
          />
          <motion.img
            src="/src/assets/images/about/02.webp"
            style={{
              top: imageTop,
              right: "4%",
              scale: image2Scale,
            }}
            className="w-14 sm-custom:w-[70px] sm:w-28 md:w-36 lg:w-40 xl:w-44 rounded-md absolute"
            alt="02"
          />
          <motion.img
            src="/src/assets/images/about/11.webp"
            style={{
              top: image11Top,
              left: image11Left,
              scale: image11Scale,
            }}
            className="w-14 sm-custom:w-[70px] sm:w-24 md:w-28 lg:w-32 xl:w-36 rounded-md absolute"
            alt="11"
          />
          <motion.img
            src="/src/assets/images/about/04.png"
            style={{
              top: image4Top,
              left: "34%",
              scale: image4Scale,
            }}
            className="w-14 sm-custom:w-[70px] sm:w-24 md:w-28 lg:w-32 xl:w-36 rounded-md absolute"
            alt="04"
          />
          <motion.img
            src="/src/assets/images/about/05.webp"
            style={{
              top: image5Top,
              right: image5Right,
              scale: image5Scale,
            }}
            className="w-20 sm-custom:w-[90px] sm:w-36 md:w-44 lg:w-52 xl:w-56 rounded-md absolute"
            alt="05"
          />
          <motion.img
            src="/src/assets/images/about/06.webp"
            style={{
              left: image6Left,
              scale: image6Scale,
            }}
            className="w-14 sm-custom:w-[70px] sm:w-24 md:w-28 lg:w-36 xl:w-40 rounded-md absolute top-[68%] sm:top-[65%]"
            alt="06"
          />
          <motion.img
            src="/src/assets/images/about/07.png"
            style={{
              top: image7Top,
              left: image7Left,
              scale: image7Scale,
            }}
            className="h-14 sm-custom:h-[70px] sm:h-[100px] md:h-28 lg:h-36 xl:w-40 rounded-md absolute"
            alt="07"
          />
        </div>
      </section>
      <section
        id="BlurCards"
        className="h-screen md:h-[110vh] lg:h-[140vh] xl:h-[160vh] w-full relative"
      >
        {blurCardsData.map((data) => (
          <BlurCards key={data.id} {...data} screenWidth={screenWidth} />
        ))}
        {/* ImagesHolder */}
        <div className="inset-0 absolute z-1 ">
          <motion.img
            src="/src/assets/images/about/03.webp"
            style={{
              top: image3Top,
            }}
            className="w-16 sm-custom:w-20 md:w-24 lg:w-28 xl:w-36 absolute rounded-md left-[54.5%] sm-custom:left-[30%] sm:left-[40%] xl:left-[30%]"
            alt="03"
          />
          <motion.img
            src="/src/assets/images/about/09.webp"
            style={{
              top: image9Top,
              right: image9Right,
            }}
            className="h-24 sm-custom:h-28 md:h-32 lg:h-36 xl:h-[150px] absolute rounded-md"
            alt="09"
          />
          <motion.img
            src="/src/assets/images/about/10.png"
            style={{
              top: image10Top,
            }}
            className="h-20 sm-custom:h-[85px] md:h-24 lg:h-28 xl:h-36 absolute rounded-md left-[35%] sm-custom:left-[55%] md:left-[54%] xl:left-[62%]"
            alt="10"
          />
          <motion.img
            src="/src/assets/images/about/08.webp"
            style={{
              left: image8Left,
            }}
            className="w-24 sm-custom:w-28 md:w-32 lg:w-36 xl:w-40 absolute rounded-md top-[76%] sm:top-[70%] md:top-[62%] xl:top-[70%]"
            alt="08"
          />
          <motion.img
            src="/src/assets/images/about/12.webp"
            style={{
              left: image12Left,
            }}
            className="w-28 sm-custom:w-32 md:w-36 lg:w-44 xl:w-56 absolute rounded-md top-[91%]"
            alt="12"
          />
        </div>
      </section>
      <section
        ref={pinnedElem}
        id="ExpandVideo"
        className="h-[90vh] sm:h-screen md:h-[150vh] lg:h-[300vh] w-full mt-24 sm:mt-28 md:mt-32 lg:mt-36 xl:mt-64 relative"
      >
        <div
          id="Holder"
          style={{ perspective: "3000px" }}
          // The value from top is same as the height of the Navbar
          className="h-[25%] sm-custom:h-[35%] sm:h-[35%] lg:h-[25%] w-full sticky top-[15vh] flex flex-nowrap justify-center items-center gap-1 overflow-clip"
        >
          <motion.img
            style={{ scale: sideItemsScale, rotateY: sideRotation }}
            className="h-[40%] shrink-0"
            src="/src/assets/images/about/13.webp"
            alt="13"
          />
          <motion.img
            style={{ scale: sideItemsScale, rotateY: sideRotation }}
            className="h-[65%] shrink-0"
            src="/src/assets/images/about/14.webp"
            alt="14"
          />
          <motion.div
            style={{ width: holderWidth }}
            className="h-full shrink-0 rounded-lg sm:rounded-2xl lg:rounded-3xl overflow-hidden"
          >
            <video
              autoPlay
              muted
              loop
              src="/src/assets/videos/AboutPageVideo.webm"
              className="h-full w-full object-cover rounded-lg sm:rounded-2xl lg:rounded-3xl"
            ></video>
          </motion.div>
          <motion.img
            style={{ scale: sideItemsScale, rotateY: sideRotation }}
            className="h-[65%] shrink-0"
            src="/src/assets/images/about/15.webp"
            alt="15"
          />
          <motion.img
            style={{ scale: sideItemsScale, rotateY: sideRotation }}
            className="h-[40%] shrink-0"
            src="/src/assets/images/about/16.webp"
            alt="16"
          />
        </div>
      </section>
      {/* Some Text */}
      <div className="mt-10 sm-custom:mt-12 sm:mt-16 md:mt-24 lg:mt-32 xl:mt-36 text-white text-2xl sm-custom:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] leading-none sm-custom:leading-none lg:leading-[0.9]">
        <motion.p style={{ paddingLeft: para1 }}>Design driven</motion.p>
        <motion.p style={{ paddingLeft: para2 }}>Technology empowered</motion.p>
        <motion.p style={{ paddingLeft: para3 }}>Human focused</motion.p>
      </div>
      <div
        style={{
          lineHeight: "1",
        }}
        className="mt-5 sm:mt-7 md:mt-9 lg:mt-12 text-xs sm-custom:text-sm sm:text-lg md:text-xl lg:text-2xl text-[#dbd9e0]  pl-10 flex justify-center gap-[7%]"
      >
        <p className="h-full max-w-[30%]">
          We believe that the synergy between design and technology is
          unprecedentedly sculpting our world, enhancing our lives, fuelling
          creativity, boosting efficiency, and constantly redefining the limits
          of what's possible.
        </p>
        <p className="h-full max-w-[30%]">
          This approach, combined with a human-focused mindset, results in the
          new breed of agency we are creating, one that delivers more value, in
          less time, and with a better experience for everyone involved.
        </p>
      </div>
      <section id="Steffi&Leo" className="mt-10 sm:mt-12 md:mt-14 lg:mt-16">
        <img
          className="h-28 sm-custom:h-32 sm:h-36 md:h-40 lg:h-52 xl:h-80 ml-8 lg:ml-10"
          src="/src/assets/images/about/17.png"
          alt=""
        />
        <div className="mt-5 lg:mt-10 text-white px-10 lg:px-20 flex justify-between items-center">
          <p
            style={{ lineHeight: "0.9" }}
            className="text-sm sm-custom:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl min-w-fit"
          >
            Steffi & Leo <br /> Refokus Founders
          </p>
          <p
            style={{ lineHeight: "0.9" }}
            className="text-[9px] sm-custom:text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl max-w-[65%]"
          >
            “Our goal is to create websites that tell stories, making them stand
            out in a digital world where uniqueness is increasingly rare.”
          </p>
        </div>
      </section>
      <section
        id="BrandMarquees"
        className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-20 flex flex-col gap-1.5 sm:gap-2.5 md:gap-3 lg:gap-4 xl:gap-4.5"
      >
        <Marquees
          marqueeDataWithoutNumber={marqueeDataWithoutNumber[0]}
          marqueeWithNumber={false}
        />
        <Marquees
          marqueeDataWithoutNumber={marqueeDataWithoutNumber[1]}
          marqueeWithNumber={false}
          reverse={true}
        />
      </section>
      <section className="h-fit w-full mt-52 px-20">
        {expanderData.map((data) => (
          <Expander key={data.id} {...data} />
        ))}
      </section>
      <Cards marginTop={"35vh"} />
      <Footer />
    </section>
  );
};

export default About;
