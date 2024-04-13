import React from "react";

function Navbar() {
  return (
    <div className="navbar-services-wrapper">
      <div className="row align-center">
        <div className="xxlarge-16">
          <div className="row align-center">
            <div className="xxlarge-12 medium-14 small-16">
              <div className="navbar-services-scroll">
                <ul className="navbar-services row xxlarge-up-3  nearshoring-active">
                  <li className="column active">
                    <a
                      href="/Nearshore"
                      data-remote="true"
                      data-targetclass="single-service"
                      data-title="Nearshore"
                    >
                      <svg className="nearshoring-picto" viewBox="0 0 112 98">
                        <path
                          className="st0"
                          d="M48.4 79.9c12.2 5.8 22.3 13.8 35 13.8 24.1 0 30.9-62.6 18.6-81.8-14.1-22.1-25.1 10.9-36.1 7.2-11.5-3.9-31.2-21.6-48.2-10C.6 20.9-3.1 87.2 21.9 92.9c14.7 3.4 15.2-18.3 26.5-13z"
                        />
                      </svg>

                      <span>Nearshore </span>
                    </a>
                  </li>
                  <li className="column">
                    <a
                      href="/Outsourcing"
                      data-remote="true"
                      data-targetclass="single-service"
                      data-title="Outsourcing"
                    >
                      <svg className="outsourcing-picto" viewBox="0 0 112 102">
                        <path
                          className="st0"
                          d="M6.2 55C9 92.5 31.5 98 61.7 98c30.1.1 44.3-21 44.3-47S91.8 4 61.7 3.9C29.1 3.9 3.3 14.8 6.2 55z"
                        />
                      </svg>

                      <span>Outsourcing </span>
                    </a>
                  </li>
                  <li className="column">
                    <a
                      href="/Software"
                      data-remote="true"
                      data-targetclass="single-service"
                      data-title="Software"
                    >
                      <svg className="software-picto" viewBox="0 0 112 112">
                        <path
                          className="st0"
                          d="M48.2 107c-5.2 0-10.2-.4-14.7-1.1-6.4-1-11.6-2.6-15.4-4.9-5.6-3.3-8.5-6.9-9-11-.7-6 4.3-11 8.7-15.3 3.1-3.1 6.7-6.6 6-8.5-.9-2.4-2.7-5.5-4.6-8.8-3.1-5.3-6.5-11.3-8.2-17.7-1-3.7-1.2-7-.8-10.3.5-3.7 1.9-7.2 4.2-10.4 5.5-7.6 19-11 26.6-12.3 12.2-2.2 25.4-2.2 36.3-.1 6.4 1.3 11.7 3.2 15.8 5.8 4.9 3.1 7.9 7 9 11.6 1 4 .3 7.6-2 10.8-1.8 2.6-4.4 4.5-6.7 6.1-4.8 3.5-5.4 4.5-4.3 6.7 1.5 2.9 3.1 5.7 4.7 8.5 4.7 8.1 9.2 15.7 9.2 25.1 0 4.5-2.1 11.1-12 16.7-9.1 5.1-22.9 8.4-37.9 9-1.7.1-3.3.1-4.9.1z"
                        />
                      </svg>

                      <span>Software </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
