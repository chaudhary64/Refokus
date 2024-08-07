import React, { useState } from "react";
import Marquees from "../Marquee/Marquees";
import SliderSection from "./SliderSection";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import ScrollImages from "./ScrollImages";
import { useMotionValueEvent, useScroll } from "framer-motion";

const Work = () => {
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
  const imagesData = [
    {
      id: 1,
      src: "/src/assets/images/work/01.png",
      display: "none",
      top: "34%",
      left: "40%",
    },
    {
      id: 2,
      src: "/src/assets/images/work/02.png",
      display: "none",
      top: "40%",
      left: "37%",
    },
    {
      id: 3,
      src: "/src/assets/images/work/03.png",
      display: "none",
      top: "28%",
      left: "43%",
    },
    {
      id: 4,
      src: "/src/assets/images/work/04.png",
      display: "none",
      top: "45%",
      left: "40%",
    },
    {
      id: 5,
      src: "/src/assets/images/work/05.png",
      display: "none",
      top: "40%",
      left: "45%",
    },
    {
      id: 6,
      src: "/src/assets/images/work/06.png",
      display: "none",
      top: "39%",
      left: "40%",
    },
  ];
  const [images, setImages] = useState(imagesData);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", () => showImages());

  const showImages = () => {
    let scroll = Math.round(scrollYProgress.get() * 100);
    setImages((prevImages) => {
      return prevImages.map((image) => {
        if (scroll >= 0 && scroll < 1) {
          return { ...image, display: "none" };
        } else if (image.id === 1 && scroll >= 1 && scroll) {
          return { ...image, display: "inline-block" };
        } else if (image.id === 2 && scroll <= 2) {
          return { ...image, display: "none" };
        } else if (image.id === 2 && scroll >= 2) {
          return { ...image, display: "inline-block" };
        } else if (image.id === 3 && scroll <= 3) {
          return { ...image, display: "none" };
        } else if (image.id === 3 && scroll >= 3) {
          return { ...image, display: "inline-block" };
        } else if (image.id === 4 && scroll <= 4) {
          return { ...image, display: "none" };
        } else if (image.id === 4 && scroll >= 4) {
          return { ...image, display: "inline-block" };
        } else if (image.id === 5 && scroll <= 5) {
          return { ...image, display: "none" };
        } else if (image.id === 5 && scroll >= 5) {
          return { ...image, display: "inline-block" };
        } else if (image.id === 6 && scroll <= 6) {
          return { ...image, display: "none" };
        } else if (image.id === 6 && scroll >= 6) {
          return { ...image, display: "inline-block" };
        } else {
          return image;
        }
      });
    });
  };
  return (
    <>
      <section className="h-[90vh] w-full py-5 flex flex-col justify-end items-center gap-10 relative overflow-hidden">
        <p className="text-[37vw] font-[Raleway-Medium] text-white font-thin tracking-tight leading-[0.8] select-none overflow-hidden">
          work
        </p>
        <p className="text-2xl text-[#646464] font-[SmoochSans-Light]">
          Web Design, Webflow Development, Creative Development
        </p>
        {/* Rendering the images on scroll */}
        {images.map((image) => (
          <ScrollImages
            key={Math.random()}
            src={image.src}
            display={image.display}
            top={image.top}
            left={image.left}
          />
        ))}
      </section>
      <Marquees
        marqueeDataWithNumber={marqueeDataWithNumber}
        marqueeWithNumber={true}
      />
      <SliderSection />
      <section id="BrandMarquees" className="mt-[35vh] flex flex-col gap-10">
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
      <Cards marginTop={"30vh"} />
      <Footer />
    </>
  );
};

export default Work;
