import Header from "../components/header";

function CareersPage() {
  return (
    <>
      <body className="js-byrefresh js-no-ajax    en-lang">
        <div className="scroll-content-wrapper" data-scrollbar>
          <Header />
          {/* ============= CONTENT ============= */}
          <div className="page-main page-current">
            <div
              className="page-toload queremos-page"
              data-bodyclass="queremos"
            >
              <header className="page-header">
                <div className="background-wrapper">
                  <div className="webGL-main">
                    <div id="webGL-container"></div>
                  </div>
                  <div className="header-image-wrapper">
                    <div className="block-bg-cover">
                      <picture>
                        {/* <source srcSet="" type="image/webp"> */}
                        <source
                          srcSet="/imgs/queremos/careers-header-image-phone.jpg"
                          media="(max-width: 414px)"
                        />
                        <source
                          srcSet="/imgs/queremos/careers-header-image-small.jpg"
                          media="(max-width: 768px)"
                        />
                        <img
                          className="background-image element-cover"
                          src="./imgs/queremos/careers-header-image.jpg"
                          alt=""
                        />
                      </picture>
                    </div>
                  </div>

                  <div className="header-pictogram-wrapper">
                    <picture>
                      <source
                        srcSet="/imgs/queremos/careers-pictogram-phone.png"
                        media="(max-width: 414px)"
                      />
                      <img
                        className="header-pictogram"
                        src="./imgs/queremos/careers-pictogram.png"
                        alt=""
                      />
                    </picture>
                  </div>

                  <div className="row expanded align-middle medium-collapse">
                    <div className="xxlarge-8 xxlarge-offset-5 xlarge-offset-5 large-9 large-offset-4 medium-10 medium-offset-4 small-14 small-offset-1 columns">
                      <div className="header-text">
                        <h1>
                          Apply to a Job. <br />
                          Get a Lifetime Experience.
                        </h1>
                        <h2>Making a career out of it.</h2>
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

                <div className="mouse-icon left-side">
                  <span className="scroll-helper">Scroll</span>
                  <span className="wheel"></span>
                </div>
              </header>

              <main className="page-content" role="main">
                <div className="start-project-container">
                  <div className="cta-start-project">
                    <h3>
                      Become
                      <br />a Player!
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
                      <span className="text">Open opportunities</span>
                    </button>
                  </div>
                </div>
                <div className="navbar-job-filter-wrapper">
                  <div className="row align-center expanded">
                    <div className="xxlarge-12 navbar-job-filter">
                      <ul className="row xxlarge-up-4">
                        <li className="column filter-column">
                          <div className="title-wrapper">Role</div>
                          <ul className="options-main-wrapper">
                            <li className="option-wrapper active-option">
                              All
                            </li>

                            <li className="option-wrapper">
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
                              <span
                                className="option"
                                data-cat="categoria-filters"
                                data-catslug="it-consultant"
                              >
                                It Consultant
                              </span>
                            </li>
                          </ul>
                        </li>
                        <li className="column filter-column">
                          <div className="title-wrapper">Place</div>
                          <ul className="options-main-wrapper">
                            <li className="option-wrapper active-option">
                              All
                            </li>

                            <li className="option-wrapper">
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
                              <span
                                className="option"
                                data-cat="cidades-filters"
                                data-catslug="international"
                              >
                                International
                              </span>
                            </li>
                          </ul>
                        </li>
                        <li className="column filter-column">
                          <div className="title-wrapper">Level</div>
                          <ul className="options-main-wrapper">
                            <li className="option-wrapper active-option">
                              All
                            </li>
                            <li className="option-wrapper">
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
                              <span
                                className="option"
                                data-cat="nivel-filters"
                                data-catslug="junior"
                              >
                                Junior
                              </span>
                            </li>
                          </ul>
                        </li>
                        <li className="column filter-column">
                          <div className="title-wrapper">Contract</div>
                          <ul className="options-main-wrapper">
                            <li className="option-wrapper active-option">
                              All
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="btn-wrapper">
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

                    <button className="elastic-btn open-filter">
                      <svg viewBox="0 0 64 60">
                        <path
                          className="hidden-path"
                          d="M1.1 32.5C2.9 55.6 16.9 59 35.5 59h192.2c18.6-.1 27.3-13.1 27.3-29s-8.7-28.9-27.3-29H35.5C15.3 1-.7 7.7 1.1 32.5z"
                        />
                        <path
                          className="morph-bg"
                          d="M1.1 32.5C2.9 55.6 16.9 59 35.5 59 54.2 59 63 46 63 30S54.2 1 35.5 1C15.3 1-.7 7.7 1.1 32.5z"
                          data-hover="M2.1 32.5C3.9 55.6 16.9 56 35.5 56 54.2 56 62 46 62 30S54.2 4 35.5 4C15.3 4 .3 7.7 2.1 32.5z"
                          data-click="M1.1 32.5C2.9 55.6 16.9 59 35.5 59h192.2c18.6-.1 27.3-13.1 27.3-29s-8.7-28.9-27.3-29H35.5C15.3 1-.7 7.7 1.1 32.5z"
                        />
                        <path
                          className="morph-element"
                          d="M31.1 39.5c1.8 1.7 1.9.4 8.3-6.3 6.3-6.6 7.4-6.8 5.8-8.4-2-2.1-2.1-1-9 6.3-1.7 1.8-3 3.1-3.9 4l-5-4.7c-6.5-6.4-6.7-7.5-8.3-5.9-2.1 2-.9 2.1 6.2 9.2l5.9 5.8z"
                          data-click="M31.1 39.5c1.8 1.7 1.9.4 8.3-6.3 6.3-6.6 7.4-6.8 5.8-8.4-2-2.1-2.1-1-9 6.3-1.7 1.8-3 3.1-3.9 4-6.5-6.4-6-6.5-7.8-5.3-2.1 2-.9 2.1 6.2 9.2l.4.5z"
                        />
                      </svg>
                      <span className="text-wrapper">
                        <span className="text">
                          View offers <span className="number">(27)</span>
                        </span>
                      </span>
                    </button>
                  </div>
                </div>

                <section className="we-do">
                  <div className="hero-text row text-center align-center small-collapse">
                    <div className="xxlarge-10 medium-12 small-14 columns">
                      <h3 className="js-bigText-element">
                        <i>A Lifetime Experience</i> is the way we do things.
                        During your journey at Affinity, we will always work to
                        contribute to your fulfilment, wellbeing and growth. Our
                        main goal is that, regardless of the time you spend with
                        us, this is always a positive and constructive part of
                        your life and career.
                      </h3>
                    </div>
                  </div>
                </section>
                {/*we-do*/}

                <section className="about image-blocks">
                  <div className="row expanded question-row">
                    <div className="question-wrapper xxlarge-5 xxlarge-offset-2 medium-6 medium-offset-1 small-8 xsmall-14 background-lightGray">
                      <h3>Happy people make successful companies.</h3>
                      <h2>That's our belief.</h2>
                    </div>
                  </div>
                  <div className="row expanded image-wrapper">
                    <div className="xxlarge-13 xxlarge-offset-3 small-16 small-offset-0">
                      <picture>
                        <img
                          src="./uploads/2020/04/margaridaeines.jpg"
                          alt=""
                        />
                      </picture>
                      <div className="offset-text row">
                        <div className="xxlarge-8 xxlarge-offset-6 medium-10 xsmall-14 xsmall-offset-0 columns">
                          <p className="js-text-element">
                            Our company keeps growing and so will you — that’s
                            why we work on your very own Career Plan and strive
                            to offer you many professional and personal
                            benefits.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row expanded answer-wrapper">
                    <div className="xxlarge-4 xxlarge-offset-10 medium-7 medium-offset-8 small-10 small-offset-5 xsmall-14 xsmall-offset-1 answer-wrapper-text">
                      <h3>Ready?</h3>
                      <h4>Join the Experience!</h4>
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
                          <h3>Top Professional Opportunities</h3>
                          <p>
                            ​Exciting national and international projects
                            according to your expectations and full support in
                            all stages of the process.{" "}
                            <span className="color-purple">
                              We want you to be motivated and satisfied.
                            </span>
                          </p>
                        </div>
                        <div className="columns pos-rel values">
                          <svg viewBox="0 0 9 8.5">
                            <path d="M.02 4.61C.27 8 2.3 8.5 5.02 8.5s4-1.9 4-4.25S7.74 0 5.02 0C2.08 0-.25.98.02 4.61z" />
                          </svg>
                          <h3>Personalized Career Plan</h3>
                          <p>
                            ​We outline a career plan adapted to your
                            professional ambitions and dreams.{" "}
                            <span className="color-purple">
                              We listen, adjust and defend your evolution at
                              your own pace and according to your motivations.
                            </span>
                          </p>
                        </div>
                        <div className="columns pos-rel values">
                          <svg viewBox="0 0 9 8.5">
                            <path d="M.02 4.61C.27 8 2.3 8.5 5.02 8.5s4-1.9 4-4.25S7.74 0 5.02 0C2.08 0-.25.98.02 4.61z" />
                          </svg>
                          <h3>Learning & Certifications</h3>
                          <p>
                            ​You can count on continuous support for the
                            development of your skills.{" "}
                            <span className="color-purple">
                              Training in soft and hard skills, short or long
                              term as well as unmissable Workshops and Affinity
                              Talks!
                            </span>
                          </p>
                        </div>
                        <div className="columns pos-rel values">
                          <svg viewBox="0 0 9 8.5">
                            <path d="M.02 4.61C.27 8 2.3 8.5 5.02 8.5s4-1.9 4-4.25S7.74 0 5.02 0C2.08 0-.25.98.02 4.61z" />
                          </svg>
                          <h3>Advantages with Partners</h3>
                          <p>
                            ​You will have access to a set of benefits and
                            discounts:{" "}
                            <span className="color-purple">
                              Banking, Sports & Fitness, Entertainment,
                              Communications, Insurance, Education, Photography,
                              Hospitality and others!
                            </span>
                          </p>
                          <a
                            href="https://affinity.pt/uploads/2020/03/Affinity-Partners-03.2020.pdf"
                            className="view-all color-purple"
                            target="_blank"
                            rel="noreferrer"
                          ></a>
                        </div>
                        <div className="columns pos-rel values">
                          <svg viewBox="0 0 9 8.5">
                            <path d="M.02 4.61C.27 8 2.3 8.5 5.02 8.5s4-1.9 4-4.25S7.74 0 5.02 0C2.08 0-.25.98.02 4.61z" />
                          </svg>
                          <h3>Affinity Perks Extravaganza</h3>
                          <p>
                            ​You receive awards when you recommend other
                            professionals to Affinity - and it isn't luck, it's
                            guaranteed!{" "}
                            <span className="color-purple">
                              Surprises in your birthday and other special days.
                              Don't you want to find out?
                            </span>
                          </p>
                        </div>
                        <div className="columns pos-rel values">
                          <svg viewBox="0 0 9 8.5">
                            <path d="M.02 4.61C.27 8 2.3 8.5 5.02 8.5s4-1.9 4-4.25S7.74 0 5.02 0C2.08 0-.25.98.02 4.61z" />
                          </svg>
                          <h3>Events & Celebrations</h3>
                          <p>
                            ​Affinity is to share, build relations, care,
                            trust...{" "}
                            <span className="color-purple">
                              We want you to always feel close to us, we want
                              you to feel happy, cherished, valued and most of
                              all: that you are making the most out of your
                              Lifetime Experience!
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* to-section */}

                <section className="know-more-section">
                  <div className="row expanded align-center">
                    <div className="xxlarge-10 medium-12 small-14 xsmall-14 columns">
                      <h2>Do you want to know more?</h2>
                      <div className="row expanded xxlarge-up-2 xsmall-up-1">
                        <div className="columns">
                          <div
                            className="morphing-letter"
                            data-morphpath="M292.38,107.78c9.18,32.88,21.18,29.22,38.71,73.27,25.39,63.81-23.43,151-133.81,156.9C23.38,333.78,0,262.34,0,169.06,0,56.64,88.39-3.68,197.28.17,370.23,6.31,282.44,72.14,292.38,107.78Z"
                          >
                            <a
                              href="mailto:hr@affinity.pt?subject=I want to know more about the Affinity Offer!"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg viewBox="0 0 800 750">
                                <defs>
                                  <mask
                                    id="get-in-contact"
                                    maskUnits="userSpaceOnUse"
                                    x="0"
                                    y="0"
                                    width="800"
                                    height="750"
                                  >
                                    <filter
                                      id="get-in-contact-filter"
                                      x="0"
                                      y="0"
                                    >
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
                                      d="M254.82,139.43c9.18,32.89,58.74-2.43,76.27,41.62,25.39,63.81-23.43,151-133.81,156.9C69.77,344.79,0,262.34,0,169.06,0,56.64,88.39-3.68,197.28.17,370.23,6.31,244.88,103.79,254.82,139.43Z"
                                    />
                                  </mask>

                                  <text
                                    id="get-in-contact-text"
                                    x="395"
                                    y="170"
                                    className="show-en"
                                    fontSize="80"
                                    letterSpacing="-4px"
                                    fontWeight="bold"
                                    textAnchor="middle"
                                  >
                                    Get in contact!
                                  </text>

                                  <text
                                    id="get-in-contact-textPT"
                                    x="465"
                                    y="170"
                                    className="show-pt"
                                    fontSize="80"
                                    letterSpacing="-4px"
                                    fontWeight="bold"
                                    textAnchor="middle"
                                  >
                                    Entra em contacto!
                                  </text>
                                </defs>

                                <path
                                  className="letter shadow-letter"
                                  filter="url(#get-in-contact-filter)"
                                  fill="rgba(73, 226, 187, .5)"
                                  d="M254.82,139.43c9.18,32.89,58.74-2.43,76.27,41.62,25.39,63.81-23.43,151-133.81,156.9C69.77,344.79,0,262.34,0,169.06,0,56.64,88.39-3.68,197.28.17,370.23,6.31,244.88,103.79,254.82,139.43Z"
                                />
                                <path
                                  className="letter main-letter"
                                  fill="#49e2bb"
                                  d="M254.82,139.43c9.18,32.89,58.74-2.43,76.27,41.62,25.39,63.81-23.43,151-133.81,156.9C69.77,344.79,0,262.34,0,169.06,0,56.64,88.39-3.68,197.28.17,370.23,6.31,244.88,103.79,254.82,139.43Z"
                                />
                                <path
                                  className="icon"
                                  d="M143.23,207.36a3.86,3.86,0,0,0-3.85,3.85v19.24a3.86,3.86,0,0,0,3.85,3.85H175a3.86,3.86,0,0,0,3.85-3.85V211.21a3.86,3.86,0,0,0-3.85-3.85Zm0,1.92H175a1.92,1.92,0,0,1,.76.17l-15.44,13.78a1.67,1.67,0,0,1-2.37,0l-15.47-13.78a1.88,1.88,0,0,1,.76-.17ZM141.32,211l11.07,9.86-10.87,10.45a1.89,1.89,0,0,1-.21-.87V211.21c0-.07,0-.13,0-.2Zm35.58,0c0,.07,0,.13,0,.2v19.24a1.89,1.89,0,0,1-.21.87l-10.84-10.46,11-9.85Zm-12.48,11.14L175,232.38H143.19l10.64-10.21,2.83,2.51a3.7,3.7,0,0,0,4.93,0l2.83-2.53Z"
                                />

                                <use
                                  href="#get-in-contact-text"
                                  fill="#49e2bb"
                                />
                                <use
                                  href="#get-in-contact-text"
                                  fill="white"
                                  mask="url(#get-in-contact)"
                                />

                                <use
                                  href="#get-in-contact-textPT"
                                  fill="#49e2bb"
                                />
                                <use
                                  href="#get-in-contact-textPT"
                                  fill="white"
                                  mask="url(#get-in-contact)"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div className="columns">
                          <div
                            className="morphing-letter"
                            data-morphpath="M279,128.46c-14,42.92,82.79,55.91,40.1,136.12-25.91,48.67-89,53-137.51,53C56,317.55,0,307.32,0,158.78S81.3,0,181.58,0,307.47,41.38,279,128.46Z"
                          >
                            <a
                              href="https://affinity.pt/uploads/2020/05/Affinity-Join-the-Experience.pdf"
                              target="_blank"
                              rel="noreferrer"
                              download
                            >
                              <svg viewBox="0 0 800 750">
                                <defs>
                                  <mask
                                    id="downloadBrochureMask"
                                    maskUnits="userSpaceOnUse"
                                    x="0"
                                    y="0"
                                    width="800"
                                    height="750"
                                  >
                                    <filter
                                      id="downloadBrochureFilter"
                                      x="0"
                                      y="0"
                                    >
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
                                      d="M296.88,123.7c-14,42.92,64.9,60.67,22.21,140.88-25.91,48.67-89,53-137.51,53C81.3,317.55,0,307.32,0,158.78S81.3,0,181.58,0,325.36,36.62,296.88,123.7Z"
                                    />
                                  </mask>

                                  <text
                                    id="downloadBrochureText"
                                    x="450"
                                    y="170"
                                    fontSize="80"
                                    letterSpacing="-4px"
                                    fontWeight="bold"
                                    textAnchor="middle"
                                  >
                                    Download e-Brochure
                                  </text>
                                </defs>

                                <path
                                  className="letter shadow-letter"
                                  filter="url(#downloadBrochureFilter)"
                                  fill="rgba(73, 226, 187, .5)"
                                  d="M296.88,123.7c-14,42.92,64.9,60.67,22.21,140.88-25.91,48.67-89,53-137.51,53C81.3,317.55,0,307.32,0,158.78S81.3,0,181.58,0,325.36,36.62,296.88,123.7Z"
                                />
                                <path
                                  className="letter main-letter"
                                  fill="#49e2bb"
                                  d="M296.88,123.7c-14,42.92,64.9,60.67,22.21,140.88-25.91,48.67-89,53-137.51,53C81.3,317.55,0,307.32,0,158.78S81.3,0,181.58,0,325.36,36.62,296.88,123.7Z"
                                />
                                <path
                                  className="icon"
                                  d="M120.07,211a8,8,0,0,0-3.49-1.5v-.11a9.38,9.38,0,0,0-17.09-5.36h-.34a6.7,6.7,0,0,0-6.58,5.45A7.91,7.91,0,0,0,89,211a8,8,0,0,0,4.82,14.47h6.7a1.34,1.34,0,0,0,0-2.68h-6.7a5.36,5.36,0,1,1,0-10.72,1.34,1.34,0,0,0,1.34-1.34,4,4,0,0,1,4-4,3.71,3.71,0,0,1,.81.08h.29l.24-.08a.88.88,0,0,0,.23,0,.9.9,0,0,0,.24-.12c.07,0,.1-.11.15-.15a.91.91,0,0,0,.2-.24,6.7,6.7,0,0,1,12.59,3.19,6.92,6.92,0,0,1-.09,1.11v.07a1.22,1.22,0,0,0,0,.27v.32a2,2,0,0,0,.1.21.19.19,0,0,0,.1.16.84.84,0,0,0,.27.26l.08.08a1.54,1.54,0,0,0,.46.19h.43a5.37,5.37,0,0,1,0,10.73h-6.7a1.34,1.34,0,1,0,0,2.68h6.7A8,8,0,0,0,120.07,211Zm-12.48,19.55-1.73,1.75V213.43a1.34,1.34,0,1,0-2.68,0v18.89l-1.73-1.75a1.34,1.34,0,0,0-1.9,0h0a1.35,1.35,0,0,0,0,1.9h0l4,4a1.34,1.34,0,0,0,.86.39h.26a1.35,1.35,0,0,0,.72-.32l.07-.07,4-4a1.35,1.35,0,1,0-1.9-1.91Z"
                                />

                                <use
                                  href="#downloadBrochureText"
                                  fill="#49e2bb"
                                />
                                <use
                                  href="#downloadBrochureText"
                                  fill="white"
                                  mask="url(#downloadBrochureMask)"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* know-more-section */}

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
                            src="./uploads/2020/02/av4.png"
                            alt="Testimonial Photo"
                          />
                        </div>
                        <h2>
                          “Affinity allowed me to combine my technical expertise
                          and desire to work in my area of residence with the
                          client's requirements setting up a Nearshoring project
                          in a very efficient and competent manner. In addition,
                          Affinity allows me to work with a group of
                          high-performing, talented and motivated people, what
                          is a motivation for me every day. ”
                        </h2>
                        <h3>Pedro Esteves, Outsystems Developer</h3>
                      </div>
                      <div className="testimonial-content">
                        <div className="testimonial-picture block-bg-cover">
                          <img
                            className="element-cover"
                            src="./uploads/2020/02/av1.png"
                            alt="Testimonial Photo"
                          />
                        </div>
                        <h2>
                          “Affinity brought me the project that brings together
                          all the professional challenges I was looking for. In
                          this company, I have the support of motivated
                          professionals and passionate people who inspire me to
                          do better every day. Thank you, Affinity!”
                        </h2>
                        <h3>Joana Sousa, Functional Analyst</h3>
                      </div>
                      <div className="testimonial-content">
                        <div className="testimonial-picture block-bg-cover">
                          <img
                            className="element-cover"
                            src="./uploads/2020/02/av2.png"
                            alt="Testimonial Photo"
                          />
                        </div>
                        <h2>
                          “Affinity provided me with everything I was looking
                          for in a job: training and mentoring, progress and
                          growth both in a professional as well as the personal
                          level and always guided by excellent values and
                          standards.”
                        </h2>
                        <h3>Romil Naggi, Outsystems Developer</h3>
                      </div>
                      <div className="testimonial-content">
                        <div className="testimonial-picture block-bg-cover">
                          <img
                            className="element-cover"
                            src="./uploads/2020/02/av2.png"
                            alt="Testimonial Photo"
                          />
                        </div>
                        <h2>
                          “I joined Affinity looking for a new challenge and I
                          came across a community that always seeks the best for
                          its professionals, offering meaningful and adjusted
                          training opportunities as well as a great support
                          system, career chances, events and other perks. ”
                        </h2>
                        <h3>Carlos Sequeira, Python Developer</h3>
                      </div>
                      <div className="testimonial-content">
                        <div className="testimonial-picture block-bg-cover">
                          <img
                            className="element-cover"
                            src="./uploads/2020/02/av3.png"
                            alt="Testimonial Photo"
                          />
                        </div>
                        <h2>
                          “Since I joined Affinity I’ve always felt that my
                          goals and aspirations are taken into account. Affinity
                          provided me with all the conditions to grow at a
                          personal as well as professional level presenting me
                          with training and development opportunities.”
                        </h2>
                        <h3>Rute Guerreiro, .Net developer</h3>
                      </div>
                      <div className="testimonial-content">
                        <div className="testimonial-picture block-bg-cover">
                          <img
                            className="element-cover"
                            src="./uploads/2020/02/av4.png"
                            alt="Testimonial Photo"
                          />
                        </div>
                        <h2>
                          “Affinity opened doors for me at a time that a project
                          change made perfect sense to me and giving me full
                          support in this transition. Affinity helped me above
                          all to get out of my comfort zone and truly evolve on
                          a personal and professional level.”
                        </h2>
                        <h3>Telmo Frazão, B2B Service Operations</h3>
                      </div>
                    </div>
                  </div>
                </section>
                {/* testimonials-section */}

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
                  <div className="row expanded align-center">
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
                                  src="./uploads/2020/04/DSC_2199-1500x1289.jpg"
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
                                  src="./uploads/2020/01/20170911_AFINITY-43-1500x1000.jpg"
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
                              data-friction=".9"
                            >
                              <picture>
                                <img
                                  className="element-cover"
                                  src="./uploads/2020/04/DSC_1598-1500x998.jpg"
                                  alt=""
                                />
                              </picture>
                            </div>
                          </div>
                          <div className="bottom-right-image">
                            <div
                              className="block-bg-cover js-parallax-image"
                              data-friction=".7"
                            >
                              <picture>
                                <img
                                  className="element-cover"
                                  src="./uploads/2020/01/20170911_AFINITY-74-1000x1500.jpg"
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
                {/* place-images */}

                <section className="quiz-section">
                  <a
                    href="https://affinityportugal.typeform.com/to/CJbgpO"
                    role="link"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Answer the Quiz in around 2 minutes"
                    className="elastic-btn"
                  >
                    Answer the Quiz{" "}
                    <svg viewBox="0 0 392 122">
                      <path
                        className="morph-bg"
                        d="M331,122H61A61,61,0,0,1,0,61H0A61,61,0,0,1,61,0H331a61,61,0,0,1,61,61h0A61,61,0,0,1,331,122Z"
                        data-hover="M324,118.82H68A57.82,57.82,0,0,1,10.2,61h0A57.82,57.82,0,0,1,68,3.18H324A57.82,57.82,0,0,1,381.8,61h0A57.82,57.82,0,0,1,324,118.82Z"
                      />
                    </svg>
                  </a>
                  <div className="row expanded align-center">
                    <div className="xxlarge-8 medium-13 small-14 xsmall-14 columns">
                      <h2>
                        What kind of challenge would make you want to join us?
                      </h2>
                      <ul role="list">
                        <li>International Opportunities</li>
                        <li>Career Development</li>
                        <li>Income</li>
                        <li>Perks & Benefits</li>
                        <li>Field of my Dreams</li>
                        <li>Geography of Preference</li>
                        <li>Interesting Projects</li>
                        <li>Great Work Environment</li>
                        <li>Skills Development</li>
                      </ul>
                    </div>
                  </div>
                </section>
                {/* quiz-section */}

                <section
                  className="job-offers container"
                  data-jobsoffset="5"
                  data-jobsposts="5"
                >
                  <div className="rotate-title">
                    <h4>Job offers</h4>
                  </div>
                  <div className="row expanded">
                    <div className="xxlarge-4 xxlarge-offset-3 medium-6 medium-offset-1 xsmall-14 columns meta-title-wrapper">
                      <div
                        className="morphing-letter"
                        data-morphpath="M221.2,362.4C-40,422.8,187.3,781.7,478.7,711.5C770.9,641,751.9,65.9,533.4,31.6 C297.2-5.6,414.4,317.7,221.2,362.4z"
                      >
                        <svg viewBox="0 0 800 750">
                          <defs>
                            <mask
                              id="jobMask"
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="800"
                              height="750"
                            >
                              <filter id="jobFilter" x="0" y="0">
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
                                d="M220.9,396.8c-259.7,66.7-53.6,390.1,235.9,312.7c290.4-77.6,267.4-641,48.1-670 C268,8.1,413,347.4,220.9,396.8z"
                              />
                            </mask>

                            <text
                              id="jobText"
                              x="560"
                              y="348"
                              fontSize="100"
                              letterSpacing="-4px"
                              fontWeight="bold"
                              textAnchor="middle"
                            >
                              Job offers{" "}
                            </text>
                          </defs>

                          <path
                            className="letter shadow-letter"
                            filter="url(#jobFilter)"
                            fill="rgba(191, 0, 0, .5)"
                            d="M220.9,396.8c-259.7,66.7-53.6,390.1,235.9,312.7c290.4-77.6,267.4-641,48.1-670 C268,8.1,413,347.4,220.9,396.8z"
                          />
                          <path
                            className="letter main-letter"
                            fill="#006cfc"
                            d="M220.9,396.8c-259.7,66.7-53.6,390.1,235.9,312.7c290.4-77.6,267.4-641,48.1-670 C268,8.1,413,347.4,220.9,396.8z"
                          />

                          <use href="#jobText" fill="#006cfc" />
                          <use
                            href="#jobText"
                            fill="white"
                            mask="url(#jobMask)"
                          />
                        </svg>
                        <h3 className="subtitle js-text-element">
                          National or international Careers in Technologies or
                          Management. You name it.
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="row expanded">
                    <div className="xxlarge-10 xxlarge-offset-4 medium-12 medium-offset-2 small-14 small-offset-1 columns">
                      <div className="row xxlarge-up-2 xsmall-up-1 job-items-wrapper">
                        {/* <a className="columns job-link job-spontaneous"
                 href="https://affinity.key.work/jobs/register/1"
                 target="_blank"
                 rel="noreferrer"
                 >
                <div className="job-wrapper block-wrapper" data-target="spontaneous">
                  <h2>Can't wait <br>to see the <strong style="fontWeight:bold;">offers?</strong></h2>
                  <h4>Click here and send us a spontaneous application.</h4>
                </div>
              </a> */}

                        {/* <a className="columns job-link"
                 href="https://affinity.key.work/jobs/"
                 target="_blank"
                 rel="noreferrer"
                 >
                 <div className="job-wrapper block-wrapper" data-target="it-consultant">
                  <h3 className="post-time">Updated daily</h3>
                  <h2 style="fontWeight:normal;">Click here to see<br>the <strong style="fontWeight:bold;">available offers.</strong></h2>
                  <h4 className="post-local">
                    <span>
                      <svg viewBox="0 0 12 15.5">
                        <path d="M6 0a6 6 0 0 0-6 6 5.54 5.54 0 0 0 2.18 4.5 11.28 11.28 0 0 1 3.49 4.74.35.35 0 0 0 .66 0 11.28 11.28 0 0 1 3.49-4.74A5.55 5.55 0 0 0 12 6.04 6 6 0 0 0 6 0zm0 4a2.11 2.11 0 1 1-2.12 2.12A2.12 2.12 0 0 1 6 4.01z"/>
                      </svg>
                    </span>
                    Portugal
                  </h4>
                </div>
              </a> */}

                        <a
                          className="columns job-link"
                          href="https://affinity.key.work/jobs"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div
                            className="job-wrapper block-wrapper"
                            data-target="it-consultant"
                          >
                            <h2>
                              Can't wait to see
                              <br />
                              the
                              <strong style={{ fontWeight: "bold" }}>
                                {" "}
                                tech
                              </strong>{" "}
                              offers?{" "}
                            </h2>
                            <h4>Click here to see the available offers.</h4>
                          </div>
                        </a>

                        <a
                          className="columns job-link"
                          href="https://corporate.key.work/jobs/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div
                            className="job-wrapper block-wrapper"
                            data-target="spontaneous"
                          >
                            <h2>
                              Can't wait to see
                              <br />
                              the
                              <strong style={{ fontWeight: "bold" }}>
                                {" "}
                                corporate
                              </strong>{" "}
                              offers?{" "}
                            </h2>
                            <h4>
                              Click here and send a spontaneous application.
                            </h4>
                          </div>
                        </a>

                        {/*               <a className="columns job-link"
                 href="https://affinity.pt/en/careers/1487/"
                 data-remote="true"
                 data-targetclass="single-queremos"
                 data-ajaxurl="https://affinity.pt/en/ajax/single-emprego-ajax/?ajax-id=https://affinity.pt"
                 data-title=""
              >
                <div className="job-wrapper block-wrapper" data-target="it-consultant">
                  <h3 className="post-time">Posted 5 years ago <span className="post-target">It Consultant</span></h3>
                  <h2>Outsystems Developers</h2>
                  <h4 className="post-local">
                    <span>
                      <svg viewBox="0 0 12 15.5">
                        <path d="M6 0a6 6 0 0 0-6 6 5.54 5.54 0 0 0 2.18 4.5 11.28 11.28 0 0 1 3.49 4.74.35.35 0 0 0 .66 0 11.28 11.28 0 0 1 3.49-4.74A5.55 5.55 0 0 0 12 6.04 6 6 0 0 0 6 0zm0 4a2.11 2.11 0 1 1-2.12 2.12A2.12 2.12 0 0 1 6 4.01z"/>
                      </svg>
                    </span>
                    International                  </h4>
                </div>
              </a>
               */}
                      </div>
                    </div>
                    {/* <div className="xxlarge-10 xxlarge-offset-4 medium-12 medium-offset-2 small-14 small-offset-1 columns">
                     </div> */}
                  </div>
                </section>
                {/* job-offers */}

                <footer className="page-footer type-2">
                  <div className="rolling-letters">
                    <ul className="slides">
                      <li></li>
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
                        <svg viewBox="0 0 720 670" className="js-letter-anime">
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
                          viewBox="0 0 620 670"
                          className="js-letter-anime r-letter"
                        >
                          <image
                            width="1350"
                            height="1361"
                            href="/imgs/somos/footer-letters/R_shadow.png"
                            transform="translate(-364.944 -335.568)"
                            overflow="visible"
                            opacity=".25"
                          />
                          <path
                            className="st0"
                            d="M188 639.6c-12.3 0-25.4-2-39.4-6.9-44.2-15.2-80.6-51.2-105.1-104.1-21.8-46.7-33.5-106-32.9-166.8.6-68.1 16.4-135 44.5-188.4C87.4 112 134.8 69.7 192.2 51.1c54.2-17.6 116.6-24.3 175.6-18.9 61.6 5.6 116.2 23.4 158 51.6 50.5 34.1 79.3 81.6 83.3 137.3 3.5 49.2-15.6 92.4-31 127.2-11.2 25.3-20.9 47.1-19 63.2 3 25.7 11.6 49.8 20 73.1 7.5 20.9 14.6 40.6 16.8 59.7 2.7 23.9-2.7 43.6-16.6 60.1-18.5 22-40.2 31.7-66.4 29.7-21.4-1.7-42.7-10.7-67.4-21.2C418 601.1 387 588 351 583.8c-25.1-2.9-47.3 9.8-73 24.5-26.2 14.9-54.9 31.3-90 31.3z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg viewBox="0 0 590 670" className="js-letter-anime">
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
                    </ul>
                  </div>

                  <a
                    href="../about/index.html"
                    data-remote="true"
                    data-targetclass="somos"
                    data-ajaxurl="https://affinity.pt/en/ajax/somos-ajax/?ajax-id=98"
                    data-title="About"
                  >
                    <div className="row expanded align-center align-middle content-wrapper">
                      <div className="xxlarge-14 xxlarge-offset-2 medium-15 medium-offset-1 xsmall-14 xsmall-offset-0 columns">
                        <div className="row expanded pos-rel">
                          <div className="xxlarge-14 medium-16 columns">
                            <h3>We are</h3>
                            <h2>Affinity</h2>
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
                        <h4>Privacy Policy</h4>{" "}
                      </a>
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

              {/* preload  */}
              <div className="preload" aria-hidden="true">
                <img
                  src="./imgs/queremos/careers-header-image.jpg"
                  alt=""
                />
                <img
                  src="./imgs/queremos/careers-pictogram.png"
                  alt=""
                />
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
        {/*Loading Blob */}
        {/* <div className="loading-blob">
  <svg viewBox="0 0 62 58">
    <path d="M0,32.45C0,14.12,3.5,3.12,23.17.45c23.33-2.33,38.33,4,38.67,26.17C61.67,50,51,58.12,31.33,58.12S0,48,0,32.45Z" data-morph="M6.44,24.66C25.78,14,.44,3,20.11.32c23.33-2.33,53.76,17,34,26.5C28.44,39.16,47.94,58,28.28,58S-7.13,32.15,6.44,24.66Z"></path>
  </svg>
</div> */}

        {/* MODAL */}
        <div id="modal-bg"></div>
        <div id="modal-wrapper">
          {" "}
          <div
            id="modal-content"
            className="row align-middle align-center"
          ></div>
        </div>
        {/* TRANSITION */}
        <div id="loading-page" aria-hidden="true"></div>

        {/* outdated browser  */}
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
          {/* end #outdated browser  */}
        </div>
      </body>
    </>
  );
}

export default CareersPage;
