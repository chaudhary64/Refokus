import React, { useState, useEffect } from "react";
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
      src: "/assets/images/work/01.png",
      display: "none",
      top: "32%",
      left: "40%",
    },
    {
      id: 2,
      src: "/assets/images/work/02.png",
      display: "none",
      top: "38%",
      left: "37%",
    },
    {
      id: 3,
      src: "/assets/images/work/03.png",
      display: "none",
      top: "26%",
      left: "43%",
    },
    {
      id: 4,
      src: "/assets/images/work/04.png",
      display: "none",
      top: "45%",
      left: "40%",
    },
    {
      id: 5,
      src: "/assets/images/work/05.png",
      display: "none",
      top: "38%",
      left: "45%",
    },
    {
      id: 6,
      src: "/assets/images/work/06.png",
      display: "none",
      top: "37%",
      left: "40%",
    },
  ];
  const [images, setImages] = useState(imagesData);
  const { scrollYProgress } = useScroll();

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", () => {
    showImages();
  });

  const showImages = () => {
    let scroll = scrollYProgress.get() * 100;
    if (screenWidth < 590) {
      return setImages((prevImages) => {
        return prevImages.map((image) => {
          if (scroll >= 0 && scroll < 0.58) {
            return { ...image, display: "none" };
          } else if (image.id === 1 && scroll >= 0.58) {
            return { ...image, display: "inline-block" };
          } else if (image.id === 2 && scroll <= 1.16) {
            return { ...image, display: "none" };
          } else if (image.id === 2 && scroll >= 1.16) {
            return { ...image, display: "inline-block" };
          } else if (image.id === 3 && scroll <= 1.74) {
            return { ...image, display: "none" };
          } else if (image.id === 3 && scroll >= 1.74) {
            return { ...image, display: "inline-block" };
          } else if (image.id === 4 && scroll <= 2.32) {
            return { ...image, display: "none" };
          } else if (image.id === 4 && scroll >= 2.32) {
            return { ...image, display: "inline-block" };
          } else if (image.id === 5 && scroll <= 2.9) {
            return { ...image, display: "none" };
          } else if (image.id === 5 && scroll >= 2.9) {
            return { ...image, display: "inline-block" };
          } else if (image.id === 6 && scroll <= 3.48) {
            return { ...image, display: "none" };
          } else if (image.id === 6 && scroll >= 3.48) {
            return { ...image, display: "inline-block" };
          } else {
            return image;
          }
        });
      });
    } else if (screenWidth >= 590 && screenWidth < 640) {
      // Tablet (md: 768px and above in Tailwind)
      return setImages((prevImages) => {
        return prevImages.map((image) => {
          if (scroll >= 0 && scroll < 0.93) {
            return { ...image, display: "none" };
          } else if (image.id === 1 && scroll >= 0.93) {
            return { ...image, display: "inline-block" };
          } else if (image.id === 2 && scroll <= 1.86) {
            return { ...image, display: "none" };
          } else if (image.id === 2 && scroll >= 1.86) {
            return { ...image, display: "inline-block" };
          } else if (image.id === 3 && scroll <= 2.79) {
            return { ...image, display: "none" };
          } else if (image.id === 3 && scroll >= 2.79) {
            return { ...image, display: "inline-block" };
          } else if (image.id === 4 && scroll <= 3.72) {
            return { ...image, display: "none" };
          } else if (image.id === 4 && scroll >= 3.72) {
            return { ...image, display: "inline-block" };
          } else if (image.id === 5 && scroll <= 4.65) {
            return { ...image, display: "none" };
          } else if (image.id === 5 && scroll >= 4.65) {
            return { ...image, display: "inline-block" };
          } else if (image.id === 6 && scroll <= 5.58) {
            return { ...image, display: "none" };
          } else if (image.id === 6 && scroll >= 5.58) {
            return { ...image, display: "inline-block" };
          } else {
            return image;
          }
        });
      });
    } else if (screenWidth >= 640 && screenWidth < 768) {
      // Tablet (md: 768px and above in Tailwind)
      return setImages((prevImages) => {
        return prevImages.map((image) => {
          if (scroll >= 0 && scroll < 1.47) {
            return { ...image, display: "none" };
          } else if (image.id === 1 && scroll >= 1.47) {
            return { ...image, display: "inline-block" };
          } else if (image.id === 2 && scroll <= 2.94) {
            return { ...image, display: "none" };
          } else if (image.id === 2 && scroll >= 2.94) {
            return { ...image, display: "inline-block" };
          } else if (image.id === 3 && scroll <= 3) {
            return { ...image, display: "none" };
          } else if (image.id === 3 && scroll >= 3) {
            return { ...image, display: "inline-block" };
          } else if (image.id === 4 && scroll <= 4.41) {
            return { ...image, display: "none" };
          } else if (image.id === 4 && scroll >= 4.41) {
            return { ...image, display: "inline-block" };
          } else if (image.id === 5 && scroll <= 5.88) {
            return { ...image, display: "none" };
          } else if (image.id === 5 && scroll >= 5.88) {
            return { ...image, display: "inline-block" };
          } else if (image.id === 6 && scroll <= 6.35) {
            return { ...image, display: "none" };
          } else if (image.id === 6 && scroll >= 6.35) {
            return { ...image, display: "inline-block" };
          } else {
            return image;
          }
        });
      });
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      // Tablet (md: 768px and above in Tailwind)
      return setImages((prevImages) => {
        return prevImages.map((image) => {
          if (scroll >= 0 && scroll < 1.49) {
            return { ...image, display: "none" };
          } else if (image.id === 1 && scroll >= 1.49) {
            return { ...image, display: "inline-block" };
          } else if (image.id === 2 && scroll <= 2.98) {
            return { ...image, display: "none" };
          } else if (image.id === 2 && scroll >= 2.98) {
            return { ...image, display: "inline-block" };
          } else if (image.id === 3 && scroll <= 4.47) {
            return { ...image, display: "none" };
          } else if (image.id === 3 && scroll >= 4.47) {
            return { ...image, display: "inline-block" };
          } else if (image.id === 4 && scroll <= 5.96) {
            return { ...image, display: "none" };
          } else if (image.id === 4 && scroll >= 5.96) {
            return { ...image, display: "inline-block" };
          } else if (image.id === 5 && scroll <= 7.45) {
            return { ...image, display: "none" };
          } else if (image.id === 5 && scroll >= 7.45) {
            return { ...image, display: "inline-block" };
          } else if (image.id === 6 && scroll <= 8.94) {
            return { ...image, display: "none" };
          } else if (image.id === 6 && scroll >= 8.94) {
            return { ...image, display: "inline-block" };
          } else {
            return image;
          }
        });
      });
    } else if (screenWidth >= 1024 && screenWidth < 1280) {
      // Desktop (lg: 1024px and above in Tailwind)
      return setImages((prevImages) => {
        return prevImages.map((image) => {
          if (scroll >= 0 && scroll < 1.5) {
            return { ...image, display: "none" };
          } else if (image.id === 1 && scroll >= 1.5) {
            return { ...image, display: "inline-block" };
          } else if (image.id === 2 && scroll <= 3) {
            return { ...image, display: "none" };
          } else if (image.id === 2 && scroll >= 3) {
            return { ...image, display: "inline-block" };
          } else if (image.id === 3 && scroll <= 4.5) {
            return { ...image, display: "none" };
          } else if (image.id === 3 && scroll >= 4.5) {
            return { ...image, display: "inline-block" };
          } else if (image.id === 4 && scroll <= 6) {
            return { ...image, display: "none" };
          } else if (image.id === 4 && scroll >= 6) {
            return { ...image, display: "inline-block" };
          } else if (image.id === 5 && scroll <= 7.5) {
            return { ...image, display: "none" };
          } else if (image.id === 5 && scroll >= 7.5) {
            return { ...image, display: "inline-block" };
          } else if (image.id === 6 && scroll <= 9) {
            return { ...image, display: "none" };
          } else if (image.id === 6 && scroll >= 9) {
            return { ...image, display: "inline-block" };
          } else {
            return image;
          }
        });
      });
    } else {
      // For any other large screen size screenWidth >= 1280
      return setImages((prevImages) => {
        return prevImages.map((image) => {
          if (scroll >= 0 && scroll < 1.48) {
            return { ...image, display: "none" };
          } else if (image.id === 1 && scroll >= 1.48) {
            return { ...image, display: "inline-block" };
          } else if (image.id === 2 && scroll <= 2.98) {
            return { ...image, display: "none" };
          } else if (image.id === 2 && scroll >= 2.98) {
            return { ...image, display: "inline-block" };
          } else if (image.id === 3 && scroll <= 4.8) {
            return { ...image, display: "none" };
          } else if (image.id === 3 && scroll >= 4.8) {
            return { ...image, display: "inline-block" };
          } else if (image.id === 4 && scroll <= 5.8) {
            return { ...image, display: "none" };
          } else if (image.id === 4 && scroll >= 5.8) {
            return { ...image, display: "inline-block" };
          } else if (image.id === 5 && scroll <= 7.3) {
            return { ...image, display: "none" };
          } else if (image.id === 5 && scroll >= 7.3) {
            return { ...image, display: "inline-block" };
          } else if (image.id === 6 && scroll <= 8.8) {
            return { ...image, display: "none" };
          } else if (image.id === 6 && scroll >= 8.8) {
            return { ...image, display: "inline-block" };
          } else {
            return image;
          }
        });
      });
    }
  };
  return (
    <>
      <section className="h-fit w-full xl:py-5 mt-2 sm-custom:mt-3 sm:mt-9 md:mt-10 flex flex-col items-center gap-1 sm-custom:gap-3 sm:gap-3.5 lg:gap-4 xl:gap-10 relative overflow-hidden">
        <p
          style={{
            lineHeight: "0.8",
          }}
          className="text-[150px] sm-custom:text-[210px] sm:text-[260px] md:text-[310px] lg:text-[410px] xl:text-[560px] font-[Raleway-Medium] text-white font-thin tracking-tight select-none overflow-hidden"
        >
          work
        </p>
        <p className="text-sm sm-custom:text-base sm:text-lg md:text-xl xl:text-2xl tracking-wider sm-custom:tracking-widest text-[#646464] font-[SmoochSans-Light]">
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
      <SliderSection screenWidth={screenWidth} />
      <section
        id="BrandMarquees"
        className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-20 sm:mb-[-5vh] md:mb-[-10vh] xl:mb-[-15vh] flex flex-col gap-1.5 sm:gap-2.5 md:gap-3 lg:gap-4 xl:gap-5"
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
      <Cards />
      <Footer />
    </>
  );
};

export default Work;
