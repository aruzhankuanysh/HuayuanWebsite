import Footer from "../components/Footer";
import AboutInfo from "../components/about/AboutInfo";
import CeoMessage from "../components/about/CeoMassege";
import AboutHaeder from "../components/about/Header";
import PlaceImage from "../components/about/PlaceImage";
import RollingLetters from "../components/about/RollingLetters";
import SocialRespons from "../components/about/SocialRespons";
import Team from "../components/about/Team";
import Timeline from "../components/about/Timeline";
import ToSection from "../components/about/ToSection";

function AboutPage() {
  return (
    <>
      {/* ============= CONTENT =============*/}
      <div className="page-main page-current">
        <div className="page-toload somos-page" data-bodyclass="somos">
          <AboutHaeder />

          <main className="page-content" role="main">
            <div className="vertical-menu-wrapper">
              <ul>
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
            <AboutInfo />
            {/*about*/}
            <ToSection />
            {/* to-section*/}
            <PlaceImage />
            {/* place-images*/}
            <Timeline />
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
            <Team />
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

            <CeoMessage />
            <SocialRespons />
            {/* social-responsability-section*/}
            <footer className="page-footer type-2">
              <RollingLetters />

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

              <Footer />
            </footer>
          </main>

          {/* preload */}
          <div className="preload" aria-hidden="true">
            <img src="../imgs/somos/about-header-image.jpg" alt="" />
            <img src="../imgs/somos/about-pictogram.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
