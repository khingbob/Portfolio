import css from "./Skills.module.css";
import sololearn from "../assets/platforms/sololearn.jpg";
import youtube from "../assets/platforms/youtube.svg";
import tum from "../assets/platforms/tum.svg";
import w3schools from "../assets/platforms/w3schools.svg";
import chatgpt from "../assets/platforms/chatgpt.svg";
import stackoverflow from "../assets/platforms/stackoverflow.png";

import cssPic from "../assets/skills/css.svg";
import html from "../assets/skills/html.svg";
import java from "../assets/skills/java.png";
import js from "../assets/skills/js.png";
import python from "../assets/skills/python.png";
import react from "../assets/skills/react.svg";
import redux from "../assets/skills/redux.png";
import { useEffect, useState } from "react";
import { clas, id } from "../main";
export default () => {
  const [down, setDown] = useState(true);
  const sizeSetup = () => {
    const n = clas(css.atmosphere).length;
    const radius =
      window.innerWidth > 900
        ? (window.innerHeight * 0.7) / 2
        : (window.innerWidth * 0.8) / 2;
    for (let i = 0; i < n; i++) {
      clas(css.atmosphere)[i].style.top =
        radius * (1 - Math.sin(((2 * Math.PI) / n) * i)) + "px";
      clas(css.atmosphere)[i].style.left =
        radius * (Math.cos(((2 * Math.PI) / n) * i) + 1) + "px";
    }
  };
  useEffect(() => {
    window.addEventListener("resize", sizeSetup);
    sizeSetup();
  });
  useEffect(() => {
    id(css.arrow).style.transform = down ? "" : "rotateX(180deg)";
    if (!down) {
      window.scrollTo({
        behavior: "smooth",
        top:
          (window.pageYOffset || document.documentElement.scrollTop) +
          id(css.text).getBoundingClientRect().top -
          0.075 * window.innerHeight,
      });
    }
  }, [down]);
  return (
    <div id={css.skills}>
      <h1 id={css.header}>Skills</h1>
      <div id={css.staticPlanetarium}>
        <div id={css.planetarium}>
          <div className={css.atmosphere}>
            <img
              className={css.planets}
              src={python}
              id={css.python}
              title="Python"
            />
          </div>
          <div className={css.atmosphere}>
            <img
              className={css.planets}
              src={java}
              id={css.java}
              title="Java"
            />
          </div>
          <div className={css.atmosphere}>
            <img
              className={css.planets}
              src={redux}
              id={css.redux}
              title="Redux"
            />
          </div>
          <div className={css.atmosphere}>
            <img
              className={css.planets}
              src={react}
              id={css.react}
              title="React.js"
            />
          </div>
          <div className={css.atmosphere}>
            <img
              className={css.planets}
              src={js}
              id={css.js}
              title="JavaScript"
            />
          </div>
          <div className={css.atmosphere}>
            <img
              className={css.planets}
              src={cssPic}
              id={css.css}
              title="CSS3"
            />
          </div>
          <div className={css.atmosphere}>
            <img
              className={css.planets}
              src={html}
              id={css.html}
              title="HTML5"
            />
          </div>
          <div id={css.core}>
            <div id={css.chatgptDiv}>
              <img src={chatgpt} id={css.chatgpt} title="ChatGPT" />
            </div>
            <img
              src={stackoverflow}
              id={css.stackoverflow}
              title="StackOverflow"
            />
            <img src={youtube} id={css.youtube} title="YouTube" />
            <img src={sololearn} id={css.sololearn} title="SoloLearn" />
            <img src={w3schools} id={css.w3schools} title="W3Schools" />
            <div id={css.cssTricks} title="CSS-Tricks"></div>
            <img src={tum} id={css.tum} title="TUM" />
          </div>
        </div>
      </div>
      <div id={css.content}>
        <div id={css.text}>
          I began my programming journey in 2018 without any clear guidance or
          mentorship. It was a challenging start, but I learned how to quickly
          acquire and process new and complex information. I experimented with
          various apps and websites until I found SoloLearn, which was designed
          for beginners. It offered simple and clear explanations with plenty of
          examples. I immersed myself in html, css, js, python and created many
          fun projects. However, as I gained a solid foundation, I outgrew the
          content of SoloLearn and looked for more advanced courses in web
          development. Youtube became my main source of theory and I used
          StackOverflow, W3Schools, Css-Tricks to debug and refine my code.
          Around that time, we also started having programming classes at
          school. I was far ahead of my peers and learned PascalABC, the
          language we used, much faster than them. The exercises we had were too
          easy for me. As a result, I was given a different and more advanced
          course than my class. My teacher recognized my potential and suggested
          that I participate in the all-Russian programming competition, where I
          won the first place in 2020. The next year, I led a team in another
          competition and we won it as well. In 2022, I enrolled in Informatics
          B.Sc. at the Technical University of Munich (TUM), where I studied
          theoretical informatics and Java. This helped me improve my
          object-oriented programming skills and deepen my understanding of
          JavaScript. However, I was more interested in web development
          technologies than the university curriculum, so I decided to balance
          my studies with an internship as a front-end developer at an IT
          company. This way, I could learn general informatics at the university
          and front-end development at work. In a short span of time, I
          completed dozens of courses on Youtube and mastered React.js, Redux
          and learned some Node.js. Fortunately, chatGPT became popular around
          this time and it accelerated my learning even more by answering all my
          specific questions.
        </div>
        <svg
          id={css.arrow}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          viewBox="0 0 24 24"
          onClick={() => {
            setDown(!down);
            id(css.content).className = down ? css.expanded : "";
          }}
        >
          <path d="m4 8 8 8 8-8" />
        </svg>
      </div>
    </div>
  );
};
