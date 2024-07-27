import React from "react";
import Marquees from "../Marquee/Marquees";
import OverviewWork from "./OverviewWork";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

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
  return (
    <>
      <section className="h-fit w-[95%] mx-auto pt-20 text-white">
        <div className="text-9xl leading-[0.95]">
          <span>
            <p>We Develop</p>
          </span>
          <span>
            <p>
              <span
                style={{
                  color: "transparent",
                  background:
                    "linear-gradient(90deg, rgba(18,245,197,1) 0%, rgba(213,35,238,1) 40%, rgba(216,32,238,1) 60%, rgba(0,212,255,1) 100%)",
                  backgroundClip: "text",
                }}
                className="inline-block h-fit text-transparent"
              >
                amazing
              </span>
              websites
            </p>
          </span>
          <span>
            <p>
              for your business <span>.</span>
            </p>
          </span>
        </div>
        <span className="mt-16 text-xl inline-block h-fit w-fit tracking-wider">
          <p>
            Refokus is a forward-thinking web agency that combines Web Design,
            Webflow Development, and Creative Development to create cool
            websites that help brands position themselves as market leaders.
          </p>
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
        className="h-fit w-[95%] mx-auto mt-20 flex flex-col items-center"
      >
        {overviewWorkData.map((data) => (
          <OverviewWork key={data.id} {...data} />
        ))}
        <Link to="/work" className="mt-10">
          <Button text={"View All Work"} bgColor="transparent" />
        </Link>
      </section>
    </>
  );
};

export default Home;
