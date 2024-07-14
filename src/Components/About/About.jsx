import React from "react";
import BlurCards from "../Cards/BlurCards";
import Marquees from "../Marquee/Marquees";

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
          <img
            src="/src/assets/images/about/01.webp"
            style={{
              top: "0%",
              left: "18%",
            }}
            className="w-52 rounded-md absolute"
            alt="01"
          />
          <img
            src="/src/assets/images/about/02.webp"
            style={{
              top: "0%",
              right: "3%",
            }}
            className="w-44 rounded-md absolute"
            alt="02"
          />
          <img
            src="/src/assets/images/about/11.webp"
            style={{
              top: "14%",
              left: "44%",
            }}
            className="w-36 rounded-md absolute"
            alt="11"
          />
          <img
            src="/src/assets/images/about/04.png"
            style={{
              top: "54%",
              left: "30%",
            }}
            className="w-36 rounded-md absolute"
            alt="04"
          />
          <img
            src="/src/assets/images/about/05.webp"
            style={{
              top: "40%",
              right: "18%",
            }}
            className="w-56 rounded-md absolute"
            alt="05"
          />
          <img
            src="/src/assets/images/about/06.webp"
            style={{
              top: "65%",
              left: "13%",
            }}
            className="w-40 rounded-md absolute"
            alt="06"
          />
          <img
            src="/src/assets/images/about/07.png"
            style={{
              top: "70%",
              left: "50%",
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
          <img
            src="/src/assets/images/about/03.webp"
            style={{
              top: "33%",
              left: "34%",
            }}
            className="w-36 absolute rounded-md"
            alt="03"
          />
          <img
            src="/src/assets/images/about/09.webp"
            style={{
              top: "31%",
              right: "20%",
            }}
            className="h-40 absolute rounded-md"
            alt="09"
          />
          <img
            src="/src/assets/images/about/10.png"
            style={{
              top: "63%",
              left: "53%",
            }}
            className="h-32 absolute rounded-md"
            alt="10"
          />
          <img
            src="/src/assets/images/about/03.webp"
            style={{
              top: "80%",
              left: "10%",
            }}
            className="w-32 absolute rounded-md"
            alt="03"
          />
          <img
            src="/src/assets/images/about/12.webp"
            style={{
              top: "92%",
              left: "42%",
            }}
            className="w-52 absolute rounded-md"
            alt="12"
          />
        </div>
      </section>
      <section id="ExpandVideo" className="h-[300vh] w-full mt-80 relative">
        <div
          id="Holder"
          // The value from top is same as the height of the Navbar
          className="h-[75vh] w-full sticky top-[15vh] flex flex-nowrap justify-center items-center gap-8 overflow-clip"
        >
          <img
            className="h-[40%] shrink-0"
            src="/src/assets/images/about/13.webp"
            alt="13"
          />
          <img
            className="h-[65%] shrink-0"
            src="/src/assets/images/about/14.webp"
            alt="14"
          />
          <div className="h-full w-[24%] shrink-0 rounded-3xl overflow-clip">
            <video
              autoPlay
              muted
              loop
              src="/src/assets/videos/AboutPageVideo.webm"
              className="h-full w-full object-cover"
            ></video>
          </div>
          <img
            className="h-[65%] shrink-0"
            src="/src/assets/images/about/15.webp"
            alt="15"
          />
          <img
            className="h-[40%] shrink-0"
            src="/src/assets/images/about/16.webp"
            alt="16"
          />
        </div>
      </section>
      <div className="mt-32 text-white text-8xl leading-[0.9]">
        <p className="pl-10">Design driven</p>
        <p className="pl-28">Technology empowered</p>
        <p className="pl-48">Human focused</p>
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
    </section>
  );
};

export default About;
