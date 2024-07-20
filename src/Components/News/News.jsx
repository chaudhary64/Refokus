import React, { useState } from "react";
import Para from "./Para";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import { IoIosSearch } from "react-icons/io";

const News = () => {
  const [active, setActive] = useState(false);
  const [activeFormat, setActiveFormat] = useState(true);
  const [data, setData] = useState([
    {
      id: 1,
      category: "Article",
      heading:
        "The Strategic Importance of a Cool Website for Venture Capital Firms",
      description:
        "Learn how a cool website can enhance a venture capital firm's ability to showcase its successes and attract innovative startups.",
    },
    {
      id: 2,
      category: "Article",
      heading:
        "Why Refokus is the Best Partner to Build Your Venture Capital Website",
      description:
        "Discover why Refokus is the preferred digital agency for venture capital firms, providing innovative web solutions that effectively showcase their strategic vision and investment prowess.",
    },
    {
      id: 3,
      category: "Article",
      heading:
        "The Future of Web Design: Webflow's Unmatched Advantage Over WordPress",
      description:
        "Unlock the future of web design with Webflow, offering unmatched advantages over WordPress. From intuitive design interfaces to superior site performance and SEO, learn why Webflow is the preferred platform for businesses aiming for digital excellence.",
    },
    {
      id: 4,
      category: "News",
      heading: "Spotlight on Innovation: Webflow's Case Study of Refokus",
      description:
        "Unlock the future of web design with Webflow, offering unmatched advantages over WordPress. From intuitive design interfaces to superior site performance and SEO, learn why Webflow is the preferred platform for businesses aiming for digital excellence.",
    },
    {
      id: 5,
      category: "Article",
      heading:
        "Elevating Web Development: How Refokus Harnesses Webflow and Emerging Technologies",
      description:
        "Webflow's case study on Refokus celebrates our innovative web development work, showcasing how we leverage the no-code platform to create exceptional digital experiences.",
    },
    {
      id: 6,
      category: "News",
      heading:
        "Elevating Your Brand: Why a Custom Webflow Website is a Game-Changer for Startups and Enterprises",
      description:
        "Explore how Refokus transcends traditional web development, using Webflow and the latest technologies to craft unique, high-performing websites optimized for the digital future",
    },
    {
      id: 7,
      category: "Article",
      heading: "Refokus: Your Webflow Agency",
      description:
        "Explore the transformative power of custom Webflow websites with Refokus and learn how a unique, high-end digital presence can position your startup or enterprise as a market leader. Dive into success stories and the distinct advantages of choosing a premium Webflow agency.",
    },
    {
      id: 8,
      category: "News",
      heading:
        "Maximizing SEO on Webflow: How Webflow Empowers Your Site's Search Performance",
      description:
        "Looking for a Webflow agency that prioritizes custom design, strategic partnership, and has a track record of award-winning projects? Discover the Refokus difference and why we're the fit for your brand.",
    },
    {
      id: 9,
      category: "Article",
      heading: "Hey Refokus, Why Do You Use Webflow?",
      description:
        "Uncover the truth about Webflow's SEO capabilities and learn how to leverage its integrated tools and features for improved search engine visibility. From technical optimizations to content strategies, find out how Webflow can boost your SEO efforts.",
    },
    {
      id: 10,
      category: "Article",
      heading:
        "Refokus at Webflow Conf 2023: A Fusion of Design and Technology",
      description:
        "Refokus leverages Webflow to blend emotional design with the latest technology, crafting web experiences that connect and convert. Explore our journey with Webflow and why it's our platform of choice for pushing digital boundaries.",
    },
    {
      id: 11,
      category: "News",
      heading: "Emotional Engagement: The Heart of Web Design at Refokus",
      description:
        "At Webflow Conf 2023, Refokus co-founders presented 'Driven by Design, Empowered by Technology,' showcasing how they're pioneering a new era of emotionally engaging websites.",
    },
    {
      id: 12,
      category: "Article",
      heading: "No-Code beyond the fanboys",
      description:
        "Refokus redefines web design by focusing on emotional engagement, crafting websites that go beyond functionality to create genuine connections and memorable brand experiences.",
    },
    {
      id: 13,
      category: "Article",
      heading: "Fighting the flood of generic content",
      description:
        "Unlock the future of web design with Webflow, offering unmatched advantages over WordPress. From intuitive design interfaces to superior site performance and SEO, learn why Webflow is the preferred platform for businesses aiming for digital excellence.",
    },
    {
      id: 14,
      category: "News",
      heading: "Perfect Meeting Memory",
      description:
        "No-code will forever be a misnomer. Its name implies a removal of technical limitations, but in reality, the promise has always been about what could be done if those barriers to entry were replaced with bridges.",
    },
    {
      id: 15,
      category: "Article",
      heading:
        "Refokus and the Future of AI in Web Design: A Spotlight on Webflow's Blog Feature",
      description:
        "Ever since ChatGPT hit the scene, LinkedIn feeds have been bombarded with generic content (and we thought it couldn't get worse). It's time to end this.",
    },
    {
      id: 16,
      category: "Resource",
      heading: "Design Iteration empowered by AI",
      description:
        "No-code will forever be a misnomer. Its name implies a removal of technical limitations, but in reality, the promise has always been about what could be done if those barriers to entry were replaced with bridges.",
    },
    {
      id: 17,
      category: "News",
      heading: "Beyond the AI buzzword",
      description:
        "Note-Taking is the backbone of every meeting, but it can be distracting from the actual point of the meeting. Luckily, now there is AI powered, perfect meeting memory.",
    },
    {
      id: 18,
      category: "Resource",
      heading: "A new age of discovery beyond SEO",
      description:
        "Dive into Webflow's blog feature with Refokus's Leo Zakour for an insightful exploration of AI in web design. Learn how artificial intelligence is transforming the creative process in web development.",
    },
    {
      id: 19,
      category: "Article",
      heading: "Onboarding your team to harness the power of AI",
      description:
        "In a world where everything looks the same, uniqueness is the only weapon marketers have to win over competition. But uniqueness comes from innovation, and the only way to break through into innovative communication is with deep exploration and iteration.",
    },
    {
      id: 20,
      category: "News",
      heading: "Perceived obsolescence, fast-forwarded",
      description:
        "AI has stormed into our lives, popping up in various products and services. But are all of these integrations adding real value? Or are they just trendy accessories?",
    },
    {
      id: 21,
      category: "Article",
      heading: "Time to Refokus AI: Pioneering a New Era of Digital Engagement",
      description:
        "The world of digital marketing is no longer just about humans. AI with its unmatched information processing capabilities is changing the way we research and make decisions.",
    },
    {
      id: 22,
      category: "News",
      heading: "No-Code, No-Compromises",
      description:
        "People are scared. To be fair, they've always been, for many reasons. The fear of AI is not just about taking over Terminator style, but of its broader economic impact. This time, the wave of automation is different.",
    },
    {
      id: 23,
      category: "Article",
      heading: "Time to Refokus",
      description:
        "As a human race, we are driven by a constant desire for progress, improvement, and innovation. The perception of obsolescence plays a key role in keeping us motivated to innovate and push boundaries.",
    },
    {
      id: 24,
      category: "News",
      heading: "Redefining value in an AI & No-Code world",
      description:
        "Refokus unveils 'Time to Refokus AI' — a cutting-edge chatbot experience leveraging GPT API to navigate emerging tech, design, and digital strategy insights.",
    },
    {
      id: 25,
      category: "News",
      heading:
        "Reflecting on a Year of Breakthroughs: Refokus's 2022 Year in Review",
      description:
        "The no-code movement is more than a simple toy for tech enthusiasts, it is a step in the digital evolution aiming to improve processes and the quality of products.",
    },
    {
      id: 26,
      category: "Resource",
      heading:
        "Our Refokus on the future, a new website made in Webflow for our agency",
      description:
        "It's time for a new breed of agency that combining design, innovation and forward-thinking can help brands create better experiences, not just more of the same.",
    },
    {
      id: 27,
      category: "News",
      heading: "Refokus Proudly Sponsors Webflow Conf 2022 in San Francisco",
      description:
        "AI is moving so fast, it's breaking necks. By now, no one should doubt the paradigm shifts it will cause across every industry. Along with it, we should ask ourselves, how do we define value in this new digital era?",
    },
    {
      id: 28,
      category: "Article",
      heading:
        "Introducing the New Hub for Refokus Tools: Elevating Your Webflow Experience",
      description:
        "Explore Refokus's 2022 Year in Review, highlighting a year filled with innovation, growth, and community, solidifying our position as a top Webflow Agency.",
    },
    {
      id: 29,
      category: "News",
      heading:
        "Refokus 2022 Offsite: Where Work Meets Play, Innovation, and Homemade Pasta",
      description:
        "The idea for Refokus started out of a desire to create the agency of our dreams. One that does things differently, we can proudly say: we did it. We got even more coming up, and our new website is just the begining.",
    },
    {
      id: 30,
      category: "Article",
      heading: "Refokus Tool: Automatic Tabs for Webflow",
      description:
        "Refokus sponsors Webflow Conf 2022, inviting you to join us in San Francisco for an inspiring exploration of no-code development and web design excellence. ",
    },
    {
      id: 31,
      category: "Article",
      heading: "Refokus Tool: Form Validator for Webflow",
      description:
        "Dive into the redesigned Refokus Tools website, your hub for free Webflow tools designed to enhance your design workflow and project effectiveness.",
    },
    {
      id: 32,
      category: "Article",
      heading: "Refokus Tool: Time to read for Webflow",
      description:
        "Refokus's 2022 offsite in Hamburg was a memorable mix of work, play, and culinary exploration, strengthening our team spirit and setting new goals for the future.",
    },
    {
      id: 33,
      category: "Resource",
      heading: "Refokus Tool: API Filler for Webflow",
      description:
        "Unlock the future of web design with Webflow, offering unmatched advantages over WordPress. From intuitive design interfaces to superior site performance and SEO, learn why Webflow is the preferred platform for businesses aiming for digital excellence.",
    },
    {
      id: 34,
      category: "News",
      heading:
        "Unleashing Creativity and Growth with Refokus & Webflow: A Masterclass Recap",
      description:
        "Transform your Webflow site's content organization with Refokus's Automatic Tabs. This tool makes creating dynamic, user-friendly tabs effortless, enhancing navigation and user experience.",
    },
    {
      id: 35,
      category: "Article",
      heading:
        "Refokus Earns 7 Nominations Including Webflow Agency of the Year at Webflow Awards 2022",
      description:
        "Maximize submission quality on your Webflow site with Refokus's Form Validator. This tool streamlines form accuracy, enhancing user experience and data reliability.",
    },
    {
      id: 36,
      category: "Article",
      heading:
        "Refokus & Webflow at OMR 2022: Leading Digital Innovation Together",
      description:
        "Increase user engagement on your Webflow site by displaying 'Time to Read' for articles with Refokus's tool. Quick setup, seamless integration, and improved reader experience.",
    },
    {
      id: 37,
      category: "Article",
      heading:
        "Celebrating Refokus's Stellar Inaugural Year: A Look Back at 2021",
      description:
        "Simplify content updates on your Webflow site with the API Filler tool by Refokus. Automate the process, ensuring your site remains dynamic and updated with the latest information.",
    },
    {
      id: 38,
      category: "News",
      heading: "Refokus Tool: CMS Load More for Webflow",
      description:
        "Our Co-Founder and CEO Leo is walking through 4 case studies to show the potential of showcase-websites for Brand Positioning, New Market Reach, Employer Branding & Event Promotion. Ali Ferrante, Account Executive at Webflow, explains how Webflow empowers Refokus to build award-winning websites.",
    },
    {
      id: 39,
      category: "Article",
      heading: "Refokus Tool: CMS Prev/Next for Webflow",
      description:
        "With seven nominations at the Webflow Awards 2022, Refokus is recognized for its excellence in web design and development, highlighting its status as a top Webflow Agency and Enterprise Partner.",
    },
    {
      id: 40,
      category: "Resource",
      heading: "Refokus's Baltic Sea Retreat: Charting the Course for 2022",
      description:
        "Experience the highlights from OMR 2022 with Refokus and Webflow: Masterclasses on growth, Instagram takeovers, and a showcase of digital marketing's future.",
    },
    {
      id: 41,
      category: "Article",
      heading: "Hey Refokus, how do you build your culture?",
      description:
        "Explore Refokus's incredible first year in the digital design and development industry with our 'Year in Review' website, showcasing our growth, projects, and recognitions.",
    },
    {
      id: 42,
      category: "Article",
      heading: "Refokus Tool: Social Share for Webflow",
      description:
        "Keep your audience engaged with the CMS Load More tool from Refokus, designed for Webflow sites. This tool facilitates dynamic content loading, enhancing usability and site speed.",
    },
    {
      id: 43,
      category: "Article",
      heading: "Refokus Wins Webflow Partners Award for Surprise and Delight",
      description:
        "Improve content navigation on your Webflow site with the CMS Prev-Next tool from Refokus. A simple solution to add intuitive prev-next buttons to your CMS collections.",
    },
    {
      id: 44,
      category: "News",
      heading: "Refokus Tool: Rich Text Enhancer",
      description:
        "Refokus sets a dynamic course for 2022 with strategic planning on collaboration, innovation, and culture at their Baltic Sea retreat.",
    },
    {
      id: 45,
      category: "Article",
      heading: "Refokus Tool: Copy to Clipboard for Webflow",
      description:
        "When we decided to start Refokus, the most important ingredient we wanted to take special care of was culture.",
    },
    {
      id: 46,
      category: "Resource",
      heading:
        "Refokus CEO, Leo, Shares Insights in Webflow Blog: The Engineering Advantage of No-Code",
      description:
        "Boost your Webflow site's engagement with easy-to-implement social share buttons from Refokus. As a top Webflow agency, we make social sharing seamless and stylish.",
    },
    {
      id: 47,
      category: "Article",
      heading:
        "Unveiling the Truth: Refokus Tackles No-Code Misconceptions on Webflow Blog",
      description:
        "Refokus triumphs at the Webflow Conference 2022, winning the Webflow Partners Award for Surprise and Delight with their standout design for the Weglot for Germany website.",
    },
    {
      id: 48,
      category: "News",
      heading: "Refokus Tool: Slider Generator",
      description:
        "Make your Webflow site's text come alive with Refokus's Rich Text Enhancer. This tool boosts readability and aesthetic appeal, enhancing user engagement through better text presentation.",
    },
    {
      id: 49,
      category: "Article",
      heading: "Refokus Tool: Masonry Layout for Webflow",
      description:
        "Enable effortless content copying on your Webflow site with the 'Copy to Clipboard' tool by Refokus. Improve user interaction with a simple click-to-copy functionality.",
    },
    {
      id: 50,
      category: "Resource",
      heading: "Refokus Tool: Page Transitions for Webflow",
      description:
        "Leo from Refokus discusses the engineering benefits of no-code platforms like Webflow, highlighting efficiency and innovation.",
    },
    {
      id: 51,
      category: "Article",
      heading: "Refokus Tool: CMS Tabs for Webflow",
      description:
        "Join Refokus in exploring the misconceptions of no-code development on the Webflow blog, offering a fresh perspective on the capabilities and future of no-code web design and development.",
    },
    {
      id: 52,
      category: "Article",
      heading:
        "Introducing Refokus Tools: Revolutionizing Webflow with No-Code Innovation",
      description:
        "Effortlessly create custom sliders in Webflow with the Slider Generator by Refokus. Discover a user-friendly way to enhance your Webflow sites, brought to you by a leading Webflow agency.",
    },
    {
      id: 53,
      category: "News",
      heading: "Refokus Tool: CMS Filters for Webflow",
      description:
        "Transform your Webflow site with dynamic, aesthetic Masonry Layouts from Refokus. Ideal for any content type, our tool brings visual harmony and engagement to your website.",
    },
    {
      id: 54,
      category: "Article",
      heading: "Refokus Tool: Image Magnifier for Webflow",
      description:
        "Bring your Webflow site to life with elegant page transitions. Refokus's tool makes it simple to add sophisticated animations, boosting user engagement and elevating your site's design.",
    },
    {
      id: 55,
      category: "Resource",
      heading:
        "Refokus Champions Webflow Community as Gold Sponsor of #CloneComp 2021",
      description:
        "Effortlessly organize CMS content into tabs on your Webflow site with Refokus's CMS Tabs tool. Enhance navigation and site design with our easy-to-implement solution.",
    },
    {
      id: 56,
      category: "Article",
      heading:
        "Streamlining Webflow Development with Refokus Styleguide for CSS Nomenclature",
      description:
        "Unlock the potential of your Webflow projects with Refokus Tools. Created by the experts at Refokus, these no-code tools offer a seamless, plug-and-play experience for web developers of all skill levels.",
    },
    {
      id: 57,
      category: "Article",
      heading:
        "Revolutionizing Marketing with Design Systems: Insights from Refokus on Webflow Blog",
      description:
        "Streamline your Webflow site with dynamic CMS Filters from Refokus. This tool simplifies sorting and filtering content, offering an intuitive experience for users and designers alike.",
    },
    {
      id: 58,
      category: "News",
      heading:
        "Leo from Refokus Joins Finsweet's Critique #4 Panel to Elevate Webflow Design Standards",
      description:
        "Bring your Webflow site's images into focus with Refokus's Image Magnifier. This tool adds an interactive zoom, perfect for portfolios, product galleries, and more.",
    },
    {
      id: 59,
      category: "Resource",
      heading:
        "Refokus Ascends to Webflow Enterprise Partner Status in Record Time",
      description:
        "Refokus proudly sponsors #CloneComp 2021, showcasing our commitment to supporting the Webflow community's growth and innovation. Explore the event and join the creativity.",
    },
    {
      id: 60,
      category: "Article",
      heading: "Broken Windows Theory And Tools For Product Teams",
      description:
        "Streamline your Webflow development with Refokus's expert CSS nomenclature styleguide, promoting efficiency and scalability.",
    },
  ]);
  return (
    <>
      <div className="h-fit w-[95%] mx-auto my-16 pr-10 flex justify-between items-center bg-black text-white">
        <p className="text-[110px] leading-none font-[Satoshi-Regular]">NEWS</p>
        <p className="text-xl tracking-widest">
          Web Design, Webflow Development, <br /> Agency Life and more news and
          insights <br /> from Refokus Team.
        </p>
      </div>
      <div className="h-fit w-[95%] mx-auto py-5 pr-10 border-t border-[#3e3e46] flex justify-between items-center relative">
        {/* LeftPart */}
        <span className="inline-block h-fit w-fit relative">
          <IoIosSearch
            className={`${
              active ? "text-[#A88BF7]" : "text-[#d7d7dc]"
            } absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none`}
          />
          <input
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            style={{
              transition: "border 0.5s linear",
              border: active ? "2px solid #A88BF7" : "2px solid transparent",
              outline: "none",
            }}
            className="rounded-full py-0.5 pl-10 pr-12 bg-[#3E3E46] text-lg tracking-wider text-[#d7d7dc]"
            type="text"
            placeholder="Search Something"
          />
        </span>
        {/* RightPart */}
        <span className="h-fit w-fit flex items-center gap-16 text-lg tracking-wider">
          <div className="h-fit w-fit flex justify-center items-center gap-3">
            <span className={`bg-white py-0.5 px-3.5 rounded-full`}>All</span>
            <span className={`bg-white py-0.5 px-3.5 rounded-full`}>
              Article
            </span>
            <span className={`bg-white py-0.5 px-3.5 rounded-full`}>News</span>
            <span className={`bg-white py-0.5 px-3.5 rounded-full`}>
              Resource
            </span>
          </div>
          <div className="text-white flex items-center gap-3">
            <p
              onClick={() => setActiveFormat(true)}
              className={`leading-none ${
                activeFormat
                  ? "border-b"
                  : "Unlock the future of web design with Webflow, offering unmatched advantages over WordPress. From intuitive design interfaces to superior site performance and SEO, learn why Webflow is the preferred platform for businesses aiming for digital excellence."
              } cursor-grab`}
            >
              List
            </p>
            <p
              onClick={() => setActiveFormat(false)}
              className={`leading-none ${
                activeFormat
                  ? "Unlock the future of web design with Webflow, offering unmatched advantages over WordPress. From intuitive design interfaces to superior site performance and SEO, learn why Webflow is the preferred platform for businesses aiming for digital excellence."
                  : "border-b"
              } cursor-grab`}
            >
              Grid
            </p>
          </div>
        </span>
        {/* Dot at upper Side */}
        <span className="h-1.5 w-1.5 rounded-full absolute bg-white top-[-10px] left-1 -translate-y-full"></span>
      </div>
      {/* Para */}
      <section className="h-fit w-[95%] mx-auto flex flex-col">
        {data.map((item) => (
          <Para key={item.id} {...item} />
        ))}
      </section>
      <Cards marginTop={"35vh"} />
      <Footer />
    </>
  );
};

export default News;
