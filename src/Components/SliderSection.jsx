import React from "react";
import Slides from "./Slides";
import VideoSlides from "./VideoSlides";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

const SliderSection = () => {
  const data = [
    {
      id: 1,
      heading: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      caseStudy: false,
      bgColor: "#5355EE",
    },
    {
      id: 2,
      heading: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      caseStudy: false,
      bgColor: "#4A576B",
    },
    {
      id: 3,
      heading: "Layout Land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      caseStudy: false,
      bgColor: "#1626F3",
    },
    {
      id: 4,
      heading: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      caseStudy: false,
      bgColor: "#3E4365",
    },
    {
      id: 5,
      heading: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      caseStudy: false,
      bgColor: "#2DCB76",
    },
    {
      id: 6,
      heading: "Singularity",
      description:
        "A new site for Singularity that supports their growth and showcases their true identity as industry innovators.",
      caseStudy: false,
      bgColor: "#4C20CF",
    },
    {
      id: 7,
      heading: "Like Magic",
      description:
        "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.",
      caseStudy: true,
      bgColor: "#4C20CF",
    },
    {
      id: 8,
      heading: "Silvr",
      description:
        "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
      caseStudy: false,
      bgColor: "#FF7548",
    },
    {
      id: 9,
      heading: "Rainfall",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      caseStudy: true,
      bgColor: "#4C20CF",
    },
    {
      id: 10,
      heading: "Intenseye",
      description:
        "A brand new website for Intenseye just before their $64M Series.",
      caseStudy: false,
      bgColor: "#FF501A",
    },
    {
      id: 11,
      heading: "Remind",
      description:
        "Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.",
      caseStudy: true,
      bgColor: "#3C74E4",
    },
    {
      id: 12,
      heading: "Summon",
      description:
        "We created a website for Summon that showcases their innovative technology through animated and captivating UI components and emerging technologies.",
      caseStudy: true,
      bgColor: "#3C74E4",
    },
    {
      id: 13,
      heading: "Jungle",
      description:
        "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow",
      caseStudy: true,
      bgColor: "#FF501A",
    },
    {
      id: 14,
      heading: "Candid Health",
      description:
        "A complete redesign of a health-startup website, followed by cutting edge development.",
      caseStudy: false,
      bgColor: "#4C20CF",
    },
    {
      id: 15,
      heading: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      caseStudy: true,
      bgColor: "#24014F",
    },
    {
      id: 16,
      heading: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      caseStudy: false,
      bgColor: "#5D4EFF",
    },
    {
      id: 17,
      heading: "YIR 2021",
      description:
        "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.",
      caseStudy: false,
      bgColor: "#382865",
    },
    {
      id: 18,
      heading: "Showcase",
      description:
        "We created a showcase website to highlight our first year of projects, events, and awards.",
      caseStudy: false,
      bgColor: "#FE9F2E",
    },
    {
      id: 19,
      heading: "Weglot",
      description:
        "We made a fun and engaging showcase website for our friends from Weglot to promote their no-code translation solution in Germany.",
      caseStudy: false,
      bgColor: "#24412F",
    },
    {
      id: 20,
      heading: "RocketChat",
      description:
        "We built a beautiful, clean website in Webflow for RocketChat that is scalable, easy to maintain and built in a modular manner for future changes.",
      caseStudy: false,
      bgColor: "#FF4747",
    },
  ];
  const videoData = [
    {
      id: 1,
      src: "/src/assets/videos/Arqitel.webm",
    },
    {
      id: 2,
      src: "/src/assets/videos/Cula.mp4",
    },
    {
      id: 3,
      src: "/src/assets/videos/LayoutLand.mp4",
    },
    {
      id: 4,
      src: "/src/assets/videos/TTR.webm",
    },
    {
      id: 5,
      src: "/src/assets/videos/Maniv.mp4",
    },
    {
      id: 6,
      src: "/src/assets/videos/Singularity.webm",
    },
    {
      id: 7,
      src: "/src/assets/videos/LikeMagic.webm",
    },
    {
      id: 8,
      src: "/src/assets/videos/Silvr.webm",
    },
    {
      id: 9,
      src: "/src/assets/videos/Rainfall.webm",
    },
    {
      id: 10,
      src: "/src/assets/videos/Intenseye.webm",
    },
    {
      id: 11,
      src: "/src/assets/videos/Remind.webm",
    },
    {
      id: 12,
      src: "/src/assets/videos/Summon.webm",
    },
    {
      id: 13,
      src: "/src/assets/videos/Jungle.webm",
    },
    {
      id: 14,
      src: "/src/assets/videos/CandidHealth.webm",
    },
    {
      id: 15,
      src: "/src/assets/videos/Yahoo.webm",
    },
    {
      id: 16,
      src: "/src/assets/videos/YIR2022.webm",
    },
    {
      id: 17,
      src: "/src/assets/videos/YIR2021.webm",
    },
    {
      id: 18,
      src: "/src/assets/videos/Showcase.mp4",
    },
    {
      id: 19,
      src: "/src/assets/videos/Weglot.webm",
    },
    {
      id: 20,
      src: "/src/assets/videos/RocketChat.webm",
    },
  ];
  const Wrappercontrols = useAnimation();
  const videoSlidesControls = useAnimation();

  // This function is used to move the video wrapper to the corresponding slide and it was called in the Slides component so we need to pass it as a prop to the Slides component
  const MoveVideoWrapper = async (id) => {
    await Wrappercontrols.start({
      top: `${id * 37}vh`,
      transform: "translateY(-85%)",
    });
    videoSlidesControls.start(
      { y: `-${(id - 1) * 100}%` },
      { duration: 0.25, ease: "easeInOut" }
    );
  };

  return (
    <section id="sliderSection" className="w-full mt-[14vh] px-20 relative">
      {data.map((slide) => {
        return (
          <Slides
            key={slide.id}
            id={slide.id}
            heading={slide.heading}
            description={slide.description}
            caseStudy={slide.caseStudy}
            bgColor={slide.bgColor}
            MoveVideoWrapper={MoveVideoWrapper}
          />
        );
      })}
      <span
        id="videoSlidesWrapper"
        className="inline-block absolute inset-0 bg-red-100/55 pointer-events-none"
      >
        <motion.div
          animate={Wrappercontrols}
          id="videoSlidesWrapperContainer"
          style={{ top: "37vh", transform: "translateY(-85%)" }}
          className="h-[50vh] w-fit absolute left-[30%] flex flex-col pointer-events-none rounded-3xl overflow-hidden"
        >
          {videoData.map((item) => {
            return (
              <VideoSlides
                key={item.id}
                id={item.id}
                src={item.src}
                videoSlidesControls={videoSlidesControls}
              />
            );
          })}
        </motion.div>
      </span>
    </section>
  );
};

export default SliderSection;
