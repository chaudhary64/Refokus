import React from "react";
import Card from "./Card";

const Cards = ({ marginTop }) => {
  const cardData = [
    {
      id: 1,
      heading: "Up Next: News",
      text: "Insights \nand behind the scenes",
      footer: "Explore what drives our team.",
      button: false,
      width: "33%",
    },
    {
      id: 2,
      heading: "Get In Touch",
      text: "Let's get to it, \ntogether.",
      header: "Start a Project",
      button: true,
      width: "67%",
    },
  ];
  return (
    <section
      id="CardHolder"
      style={{ marginTop: marginTop }}
      className={`h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] w-[95%] mx-auto flex gap-1.5`}
    >
      {cardData.map((card) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            heading={card.heading}
            text={card.text}
            footer={card.footer}
            header={card.header}
            button={card.button}
            width={card.width}
          />
        );
      })}
      ;
    </section>
  );
};

export default Cards;
