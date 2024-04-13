import React from "react";

function Footer() {
  return (
    <div className="row expanded last-content-wrapper xsmall-collapse">
      <div className="xxlarge-2 xxlarge-offset-1 medium-3 small-6 small-offset-0 xsmall-5 columns made-by">
        <a href="/PrivacyPolicy" target="_blank" rel="noreferrer">
          <h4>Privacy Policy </h4>
        </a>

        <a
          href="/"
          // target="_blank"
          rel="noreferrer"
          className="reporting"
        >
          <h4>Reporting Channel </h4>
        </a>
      </div>
      <div className="xxlarge-10 medium-8 small-4 xsmall-16 columns text-center">
        <a
          href="/"
          data-remote="true"
          data-targetclass="home"
          // data-ajaxurl="https://affinity.pt/en/ajax/home-ajax/?ajax-id=74"
          data-title="Home"
          className="link-logo-footer"
        >
          <svg className="main-logo" viewBox="0 0 1566.1 460.4">
            <path d="M921 112.3c-35.5 0-56.1 19.7-71.9 41.4h-3.9l-1-36.9h-71.4c0 0 1 20.7 1 41.9v207.3h73.4V222.1c6.4-34 24.1-58.1 47.8-58.1 17.2 0 29.1 12.3 29.1 36.4v165.4h74.4v-163C998.3 133.9 959.4 112.3 921 112.3zM1047.6 116.7H1120.5V365.9H1047.6zM1083.5 4.9c-22.2 0-40.4 15.3-40.4 38.9 0 24.1 18.2 38.4 40.4 38.4 21.7 0 40.9-14.3 40.9-38.4C1124.4 20.2 1105.2 4.9 1083.5 4.9zM1496.2 116.7L1445.5 295c0 0 11.3-189.6-145.3-178.2l-34.4.7-1-77.5h-53.7l-18.2 76.8h-45.3v53.7h45.3v126.6c0 48.7 27.1 74.8 75.8 74.8 21.7 0 43.3-8.9 55.6-16.7l1-48.3c-11.8 4.4-25.6 8.9-39.9 8.9-12.8 0-20.2-7.9-20.2-20.2l.5-124.7 32.7-.4c113.6 0 87.8 175.8 87.8 175.8 17.2-1.6 28.8 5.3 28.8 19.7 0 8.4-2 15.3-5.9 21.2-7.9 11.8-22.2 18.2-38.9 18.2-7.9 0-19.2-1-27.6-2.5V456c13.3 3 28.6 4.4 39.4 4.4 42.3 0 77.8-19.7 93.1-65.5l91.1-278.2H1496.2zM122.3 9.3L0 365.8h73l23.7-76.9H216l24.2 76.9h76.9L190.4 9.3H122.3zM112.5 231.2l42.4-129.7h3.9l39.5 129.7H112.5zM572.9 116.7v-31c0-11.8 7.4-25.6 32-26.8 30.2-1.5 56.3 6.2 81.2 14.8l13.2-56.9C676.1 9.8 635.9-.4 592.7.9c-65.6 2-92.2 35-92.2 82.8v33h-87.6v-31c0-11.8 7.4-27.1 32-28.4 10.9-.6 20.7.8 31.2 3.1l12.5-54.3c-16.9-3.6-36.1-6.7-55.9-6.1-65.6 2-92.2 35.9-92.2 83.7v33h0-36.9v50.2h36.9v198.9h72.4V166.9h87.6v198.9h72.4V166.9h76.8v198.9h71.9V116.7H572.9z" />
          </svg>
        </a>
      </div>
      <div className="xxlarge-2 medium-3 small-6 xsmall-5 columns affinity-mark">
        <ul>
          <li>
            <a
              href="/News"
              className="underline-link"
              data-remote="true"
              data-targetclass="noticias"
              // data-ajaxurl="https://affinity.pt/en/ajax/noticias-ajax/?ajax-id=https://affinity.pt"
              data-title=""
            >
              News
            </a>
          </li>
          <li>
            <a
              href="/Contacts"
              className="underline-link"
              data-remote="true"
              data-targetclass="estamos"
              // data-ajaxurl="https://affinity.pt/en/ajax/estamos-ajax/?ajax-id=92"
              data-title="Contacts"
            >
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
