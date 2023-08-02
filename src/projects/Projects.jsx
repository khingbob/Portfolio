import css from "./Projects.module.css";
import "./Projects.module.css";
import bhWall from "../assets/projects/bhWall.jpg";
import bh from "../assets/projects/bh.jpg";
import tesla from "../assets/projects/tesla.jpg";
import teslaWall from "../assets/projects/teslaWall.jpg";
import contacts from "../assets/projects/contacts.jpg";
import contactsWall from "../assets/projects/contactsWall.png";
import gold from "../assets/projects/gold.jpg";
import goldWall from "../assets/projects/goldWall.jpg";
import { useState } from "react";
import { useEffect } from "react";
export default () => {
  const url = (url) => (
    <a href={url} target="_blank">
      <div className={css.sourceDiv}>
        <svg
          className={css.source}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          viewBox="0 0 24 24"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <path d="M15 3h6v6" />
          <path d="M10 14 21 3" />
        </svg>
      </div>
    </a>
  );

  const github = (url) => (
    <a href={url} target="_blank">
      <div className={css.sourceDiv}>
        <svg className={css.source} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm3.163 21.783h-.093a.513.513 0 0 1-.382-.14.513.513 0 0 1-.14-.372v-1.406c.006-.467.01-.94.01-1.416a3.692 3.692 0 0 0-.151-1.028 1.831 1.831 0 0 0-.542-.875 8.012 8.012 0 0 0 2.038-.471 4.051 4.051 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506.213-.69.314-1.409.3-2.13a4.138 4.138 0 0 0-.26-1.476 3.891 3.891 0 0 0-.795-1.284 2.75 2.75 0 0 0 .162-.582c.033-.2.05-.402.05-.604 0-.26-.03-.52-.09-.773a5.31 5.31 0 0 0-.221-.763.293.293 0 0 0-.111-.02h-.11c-.23.002-.456.04-.674.111a5.34 5.34 0 0 0-.703.26 6.502 6.502 0 0 0-.661.343c-.215.127-.405.249-.573.362a9.578 9.578 0 0 0-5.143 0 13.503 13.503 0 0 0-.572-.362 6.022 6.022 0 0 0-.672-.342 4.517 4.517 0 0 0-.705-.261 2.203 2.203 0 0 0-.662-.111h-.11a.29.29 0 0 0-.11.02 5.98 5.98 0 0 0-.23.763c-.054.254-.08.513-.081.773 0 .202.017.404.051.604.033.199.086.394.16.582A3.888 3.888 0 0 0 5.702 10a4.142 4.142 0 0 0-.263 1.476 6.87 6.87 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516.415.422.915.75 1.466.964.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.452.633 2.99 2.99 0 0 0-.2.744 2.753 2.753 0 0 1-1.175.27 1.79 1.79 0 0 1-1.065-.3 2.904 2.904 0 0 1-.752-.824 3.101 3.101 0 0 0-.292-.382 2.69 2.69 0 0 0-.372-.343 1.81 1.81 0 0 0-.432-.24 1.2 1.2 0 0 0-.481-.101c-.04.001-.08.005-.12.01a.646.646 0 0 0-.162.02.409.409 0 0 0-.13.06.116.116 0 0 0-.06.1.33.33 0 0 0 .14.242c.093.074.17.131.232.171l.03.021c.133.103.261.214.382.333.112.098.213.209.3.33.09.119.168.246.231.381.073.134.15.288.231.463.188.474.522.875.954 1.145.453.243.961.364 1.476.351.174 0 .349-.01.522-.03.172-.028.343-.057.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0v.005-.001Z" />
        </svg>
      </div>
    </a>
  );
  return (
    <div id={css.projects}>
      <div
        id={css.bhDiv}
        className={css.projectDiv}
        style={{ backgroundImage: `url(${bhWall})` }}
      >
        <h1 id={css.header}>Projects</h1>
        <div id={css.bhContent} className={css.content}>
          <img id={css.bhPic} className={css.websitePic} src={bh} />
          <div id={css.bhText} className={css.text}>
            <h3>
              BOBUR <span id={css.hub}>HUB</span>
            </h3>
            <div>
              BOBUR HUB is a web application that I developed using React.js,
              Redux and Firebase. It showcases my skills and knowledge in
              Front-End development, such as designing a user-friendly and clear
              user interface, ensuring high responsiveness, integrating API's to
              communicate with the back-end, implementing user authentication
              and more. The development process was both creative and
              challenging. I received a lot of feedback from beta testers and
              realized that there were many aspects that I overlooked. I learned
              the crucial importance of testing before the final release. After
              the release, the number of users increased rapidly and my firebase
              service reached its limits, causing the server to crash. I learned
              another valuable lesson about optimizing the server calls, so that
              each user makes as few calls as possible. Despite the
              difficulties, the project was a success. I gained a lot of
              experience and enjoyed developing it, while my friends enjoyed
              testing it. Some interesting features that I added are:
              <br />
              - Premium users have a crown icon over their profile picture
              <br />
              - There is a toggle button in the header menu to switch to light
              mode
              <br />- The main color scheme of the app is black and yellow, but
              in light mode yellow does not look good on a white background, so
              I changed the yellow into black which looks much nicer with white.
              That's the reason why the crowns change in light mode too.
              <br />
              <br /> I have not completed some features such as Messaging,
              Following and Searching for users because I had to work on my
              portfolio and prepare for university exams. I plan to add them in
              the future.
            </div>
          </div>
        </div>
        <div className={css.sources}>
          {url("https://boburhub.netlify.app")}
          {github("https://github.com/khingbob/BOBURHUB")}
        </div>
      </div>

      <div
        id={css.teslaDiv}
        className={css.projectDiv}
        style={{ backgroundImage: `url(${teslaWall})` }}
      >
        <div id={css.teslaContent} className={css.content}>
          <img id={css.teslaPic} className={css.websitePic} src={tesla} />
          <div id={css.teslaText} className={css.text}>
            <h3>TESLA CLONE</h3>
            <div>
              I created a clone of Tesla's official website but with the
              products productions of which they did not start yet to experiment
              with the scroll-snapping feature. I found it to be quite simple
              but I don't think I will apply it frequently in my future projects
              because of its constraints: all the content must fit within the
              viewport height because scrolling is disabled and it affects the
              scrolling experience negatively.
              <br />
              Some of the challenges I faced while developing this project were:
              <br />
              - Aligning the products in the center of the page for different
              screen sizes. I had to create two versions of each image: one with
              vertical and one with horizontal orientation for responsiveness.
              For the images that did not have a vertical version available
              online, I used Dall-E to generate a vertical extension of the
              horizontal image.
              <br />- Dealing with some Android mobile browsers that are
              ignoring the overflow-X property on the document. This issue is
              still unresolved and needs further investigation.
            </div>
          </div>
        </div>
        <div className={css.sources}>
          {url("https://tesla-bobur-edition.netlify.app/#Roadster")}
          {github("https://github.com/khingbob/TESLA-CLONE")}
        </div>
      </div>
      <div
        id={css.contactsDiv}
        className={css.projectDiv}
        style={{ backgroundImage: `url(${contactsWall})` }}
      >
        <div id={css.contactsContent} className={css.content}>
          <img id={css.contactsPic} className={css.websitePic} src={contacts} />
          <div id={css.contactsText} className={css.text}>
            <h3>CONTACTS</h3>
            <div>
              This web-app is a demonstration of React.js capabilities and
              Apple-inspired design features. It allows users to manage their
              contacts with ease and elegance. Some of the design elements that
              were implemented include acrylic backgrounds, smooth animations,
              Apple's color combinations and more. This project was an
              opportunity to learn and practice React.js as a front-end
              framework and to explore its potential for reusable components
              such as individual contacts.
            </div>
          </div>
        </div>
        <div className={css.sources}>
          {url("https://bobur-contacts.netlify.app")}
          {github("https://github.com/khingbob/Contacts")}
        </div>
      </div>
      <div
        id={css.goldDiv}
        className={css.projectDiv}
        style={{ backgroundImage: `url(${goldWall})` }}
      >
        <div id={css.goldContent} className={css.content}>
          <img id={css.goldPic} className={css.websitePic} src={gold} />
          <div id={css.goldText} className={css.text}>
            <h3>TESLA GOLD</h3>
            <div>
              TESLA GOLD was created as a fun project to try out luxurious
              designs on a website. I made it in the beginning of my
              web-development journey using only html, css and vanilla
              JavaScript. The website is not fully responsive and has many
              limitations. But for the experience I had back then I think the
              result turned out to be pretty decent.
              <br /> Whenever I open TESLA GOLD I see how much progress I made
              so far and how much easier it got to implement some features that
              used to take several days.
            </div>
          </div>
        </div>
        <div className={css.sources}>
          {url("https://tesla-gold.glitch.me")}

          <a href="https://glitch.com/edit/#!/tesla-gold" target="_blank">
            <div className={css.sourceDiv}>
              <svg
                stroke="white"
                fill="transparent"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                className={css.source}
              >
                <path d="M31.734 16.76c-0.385-0.198-4.536 1.865-5.427 1.693-2.24-0.401-1.828-0.667-4.839-1.359-1.203-0.266-1.031-0.109-1.297-0.307-0.172-0.135-0.344-0.161-0.599-0.401 4-0.719 6.026-1.693 6.734-1.839 0.76-0.146 5.161 1.958 5.427 1.469 0.266-0.495-0.964-1.578-0.401-3.031 0.589-1.464-0.693-2.422 0.016-3.583 0.719-1.161 0.573-2.932 0.396-3.026-0.396-0.203-4.531 1.865-5.438 1.693-2.24-0.417-1.828-0.682-4.839-1.359-1.203-0.271-1.031-0.12-1.297-0.323-0.266-0.198-0.521-0.13-1.036-0.974-0.521-0.839-6.51-2.13-6.906-2.13-0.828 0-2.375 2.13-2.375 2.13s-0.599 0-2.401 0.094c-1.802 0.094-3.375 0.896-5.495 2.563-2.13 1.667-1.823 3.344-1.823 3.344s1.969 0.667 1.969 1.042c0 0.359-1.729 0.802-1.729 0.802 1.12 1.411 4.583 2.745 5.464 2.745h0.693c-1.438 0.281-2.823 1.068-4.583 2.438-2.12 1.698-1.813 3.375-1.813 3.375s1.969 0.667 1.969 1.026c0 0.359-1.729 0.802-1.729 0.802 1.12 1.427 4.583 2.76 5.464 2.76 0.844 0 1.427 0.026 2.495-0.172 0.078 0.172 0.906 1.932 2.599 2.292 1.786 0.385 2.776 0.078 2.776 0.078s0.094-0.786-0.323-1.573c1.547 0.161 3.307 0.203 5.026-0.068 4.76-0.719 7.12-1.865 7.896-2.010 0.76-0.161 5.161 1.948 5.427 1.464 0.266-0.505-0.964-1.583-0.385-3.036 0.573-1.469-0.708-2.417 0-3.589 0.719-1.161 0.573-2.932 0.396-3.026zM4.615 11.828c-0.099-0.005-0.198-0.016-0.297-0.042h-0.052c-0.026-0.010-0.052-0.026-0.078-0.042l-0.052-0.010-0.083-0.042h-0.052c-0.021-0.010-0.047-0.026-0.068-0.042l-0.068-0.052-0.063-0.036-0.057-0.042c-0.021-0.016-0.042-0.036-0.063-0.052l-0.042-0.042c-0.026-0.026-0.047-0.052-0.068-0.078l-0.026-0.031c-0.031-0.031-0.063-0.068-0.094-0.104l-0.026-0.026c-0.021-0.036-0.036-0.073-0.052-0.109l-0.026-0.036-0.057-0.083c-0.005-0.021-0.016-0.042-0.026-0.063l-0.026-0.083-0.026-0.052c-0.005-0.031-0.010-0.063-0.016-0.094l-0.010-0.068c-0.010-0.026-0.021-0.052-0.026-0.078v-0.068c0.094 0.573 0.557 1.016 1.104 1.016 0.63 0 1.146-0.573 1.146-1.297 0-0.719-0.505-1.307-1.146-1.307-0.625 0-1.13 0.573-1.146 1.281 0-0.932 0.667-1.693 1.495-1.693 0.823 0 1.479 0.745 1.479 1.682 0 0.932-0.667 1.693-1.479 1.693zM3.615 10.563c0-0.203 0.13-0.365 0.318-0.365s0.307 0.161 0.307 0.365c0 0.198-0.135 0.344-0.307 0.344s-0.318-0.161-0.318-0.344zM4.615 22.214c-0.052 0.005-0.099 0.005-0.146 0l-0.057-0.016c-0.031 0-0.063-0.005-0.094-0.010l-0.052-0.016-0.078-0.026-0.052-0.026c-0.031-0.005-0.057-0.016-0.083-0.026l-0.052-0.026c-0.021-0.016-0.047-0.026-0.068-0.042l-0.052-0.026-0.068-0.052-0.052-0.042c-0.021-0.016-0.047-0.036-0.068-0.052l-0.042-0.042c-0.031-0.031-0.063-0.057-0.089-0.094-0.036-0.036-0.068-0.078-0.094-0.12l-0.031-0.026c-0.016-0.031-0.036-0.063-0.052-0.094l-0.026-0.052c-0.016-0.026-0.036-0.052-0.052-0.078l-0.026-0.057-0.026-0.094-0.026-0.052c-0.010-0.031-0.021-0.063-0.031-0.094l-0.010-0.052c-0.010-0.031-0.021-0.063-0.026-0.094v-0.068c0.094 0.573 0.557 1.016 1.104 1.016 0.63 0 1.146-0.573 1.146-1.292 0-0.724-0.505-1.297-1.146-1.297-0.625 0-1.13 0.563-1.146 1.266 0-0.932 0.667-1.693 1.495-1.693 0.823 0 1.479 0.76 1.479 1.682 0 0.917-0.667 1.693-1.479 1.693zM3.615 20.948c0-0.188 0.13-0.349 0.318-0.349s0.307 0.161 0.307 0.349c0 0.188-0.135 0.344-0.307 0.344s-0.318-0.146-0.318-0.344zM10.385 13.615v-0.042l0.042-0.078 0.078-0.297c0.182-0.583 0.344-1.172 0.479-1.771 0.161-0.708 0.229-1.281 0.203-1.599-0.016-0.12-0.031-0.245-0.052-0.359-0.068-0.359-0.156-0.708-0.271-1.057-0.073-0.224-0.161-0.448-0.25-0.667l-0.083-0.172-0.026-0.068c-0.12-0.266 0.057-0.573 0.323-0.557h0.188l0.531 0.036 2.104 0.109 1.151 0.078c3.672 0.245 7.266 1.203 10.573 2.828l0.891 0.401c0.172 0.078 0.266 0.307 0.188 0.505-0.068 0.188-0.266 0.292-0.438 0.214l-0.896-0.401c-3.24-1.594-6.755-2.542-10.359-2.786l-1.146-0.068-0.51-0.026-1.599-0.094h-0.156c0.188 0.51 0.339 1.031 0.453 1.562l0.063 0.427c0.042 0.453-0.036 1.078-0.224 1.88l-0.203 0.823c-0.115 0.448-0.245 0.885-0.385 1.323l-0.026 0.078c0 0.016 0 0.026 0 0.042-0.068 0.188-0.266 0.292-0.438 0.214-0.177-0.068-0.271-0.292-0.203-0.495zM8.385 7.266c0.13-0.146 0.37-0.135 0.479 0.026 0.208 0.26 0.396 0.536 0.563 0.828 0.292 0.531 0.495 1.068 0.547 1.615 0.026 0.307 0 0.651-0.052 1.026-0.068 0.375-0.156 0.745-0.271 1.104-0.094 0.313-0.208 0.62-0.333 0.922-0.078 0.188-0.276 0.266-0.453 0.172-0.172-0.094-0.24-0.318-0.156-0.521l0.026-0.052 0.068-0.172c0.073-0.198 0.146-0.396 0.214-0.599 0.099-0.328 0.182-0.661 0.24-1 0.052-0.307 0.063-0.573 0.052-0.802-0.063-0.458-0.219-0.896-0.453-1.292-0.13-0.234-0.276-0.458-0.443-0.667l-0.036-0.042c-0.12-0.161-0.109-0.385 0.026-0.531zM9.922 21.135c-0.063 0.38-0.151 0.76-0.271 1.13-0.094 0.307-0.208 0.609-0.333 0.906-0.078 0.188-0.276 0.266-0.453 0.177-0.172-0.094-0.24-0.323-0.156-0.521l0.026-0.057 0.068-0.172c0.073-0.198 0.146-0.396 0.214-0.599 0.099-0.328 0.182-0.661 0.24-1 0.052-0.307 0.063-0.573 0.036-0.802-0.057-0.448-0.208-0.885-0.438-1.276-0.13-0.234-0.276-0.458-0.443-0.667l-0.036-0.057c-0.12-0.161-0.109-0.38 0.026-0.531 0.12-0.146 0.344-0.146 0.464 0 0.214 0.266 0.396 0.547 0.563 0.839 0.292 0.536 0.495 1.083 0.547 1.615 0.026 0.307 0 0.651-0.052 1.026zM26.453 21.292c-0.068 0.188-0.266 0.297-0.438 0.214l-0.896-0.401c-3.24-1.594-6.755-2.542-10.359-2.786l-1.135-0.063h-0.063l-0.458-0.026c-0.583-0.036-1.172-0.068-1.755-0.094l0.036 0.078c0.234 0.615 0.396 1.255 0.479 1.906 0.042 0.453-0.036 1.078-0.224 1.88l-0.203 0.828c-0.115 0.448-0.245 0.891-0.385 1.333l-0.026 0.068c0 0.010 0 0.026 0 0.036-0.068 0.203-0.266 0.297-0.438 0.229-0.177-0.083-0.271-0.307-0.203-0.51v-0.026l0.042-0.078 0.078-0.292c0.182-0.589 0.344-1.177 0.479-1.776 0.161-0.708 0.229-1.281 0.203-1.599-0.016-0.12-0.031-0.24-0.052-0.359-0.068-0.359-0.156-0.708-0.271-1.052-0.073-0.224-0.161-0.443-0.25-0.656l-0.052-0.12-0.031-0.068-0.026-0.063c-0.12-0.271 0.057-0.578 0.323-0.563h0.188l0.531 0.042 2.12 0.104 1.135 0.083c3.672 0.24 7.266 1.198 10.573 2.823l0.891 0.401c0.172 0.078 0.266 0.307 0.188 0.505z" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
