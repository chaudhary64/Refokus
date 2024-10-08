import React, { useEffect, useState } from "react";
import Marquees from "../Marquee/Marquees";
import OverviewWork from "./OverviewWork";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const Home = () => {
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
  const marqueeDataWithNumber = [
    {
      id: 1,
      number: 9,
      src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
    },
    {
      id: 2,
      number: 8,
      src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
    },
    {
      id: 3,
      number: 2,
      src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
    },
    {
      id: 4,
      number: 9,
      src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
    },
    {
      id: 5,
      number: 8,
      src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
    },
  ];
  const overviewWorkData = [
    {
      id: 1,
      heading: "ARQITEL",
      img1: "/assets/images/home/1u.webp",
      img2: "/assets/images/home/1l.webp",
      video: "/assets/videos/Arqitel.webm",
      bgColor: "#5355EE",
      rightUpperText: "Concept, Design, 3D, Webflow+WebGL Development",
      rightLowerText:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
    },
    {
      id: 2,
      heading: "Cula",
      img1: "/assets/images/home/2u.png",
      img2: "/assets/images/home/2l.png",
      video: "/assets/videos/Cula.mp4",
      bgColor: "#4A576B",
      rightUpperText: "Concept, Design, 3D, Webflow+WebGL Development",
      rightLowerText:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
    },
    {
      id: 3,
      heading: "INTENSEYE",
      img1: "/assets/images/home/3u.webp",
      img2: "/assets/images/home/3l.webp",
      video: "/assets/videos/Intenseye.webm",
      bgColor: "#1626F3",
      rightUpperText: "Concept, Design, Webflow Development",
      rightLowerText:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
    },
    {
      id: 4,
      heading: "TTR",
      img1: "/assets/images/home/4u.jpg",
      img2: "/assets/images/home/4l.jpg",
      video: "/assets/videos/TTR.webm",
      bgColor: "#4A576B",
      rightUpperText:
        "Concept, Design, 3D, Webflow+WebGL Development, AI Integrations",
      rightLowerText:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
    },
    {
      id: 5,
      heading: "Maniv",
      img1: "/assets/images/home/5u.png",
      img2: "/assets/images/home/5l.png",
      video: "/assets/videos/Maniv.mp4",
      bgColor: "#2DCB76",
      rightUpperText: "Branding, Design, Webflow+GSAP Development",
      rightLowerText:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
    },
    {
      id: 6,
      heading: "SILVR",
      img1: "/assets/images/home/6u.jpg",
      img2: "/assets/images/home/6l.jpg",
      video: "/assets/videos/Silvr.webm",
      bgColor: "#FF7548",
      rightUpperText: "Design, Webflow Development",
      rightLowerText:
        "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
    },
  ];

  const { scrollYProgress: scroll } = useScroll();

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
        videoElem: useTransform(scroll, [0.68, 1], [0, -25]),
        leftImageX: useTransform(scroll, [0.86, 1], [0, -30]),
        leftImageY: useTransform(scroll, [0.86, 1], [0, -30]),
        rightImageX: useTransform(scroll, [0.86, 1], [0, 15]),
        rightImageY: useTransform(scroll, [0.86, 1], [0, -15]),
      };
    } else if (screenWidth >= 590 && screenWidth < 640) {
      // Tablet (md: 768px and above in Tailwind)
      return {
        videoElem: useTransform(scroll, [0.69, 1], [0, -30]),
        leftImageX: useTransform(scroll, [0.87, 1], [0, -30]),
        leftImageY: useTransform(scroll, [0.87, 1], [0, -30]),
        rightImageX: useTransform(scroll, [0.87, 1], [0, 25]),
        rightImageY: useTransform(scroll, [0.87, 1], [0, -25]),
      };
    } else if (screenWidth >= 640 && screenWidth < 768) {
      return {
        videoElem: useTransform(scroll, [0.72, 1], [0, -35]),
        leftImageX: useTransform(scroll, [0.87, 1], [0, -30]),
        leftImageY: useTransform(scroll, [0.87, 1], [0, -30]),
        rightImageX: useTransform(scroll, [0.87, 1], [0, 30]),
        rightImageY: useTransform(scroll, [0.87, 1], [0, -30]),
      };
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      // Tablet (md: 768px and above in Tailwind)
      return {
        videoElem: useTransform(scroll, [0.73, 0.92], [80, -80]),
        leftImageX: useTransform(scroll, [0.87, 1], [0, -30]),
        leftImageY: useTransform(scroll, [0.87, 1], [0, -30]),
        rightImageX: useTransform(scroll, [0.87, 1], [0, 30]),
        rightImageY: useTransform(scroll, [0.87, 1], [0, -30]),
      };
    } else if (screenWidth >= 1024 && screenWidth < 1280) {
      // Desktop (lg: 1024px and above in Tailwind)
      return {
        videoElem: useTransform(scroll, [0.75, 0.94], [100, -100]),
        leftImageX: useTransform(scroll, [0.87, 1], [0, -50]),
        leftImageY: useTransform(scroll, [0.87, 1], [0, -50]),
        rightImageX: useTransform(scroll, [0.87, 1], [0, 50]),
        rightImageY: useTransform(scroll, [0.87, 1], [0, -50]),
      };
    } else {
      return {
        videoElem: useTransform(scroll, [0.76, 0.97], [150, -150]),
        leftImageX: useTransform(scroll, [0.87, 1], [0, -60]),
        leftImageY: useTransform(scroll, [0.87, 1], [0, -60]),
        rightImageX: useTransform(scroll, [0.87, 1], [0, 60]),
        rightImageY: useTransform(scroll, [0.87, 1], [0, -60]),
      };
    }
  };

  const { videoElem, leftImageX, leftImageY, rightImageX, rightImageY } =
    getTransforms();

  useMotionValueEvent(scroll, "change", (l) => console.log(l));

  return (
    <>
      <section className="h-fit w-[95%] mx-auto pt-8 sm:pt-10 md:pt-14 xl:pt-20 text-white">
        <span
          style={{ lineHeight: "0.95" }}
          className="inline-block h-fit w-fit text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl tracking-wider"
        >
          <div className="overflow-hidden">
            <motion.p
              initial={{ top: 200 }}
              animate={{ top: 0 }}
              transition={{ duration: 1.2 }}
              className="relative pl-10 sm:pl-14 xl:pl-20"
            >
              We Develop
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.p
              initial={{ top: 200 }}
              animate={{ top: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="relative pl-20 sm:pl-28 xl:pl-40"
            >
              <span
                style={{
                  color: "transparent",
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(238,35,192,1) 40%, rgba(238,32,215,1) 60%, rgba(0,212,255,1) 100%)",
                  backgroundClip: "text",
                }}
                className="inline-block h-fit text-transparent"
              >
                amazing&nbsp;
              </span>
              websites
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.p
              initial={{ top: 200 }}
              animate={{ top: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="relative pl-[125px] sm:pl-[170px] xl:pl-[250px]"
            >
              for your&nbsp;
              <span
                style={{
                  color: "transparent",
                  background:
                    "linear-gradient(90deg, rgba(245,18,98,1) 0%, rgba(238,35,192,1) 40%, rgba(216,32,238,1) 60%, rgba(0,212,255,1) 100%)",
                  backgroundClip: "text",
                }}
                className="inline-block h-fit text-transparent"
              >
                buisness
              </span>
              <span></span>
            </motion.p>
          </div>
        </span>
        <span className="mt-3 sm:mt-5 md:mt-7 lg:mt-9 xl:mt-20 text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-lg inline-block h-fit w-full tracking-wider overflow-hidden">
          <motion.p
            initial={{ top: 200 }}
            animate={{ top: 0 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="text-center relative"
          >
            Refokus is a forward-thinking web agency that combines Web Design,
            Webflow Development, and Creative Development to create cool
            websites that help brands position themselves as market leaders.
          </motion.p>
        </span>
      </section>
      <section
        id="BrandMarquees"
        className="mt-8 sm:mt-10 md:mt-14 xl:mt-20 flex flex-col gap-2 sm:gap-4 xl:gap-6"
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
      <section
        id="overviewWork"
        className="h-fit w-[95%] mx-auto mt-8 sm:mt-10 md:mt-14 xl:mt-20 flex flex-col gap-6 sm:gap-8 md:gap-9 lg:gap-11 xl:gap-12 items-center"
      >
        {overviewWorkData.map((data) => (
          <OverviewWork key={data.id} {...data} />
        ))}
      </section>
      <div className="h-fit w-fit mx-auto mt-6 sm:mt-8 md:mt-9 lg:mt-11 xl:mt-12">
        <Link to="/work">
          <Button text={"View All Work"} bgColor="transparent" />
        </Link>
      </div>
      <Marquees
        marqueeDataWithNumber={marqueeDataWithNumber}
        marqueeWithNumber={true}
      />
      {/* ForwardThinking */}
      <section className="h-fit w-[95%] mx-auto mt-12 sm:mt-24 md:mt-28 lg:mt-32 xl:mt-36 flex flex-col md:flex-row gap-5 justify-evenly text-white relative">
        <div>
          <pre
            style={{
              lineHeight: "0.8",
            }}
            className="h-fit w-fit mx-auto text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-[GreyQo-Regular] tracking-wider"
          >
            Forward Thinking
          </pre>
          <p
            style={{
              lineHeight: "1",
            }}
            className="mt-4 md:mt-8 xl:mt-14 xl:pl-20 text-sm sm:text-base md:text-base xl:text-xl text-center tracking-wider"
          >
            Redefining the creative world with design, innovation, and
            forward-thinking as a leading Webflow Agency.
          </p>
          <div className="h-fit w-fit mx-auto xl:pl-20 mt-3 lg:mt-4 xl:mt-5">
            <Button text={"News & Insights"} bgColor="transparent" />
          </div>
        </div>
        <motion.div
          style={{ y: videoElem }}
          className="mx-auto w-32 sm:w-40 md:w-64 lg:w-72 xl:w-96"
        >
          <video
            autoPlay
            muted
            loop
            src="/assets/videos/Refokus-2022.webm"
            className="w-32 sm:w-40 md:w-64 lg:w-72 xl:w-96 object-cover rounded-md sm:rounded-lg md:rounded-xl xl:rounded-2xl"
          ></video>
          <p
            style={{
              lineHeight: "1",
            }}
            className="mt-3 text-white text-xs sm:text-sm md:text-base xl:text-xl text-center tracking-wider"
          >
            Refokus 2022 Offsite Where Work Meets Play, Innovation, and Homemade
            Pasta.
          </p>
        </motion.div>
      </section>
      <section className="h-[45vh] sm-custom:h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] xl:h-[70vh] w-[95%] mx-auto mt-12 sm:mt-16 lg:mt-11 xl:mt-12 mb-[-8vh] sm:mb-[-16vh] xl:mb-[-30vh] text-white relative">
        <motion.div
          style={{ y: leftImageY, x: leftImageX }}
          className="w-28 sm-custom:w-32 sm:w-36 md:w-40 lg:w-44 xl:w-60 absolute left-[7%] sm-custom:left-[3%] top-0"
        >
          <img
            className="w-24 sm-custom:w-28 sm:w-36 md:w-40 lg:w-44 xl:w-60 mx-auto rounded-lg xl:rounded-2xl"
            src="/assets/images/about/03.webp"
            alt=""
          />
          <p
            style={{
              lineHeight: "1",
            }}
            className="mt-2 text-center text-xs sm-custom:text-sm md:text-base xl:text-lg tracking-wider"
          >
            Why Refokus is the Best Partner to Build Your <br /> Venture Capital
            Website
          </p>
        </motion.div>
        <motion.div
          style={{ y: rightImageY, x: rightImageX }}
          className="w-32 sm-custom:w-36 sm:w-44 md:w-48 lg:w-52 xl:w-80 absolute right-[3%] bottom-0"
        >
          <img
            className="w-28 sm-custom:w-36 sm:w-44 md:w-48 lg:w-52 xl:w-80 mx-auto rounded-lg xl:rounded-2xl"
            src="/assets/images/home/webflow-enterprise-partner.png"
            alt=""
          />
          <p
            style={{
              lineHeight: "1",
            }}
            className="mt-2 text-center text-xs sm-custom:text-sm md:text-base xl:text-lg tracking-wider"
          >
            Webflow Agency Case Study of Refokus as a leading <br /> Webflow
            Enterprise Partner
          </p>
        </motion.div>
      </section>
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
