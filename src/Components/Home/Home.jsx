import React from "react";

const Home = () => {
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
    </>
  );
};

export default Home;
