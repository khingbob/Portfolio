import About from "./about/About";
import Header from "./header/Header";
import Projects from "./projects/Projects";
import Start from "./start/Start";
import Skills from "./skills/Skills";
import Welcome from "./welcome/Welcome";
import Contacts from "./contacts/Contacts";
import { useEffect } from "react";
import { id } from "./main";
export default () => {
  document.documentElement.className = "forward";

  return (
    <div id="portfolio">
      <Header />
      <Welcome />
      <About />
      <Start />
      <Skills />
      <Projects />
      <Contacts />
      <div id="credits">
        <div id="passion">© Bobur Khayitov 2023 | Made with passion 😎 </div>
        <div id="lastUpdate">last update: 3 Aug, 2023</div>
      </div>
    </div>
  );
};
