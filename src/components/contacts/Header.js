import React from "react";

function ContactHeader() {
  return (
    <header className="page-header">
      <div className="background-wrapper">
        <div className="webGL-main">
          <div id="webGL-container"></div>
        </div>
        <div className="header-image-wrapper">
          <div className="block-bg-cover">
            <picture>
              <source
                srcset="../imgs/estamos/contacts-header-image-phone.jpg"
                media="(max-width: 414px)"
              />
              <source
                srcset="../imgs/estamos/contacts-header-image-small.jpg"
                media="(max-width: 768px)"
              />
              <img
                className="background-image element-cover"
                src="../imgs/estamos/contacts-header-image.jpg"
                alt="Affinity Instalations"
              />
            </picture>
          </div>
        </div>

        <div className="header-pictogram-wrapper">
          <picture>
            <source
              srcset="./imgs/estamos/contacts-pictogram-phone.png"
              media="(max-width: 414px)"
            />
            <img
              className="header-pictogram"
              src="../imgs/estamos/contacts-pictogram.png"
              alt=""
            />
          </picture>
        </div>

        <div className="row expanded align-middle medium-collapse">
          <div className="xxlarge-8 xxlarge-offset-5 xlarge-offset-5 large-9 large-offset-4 medium-10 medium-offset-4 small-14 small-offset-1 columns">
            <div className="header-text">
              <h1>
                In case you need to find us.
                <br />
              </h1>
              <h2>These are the coordinates for your biggest adventure yet.</h2>
            </div>
          </div>
        </div>
        <div className="social-wrapper">
          <h5>Follow Affinity</h5>
          <ul className="social-links">
            <li className="linkedin">
              <a
                href="https://www.linkedin.com/company/2701281/"
                rel="external"
              >
                <svg viewBox="0 0 46 34">
                  <path d="M14.7 32H8.5V12h6.2v20zM11.6 9.2C9.6 9.2 8 7.6 8 5.6S9.6 2 11.6 2s3.6 1.6 3.6 3.6-1.6 3.6-3.6 3.6zM38 32h-6.2v-9.7c0-2.3 0-5.3-3.2-5.3s-3.7 2.5-3.7 5.1V32h-6.2V12h6v2.7h.1c.8-1.6 2.9-3.2 5.9-3.2 6.3 0 7.5 4.1 7.5 9.5v11z" />
                </svg>
              </a>
            </li>
            <li className="facebook">
              <a
                href="https://www.facebook.com/affinity.portugal/"
                rel="external"
              >
                <svg viewBox="0 0 46 34">
                  <path d="M25.6 33h-7.1V19H15v-6.2h3.5V9.1c0-5.1 2-8.1 7.7-8.1H31v6.2h-3c-2.2 0-2.4.9-2.4 2.5v3.1H31l-.6 6.2h-4.7v14z" />
                </svg>
              </a>
            </li>
            <li className="google">
              <a href="https://plus.google.com/+AFFINITYLisboa" rel="external">
                <svg viewBox="0 0 46 34">
                  <path d="M1 16.3C.6 22 4.4 27.6 9.9 29.6c5.4 2 12.4.6 15.9-4.1 2.3-3 2.8-6.8 2.5-10.4H14.9v4.6c2.7.1 5.3 0 8 .1-1.2 5.7-9.2 7.6-13.5 3.8-4.4-3.3-4.2-10.4.4-13.5 3.2-2.4 7.7-1.8 10.9.3 1.2-1.1 2.4-2.3 3.5-3.5-2.6-2-5.9-3.5-9.3-3.3C7.8 3.3 1.2 9.4 1 16.3zm36-5.1v3.9h-4v3.8h4v3.8h4v-3.9h4V15h-4v-3.9c-1.3.1-2.7.1-4 .1z" />
                </svg>
              </a>
            </li>
            <li className="youtube">
              <a
                href="https://www.youtube.com/channel/UC4XVKfWFAGVObIMNHJYyyzA"
                rel="external"
              >
                <svg viewBox="0 0 46 34">
                  <path d="M40.6 9.8s-.4-2.5-1.4-3.6c-1.4-1.4-2.9-1.4-3.6-1.5-5-.4-12.6-.4-12.6-.4s-7.6 0-12.6.4c-.7.1-2.2.1-3.6 1.5-1.1 1.1-1.4 3.6-1.4 3.6S5 12.7 5 15.6v2.7c0 2.9.4 5.8.4 5.8s.4 2.5 1.4 3.6c1.4 1.4 3.2 1.4 4 1.5 2.9.3 12.2.4 12.2.4s7.6 0 12.6-.4c.7-.1 2.2-.1 3.6-1.5 1.1-1.1 1.4-3.6 1.4-3.6s.4-2.9.4-5.8v-2.7c0-2.9-.4-5.8-.4-5.8M19.3 21.7V11.6l9.7 5.1-9.7 5z" />
                </svg>
              </a>
            </li>
            <li className="instagram">
              <a
                href="https://www.instagram.com/affinityportugal/"
                rel="external"
              >
                <svg viewBox="0 0 16 16">
                  <path d="M16 4.7a5.87 5.87 0 0 0-.37-1.94 3.92 3.92 0 0 0-.92-1.42 3.91 3.91 0 0 0-1.42-.92A5.88 5.88 0 0 0 11.3 0H4.7a5.88 5.88 0 0 0-1.94.37A4.09 4.09 0 0 0 .42 2.76 5.87 5.87 0 0 0 0 4.7v6.6a5.87 5.87 0 0 0 .37 1.94 4.09 4.09 0 0 0 2.34 2.34A5.87 5.87 0 0 0 4.7 16h6.6a5.87 5.87 0 0 0 1.94-.37 4.09 4.09 0 0 0 2.34-2.34A5.87 5.87 0 0 0 16 11.3V8 4.7zm-1.44 6.53a4.43 4.43 0 0 1-.28 1.49 2.65 2.65 0 0 1-1.52 1.52 4.45 4.45 0 0 1-1.49.28H4.81a4.46 4.46 0 0 1-1.49-.28 2.65 2.65 0 0 1-1.52-1.52 4.43 4.43 0 0 1-.28-1.49V8 4.77a4.43 4.43 0 0 1 .28-1.49 2.65 2.65 0 0 1 1.48-1.52 4.43 4.43 0 0 1 1.49-.28h6.46a4.43 4.43 0 0 1 1.49.28 2.65 2.65 0 0 1 1.52 1.52 4.43 4.43 0 0 1 .28 1.49V8s.03 2.39-.01 3.23zM8 3.89A4.11 4.11 0 1 0 12.11 8 4.11 4.11 0 0 0 8 3.89zm0 6.77A2.67 2.67 0 1 1 10.67 8 2.67 2.67 0 0 1 8 10.67zm4.27-7.9a1 1 0 1 0 1 1 1 1 0 0 0-1-.99z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mouse-icon">
        <span className="scroll-helper">Scroll</span>
        <span className="wheel"></span>
      </div>
    </header>
  );
}
export default ContactHeader;
