import React from "react";
import img1 from "../assets/portfolio1.jpg";
import img2 from "../assets/portfolio2.jpg";
import img3 from "../assets/portfolio3.jpg";
import img4 from "../assets/portfolio4.jpg";
import img5 from "../assets/portfolio5.png";
import img6 from "../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: img1,
    title: "E-move",
    github: "https://github.com",
    demo: "https://github.com",
    discription: " Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    image: img2,
    title: "E-move",
    github: "https://github.com",
    demo: "https://github.com",
    discription: " Lorem ipsum dolor sit amet.",
  },
  {
    id: 3,
    image: img3,
    title: "E-move",
    github: "https://github.com",
    demo: "https://github.com",
    discription: " Lorem ipsum dolor sit amet.",
  },
  {
    id: 4,
    image: img4,
    title: "E-move",
    github: "https://github.com",
    demo: "https://github.com",
    discription: " Lorem ipsum dolor sit amet.",
  },
  {
    id: 5,
    image: img5,
    title: "E-move",
    github: "https://github.com",
    demo: "https://github.com",
    discription: " Lorem ipsum dolor sit amet.",
  },
  {
    id: 6,
    image: img6,
    title: "E-move",
    github: "https://github.com",
    demo: "https://github.com",
    discription: " Lorem ipsum dolor sit amet.",
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
