import React from "react";
import img1 from "../assets/portfolio.png";
import img2 from "../assets/portfolio2.png";
import img3 from "../assets/RCP.jpeg";
const data = [
  {
    id: 1,
    image: img1,
    title: "E-move",
    github: "https://github.com/tobiadedoyin/E-MOVE-WEBAPP",
    demo: "https://e-move.onrender.com/",
    discription:
      "E-move is a payment solution that caters to commercial bus users and drivers.",
  },
  {
    id: 2,
    image: img2,
    title: "TODO_APP",
    github: "https://github.com/tobiadedoyin/TODO_APP",
    demo: "https://scintillating-marigold-b40762.netlify.app/",
    discription:
      "The To-do app is a type of productivity app that helps users organize and manage their tasks.",
  },
  {
    id: 3,
    image: img3,
    title: "RoScPA",
    github: "https://github.com/tobiadedoyin/RSP_game",
    demo: "https://tobiadedoyin.github.io/RSP_game/",
    discription:
      "Rock, Scissors, paper is a common game among children, the rules of the game is clearly stated in th instruction tab.",
  },
];

export default function Potfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, discription }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <a href={github} className="btn">
                github
              </a>
              <a href={demo} className="btn">
                live_demo
              </a>
              <p>{discription}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
