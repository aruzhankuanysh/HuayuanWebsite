import Navbar from "./Navbar";

function OutsourcingPage() {
  return (
    <>
      {/* ============= CONTENT ============= */}
      <div className="page-main page-current">
        <div
          className="page-toload single-service-page outsourcing-page"
          data-bodyClass="single-service outsourcing"
        >
          <header className="page-header">
            <div className="background-wrapper">
              <div className="webGL-main">
                <div id="webGL-container"></div>
              </div>
              <div className="block-bg-cover">
                <picture>
                  <source
                    srcset="/imgs/outsourcing/outsourcing-header-phone.jpg"
                    media="(max-width: 414px)"
                  />
                  <source
                    srcset="/imgs/outsourcing/outsourcing-header-small.jpg"
                    media="(max-width: 768px)"
                  />
                  <source
                    srcset="/imgs/outsourcing/outsourcing-header.webp"
                    type="image/webp"
                  />
                  <img
                    className="background-image element-cover"
                    src="../imgs/outsourcing/outsourcing-header.jpg"
                    alt=""
                  />
                </picture>
              </div>

              <div className="title row expanded align-center align-middle">
                <div className="xxlarge-16 columns text-center">
                  <h1>Outsourcing</h1>
                </div>
              </div>

              <div className="letter-wrapper">
                <picture>
                  <source
                    srcset="/imgs/alphabeth_3d/headerO_phone.png"
                    media="(max-width: 414px)"
                  />
                  <source
                    srcset="/imgs/alphabeth_3d/headerO.webp 1x, /imgs/alphabeth_3d/headerO@2x.webp 2x"
                    type="image/webp"
                  />
                  <source srcset="/imgs/alphabeth_3d/headerO.png 1x, /imgs/alphabeth_3d/headerO@2x.png 2x" />
                  <img
                    className="letter"
                    src="../imgs/alphabeth_3d/headerO.png"
                    alt=""
                  />
                </picture>
              </div>
              <div className="image-wrapper">
                <picture>
                  <source
                    srcset="/imgs/outsourcing/outsourcing-suricata-phone.png"
                    media="(max-width: 414px)"
                  />
                  <img
                    className="suricata show-mob"
                    src="../imgs/outsourcing/outsourcing-suricata.png"
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
                <li data-target="technologies-list">
                  Technologies<span className="container-height"></span>
                </li>
                <li data-target="why-portugal">
                  Why Outsourcing<span className="container-height"></span>
                </li>
                <li data-target="image-blocks">
                  Let's Go<span className="container-height"></span>
                </li>
              </ul>
            </div>
            {/*.vertical-menu-wrapper*/}

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
                    data-morphPath="M384.7,365.3C276.2,451.3,63.3,270.5,245,127c114.9-90.8,392,14,328.5,145.7C513.5,397.1,472,296,384.7,365.3z"
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
              {/*.cta-start-project */}

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
                      value="/en/solutions/outsourcing/"
                    />{" "}
                    <input
                      type="hidden"
                      value="en"
                      name="language"
                      id="language"
                    />
                    <h2>Start a outsourcing project</h2>
                    <p>
                      Leave some information about yourself to get you to the
                      right person.
                    </p>
                    <div className="input-area active" data-text="">
                      <label for="name">Name</label>
                      <div className="wrapper-input input">
                        <input
                          type="text"
                          className="form-input text name required"
                          name="name"
                          id="name"
                          autocomplete="off"
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
                      <label for="name">E-mail</label>
                      <div className="wrapper-input input">
                        <input
                          type="email"
                          className="form-input text email required"
                          name="email"
                          id="email"
                          autocomplete="off"
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
                      <label for="name">Company</label>
                      <div className="wrapper-input input">
                        <input
                          type="text"
                          className="form-input text company required"
                          name="company"
                          id="company"
                          autocomplete="off"
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
                      <label for="name">Company Size</label>
                      <div className="wrapper-input input">
                        <input
                          type="number"
                          className="form-input company-size required number"
                          name="company-size"
                          id="company-size"
                          autocomplete="off"
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
                            <path className="dash" d="M9.7 17l5.9 5 8.1-12.1" />
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
                            <path className="dash" d="M9.7 17l5.9 5 8.1-12.1" />
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
                            <path className="dash" d="M9.7 17l5.9 5 8.1-12.1" />
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
                        {/* Loader */}
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
                          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
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
                    <h4 className="feedback-form">
                      Thank you! Our team will reply as soon as they can.
                    </h4>
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
              {/*.start-project */}
            </div>

            <Navbar />

            <section className="introduction">
              <div className="hero-text row text-center align-center small-collapse">
                <div className="xxlarge-10 medium-12 small-14 columns">
                  <h3 className="js-bigText-element">
                    Our secret is a multidisciplinary team of experts who have a
                    vast technological stack ranging from Opensource, Microsoft,
                    Java, IBM, OutSystems to Oracle. Let&#8217;s talk about
                    business?
                  </h3>
                </div>
              </div>
            </section>

            <section className="image-blocks  js-height ">
              <div className="row expanded question-row">
                <div className="question-wrapper xxlarge-7 xxlarge-offset-2 medium-6 medium-offset-1 small-8 xsmall-14 background-lightGray">
                  <h3>
                    We commit, share know-how, set goals and manage every aspect
                    of every project to get there.
                  </h3>
                  <h2>Let’s have a go.</h2>
                </div>
              </div>
              <div className="row expanded image-wrapper">
                <div className="xxlarge-13 xxlarge-offset-3 small-16 small-offset-0">
                  <picture>
                    <img src="../uploads/2020/04/DSC_2192.jpg" alt="" />
                  </picture>

                  <div className="offset-text row">
                    <div className="xxlarge-8 xxlarge-offset-8 medium-9 xsmall-14 xsmall-offset-0 columns">
                      <p className="js-text-element">
                        We specialize in a wide range of technologies and love
                        to solve IT projects for companies.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row expanded answer-wrapper">
                <div className="xxlarge-6 xxlarge-offset-8 medium-offset-9 small-8 small-offset-7 xsmall-14 xsmall-offset-1 answer-wrapper-text">
                  <h3>
                    We develop each project focusing on optimizing relationships
                    and processes and always striving for high quality results.
                  </h3>
                </div>
              </div>
            </section>
            {/*image-blocks*/}

            <section className="why-portugal question-list js-height ">
              <div className="row expanded">
                <div className="xxlarge-5 xxlarge-offset-3 medium-offset-2 small-12 small-offset-1 xsmall-14 columns">
                  <h2 className="js-title-element">Why Outsourcing with us?</h2>
                  <p className="js-text-element">
                    National coverage with offices in Lisbon, Porto and Obidos.
                    Our HR Team is comprised of exceptional IT recruitment
                    specialists that perform +400 interviews per month,
                    analyzing an average of 1000 prospect candidates.
                  </p>
                </div>
                <div className="xxlarge-6 medium-offset-2 small-14 small-offset-1 columns reasons-list-wrapper">
                  <ul className="row xxlarge-up-3 xsmall-up-2">
                    <li className="column">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 166"
                      >
                        <path
                          d="M161.8 120.9c-1.6-19.1-12.9-34.3-31.1-42.2-3.7-1.6-4.5-6.6-1.4-9.2 5.5-4.6 9-12.1 9.9-24.2 2.2-29.1-15-41-38.7-40.9-23.6 0-40.8 11.8-38.7 40.9.9 12.2 4.4 19.7 9.9 24.2 3.1 2.6 2.3 7.6-1.4 9.2-18.1 7.8-29.5 23-31.1 42.2-2.5 30.5 10.3 40.4 61.3 40.3 51 .1 63.7-9.8 61.3-40.3z"
                          fill="none"
                          stroke="#06f"
                          stroke-width="7"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                        />
                      </svg>
                      <p>
                        Specialized <br />
                        and Experienced <br />
                        Professionals
                      </p>
                    </li>
                    <li className="column">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 166"
                      >
                        <path
                          d="M113.3 69.2c-2-15.8 35-4.1 33.8-22-.7-10-12.6-16.5-27.7-19.2-.2-2.1-.3-4.1-.5-6.2-1-9.9-9.8-14.5-19-14.5-9.1 0-18 4.6-19 14.5-.2 2.5-.5 5-.6 7.6-10 2.6-18.6 7.1-23.3 13.7-19.3 26.8 24.7 41.6 28 53.5 4 14.6-43.2 7.8-31.6 29 4 7.4 14.5 11.6 27 12.8.1 1.9.3 3.8.5 5.7 1 9.9 9.8 14.5 19 14.5 9.1 0 18-4.6 19-14.5.3-3.4.6-6.8.8-10.2 14.4-4.8 26-13.1 28.3-24.3 4.2-20.1-33.5-31-34.7-40.4z"
                          fill="none"
                          stroke="#006dff"
                          stroke-width="7"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                        />
                      </svg>
                      <p>
                        Agility & Cost <br />
                        Rationality
                      </p>
                    </li>
                    <li className="column">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 166"
                      >
                        <path
                          d="M100 26.4c-34 0-64.1 19-82.9 48.2-3.2 5-3.2 11.8 0 16.8 18.7 29.3 48.9 48.2 82.9 48.2 34 0 64.1-19 82.9-48.2 3.2-5 3.2-11.8 0-16.8C164.1 45.4 134 26.4 100 26.4z"
                          fill="none"
                          stroke="#06f"
                          stroke-width="7"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                        />
                      </svg>
                      <p>Focus</p>
                    </li>
                    <li className="column">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 166"
                      >
                        <path
                          d="M155.8 17.1c-17.7 0-32.5 12.2-36.4 28.7-3.3 16.1-17.9 28.3-35 28.3-6 0-11.6-1.3-16.5-4-5.8-3-12.3-4.7-19.3-4.7-23.1 0-41.8 18.7-41.8 41.8 0 23.1 18.7 41.8 41.8 41.8 20.6 0 37.7-14.9 41.1-34.5 3.2-16.7 17.9-29 35.5-29 5.4 0 10.5 1.1 15.1 3.2 4.7 2.1 10 3.3 15.5 3.3 20.7 0 37.5-16.8 37.5-37.5-.1-20.7-16.9-37.4-37.5-37.4z"
                          fill="none"
                          stroke="#06f"
                          stroke-width="7"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                        />
                      </svg>
                      <p>
                        Improvement <br />
                        & Know-how
                        <br />
                        Sharing{" "}
                      </p>
                    </li>
                    <li className="column">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 166"
                      >
                        <path
                          d="M144.4 18.5c-25.3-4.2-51.8-4.5-77.1-.1-13 2.4-27.8 20.6-16.5 32.8 5.5 6 11.1 12 16.8 17.9-10.2 10.5-20.2 21.3-29.8 32.4-10.1 11.1-4.7 27.2 4.6 36.7l2.6 2.6c9.5 9.3 25.6 14.7 36.7 4.6 11.1-9.7 21.8-19.6 32.4-29.8 5.9 5.6 11.9 11.2 17.9 16.8 12.3 11.3 30.4-3.6 32.8-16.6 4.4-25.3 4.1-51.8-.1-77.1-2-9.8-10.6-18.4-20.3-20.2z"
                          fill="none"
                          stroke="#06f"
                          stroke-width="7"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                        />
                      </svg>
                      <p>
                        Meeting <br />
                        Deadlines
                      </p>
                    </li>
                    <li className="column">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 166"
                      >
                        <path
                          d="M153.9 150.1c-25.4 2.6-82.3 2.6-107.8 0-10.6-.5-18.1-8.1-18.7-18.7-2.6-25.4-2.6-73.1 0-98.5.5-10.6 8.1-18.1 18.7-18.7 8.1-.8 21.9-.5 31.9.3 7.1.5 14.5 19.7 22 19.7 20.6 0 41.2.7 53.9 2 10.6.5 18.1 8.1 18.7 18.7 2.6 25.4 2.6 51 0 76.5-.6 10.6-8.2 18.2-18.7 18.7z"
                          fill="none"
                          stroke="#06f"
                          stroke-width="7"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                        />
                      </svg>
                      <p>
                        Good Management <br />
                        Practices
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            {/*why-portugal*/}

            <section className="technologies-list js-height">
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
                          {" "}
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
                          {" "}
                          <svg viewBox="0 0 185.75 169.5">
                            <clipPath id="clip-path">
                              <path d="M0 1.58h136.84v166.35H0z" />
                            </clipPath>
                            <g clip-path="url(#clip-path)">
                              <path d="M133.34 108.78a20.2 20.2 0 00-20.2-20.21h-.25c-.12-1.34-.23-2.69-.37-4-.45-8.74-8.42-20.64-15.45-25.45-10.63-7.27-46.1-7.27-57.3 0-6.32 4.11-15 16.71-15.45 25.45-.14 1.34-.24 2.69-.36 4h-.25A20.2 20.2 0 0023 129a134.4 134.4 0 007.35 18.91c3.84 8.59 6.71 15 15.45 15.44 21.54 1.42 24.19 1.58 45.3 0 8.74-.45 11.4-6.54 15.45-15.44 2.41-6.06 5.46-11.77 7.35-18.91a20.19 20.19 0 0019.44-20.22z" />
                              <path d="M68.42 50.65V28.46M80.11 16.77A11.69 11.69 0 1168.42 5.08a11.69 11.69 0 0111.69 11.69z" />
                            </g>
                          </svg>
                        </p>
                        <span className="title">RPA, AI, Machine Learning</span>
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
                        <span className="title">System & Infrastructures</span>
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
            {/*technologies-list*/}

            <section className="clients ">
              <div className="row expanded align-center">
                <div className="xxlarge-9 medium-12 small-14 columns">
                  <h2>
                    We stand close to each one of our clients. We strive to
                    anticipate their needs working efficiently and proactively.
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
                            src="../uploads/2020/05/siemens.png"
                            alt=""
                          />
                          <img
                            className="hover"
                            src="../uploads/2020/05/siemens-cinza.png"
                            alt=""
                          />
                        </div>
                      </li>
                      <li className="column">
                        <div className="logo-wrapper">
                          <img
                            className="normal"
                            src="../uploads/2020/05/edp.png"
                            alt=""
                          />
                          <img
                            className="hover"
                            src="../uploads/2020/05/edp-cinza.png"
                            alt=""
                          />
                        </div>
                      </li>
                      <li className="column">
                        <div className="logo-wrapper">
                          <img
                            className="normal"
                            src="../uploads/2020/05/natixix.png"
                            alt=""
                          />
                          <img
                            className="hover"
                            src="../uploads/2020/05/natixis-cinza.png"
                            alt=""
                          />
                        </div>
                      </li>
                      <li className="column">
                        <div className="logo-wrapper">
                          <img
                            className="normal"
                            src="../uploads/2020/05/deloitte.png"
                            alt=""
                          />
                          <img
                            className="hover"
                            src="../uploads/2020/05/deloitte-cinza.png"
                            alt=""
                          />
                        </div>
                      </li>
                      <li className="column">
                        <div className="logo-wrapper">
                          <img
                            className="normal"
                            src="../uploads/2020/05/sibs.png"
                            alt=""
                          />
                          <img
                            className="hover"
                            src="../uploads/2020/05/sibs-cinza.png"
                            alt=""
                          />
                        </div>
                      </li>
                      <li className="column">
                        <div className="logo-wrapper">
                          <img
                            className="normal"
                            src="../uploads/2020/05/euronext.png"
                            alt=""
                          />
                          <img
                            className="hover"
                            src="../uploads/2020/05/euronext-cinza.png"
                            alt=""
                          />
                        </div>
                      </li>
                      <li className="column">
                        <div className="logo-wrapper">
                          <img
                            className="normal"
                            src="../uploads/2018/07/evident.png"
                            alt=""
                          />
                          <img
                            className="hover"
                            src="../uploads/2018/07/evident_gray.png"
                            alt=""
                          />
                        </div>
                      </li>
                      <li className="column">
                        <div className="logo-wrapper">
                          <img
                            className="normal"
                            src="../uploads/2018/02/outsystems.png"
                            alt=""
                          />
                          <img
                            className="hover"
                            src="../uploads/2018/02/outsystems_grey.png"
                            alt=""
                          />
                        </div>
                      </li>
                      <li className="column">
                        <div className="logo-wrapper">
                          <img
                            className="normal"
                            src="../uploads/2018/07/bpn-paribas-logo.png"
                            alt=""
                          />
                          <img
                            className="hover"
                            src="../uploads/2018/07/bpn_gray.png"
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
                            src="../uploads/2017/09/nos.png"
                            alt=""
                          />
                          <img
                            className="hover"
                            src="../uploads/2017/09/nos_grey.png"
                            alt=""
                          />
                        </div>
                      </li>
                      <li className="column">
                        <div className="logo-wrapper">
                          <img
                            className="normal"
                            src="../uploads/2018/10/santander.png"
                            alt=""
                          />
                          <img
                            className="hover"
                            src="../uploads/2018/10/santander_gray.png"
                            alt=""
                          />
                        </div>
                      </li>
                      <li className="column">
                        <div className="logo-wrapper">
                          <img
                            className="normal"
                            src="../uploads/2018/02/ageas.png"
                            alt=""
                          />
                          <img
                            className="hover"
                            src="../uploads/2018/02/ageas_grey.png"
                            alt=""
                          />
                        </div>
                      </li>
                      <li className="column">
                        <div className="logo-wrapper">
                          <img
                            className="normal"
                            src="../uploads/2018/07/accenture.png"
                            alt=""
                          />
                          <img
                            className="hover"
                            src="../uploads/2018/07/accenture_gray.png"
                            alt=""
                          />
                        </div>
                      </li>
                      <li className="column">
                        <div className="logo-wrapper">
                          <img
                            className="normal"
                            src="../uploads/2018/07/hitachi.png"
                            alt=""
                          />
                          <img
                            className="hover"
                            src="../uploads/2018/07/hitachi_gray.png"
                            alt=""
                          />
                        </div>
                      </li>
                      <li className="column">
                        <div className="logo-wrapper">
                          <img
                            className="normal"
                            src="../uploads/2017/09/cgd_color.png"
                            alt=""
                          />
                          <img
                            className="hover"
                            src="../uploads/2017/09/cgd_grey.png"
                            alt=""
                          />
                        </div>
                      </li>
                      <li className="column">
                        <div className="logo-wrapper">
                          <img
                            className="normal"
                            src="../uploads/2020/05/vestas.png"
                            alt=""
                          />
                          <img
                            className="hover"
                            src="../uploads/2020/05/vestas-cinza.png"
                            alt=""
                          />
                        </div>
                      </li>
                      <li className="column">
                        <div className="logo-wrapper">
                          <img
                            className="normal"
                            src="../uploads/2020/05/daymon.png"
                            alt=""
                          />
                          <img
                            className="hover"
                            src="../uploads/2020/05/daymon-cinza.png"
                            alt=""
                          />
                        </div>
                      </li>
                      <li className="column">
                        <div className="logo-wrapper">
                          <img
                            className="normal"
                            src="../uploads/2020/05/ibm.png"
                            alt=""
                          />
                          <img
                            className="hover"
                            src="../uploads/2020/05/ibm-cinza.png"
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
                            src="../uploads/2017/09/tap.png"
                            alt=""
                          />
                          <img
                            className="hover"
                            src="../uploads/2017/09/tap_grey.png"
                            alt=""
                          />
                        </div>
                      </li>
                      <li className="column">
                        <div className="logo-wrapper">
                          <img
                            className="normal"
                            src="../uploads/2020/05/celfocus.png"
                            alt=""
                          />
                          <img
                            className="hover"
                            src="../uploads/2020/05/celfocus-cinza.png"
                            alt=""
                          />
                        </div>
                      </li>
                      <li className="column">
                        <div className="logo-wrapper">
                          <img
                            className="normal"
                            src="../uploads/2020/05/cgi.png"
                            alt=""
                          />
                          <img
                            className="hover"
                            src="../uploads/2020/05/cgi-cinza.png"
                            alt=""
                          />
                        </div>
                      </li>
                      <li className="column">
                        <div className="logo-wrapper">
                          <img
                            className="normal"
                            src="../uploads/2020/05/sofidis.png"
                            alt=""
                          />
                          <img
                            className="hover"
                            src="../uploads/2020/05/cofidis-cinza.png"
                            alt=""
                          />
                        </div>
                      </li>
                      <li className="column">
                        <div className="logo-wrapper">
                          <img
                            className="normal"
                            src="../uploads/2020/05/axa.png"
                            alt=""
                          />
                          <img
                            className="hover"
                            src="../uploads/2020/05/axa-cinza.png"
                            alt=""
                          />
                        </div>
                      </li>
                      <li className="column">
                        <div className="logo-wrapper">
                          <img
                            className="normal"
                            src="../uploads/2020/05/altice.png"
                            alt=""
                          />
                          <img
                            className="hover"
                            src="../uploads/2020/05/altice-cinza.png"
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
                    fill-rule="evenodd"
                  />
                </svg>
              </div>

              <div className="drag-helper drag-left">
                <h4>Drag</h4>
                <svg viewBox="0 0 124.51 8.51">
                  <path
                    d="M124.51 3.51H6.86A6.36 6.36 0 0 0 8.33 0C6.17 2.12 3.38 3.22 0 4.25a20.4 20.4 0 0 1 8.33 4.26 7.36 7.36 0 0 0-1.5-3.61h117.68z"
                    fill="#7c3d3d"
                    fill-rule="evenodd"
                  />
                </svg>
              </div>
            </section>

            <footer className="page-footer type-1">
              <div className="row expanded align-center align-middle text-center content-wrapper">
                <div className="xxlarge-16 columns text-center">
                  <h5>#seewhatsnext</h5>
                  <h2>Software</h2>
                  <div className="alphabeth-wrapper">
                    <picture>
                      <source
                        srcset="/imgs/alphabeth_3d/footerS.webp 1x, /imgs/alphabeth_3d/footerS@2x.webp 2x"
                        type="image/webp"
                      />
                      <source srcset="/imgs/alphabeth_3d/footerS.png 1x, /imgs/alphabeth_3d/footerS@2x.png 2x" />
                      <img
                        className="alphabeth-image"
                        src="../imgs/alphabeth_3d/footerS.png"
                        alt=""
                      />
                    </picture>

                    <picture>
                      <source
                        srcset="/imgs/alphabeth_3d/footerS_shadow.webp 1x, /imgs/alphabeth_3d/footerS_shadow@2x.webp 2x"
                        type="image/webp"
                      />
                      <source srcset="/imgs/alphabeth_3d/footerS_shadow.png 1x, /imgs/alphabeth_3d/footerS_shadow@2x.png 2x" />
                      <img
                        className="alphabeth-shadow"
                        src="../imgs/alphabeth_3d/footerS_shadow.png"
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="image-wrapper">
                    <picture>
                      <source
                        srcset="/imgs/software/software-hands.webp"
                        type="image/webp"
                      />
                      <img
                        className="image hands"
                        src="../imgs/software/software-hands.png"
                        alt=""
                      />
                    </picture>
                  </div>

                  <div className="row expanded align-center text-center btn-wrapper">
                    <a
                      href="../software/index.html"
                      data-remote="true"
                      data-targetClass="single-service"
                      data-title="Software"
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
                    <h4>Privacy Policy </h4>{" "}
                  </a>
                  {/* <h4>2023 &copy; Affinity</h4> */}
                </div>
                <div className="xxlarge-10 medium-8 small-4 xsmall-16 columns text-center">
                  <a
                    href="../../index.html"
                    data-remote="true"
                    data-ajaxUrl="https://affinity.pt/en/ajax/home-ajax/?ajax-id=74"
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
                        data-targetClass="noticias"
                        data-ajaxUrl="https://affinity.pt/en/ajax/noticias-ajax/?ajax-id=https://affinity.pt"
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
                        data-targetClass="estamos"
                        data-ajaxUrl="https://affinity.pt/en/ajax/estamos-ajax/?ajax-id=92"
                        data-title="Contacts"
                      >
                        Contacts
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </footer>

            {/* preload  */}
            <div className="preload" aria-hidden="true">
              <img src="../imgs/outsourcing/outsourcing-header.jpg" alt="" />
              <img src="../imgs/alphabeth_3d/headerO.png" alt="" />
              <img src="../imgs/outsourcing/outsourcing-suricata.png" alt="" />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default OutsourcingPage;
