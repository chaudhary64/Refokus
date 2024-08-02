import React from "react";
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
      img1: "/src/assets/images/home/1u.webp",
      img2: "/src/assets/images/home/1l.webp",
      video: "/src/assets/videos/Arqitel.webm",
      bgColor: "#5355EE",
      rightUpperText: "Concept, Design, 3D, Webflow+WebGL Development",
      rightLowerText:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
    },
    {
      id: 2,
      heading: "Cula",
      img1: "/src/assets/images/home/2u.png",
      img2: "/src/assets/images/home/2l.png",
      video: "/src/assets/videos/Cula.mp4",
      bgColor: "#4A576B",
      rightUpperText: "Concept, Design, 3D, Webflow+WebGL Development",
      rightLowerText:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
    },
    {
      id: 3,
      heading: "INTENSEYE",
      img1: "/src/assets/images/home/3u.webp",
      img2: "/src/assets/images/home/3l.webp",
      video: "/src/assets/videos/Intenseye.webm",
      bgColor: "#1626F3",
      rightUpperText: "Concept, Design, Webflow Development",
      rightLowerText:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
    },
    {
      id: 4,
      heading: "TTR",
      img1: "/src/assets/images/home/4u.jpg",
      img2: "/src/assets/images/home/4l.jpg",
      video: "/src/assets/videos/TTR.webm",
      bgColor: "#4A576B",
      rightUpperText:
        "Concept, Design, 3D, Webflow+WebGL Development, AI Integrations",
      rightLowerText:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
    },
    {
      id: 5,
      heading: "Maniv",
      img1: "/src/assets/images/home/5u.png",
      img2: "/src/assets/images/home/5l.png",
      video: "/src/assets/videos/Maniv.mp4",
      bgColor: "#2DCB76",
      rightUpperText: "Branding, Design, Webflow+GSAP Development",
      rightLowerText:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
    },
    {
      id: 6,
      heading: "SILVR",
      img1: "/src/assets/images/home/6u.jpg",
      img2: "/src/assets/images/home/6l.jpg",
      video: "/src/assets/videos/Silvr.webm",
      bgColor: "#FF7548",
      rightUpperText: "Design, Webflow Development",
      rightLowerText:
        "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
    },
  ];

  const { scrollYProgress: scroll } = useScroll();
  const videoElem = useTransform(scroll, [0.7, 0.9], [0, -300]);
  const leftImageX = useTransform(scroll, [0.8, 1], [0, -85]);
  const leftImageY = useTransform(scroll, [0.8, 1], [0, -85]);
  const rightImageX = useTransform(scroll, [0.85, 1], [0, 80]);
  const rightImageY = useTransform(scroll, [0.85, 1], [0, -80]);
  useMotionValueEvent(scroll, "change", (latest) => {
    console.log(latest);
  });
  return (
    <>
      <section className="h-fit w-[95%] mx-auto pt-20 text-white">
        <span className="text-9xl leading-[0.95] tracking-wider">
          <div className="overflow-hidden">
            <motion.p
              initial={{ top: 200 }}
              animate={{ top: 0 }}
              transition={{ duration: 1.2 }}
              className="relative pl-20"
            >
              We Develop
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.p
              initial={{ top: 200 }}
              animate={{ top: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="relative pl-40"
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
                amazing
              </span>
              websites
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.p
              initial={{ top: 200 }}
              animate={{ top: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="relative pl-[270px]"
            >
              for your
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
        <span className="mt-20 text-lg inline-block h-fit w-full tracking-wider overflow-hidden">
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
      <section id="BrandMarquees" className="mt-[20vh] flex flex-col gap-10">
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
        className="h-fit w-[95%] mx-auto mt-20 flex flex-col gap-8 items-center"
      >
        {overviewWorkData.map((data) => (
          <OverviewWork key={data.id} {...data} />
        ))}
        <Link to="/work" className="mt-10">
          <Button text={"View All Work"} bgColor="transparent" />
        </Link>
      </section>
      <Marquees
        marqueeDataWithNumber={marqueeDataWithNumber}
        marqueeWithNumber={true}
      />
      {/* ForwardThinking */}
      <section className="h-fit w-[95%] mx-auto mt-36 flex justify-evenly text-white relative">
        <div>
          <span className="text-[180px] leading-[0.8] tracking-wide">
            <p>Forward</p>
            <p className="pl-20">Thinking</p>
          </span>
          <p className="mt-12 pl-20 text-xl tracking-wider">
            Redefining the creative world with design, <br /> innovation, and
            forward-thinking as a <br /> leading Webflow Agency.
          </p>
          <span className="inline-block pl-20 mt-10">
            <Button text={"News & Insights"} bgColor="transparent" />
          </span>
        </div>
        <motion.span
          style={{ y: videoElem }}
          className="flex flex-col gap-5 relative"
        >
          <video
            autoPlay
            muted
            loop
            src="/src/assets/videos/Refokus-2022.webm"
            className="h-screen w-full object-cover rounded-2xl relative"
          ></video>
          <p className="text-white text-xl tracking-wider">
            Refokus 2022 Offsite Where Work Meets Play, Innovation, and Homemade
            Pasta.
          </p>
        </motion.span>
      </section>
      <section className="h-[90vh] w-[95%] mx-auto mt-40 text-white relative">
        <motion.div
          style={{ y: leftImageY, x: leftImageX }}
          className="absolute left-[15%] top-0"
        >
          <img
            className="w-80 rounded-2xl"
            src="/src/assets/images/about/03.webp"
            alt=""
          />
          <p className="mt-5 text-center text-xl tracking-wider">
            Why Refokus is the Best Partner to Build Your <br /> Venture Capital
            Website
          </p>
        </motion.div>
        <motion.div
          style={{ y: rightImageY, x: rightImageX }}
          className="absolute right-[15%] bottom-0"
        >
          <img
            className="w-96 rounded-2xl"
            src="/src/assets/images/home/webflow-enterprise-partner.png"
            alt=""
          />
          <p className="mt-3 text-center text-xl tracking-wider">
            Webflow Agency Case Study of Refokus as a leading <br /> Webflow
            Enterprise Partner
          </p>
        </motion.div>
      </section>
      <Cards marginTop={"20vh"} />
      <Footer />
    </>
  );
};

export default Home;
