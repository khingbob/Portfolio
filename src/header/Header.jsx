import css from "./Header.module.css";
import { id, clas } from "../main";
import { useEffect } from "react";
import aboutcss from "../about/About.module.css";
import startcss from "../start/Start.module.css";
import projectscss from "../projects/Projects.module.css";
import contactscss from "../contacts/Contacts.module.css";
export default () => {
  const float = (e, i) => {
    clas(css.floater)[i].style.left =
      e.target.getBoundingClientRect().left + "px";
    clas(css.floater)[i].style.width =
      e.target.getBoundingClientRect().width + "px";
  };

  useEffect(() => {
    for (let i = 0; i < clas(css.menu).length; i++) {
      clas(css.menu)[i].onmouseenter = (e) => {
        float(e, i);
      };
      clas(css.menu)[i].onmouseleave = () => {
        clas(css.floater)[i].style.width = 0;
      };
    }
    document.addEventListener("click", (e) => {
      if (!id(css.logo).contains(e.target)) {
        id(css.logo).className = "";
      }
    });
  });
  return (
    <div id={css.header}>
      <div>
        <div
          className={css.menu}
          onClick={() => {
            id(aboutcss.about).scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          About
        </div>
        <div className={css.floater}></div>
      </div>
      <div>
        <div
          className={css.menu}
          onClick={() => {
            id(startcss.start).scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          The Start
        </div>
        <div className={css.floater}></div>
      </div>
      <div>
        <div
          className={css.menu}
          onClick={() => {
            id(projectscss.projects).scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          Projects
        </div>
        <div className={css.floater}></div>
      </div>
      <div>
        <div
          className={css.menu}
          onClick={() => {
            id(contacts.contacts).scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          Contacts
        </div>
        <div className={css.floater}></div>
      </div>
      <div id={css.logoContainer}>
        <div
          id={css.logo}
          onClick={() => {
            if (window.innerWidth > 900)
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            else {
              id(css.logo).className = css.expansion;
            }
          }}
        >
          <span id={css.b}>B</span>
          {window.innerWidth <= 900 ? (
            <div id={css.hiddenMenu}>
              <div
                id={css.hiddenAbout}
                className={css.hiddenMenu}
                onClick={() => {
                  id(aboutcss.about).scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                About
              </div>
              <div
                id={css.hiddenStart}
                className={css.hiddenMenu}
                onClick={() => {
                  id(startcss.start).scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                The Start
              </div>
              <div
                id={css.hiddenProjects}
                className={css.hiddenMenu}
                onClick={() => {
                  id(projectscss.projects).scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                Projects
              </div>
              <div
                id={css.hiddenContacts}
                className={css.hiddenMenu}
                onClick={() => {
                  id(contacts.contacts).scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                Contacts
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
