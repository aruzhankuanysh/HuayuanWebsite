import React from "react";

function Header() {
  return (
    <header
      id="header-main"
      className="row expanded align-middle small-collapse"
      role="banner"
    >
      <div className="xxlarge-2 xxlarge-offset-1 medium-offset-0 small-5 xsmall-16 columns">
        <span className="main-logo">
          <a
            href="/"
            data-remote="true"
            data-targetclass="home"
            data-ajaxurl="https://affinity.pt/en/ajax/home-ajax/?ajax-id=74"
            data-title-home="Affinity - Nearshore | IT Consulting | Software Development"
            data-title-brand="Brand Guidelines"
            data-url-brand="https://affinity.pt/en/brand-guidelines-2/"
            data-url-brandajax="https://affinity.pt/en/ajax/brand-guidelines-ajax/?ajax-id=1175"
            className="btn-brand-guides"
          >
            <svg viewBox="0 0 1566.1 460.4">
              <path d="M921 112.3c-35.5 0-56.1 19.7-71.9 41.4h-3.9l-1-36.9h-71.4c0 0 1 20.7 1 41.9v207.3h73.4V222.1c6.4-34 24.1-58.1 47.8-58.1 17.2 0 29.1 12.3 29.1 36.4v165.4h74.4v-163C998.3 133.9 959.4 112.3 921 112.3zM1047.6 116.7H1120.5V365.9H1047.6zM1083.5 4.9c-22.2 0-40.4 15.3-40.4 38.9 0 24.1 18.2 38.4 40.4 38.4 21.7 0 40.9-14.3 40.9-38.4C1124.4 20.2 1105.2 4.9 1083.5 4.9zM1496.2 116.7L1445.5 295c0 0 11.3-189.6-145.3-178.2l-34.4.7-1-77.5h-53.7l-18.2 76.8h-45.3v53.7h45.3v126.6c0 48.7 27.1 74.8 75.8 74.8 21.7 0 43.3-8.9 55.6-16.7l1-48.3c-11.8 4.4-25.6 8.9-39.9 8.9-12.8 0-20.2-7.9-20.2-20.2l.5-124.7 32.7-.4c113.6 0 87.8 175.8 87.8 175.8 17.2-1.6 28.8 5.3 28.8 19.7 0 8.4-2 15.3-5.9 21.2-7.9 11.8-22.2 18.2-38.9 18.2-7.9 0-19.2-1-27.6-2.5V456c13.3 3 28.6 4.4 39.4 4.4 42.3 0 77.8-19.7 93.1-65.5l91.1-278.2H1496.2zM122.3 9.3L0 365.8h73l23.7-76.9H216l24.2 76.9h76.9L190.4 9.3H122.3zM112.5 231.2l42.4-129.7h3.9l39.5 129.7H112.5zM572.9 116.7v-31c0-11.8 7.4-25.6 32-26.8 30.2-1.5 56.3 6.2 81.2 14.8l13.2-56.9C676.1 9.8 635.9-.4 592.7.9c-65.6 2-92.2 35-92.2 82.8v33h-87.6v-31c0-11.8 7.4-27.1 32-28.4 10.9-.6 20.7.8 31.2 3.1l12.5-54.3c-16.9-3.6-36.1-6.7-55.9-6.1-65.6 2-92.2 35.9-92.2 83.7v33h0-36.9v50.2h36.9v198.9h72.4V166.9h87.6v198.9h72.4V166.9h76.8v198.9h71.9V116.7H572.9z" />
            </svg>
          </a>
        </span>
      </div>
      <div className="xxlarge-8 xxlarge-offset-2 xlarge-8 xlarge-offset-2 large-offset-1 large-9 medium-10 medium-offset-2 small-4 small-order-2 columns">
        <ul id="nav-main">
          <li
            className=" somos"
            data-color="#7245ce"
            data-controller="somos-page"
          >
            <a
              href="/About"
              data-remote="true"
              data-targetclass="somos"
              data-ajaxurl="https://affinity.pt/en/ajax/somos-ajax/?ajax-id=98"
              data-title="About"
            >
              About
            </a>
          </li>
          <li
            className=" fazemos"
            data-color="#006cfc"
            data-controller="fazemos-page"
          >
            <a
              href="/Solutions"
              data-remote="true"
              data-targetclass="fazemos"
              data-ajaxurl="https://affinity.pt/en/ajax/fazemos-ajax/?ajax-id=96"
              data-title="Solutions"
            >
              Solutions
            </a>
          </li>
          <li
            className=" queremos"
            data-color="#49e2bb"
            data-controller="queremos-te-page"
          >
            <a
              href="/Careers"
              data-remote="true"
              data-targetclass="queremos"
              data-ajaxurl="https://affinity.pt/en/ajax/queremos-te-ajax/?ajax-id=821"
              data-title="Careers"
            >
              Careers
            </a>
          </li>
          <li
            className=" noticias"
            data-color="#006cfc"
            data-controller="noticias-page"
          >
            <a
              href="/News"
              data-remote="true"
              data-targetclass="noticias"
              data-ajaxurl="https://affinity.pt/en/ajax/noticias-ajax/?ajax-id=https://affinity.pt"
              data-title=""
            >
              News
            </a>
          </li>
          <li
            className=" estamos"
            data-color="#f77b81"
            data-controller="estamos-page"
          >
            <a
              href="/Contacts"
              data-remote="true"
              data-targetclass="estamos"
              data-ajaxurl="https://affinity.pt/en/ajax/estamos-ajax/?ajax-id=92"
              data-title="Contacts"
            >
              Contacts
            </a>
          </li>
        </ul>
      </div>
      <div className="xxlarge-2 xlarge-3 large-3 large-offset-0 medium-2 medium-offset-0 small-6 small-order-1 xsmall-8 columns hide-mob txt-right desktop-language">
        <div className="language-wrapper">
          <button className="active-language">
            <span className="lg">English</span>
            <svg className="arrow" viewBox="0 0 18 12">
              <path d="M16.5 1.9L9 10.1 1.5 1.9" />
            </svg>
          </button>
          <ul className="other-languages">
            <li>
              <a href="https://affinity.pt/">Português</a>
            </li>
          </ul>
        </div>
        <ul id="nav-left">
          <li className="icon with-icon">
            <a href="http://with.affinity.pt/" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 856.9 329.1">
                <path
                  id="a"
                  d="M856.9 195.3v128.6h-56.2V203.3c0-24.3-15.5-40.2-38.5-40.2-23.1 0-39.4 16.3-39.4 40.2V324h-56.6V9.7h56.6v124.5c13.8-13.8 33.5-22.2 57-22.2 47.3-.1 77.1 33.4 77.1 83.3zM403.3 323.9h65.2V101l-65.2-.2v223.1zm175.1-63V144.6H625v-43.8h-48.6V72.4c0-41.7-23.3-70.6-80.5-72.3-37.7-1.1-72.3 6.6-92.6 12.7-27.4 8.2-86.2 36.7-126.6 134.1l-28.9 65.6L192 100.9h-18.7l-54.4 114.9-48.4-109.6H0l104.6 217.7h18.8l59.5-111 59 111h18.8l92.6-197.7c.1-.2.3-.4.4-.7 9.8-18.5 43-69.6 113.5-74.8 6-.4 12.1-.5 18.2-.1 21.5 1.1 27.9 13.1 27.9 23.4l.3 188.1c0 43.6 24.3 67 67.9 67 19.4 0 38.8-7.9 49.8-15l.9-43.2c-10.6 4-22.9 7.9-35.7 7.9-11.5.2-18.1-6.9-18.1-17.9z"
                />
                <clipPath id="b">
                  <use href="#a" overflow="visible" />
                </clipPath>
                <path
                  clipPath="url(#b)"
                  fill="#224099"
                  d="M-39.7-46.5h953.9V382H-39.7z"
                />
                <path
                  id="c"
                  d="M856.9 195.3v128.6h-56.2V203.3c0-24.3-15.5-40.2-38.5-40.2-23.1 0-39.4 16.3-39.4 40.2V324h-56.6V9.7h56.6v124.5c13.8-13.8 33.5-22.2 57-22.2 47.3-.1 77.1 33.4 77.1 83.3zM403.3 323.9h65.2V101l-65.2-.2v223.1zm175.1-63V144.6H625v-43.8h-48.6V72.4c0-41.7-23.3-70.6-80.5-72.3-37.7-1.1-72.3 6.6-92.6 12.7-27.4 8.2-86.2 36.7-126.6 134.1l-28.9 65.6L192 100.9h-18.7l-54.4 114.9-48.4-109.6H0l104.6 217.7h18.8l59.5-111 59 111h18.8l92.6-197.7c.1-.2.3-.4.4-.7 9.8-18.5 43-69.6 113.5-74.8 6-.4 12.1-.5 18.2-.1 21.5 1.1 27.9 13.1 27.9 23.4l.3 188.1c0 43.6 24.3 67 67.9 67 19.4 0 38.8-7.9 49.8-15l.9-43.2c-10.6 4-22.9 7.9-35.7 7.9-11.5.2-18.1-6.9-18.1-17.9z"
                />
                <clipPath id="d">
                  <use href="#c" overflow="visible" />
                </clipPath>
                <ellipse
                  cx="380"
                  cy="455.4"
                  rx="553.4"
                  ry="325.3"
                  clipPath="url(#d)"
                  fill="#3c72eb"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <nav id="nav-main-mobile" role="navigation">
        <span className="outside-overlay"></span>
        <div className="sub-nav">
          <ul id="nav-left">
            <li className="icon with-icon">
              <a
                href="http://with.affinity.pt/"
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 856.9 329.1">
                  <path
                    id="abc"
                    d="M856.9 195.3v128.6h-56.2V203.3c0-24.3-15.5-40.2-38.5-40.2-23.1 0-39.4 16.3-39.4 40.2V324h-56.6V9.7h56.6v124.5c13.8-13.8 33.5-22.2 57-22.2 47.3-.1 77.1 33.4 77.1 83.3zM403.3 323.9h65.2V101l-65.2-.2v223.1zm175.1-63V144.6H625v-43.8h-48.6V72.4c0-41.7-23.3-70.6-80.5-72.3-37.7-1.1-72.3 6.6-92.6 12.7-27.4 8.2-86.2 36.7-126.6 134.1l-28.9 65.6L192 100.9h-18.7l-54.4 114.9-48.4-109.6H0l104.6 217.7h18.8l59.5-111 59 111h18.8l92.6-197.7c.1-.2.3-.4.4-.7 9.8-18.5 43-69.6 113.5-74.8 6-.4 12.1-.5 18.2-.1 21.5 1.1 27.9 13.1 27.9 23.4l.3 188.1c0 43.6 24.3 67 67.9 67 19.4 0 38.8-7.9 49.8-15l.9-43.2c-10.6 4-22.9 7.9-35.7 7.9-11.5.2-18.1-6.9-18.1-17.9z"
                  />
                  <clipPath id="bcd">
                    <use href="#abc" overflow="visible" />
                  </clipPath>
                  <path
                    clipPath="url(#bcd)"
                    fill="#ffffff"
                    d="M-39.7-46.5h953.9V382H-39.7z"
                  />
                  <path
                    id="cde"
                    d="M856.9 195.3v128.6h-56.2V203.3c0-24.3-15.5-40.2-38.5-40.2-23.1 0-39.4 16.3-39.4 40.2V324h-56.6V9.7h56.6v124.5c13.8-13.8 33.5-22.2 57-22.2 47.3-.1 77.1 33.4 77.1 83.3zM403.3 323.9h65.2V101l-65.2-.2v223.1zm175.1-63V144.6H625v-43.8h-48.6V72.4c0-41.7-23.3-70.6-80.5-72.3-37.7-1.1-72.3 6.6-92.6 12.7-27.4 8.2-86.2 36.7-126.6 134.1l-28.9 65.6L192 100.9h-18.7l-54.4 114.9-48.4-109.6H0l104.6 217.7h18.8l59.5-111 59 111h18.8l92.6-197.7c.1-.2.3-.4.4-.7 9.8-18.5 43-69.6 113.5-74.8 6-.4 12.1-.5 18.2-.1 21.5 1.1 27.9 13.1 27.9 23.4l.3 188.1c0 43.6 24.3 67 67.9 67 19.4 0 38.8-7.9 49.8-15l.9-43.2c-10.6 4-22.9 7.9-35.7 7.9-11.5.2-18.1-6.9-18.1-17.9z"
                  />
                  <clipPath id="def">
                    <use href="#cde" overflow="visible" />
                  </clipPath>
                  <ellipse
                    cx="380"
                    cy="455.4"
                    rx="553.4"
                    ry="325.3"
                    clipPath="url(#def)"
                    fill="#ffffff"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <div className="language-wrapper">
            <button className="active-language">
              <span className="lg">English</span>
              <svg className="arrow" viewBox="0 0 18 12">
                <path d="M16.5 1.9L9 10.1 1.5 1.9" />
              </svg>
            </button>
            <ul className="other-languages">
              <li className="lang-item lang-item-2 lang-item-pt lang-item-first">
                <a lang="pt-PT" hrefLang="pt-PT" href="https://affinity.pt/">
                  pt
                </a>
              </li>
            </ul>
          </div>
        </div>
        <ul className="main-navigation">
          <li className="" data-color="#7245ce" data-controller="somos-page">
            <a
              href="about/index.html"
              data-remote="true"
              data-targetclass="somos"
              data-ajaxurl="https://affinity.pt/en/ajax/somos-ajax/?ajax-id=98"
              data-title="About"
            >
              About
            </a>
          </li>
          <li className="" data-color="#006cfc" data-controller="fazemos-page">
            <a
              href="solutions/index.html"
              data-remote="true"
              data-targetclass="fazemos"
              data-ajaxurl="https://affinity.pt/en/ajax/fazemos-ajax/?ajax-id=96"
              data-title="Solutions"
            >
              Solutions
            </a>
          </li>
          <li
            className=""
            data-color="#006cfc"
            data-controller="queremos-te-page"
          >
            <a
              href="careers/index.html"
              data-remote="true"
              data-targetclass="queremos"
              data-ajaxurl="https://affinity.pt/en/ajax/queremos-te-ajax/?ajax-id=821"
              data-title="Careers"
            >
              Careers
            </a>
          </li>
          <li data-controller="noticias-page">
            <a
              href="news/index.html"
              data-remote="true"
              data-targetclass="noticias"
              data-ajaxurl="https://affinity.pt/en/ajax/noticias-ajax/?ajax-id=https://affinity.pt"
              data-title=""
            >
              News
            </a>
          </li>
          <li className="" data-color="#f77b81" data-controller="estamos-page">
            <a
              href="contacts/index.html"
              data-remote="true"
              data-targetclass="estamos"
              data-ajaxurl="https://affinity.pt/en/ajax/estamos-ajax/?ajax-id=92"
              data-title="Contacts"
            >
              Contacts
            </a>
          </li>
        </ul>
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
              <a
                href="https://plus.google.com/114106190599621530231"
                rel="external"
              >
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
        <button className="close-hamb-menu">
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </nav>
      <button className="hamb-menu">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
    </header>
  );
}

export default Header;
