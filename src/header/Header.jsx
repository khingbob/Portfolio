import css from "./Header.module.css";
import { id, clas } from "../main";
import { useEffect } from "react";
import aboutcss from "../about/About.module.css";
import startcss from "../start/Start.module.css";
import skillscss from "../skills/Skills.module.css";
import projectscss from "../projects/Projects.module.css";
import contactscss from "../contacts/Contacts.module.css";
export default () => {
  let expanded = false;

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
        closing();
      }
    });
    for (let i = 0; i < clas(css.hiddenMenu).length; i++) {
      clas(css.hiddenMenu)[i].addEventListener("mouseover", () => {
        id(css.logo).style.boxShadow = "0 0 8px var(--gold)";
      });
      clas(css.hiddenMenu)[i].addEventListener("mouseout", () => {
        id(css.logo).style.boxShadow = "";
      });
    }
  });
  const opening = () => {
    console.log("opening, expanded", expanded);
    document.documentElement.className = "forward";
    id(css.logo).className = css.expansion;
    expanded = true;
    for (let i = 0; i < clas(css.hiddenMenu).length; i++) {
      clas(css.hiddenMenu)[i].style.display = "block";
      setTimeout(() => {
        clas(css.hiddenMenu)[i].style.opacity = 1;
      }, 150);
    }
  };
  const closing = () => {
    document.documentElement.className = "reverse";
    expanded = false;
    for (let i = 0; i < clas(css.hiddenMenu).length; i++) {
      clas(css.hiddenMenu)[i].style.opacity = 0;
      setTimeout(() => {
        id(css.logo).className = "";
        clas(css.hiddenMenu)[i].style.display = "none";
      }, 300);
    }
  };
  const scroll = (target) => {
    setTimeout(() => {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 200);
    closing();
  };
  return (
    <>
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
              id(skillscss.header).scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Skills
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
              id(contactscss.contacts).scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Contact Me
          </div>
          <div className={css.floater}></div>
        </div>
        <div id={css.logoContainer}>
          <div
            id={css.logo}
            onClick={() => {
              if (!expanded) {
                opening();
              }
            }}
          >
            <span
              id={css.b}
              onClick={(event) => {
                if (expanded) {
                  event.stopPropagation();
                  setTimeout(() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }, 200);
                  closing();
                }
              }}
            >
              B
            </span>
          </div>
        </div>
      </div>
      <svg
        id={css.hiddenAbout}
        className={css.hiddenMenu}
        onClick={() => {
          scroll(id(aboutcss.about));
        }}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        viewBox="0 0 24 24"
      >
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
        <path d="M12 11v5" />
        <path d="M11.95 7.9h.1V8h-.1v-.1Z" />
      </svg>
      <svg
        id={css.hiddenStart}
        className={css.hiddenMenu}
        onClick={() => {
          scroll(id(startcss.start));
        }}
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        viewBox="0 0 24 24"
      >
        <path d="M5.25 5.203v13.594c0 .817.797 1.337 1.453.945l11.62-6.955c.569-.34.569-1.234 0-1.574L6.703 4.258c-.656-.392-1.453.128-1.453.945Z" />
      </svg>
      <svg
        id={css.hiddenSkills}
        className={css.hiddenMenu}
        onClick={() => {
          scroll(id(skillscss.header));
        }}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        viewBox="0 0 24 24"
      >
        <path d="m12 4.5-10 5 10 5 10-5-10-5Z" />
        <path d="M19 11v5l-7 3.5L5 16v-5" />
        <path d="M22 14v4" />
      </svg>
      <svg
        id={css.hiddenProjects}
        className={css.hiddenMenu}
        onClick={() => {
          scroll(id(projectscss.projects));
        }}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        viewBox="0 0 24 24"
      >
        <path d="M4 21h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-9L9.297 3.445A1 1 0 0 0 8.465 3H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z" />
      </svg>
      <svg
        id={css.hiddenContacts}
        className={css.hiddenMenu}
        onClick={() => {
          scroll(id(contactscss.contacts));
        }}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        viewBox="0 0 24 24"
      >
        <path d="M19 22H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2z" />
        <path d="M16 2v2" />
        <path d="M8 2v2" />
        <path d="M12 8a3 3 0 1 0 0 6 3 3 0 1 0 0-6z" />
        <path d="M17 18.5c-1.4-1-3.1-1.5-5-1.5s-3.6.6-5 1.5" />
      </svg>
    </>
  );
};
