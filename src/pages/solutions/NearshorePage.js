import Header from "../../components/header";

function NearshorePage() {
  return (
    <>
      <body className="js-byrefresh js-no-ajax    en-lang">
        <div className="scroll-content-wrapper" data-scrollbar>
          <Header />
          {/*  ============= CONTENT ============= */}
          <div className="page-main page-current">
            <div
              className="page-toload single-service-page nearshoring-page"
              data-bodyclass="single-service nearshoring"
            >
              <header className="page-header">
                <div className="background-wrapper">
                  <div className="webGL-main">
                    <div id="webGL-container"></div>
                  </div>
                  <div className="block-bg-cover">
                    <picture>
                      <source
                        srcSet="/imgs/nearshoring/nearshoring-header-phone.jpg"
                        media="(max-width: 414px)"
                      />
                      <source
                        srcSet="/imgs/nearshoring/nearshoring-header-small.jpg"
                        media="(max-width: 768px)"
                      />
                      <source
                        srcSet="/imgs/nearshoring/nearshoring-header.webp"
                        type="image/webp"
                      />
                      <img
                        className="background-image element-cover"
                        src="./imgs/nearshoring/nearshoring-header.jpg"
                        alt=""
                      />
                    </picture>
                  </div>

                  <div className="title row expanded align-center align-middle">
                    <div className="xxlarge-16 columns text-center">
                      <h1>Nearshore</h1>
                    </div>
                  </div>

                  <div className="letter-wrapper">
                    <picture>
                      <source
                        srcSet="/imgs/alphabeth_3d/headerN_phone.png"
                        media="(max-width: 414px)"
                      />
                      <source
                        srcSet="/imgs/alphabeth_3d/headerN.webp 1x, /imgs/alphabeth_3d/headerN@2x.webp 2x"
                        type="image/webp"
                      />
                      <source srcSet="/imgs/alphabeth_3d/headerN.png 1x, /imgs/alphabeth_3d/headerN@2x.png 2x" />
                      <img
                        className="letter"
                        src="./imgs/alphabeth_3d/headerN.png"
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="image-wrapper">
                    <picture>
                      <source
                        srcSet="/imgs/nearshoring/nearshoring-owl-phone.png"
                        media="(max-width: 414px)"
                      />
                      <img
                        className="owl show-mob"
                        src="./imgs/nearshoring/nearshoring-owl.png"
                        alt=""
                      />
                    </picture>
                  </div>
                </div>
                <div className="mouse-icon left-side">
                  <span className="scroll-helper">Scroll</span>
                  <span className="wheel"></span>
                </div>
              </header>

              <main className="page-content" role="main">
                <div className="vertical-menu-wrapper">
                  <ul>
                    <li data-target="clients">
                      Clients <span className="container-height"></span>
                    </li>
                    <li data-target="recruitment">
                      Recruitment <span className="container-height"></span>
                    </li>
                    <li data-target="our-model">
                      Our Model<span className="container-height"></span>
                    </li>
                    <li data-target="image-blocks">
                      We Assure <span className="container-height"></span>
                    </li>
                  </ul>
                </div>
                {/* .vertical-menu-wrapper*/}
                <div className="start-project-container">
                  <div className="cta-start-project">
                    <div className="reminder">
                      <span>!</span>
                    </div>
                    <h3>
                      Let's
                      <br />
                      do this!
                    </h3>
                    <svg viewBox="0 0 768 496" className="cta-bg">
                      <path
                        d="M384.7,365.3C289.8,466.1,77.4,279,259.1,135.5C374,44.8,623.8,155.2,573.5,272.7
      C519.2,399.7,462.9,282.2,384.7,365.3z"
                        data-init="M384.7,365.3C289.8,466.1,77.4,279,259.1,135.5C374,44.8,623.8,155.2,573.5,272.7
      C519.2,399.7,462.9,282.2,384.7,365.3z"
                        data-close="M384.51,338.05C316,388,178,249,288.09,161.65c88.05-69.87,280,15.09,241.39,105.29C487.79,364.43,455.33,286.42,384.51,338.05Z"
                        data-morphpath="M384.7,365.3C276.2,451.3,63.3,270.5,245,127c114.9-90.8,392,14,328.5,145.7C513.5,397.1,472,296,384.7,365.3z"
                      />
                    </svg>
                    <button className="elastic-btn">
                      <svg viewBox="0 0 164 69">
                        <path
                          className="morph-bg"
                          d="M23 0h112a23 23 0 1 1 0 46H23a23 23 0 1 1 0-46z"
                          data-hover="M27,1.63H131a21.37,21.37,0,1,1,0,42.74H27A21.37,21.37,0,1,1,27,1.63Z"
                        />
                      </svg>
                      <span className="text">start a project </span>
                    </button>
                  </div>
                  {/* .cta-start-project */}

                  <section className="start-project">
                    <div className="form-container">
                      <svg viewBox="0 0 40.37 25" className="triangle">
                        <path d="M0 0a6.86 6.86 0 0 0 1.44 4.69l15.2 18.52a4.4 4.4 0 0 0 7.07 0L38.92 4.69A6.86 6.86 0 0 0 40.36 0z" />
                      </svg>
                      <form
                        action="index.html"
                        method="post"
                        className="project-form"
                        data-type=""
                      >
                        <input
                          type="hidden"
                          id="affinity_nonce"
                          name="affinity_nonce"
                          value="7904a8c66c"
                        />
                        <input
                          type="hidden"
                          name="_wp_http_referer"
                          value="/en/solutions/nearshore/"
                        />{" "}
                        <input
                          type="hidden"
                          value="en"
                          name="language"
                          id="language"
                        />
                        <h2>Start a nearshore project</h2>
                        <p>
                          Leave some information about yourself to get you to
                          the right person.
                        </p>
                        <div className="input-area active" data-text="">
                          <label htmlFor="name">Name</label>
                          <div className="wrapper-input input">
                            <input
                              type="text"
                              className="form-input text name required"
                              name="name"
                              id="name"
                              autoComplete="off"
                            />
                            <svg viewBox="0 0 8.97 6.86" className="check">
                              <path d="M.32 3.88l2.48 2 .37.3.36-.32L8.6.34" />
                            </svg>
                            <div className="enter-button">
                              <svg viewBox="0 0 7.81 15.82" className="arrow">
                                <path d="M.5.5l6.32 6.24a1.64 1.64 0 0 1 0 2.34L.5 15.32" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="input-area hidden" data-text="">
                          <label htmlFor="name">E-mail</label>
                          <div className="wrapper-input input">
                            <input
                              type="email"
                              className="form-input text email required"
                              name="email"
                              id="email"
                              autoComplete="off"
                            />
                            <svg viewBox="0 0 8.97 6.86" className="check">
                              <path d="M.32 3.88l2.48 2 .37.3.36-.32L8.6.34" />
                            </svg>
                            <div className="enter-button">
                              <svg viewBox="0 0 7.81 15.82" className="arrow">
                                <path d="M.5.5l6.32 6.24a1.64 1.64 0 0 1 0 2.34L.5 15.32" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="input-area hidden" data-text="">
                          <label htmlFor="name">Company</label>
                          <div className="wrapper-input input">
                            <input
                              type="text"
                              className="form-input text company required"
                              name="company"
                              id="company"
                              autoComplete="off"
                            />
                            <svg viewBox="0 0 8.97 6.86" className="check">
                              <path d="M.32 3.88l2.48 2 .37.3.36-.32L8.6.34" />
                            </svg>
                            <div className="enter-button">
                              <svg viewBox="0 0 7.81 15.82" className="arrow">
                                <path d="M.5.5l6.32 6.24a1.64 1.64 0 0 1 0 2.34L.5 15.32" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="input-area hidden mb" data-text="">
                          <label htmlFor="name">Company Size</label>
                          <div className="wrapper-input input">
                            <input
                              type="number"
                              className="form-input company-size required number"
                              name="company-size"
                              id="company-size"
                              autoComplete="off"
                            />
                            <svg viewBox="0 0 8.97 6.86" className="check">
                              <path d="M.32 3.88l2.48 2 .37.3.36-.32L8.6.34" />
                            </svg>
                            <div className="enter-button">
                              <svg viewBox="0 0 7.81 15.82" className="arrow">
                                <path d="M.5.5l6.32 6.24a1.64 1.64 0 0 1 0 2.34L.5 15.32" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div
                          className="input-area hidden"
                          id="location"
                          data-final-city="none"
                        >
                          <label>Preferred Project Management</label>
                          <ul className="options-main-wrapper">
                            <li className="option-wrapper" data-city="Porto">
                              <svg className="check" viewBox="0 0 34 34">
                                <path
                                  className="stroke"
                                  d="M18.8 5.1C28 5.1 29 13.4 29 17s-1 11.9-10.2 11.9c-9.1 0-13.1-1.5-13.7-10.8-.3-4.4.5-7.6 2.4-9.6 2-2.3 5.9-3.4 11.3-3.4m0-4C8.4 1.1.2 4.8 1.1 18.4 2 31.1 9.2 32.9 18.8 32.9S33 25.8 33 17 28.4 1.1 18.8 1.1z"
                                />
                                <path
                                  className="full"
                                  d="M1.1 18.4C2 31.1 9.2 32.9 18.8 32.9S33 25.8 33 17 28.4 1.1 18.8 1.1C8.4 1.1.2 4.8 1.1 18.4z"
                                />
                                <path
                                  className="dash"
                                  d="M9.7 17l5.9 5 8.1-12.1"
                                />
                              </svg>
                              <span className="option">Oporto</span>
                            </li>
                            <li className="option-wrapper" data-city="Lisboa">
                              <svg className="check" viewBox="0 0 34 34">
                                <path
                                  className="stroke"
                                  d="M18.8 5.1C28 5.1 29 13.4 29 17s-1 11.9-10.2 11.9c-9.1 0-13.1-1.5-13.7-10.8-.3-4.4.5-7.6 2.4-9.6 2-2.3 5.9-3.4 11.3-3.4m0-4C8.4 1.1.2 4.8 1.1 18.4 2 31.1 9.2 32.9 18.8 32.9S33 25.8 33 17 28.4 1.1 18.8 1.1z"
                                />
                                <path
                                  className="full"
                                  d="M1.1 18.4C2 31.1 9.2 32.9 18.8 32.9S33 25.8 33 17 28.4 1.1 18.8 1.1C8.4 1.1.2 4.8 1.1 18.4z"
                                />
                                <path
                                  className="dash"
                                  d="M9.7 17l5.9 5 8.1-12.1"
                                />
                              </svg>
                              <span className="option">Lisbon</span>
                            </li>
                            <li className="option-wrapper" data-city="Leiria">
                              <svg className="check" viewBox="0 0 34 34">
                                <path
                                  className="stroke"
                                  d="M18.8 5.1C28 5.1 29 13.4 29 17s-1 11.9-10.2 11.9c-9.1 0-13.1-1.5-13.7-10.8-.3-4.4.5-7.6 2.4-9.6 2-2.3 5.9-3.4 11.3-3.4m0-4C8.4 1.1.2 4.8 1.1 18.4 2 31.1 9.2 32.9 18.8 32.9S33 25.8 33 17 28.4 1.1 18.8 1.1z"
                                />
                                <path
                                  className="full"
                                  d="M1.1 18.4C2 31.1 9.2 32.9 18.8 32.9S33 25.8 33 17 28.4 1.1 18.8 1.1C8.4 1.1.2 4.8 1.1 18.4z"
                                />
                                <path
                                  className="dash"
                                  d="M9.7 17l5.9 5 8.1-12.1"
                                />
                              </svg>
                              <span className="option">Leiria</span>
                            </li>
                          </ul>
                          <button
                            className="morph-enter-button elastic-btn"
                            type="submit"
                          >
                            <svg viewBox="0 0 196 66">
                              <path
                                className="morph-bg"
                                d="M1.3 35.8c2 25.9 17.7 29.7 38.6 29.7h124.5C185.3 65.4 195 50.8 195 33S185.2.6 164.4.5H39.9C17.2.5-.7 8 1.3 35.8z"
                                data-hover="M3.3 35.8c2 25.9 15.6 25.7 36.6 25.7h124.5C185.3 61.4 193 50.8 193 33s-8-28.5-28.7-28.5H39.8C17.1 4.5 1.3 8 3.3 35.8z"
                              />
                            </svg>
                            <span className="text">Let’s do this</span>
                            <svg viewBox="0 0 7.81 15.82" className="arrow">
                              <path d="M.5.5l6.32 6.24a1.64 1.64 0 0 1 0 2.34L.5 15.32" />
                            </svg>
                            {/*  Loader */}
                            <div className="loader-wrapper">
                              <div className="blobs">
                                <div className="blob-center"></div>
                                <div className="blob"></div>
                                <div className="blob"></div>
                                <div className="blob"></div>
                                <div className="blob"></div>
                                <div className="blob"></div>
                                <div className="blob"></div>
                              </div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                              >
                                <defs>
                                  <filter id="goo">
                                    <feGaussianBlur
                                      in="SourceGraphic"
                                      stdDeviation="10"
                                      result="blur"
                                    />
                                    <feColorMatrix
                                      in="blur"
                                      mode="matrix"
                                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                                      result="goo"
                                    />
                                    <feBlend in="SourceGraphic" in2="goo" />
                                  </filter>
                                </defs>
                              </svg>
                            </div>
                          </button>
                        </div>
                        {/* <h4 className="feedback-form">
                          Thank you! Our team will reply as soon as they can.
                        </h4> */}
                      </form>
                    </div>
                    <button className="elastic-btn close-filter">
                      <svg viewBox="0 0 64 60">
                        <path
                          className="morph-bg"
                          d="M1.1 32.5C2.9 55.6 16.9 59 35.5 59 54.2 59 63 46 63 30S54.2 1 35.5 1C15.3 1-.7 7.7 1.1 32.5z"
                          data-hover="M2.1 32.5C3.9 55.6 16.9 56 35.5 56 54.2 56 62 46 62 30S54.2 4 35.5 4C15.3 4 .3 7.7 2.1 32.5z"
                        />
                        <path
                          className="morph-element"
                          d="M40 22.2c-2-2.1-2.2-1.2-8.1 5-5.8-6.2-6.1-7-8.1-5-1.6 1.7-.7 1.9 5.2 7.9-5.4 5.8-6 5.9-4.2 7.9 1.7 1.8 2 .7 7.1-4.8 5.1 5.5 5.4 6.6 7.1 4.8 1.9-1.9 1.2-2.1-4.3-7.8 6-6 6.9-6.3 5.3-8z"
                        />
                      </svg>
                    </button>
                  </section>
                  {/* .start-project */}
                </div>

                <div className="navbar-services-wrapper">
                  <div className="row align-center">
                    <div className="xxlarge-16">
                      <div className="row align-center">
                        <div className="xxlarge-12 medium-14 small-16">
                          <div className="navbar-services-scroll">
                            <ul className="navbar-services row xxlarge-up-3  nearshoring-active">
                              <li className="column active">
                                <a
                                  href="index.html"
                                  data-remote="true"
                                  data-targetclass="single-service"
                                  data-title="Nearshore"
                                >
                                  <svg
                                    className="nearshoring-picto"
                                    viewBox="0 0 112 98"
                                  >
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
                                  href="../outsourcing/index.html"
                                  data-remote="true"
                                  data-targetclass="single-service"
                                  data-title="Outsourcing"
                                >
                                  <svg
                                    className="outsourcing-picto"
                                    viewBox="0 0 112 102"
                                  >
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
                                  href="../software/index.html"
                                  data-remote="true"
                                  data-targetclass="single-service"
                                  data-title="Software"
                                >
                                  <svg
                                    className="software-picto"
                                    viewBox="0 0 112 112"
                                  >
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

                <section className="introduction">
                  <div className="hero-text row text-center align-center small-collapse">
                    <div className="xxlarge-10 medium-12 small-14 columns">
                      <h3 className="js-bigText-element">
                        With nearshore projects all over Europe, we provide
                        high-performance nearshore teams, 100% dedicated to
                        remotely work on your IT projects, from software
                        development to maintenance or application support.
                        On-time, on-budget, goal-based delivery! Do you want to
                        know how you can scale your business with our nearshore
                        services?
                      </h3>
                    </div>
                  </div>
                </section>

                <section className="image-blocks js-height  ">
                  <div className="row expanded question-row">
                    <div className="question-wrapper xxlarge-7 xxlarge-offset-2 medium-6 medium-offset-1 small-8 xsmall-14 background-lightGray">
                      <h3>
                        At our nearshore centre in Portugal, we offer remote
                        technological development and integrated management
                        services at a global scale.
                      </h3>
                      <h2>
                        {" "}
                        We're focused on responsiveness, efficiency and
                        cost-effectiveness.
                      </h2>
                    </div>
                  </div>
                  <div className="row expanded image-wrapper">
                    <div className="xxlarge-13 xxlarge-offset-3 small-16 small-offset-0">
                      <picture>
                        <img src="./uploads/2020/04/DSC_2689.jpg" alt="" />
                      </picture>

                      <div className="offset-text row">
                        <div className="xxlarge-8 xxlarge-offset-8 medium-9 xsmall-14 xsmall-offset-0 columns">
                          <p className="js-text-element">
                            Our nearshore services are based on a methodology
                            that ensures agile and secure development, as well
                            as certified IT service management processes.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row expanded answer-wrapper">
                    <div className="xxlarge-6 xxlarge-offset-8 medium-offset-9 small-8 small-offset-7 xsmall-14 xsmall-offset-1 answer-wrapper-text">
                      <h3>
                        We propose nearshore solutions tailored to the needs and
                        business strategies of each client ensuring the success
                        of the projects and unquestionable added value.{" "}
                      </h3>
                    </div>
                  </div>
                </section>
                {/* image-blocks*/}

                <section className="benefits">
                  <div className="row expanded">
                    <div className="xxlarge-7 xxlarge-offset-8 medium-10 medium-offset-3 small-12 small-offset-2">
                      <div className="row expanded xxlarge-up-3 xsmall-up-1">
                        <div className="columns benefits-picto">
                          <svg viewBox="0 0 194.2 137.48">
                            <path d="M42.67 133.18a148.88 148.88 0 0 1-30.85 0 7.68 7.68 0 0 1-7.53-7.52C3.23 115.4 3.23 22.08 4.3 11.83a7.68 7.68 0 0 1 7.53-7.53 148.88 148.88 0 0 1 30.85 0 7.68 7.68 0 0 1 7.52 7.53c1.07 10.26 1.07 103.57 0 113.83a7.68 7.68 0 0 1-7.53 7.52zm69.85 0a148.88 148.88 0 0 1-30.85 0 7.68 7.68 0 0 1-7.53-7.52c-1.07-10.26-1.07-70.06 0-80.32a7.68 7.68 0 0 1 7.53-7.52 148.88 148.88 0 0 1 30.85 0 7.68 7.68 0 0 1 7.48 7.52c1.07 10.26 1.07 70.06 0 80.32a7.68 7.68 0 0 1-7.48 7.52zm69.85 0a148.89 148.89 0 0 1-30.85 0 7.68 7.68 0 0 1-7.53-7.52c-1.07-10.26-1.07-34.95 0-45.2a7.68 7.68 0 0 1 7.53-7.52 148.89 148.89 0 0 1 30.85 0 7.68 7.68 0 0 1 7.52 7.52c1.07 10.26 1.07 34.95 0 45.2a7.68 7.68 0 0 1-7.52 7.52z" />
                          </svg>{" "}
                          <p>
                            Unlock Significant Cost Reduction with Our Nearshore
                            Services
                          </p>
                        </div>
                        <div className="columns benefits-picto">
                          <svg viewBox="0 0 158.01 132.45">
                            <path d="M79 128.95c-17.86 0-35.58-.49-53.41-1.61-8-.41-15.59-4.92-18.66-12.48a23.31 23.31 0 0 1-1.62-6.72C3.56 84.68 3 74.11 4 51c.34-8.64 5-18.3 14-21.1a94.86 94.86 0 0 1 11.56-2.24c2.1-.35 7.25-.68 9.41-.88A2.94 2.94 0 0 0 41.44 25c1.66-2.8 4.76-12.8 6.69-15.11 3.87-4.46 9.53-6.34 15.3-6.33 13.27 0 18-.12 31.42 0 5.94.15 12.56 2.1 16.07 7.31 1.53 2.18 4.56 11.91 6.06 14.47a2.68 2.68 0 0 0 2.22 1.43c4.81.65 12.6 1.34 17.38 2.13a19.39 19.39 0 0 1 12.51 7.36 23.71 23.71 0 0 1 4.68 10.89c.3 1.85.52 3.74.64 5.57.2 22.71.22 31.93-1.3 54.6-.52 8.47-6 16.95-14.6 19.09a28 28 0 0 1-5.82.94c-17.92 1.11-35.69 1.59-53.69 1.6z" />
                            <path d="M26.08 28.28c19.35-2.06 35.55-2 53.41-2.06s35.7.4 53.71 2.1" />
                          </svg>{" "}
                          <p>
                            Let Us Reduce Your RH Efforts and Boost Your
                            Efficiency
                          </p>
                        </div>
                        <div className="columns benefits-picto">
                          <svg viewBox="0 0 185.5 131.63">
                            <path d="M181.79 93c-1.11-13.63-9.22-24.47-22.14-30.06a3.91 3.91 0 0 1-1-6.55c3.93-3.27 6.4-8.62 7-17.28C167.22 18.36 155 9.89 138.13 9.92S109 18.36 110.58 39.1c.64 8.66 3.11 14 7 17.28a3.91 3.91 0 0 1-1 6.55c-9.14 3.95-15.86 10.54-19.41 18.89-4.1-8.43-11.25-15.11-20.77-19.22a4.36 4.36 0 0 1-1.14-7.3c4.38-3.65 7.14-9.61 7.86-19.27C84.84 12.91 71.19 3.47 52.41 3.5S20 12.91 21.69 36c.72 9.66 3.47 15.62 7.86 19.27a4.36 4.36 0 0 1-1.14 7.3C14 68.82 5 80.91 3.73 96.11c-2 24.27 8.16 32.09 48.67 32 28.77 0 42.22-3.89 46.89-14.87 6 6.16 17.86 8.49 38.83 8.46 36.35.08 45.45-6.94 43.67-28.7z" />
                          </svg>{" "}
                          <p>
                            Effortlessly Access Fully Qualified and Talented IT
                            Professionals
                          </p>
                        </div>
                        <div className="columns benefits-picto">
                          <svg viewBox="0 0 131.6 158.8">
                            <defs>
                              {/* <style>
                                .cls-1{fill:none;stroke:#06f;strokeLinejoin:round;strokeWidth:7px;stroke-dasharray:439.24;}
                              </style> */}
                            </defs>
                            <title>lamp</title>
                            <path
                              className="cls-1"
                              style={{
                                fill: "none",
                                stroke: "#06f",
                                strokeLinejoin: "round",
                                strokeWidth: "7px",
                                strokeDasharray: 439.24,
                              }}
                              d="M79.5,155.3a15.22,15.22,0,0,0,15.4-15.4c0-35.7,33.2-32,33.2-74.1a62.3,62.3,0,0,0-124.6,0c0,42.1,33.2,38.4,33.2,74.1a15.28,15.28,0,0,0,15.4,15.4Z"
                            />
                          </svg>
                          <p>
                            Our Highly Skilled and Motivated Experts are Here
                            for You
                          </p>
                        </div>
                        <div className="columns benefits-picto">
                          <svg viewBox="0 0 143 154.6">
                            <defs>
                              {/* <style>
                                .cls-1{fill:none;stroke:#06f;stroke-linecap:round;strokeLinejoin:round;strokeWidth:7px;}
                              </style> */}
                            </defs>
                            <title>fast</title>
                            <path
                              className="cls-1"
                              style={{
                                fill: "none",
                                stroke: "#06f",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "7px",
                              }}
                              d="M68.9,15.1a68,68,0,1,0,30.9,6.1"
                            />
                            <polyline
                              className="cls-1"
                              style={{
                                fill: "none",
                                stroke: "#06f",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "7px",
                              }}
                              points="71.5 44.1 71.5 83.1 89 100.5"
                            />
                            <polyline
                              className="cls-1"
                              style={{
                                fill: "none",
                                stroke: "#06f",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "7px",
                              }}
                              points="59 3.5 71.3 15.8 59 28"
                            />
                          </svg>
                          <p>
                            Rapid Project Onset Tailored to Your Unique Needs
                            and Strategies
                          </p>
                        </div>
                        <div className="columns benefits-picto">
                          <svg viewBox="0 0 120.6 168.53">
                            <defs>
                              {/* <style>.cls-1,.cls-2{fill:none;stroke:#06f;strokeLinejoin:round;strokeWidth:7px;}.cls-2{stroke-linecap:round;}
                              </style> */}
                            </defs>
                            <title>checkmarks</title>
                            <path
                              className="cls-1"
                              style={{
                                fill: "none",
                                stroke: "#06f",
                                strokeLinejoin: "round",
                                strokeWidth: "7px",
                              }}
                              d="M95.1,163.43a29,29,0,0,0,7.1-1.5,19.91,19.91,0,0,0,13.2-17.7c1.2-16.9,1.7-33.8,1.7-50.7,0-17.1-.5-34-1.7-51a20.53,20.53,0,0,0-1-5.5c-2.3-8.2-11.3-13.4-20.2-13.9l-11.1-.9a298.18,298.18,0,0,0-46.3,0L26.4,23c-9,.5-18,5.7-20.2,13.9a26.54,26.54,0,0,0-1,5.5c-1.2,17-1.7,33.9-1.7,51s.5,33.8,1.7,50.7a19.91,19.91,0,0,0,13.2,17.7,29,29,0,0,0,7.1,1.5l5.9.5a340.23,340.23,0,0,0,57.1,0Z"
                            />
                            <path
                              className="cls-1"
                              style={{
                                fill: "none",
                                stroke: "#06f",
                                strokeLinejoin: "round",
                                strokeWidth: "7px",
                              }}
                              d="M64.8,5.83l-.6-.6a6.08,6.08,0,0,0-8.5,0l-.6.6a6,6,0,0,1-4.2,1.8H46a6,6,0,0,0-6,6v5.11a2.43,2.43,0,0,0,2.4,2.39H77.6A2.43,2.43,0,0,0,80,18.73V13.62a6,6,0,0,0-6-6H69.1A5.93,5.93,0,0,1,64.8,5.83Z"
                            />
                            <polyline
                              className="cls-2"
                              style={{
                                fill: "none",
                                stroke: "#06f",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "7px",
                              }}
                              points="24.8 60.73 30.3 66.22 44.8 51.73"
                            />
                            <polyline
                              className="cls-2"
                              style={{
                                fill: "none",
                                stroke: "#06f",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "7px",
                              }}
                              points="24.8 95.22 30.3 100.72 44.8 86.22"
                            />
                            <polyline
                              className="cls-2"
                              style={{
                                fill: "none",
                                stroke: "#06f",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "7px",
                              }}
                              points="24.8 129.72 30.3 135.22 44.8 120.72"
                            />
                            <line
                              className="cls-2"
                              style={{
                                fill: "none",
                                stroke: "#06f",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "7px",
                              }}
                              x1="94.8"
                              y1="59.73"
                              x2="60.8"
                              y2="59.73"
                            />
                            <line
                              className="cls-2"
                              style={{
                                fill: "none",
                                stroke: "#06f",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "7px",
                              }}
                              x1="94.8"
                              y1="94.23"
                              x2="60.8"
                              y2="94.23"
                            />
                            <line
                              className="cls-2"
                              style={{
                                fill: "none",
                                stroke: "#06f",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "7px",
                              }}
                              x1="94.8"
                              y1="128.72"
                              x2="60.8"
                              y2="128.72"
                            />
                          </svg>
                          <p>
                            We Ensure Full Compliance with the Best
                            International Practices and Standards
                          </p>
                        </div>
                      </div>
                      <h3>Other Benefits</h3>
                      <div className="row expanded other-benefits xxlarge-up-2 xsmall-up-1">
                        <div className="columns other-benefits-info">
                          <svg viewBox="0 0 8.97 6.86">
                            <path d="M.32 3.88l2.48 2 .37.3.36-.32L8.6.34" />
                          </svg>
                          <p>
                            We offer our clients access to a diverse range of
                            highly specialized professionals, including
                            developers, UX/UI designers, project managers,
                            architects, functional and business analysts, and
                            many others. Our rigorous selection process ensures
                            that each team member possesses the necessary skills
                            and experience to provide tailored solutions that
                            meet our clients' unique needs.
                          </p>
                        </div>
                        <div className="columns other-benefits-info">
                          <svg viewBox="0 0 8.97 6.86">
                            <path d="M.32 3.88l2.48 2 .37.3.36-.32L8.6.34" />
                          </svg>
                          <p>
                            We believe in the importance of constant and
                            proactive communication, which is why we provide
                            close monitoring and feedback throughout the entire
                            project. Our team is always available to answer
                            questions, provide updates, and ensure that our
                            clients are fully satisfied with the results.
                          </p>
                        </div>
                        <div className="columns other-benefits-info">
                          <svg viewBox="0 0 8.97 6.86">
                            <path d="M.32 3.88l2.48 2 .37.3.36-.32L8.6.34" />
                          </svg>
                          <p>
                            With three convenient office locations in Portugal,
                            including Lisbon, Porto, and Obidos, we are
                            perfectly positioned to serve clients from around
                            the world. Our nearshore teams are capable of
                            working remotely in any geography, making it easy
                            for us to provide agile and efficient solutions that
                            meet the demands of our clients' rapidly changing
                            business environments.
                          </p>
                        </div>
                        <div className="columns other-benefits-info">
                          <svg viewBox="0 0 8.97 6.86">
                            <path d="M.32 3.88l2.48 2 .37.3.36-.32L8.6.34" />
                          </svg>
                          <p>
                            In summary, our access to specialized IT
                            professionals, constant monitoring and feedback,
                            convenient office locations in Portugal, and our
                            ability to set up nearshore teams that work remotely
                            make us an ideal partner for any business looking to
                            stay ahead of the competition and achieve success in
                            today's global marketplace.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* benefits*/}

                <section className="our-model js-height">
                  <div className="row expanded">
                    <div className="xxlarge-4 xxlarge-offset-3 medium-6 medium-offset-1 xsmall-14 columns meta-title-wrapper">
                      <div
                        className="morphing-letter"
                        data-morphpath="M402.42,684.73c-91,0-194.39-6.42-271.11-54C53.46,582.41,21,497.59,11.66,371.4,7.31,312.94,1.6,260.64,14.4,215.94c12.32-43,32.83-80.17,61-110.42,35.22-37.88,83.29-65.87,142.89-83.18C270.35,7.2,330.66-.11,402.45,0c52.78.08,100.78,9.19,142.67,27.07a277.66,277.66,0,0,1,102.34,74.49C699.43,161.89,697,241.79,697,339s2.44,183.92-49.53,244.28a277.31,277.31,0,0,1-102.35,74.51C503.21,675.67,455.2,684.73,402.42,684.73Z"
                      >
                        <svg viewBox="0 0 800 750">
                          <defs>
                            <mask
                              id="modelMask"
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="800"
                              height="750"
                            >
                              <filter id="modelFilter" x="0" y="0">
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
                                d="M402.42,684.73c-91,0-194.39-6.42-271.11-54C53.46,582.41,11,497.59,1.66,371.4-2.69,312.94,1.6,260.64,14.4,215.94c12.32-43,32.83-80.17,61-110.42,35.22-37.88,83.29-65.87,142.89-83.18C270.35,7.2,330.66-.11,402.45,0c52.78.08,100.78,9.19,142.67,27.07a277.66,277.66,0,0,1,102.34,74.49c52,60.32,79.44,143.59,79.44,240.8s-27.47,180.55-79.44,240.91a277.31,277.31,0,0,1-102.35,74.51C503.21,675.67,455.2,684.73,402.42,684.73Z"
                              />
                            </mask>

                            <text
                              id="modelText"
                              x="550"
                              y="348"
                              fontSize="100"
                              letterSpacing="-4px"
                              fontWeight="bold"
                              textAnchor="middle"
                            >
                              The Nearshore Project{" "}
                            </text>
                          </defs>

                          <path
                            className="letter shadow-letter"
                            filter="url(#modelFilter)"
                            fill="rgba(191, 0, 0, .5)"
                            d="M402.42,684.73c-91,0-194.39-6.42-271.11-54C53.46,582.41,11,497.59,1.66,371.4-2.69,312.94,1.6,260.64,14.4,215.94c12.32-43,32.83-80.17,61-110.42,35.22-37.88,83.29-65.87,142.89-83.18C270.35,7.2,330.66-.11,402.45,0c52.78.08,100.78,9.19,142.67,27.07a277.66,277.66,0,0,1,102.34,74.49c52,60.32,79.44,143.59,79.44,240.8s-27.47,180.55-79.44,240.91a277.31,277.31,0,0,1-102.35,74.51C503.21,675.67,455.2,684.73,402.42,684.73Z"
                          />
                          <path
                            className="letter main-letter"
                            fill="#006cfc"
                            d="M402.42,684.73c-91,0-194.39-6.42-271.11-54C53.46,582.41,11,497.59,1.66,371.4-2.69,312.94,1.6,260.64,14.4,215.94c12.32-43,32.83-80.17,61-110.42,35.22-37.88,83.29-65.87,142.89-83.18C270.35,7.2,330.66-.11,402.45,0c52.78.08,100.78,9.19,142.67,27.07a277.66,277.66,0,0,1,102.34,74.49c52,60.32,79.44,143.59,79.44,240.8s-27.47,180.55-79.44,240.91a277.31,277.31,0,0,1-102.35,74.51C503.21,675.67,455.2,684.73,402.42,684.73Z"
                          />

                          <use href="#modelText" fill="#006cfc" />
                          <use
                            href="#modelText"
                            fill="white"
                            mask="url(#modelMask)"
                          />
                        </svg>

                        <h3 className="subtitle js-text-element">
                          We follow an effective process to identify, recruit,
                          assemble, train and monitor highly competent teams
                          adapted to the project specificities Our model
                          encompasses several moments of feedback and permanent
                          open communication with the client.
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="row expanded align-center background-lightGray">
                    <div className="xxlarge-14 model-line-container">
                      <svg viewBox="0 0 1098.52 1260.53">
                        <path d="M754.63.49s363.68 82.31 342.5 302c-21.77 225.88-386.5 307.65-511 287.5-178.43-24.29-633.61-27.1-581.5 269.5s335.88 249.42 394 244.5c140.95-11.93 220.78 61.17 212.5 156.5" />
                      </svg>
                      <div className="steps-container step-1">
                        <div className="step">
                          <span className="number">1</span>
                          <h2>Client Contact</h2>
                          <h3>
                            <br />
                            The process starts off.
                          </h3>
                        </div>
                      </div>
                      <div className="steps-container step-2">
                        <div className="step">
                          <span className="number">2</span>
                          <h2>Recruitment Process</h2>
                          <h3>
                            <br />• Screening & sourcing with Keywork AI <br />
                            <br />
                             • Validation for soft skills and tech-based
                            analysis.
                          </h3>
                        </div>
                      </div>
                      <div className="steps-container step-3">
                        <div className="step">
                          <span className="number">3</span>
                          <h2>Business Proposal</h2>
                          <h3>
                            <br />
                            Official proposal presented to client
                          </h3>
                        </div>
                      </div>
                      <div className="steps-container step-4">
                        <div className="step">
                          <span className="number">4</span>
                          <h2>Feedback from Client</h2>
                          <h3>
                            <br />
                            Client to analyze proposal and validate/ provide
                            feedback
                          </h3>
                        </div>
                      </div>
                      <div className="steps-container step-5">
                        <div className="step">
                          <span className="number">5</span>
                          <h2>Presenting Consultants</h2>
                          <h3>
                            <br />
                            Team proposal presented to client
                          </h3>
                        </div>
                      </div>
                      <div className="steps-container step-6">
                        <div className="step">
                          <span className="number">6</span>
                          <h2>Feedback from Client</h2>
                          <h3>
                            <br />
                            Client to analyze proposal and validate/ provide
                            feedback
                          </h3>
                        </div>
                      </div>
                      <div className="steps-container step-7">
                        <div className="step">
                          <span className="number">7</span>
                          <h2>Starting Date</h2>
                          <h3>
                            <br />
                            Let's go!
                          </h3>
                        </div>
                      </div>
                      <div className="row expanded model-text align-right">
                        <div className="xxlarge-4 medium-8 small-10 xsmall-14">
                          <p>
                            Affinity's recruitment process is carried through a
                            combination of human and technological expertise.
                            <a href="http://www.key.work">Keywork</a>, our
                            proprietary recruitment software, enables an agile
                            and accurate talent selection while a team of
                            skilled HR professionals meet the candidates and
                            thoroughly evaluate their expertise and project
                            suitability.
                          </p>
                          <p>
                            The client only has to consider and validate final
                            IT teams reducing time and effort and ensuring
                            quality profiles.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="recruitment js-height">
                  <div className="row expanded question-row">
                    <div className="question-wrapper xxlarge-5 xxlarge-offset-2 xlarge-6 medium-6 medium-offset-1 small-8 xsmall-14 background-lightGray">
                      <h3>
                        Our team performs more than 500 interviews per month,
                        analyzing more than 1000 profiles.
                      </h3>
                      <h2>
                        Recruitment
                        <br />
                        Process
                      </h2>
                    </div>
                    <div className="image-wrapper">
                      <picture>
                        <source
                          srcSet="/imgs/nearshoring/mockup.webp 1x, /imgs/nearshoring/mockup@2x.webp 2x"
                          type="image/webp"
                        />
                        <source
                          srcSet="/imgs/nearshoring/mockup.png 1x, /imgs/nearshoring/mockup@2x.png 2x"
                          type="image/png"
                        />
                        <img
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          alt="Mockup"
                        />
                      </picture>
                    </div>
                  </div>
                  <div className="row expanded answer-wrapper align-bottom">
                    <div className="xxlarge-4 xxlarge-offset-2 medium-6 medium-offset-1 small-10 small-offset-2 xsmall-12 answer-wrapper-text-left">
                      <p>
                        <a href="http://www.key.work">Keywork</a> is a
                        proprietary product developed by Affinity for Sourcing
                        and Screening in the IT market.
                      </p>
                      <p>
                        The combination of Affinity&#8217;s human and
                        technological expertise ensures the ability to respond
                        to customer requests with the necessary precision and
                        assertiveness to thrive in this competitive market.
                      </p>
                      <p>&nbsp;</p>
                      <p>
                        Discover more at{" "}
                        <a
                          href="http://www.key.work"
                          target="_blank"
                          rel="noopener"
                        >
                          www.key.work
                        </a>
                      </p>
                    </div>
                    <div className="xxlarge-6 xxlarge-offset-2 medium-offset-1 small-12 small-offset-2 xsmall-14 xsmall-offset-1 answer-wrapper-text">
                      <h3>
                        No other company has the ability to link the specific
                        client’s needs and the tech consultants’ profiles with
                        the accuracy that Affinity does.
                      </h3>
                    </div>
                  </div>
                </section>
                {/* recruitment*/}

                <section className="general-conditions">
                  <div className="row expanded">
                    <div className="xxlarge-12 xxlarge-offset-3 large-12 medium-12 medium-offset-2 small-14 small-offset-1 columns">
                      <h2 className="js-title-element">How we operate</h2>
                      <ul className="main-conditions-titles">
                        <li className="active" data-target="wrapper-0">
                          Our Model
                        </li>
                        <li data-target="wrapper-1">Our Methodologies</li>
                      </ul>
                      <div className="general-conditons-inner">
                        <div className="conditions-wrapper active wrapper-0">
                          <div className="row expanded xxlarge-up-2 small-up-2 xsmall-up-1">
                            <div className="condition columns">
                              <p>
                                Flexible approach tailored to the client’s needs
                                and business strategies.
                              </p>
                            </div>
                            <div className="condition columns">
                              <p>
                                Own talent data-base of nearly 20 000
                                consultants.
                              </p>
                            </div>
                            <div className="condition columns">
                              <p>
                                Three office locations in Lisbon, Porto and
                                Obidos equipped with state-of-the-art
                                technology.
                              </p>
                            </div>
                            <div className="condition columns">
                              <p>
                                Certified and highly skilled professionals that
                                comply with the best international practices.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="conditions-wrapper  wrapper-1">
                          <div className="row expanded xxlarge-up-2 small-up-2 xsmall-up-1">
                            <div className="condition columns">
                              <p>
                                Consultants' recruitment, team-set-up, training
                                and career management.
                              </p>
                            </div>
                            <div className="condition columns">
                              <p>
                                Project management with Agile methodologies -
                                Scrum/Kanban methodology approach using an Agile
                                software development cycle with sprints of 2 to
                                3 weeks.
                              </p>
                            </div>
                            <div className="condition columns">
                              <p>
                                Teams and project evaluation through direct
                                follow ups and Keywork monitored KPI’s to ensure
                                great team performances.
                              </p>
                            </div>
                            <div className="condition columns">
                              <p>
                                Thorough project monitoring with accurate
                                feedback and timely adjustments.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* general-conditions*/}

                <section className="why-portugal question-list  ">
                  <div className="row expanded">
                    <div className="xxlarge-5 xxlarge-offset-3 medium-offset-2 small-12 small-offset-1 xsmall-14 columns">
                      <h2 className="js-title-element">Why Portugal?</h2>
                      <p className="js-text-element">
                        We are a very competitive country in global markets -
                        from an investment standpoint as well as on a technical
                        or creative perspective.
                      </p>
                    </div>
                    <div className="xxlarge-6 medium-offset-2 small-14 small-offset-1 columns reasons-list-wrapper">
                      <ul className="row xxlarge-up-3 xsmall-up-2">
                        <li className="column">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 174 166"
                          >
                            <path
                              d="M77.3 148.5l-17 8.9c-15.3 8-33.2-4.9-30.3-22l3.2-18.9c1.2-6.8-1.1-13.7-6-18.5L13.5 84.7C1.1 72.6 8 51.6 25.1 49.1l19-2.8c6.8-1 12.7-5.3 15.7-11.4l8.5-17.2C76 2.2 98 2.2 105.7 17.7l8.5 17.2c3 6.2 8.9 10.4 15.7 11.4l19 2.8c17.1 2.5 23.9 23.5 11.6 35.6l-13.8 13.4c-4.9 4.8-7.2 11.7-6 18.5l3.2 18.9c2.9 17-15 30-30.3 22l-17-8.9c-6-3.3-13.2-3.3-19.3-.1z"
                              fill="none"
                              stroke="#06f"
                              strokeWidth="7"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                            />
                          </svg>{" "}
                          <p>
                            Technical
                            <br />
                            Quality
                          </p>
                        </li>
                        <li className="column">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 174 166"
                          >
                            <path
                              d="M11 97.3c17.4 24.2 41.1 43.8 67 58.5 5.6 3 13.5 3.2 19.1 0 25.9-14.7 49.6-34.2 67-58.5 1.6-2.3.7-6.2-1.5-6.1-3.9.2-13.1.4-17 .6-1.7.1-3-1.6-3-3.7 0-24.3-1.2-47.9-4.5-71.9-1-4.8-5.7-8.4-10.7-8.4-30-.9-49.6-.9-79.6 0-5 .3-9.6 3.3-10.6 8.4-3.4 24.1-4.6 47.7-4.5 72 0 2.1-1.4 3.8-3 3.7-3.9-.2-13.1-.3-17-.6-2.4-.2-3.3 3.7-1.7 6z"
                              fill="none"
                              stroke="#06f"
                              strokeWidth="7"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                            />
                          </svg>{" "}
                          <p>
                            Atractive
                            <br />
                            Tax System
                          </p>
                        </li>
                        <li className="column">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 174 166"
                          >
                            <path
                              d="M87.1 138.1c44.7-1.1 80.9-28 80.9-62.5S131.8 13 87.1 13 6.2 41 6.2 75.5c0 26.3 16.8 29 9.3 50.6-7.3 21.1 6.6 30.3 25.5 19 10.5-6.2 17.2-6.3 46.1-7z"
                              fill="none"
                              stroke="#06f"
                              strokeWidth="7"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                            />
                          </svg>{" "}
                          <p>
                            Linguistic
                            <br />
                            Skills
                          </p>
                        </li>
                        <li className="column">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 174 166"
                          >
                            <path
                              d="M86.8 154c7.9 0 58-44.1 58-83.4 0-32-26-58-58-58s-58 26-58 58c0 39.3 50.2 83.4 58 83.4z"
                              fill="none"
                              stroke="#06f"
                              strokeWidth="7"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                            />
                          </svg>{" "}
                          <p>
                            Sunny
                            <br />
                            Location
                          </p>
                        </li>
                        <li className="column">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 174 166"
                          >
                            <path
                              d="M134.9 154.1c-31.7 3.3-63.6 3.3-95.3 0-13.1-.7-22.6-10.1-23.2-23.3-3.3-31.7-3.3-63.6 0-95.3.6-13.1 10.1-22.6 23.2-23.2 31.7-3.3 63.6-3.3 95.3 0 13.1.7 22.6 10.1 23.3 23.3 3.3 31.7 3.3 63.6 0 95.3-.7 13.1-10.1 22.5-23.3 23.2z"
                              fill="none"
                              stroke="#06f"
                              strokeWidth="7"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                            />
                          </svg>{" "}
                          <p>
                            Technological <br />
                            Infrastructures
                          </p>
                        </li>
                        <li className="column">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 174 166"
                          >
                            <path
                              d="M130.1 58.4l-6.6-.6c-.2-7.1-.8-14.2-1.5-21.3-1.8-18.3-18.1-26.8-35-26.8s-33.2 8.5-35 26.8c-.7 7.1-1.3 14.2-1.5 21.3l-6.6.6c-12.6 1-18 14.7-18.1 25.7 0 16.3.3 32.4 1 48.7.6 12.5 10 22.1 22.6 22.6 25 1.2 50.2 1.2 75.2 0 12.4-.7 22.2-9.9 22.6-22.6.7-16.2 1-32.4 1-48.7 0-11.2-5.6-24.3-18.1-25.7z"
                              fill="none"
                              stroke="#06f"
                              strokeWidth="7"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                            />
                          </svg>{" "}
                          <p>Safety</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                {/* why-portugal*/}

                <section className="technologies js-hashtag-scroll">
                  <div className="row align-center">
                    <div className="xxlarge-12 small-13 xsmall-14 text-center">
                      <h2 className="hashtag-title js-write-text">
                        #technologies
                      </h2>
                    </div>
                  </div>
                  <div className="row align-center">
                    <ul className="xxlarge-12 row xxlarge-up-5 medium-13 small-14 xsmall-16 medium-up-3 small-up-2">
                      <li
                        className="column"
                        data-hover="https://affinity.pt/uploads/2018/10/java-1.png"
                      >
                        <div className="wrapper">
                          <img src="./uploads/2018/10/java.png" alt="" />
                        </div>
                      </li>
                      <li
                        className="column"
                        data-hover="https://affinity.pt/uploads/2018/10/c_mais_mais-1.png"
                      >
                        <div className="wrapper">
                          <img src="./uploads/2018/10/c_mais_mais.png" alt="" />
                        </div>
                      </li>
                      <li
                        className="column"
                        data-hover="https://affinity.pt/uploads/2018/10/php-1.png"
                      >
                        <div className="wrapper">
                          <img src="./uploads/2018/10/php.png" alt="" />
                        </div>
                      </li>
                      <li
                        className="column"
                        data-hover="https://affinity.pt/uploads/2018/10/js-1.png"
                      >
                        <div className="wrapper">
                          <img src="./uploads/2018/10/js.png" alt="" />
                        </div>
                      </li>
                      <li
                        className="column"
                        data-hover="https://affinity.pt/uploads/2018/10/python-1.png"
                      >
                        <div className="wrapper">
                          <img src="./uploads/2018/10/python.png" alt="" />
                        </div>
                      </li>
                      <li
                        className="column"
                        data-hover="https://affinity.pt/uploads/2018/10/dot_net-1.png"
                      >
                        <div className="wrapper">
                          <img src="./uploads/2018/10/dot_net.png" alt="" />
                        </div>
                      </li>
                      <li
                        className="column"
                        data-hover="https://affinity.pt/uploads/2018/10/perl-1.png"
                      >
                        <div className="wrapper">
                          <img src="./uploads/2018/10/perl.png" alt="" />
                        </div>
                      </li>
                      <li
                        className="column"
                        data-hover="https://affinity.pt/uploads/2018/10/oracle-1.png"
                      >
                        <div className="wrapper">
                          <img src="./uploads/2018/10/oracle.png" alt="" />
                        </div>
                      </li>
                      <li
                        className="column"
                        data-hover="https://affinity.pt/uploads/2018/10/css-1.png"
                      >
                        <div className="wrapper">
                          <img src="./uploads/2018/10/css.png" alt="" />
                        </div>
                      </li>
                      <li
                        className="column"
                        data-hover="https://affinity.pt/uploads/2018/10/rails-1.png"
                      >
                        <div className="wrapper">
                          <img src="./uploads/2018/10/rails.png" alt="" />
                        </div>
                      </li>
                      <li
                        className="column"
                        data-hover="https://affinity.pt/uploads/2018/10/c_cardinali-1.png"
                      >
                        <div className="wrapper">
                          <img src="./uploads/2018/10/c_cardinali.png" alt="" />
                        </div>
                      </li>
                      <li
                        className="column"
                        data-hover="https://affinity.pt/uploads/2018/10/scala-1.png"
                      >
                        <div className="wrapper">
                          <img src="./uploads/2018/10/scala.png" alt="" />
                        </div>
                      </li>
                      <li
                        className="column"
                        data-hover="https://affinity.pt/uploads/2018/10/ionic-1.png"
                      >
                        <div className="wrapper">
                          <img src="./uploads/2018/10/ionic.png" alt="" />
                        </div>
                      </li>
                      <li
                        className="column"
                        data-hover="https://affinity.pt/uploads/2018/10/html-1.png"
                      >
                        <div className="wrapper">
                          <img src="./uploads/2018/10/html.png" alt="" />
                        </div>
                      </li>
                      <li
                        className="column"
                        data-hover="https://affinity.pt/uploads/2018/10/jquery-1.png"
                      >
                        <div className="wrapper">
                          <img src="./uploads/2018/10/jquery.png" alt="" />
                        </div>
                      </li>
                      <li
                        className="column"
                        data-hover="https://affinity.pt/uploads/2018/10/object_c-1.png"
                      >
                        <div className="wrapper">
                          <img src="./uploads/2018/10/object_c.png" alt="" />
                        </div>
                      </li>
                      <li
                        className="column"
                        data-hover="https://affinity.pt/uploads/2018/10/ext_js-1.png"
                      >
                        <div className="wrapper">
                          <img src="./uploads/2018/10/ext_js.png" alt="" />
                        </div>
                      </li>
                      <li
                        className="column"
                        data-hover="https://affinity.pt/uploads/2018/10/node-1.png"
                      >
                        <div className="wrapper">
                          <img src="./uploads/2018/10/node.png" alt="" />
                        </div>
                      </li>
                      <li
                        className="column"
                        data-hover="https://affinity.pt/uploads/2018/10/angular-1.png"
                      >
                        <div className="wrapper">
                          <img src="./uploads/2018/10/angular.png" alt="" />
                        </div>
                      </li>
                      <li
                        className="column"
                        data-hover="https://affinity.pt/uploads/2018/10/knockout-1.png"
                      >
                        <div className="wrapper">
                          <img src="./uploads/2018/10/knockout.png" alt="" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>
                {/* technologies-logos*/}

                <section className="technologies-list ">
                  <div className="row align-center hashtag-wrapper">
                    <div className="xxlarge-12 small-13 xsmall-14 text-center">
                      <h2 className="hashtag-title">#technologies</h2>
                    </div>
                  </div>

                  <div className="row expanded align-center">
                    <div className="xxlarge-12 xlarge-13 flex-container">
                      <div
                        className="technologies-list-wrapper"
                        data-parallax
                        data-friction="-0.45"
                      >
                        <article>
                          <div className="technologies-list-container">
                            <p>
                              <svg viewBox="0 0 185.75 169.5">
                                <path d="M145.64 71a226.89 226.89 0 00-53.1-53.2c-10.61-7.25-33.39-5-34.05 11.2-.33 8-.58 8.2-.77 16.15-14.33.2-17.6.75-31.89 1.73C11.18 47.49 3.85 70 3.69 83v3.6c.16 13 7.49 35.46 22.14 36.12 14.29 1 17.56 1.53 31.89 1.73.19 7.95.44 8.2.77 16.15.66 16.23 23.44 18.45 34.05 11.2a227.08 227.08 0 0053.1-53.2 25.34 25.34 0 000-27.6z" />
                              </svg>
                            </p>
                            <span className="title">Development Trends</span>
                            <ul role="list">
                              <li>AI or Bots</li>
                              <li>Javascript</li>
                              <li>Progressive Web App</li>
                              <li>Single Page Application</li>
                              <li>Mobile-Friendly Website</li>
                              <li>Blockchain Technology</li>
                              <li>CyberSecurity</li>
                              <li>Motion UI</li>
                            </ul>
                          </div>
                        </article>
                        <article>
                          <div className="technologies-list-container">
                            <p>
                              <svg viewBox="0 0 185.75 169.5">
                                <path d="M106.37 101.8c-8.61.79-87 .79-95.57 0-3.57-.16-6.13-2.43-6.32-5.59a98.71 98.71 0 010-22.92c.19-3.16 2.75-5.43 6.32-5.59 8.61-.79 87-.79 95.57 0 3.57.16 6.13 2.43 6.32 5.59a98.71 98.71 0 010 22.92c-.19 3.16-2.75 5.43-6.32 5.59zm0-52.28c-8.61.79-87 .79-95.57 0-3.57-.16-6.13-2.43-6.32-5.59a98.71 98.71 0 010-22.93c.19-3.16 2.75-5.43 6.32-5.59 8.61-.79 87-.79 95.57 0 3.57.16 6.13 2.43 6.32 5.59a98.71 98.71 0 010 22.92c-.19 3.17-2.75 5.44-6.32 5.6zM10.8 120c8.61-.79 87-.79 95.57 0 3.57.16 6.13 2.43 6.32 5.59a98.71 98.71 0 010 22.92c-.19 3.16-2.75 5.43-6.32 5.59-8.61.79-87 .79-95.57 0-3.57-.16-6.13-2.43-6.32-5.59a98.71 98.71 0 010-22.92c.19-3.18 2.75-5.45 6.32-5.59z" />
                              </svg>
                            </p>
                            <span className="title">
                              BI, Big Data, Data Analysts
                            </span>
                            <ul role="list">
                              <li>OBIEE</li>
                              <li>Powercenter</li>
                              <li>Microsoft BI (SSAS, SSIS, SSRS)</li>
                              <li>SAS</li>
                              <li>Business Objects</li>
                              <li>Datastage</li>
                              <li>Hadoop</li>
                              <li>Qlikview</li>
                              <li>Microstrategy</li>
                              <li>Tableau</li>
                              <li>Pentaho</li>
                            </ul>
                          </div>
                        </article>
                      </div>

                      <div
                        className="technologies-list-wrapper"
                        data-parallax
                        data-friction="-0.2"
                      >
                        <article>
                          <div className="technologies-list-container">
                            <p>
                              <svg viewBox="0 0 185.75 169.5">
                                <path d="M114.4 132.75c-28.94 2.87 20.2-31.31 20.2-49.8s-44.18-46.37-22.42-46.37c25.85 0 70.07 27.86 70.07 46.34s-40.75 47.13-67.85 49.83zm-40.84.17c-25.84 0-70.06-27.86-70.06-46.34s40.75-47.13 67.85-49.83c28.94-2.88-20.2 31.31-20.2 49.8s44.18 46.37 22.41 46.37z" />
                              </svg>
                            </p>
                            <span className="title">Main Tech Languages</span>
                            <ul role="list">
                              <li>Microsoft</li>
                              <li>Java</li>
                              <li>Scala</li>
                              <li>Ruby</li>
                              <li>Go</li>
                              <li>Kotlin</li>
                              <li>Typescript</li>
                              <li>C/C++</li>
                              <li>Angular</li>
                              <li>React</li>
                              <li>PHP</li>
                              <li>Python</li>
                              <li>Objective C</li>
                              <li>Swift</li>
                              <li>Xamarin</li>
                              <li>Ionic</li>
                              <li>Data Base</li>
                              <li>Oracle SOA Suite</li>
                              <li>Outsystems</li>
                              <li>IBM Mainframe</li>
                              <li>UX/UI</li>
                              <li>SAP</li>
                            </ul>
                          </div>
                        </article>
                        <article>
                          <div className="technologies-list-container">
                            <p>
                              <svg viewBox="0 0 185.75 169.5">
                                <path d="M37 67.68C13.13 57.9-4.7 80.7 7.45 98.55c12 17.65 38.1 37.9 63.47 51.33 7.18 3.79 17.81 3.14 26.94-4.69 35.07-30.08 94.34-110 72.78-124.76-24.72-16.91-63 41-81.69 62.16-4.86 5.51-11 7-18.09 2.6A216.56 216.56 0 0037 67.68z" />
                              </svg>
                            </p>
                            <span className="title">Management & Quality</span>
                            <ul role="list">
                              <li>Business Analysts</li>
                              <li>BPM</li>
                              <li>Functional Analysts</li>
                              <li>Project Management</li>
                              <li>Scrum Master</li>
                              <li>DevOps</li>
                              <li>Product Owner</li>
                              <li>Support</li>
                              <li>Functional Tester</li>
                              <li>Automation Tester</li>
                              <li>Quality Assurance</li>
                              <li>Release Manager</li>
                              <li>Application Architecture</li>
                            </ul>
                          </div>
                        </article>
                      </div>

                      <div className="technologies-list-wrapper">
                        <article>
                          <div className="technologies-list-container">
                            <p>
                              <svg viewBox="0 0 185.75 169.5">
                                <clipPath id="clip-path">
                                  <path d="M0 1.58h136.84v166.35H0z" />
                                </clipPath>
                                <g clipPath="url(#clip-path)">
                                  <path d="M133.34 108.78a20.2 20.2 0 00-20.2-20.21h-.25c-.12-1.34-.23-2.69-.37-4-.45-8.74-8.42-20.64-15.45-25.45-10.63-7.27-46.1-7.27-57.3 0-6.32 4.11-15 16.71-15.45 25.45-.14 1.34-.24 2.69-.36 4h-.25A20.2 20.2 0 0023 129a134.4 134.4 0 007.35 18.91c3.84 8.59 6.71 15 15.45 15.44 21.54 1.42 24.19 1.58 45.3 0 8.74-.45 11.4-6.54 15.45-15.44 2.41-6.06 5.46-11.77 7.35-18.91a20.19 20.19 0 0019.44-20.22z" />
                                  <path d="M68.42 50.65V28.46M80.11 16.77A11.69 11.69 0 1168.42 5.08a11.69 11.69 0 0111.69 11.69z" />
                                </g>
                              </svg>
                            </p>
                            <span className="title">
                              RPA, AI, Machine Learning
                            </span>
                            <ul role="list">
                              <li>UiPath</li>
                              <li>Blue Prism</li>
                              <li>Automation Anywhere</li>
                              <li>Accord.NET</li>
                              <li>Tensor Flow</li>
                              <li>Amazon Machine learning</li>
                              <li>Theano</li>
                            </ul>
                          </div>
                        </article>
                        <article>
                          <div className="technologies-list-container">
                            <p>
                              <svg viewBox="0 0 185.78 169.5">
                                <path d="M61.96 14.93a389.92 389.92 0 00-51.44 28.65c-3.88 2.64-5.93 7.26-6.3 11.94a426.23 426.23 0 00.06 50.67 17.1 17.1 0 006.68 12.31c11.73 9 36.44 26.27 50.56 35.35a17.08 17.08 0 0018.42 0c14.2-9.07 38.94-26.47 50.61-35.46a17.2 17.2 0 006.64-12.22c1.08-13.18 1.31-37.24.11-50.56-.42-4.65-2.51-9.18-6.36-11.81a379.7 379.7 0 00-51.1-28.91 21.1 21.1 0 00-17.88.04z" />
                              </svg>
                            </p>
                            <span className="title">
                              System & Infrastructures
                            </span>
                            <ul role="list">
                              <li>Windows</li>
                              <li>Unix</li>
                              <li>AIX</li>
                              <li>Linux</li>
                              <li>Virtualization</li>
                              <li>HP-UX</li>
                              <li>Networks</li>
                              <li>Security</li>
                              <li>Storage</li>
                            </ul>
                          </div>
                        </article>
                        <article>
                          <div className="technologies-list-container">
                            <p>
                              <svg viewBox="0 0 185.75 169.5">
                                <path d="M139.57 75.69a5.3 5.3 0 01-3.07-4.88v0a41.15 41.15 0 00-81.73-6.95c-1.54 6-7.29 8.8-16.72 8.86-17.34 0-33.62 13.93-34.47 32A33.62 33.62 0 0037.1 140h87.65c18.58 0 34.37-14.71 34.55-33.35a33.67 33.67 0 00-19.73-30.96z" />
                              </svg>
                            </p>
                            <span className="title">Cloud</span>
                            <ul role="list">
                              <li>Microsoft Azure</li>
                              <li>Amazon Web Services (AWS)</li>
                              <li>Google Cloud Platform</li>
                            </ul>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </section>
                {/* technologies-list*/}

                <section className="clients js-height">
                  <div className="row expanded align-center">
                    <div className="xxlarge-9 medium-12 small-14 columns">
                      <h2>
                        We stand close to each one of our clients. Understanding
                        every customer's drive is at the core of Affinity’s
                        philosophy.
                      </h2>
                    </div>
                  </div>
                  <div className="clients-container">
                    <div className="clients-wrapper">
                      <article>
                        <ul className="row xxlarge-9 xxlarge-up-3 small-up-2 medium-14 small-12 xsmall-14 xsmall-up-1 clients-list">
                          <li className="column">
                            <div className="logo-wrapper">
                              <img
                                className="normal"
                                src="./uploads/2020/05/ibm.png"
                                alt=""
                              />
                              <img
                                className="hover"
                                src="./uploads/2020/05/ibm-cinza.png"
                                alt=""
                              />
                            </div>
                          </li>
                          <li className="column">
                            <div className="logo-wrapper">
                              <img
                                className="normal"
                                src="./uploads/2020/05/eos.png"
                                alt=""
                              />
                              <img
                                className="hover"
                                src="./uploads/2020/05/eos-cinza.png"
                                alt=""
                              />
                            </div>
                          </li>
                          <li className="column">
                            <div className="logo-wrapper">
                              <img
                                className="normal"
                                src="./uploads/2020/05/vestas.png"
                                alt=""
                              />
                              <img
                                className="hover"
                                src="./uploads/2020/05/vestas-cinza.png"
                                alt=""
                              />
                            </div>
                          </li>
                          <li className="column">
                            <div className="logo-wrapper">
                              <img
                                className="normal"
                                src="./uploads/2020/05/euronext.png"
                                alt=""
                              />
                              <img
                                className="hover"
                                src="./uploads/2020/05/euronext-cinza.png"
                                alt=""
                              />
                            </div>
                          </li>
                          <li className="column">
                            <div className="logo-wrapper">
                              <img
                                className="normal"
                                src="./uploads/2020/05/evident.png"
                                alt=""
                              />
                              <img
                                className="hover"
                                src="./uploads/2020/05/evident-cinza.png"
                                alt=""
                              />
                            </div>
                          </li>
                          <li className="column">
                            <div className="logo-wrapper">
                              <img
                                className="normal"
                                src="./uploads/2020/05/deloitte.png"
                                alt=""
                              />
                              <img
                                className="hover"
                                src="./uploads/2020/05/deloitte-cinza.png"
                                alt=""
                              />
                            </div>
                          </li>
                          <li className="column">
                            <div className="logo-wrapper">
                              <img
                                className="normal"
                                src="./uploads/2020/05/natixix.png"
                                alt=""
                              />
                              <img
                                className="hover"
                                src="./uploads/2020/05/natixis-cinza.png"
                                alt=""
                              />
                            </div>
                          </li>
                          <li className="column">
                            <div className="logo-wrapper">
                              <img
                                className="normal"
                                src="./uploads/2020/05/siemens.png"
                                alt=""
                              />
                              <img
                                className="hover"
                                src="./uploads/2020/05/siemens-cinza.png"
                                alt=""
                              />
                            </div>
                          </li>
                          <li className="column">
                            <div className="logo-wrapper">
                              <img
                                className="normal"
                                src="./uploads/2020/05/axa.png"
                                alt=""
                              />
                              <img
                                className="hover"
                                src="./uploads/2020/05/axa-cinza.png"
                                alt=""
                              />
                            </div>
                          </li>
                        </ul>
                      </article>
                      <article>
                        <ul className="row xxlarge-9 xxlarge-up-3 small-up-2 medium-14 small-12 xsmall-14 xsmall-up-1 clients-list">
                          <li className="column">
                            <div className="logo-wrapper">
                              <img
                                className="normal"
                                src="./uploads/2020/05/daymon.png"
                                alt=""
                              />
                              <img
                                className="hover"
                                src="./uploads/2020/05/daymon-cinza.png"
                                alt=""
                              />
                            </div>
                          </li>
                          <li className="column">
                            <div className="logo-wrapper">
                              <img
                                className="normal"
                                src="./uploads/2020/05/bnp.png"
                                alt=""
                              />
                              <img
                                className="hover"
                                src="./uploads/2020/05/bnp-cinza.png"
                                alt=""
                              />
                            </div>
                          </li>
                          <li className="column">
                            <div className="logo-wrapper">
                              <img
                                className="normal"
                                src="./uploads/2020/05/cgi.png"
                                alt=""
                              />
                              <img
                                className="hover"
                                src="./uploads/2020/05/cgi-cinza.png"
                                alt=""
                              />
                            </div>
                          </li>
                          <li className="column">
                            <div className="logo-wrapper">
                              <img
                                className="normal"
                                src="./uploads/2018/07/accenture.png"
                                alt=""
                              />
                              <img
                                className="hover"
                                src="./uploads/2018/07/accenture_gray.png"
                                alt=""
                              />
                            </div>
                          </li>
                          <li className="column">
                            <div className="logo-wrapper">
                              <img
                                className="normal"
                                src="./uploads/2018/02/ageas.png"
                                alt=""
                              />
                              <img
                                className="hover"
                                src="./uploads/2018/02/ageas_grey.png"
                                alt=""
                              />
                            </div>
                          </li>
                          <li className="column">
                            <div className="logo-wrapper">
                              <img
                                className="normal"
                                src="./uploads/2018/07/hitachi.png"
                                alt=""
                              />
                              <img
                                className="hover"
                                src="./uploads/2018/07/hitachi_gray.png"
                                alt=""
                              />
                            </div>
                          </li>
                        </ul>
                      </article>
                    </div>
                    <svg
                      viewBox="0 0 719.18 717.5"
                      className="blob blob-right"
                      data-direction="right"
                    >
                      <path
                        d="M1.27 338.07C12.86 51.72 60.33 8.05 290.37.28S712.31 146.62 719 344.5 544.61 708.75 314.58 716.87c-248.76 8.77-325.74-71.7-313.31-378.8z"
                        data-original="M1.27 338.07C12.86 51.72 60.33 8.05 290.37.28S712.31 146.62 719 344.5 544.61 708.75 314.58 716.87c-248.76 8.77-325.74-71.7-313.31-378.8z"
                      />
                    </svg>
                    <svg
                      viewBox="0 0 719.18 717.5"
                      className="blob blob-left"
                      data-direction="left"
                    >
                      <path
                        d="M1.27 338.07C12.86 51.72 60.33 8.05 290.37.28S712.31 146.62 719 344.5 544.61 708.75 314.58 716.87c-248.76 8.77-325.74-71.7-313.31-378.8z"
                        data-original="M1.27 338.07C12.86 51.72 60.33 8.05 290.37.28S712.31 146.62 719 344.5 544.61 708.75 314.58 716.87c-248.76 8.77-325.74-71.7-313.31-378.8z"
                      />
                    </svg>
                  </div>
                  <div className="drag-helper">
                    <h4>Drag</h4>
                    <svg viewBox="0 0 124.51 8.51">
                      <path
                        d="M124.51 3.51H6.86A6.36 6.36 0 0 0 8.33 0C6.17 2.12 3.38 3.22 0 4.25a20.4 20.4 0 0 1 8.33 4.26 7.36 7.36 0 0 0-1.5-3.61h117.68z"
                        fill="#7c3d3d"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>

                  <div className="drag-helper drag-left">
                    <h4>Drag</h4>
                    <svg viewBox="0 0 124.51 8.51">
                      <path
                        d="M124.51 3.51H6.86A6.36 6.36 0 0 0 8.33 0C6.17 2.12 3.38 3.22 0 4.25a20.4 20.4 0 0 1 8.33 4.26 7.36 7.36 0 0 0-1.5-3.61h117.68z"
                        fill="#7c3d3d"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                </section>

                <section className="full-hashtag">
                  <div className="background-hashtag text-center">
                    <h4 className="js-write-text">testimonials</h4>
                  </div>
                  <div className="row expanded align-center text-center">
                    <div className="xxlarge-8 medium-12 small-14 columns">
                      <h2 className="js-text-element">
                        Great technology is always based on perfect
                        relationships.
                      </h2>
                    </div>
                  </div>
                </section>
                {/*  full-hashtag */}

                <section className="row expanded align-center testimonial-section-wrapper">
                  <div className="xxlarge-9 large-10 small-14 xsmall-14 pos-rel">
                    <svg viewBox="0 0 679.18 638.02">
                      <path d="M351.61 637.99c-49 0-85.65-18.1-111.93-55.34-22.25-31.52-35.19-73.92-48.9-118.8-12.62-41.32-25.66-84.06-47.22-125.64-13.81-26.65-39.87-48.7-65.07-70-20.27-17.15-41.24-34.89-56.19-55.38-18.39-25.19-25.29-51.19-21.12-79.46C9.44 77.41 50.43 38.82 123.01 18.68 176.01 3.99 247.27-1.81 347.34.49c95.91 2.21 167.93 9.81 220.18 23.23 33.49 8.62 58.75 19.51 77.07 33.27 28.58 21.48 34.58 46.5 34.58 63.71 0 66.73-45.55 110.55-85.74 149.22-23.61 22.71-45.91 44.17-54.89 66.51-18.53 46.06-28.77 90.93-37.81 130.56-10.75 47.07-20 87.72-40 118.23-23.32 35.52-59 52.77-109.12 52.77z" />
                    </svg>
                    <div className="testimonials-section">
                      <div className="testimonial-content">
                        <div className="testimonial-picture block-bg-cover">
                          <img
                            className="element-cover"
                            src="./uploads/2023/07/cover-2.png"
                            alt="Testimonial Photo"
                          />
                        </div>
                        <h2>
                          “The cooperation with Affinity supports us in
                          achieving our business goals. We especially value the
                          stability of the relationship; we still have the same
                          point of contact since 2020 what means trust and ease
                          of work. The cooperation is never commercially over
                          the top, which I personally value and the
                          communication is direct and open, exactly like the
                          Dutch.”
                        </h2>
                        <h3>Raymond Pennings, XO10 Co-Founder & CEO</h3>
                      </div>
                      <div className="testimonial-content">
                        <div className="testimonial-picture block-bg-cover">
                          <img
                            className="element-cover"
                            src="./uploads/2023/07/cover-munich.png"
                            alt="Testimonial Photo"
                          />
                        </div>
                        <h2>
                          “I like Affinity as a company, the strategy, how they
                          treat people, how they carry out their operations and
                          how we work together. Affinity enabled me to scale up
                          my business by giving me people on time, to fulfill
                          different technological needs.”
                        </h2>
                        <h3>Moritz Koppe, PROBIS CEO</h3>
                      </div>
                      <div className="testimonial-content">
                        <div className="testimonial-picture block-bg-cover">
                          <img
                            className="element-cover"
                            src="./uploads/2018/07/Robin-van-Staveren.jpg"
                            alt="Testimonial Photo"
                          />
                        </div>
                        <h2>
                          “We have grown to believe that Affinity is the right
                          partner for our organization. Our company DNA is very
                          much aligned with Affinity’s: we share the same
                          vision, ethics and customer-centricity and are assured
                          that our partnership will continue to be beneficial
                          for both companies. We look forward to strengthening
                          our relationship and collaborate in many ways for
                          years to come.”
                        </h2>
                        <h3>
                          Robin van Staveren, Sr Sales & Account Manager,
                          Providit
                        </h3>
                      </div>
                    </div>
                  </div>
                </section>
                {/*  testimonials-section */}

                <section className="international-projects container">
                  <div className="row expanded">
                    <div className="xxlarge-4 xxlarge-offset-3 medium-6 medium-offset-1 xsmall-14 columns meta-title-wrapper">
                      <div
                        className="morphing-letter"
                        data-morphpath="M273.81,684.73c-61.74,0-101.29-3.13-132.23-10.46C104.53,665.5,78.44,650,59.45,625.63,23,578.81,29.25,496,19,365,12.44,281.15-1.71,229.78,4,183.9,10.75,130.21,26.1,92,52.33,63.62c21.9-23.68,51.43-40.1,90.28-50.2C177.84,4.26,221,0,278.3,0,380.68,0,437.94,23.73,469.77,79.36,499.62,131.53,490,209.55,490,335c0,125.77,13.82,205.58-14.73,261.9-16,31.56-40,53.77-73.32,67.88C369.79,678.39,329.07,684.73,273.81,684.73Z"
                      >
                        <svg viewBox="0 0 800 750">
                          <defs>
                            <mask
                              id="newsMask"
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="800"
                              height="750"
                            >
                              <filter id="newsFilter" x="0" y="0">
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
                                d="M273.82 684.73c-61.74 0-101.29-3.13-132.23-10.46-37.05-8.77-63.14-24.27-82.13-48.64-36.45-46.82-43.99-123.2-54.24-254.15-6.56-83.85-6.92-141.7-1.21-187.58 6.75-53.69 22.1-91.9 48.33-120.28 21.9-23.68 51.43-40.1 90.28-50.2C177.85 4.26 221.01 0 278.31 0c102.38 0 159.64 23.73 191.47 79.36 29.85 52.17 35.5 130 35.5 255.49 0 125.77-1.45 205.72-30 262-16 31.56-40 53.77-73.32 67.88-32.16 13.66-72.88 20-128.14 20z"
                              />
                            </mask>

                            <text
                              id="newsText"
                              x="615"
                              y="348"
                              fontSize="100"
                              letterSpacing="-4px"
                              fontWeight="bold"
                              textAnchor="middle"
                            >
                              International
                            </text>
                          </defs>

                          <path
                            className="letter shadow-letter"
                            filter="url(#newsFilter)"
                            fill="rgba(191, 0, 0, .5)"
                            d="M273.82 684.73c-61.74 0-101.29-3.13-132.23-10.46-37.05-8.77-63.14-24.27-82.13-48.64-36.45-46.82-43.99-123.2-54.24-254.15-6.56-83.85-6.92-141.7-1.21-187.58 6.75-53.69 22.1-91.9 48.33-120.28 21.9-23.68 51.43-40.1 90.28-50.2C177.85 4.26 221.01 0 278.31 0c102.38 0 159.64 23.73 191.47 79.36 29.85 52.17 35.5 130 35.5 255.49 0 125.77-1.45 205.72-30 262-16 31.56-40 53.77-73.32 67.88-32.16 13.66-72.88 20-128.14 20z"
                          />
                          <path
                            className="letter main-letter"
                            fill="#006cfc"
                            d="M273.82 684.73c-61.74 0-101.29-3.13-132.23-10.46-37.05-8.77-63.14-24.27-82.13-48.64-36.45-46.82-43.99-123.2-54.24-254.15-6.56-83.85-6.92-141.7-1.21-187.58 6.75-53.69 22.1-91.9 48.33-120.28 21.9-23.68 51.43-40.1 90.28-50.2C177.85 4.26 221.01 0 278.31 0c102.38 0 159.64 23.73 191.47 79.36 29.85 52.17 35.5 130 35.5 255.49 0 125.77-1.45 205.72-30 262-16 31.56-40 53.77-73.32 67.88-32.16 13.66-72.88 20-128.14 20z"
                          />

                          <use href="#newsText" fill="#006cfc" />
                          <use
                            href="#newsText"
                            fill="white"
                            mask="url(#newsMask)"
                          />
                        </svg>

                        <h3 className="subtitle js-text-element">
                          We use global delivery models that allow us to provide
                          the best combination of cost, quality and speed.
                        </h3>
                      </div>
                    </div>
                  </div>
                </section>
                {/* international-projects*/}

                <section className="we-do container">
                  <div className="rotate-title">
                    <h4>Global Presence</h4>
                  </div>
                  <div className="drag-helper">
                    <h4>Swipe</h4>
                    <svg viewBox="0 0 124.51 8.51">
                      <path
                        d="M124.51 3.51H6.86A6.36 6.36 0 0 0 8.33 0C6.17 2.12 3.38 3.22 0 4.25a20.4 20.4 0 0 1 8.33 4.26 7.36 7.36 0 0 0-1.5-3.61h117.68z"
                        fill="#7c3d3d"
                        fillRule="evenodd"
                      />
                    </svg>
                    <svg className="right" viewBox="0 0 124.51 8.51">
                      <path
                        d="M124.51 3.51H6.86A6.36 6.36 0 0 0 8.33 0C6.17 2.12 3.38 3.22 0 4.25a20.4 20.4 0 0 1 8.33 4.26 7.36 7.36 0 0 0-1.5-3.61h117.68z"
                        fill="#7c3d3d"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="map-wrapper" id="map-affinity">
                    <svg className="fake-shadow" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                    <svg className="svg-scale" viewBox="0 0 1250 620">
                      <g>
                        <path
                          d="M151.8,225.6c-23,12.5-8.5,53.5,13.3,32.4c6.3-6.1,15.3-1.8,14.5,5.9c-0.5,5.6-6.2,13.5-2.3,18.4
                c5.3,6.4,19.6-7.1,18.7,7.3c-0.7,11.7,3.4,23.9,12.4,19.1c8.4-4.5,13.4,8.4,18.9,3.9c29.8-23.3,93.1-2.6,102,21.1
                c8.9,23.6,38.6,33,38.6,33c65.1,19.9,22.3,33.6,20.1,52.2c-2.2,18.5-2.2,27.1-20.6,43.6c-18.4,16.4-1.5,22.8-44.7,64.9
                c-40.2,39.1,2.7,70.2-5.2,79.9c-1.1,1.3-2.9,1.8-4.5,1.3c-50.9-15.6-52.4-78.5-55.1-120.5c-2.8-42.5-3.1-47.1-21.3-59.2
                c-18.2-12.1-18.8-23.9-18.8-23.9s-18.5-38.2-9.9-52.5s11.8-19.2,8.8-31.7c-1.4-5.7-10.2-3.5-12.3-2c-5.5,4-15.5,3-19.8-0.5
                c-4.3-3.5-6.4-6.4-12.1-17.5c-5.8-11.1-13.7-19.1-28.2-18.7s-37.8-3.4-38.6-18.9c-1-21.1-19.3-42.2-19.3-42.2S56.1,199.1,72,153.8
                s7.7-65.4-8.1-71.1c-12.1-4.4-30.6-0.8-38.5,1.1c-3.6,0.9-7.4-0.2-10-3c-4.2-4.5-5.1-13.3,20.2-27.4c40.4-22.6,73.8-11.6,73.8-11.6
                c15.9,3.6,68.3,11.2,113.3-9s131.5-16.3,139,22.2c0.1,0.6,0.2,1.2,0.3,1.8c7,37.6-14.5,74.6-49.6,86c-12.8,4.2-25.9,9.7-36,16.7
                c-33,23-35.5,63.5-60.9,69.4C190.2,234.7,174.8,213.1,151.8,225.6z"
                        />
                      </g>
                      <g>
                        <path
                          d="M1172.4,568.6c0,0-15.1-0.9,4.8-11.4c19.9-10.6,25-14.4,25-14.4s12.6-0.7-1.6,8.7
                C1186.3,560.8,1172.4,568.6,1172.4,568.6z"
                        />
                      </g>
                      <g>
                        <path
                          d="M1211.9,543.3c-0.1-0.8,0.1-1.6,0.4-2.4c0.6-1.5,1.9-4.4,4.6-6.9c3.9-3.5,6.1-7.9,6-13.1
                c-0.1-4.3,1.9-7.5,4.5-1.4c2.6,6.1,2.9,9.4,5.5,9.7c2.6,0.2,4.4,4.8-2.9,7.8C1223.1,540,1212.4,549.7,1211.9,543.3z"
                        />
                      </g>
                      <g>
                        <path
                          d="M722.3,414.9c-0.5,1.4-3.2,3.3-4,4.5c-1.9,3.2-3.6,7.6-8.2,6.8c-6.9-1.2-9.5,7.4-9.4,10.1
                c0.1,2.6,1.2,11-1.2,17.1c-2,5.3-4.4,13.9,2.4,17.7c6.9,3.8,22.3-10.8,26.7-44.7C730.6,411.2,724.7,408,722.3,414.9z"
                        />
                      </g>
                      <g>
                        <path
                          d="M940.1,343.7c-3.5,7.8,18.6,49.1,65.6,52.9c14.4,1.2,9.1-6.1,0-9.7c-11.1-4.4-24.9-12.4-31.7-18.1
                C959.8,357.2,943.3,336.4,940.1,343.7z"
                        />
                      </g>
                      <g>
                        <path
                          d="M1014.6,347.2c-10.3-6.3-22.2-8.7-25.5-1.6c-4.6,9.9-0.6,25.5,18.5,27.6c17.2,1.9,20.1-1.7,20.1-9.6
                C1027.7,358.7,1026.2,354.3,1014.6,347.2z"
                        />
                      </g>
                      <g>
                        <path
                          d="M1122.9,366.9c0,0-41.4-21-39.6-5.9c1.3,10.7,14.9,10.7,27.5,21.9c3.1,2.8,9.2,16.7,15.4,15.1
                c6.2-1.6,11.9-4.1,21.2,0.5c9.3,4.6,16.5-12.7-4-22.1C1122.9,366.9,1122.9,366.9,1122.9,366.9z"
                        />
                      </g>
                      <g>
                        <path
                          d="M1079.7,145.3c-10.6,8.9,3.6,24.2-4.2,35.9c-8.2,12.3-25.1,13.1-20.6,28.9c3.6,12.3,28.5,0.1,37.3-17.6
                C1102.2,172,1088.2,138,1079.7,145.3z"
                        />
                      </g>
                      <g>
                        <path
                          d="M494.6,100.9c-4.9-1.2-11.6,3.8-13.2,7.9c-1.7,4.1-2,8.2,2,8.3c3.9,0.1,10.7-0.9,12.4-3.9
                C497.5,110.2,498.2,101.9,494.6,100.9z"
                        />
                      </g>
                      <g>
                        <path
                          d="M505.2,124.2c6.3,0.7,10.7-0.3,15-2.3c6.7-3,11.1-9.9,2.5-15.7c-6.3-4.3-8.8-6.3-10.1-9.7
                c-1.1-3,0.9-8-2.4-11.2c-2.1-2.1-9.4-1.1-11.7,6c-2.5,7.8,7.7,10.4,0.4,23.2C495.1,121.1,500.6,123.6,505.2,124.2z"
                        />
                      </g>
                      <g>
                        <path
                          d="M1010.6,179c10.8-14.7,19.3,20.5,31.9,15.1c11.6-4.9-5.9-33.8,6-43.7c36.5-30.1,68.3-32.1,78.4-55.1
                c20.7-47.2-31.4-48.9-31.4-48.9c-71.3-7.7-214.7-19-238.3-23.8c-23.6-4.8-36.5-12.4-65.5-1.5c-29.1,10.9-45.9,17.3-77.7,25.8
                c-15.7,4.2-35.7,5.6-51.7,4.5c-14.9-1-62.6-33.2-92.4-4.1C555.1,61.9,533,74,541.3,83.9c8.5,10.2,14.2,11,20.1,10.5
                c14.3-1.3,43.7-35.8,43.7-8.6c0,11-15.3,20.4-38.1,19.1c-3.9-0.2-10,0.8-15.6,0.3c-13.2-1.1-23.2,15.8-28.6,19.5
                c-5.4,3.6-20.3,6.3-21.8,9.1c-3.5,6.4,22.6,28.3-3.3,22.1c-25.1-6-18,14.4-19.9,19.3c-1.2,3.1,0.4,9.7,7.3,9.4
                c4.5-0.1,3.3,4.1,3.5,6l0.5,3.9c0.1,1.1,0,2.1-0.5,3.1c0,0,0,0,0,0c-0.6,1.2-1.7,2.1-2.8,2.7c-17.5,9.2-33.5,23.5-40.7,45.8
                c-20.3,62.4,19.2,89.3,60.8,86.2c41.5-3.1,69,25.8,58.5,92.4s50.8,113.6,74.8,73.4s21.4-52.2,35.6-62.8c14.3-10.5,16.2-23,5.5-53.5
                c-10.7-30.5,40.7-40.7,44.6-57.6c3.9-16.9-12.7-14.8-26-26.5c-13.3-11.7-53.2-71.3-44.5-69.4c8.7,1.9,39,50.8,40.7,55.3
                c1.7,4.5,17.4,12.4,30.2,4.2s64.2-30.3,20.1-47.9s-29-25.8-13.1-17c15.9,8.8,50.8,15.5,56.3,16.3c5.5,0.8,28.3,7.7,37.1,37.6
                c8.9,29.9,25.2,59.6,35.8,26.4s29.9-54.9,47.1-44.7c9.9,5.8,14.4,20.2,17.7,30.9c8.6,27.6,24.8,57.8,39.3,59.3
                c15.2,1.5-4.3-62.5,6-78c7.1-10.7,13.4-12.3,32.7-18C1066.3,234.7,996.1,198.8,1010.6,179z M634.3,211.7c-41.3-3.7-76,2-78.4-12.9
                v0c-1.4-8.7-9.1-14.8-17.6-13.8c-8.7,1-20.3,3.1-32.5,7c-3.2,1-6.5,1.1-9.7,0.3c-1-0.3-1.8-0.6-2.4-1c-0.8-0.6-0.8-1.4-0.5-2.1
                c0.4-0.9,1.2-1.4,2.1-1.6c1.6-0.3,3.3-0.8,5.2-1.7c6.5-2.9,11.1-7.5,14.7-12c4.8-6,14.2-13.3,23.6-16.3c6.8-2.2,11.3-2.1,18.5,0.8
                c4.5,1.8,7.4,3.9,10.9,8.2c5.6,6.9,8.8,14,13,12.2c6.3-2.7-9-23.6-4.2-24.9c9.7-2.6,17.2,27.3,26.3,31.3c8.2,3.5,6.4-12.1,12-12.5
                c5.8-0.4,8.3,17,18.4,15c7-1.3,22.2,1,25.6,7.4C663.8,203.4,660.7,214,634.3,211.7z"
                        />
                      </g>
                      <g>
                        <path
                          d="M1075.8,416.5c6.3-5.2,14.9-6.2,22.2-2.8c8.4,4,18.8,8,23.4,4.9c20.7-13.5,37.9,53.6,35.3,67.9
                c-2.6,14.4-25.6,30.3-44.8,43.6c-19.1,13.3-31.4-11.9-46.2-26.5s-56.4,11-60.2,12.4c-3.8,1.3-16.2-0.9-14.9-8.4s0.9-24.1,1.9-39.4
                c1-15.4,28.6-21.1,42.9-30.3c9.4-6.1,11.9-14.8,18.2-17.1C1059.1,418.9,1071.3,420.2,1075.8,416.5L1075.8,416.5z"
                        />
                      </g>
                    </svg>

                    <svg
                      viewBox="0 0 1250 620"
                      className="map-svg"
                      data-activecountries='["portugal","espanha","franca","dinamarca","luxemburgo","belgica","inglaterra","eua","holanda","suecia","noruega","finlandia","italia","tunisia","kuwait","dubai","oma","qatar","azerbaijao","arabia_saudita"]'
                    >
                      <path
                        className="map"
                        d="M730.3,425.2c-4.5,34.2-20,48.9-26.9,45c-6.9-3.9-4.5-12.5-2.4-17.8c2.4-6.2,1.3-14.6,1.2-17.3  c-0.1-2.6,2.5-11.4,9.5-10.1c4.7,0.8,6.3-3.6,8.3-6.8c0.8-1.3,3.5-3.2,4-4.6C726.4,406.7,732.3,409.9,730.3,425.2z M213.1,226.1 c25.6-5.9,28.2-46.8,61.4-70c10.2-7.1,23.3-12.6,36.2-16.8c35.4-11.5,57.1-48.8,50-86.7c-0.1-0.6-0.2-1.2-0.3-1.8 C352.8,12,265.8,8,220.3,28.4s-98.2,12.7-114.2,9.1c0,0-33.7-11.1-74.4,11.7C6.3,63.5,7.2,72.3,11.4,76.9c2.6,2.8,6.5,3.9,10.1,3  c7.9-1.9,26.6-5.5,38.8-1.1c15.9,5.7,24.1,25.9,8.2,71.6S83.1,218,83.1,218s18.4,21.3,19.4,42.5c0.8,15.6,24.3,19.5,38.9,19.1 c14.6-0.4,22.6,7.7,28.4,18.9c5.8,11.2,7.8,14.1,12.2,17.6c4.4,3.5,14.4,4.5,20,0.5c2.1-1.5,11-3.8,12.4,2c3,12.6-0.2,17.5-8.9,32 s10,53,10,53s0.5,11.9,18.9,24.1s18.7,16.9,21.5,59.7c2.8,42.3,4.3,105.7,55.6,121.4c1.6,0.5,3.4,0,4.6-1.3 c8-9.8-35.2-41.1,5.3-80.5c43.5-42.4,26.5-48.8,45-65.4s18.5-25.2,20.7-43.9c2.2-18.7,45.4-32.5-20.2-52.6c0,0-29.9-9.4-38.9-33.2 s-72.8-44.7-102.8-21.2c-5.5,4.5-10.6-8.4-19.1-3.9c-9.1,4.8-13.2-7.5-12.5-19.3c0.9-14.5-13.6-0.9-18.9-7.4  c-4-4.9,1.7-12.9,2.3-18.5c0.7-7.8-8.3-12.1-14.7-5.9c-22,21.2-36.5-20-13.4-32.6S187.6,232,213.1,226.1z M1148.3,374.7 c20.6,9.5,13.5,27,4,22.3s-15.2-2.1-21.4-0.5c-6.2,1.6-12.3-12.4-15.5-15.2c-12.7-11.2-26.4-11.3-27.7-22.1 c-1.8-15.2,39.9,5.9,39.9,5.9S1127.7,365.2,1148.3,374.7z M1080.2,415.3c6.4-5.2,15-6.3,22.4-2.8c8.5,4,19,8,23.6,5 c20.8-13.6,38.2,54,35.5,68.5c-2.6,14.5-25.8,30.5-45.1,44s-31.7-12-46.6-26.7c-14.9-14.7-56.8,11.1-60.6,12.5  c-3.8,1.4-16.3-0.9-15-8.5c1.3-7.6,1-24.2,1.9-39.7c1-15.5,28.8-21.2,43.2-30.5c9.5-6.1,12-14.9,18.4-17.2  C1063.4,417.7,1075.7,419,1080.2,415.3L1080.2,415.3z M498.8,110.8c7.4-12.9-3-15.5-0.4-23.4c2.3-7.1,9.6-8.1,11.8-6  c3.3,3.2,1.3,8.4,2.4,11.3c1.3,3.5,3.8,5.5,10.2,9.8c8.7,5.8,4.3,12.7-2.5,15.8c-4.3,2-8.8,3-15.1,2.3  C500.5,120,494.9,117.5,498.8,110.8z M1014.5,175.8c10.8-14.8,19.4,20.7,32.1,15.3c11.7-5-6-34.1,6.1-44  c36.8-30.3,68.8-32.3,79-55.5c20.8-47.6-31.6-49.2-31.6-49.2c-71.8-7.8-216.4-19.1-240.2-23.9c-23.8-4.8-36.8-12.5-66-1.6 c-29.3,11-46.2,17.4-78.3,26c-15.8,4.2-35.9,5.6-52.1,4.6c-15-1-63.1-33.5-93.1-4.1C555.4,57.9,533.2,70,541.5,80 c8.6,10.3,14.3,11.1,20.2,10.6c14.4-1.3,44-36,44-8.7c0,11.1-15.4,20.6-38.4,19.3c-3.9-0.2-10,0.8-15.7,0.3 c-13.3-1.1-23.4,16-28.8,19.6c-5.4,3.6-20.5,6.3-22,9.2c-3.5,6.4,22.7,28.5-3.3,22.2c-25.3-6.1-18.2,14.5-20,19.5 c-1.2,3.1,0.5,9.7,7.4,9.5c4.5-0.1,3.3,4.1,3.5,6l0.5,3.9c0.1,1.1,0,2.1-0.5,3.1c0,0,0,0,0,0c-0.6,1.2-1.7,2.1-2.9,2.7  c-17.6,9.3-33.7,23.7-41.1,46.2c-20.5,62.9,19.4,90,61.2,86.8s69.5,26,59,93.1c-10.5,67.1,51.2,114.5,75.4,74 c24.1-40.5,21.5-52.7,35.9-63.3s16.3-23.2,5.6-53.9c-10.8-30.7,41-41,44.9-58c3.9-17-12.8-14.9-26.2-26.7 c-13.4-11.8-53.7-71.9-44.9-70c8.8,1.9,39.4,51.2,41,55.7s17.5,12.5,30.5,4.3s64.7-30.5,20.3-48.3s-29.2-26-13.2-17.2 c16.1,8.9,51.2,15.6,56.7,16.4c5.6,0.8,28.5,7.8,37.4,37.9c8.9,30.1,25.4,60.1,36.1,26.6c10.7-33.5,30.2-55.3,47.4-45.1 c9.9,5.9,14.5,20.4,17.9,31.2c8.6,27.8,25,58.3,39.7,59.8c15.3,1.6-4.3-63,6.1-78.7c7.1-10.8,13.5-12.4,32.9-18.1 C1070.6,232,999.9,195.8,1014.5,175.8z M635.2,208.8c-41.6-3.7-76.6,2-79-13v0c-1.4-8.8-9.2-14.9-17.7-13.9 c-8.8,1-20.5,3.1-32.7,7.1c-3.2,1-6.6,1.2-9.8,0.3c-1-0.3-1.9-0.6-2.4-1.1c-0.8-0.6-0.8-1.4-0.5-2.1c0.4-0.9,1.2-1.5,2.1-1.6  c1.6-0.3,3.4-0.8,5.2-1.7c6.5-2.9,11.2-7.5,14.8-12.1c4.8-6.1,14.3-13.4,23.8-16.4c6.8-2.2,10.3-3,12.8-2.4 c4.8,1.1,6.4,8.2,11.1,11.3c15.7,10.5,15,16.3,18.3,15.9c5.5-0.7-0.2-6.8,1.6-8.5c1.9-1.9,5.1,1.9,5.8-1c1-4-34.3-21-21.9-21.9  c10.1-0.8,34,33.8,43.2,37.8c8.3,3.6,2.9-17.1,8.4-17.5c5.9-0.4,6.3,18.5,16.5,16.6c7-1.3,22.3,1,25.8,7.5  C665,200.5,661.8,211.1,635.2,208.8z M1177.6,568.5c0,0-15.2-0.9,4.8-11.5c20-10.7,25.2-14.6,25.2-14.6s12.7-0.7-1.7,8.8  S1177.6,568.5,1177.6,568.5z M1217.4,543c-0.1-0.8,0.1-1.6,0.4-2.4c0.6-1.5,1.9-4.4,4.7-6.9c3.9-3.6,6.1-7.9,6-13.2 c-0.1-4.3,1.9-7.6,4.5-1.4s2.9,9.5,5.6,9.7c2.6,0.3,4.5,4.9-2.9,7.9C1228.7,539.7,1217.9,549.5,1217.4,543z M495.6,109.5  c-1.7,3-8.6,4-12.5,3.9c-4.1-0.1-3.7-4.2-2-8.4s8.4-9.2,13.3-7.9C498.1,98.1,497.3,106.5,495.6,109.5z M1096.7,189.4  c-8.8,17.8-34,30.2-37.6,17.8c-4.6-15.9,12.4-16.8,20.7-29.2c7.9-11.8-6.4-27.2,4.3-36.2C1092.8,134.6,1106.9,168.8,1096.7,189.4z M977.5,367.2c6.9,5.7,20.8,13.8,32,18.2c9.2,3.7,14.6,11,0,9.8c-47.4-3.9-69.6-45.5-66.1-53.4C946.7,334.5,963.3,355.4,977.5,367.2  z M1031.7,361.9c0,8-2.9,11.6-20.2,9.6c-19.2-2.1-23.3-17.8-18.7-27.8c3.3-7.1,15.3-4.7,25.7,1.6 C1030.2,352.5,1031.7,356.9,1031.7,361.9z"
                      />
                      <path
                        id="inglaterra"
                        className="point js-tooltip"
                        d="M512.7,103.2c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8  C507,105.8,509.6,103.2,512.7,103.2z"
                        title="United Kingdom"
                      />
                      <path
                        id="franca"
                        className="point js-tooltip"
                        d="M520.3,137.7c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8  C514.5,140.3,517.1,137.7,520.3,137.7z"
                        title="France"
                      />
                      <path
                        id="portugal"
                        className="point js-tooltip"
                        d="M482,163.8c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8  C476.3,166.4,478.8,163.8,482,163.8z"
                        title="Portugal"
                      />
                      <path
                        id="espanha"
                        className="point js-tooltip"
                        d="M497.5,158.8c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8s-5.8-2.6-5.8-5.8 C491.7,161.4,494.3,158.8,497.5,158.8z"
                        title="Spain"
                      />
                      <path
                        id="dubai"
                        className="point js-tooltip"
                        d="M751.6,239.3c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8 C745.9,241.8,748.4,239.3,751.6,239.3z"
                        title="Dubai"
                      />
                      <path
                        id="arabia_saudita"
                        className="point js-tooltip"
                        d="M706.7,243.9c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8 C700.9,246.5,703.5,243.9,706.7,243.9z"
                        title="Saudi Arabia"
                      />
                      <path
                        id="qatar"
                        className="point js-tooltip"
                        d="M736.1,232.8c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8 C730.4,235.3,732.9,232.8,736.1,232.8z"
                        title="Qatar"
                      />
                      <path
                        id="oma"
                        className="point js-tooltip"
                        d="M755.6,253.4c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8 C749.9,256,752.4,253.4,755.6,253.4z"
                        title="Oman"
                      />
                      <path
                        id="kuwait"
                        className="point js-tooltip"
                        d="M709.4,213.9c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8  C703.7,216.5,706.3,213.9,709.4,213.9z"
                        title="Kuwait"
                      />
                      <path
                        id="azerbaijao"
                        className="point js-tooltip"
                        d="M710.5,165.5c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8  C704.7,168.1,707.3,165.5,710.5,165.5z"
                        title="Azerbaijan"
                      />
                      <path
                        id="tunisia"
                        className="point js-tooltip"
                        d="M549.6,194.5c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8 C543.8,197,546.4,194.5,549.6,194.5z"
                        title="Tunisia"
                      />
                      <path
                        id="italia"
                        className="point js-tooltip"
                        d="M572,158c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8  C566.3,160.6,568.8,158,572,158z"
                        title="Italy"
                      />
                      <path
                        id="suecia"
                        className="point js-tooltip"
                        d="M577.8,65.7c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8 C572,68.3,574.6,65.7,577.8,65.7z"
                        title="Sweden"
                      />
                      <path
                        id="finlandia"
                        className="point js-tooltip"
                        d="M617,74.6c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8  C611.3,77.2,613.9,74.6,617,74.6z"
                        title="Finland"
                      />
                      <path
                        id="noruega"
                        className="point js-tooltip"
                        d="M553.2,67.2c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8  C547.4,69.8,550,67.2,553.2,67.2z"
                        title="Norway"
                      />
                      <path
                        id="dinamarca"
                        className="point js-tooltip"
                        d="M552,99.8c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8  C546.3,102.4,548.9,99.8,552,99.8z"
                        title="Denmark"
                      />
                      <path
                        id="luxemburgo"
                        className="point js-tooltip"
                        d="M539.2,127.9c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8  C533.4,130.5,536,127.9,539.2,127.9z"
                        title="Luxembourg"
                      />
                      <path
                        id="holanda"
                        className="point js-tooltip"
                        d="M539.2,108.1c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8 C533.4,110.6,536,108.1,539.2,108.1z"
                        title="Netherlands"
                      />
                      <path
                        id="belgica"
                        className="point js-tooltip"
                        d="M528.5,119.1c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8 C522.7,121.7,525.3,119.1,528.5,119.1z"
                        title="Belgium"
                      />
                      <path
                        id="eua"
                        className="point js-tooltip"
                        d="M144.1,174c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8 C138.3,176.6,140.9,174,144.1,174z"
                        title="USA"
                      />
                    </svg>
                  </div>
                </section>
                {/* we-do */}

                <footer className="page-footer type-1">
                  <div className="row expanded align-center align-middle text-center content-wrapper">
                    <div className="xxlarge-16 columns text-center">
                      <h5>#seewhatsnext</h5>
                      <h2>Outsourcing</h2>
                      <div className="alphabeth-wrapper">
                        <picture>
                          <source
                            srcSet="/imgs/alphabeth_3d/footerO.webp 1x, /imgs/alphabeth_3d/footerO@2x.webp 2x"
                            type="image/webp"
                          />
                          <source srcSet="/imgs/alphabeth_3d/footerO.png 1x, /imgs/alphabeth_3d/footerO@2x.png 2x" />
                          <img
                            className="alphabeth-image"
                            src="./imgs/alphabeth_3d/footerO.png"
                            alt=""
                          />
                        </picture>

                        <picture>
                          <source
                            srcSet="/imgs/alphabeth_3d/footerO_shadow.webp 1x, /imgs/alphabeth_3d/footerO_shadow@2x.webp 2x"
                            type="image/webp"
                          />
                          <source srcSet="/imgs/alphabeth_3d/footerO_shadow.png 1x, /imgs/alphabeth_3d/footerO_shadow@2x.png 2x" />
                          <img
                            className="alphabeth-shadow"
                            src="./imgs/alphabeth_3d/footerO_shadow.png"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="image-wrapper">
                        <picture>
                          <source
                            srcSet="/imgs/outsourcing/outsourcing-suricata.webp"
                            type="image/webp"
                          />
                          <img
                            className="image suricata"
                            src="./imgs/outsourcing/outsourcing-suricata.png"
                            alt=""
                          />
                        </picture>
                      </div>

                      <div className="row expanded align-center text-center btn-wrapper">
                        <a
                          href="../outsourcing/index.html"
                          data-remote="true"
                          data-targetclass="single-service"
                          data-title="Outsourcing"
                          className="btn elastic-btn"
                        >
                          <svg viewBox="0 0 196 66">
                            <path
                              className="morph-bg"
                              d="M1.3 35.8c2 25.9 17.7 29.7 38.6 29.7h124.5C185.3 65.4 195 50.8 195 33S185.2.6 164.4.5H39.9C17.2.5-.7 8 1.3 35.8z"
                              data-hover="M3.3 35.8c2 25.9 15.6 25.7 36.6 25.7h124.5C185.3 61.4 193 50.8 193 33s-8-28.5-28.7-28.5H39.8C17.1 4.5 1.3 8 3.3 35.8z"
                            />
                          </svg>
                          <span className="text">Get to know</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="row expanded last-content-wrapper xsmall-collapse">
                    <div className="xxlarge-2 xxlarge-offset-1 medium-3 small-6 small-offset-0 xsmall-5 columns made-by">
                      <a href="../../privacy-policy/index.html" target="_blank">
                        <h4>Privacy Policy</h4>{" "}
                      </a>
                      {/*  <h4>2023 &copy; Affinity</h4> */}
                    </div>
                    <div className="xxlarge-10 medium-8 small-4 xsmall-16 columns text-center">
                      <a
                        href="../../index.html"
                        data-remote="true"
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
                            href="../../news/index.html"
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
                            href="../../contacts/index.html#affinity"
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

                {/*  preload  */}
                <div className="preload" aria-hidden="true">
                  <img src="./imgs/nearshoring/nearshoring-header.jpg" alt="" />
                  <img src="./imgs/alphabeth_3d/headerN.png" alt="" />
                  <img src="./imgs/nearshoring/nearshoring-owl.png" alt="" />
                </div>
              </main>
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
        {/* scroll-content-wrapper*/}

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

          {/* first transition*/}
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
          {/* second transition*/}
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

          {/* third transition*/}
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

          {/* forth transition*/}
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

          {/* fifth transition*/}
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
        {/* Loading Blob */}
        {/*  <div className="loading-blob">
  <svg viewBox="0 0 62 58">
    <path d="M0,32.45C0,14.12,3.5,3.12,23.17.45c23.33-2.33,38.33,4,38.67,26.17C61.67,50,51,58.12,31.33,58.12S0,48,0,32.45Z" data-morph="M6.44,24.66C25.78,14,.44,3,20.11.32c23.33-2.33,53.76,17,34,26.5C28.44,39.16,47.94,58,28.28,58S-7.13,32.15,6.44,24.66Z"></path>
  </svg>
</div> */}

        {/*  MODAL */}
        <div id="modal-bg"></div>
        <div id="modal-wrapper">
          {" "}
          <div
            id="modal-content"
            className="row align-middle align-center"
          ></div>
        </div>
        {/*  TRANSITION */}
        <div id="loading-page" aria-hidden="true"></div>

        {/*  outdated browser  */}
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
          {/*  end #outdated browser  */}
        </div>
      </body>
    </>
  );
}

export default NearshorePage;
