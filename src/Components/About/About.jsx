import React from "react";
import BlurCards from "../Cards/BlurCards";

const About = () => {
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
