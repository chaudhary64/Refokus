import React, { useRef } from "react";
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
      top: "5%",
      left: "3%",
    },
    {
      id: 2,
      heading: "Our Awards",
      number: "77",
      text: "We are results-driven and people-focused (but awards are nice too!). We've won website of the day from multiple awards organizations and have been nominated twice for Webflow Agency of the year.",
      top: "25%",
      left: "55%",
    },
    {
      id: 3,
      heading: "Our History",
      number: "2021",
      text: "We are proud of our short history, positioning ourselves as market leaders and demonstrating that great work fuels growth.",
      top: "55%",
      left: "15%",
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
  const image1Left = useTransform(scrollY, [0, 0.03], ["18%", "15%"]);
  const image1Scale = useTransform(scrollY, [0.025, 0.035], [1, 0.8]);

  const imageTop = useTransform(scrollY, [0, 0.03], ["0%", "-10%"]);
  const image2Scale = useTransform(scrollY, [0.025, 0.035], [1, 0.8]);

  const image11Left = useTransform(scrollY, [0, 0.07], ["44%", "50%"]);
  const image11Top = useTransform(scrollY, [0, 0.07], ["14%", "8%"]);
  const image11Scale = useTransform(scrollY, [0.03, 0.07], [1, 0.8]);

  const image4Top = useTransform(scrollY, [0, 0.1], ["54%", "40%"]);
  const image4Scale = useTransform(scrollY, [0.08, 0.1], [1, 0.8]);

  const image5Top = useTransform(scrollY, [0, 0.095], ["40%", "30%"]);
  const image5Right = useTransform(scrollY, [0, 0.095], ["18%", "30%"]);
  const image5Scale = useTransform(scrollY, [0.06, 0.09], [1, 0.8]);

  const image6Left = useTransform(scrollY, [0, 0.13], ["13%", "0%"]);
  const image6Scale = useTransform(scrollY, [0.1, 0.12], [1, 0.8]);

  const image7Left = useTransform(scrollY, [0, 0.15], ["50%", "40%"]);
  const image7Top = useTransform(scrollY, [0, 0.15], ["70%", "55%"]);
  const image7Scale = useTransform(scrollY, [0.1, 0.12], [1, 0.8]);

  const image3Top = useTransform(scrollY, [0.085, 0.19], ["33%", "15%"]);

  const image9Top = useTransform(scrollY, [0.085, 0.23], ["31%", "51%"]);
  const image9Right = useTransform(scrollY, [0.085, 0.23], ["20%", "30%"]);

  const image10Top = useTransform(scrollY, [0.085, 0.23], ["63%", "55%"]);

  const image8Left = useTransform(scrollY, [0.16, 0.29], ["18%", "7%"]);

  const image12Left = useTransform(scrollY, [0.16, 0.4], ["42%", "70%"]);

  // VideoHolder Width Increaser
  const holderWidth = useTransform(scrollYPinned, [0, 1], ["24%", "98%"]);
  const sideItemsScale = useTransform(scrollYPinned, [0, 1], [1, 0.7]);

  // Some Text

  const para1 = useTransform(scrollY, [0.61, 0.7], [10, 40]);
  const para2 = useTransform(scrollY, [0.61, 0.7], [10, 112]);
  const para3 = useTransform(scrollY, [0.61, 0.7], [10, 192]);
  const sideRotation = useTransform(scrollYPinned, [0.15, 0.5], [0, 180]);

  useMotionValueEvent(scrollY, "change", (l) => console.log(l));
  return (
    <section className="h-fit w-full">
      <section
        id="ForwardThinking"
        className="h-[115vh] w-full p-20 text-[200px] leading-[0.75] tracking-wide text-white relative"
      >
        <p>Forward</p>
        <p>
          <span className="tracking-[-50px]">--</span> Thinking
        </p>
        {/* ImageContainer */}
        <div className="absolute z-[-1] inset-0 overflow-hidden">
          <motion.img
            src="/src/assets/images/about/01.webp"
            style={{
              top: "0%",
              left: image1Left,
              scale: image1Scale,
            }}
            className="w-52 rounded-md absolute"
            alt="01"
          />
          <motion.img
            src="/src/assets/images/about/02.webp"
            style={{
              top: imageTop,
              right: "3%",
              scale: image2Scale,
            }}
            className="w-44 rounded-md absolute"
            alt="02"
          />
          <motion.img
            src="/src/assets/images/about/11.webp"
            style={{
              top: image11Top,
              left: image11Left,
              scale: image11Scale,
            }}
            className="w-36 rounded-md absolute"
            alt="11"
          />
          <motion.img
            src="/src/assets/images/about/04.png"
            style={{
              top: image4Top,
              left: "30%",
              scale: image4Scale,
            }}
            className="w-36 rounded-md absolute"
            alt="04"
          />
          <motion.img
            src="/src/assets/images/about/05.webp"
            style={{
              top: image5Top,
              right: image5Right,
              scale: image5Scale,
            }}
            className="w-56 rounded-md absolute"
            alt="05"
          />
          <motion.img
            src="/src/assets/images/about/06.webp"
            style={{
              top: "65%",
              left: image6Left,
              scale: image6Scale,
            }}
            className="w-40 rounded-md absolute"
            alt="06"
          />
          <motion.img
            src="/src/assets/images/about/07.png"
            style={{
              top: image7Top,
              left: image7Left,
              scale: image7Scale,
            }}
            className="h-44 rounded-md absolute"
            alt="07"
          />
        </div>
      </section>
      <section id="BlurCards" className="h-[140vh] w-full relative">
        {blurCardsData.map((data) => (
          <BlurCards key={data.id} {...data} />
        ))}
        {/* ImagesHolder */}
        <div className="inset-0 absolute z-1 ">
          <motion.img
            src="/src/assets/images/about/03.webp"
            style={{
              top: image3Top,
              left: "34%",
            }}
            className="w-36 absolute rounded-md"
            alt="03"
          />
          <motion.img
            src="/src/assets/images/about/09.webp"
            style={{
              top: image9Top,
              right: image9Right,
            }}
            className="h-40 absolute rounded-md"
            alt="09"
          />
          <motion.img
            src="/src/assets/images/about/10.png"
            style={{
              top: image10Top,
              left: "52%",
            }}
            className="h-36 absolute rounded-md"
            alt="10"
          />
          <motion.img
            src="/src/assets/images/about/08.webp"
            style={{
              top: "80%",
              left: image8Left,
            }}
            className="w-40 absolute rounded-md"
            alt="08"
          />
          <motion.img
            src="/src/assets/images/about/12.webp"
            style={{
              top: "92%",
              left: image12Left,
            }}
            className="w-56 absolute rounded-md"
            alt="12"
          />
        </div>
      </section>
      <section
        ref={pinnedElem}
        id="ExpandVideo"
        className="h-[300vh] w-full mt-80 relative"
      >
        <div
          id="Holder"
          style={{ perspective: "3000px" }}
          // The value from top is same as the height of the Navbar
          className="h-[75vh] w-full sticky top-[15vh] flex flex-nowrap justify-center items-center gap-1 overflow-clip"
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
            className="h-full shrink-0 rounded-3xl overflow-hidden"
          >
            <video
              autoPlay
              muted
              loop
              src="/src/assets/videos/AboutPageVideo.webm"
              className="h-full w-full object-cover rounded-3xl"
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
      <div className="mt-32 text-white text-8xl leading-[0.9]">
        <motion.p style={{ paddingLeft: para1 }}>Design driven</motion.p>
        <motion.p style={{ paddingLeft: para2 }}>Technology empowered</motion.p>
        <motion.p style={{ paddingLeft: para3 }} className="pl-48">
          Human focused
        </motion.p>
      </div>
      <div className="mt-12 text-2xl text-[#dbd9e0] leading-none pl-10 flex justify-center gap-[7%]">
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
      <section id="Steffi&Leo" className="mt-16">
        <img
          className="h-96 ml-10"
          src="/src/assets/images/about/17.png"
          alt=""
        />
        <div className="mt-10 text-white px-20 flex justify-between">
          <p className="text-2xl min-w-fit leading-none">
            Steffi & Leo <br /> Refokus Founders
          </p>
          <p className="text-6xl max-w-[65%] leading-[0.9]">
            “Our goal is to create websites that tell stories, making them stand
            out in a digital world where uniqueness is increasingly rare.”
          </p>
        </div>
      </section>
      <section id="BrandMarquees" className="mt-32 flex flex-col gap-10">
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
