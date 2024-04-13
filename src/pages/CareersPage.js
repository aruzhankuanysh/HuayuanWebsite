import Footer from "../components/Footer";
import MorphPage from "../components/MorphPage";
import Transition from "../components/Transition";
import JobOffers from "../components/app/JobOffers";
import AboutCareers from "../components/careesrs/AboutInfo";
import CareersHeader from "../components/careesrs/Header";
import CareersKnowMore from "../components/careesrs/KnowMore";
import CareersPlaceImage from "../components/careesrs/PlaceImage";
import QuizSection from "../components/careesrs/QuizSection";
import CareersSlider from "../components/careesrs/Slider";
import CareersToSection from "../components/careesrs/ToSection";
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
              <CareersHeader />

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

                <AboutCareers />
                {/*about*/}

                <CareersToSection />
                {/* to-section */}

                <CareersKnowMore />
                {/* know-more-section */}

                <CareersSlider />
                {/* testimonials-section */}

                <CareersPlaceImage />
                {/* place-images */}

                <QuizSection />
                {/* quiz-section */}

                <JobOffers />
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

                  <Footer />
                </footer>
              </main>

              {/* preload  */}
              <div className="preload" aria-hidden="true">
                <img src="./imgs/queremos/careers-header-image.jpg" alt="" />
                <img src="./imgs/queremos/careers-pictogram.png" alt="" />
              </div>
            </div>
          </div>

          <MorphPage />
        </div>

        <Transition />

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
