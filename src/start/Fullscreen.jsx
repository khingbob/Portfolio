import { useEffect, useState } from "react";
import css from "./Fullscreen.module.css";
import startcss from "./Start.module.css";
import prices0 from "../assets/prices0.jpg";
import prices1 from "../assets/prices1.pdf";
import prices2 from "../assets/prices2.pdf";
import { id, clas } from "../main";
export default (props) => {
  const prices = [css.prices0, css.prices1, css.prices2];
  const [counter, setCounter] = useState(0);

  const carouselRight = () => {
    id(prices[counter]).style.left =
      -id(prices[counter]).getBoundingClientRect().width + "px";
    id(prices[counter]).classList.remove(css.flyIn);
    id(prices[counter]).classList.add(css.flyOut);
    id(prices[counter + 1]).classList.remove(css.flyOut);
    id(prices[counter + 1]).classList.add(css.flyIn);
    setCounter(counter + 1);
  };
  const carouselLeft = () => {
    id(prices[counter]).style.left = "100vw";
    id(prices[counter]).classList.remove(css.flyIn);
    id(prices[counter]).classList.add(css.flyOut);
    id(prices[counter - 1]).classList.remove(css.flyOut);
    id(prices[counter - 1]).classList.add(css.flyIn);
    setCounter(counter - 1);
  };
  const scrollHandle = (iframe) => {};
  useEffect(() => {
    for (let i = 0; i < document.getElementsByTagName("iframe").length; i++) {
      let iframe = document.getElementsByTagName("iframe")[i];
      iframe.addEventListener("wheel", (e) => {
        scrollHandle(iframe);
      });
      iframe.addEventListener("scroll", (e) => {
        scrollHandle(iframe);
      });
      iframe.addEventListener("touchmove", (e) => {
        scrollHandle(iframe);
      });
    }
    for (let i = 0; i < clas(css.unscrollable).length; i++) {
      clas(css.unscrollable)[i].onwheel = (event) => {
        console.log("unscrollable blocking scroll");
        event.preventDefault();
      };
      clas(css.unscrollable)[i].ontouchmove = (event) => {
        console.log("unscrollable blocking touchmove");
        event.preventDefault();
      };
    }
    setTimeout(() => {
      id(css.fullscreen).style.opacity = "1";
    }, 1);
  });
  return (
    <div id={css.fullscreen} className={css.unscrollable}>
      <svg
        id={css.left}
        className={counter == 0 ? css.arrow + " invisible" : css.arrow}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        onClick={carouselLeft}
      >
        <path d="M15 22.5 6 12l9-10.5" />
      </svg>
      <div
        id={css.x}
        onClick={() => {
          id(css.fullscreen).style.opacity = 0;
          setTimeout(() => {
            props.setFullscreen(false);
          }, 201);
        }}
      >
        X
      </div>
      <div id={css.invisible} />
      <img
        src={prices0}
        id={css.prices0}
        className={css.prices + " " + css.flyIn}
      />
      <iframe
        src={prices1}
        id={css.prices1}
        title="Solo-win"
        className={css.unscrollable + " " + css.prices + " " + css.flyOut}
      />
      <iframe
        src={prices2}
        id={css.prices2}
        title="Team-win"
        className={css.unscrollable + " " + css.prices + " " + css.flyOut}
      />
      <svg
        id={css.right}
        className={
          counter == prices.length - 1 ? css.arrow + " invisible" : css.arrow
        }
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        onClick={carouselRight}
      >
        <path d="M9 22.5 18 12 9 1.5" />
      </svg>
    </div>
  );
};
