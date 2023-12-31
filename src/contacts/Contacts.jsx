import css from "./Contacts.module.css";
import coolPic from "../assets/coolPic.png";
import wallpaper from "../assets/contactMe.webp";
export default () => {
  return (
    <div id={css.contacts} style={{ backgroundImage: `url(${wallpaper})` }}>
      <h1>Contact Me</h1>
      <div id={css.contactsContent}>
        <div id={css.coolPicDiv}>
          <div id={css.coolPicBack}></div>
          <img src={coolPic} id={css.coolPic} />
        </div>
        <div id={css.column}>
          <div id={css.linksDiv}>
            <a target="_blank" href="https://www.instagram.com/khing_bob">
              <div className={css.iconWrap} id={css.instaDiv}>
                <svg
                  className={css.icons}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066 1.172.053 1.972.24 2.672.511.733.277 1.398.71 1.948 1.27.56.549.992 1.213 1.268 1.947.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268-.7.272-1.5.458-2.67.512-1.174.054-1.548.066-4.536.066-2.988 0-3.362-.013-4.535-.066-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268 5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948 5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064-2.937 0-3.285.011-4.445.064-1.073.049-1.655.228-2.043.379-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043-.053 1.16-.064 1.508-.064 4.445 0 2.937.011 3.285.064 4.445.049 1.073.228 1.655.379 2.043.176.477.457.91.822 1.265.355.365.788.646 1.265.822.388.151.97.33 2.043.379 1.16.053 1.507.064 4.445.064 2.938 0 3.285-.011 4.445-.064 1.073-.049 1.655-.228 2.043-.379.513-.2.88-.437 1.265-.822.365-.355.646-.788.822-1.265.151-.388.33-.97.379-2.043.053-1.16.064-1.508.064-4.445 0-2.937-.011-3.285-.064-4.445-.049-1.073-.228-1.655-.379-2.043-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986 3.67 3.67 0 1 0-4 5.986zM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996 5.654 5.654 0 0 1-7.996-7.996zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89 1.337 1.337 0 0 0 1.89 1.89z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/bobur-khayitov-631520278"
            >
              <div className={css.iconWrap} id={css.linkedInDiv}>
                <svg
                  className={css.icons}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02 3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461-1.889 0-2.674 1.345-2.674 3.46V22h-4V8.969zM2.57 21.83h4V8.799h-4V21.83zM7.143 4.55a2.53 2.53 0 0 1-.753 1.802 2.573 2.573 0 0 1-1.82.748 2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747.482.478.753 1.126.753 1.803z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </a>
            <a target="_blank" href="https://github.com/khingbob">
              <div className={css.iconWrap} id={css.githubDiv}>
                <svg
                  className={css.icons}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm3.163 21.783h-.093a.513.513 0 0 1-.382-.14.513.513 0 0 1-.14-.372v-1.406c.006-.467.01-.94.01-1.416a3.692 3.692 0 0 0-.151-1.028 1.831 1.831 0 0 0-.542-.875 8.012 8.012 0 0 0 2.038-.471 4.051 4.051 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506.213-.69.314-1.409.3-2.13a4.138 4.138 0 0 0-.26-1.476 3.891 3.891 0 0 0-.795-1.284 2.75 2.75 0 0 0 .162-.582c.033-.2.05-.402.05-.604 0-.26-.03-.52-.09-.773a5.31 5.31 0 0 0-.221-.763.293.293 0 0 0-.111-.02h-.11c-.23.002-.456.04-.674.111a5.34 5.34 0 0 0-.703.26 6.502 6.502 0 0 0-.661.343c-.215.127-.405.249-.573.362a9.578 9.578 0 0 0-5.143 0 13.503 13.503 0 0 0-.572-.362 6.022 6.022 0 0 0-.672-.342 4.517 4.517 0 0 0-.705-.261 2.203 2.203 0 0 0-.662-.111h-.11a.29.29 0 0 0-.11.02 5.98 5.98 0 0 0-.23.763c-.054.254-.08.513-.081.773 0 .202.017.404.051.604.033.199.086.394.16.582A3.888 3.888 0 0 0 5.702 10a4.142 4.142 0 0 0-.263 1.476 6.87 6.87 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516.415.422.915.75 1.466.964.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.452.633 2.99 2.99 0 0 0-.2.744 2.753 2.753 0 0 1-1.175.27 1.79 1.79 0 0 1-1.065-.3 2.904 2.904 0 0 1-.752-.824 3.101 3.101 0 0 0-.292-.382 2.69 2.69 0 0 0-.372-.343 1.81 1.81 0 0 0-.432-.24 1.2 1.2 0 0 0-.481-.101c-.04.001-.08.005-.12.01a.646.646 0 0 0-.162.02.409.409 0 0 0-.13.06.116.116 0 0 0-.06.1.33.33 0 0 0 .14.242c.093.074.17.131.232.171l.03.021c.133.103.261.214.382.333.112.098.213.209.3.33.09.119.168.246.231.381.073.134.15.288.231.463.188.474.522.875.954 1.145.453.243.961.364 1.476.351.174 0 .349-.01.522-.03.172-.028.343-.057.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0v.005-.001Z" />
                </svg>
              </div>
            </a>
          </div>
          <div id={css.contactData}>
            <div id={css.phoneNumber}>
              <a href="tel:+491775063148">Tel: +49 177 5063148</a>
            </div>
            <div id={css.email}>
              <a href="mailto:bobur.khayitov2003@gmail.com">
                E-Mail: bobur.khayitov2003@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
