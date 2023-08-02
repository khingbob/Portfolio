import css from "./Start.module.css";
import beach from "../assets/beach.jpg";
import beachLook from "../assets/beachLook.jpg";
import { id, clas } from "../main";
import { useEffect, useState } from "react";
import Fullscreen from "./Fullscreen";

export default () => {
  const [fullscreen, setFullscreen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (
        id(css.beach).getBoundingClientRect().bottom <= 0 ||
        id(css.beach).getBoundingClientRect().top >= window.innerHeight
      ) {
        id(css.beachLook).style.opacity = 0;
      } else if (
        id(css.beach).getBoundingClientRect().top > 0 &&
        id(css.beach).getBoundingClientRect().bottom < window.innerHeight
      ) {
        setTimeout(() => {
          id(css.beachLook).style.opacity = 1;
        }, 1500);
      }
    });
  });
  return (
    <div id={css.start}>
      <div id={css.beachContainer}>
        <img id={css.beach} src={beach} className={css.beach} />
        <img id={css.beachLook} src={beachLook} className={css.beach} />
      </div>
      <div id={css.startContent}>
        <h1 id={css.startHeader}>The Start</h1>
        <div id={css.startText}>
          My interest in programming began when I was in school. I heard many
          people praise programmers, but I did not understand what made them so
          admirable. I watched a YouTube video that introduced the basics of
          programming and suggested web development as a good starting point.
          That sparked my curiosity and I began to explore various aspects of
          IT. In addition I learned Python and PascalABC and participated in
          national competitions, winning several{" "}
          <span
            id={css.awards}
            onClick={() => {
              setFullscreen(true);
            }}
          >
            awards
          </span>
          . However, I soon discovered that web development was my true passion.
          It offered me a perfect balance of creativity and logic.
        </div>
      </div>
      {fullscreen && <Fullscreen setFullscreen={setFullscreen} />}
    </div>
  );
};
