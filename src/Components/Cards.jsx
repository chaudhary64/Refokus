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
      width: "32%",
    },
    {
      id: 2,
      heading: "Get In Touch",
      text: "Let's get to it, \ntogether.",
      header: "Start a Project",
      button: true,
      width: "68%",
    },
  ];
  return (
    <div
      style={{ marginTop: marginTop }}
      className={`h-[55vh] w-full px-20 flex gap-1`}
    >
      {cardData.map((card) => {
        return (
          <Card
            key={card.id}
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
    </div>
  );
};

export default Cards;
