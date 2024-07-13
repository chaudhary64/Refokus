import React from "react";
import BlurCards from "../Cards/BlurCards";

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
      <section
        id="ExpandVideo"
        className="h-[300vh] w-full mt-80 border-4 border-purple-500 relative"
      >
        <div
          id="Holder"
          // The value from top is same as the height of the Navbar
          className="h-[75vh] w-full sticky top-[10vh] bg-red-500"
        ></div>
      </section>
      <section className="h-screen w-full"></section>
    </section>
  );
};

export default About;
