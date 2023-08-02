import css from "./About.module.css";
import smiling from "../assets/smiling.jpg";
const birthdate = new Date("2003-04-28");
const now = new Date();

let age = now.getFullYear() - birthdate.getFullYear();

if (
  now.getMonth() < birthdate.getMonth() ||
  (now.getMonth() === birthdate.getMonth() &&
    now.getDate() < birthdate.getDate())
) {
  age--;
}

export default () => {
  return (
    <div id={css.about}>
      <div id={css.aboutContent}>
        <h1 id={css.aboutMe}>About Me</h1>
        <div id={css.aboutText}>
          My name is Bobur Khayitov and I am a {age}-year-old student from
          Uzbekistan. I am currently pursuing a degree in informatics at the
          Technical University of Munich (TUM). I have a passion for programming
          and web development, which I discovered when I was 15 years old. My
          goal is to become a full-stack developer, and at the moment I am
          working hard to master my front-end skills, right after to start
          mastering back-end. I enjoy learning new technologies and creating
          innovative solutions for the web.
        </div>
      </div>
      <img id={css.smiling} src={smiling} />
    </div>
  );
};
