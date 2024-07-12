import React from "react";
import BlurCards from "../Cards/BlurCards";

const About = () => {
  const blurCardsData = [
    {
      id: 1,
      heading: "Our People",
      number: "25+",
      text: "We are a world-class team of experts working remotely across different time zones, mostly in Germany, the UK, Argentina, and the US East Coast—the world's leading hubs for creative talent.",
    },
    {
      id: 2,
      heading: "Our Awards",
      number: "77",
      text: "We are results-driven and people-focused (but awards are nice too!). We've won website of the day from multiple awards organizations and have been nominated twice for Webflow Agency of the year.",
    },
    {
      id: 3,
      heading: "Our History",
      number: "2021",
      text: "We are proud of our short history, positioning ourselves as market leaders and demonstrating that great work fuels growth.",
    },
  ];
  return (
    <section className="h-fit w-full overflow-hidden">
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
      <section
        id="BlurCards"
        className="h-screen w-full border-4 border-purple-500"
      ></section>
    </section>
  );
};

export default About;
