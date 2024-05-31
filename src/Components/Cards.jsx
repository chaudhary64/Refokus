import React from "react";

const Cards = () => {
  const cardData = [
    {
      id: 1,
      heading: "Up Next: News",
      text: "Insights and behind the scenes",
      footer: "Explore what drives our team.",
      button: false,
    },
    {
      id: 2,
      heading: "Get In Touch",
      text: "Let's get to it, together.",
      header: "Start a Project",
      button: true,
    },
  ];
  return <div className="h-[50vh] w-full px-20"></div>;
};

export default Cards;
