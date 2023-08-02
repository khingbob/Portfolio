import css from "./Welcome.module.css";
import coolPic from "../assets/serious.png";
export default () => {
  return (
    <div id={css.welcome}>
      <div id={css.picContainer}>
        <img id={css.cringyPic} src={coolPic} alt="A cool photo of me" />
      </div>
      <div id={css.welcomeText}>
        <h1>
          Hello, I'm <span id={css.bobur}>Bobur</span> <br />{" "}
        </h1>
        <h2 id={css.welcomeSpan}>
          Welcome to my story of
          <br />
          Front-end Development.
        </h2>
      </div>
    </div>
  );
};
