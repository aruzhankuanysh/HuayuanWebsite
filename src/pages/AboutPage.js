import Header from "../components/header";

function AboutPage() {
  return (
    <>
      <div className="scroll-content-wrapper" data-scrollbar>
      <Header />
        {/* ============= CONTENT =============*/}
        <div className="page-main page-current">
          <div className="page-toload somos-page" data-bodyclass="somos">
            <header className="page-header">
              <div className="background-wrapper">
                <div className="webGL-main">
                  <div id="webGL-container"></div>
                </div>
                <div className="header-image-wrapper">
                  <div className="block-bg-cover">
                    <picture>
                      {/* <source srcSet="" type="image/webp">*/}
                      <source
                        srcSet="/imgs/somos/about-header-image-phone.jpg"
                        media="(max-width: 414px)"
                      />
                      <source
                        srcSet="/imgs/somos/about-header-image-small.jpg"
                        media="(max-width: 768px)"
                      />
                      <img
                        className="background-image element-cover"
                        src="./imgs/somos/about-header-image.jpg"
                        alt=""
                      />
                    </picture>
                  </div>
                </div>

                <div className="header-pictogram-wrapper">
                  <picture>
                    <source
                      srcSet="/imgs/somos/about-pictogram-phone.png"
                      media="(max-width: 414px)"
                    />
                    <img
                      className="header-pictogram"
                      src="../imgs/somos/about-pictogram.png"
                      alt=""
                    />
                  </picture>
                </div>

                <div className="row expanded align-middle medium-collapse">
                  <div className="xxlarge-8 xxlarge-offset-5 xlarge-offset-5 large-9 large-offset-4 medium-10 medium-offset-4 small-14 small-offset-1 columns">
                    <div className="header-text">
                      <h1>Our nature is effortless technology.</h1>
                      <h2>We make things run as smooth as nature.</h2>
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
                      <a
                        href="https://plus.google.com/+AFFINITYLisboa"
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
              </div>

              {/* <div className="mouse-icon">
				<span className="scroll-helper">Scroll</span>
			    <span className="wheel"></span>
			</div>*/}
            </header>

            <main className="page-content" role="main">
              <div className="vertical-menu-wrapper">
                <ul>
                  {/* <li data-target="affinity-brands">Affinity Brands<span className="container-height"></span></li>*/}
                  {/* <li data-target="clients">Clients<span className="container-height"></span></li>*/}
                  <li data-target="social-responsability-section">
                    Social Responsability
                    <span className="container-height"></span>
                  </li>
                  <li data-target="ceo-message">
                    CEO Message<span className="container-height"></span>
                  </li>
                  <li data-target="team">
                    Our Team<span className="container-height"></span>
                  </li>
                  <li data-target="affinity-timeline">
                    Our History<span className="container-height"></span>
                  </li>
                  <li data-target="about">
                    Who are we<span className="container-height"></span>
                  </li>
                </ul>
              </div>
              {/*.vertical-menu-wrapper*/}
              <section className="we-do">
                <div className="hero-text row text-center align-center small-collapse">
                  <div className="xxlarge-9 medium-12 small-14 columns">
                    <h3 className="js-bigText-element">
                      Affinity is a consulting company specialised in Technology
                      and Information Systems. Or in Human Relationships. It
                      depends on who you ask.
                      <span className="color-purple"></span>
                    </h3>
                  </div>
                </div>
              </section>
              {/*we-do*/}

              <section className="about image-blocks js-height">
                <div
                  className="letter-wrapper morphing-letter hide-mob"
                  data-morphpath="M503.35,441.778 c245.134-57.651,156.38-488.477-252-385c-304.931,77.264-293.9,575.217-63,603C437.912,689.805,301.148,489.333,503.35,441.778z"
                >
                  <div className="clip-letter">
                    <img src="../imgs/home/about-letter.jpg" alt="" />
                  </div>
                  <svg viewBox="0 0 667.699 702.557">
                    <defs>
                      <clipPath id="letter-clip">
                        <path
                          className="letter main-letter"
                          fill="#006CFF"
                          stroke="none"
                          d="M515.016,464.746 c245.133-57.651,141.312-531.97-267.068-428.493c-304.931,77.264-281.577,613.863-50.677,641.646 C446.834,707.926,312.814,512.301,515.016,464.746z"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <img
                    className="alt-image"
                    src="../imgs/home/about-letter-alt.jpg"
                    alt=""
                  />
                </div>
                <div className="letter-wrapper show-mob">
                  <img
                    src="../imgs/home/about-letter-alt.jpg"
                    alt=""
                  />
                </div>
                <div className="row expanded question-row">
                  <div className="question-wrapper xxlarge-5 xxlarge-offset-2 medium-6 medium-offset-1 small-8 xsmall-14 background-lightGray">
                    <h3>We develop powerful professional relationships.</h3>
                    <h2>How?</h2>
                  </div>
                </div>
                <div className="row expanded image-wrapper">
                  <div className="xxlarge-13 xxlarge-offset-3 small-16 small-offset-0">
                    <picture>
                      <img
                        src="../uploads/2020/04/DSC_1165.jpg"
                        alt=""
                      />
                    </picture>
                  </div>
                </div>
                <div className="row expanded answer-wrapper">
                  <div className="xxlarge-6 xxlarge-offset-8 medium-offset-9 small-8 small-offset-7 xsmall-14 xsmall-offset-1 answer-wrapper-text">
                    <h3>
                      All decisions are guided by our core company values:
                    </h3>
                    <h4>Affinity. Ambition. Action. Apprenticeship.</h4>
                  </div>
                </div>
              </section>
              {/*about*/}

              <section className="to-section">
                <div className="row expanded align-center">
                  <div className="xxlarge-10 medium-12 small-14 columns pos-rel">
                    <div className="row expanded xxlarge-up-3 medium-up-2 xsmall-up-1">
                      <div className="columns pos-rel values">
                        <svg viewBox="0 0 9 8.5">
                          <path d="M.02 4.61C.27 8 2.3 8.5 5.02 8.5s4-1.9 4-4.25S7.74 0 5.02 0C2.08 0-.25.98.02 4.61z" />
                        </svg>
                        <h3>To us.</h3>
                        <p>
                          ​We are moved by Affinity. We are people-focused IT
                          specialists committed to build strong, prosperous,
                          long-lasting relationships.{" "}
                          <span className="color-purple">
                            We believe in never-ending progress.
                          </span>
                        </p>
                      </div>
                      <div className="columns pos-rel values">
                        <svg viewBox="0 0 9 8.5">
                          <path d="M.02 4.61C.27 8 2.3 8.5 5.02 8.5s4-1.9 4-4.25S7.74 0 5.02 0C2.08 0-.25.98.02 4.61z" />
                        </svg>
                        <h3>To the Affinity Players.</h3>
                        <p>
                          ​We refuse to be just another mark on someone's CV.
                          Our aim is to provide our employees with great career
                          opportunities, professional growth, and fulfillment.{" "}
                          <span className="color-purple">
                            We call it a lifetime experience.
                          </span>
                        </p>
                      </div>
                      <div className="columns pos-rel values">
                        <svg viewBox="0 0 9 8.5">
                          <path d="M.02 4.61C.27 8 2.3 8.5 5.02 8.5s4-1.9 4-4.25S7.74 0 5.02 0C2.08 0-.25.98.02 4.61z" />
                        </svg>
                        <h3>To those who share our DNA.</h3>
                        <p>
                          ​We listen, we adjust, we deliver. We don’t really
                          believe in working models. We believe in models of
                          partnership optimization.{" "}
                          <span className="color-purple">
                            Nobody wins unless everybody wins.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* to-section*/}

              <section className="place-images">
                <svg viewBox="0 0 737 628">
                  <path
                    fill="none"
                    stroke="#006CFF"
                    strokeWidth="43.083"
                    strokeMiterlimit="10"
                    d="M712.287 505.453c20.438 205.087-222.192 18.76-353.367 18.76-131.173 0-329.07 151.154-329.07-3.06 0-183.157 197.666-496.506 328.84-496.506s334.457 288.74 353.597 480.806z"
                  />
                </svg>
                <div className="row align-center">
                  <div className="xxlarge-14">
                    <div className="row expanded">
                      <div className="xxlarge-8 small-16 columns">
                        <div className="top-left-image">
                          <div
                            className="block-bg-cover js-parallax-image"
                            data-friction=".6"
                          >
                            <picture>
                              <img
                                className="element-cover"
                                src="../uploads/2020/04/caneca-1500x998.jpg"
                                alt=""
                              />
                            </picture>
                          </div>
                        </div>
                        <div className="bottom-left-image">
                          <div
                            className="block-bg-cover js-parallax-image"
                            data-friction=".3"
                          >
                            <picture>
                              <img
                                className="element-cover"
                                src="../uploads/2020/03/tirar-fios-da-mesa-2-1500x998.jpg"
                                alt=""
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                      <div className="xxlarge-8 small-16 columns">
                        <div className="top-right-image">
                          <div
                            className="block-bg-cover js-parallax-image"
                            data-friction="1"
                          >
                            <picture>
                              <img
                                className="element-cover"
                                src="../uploads/2020/04/affinity-office4.jpg"
                                alt=""
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* place-images*/}

              <section className="affinity-timeline js-height">
                <div className="row expanded">
                  <div className="xxlarge-6 xxlarge-offset-3 medium-5 medium-offset-1 xsmall-12 columns meta-title-wrapper">
                    <div
                      className="morphing-letter"
                      data-morphpath="M1.18,145.64C20.32,16,203.48-3.7,409.11,1,609,5.63,800,30.45,800,125.92c0,120.28-115.23,188-149,272.08-77.89,194-66.44,351.59-235.92,351.59S241.79,565.47,153,394C103.89,299.14-14.38,251.08,1.18,145.64Z"
                    >
                      <svg viewBox="0 0 800 750">
                        <defs>
                          <mask
                            id="timelineMask"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="800"
                            height="750"
                          >
                            <filter id="timelineFilter" x="0" y="0">
                              <feGaussianBlur
                                in="SourceGraphic"
                                stdDeviation="10"
                              />
                              <feOffset dx="10" dy="20" />
                              <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                              </feMerge>
                            </filter>
                            <path
                              className="mask"
                              fill="white"
                              d="M1.18,145.64C20.32,16,203.48-3.7,409.11,1,609,5.63,800,30.45,800,125.92c0,120.28-140.81,177.15-174.57,261.22-77.9,194-40.87,362.45-210.35,362.45S266,558.61,177.21,387.14C128.1,292.28-14.38,251.08,1.18,145.64Z"
                            />
                          </mask>

                          <text
                            id="timelineText"
                            x="670"
                            y="348"
                            fontSize="100"
                            letterSpacing="-4px"
                            fontWeight="bold"
                            textAnchor="middle"
                          >
                            Affinity Timeline
                          </text>
                        </defs>

                        <path
                          className="letter shadow-letter"
                          filter="url(#timelineFilter)"
                          fill="rgba(191, 0, 0, .5)"
                          d="M1.18,145.64C20.32,16,203.48-3.7,409.11,1,609,5.63,800,30.45,800,125.92c0,120.28-140.81,177.15-174.57,261.22-77.9,194-40.87,362.45-210.35,362.45S266,558.61,177.21,387.14C128.1,292.28-14.38,251.08,1.18,145.64Z"
                        />
                        <path
                          className="letter main-letter"
                          fill="#006cfc"
                          d="M1.18,145.64C20.32,16,203.48-3.7,409.11,1,609,5.63,800,30.45,800,125.92c0,120.28-140.81,177.15-174.57,261.22-77.9,194-40.87,362.45-210.35,362.45S266,558.61,177.21,387.14C128.1,292.28-14.38,251.08,1.18,145.64Z"
                        />

                        <use href="#timelineText" fill="#006cfc" />
                        <use
                          href="#timelineText"
                          fill="white"
                          mask="url(#timelineMask)"
                        />
                      </svg>

                      <h3 className="subtitle js-text-element">
                        We take pride of our solid growth year after year.
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="affinity-timeline-wrapper">
                  <svg id="svg" viewBox="0 0 900 200">
                    <polyline points="" />
                  </svg>
                  <ul className="timeline-items">
                    <li className="item">
                      <div className="image">
                        <figure className="block-bg-cover">
                          <img
                            className="element-cover"
                            src="../uploads/2020/04/DSC_2689.jpg"
                            alt="Image"
                          />
                        </figure>
                      </div>
                      <span className="date">2012</span>
                      <span className="point"></span>
                      <ul>
                        <li>
                          <span className="label">Players</span>
                          <span className="value">17</span>
                        </li>
                        <li>
                          <span className="label">Partners</span>
                          <span className="value">9</span>
                        </li>
                        <li>
                          <span className="label">Revenue</span>
                          <span className="value">80k€</span>
                        </li>
                        <li>
                          <span className="label">New Office</span>
                          <span className="value">Lisbon</span>
                        </li>
                      </ul>
                    </li>
                    <li className="item">
                      <div className="image"></div>
                      <span className="date">2013</span>
                      <span className="point"></span>
                      <ul>
                        <li>
                          <span className="label">Players</span>
                          <span className="value">67</span>
                        </li>
                        <li>
                          <span className="label">Partners</span>
                          <span className="value">23</span>
                        </li>
                        <li>
                          <span className="label">Revenue</span>
                          <span className="value">1.5M€</span>
                        </li>
                      </ul>
                    </li>
                    <li className="item">
                      <div className="image"></div>
                      <span className="date">2014</span>
                      <span className="point"></span>
                      <ul>
                        <li>
                          <span className="label">Players</span>
                          <span className="value">110</span>
                        </li>
                        <li>
                          <span className="label">Partners</span>
                          <span className="value">50</span>
                        </li>
                        <li>
                          <span className="label">Revenue</span>
                          <span className="value">3M€</span>
                        </li>
                      </ul>
                    </li>
                    <li className="item">
                      <div className="image">
                        <figure className="block-bg-cover">
                          <img
                            className="element-cover"
                            src="../uploads/2020/03/tirar-fios-da-mesa-2.jpg"
                            alt="Image"
                          />
                        </figure>
                      </div>
                      <span className="date">2015</span>
                      <span className="point"></span>
                      <ul>
                        <li>
                          <span className="label">Players</span>
                          <span className="value">160</span>
                        </li>
                        <li>
                          <span className="label">Partners</span>
                          <span className="value">80</span>
                        </li>
                        <li>
                          <span className="label">Revenue</span>
                          <span className="value">4.5M€</span>
                        </li>
                      </ul>
                    </li>
                    <li className="item">
                      <div className="image">
                        <figure className="block-bg-cover">
                          <img
                            className="element-cover"
                            src="../uploads/2020/05/DSC_2218.jpg"
                            alt="Image"
                          />
                        </figure>
                      </div>
                      <span className="date">2016</span>
                      <span className="point"></span>
                      <ul>
                        <li>
                          <span className="label">Players</span>
                          <span className="value">190</span>
                        </li>
                        <li>
                          <span className="label">Partners</span>
                          <span className="value">80</span>
                        </li>
                        <li>
                          <span className="label">Revenue</span>
                          <span className="value">5.1M€</span>
                        </li>
                        <li>
                          <span className="label">New Office</span>
                          <span className="value">Oporto</span>
                        </li>
                      </ul>
                    </li>
                    <li className="item">
                      <div className="image"></div>
                      <span className="date">2017</span>
                      <span className="point"></span>
                      <ul>
                        <li>
                          <span className="label">Players</span>
                          <span className="value">210</span>
                        </li>
                        <li>
                          <span className="label">Partners</span>
                          <span className="value">90</span>
                        </li>
                        <li>
                          <span className="label">Revenue</span>
                          <span className="value">6.5M€</span>
                        </li>
                      </ul>
                    </li>
                    <li className="item">
                      <div className="image"></div>
                      <span className="date">2018</span>
                      <span className="point"></span>
                      <ul>
                        <li>
                          <span className="label">Players</span>
                          <span className="value">280</span>
                        </li>
                        <li>
                          <span className="label">Partners</span>
                          <span className="value">100</span>
                        </li>
                        <li>
                          <span className="label">Revenue</span>
                          <span className="value">8.1M€</span>
                        </li>
                      </ul>
                    </li>
                    <li className="item">
                      <div className="image">
                        <figure className="block-bg-cover">
                          <img
                            className="element-cover"
                            src="../uploads/2020/05/Tech-Hub-1.jpeg"
                            alt="Image"
                          />
                        </figure>
                      </div>
                      <span className="date">2019</span>
                      <span className="point"></span>
                      <ul>
                        <li>
                          <span className="label">Players</span>
                          <span className="value">285</span>
                        </li>
                        <li>
                          <span className="label">Partners</span>
                          <span className="value">135</span>
                        </li>
                        <li>
                          <span className="label">Revenue</span>
                          <span className="value">11M€</span>
                        </li>
                        <li>
                          <span className="label">New Tech Hub</span>
                          <span className="value">Óbidos</span>
                        </li>
                      </ul>
                    </li>
                    <li className="item">
                      <div className="image"></div>
                      <span className="date">2020</span>
                      <span className="point"></span>
                      <ul>
                        <li>
                          <span className="label">Players</span>
                          <span className="value">305</span>
                        </li>
                        <li>
                          <span className="label">Partners</span>
                          <span className="value">105</span>
                        </li>
                        <li>
                          <span className="label">Revenue</span>
                          <span className="value">11.5M€</span>
                        </li>
                      </ul>
                    </li>
                    <li className="item">
                      <div className="image"></div>
                      <span className="date">2021</span>
                      <span className="point"></span>
                      <ul>
                        <li>
                          <span className="label">Players</span>
                          <span className="value">370</span>
                        </li>
                        <li>
                          <span className="label">Partners</span>
                          <span className="value">125</span>
                        </li>
                        <li>
                          <span className="label">Revenue</span>
                          <span className="value">14.5M€</span>
                        </li>
                      </ul>
                    </li>
                    <li className="item">
                      <div className="image">
                        <figure className="block-bg-cover">
                          <img
                            className="element-cover"
                            src="../uploads/2023/01/7.png"
                            alt="Image"
                          />
                        </figure>
                      </div>
                      <span className="date">2022</span>
                      <span className="point"></span>
                      <ul>
                        <li>
                          <span className="label">Players</span>
                          <span className="value">380</span>
                        </li>
                        <li>
                          <span className="label">Partners</span>
                          <span className="value">135</span>
                        </li>
                        <li>
                          <span className="label">Revenue</span>
                          <span className="value">16.5M€</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="timeline-helper">
                  <svg viewBox="0 0 24.77 9.43">
                    <path d="M20.35 9.08L24 5.48A1.07 1.07 0 0024 4L20.35.35M4.42 9.08L.81 5.48A1.09 1.09 0 01.81 4L4.42.35" />
                  </svg>
                  <span>
                    Click
                    <br />
                    and drag
                  </span>
                  <span className="background"></span>
                </div>
              </section>

              <section className="full-hashtag">
                <div className="background-hashtag text-center">
                  <h3 className="js-write-text">Our vision.</h3>
                </div>
                <div className="row expanded align-center text-center">
                  <div className="xxlarge-8 medium-12 small-14 columns">
                    <h2 className="js-text-element">
                      Great technology is always based on perfect relationships.
                    </h2>
                  </div>
                </div>
              </section>
              {/* full-hashtag*/}

              <section className="team js-height">
                <div className="row expanded">
                  <div className="xxlarge-4 xxlarge-offset-3 medium-6 medium-offset-1 xsmall-14 columns meta-title-wrapper">
                    <div
                      className="morphing-letter"
                      data-morphpath="M687.4,373.7c167.7,147.4,15.8,313.9-190.2,327.1C291.2,714,64.4,574.5,53,397.5 C39.3,184.2,247.7,35.9,454.1,30c132.9-3.8,203.1,85.1,221.4,130.4C716,260.3,644.9,336.3,687.4,373.7z"
                    >
                      <svg viewBox="0 0 800 750">
                        <defs>
                          <mask
                            id="teamMask"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="800"
                            height="750"
                          >
                            <filter id="teamFilter" x="0" y="0">
                              <feGaussianBlur
                                in="SourceGraphic"
                                stdDeviation="10"
                              />
                              <feOffset dx="10" dy="20" />
                              <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                              </feMerge>
                            </filter>
                            <path
                              className="mask"
                              fill="white"
                              d="M666.6,392c158,157.8-4.3,304.3-210.8,304.3S82,552.5,82,375.2C82,161.4,249.5,46.7,455.8,54.1 c132.9,4.7,197.2,78,212.6,124.4C702.4,280.8,596.4,321.9,666.6,392z"
                            />
                          </mask>

                          <text
                            id="teamText"
                            x="720"
                            y="348"
                            fontSize="100"
                            letterSpacing="-4px"
                            fontWeight="bold"
                            textAnchor="middle"
                          >
                            Meet the team.{" "}
                          </text>
                        </defs>

                        <path
                          className="letter shadow-letter"
                          filter="url(#teamFilter)"
                          fill="rgba(191, 0, 0, .5)"
                          d="M666.6,392c158,157.8-4.3,304.3-210.8,304.3S82,552.5,82,375.2C82,161.4,249.5,46.7,455.8,54.1 c132.9,4.7,197.2,78,212.6,124.4C702.4,280.8,596.4,321.9,666.6,392z"
                        />
                        <path
                          className="letter main-letter"
                          fill="#006cfc"
                          d="M666.6,392c158,157.8-4.3,304.3-210.8,304.3S82,552.5,82,375.2C82,161.4,249.5,46.7,455.8,54.1 c132.9,4.7,197.2,78,212.6,124.4C702.4,280.8,596.4,321.9,666.6,392z"
                        />

                        <use href="#teamText" fill="#006cfc" />
                        <use
                          href="#teamText"
                          fill="white"
                          mask="url(#teamMask)"
                        />
                      </svg>

                      <h3 className="subtitle js-text-element">
                        We work as a team. We are made of intend, competence and
                        ambition and we are driven by the will to exceed
                        expectations and guarantee everybody's success.
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="row expanded">
                  <div className="xxlarge-12 xxlarge-offset-2 small-14 small-offset-1 columns">
                    <article className="persons-container">
                      <div className="row expanded xxlarge-up-3 medium-up-2 xsmall-up-1">
                        <div className="columns">
                          <div className="team-person-container">
                            <div className="block-bg-cover color-photo">
                              <picture>
                                <img
                                  className="element-cover"
                                  src="../uploads/2017/11/team-6-over.jpg"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <div className="block-bg-cover black-photo">
                              <picture>
                                <img
                                  className="element-cover"
                                  src="../uploads/2017/11/team-6.jpg"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="689.712"
                              height="685.06"
                              viewBox="0 0 689.712 685.06"
                            >
                              <path
                                fill="none"
                                stroke="#006CFF"
                                strokeWidth="43.083"
                                strokeMiterlimit="10"
                                d="M604.874,359.519	c157.646,157.647-4.33,304-210.332,304s-373-143.637-373-320.823c0-213.562,167.128-328.153,373-320.823	c132.574,4.722,196.792,77.895,212.17,124.248C640.629,248.36,534.852,289.498,604.874,359.519z"
                              />
                            </svg>{" "}
                            <div className="team-info">
                              <h2>Carlos Correia</h2>
                              <h3>Partner & CEO</h3>
                            </div>
                          </div>
                        </div>
                        <div className="columns">
                          <div className="team-person-container">
                            <div className="block-bg-cover color-photo">
                              <picture>
                                <img
                                  className="element-cover"
                                  src="../uploads/2023/01/team-10-over2.jpg"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <div className="block-bg-cover black-photo">
                              <picture>
                                <img
                                  className="element-cover"
                                  src="../uploads/2023/01/team-10-2.jpg"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="689.712"
                              height="685.06"
                              viewBox="0 0 689.712 685.06"
                            >
                              <path
                                fill="none"
                                stroke="#006CFF"
                                strokeWidth="43.083"
                                strokeMiterlimit="10"
                                d="M604.874,359.519	c157.646,157.647-4.33,304-210.332,304s-373-143.637-373-320.823c0-213.562,167.128-328.153,373-320.823	c132.574,4.722,196.792,77.895,212.17,124.248C640.629,248.36,534.852,289.498,604.874,359.519z"
                              />
                            </svg>{" "}
                            <div className="team-info">
                              <h2>Cristiana Vicente</h2>
                              <h3>Chief People Officer</h3>
                            </div>
                          </div>
                        </div>
                        <div className="columns">
                          <div className="team-person-container">
                            <div className="block-bg-cover color-photo">
                              <picture>
                                <img
                                  className="element-cover"
                                  src="../uploads/2020/06/team-11-over-2.jpg"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <div className="block-bg-cover black-photo">
                              <picture>
                                <img
                                  className="element-cover"
                                  src="../uploads/2020/06/team-11.jpg"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="737"
                              height="628"
                              viewBox="0 0 511.6 678"
                            >
                              <path
                                fill="none"
                                stroke="#006CFF"
                                strokeWidth="43.083"
                                strokeMiterlimit="10"
                                d="M457.2,95.1c-29.5-51.6-82.6-73.6-177.5-73.6c-53.2,0-93.2,4-125.8,12.4c-36,9.4-63.4,24.6-83.7,46.5
	c-24.3,26.3-38.6,61.7-44.8,111.5c-5.3,42.5-5,96.2,1.1,173.9c9.5,121.4,16.5,192.2,50.3,235.7c17.6,22.6,41.8,37,76.2,45.1
	c28.7,6.8,65.4,9.7,122.6,9.7c51.2,0,89-5.9,118.8-18.5c30.9-13.1,53.1-33.7,68-62.9c26.5-52.2,27.8-126.4,27.8-243
	C490.1,215.7,484.8,143.5,457.2,95.1z"
                              />
                            </svg>{" "}
                            <div className="team-info">
                              <h2>Inês Santos</h2>
                              <h3>Chief Marketing Officer</h3>
                            </div>
                          </div>
                        </div>
                        <div className="columns">
                          <div className="team-person-container">
                            <div className="block-bg-cover color-photo">
                              <picture>
                                <img
                                  className="element-cover"
                                  src="../uploads/2023/01/team-7-3.jpg"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <div className="block-bg-cover black-photo">
                              <picture>
                                <img
                                  className="element-cover"
                                  src="../uploads/2023/01/team-7-over-1.jpg"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="689.712"
                              height="685.06"
                              viewBox="0 0 689.712 685.06"
                            >
                              <path
                                fill="none"
                                stroke="#006CFF"
                                strokeWidth="43.083"
                                strokeMiterlimit="10"
                                d="M604.874,359.519	c157.646,157.647-4.33,304-210.332,304s-373-143.637-373-320.823c0-213.562,167.128-328.153,373-320.823	c132.574,4.722,196.792,77.895,212.17,124.248C640.629,248.36,534.852,289.498,604.874,359.519z"
                              />
                            </svg>{" "}
                            <div className="team-info">
                              <h2>Carolina Simões</h2>
                              <h3>Corporate & Culture Manager</h3>
                            </div>
                          </div>
                        </div>
                        <div className="columns">
                          <div className="team-person-container">
                            <div className="block-bg-cover color-photo">
                              <picture>
                                <img
                                  className="element-cover"
                                  src="../uploads/2017/11/team-8-over.jpg"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <div className="block-bg-cover black-photo">
                              <picture>
                                <img
                                  className="element-cover"
                                  src="../uploads/2017/11/team-8.jpg"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="743.119"
                              height="641.621"
                              viewBox="0 0 743.119 641.621"
                            >
                              <path
                                fill="none"
                                stroke="#006CFF"
                                strokeWidth="43.083"
                                strokeMiterlimit="10"
                                d="M319.762,564.834	c70.799,74.334,119.083-37.74,170.56-21.399c55.241,17.535,84.743,64.198,140.523,64.198c154.469,0,75.089-418.978,27.789-510.908	c-87.387-169.843-207.695-2.636-277.422,24.354c-72.787,28.173-180.199-139.267-269.933-45.052	c-63.1,66.252-163.907,505.01-3.493,541.665C201.766,639.168,264.798,507.125,319.762,564.834z"
                              />
                            </svg>{" "}
                            <div className="team-info">
                              <h2>Mafalda Inverno</h2>
                              <h3>Learning & Career Manager</h3>
                            </div>
                          </div>
                        </div>
                        <div className="columns">
                          <div className="team-person-container">
                            <div className="block-bg-cover color-photo">
                              <picture>
                                <img
                                  className="element-cover"
                                  src="../uploads/2023/06/team-15-over.jpg"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <div className="block-bg-cover black-photo">
                              <picture>
                                <img
                                  className="element-cover"
                                  src="../uploads/2023/06/team-15.jpg"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="689.712"
                              height="685.06"
                              viewBox="0 0 689.712 685.06"
                            >
                              <path
                                fill="none"
                                stroke="#006CFF"
                                strokeWidth="43.083"
                                strokeMiterlimit="10"
                                d="M604.874,359.519	c157.646,157.647-4.33,304-210.332,304s-373-143.637-373-320.823c0-213.562,167.128-328.153,373-320.823	c132.574,4.722,196.792,77.895,212.17,124.248C640.629,248.36,534.852,289.498,604.874,359.519z"
                              />
                            </svg>{" "}
                            <div className="team-info">
                              <h2>Catarina Santos</h2>
                              <h3>Office Manager</h3>
                            </div>
                          </div>
                        </div>
                        <div className="columns">
                          <div className="team-person-container">
                            <div className="block-bg-cover color-photo">
                              <picture>
                                <img
                                  className="element-cover"
                                  src="../uploads/2017/11/team-10-over.jpg"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <div className="block-bg-cover black-photo">
                              <picture>
                                <img
                                  className="element-cover"
                                  src="../uploads/2017/11/team-10.jpg"
                                  alt=""
                                />
                              </picture>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="667.699"
                              height="702.557"
                              viewBox="0 0 667.699 702.557"
                            >
                              <path
                                fill="none"
                                stroke="#006CFF"
                                strokeWidth="43.083"
                                strokeMiterlimit="10"
                                d="M515.016,464.746	c245.133-57.651,141.312-531.97-267.068-428.493c-304.931,77.264-281.577,613.863-50.677,641.646	C446.834,707.926,312.814,512.301,515.016,464.746z"
                              />
                            </svg>{" "}
                            <div className="team-info">
                              <h2>Paulo Silva</h2>
                              <h3>Chief Financial Officer</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </section>
              {/* team*/}

              <section className="mission">
                <div className="row align-center text-center">
                  <div className="xxlarge-10 medium-12 xsmall-14 columns">
                    <h3 className="js-bigText-element">
                      We are all about cutting distance - in work, in
                      relationships and in technology. We invest everything to
                      create lifetime experiences.
                    </h3>
                  </div>
                </div>
                <div className="row align-center text-center js-parallax-phrase xsmall-collapse">
                  <div className="xxlarge-16 medium-14 columns">
                    <h2>A Lifetime Experience.</h2>
                  </div>
                </div>
              </section>
              {/*mission*/}

              {/* <section className="clients">
          				<div className="clients-wrapper">
  					<article>
  						<ul className="row xxlarge-12 xxlarge-up-3 small-up-2 medium-14 small-12 xsmall-14 xsmall-up-1 clients-list">
  							  							<li className="column">
  						  	<div className="logo-wrapper">
  					    		<img className="normal" src="https://affinity.pt/uploads/2018/10/santander.png" alt="">
  					    		<img className="hover" src="https://affinity.pt/uploads/2018/10/santander_gray.png" alt="">
  						 		</div>
  						 	</li>
  							  							<li className="column">
  						  	<div className="logo-wrapper">
  					    		<img className="normal" src="https://affinity.pt/uploads/2017/09/accenture.png" alt="">
  					    		<img className="hover" src="https://affinity.pt/uploads/2017/09/accenture_grey.png" alt="">
  						 		</div>
  						 	</li>
  							  							<li className="column">
  						  	<div className="logo-wrapper">
  					    		<img className="normal" src="https://affinity.pt/uploads/2017/09/sibs.png" alt="">
  					    		<img className="hover" src="https://affinity.pt/uploads/2017/09/sibs_grey.png" alt="">
  						 		</div>
  						 	</li>
  							  							<li className="column">
  						  	<div className="logo-wrapper">
  					    		<img className="normal" src="https://affinity.pt/uploads/2017/09/nyse_euronext.png" alt="">
  					    		<img className="hover" src="https://affinity.pt/uploads/2017/09/nyse_euronex_grey.png" alt="">
  						 		</div>
  						 	</li>
  							  							<li className="column">
  						  	<div className="logo-wrapper">
  					    		<img className="normal" src="https://affinity.pt/uploads/2017/09/sonae.png" alt="">
  					    		<img className="hover" src="https://affinity.pt/uploads/2017/09/sonae_grey.png" alt="">
  						 		</div>
  						 	</li>
  							  							<li className="column">
  						  	<div className="logo-wrapper">
  					    		<img className="normal" src="https://affinity.pt/uploads/2017/09/tap.png" alt="">
  					    		<img className="hover" src="https://affinity.pt/uploads/2017/09/tap_grey.png" alt="">
  						 		</div>
  						 	</li>
  							  							<li className="column">
  						  	<div className="logo-wrapper">
  					    		<img className="normal" src="https://affinity.pt/uploads/2017/09/meo.png" alt="">
  					    		<img className="hover" src="https://affinity.pt/uploads/2017/09/meo_grey.png" alt="">
  						 		</div>
  						 	</li>
  							  							<li className="column">
  						  	<div className="logo-wrapper">
  					    		<img className="normal" src="https://affinity.pt/uploads/2017/09/edp.png" alt="">
  					    		<img className="hover" src="https://affinity.pt/uploads/2017/09/edp_grey.png" alt="">
  						 		</div>
  						 	</li>
  							  							<li className="column">
  						  	<div className="logo-wrapper">
  					    		<img className="normal" src="https://affinity.pt/uploads/2017/09/nos.png" alt="">
  					    		<img className="hover" src="https://affinity.pt/uploads/2017/09/nos_grey.png" alt="">
  						 		</div>
  						 	</li>
  							  						</ul>
  					</article>
  					<article>
  						<ul className="row xxlarge-12 xxlarge-up-3 small-up-2 medium-14 small-12 xsmall-14 xsmall-up-1 clients-list">
  							  							<li className="column">
  						  	<div className="logo-wrapper">
  					    		<img className="normal" src="https://affinity.pt/uploads/2017/09/cgd_color.png" alt="">
  					    		<img className="hover" src="https://affinity.pt/uploads/2017/09/cgd_grey.png" alt="">
  						 		</div>
  						 	</li>
  							  							<li className="column">
  						  	<div className="logo-wrapper">
  					    		<img className="normal" src="https://affinity.pt/uploads/2017/09/portucel_color.png" alt="">
  					    		<img className="hover" src="https://affinity.pt/uploads/2017/09/portucel_grey.png" alt="">
  						 		</div>
  						 	</li>
  							  							<li className="column">
  						  	<div className="logo-wrapper">
  					    		<img className="normal" src="https://affinity.pt/uploads/2017/09/mota-engil-color.png" alt="">
  					    		<img className="hover" src="https://affinity.pt/uploads/2017/09/mota-engil-grey.png" alt="">
  						 		</div>
  						 	</li>
  							  							<li className="column">
  						  	<div className="logo-wrapper">
  					    		<img className="normal" src="https://affinity.pt/uploads/2018/02/natixis.png" alt="">
  					    		<img className="hover" src="https://affinity.pt/uploads/2018/02/natixis_grey.png" alt="">
  						 		</div>
  						 	</li>
  							  							<li className="column">
  						  	<div className="logo-wrapper">
  					    		<img className="normal" src="https://affinity.pt/uploads/2018/02/outsystems.png" alt="">
  					    		<img className="hover" src="https://affinity.pt/uploads/2018/02/outsystems_grey.png" alt="">
  						 		</div>
  						 	</li>
  							  							<li className="column">
  						  	<div className="logo-wrapper">
  					    		<img className="normal" src="https://affinity.pt/uploads/2018/02/ageas.png" alt="">
  					    		<img className="hover" src="https://affinity.pt/uploads/2018/02/ageas_grey.png" alt="">
  						 		</div>
  						 	</li>
  							  							<li className="column">
  						  	<div className="logo-wrapper">
  					    		<img className="normal" src="https://affinity.pt/uploads/2018/02/banco_brasil.png" alt="">
  					    		<img className="hover" src="https://affinity.pt/uploads/2018/02/banco_brasil_grey.png" alt="">
  						 		</div>
  						 	</li>
  							  							<li className="column">
  						  	<div className="logo-wrapper">
  					    		<img className="normal" src="https://affinity.pt/uploads/2018/02/netjets.png" alt="">
  					    		<img className="hover" src="https://affinity.pt/uploads/2018/02/netjets_grey.png" alt="">
  						 		</div>
  						 	</li>
  							  						</ul>
  					</article>
  				</div>
        				<svg viewBox="0 0 719.18 717.5" className="blob blob-right" data-direction="right">
					<path d="M1.27 338.07C12.86 51.72 60.33 8.05 290.37.28S712.31 146.62 719 344.5 544.61 708.75 314.58 716.87c-248.76 8.77-325.74-71.7-313.31-378.8z" data-original="M1.27 338.07C12.86 51.72 60.33 8.05 290.37.28S712.31 146.62 719 344.5 544.61 708.75 314.58 716.87c-248.76 8.77-325.74-71.7-313.31-378.8z"/>
				</svg>
				<svg viewBox="0 0 719.18 717.5" className="blob blob-left" data-direction="left">
					<path d="M1.27 338.07C12.86 51.72 60.33 8.05 290.37.28S712.31 146.62 719 344.5 544.61 708.75 314.58 716.87c-248.76 8.77-325.74-71.7-313.31-378.8z" data-original="M1.27 338.07C12.86 51.72 60.33 8.05 290.37.28S712.31 146.62 719 344.5 544.61 708.75 314.58 716.87c-248.76 8.77-325.74-71.7-313.31-378.8z"/>
				</svg>
				<div className="drag-helper">
                      <h4>Drag</h4>
          					<svg viewBox="0 0 124.51 8.51"><path d="M124.51 3.51H6.86A6.36 6.36 0 0 0 8.33 0C6.17 2.12 3.38 3.22 0 4.25a20.4 20.4 0 0 1 8.33 4.26 7.36 7.36 0 0 0-1.5-3.61h117.68z" fill="#7c3d3d" fill-rule="evenodd"/></svg>
				</div>

				<div className="drag-helper drag-left">
                      <h4>Drag</h4>
          					<svg viewBox="0 0 124.51 8.51"><path d="M124.51 3.51H6.86A6.36 6.36 0 0 0 8.33 0C6.17 2.12 3.38 3.22 0 4.25a20.4 20.4 0 0 1 8.33 4.26 7.36 7.36 0 0 0-1.5-3.61h117.68z" fill="#7c3d3d" fill-rule="evenodd"/></svg>
				</div>
			</section>clients*/}

              <section className="ceo-message js-height">
                <div
                  className="morphing-letter"
                  data-morphpath="M687.4,373.7c167.7,147.4,15.8,313.9-190.2,327.1C291.2,714,64.4,574.5,53,397.5 C39.3,184.2,247.7,35.9,454.1,30c132.9-3.8,203.1,85.1,221.4,130.4C716,260.3,644.9,336.3,687.4,373.7z"
                >
                  <svg viewBox="0 0 800 750">
                    <defs>
                      <mask
                        id="ceoMask"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="800"
                        height="750"
                      >
                        <filter id="ceoFilter" x="0" y="0">
                          <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="10"
                          />
                          <feOffset dx="10" dy="20" />
                          <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                        <path
                          className="mask"
                          fill="white"
                          d="M666.6,392c158,157.8-4.3,304.3-210.8,304.3S82,552.5,82,375.2C82,161.4,249.5,46.7,455.8,54.1 c132.9,4.7,197.2,78,212.6,124.4C702.4,280.8,596.4,321.9,666.6,392z"
                        />
                      </mask>

                      <text
                        id="ceoTextEN"
                        className="show-en"
                        x="595"
                        y="348"
                        fontSize="100"
                        letterSpacing="-4px"
                        fontWeight="bold"
                        textAnchor="middle"
                      >
                        CEO Message
                      </text>

                      <text
                        id="ceoTextPT"
                        className="show-pt"
                        x="720"
                        y="348"
                        fontSize="100"
                        letterSpacing="-4px"
                        fontWeight="bold"
                        textAnchor="middle"
                      >
                        Mensagem do CEO
                      </text>
                    </defs>

                    <path
                      className="letter shadow-letter"
                      filter="url(#ceoFilter)"
                      fill="rgba(191, 0, 0, .5)"
                      d="M666.6,392c158,157.8-4.3,304.3-210.8,304.3S82,552.5,82,375.2C82,161.4,249.5,46.7,455.8,54.1 c132.9,4.7,197.2,78,212.6,124.4C702.4,280.8,596.4,321.9,666.6,392z"
                    />
                    <path
                      className="letter main-letter"
                      fill="#006cfc"
                      d="M666.6,392c158,157.8-4.3,304.3-210.8,304.3S82,552.5,82,375.2C82,161.4,249.5,46.7,455.8,54.1 c132.9,4.7,197.2,78,212.6,124.4C702.4,280.8,596.4,321.9,666.6,392z"
                    />

                    <use href="#ceoTextEN" fill="#006cfc" />
                    <use href="#ceoTextEN" fill="white" mask="url(#ceoMask)" />

                    <use href="#ceoTextPT" fill="#006cfc" />
                    <use href="#ceoTextPT" fill="white" mask="url(#ceoMask)" />
                  </svg>
                  <h3 className="subtitle js-text-element">
                    Welcome to Affinity
                  </h3>
                </div>
                <div className="row expanded align-center align-bottom">
                  <div className="xxlarge-6 medium-8 small-14 columns">
                    <div className="ceo-image">
                      <div>
                        <figure className="block-bg-cover">
                          <img
                            className="element-cover"
                            src="../uploads/2020/05/carlos-photoonwebsite2.jpg"
                            alt="CEO Photography"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div className="xxlarge-6 xxlarge-offset-1 small-14 small-offset-0 columns">
                    <blockquote>
                      "We invest in technological innovation and in quality
                      experiences for all our stakeholders."
                    </blockquote>
                    <p>
                      10 years later, we continue to look to the future with
                      optimism and expectation.
                      <br />
                      <br />
                      We continue to invest in technological innovation, in new
                      working models, in a greater geographical expression in
                      Portugal, and in the creation of valuable experiences for
                      all our stakeholders.
                      <br />
                      <br />
                      We underline our ambition and reinforce our offer of IT
                      consulting services and quality Cloud products, at the
                      national and international level, promoting and developing
                      unique experiences that translate into a real commitment
                      to the creation of reciprocally prosperous relationships
                      with people, the market, society, and nature.
                      <br />
                      <br />
                      My door will always remain open to all feedback.
                      <br />
                      <br />
                      Shall we continue the experience?
                    </p>
                    <span className="ceo-name">Carlos Pais Correia</span>
                    <span className="ceo-role">CEO</span>
                  </div>
                </div>
              </section>

              <section className="social-responsability-section js-height">
                <div className="row expanded">
                  <div className="xxlarge-5 xxlarge-offset-3 medium-6 medium-offset-1 xsmall-14 columns meta-title-wrapper">
                    <div
                      className="morphing-letter"
                      data-morphpath="M593.65,604.08c40.81-48.76-41-107.25-50.64-190.62-6.07-52.6,72.77-132.61,66.44-221.92C597.28,19.82,366.37-36.24,187,22-40.32,99.19-40.51,561.81,139.15,629.48,230.86,661.17,281.32,565,359,574.07,471.16,587.18,537,671.78,593.65,604.08Z"
                    >
                      <svg viewBox="0 0 800 750">
                        <defs>
                          <mask
                            id="socialResponsabilityMask"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="800"
                            height="750"
                          >
                            <filter id="socialResponsabilityFilter" x="0" y="0">
                              <feGaussianBlur
                                in="SourceGraphic"
                                stdDeviation="10"
                              />
                              <feOffset dx="10" dy="20" />
                              <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                              </feMerge>
                            </filter>
                            <path
                              className="mask"
                              fill="white"
                              d="M593.65,604.08c40.81-48.76-17.34-115.47-27-198.84-6.07-52.61,61.65-123,55.31-212.33C609.84,21.19,366.37-36.24,187,22c-240.25,78-241,540.7-47.82,607.45C230.86,661.17,281.32,565,359,574.07,471.16,587.18,537,671.78,593.65,604.08Z"
                            />
                          </mask>

                          <text
                            id="socialResponsabilityTextEN"
                            className="show-en"
                            x="780"
                            y="348"
                            fontSize="100"
                            letterSpacing="-4px"
                            fontWeight="bold"
                            textAnchor="middle"
                          >
                            Social Responsabilility
                          </text>

                          <text
                            id="socialResponsabilityTextPT"
                            className="show-pt"
                            x="820"
                            y="348"
                            fontSize="100"
                            letterSpacing="-4px"
                            fontWeight="bold"
                            textAnchor="middle"
                          >
                            Responsabilidade Social
                          </text>
                        </defs>

                        <path
                          className="letter shadow-letter"
                          filter="url(#socialResponsabilityFilter)"
                          fill="rgba(191, 0, 0, .5)"
                          d="M593.65,604.08c40.81-48.76-17.34-115.47-27-198.84-6.07-52.61,61.65-123,55.31-212.33C609.84,21.19,366.37-36.24,187,22c-240.25,78-241,540.7-47.82,607.45C230.86,661.17,281.32,565,359,574.07,471.16,587.18,537,671.78,593.65,604.08Z"
                        />
                        <path
                          className="letter main-letter"
                          fill="#006cfc"
                          d="M593.65,604.08c40.81-48.76-17.34-115.47-27-198.84-6.07-52.61,61.65-123,55.31-212.33C609.84,21.19,366.37-36.24,187,22c-240.25,78-241,540.7-47.82,607.45C230.86,661.17,281.32,565,359,574.07,471.16,587.18,537,671.78,593.65,604.08Z"
                        />

                        <use
                          href="#socialResponsabilityTextEN"
                          fill="#006cfc"
                        />
                        <use
                          href="#socialResponsabilityTextEN"
                          fill="white"
                          mask="url(#socialResponsabilityMask)"
                        />

                        <use
                          href="#socialResponsabilityTextPT"
                          fill="#006cfc"
                        />
                        <use
                          href="#socialResponsabilityTextPT"
                          fill="white"
                          mask="url(#socialResponsabilityMask)"
                        />
                      </svg>
                      <h3 className="subtitle js-text-element">
                        Nature inspires the way we do things.
                      </h3>
                    </div>
                  </div>
                  <div className="xxlarge-5 xxlarge-offset-1 medium-6 medium-offset-2 small-9 small-offset-1 xsmall-14 pos-rel">
                    <h4>Main Areas of Action:</h4>
                    <ul className="filters" role="list">
                      <li>
                        <span className="circle purple"></span>
                        <span>Animal</span>
                      </li>
                      <li>
                        <span className="circle red"></span>
                        <span>Children</span>
                      </li>
                      <li>
                        <span className="circle green"></span>
                        <span>Environment</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="social-responsability-section-articles">
                  <div className="social-articles-wrapper">
                    <ul role="list">
                      <li className="article Environment" data-id="0">
                        <div className="block-bg-cover">
                          <picture>
                            <img
                              className="element-cover"
                              src="../uploads/2020/10/1.jpg"
                              alt="Article Image"
                            />
                          </picture>
                        </div>
                        <div className="article-content">
                          <span className="article-title">
                            Hands Dirty & Affinity in the air! (2020 & 2021)
                          </span>
                          <p>
                            We got some of Affinity volunteers together and
                            headed to an ecologically degraded area in Serra de
                            Sintra for a reforestation experience. The
                            initiative stated with the control of exotic
                            infesting species, followed by a Tree Planting
                            activity in partnership with Plantar Uma Árvore
                            Association.
                          </p>
                          <button
                            role="button"
                            aria-label="Read the full article"
                          >
                            Read More
                          </button>
                        </div>
                      </li>
                      <li className="article Environment" data-id="1">
                        <div className="block-bg-cover">
                          <picture>
                            <img
                              className="element-cover"
                              src="../uploads/2020/09/edition-praia-1.jpg"
                              alt="Article Image"
                            />
                          </picture>
                        </div>
                        <div className="article-content">
                          <span className="article-title">
                            Love for the Big Blue (2020)
                          </span>
                          <p>
                            As part of the International Coastal Cleanup Day,
                            Affinity joined Bandeira Azula and Oceano Azul
                            Foundation for a beach clean up at Costa da
                            Caparica. As summer got to an end, beaches were left
                            with waste and plastics that will end up polluting
                            our oceans. We decided to take part of the solution,
                            getting our hands into work and giving our small
                            contribution towards a cleaner ocean.
                          </p>
                          <button
                            role="button"
                            aria-label="Read the full article"
                          >
                            Read More
                          </button>
                        </div>
                      </li>
                      <li className="article Environment" data-id="2">
                        <div className="block-bg-cover">
                          <picture>
                            <img
                              className="element-cover"
                              src="../uploads/2020/06/DSC_4361-3.jpg"
                              alt="Article Image"
                            />
                          </picture>
                        </div>
                        <div className="article-content">
                          <span className="article-title">
                            Small Gestures, Big Affinity (2020)
                          </span>
                          <p>
                            The intention to preserve our environment is present
                            in every decision we make. In the week we returned
                            to our office we offered a 'welcome kit' to our
                            employees with all the COVID-19 protection taking
                            this opportunity to also make a stand of affinity
                            for the environment. Our cotton bags will carry out
                            the message!
                          </p>
                          <button
                            role="button"
                            aria-label="Read the full article"
                          >
                            Read More
                          </button>
                        </div>
                      </li>
                      <li className="article Animal" data-id="3">
                        <div className="block-bg-cover">
                          <picture>
                            <img
                              className="element-cover"
                              src="../uploads/2020/04/UPPA.jpg"
                              alt="Article Image"
                            />
                          </picture>
                        </div>
                        <div className="article-content">
                          <span className="article-title">
                            Love for Paws (2020 & 2022)
                          </span>
                          <p>
                            During the first weeks of February, Affinity
                            employees contributed with donations that could
                            bring comfort to the lives of the dogs hosted by
                            UPPA. For this initiative to be complete, on a
                            Saturday morning, not only did we deliver the
                            donations, but we spent our morning walking the dogs
                            around Sintra and sharing some beautiful and
                            enjoyable moments with them!
                          </p>
                          <button
                            role="button"
                            aria-label="Read the full article"
                          >
                            Read More
                          </button>
                        </div>
                      </li>
                      <li className="blue-block">
                        <h3>
                          We take sustainability and social responsibility in
                          consideration when evaluating our business
                          performance.
                        </h3>
                        <p>
                          We believe that real growth inevitably encompasses a
                          true understanding of the surrounding world and a
                          positive involvement on the main issues and challenges
                          happening around us.
                        </p>
                      </li>
                      <li className="article Children" data-id="5">
                        <div className="block-bg-cover">
                          <picture>
                            <img
                              className="element-cover"
                              src="../uploads/2020/04/believe-association.jpg"
                              alt="Article Image"
                            />
                          </picture>
                        </div>
                        <div className="article-content">
                          <span className="article-title">
                            Affinity is to Believe (Acreditar) (2019)
                          </span>
                          <p>
                            After being proposed to choose a Christmas gift of
                            their choice thinking on a child up to 12 years old,
                            Affinity players were turn into the Secret Santa of
                            the children from Associação Acreditar
                          </p>
                          <button
                            role="button"
                            aria-label="Read the full article"
                          >
                            Read More
                          </button>
                        </div>
                      </li>
                      <li className="article Environment" data-id="6">
                        <div className="block-bg-cover">
                          <picture>
                            <img
                              className="element-cover"
                              src="../uploads/2020/04/no-to-plastic.jpg"
                              alt="Article Image"
                            />
                          </picture>
                        </div>
                        <div className="article-content">
                          <span className="article-title">
                            Reusable Water Bottles for All (2018)
                          </span>
                          <p>
                            All Affinity employees, are welcomed to the company
                            with a kit that includes a reusable water bottle.
                            Our aim is to inspire and promote the fight against
                            plastic contamination in their professional and
                            personal lives.
                          </p>
                          <button
                            role="button"
                            aria-label="Read the full article"
                          >
                            Read More
                          </button>
                        </div>
                      </li>
                      <li className="gray-block">
                        <p>
                          We assume an active approach towards the protection of
                          our environment and our communities.
                        </p>
                        <h3>
                          Affinity is our Nature and Action is one of our core
                          values.
                        </h3>
                      </li>
                      <li className="article Children" data-id="8">
                        <div className="block-bg-cover">
                          <picture>
                            <img
                              className="element-cover"
                              src="../uploads/2020/04/berco-ajuda.jpg"
                              alt="Article Image"
                            />
                          </picture>
                        </div>
                        <div className="article-content">
                          <span className="article-title">
                            Ajuda de berço (2016)
                          </span>
                          <p>
                            Affinity players collected essential goods for the
                            babies from Ajuda de Berço, a non-profit
                            organization that protects and cares for babies and
                            young children in need.
                          </p>
                          <button
                            role="button"
                            aria-label="Read the full article"
                          >
                            Read More
                          </button>
                        </div>
                      </li>
                      <li className="article Children" data-id="9">
                        <div className="block-bg-cover">
                          <picture>
                            <img
                              className="element-cover"
                              src="../uploads/2020/04/ardina-house.jpg"
                              alt="Article Image"
                            />
                          </picture>
                        </div>
                        <div className="article-content">
                          <span className="article-title">
                            Casa do Ardina (2015)
                          </span>
                          <p>
                            Time & love are the best things we can offer one
                            another. Affinity players took some gifts and
                            essential goods to Casa do Ardina and shared their
                            love and time with the children in an evening full
                            of games & smiles.
                          </p>
                          <button
                            role="button"
                            aria-label="Read the full article"
                          >
                            Read More
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              {/* social-responsability-section*/}

              <footer className="page-footer type-2">
                <div className="rolling-letters">
                  <ul className="slides">
                    <li></li>
                    <li className="spacer">
                      <svg
                        viewBox="0 0 710 670"
                        className="first-letter js-letter-anime"
                      >
                        <image
                          width="1451"
                          height="1349"
                          href="/imgs/somos/footer-letters/W_shadow.png"
                          transform="translate(-370.5 -339.5)"
                          overflow="visible"
                          opacity=".25"
                        />
                        <path d="M618.6 28c160.4 36.7 59.6 475.4-3.5 541.7-89.7 94.2-197.1-73.2-269.9-45.1-69.7 27-190 194.2-277.4 24.4C20.4 457.1-58.9 38.1 95.5 38.1c55.8 0 85.3 46.7 140.5 64.2 51.5 16.3 99.8-95.7 170.6-21.4 55 57.7 118-74.3 212-52.9z" />
                      </svg>
                    </li>
                    <li>
                      <svg
                        viewBox="0 0 590 670"
                        className="js-letter-anime e-letter"
                      >
                        <image
                          width="1326"
                          height="1366"
                          href="/imgs/somos/footer-letters/E_shadow.png"
                          transform="translate(-368.094 -348)"
                          overflow="visible"
                          opacity=".25"
                        />
                        <path d="M7.6 346c0 220.1 29.1 255.7 188.7 275.6 121.4 15.2 312.6 23.9 370.8-47.3 61.9-75.9-91.6-117.9-44.6-189.5 60.4-91.9-73-103.9 9.7-191.1 56.3-59.4 87.8-176.3-255.8-176C53.6 17.9 7.6 86.7 7.6 346z" />
                      </svg>
                    </li>
                    <li className="spacer">
                      <svg viewBox="0 0 710 670" className="js-letter-anime">
                        <image
                          width="1451"
                          height="1349"
                          href="/imgs/somos/footer-letters/W_shadow.png"
                          transform="translate(-370.5 -339.5)"
                          overflow="visible"
                          opacity=".25"
                        />
                        <path d="M618.6 28c160.4 36.7 59.6 475.4-3.5 541.7-89.7 94.2-197.1-73.2-269.9-45.1-69.7 27-190 194.2-277.4 24.4C20.4 457.1-58.9 38.1 95.5 38.1c55.8 0 85.3 46.7 140.5 64.2 51.5 16.3 99.8-95.7 170.6-21.4 55 57.7 118-74.3 212-52.9z" />
                      </svg>
                    </li>
                    <li>
                      <svg
                        viewBox="0 0 720 670"
                        className="js-letter-anime a-letter"
                      >
                        <image
                          width="1453"
                          height="1344"
                          href="/imgs/somos/footer-letters/A_shadow.png"
                          transform="translate(-366.5 -337.5)"
                          overflow="visible"
                          opacity=".25"
                        />
                        <path d="M709.7 522.4c21 210.7-228.3 19.3-363 19.3S8.6 697 8.6 538.6c0-188.2 203.1-510.1 337.8-510.1s343.7 296.6 363.3 493.9z" />
                      </svg>
                    </li>
                    <li>
                      <svg
                        viewBox="0 0 710 670"
                        className="js-letter-anime n-letter"
                      >
                        <image
                          width="1445"
                          height="1348"
                          href="/imgs/somos/footer-letters/N_shadow.png"
                          transform="translate(-367.623 -329.24)"
                          overflow="visible"
                          opacity=".25"
                        />
                        <path d="M304.3 541.4c81.4 38.4 148.5 92.2 233.4 92.2 160.8 0 206.1-417.4 124.4-545.8-94-147.7-167.5 72.9-240.8 48.3C344.2 110.3 213.2-8 100 69.2c-114.9 78.4-139.4 520.7 27.6 558.9 97.8 22.3 101.6-122.1 176.7-86.7z" />
                      </svg>
                    </li>
                    <li>
                      <svg viewBox="0 0 680 670" className="js-letter-anime">
                        <image
                          width="1415"
                          height="1375"
                          href="/imgs/somos/footer-letters/T_shadow.png"
                          transform="translate(-367.19 -342.406)"
                          overflow="visible"
                          opacity=".25"
                        />
                        <path d="M351.8 647c-48 0-83.8-17.7-109.5-54.1-21.8-30.8-34.4-72.3-47.8-116.2-12.3-40.4-25.1-82.2-46.2-122.9-13.5-26.1-39-47.6-63.7-68.5-19.8-16.8-40.3-34.1-55-54.2-18-24.7-24.8-50.1-20.7-77.7C17 98.7 57.1 60.9 128.1 41.2c51.8-14.4 121.5-20 219.4-17.8 93.8 2.2 164.3 9.6 215.4 22.7 32.8 8.4 57.5 19.1 75.4 32.5 28 21 33.8 45.5 33.8 62.3 0 65.3-44.6 108.1-83.9 146-23.1 22.2-44.9 43.2-53.7 65.1-18.1 45.1-28.1 88.9-37 127.7-10.5 46-19.6 85.8-39.2 115.6-22.6 34.8-57.5 51.7-106.5 51.7z" />
                      </svg>
                    </li>
                    <li className="spacer">
                      <svg viewBox="0 0 710 670" className="js-letter-anime">
                        <image
                          width="1445"
                          height="1379"
                          href="/imgs/somos/footer-letters/Y_shadow.png"
                          transform="translate(-367.26 -344.467)"
                          overflow="visible"
                          opacity=".25"
                        />
                        <path d="M366.3 649.1c-48 0-82-16-104-49-18.7-28.1-26.7-64.3-35.9-106.3-9.3-42.5-19.8-90.8-44.2-137.7-14.2-27.4-46.5-52.6-77.6-76.9-24.4-19-49.6-38.7-67.9-60.7-23-27.5-32-55-27.7-84 6.2-42.2 27-73.3 60.2-89.9 56.1-28.1 144-12.9 247.5 43 47.2 25.4 97.2-.1 150.1-27.2 21.1-10.8 42.9-21.9 64.6-29.6 41.8-14.8 83.8-12.9 115.3 5.3 28 16.2 46.5 44.4 53.4 81.7 6.7 36.2-2.6 70.9-28.6 105.9-21 28.4-49.2 52.5-76.5 75.8-29 24.7-56.3 48.1-64.7 68.8-21.1 52.5-28.2 99-34.4 139.9-6 39.5-11.2 73.6-28.4 98.8-19.7 28.7-51.8 42.1-101.2 42.1z" />
                      </svg>
                    </li>
                    <li>
                      <svg
                        viewBox="0 0 690 670"
                        className="js-letter-anime o-letter"
                      >
                        <image
                          width="1422"
                          height="1383"
                          href="/imgs/somos/footer-letters/O_shadow.png"
                          transform="translate(-366.15 -346.683)"
                          overflow="visible"
                          opacity=".25"
                        />
                        <path d="M380.9 650.9c-84 0-179.4-5.9-250.2-49.8-71.8-44.6-111-122.8-119.6-239.3-4-53.9-.1-102.2 11.8-143.5 11.4-39.7 30.3-74 56.3-101.9 32.5-35 76.9-60.8 131.9-76.8 48.1-14 103.6-20.7 170-20.6 48.7.1 93 8.5 131.7 25 37 15.8 68.7 38.9 94.4 68.7 48 55.7 73.3 132.5 73.3 222.2 0 89.7-25.3 166.6-73.3 222.3-25.7 29.9-57.5 53-94.5 68.8-38.7 16.6-83 24.9-131.8 24.9z" />
                      </svg>
                    </li>
                    <li>
                      <svg viewBox="0 0 700 670" className="js-letter-anime">
                        <image
                          width="1437"
                          height="1379"
                          href="/imgs/somos/footer-letters/U_shadow.png"
                          transform="translate(-368.87 -344.408)"
                          overflow="visible"
                          opacity=".25"
                        />
                        <path
                          className="st0"
                          d="M12 125.3c6.1-41 21.1-67.6 45.8-81.6 44.6-25.1 105.7.4 170.3 27.5 45.7 19.1 92.9 38.9 131 38.9 39.6 0 84.5-23.9 127.8-47C540.2 34.7 590.6 7.9 632.1 27c25.2 11.6 42 38 51.4 80.5 13.9 63 12.4 139.9-4.1 216.5-17.9 82.8-51.1 156.1-96 212-59.5 74.1-137 113.2-224 113.2-89.9 0-170.5-38.4-233-110.9C80.9 485.8 46.2 416.8 26 338.9 7.2 266.7 2.2 190.8 12 125.3"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>

                <a
                  href="../careers/index.html"
                  data-remote="true"
                  data-targetclass="queremos"
                  data-ajaxurl="https://affinity.pt/en/ajax/queremos-te-ajax/?ajax-id=821"
                  data-title="Careers"
                >
                  <div className="row expanded align-center align-middle content-wrapper xsmall-collapse">
                    <div className="xxlarge-14 xxlarge-offset-2 medium-15 medium-offset-1 xsmall-14 xsmall-offset-0 columns">
                      <div className="row expanded pos-rel">
                        <div className="xxlarge-14 medium-16 columns">
                          <h3>Careers</h3>
                          <h2>Join us</h2>
                          <svg viewBox="0 0 280.5 22.5">
                            <path
                              d="M4.75,13H267c-2.51-3.65-3.76-6-3.89-9.28,5.71,5.59,13.13,8.51,22.1,11.25-9,2.62-16.06,5.83-22.1,11.25.38-3.53,1.43-5.66,4-9.54H4.75Z"
                              transform="translate(-4.75 -3.75)"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

                <div className="row expanded last-content-wrapper xsmall-collapse">
                  <div className="xxlarge-2 xxlarge-offset-1 medium-3 small-6 small-offset-0 xsmall-5 columns made-by">
                    <a href="../privacy-policy/index.html" target="_blank">
                      <h4>Privacy Policy </h4>
                    </a>
                    {/* <h4>2023 &copy; Affinity</h4>*/}
                  </div>
                  <div className="xxlarge-10 medium-8 small-4 xsmall-16 columns text-center">
                    <a
                      href="../index.html"
                      data-remote="true"
                      data-targetclass="home"
                      data-ajaxurl="https://affinity.pt/en/ajax/home-ajax/?ajax-id=74"
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
                          href="../news/index.html"
                          className="underline-link"
                          data-remote="true"
                          data-targetclass="noticias"
                          data-ajaxurl="https://affinity.pt/en/ajax/noticias-ajax/?ajax-id=https://affinity.pt"
                          data-title=""
                        >
                          News
                        </a>
                      </li>
                      <li>
                        <a
                          href="../contacts/index.html#affinity"
                          className="underline-link"
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
                </div>
              </footer>
            </main>

            {/* preload */}
            <div className="preload" aria-hidden="true">
              <img
                src="../imgs/somos/about-header-image.jpg"
                alt=""
              />
              <img src="../imgs/somos/about-pictogram.png" alt="" />
            </div>
          </div>
        </div>

        <div className="page-main page-next" aria-hidden="true"></div>
        <div className="page-main page-prev" aria-hidden="true"></div>

        <footer className="footer" role="contentinfo"></footer>

        <div className="morph-page-transition">
          <svg
            height="0"
            width="0"
            viewBox="0 0 745 642"
            data-morph-shape="M375.037-185.216
  C445.836-110.882,494.822,68.567,546.3,84.908c55.24,17.535,94.958-280.124,150.737-280.124c154.47,0,227.3-142.07,180-234
  c-87.387-169.843-395.272-56.301-465-29.311c-72.787,28.173-353,0-353,0S3.35,122.51,163.764,159.166
  C257.744,180.641,320.073-242.925,375.037-185.216z"
          >
            <defs>
              <clipPath
                id="hero-clip"
                clipPathUnits="objectBoundingBox"
                transform="scale(0.002013 0.002336)"
              >
                <path
                  fill="none"
                  transform="translate(-100 -95)"
                  d="M217.06,703.311l316,4l254,91l34-769L356.06,0
  c-6,0-353,0-353,0l-25,654.311L217.06,703.311z"
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="bg-transition">
          <div className="row align-middle align-center">
            <div className="xxlarge-16 text-center">
              <h2 className="hashtag-title">#alifetimeexperience</h2>
            </div>
          </div>
        </div>
      </div>
      {/*scroll-content-wrapper*/}

      <div
        className="bg-transition-new"
        data-phrases='[{"phrase":"We are united by Affinity."},{"phrase":"We grow pure Affinity."},{"phrase":"Great technology is always based on optimal relationships."},{"phrase":"We believe feedback loops to great things."},{"phrase":"Learning is a precondition."},{"phrase":"Affinity means cutting distance."}]'
      >
        <svg
          className="main-transition"
          viewBox="0 0 743 642"
          preserveAspectRatio="xMidYMin slice"
          data-timing="2"
        >
          <path
            fill="#006CFF"
            data-final-morph="M459.06-656.689c-27.047-28.397-9.875-222.002-87.5-222 c-64.765,0.001-112.618,263.421-167.5,246C124.063-658.085,84.261-849.133,3.481-849.133 c-223.695,0-177.919,469.313-109.421,602.444c126.552,245.958,363.025,42.085,464,3c105.408-40.8,358.055,223.438,488,87 c91.376-95.944,123.897-654.729-108.408-707.813C601.554-895.601,538.656-573.118,459.06-656.689z"
            data-morph="M459.06-32.689c-27.047-28.397-9.875-222.002-87.5-222-64.765.001-112.618 263.421-167.5 246C124.063-34.085 84.261-225.133 3.481-225.133c-223.695 0-108.867 775.767-40.37 908.897 126.552 245.958 300.779 3.814 401.753-35.271 105.408-40.8 260.959 201.682 390.905 65.244 91.376-95.944 214.188-901.156-18.118-954.24C601.554-271.601 538.656 50.882 459.06-32.689z"
            d="M422.061,740.244c-74.299-1.895-117.785,2.909-169.262,0.451 c-55.241-2.638-84.958-1.053-140.738-1.053c-154.469,0-74.875,54.419-27.575,68.248c87.387,25.548,207.696,0.396,277.422-3.664 c72.787-4.238,180.201,20.949,269.931,6.777c63.102-9.966,151.909-64.788-8.505-70.302 C529.354,737.471,477.023,748.924,422.061,740.244z"
          />
        </svg>

        {/*first transition*/}
        <svg
          viewBox="0 0 743 642"
          preserveAspectRatio="xMidYMin slice"
          data-timing="2"
        >
          <path
            fill="#006CFF"
            data-final-morph="M459.06-656.689c-27.047-28.397-9.875-222.002-87.5-222 c-64.765,0.001-112.618,263.421-167.5,246C124.063-658.085,84.261-849.133,3.481-849.133 c-223.695,0-177.919,469.313-109.421,602.444c126.552,245.958,363.025,42.085,464,3c105.408-40.8,358.055,223.438,488,87 c91.376-95.944,123.897-654.729-108.408-707.813C601.554-895.601,538.656-573.118,459.06-656.689z"
            data-morph="M459.06-32.689c-27.047-28.397-9.875-222.002-87.5-222-64.765.001-112.618 263.421-167.5 246C124.063-34.085 84.261-225.133 3.481-225.133c-223.695 0-108.867 775.767-40.37 908.897 126.552 245.958 300.779 3.814 401.753-35.271 105.408-40.8 260.959 201.682 390.905 65.244 91.376-95.944 214.188-901.156-18.118-954.24C601.554-271.601 538.656 50.882 459.06-32.689z"
            d="M422.061,740.244c-74.299-1.895-117.785,2.909-169.262,0.451 c-55.241-2.638-84.958-1.053-140.738-1.053c-154.469,0-74.875,54.419-27.575,68.248c87.387,25.548,207.696,0.396,277.422-3.664 c72.787-4.238,180.201,20.949,269.931,6.777c63.102-9.966,151.909-64.788-8.505-70.302 C529.354,737.471,477.023,748.924,422.061,740.244z"
          />
        </svg>
        {/*second transition*/}
        <svg
          viewBox="0 0 743 642"
          preserveAspectRatio="xMidYMin slice"
          data-timing="2"
        >
          <path
            fill="#006CFF"
            data-final-morph="M780.181-370.628c19.212,258.323,175.002,296.32,383.075,296.32 c208.055,0,305.976-145.067,305.976-324.042c0-178.957-97.921-323.715-305.976-324.025 C938.238-722.705,759.573-647.66,780.181-370.628z"
            data-morph="M-154.226,291.049c30.227,406.434,275.339,466.217,602.713,466.217 c327.344,0,481.408-228.242,481.408-509.834c0-281.562-154.064-509.318-481.408-509.807 C94.454-262.893-186.649-144.82-154.226,291.049z"
            d="M-44.3,659.339c0.968,13.013,8.815,14.927,19.297,14.927c10.48,0,15.413-7.308,15.413-16.323 c0-9.015-4.933-16.307-15.413-16.322C-36.338,641.604-45.338,645.384-44.3,659.339z"
          />
        </svg>

        {/*third transition*/}
        <svg
          viewBox="0 0 743 642"
          preserveAspectRatio="xMidYMin slice"
          data-timing="2"
        >
          <path
            fill="#006CFF"
            data-final-morph="M371.568-224.691c0.091,1.264,0.862,1.454,1.884,1.454c1.023,0,1.503-0.716,1.503-1.594 s-0.477-1.594-1.507-1.594C372.346-226.424,371.463-226.06,371.568-224.691z"
            data-morph="M-7.551,309.623C4.429,470.706-170.027,617.647-54.458,733.217 c115.57,115.576,246.188-70.883,427.626-70.883c149.306,0,300.822,145.093,420.11,54.683 c119.287-90.412-26.455-270.181-26.455-409.41c0-132.685,141.7-266.949,26.455-382.194 C678.033-189.834,535.896-44.222,378.977-44.457C186.539-44.74,60.797-211.088-53.793-77.391 C-168.391,56.306-20.746,132.219-7.551,309.623z"
            d="M370.864,663.214c0.037,0.521,0.355,0.599,0.775,0.599c0.422,0,0.619-0.295,0.619-0.656 s-0.195-0.656-0.62-0.656C371.185,662.5,370.821,662.651,370.864,663.214z"
          />
        </svg>

        {/*forth transition*/}
        <svg
          viewBox="0 0 743 642"
          preserveAspectRatio="xMidYMin slice"
          data-timing="2"
        >
          <path
            fill="#006CFF"
            data-final-morph="M809.467,682.788c-2.488-6.945-3.269-13.953-8.189-18.873c-9.32-9.32-36.141,12.246-38.847,24.424 c-3.114,14.012,13.934,5.484,16.761,11.158c2.971,5.961,3.711,20.417,14.746,22.501c11.2,2.116,38.263-22.104,30.795-33.995 C820.358,681.037,811.762,689.19,809.467,682.788z"
            data-morph="M288.317,656.372c135.07,63.832,246.579,152.996,387.493,152.976 c266.896,0,342.119-692.812,206.525-905.912C726.294-341.788,604.284,24.406,482.573-16.349 C354.69-59.171,137.101-255.552-50.738-127.383C-241.414,2.684-282.1,736.973-4.92,800.291 C157.469,837.407,163.806,597.582,288.317,656.372z"
            d="M-61.345-40.169c2.489,6.945,3.269,13.953,8.189,18.874c9.32,9.32,36.141-12.247,38.847-24.425 c3.114-14.011-13.934-5.484-16.761-11.157c-2.971-5.961-3.71-20.417-14.745-22.501c-11.201-2.116-38.263,22.104-30.796,33.995 C-72.236-38.418-63.639-46.57-61.345-40.169zz"
          />
        </svg>

        {/*fifth transition*/}
        <svg
          viewBox="0 0 743 642"
          preserveAspectRatio="xMidYMin slice"
          data-timing="2"
        >
          <path
            fill="#006CFF"
            data-final-morph="M781.427,1066.452c-19.478,73.32-205.87,84.432-415.146,81.754 c-203.365-2.604-397.79-16.628-397.79-70.604c0-68.006,143.306-100.16,177.667-147.69c79.267-109.66,41.589-204.92,214.053-204.92 c172.468,0,151.724,107.973,242.075,204.92C652.272,983.548,797.263,1006.835,781.427,1066.452z"
            data-morph="M-520.978-194.252c43.025-291.214,454.755-335.352,917.034-324.716 c449.225,10.338,878.698,66.045,878.698,280.432c0,270.111-316.555,397.823-392.456,586.612 c-175.098,435.556-91.868,813.919-472.832,813.919c-380.972,0-335.151-428.856-534.732-813.919 C-235.684,135.037-555.963,42.547-520.978-194.252z"
            d="M57.725-143.727c15.253-18.961,161.217-21.835,325.101-21.143 c159.256,0.673,311.51,4.3,311.51,18.259c0,17.587-112.223,25.903-139.131,38.195C493.131-80.056,522.636-55.42,387.58-55.42 c-135.06,0-118.815-27.923-189.569-52.995C158.866-122.286,45.323-128.308,57.725-143.727z"
          />
        </svg>

        <div className="row align-middle align-center">
          <div className="xxlarge-16 text-center">
            <h2 className="hashtag-title">#alifetimeexperience</h2>
          </div>
        </div>
      </div>
      {/*Loading Blob*/}
      {/* <div className="loading-blob">
  <svg viewBox="0 0 62 58">
    <path d="M0,32.45C0,14.12,3.5,3.12,23.17.45c23.33-2.33,38.33,4,38.67,26.17C61.67,50,51,58.12,31.33,58.12S0,48,0,32.45Z" data-morph="M6.44,24.66C25.78,14,.44,3,20.11.32c23.33-2.33,53.76,17,34,26.5C28.44,39.16,47.94,58,28.28,58S-7.13,32.15,6.44,24.66Z"></path>
  </svg>
</div>*/}

      {/* MODAL*/}
      <div id="modal-bg"></div>
      <div id="modal-wrapper">
        {" "}
        <div id="modal-content" className="row align-middle align-center"></div>
      </div>
      {/* TRANSITION*/}
      <div id="loading-page" aria-hidden="true"></div>

      {/* outdated browser */}
      <div id="outdated">
        <h6>Your browser is out of date!</h6>
        <p>
          Update your browser to view this website correctly.{" "}
          <a id="btnUpdateBrowser" href="http://outdatedbrowser.com/">
            Update my browser now{" "}
          </a>
        </p>
        <p className="last">
          <a href="index.html#" id="btnCloseUpdateBrowser" title="Close">
            &times;
          </a>
        </p>
        {/* end #outdated browser */}
        {/*  */}
      </div>
    </>
  );
}

export default AboutPage;
