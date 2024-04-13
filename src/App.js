import "./App.css";
import Footer from "./components/Footer";
import MorphPage from "./components/MorphPage";
import Transition from "./components/Transition";
import Brochure from "./components/app/Brochure";
import CompanyNumbers from "./components/app/CompanyNumbers";
import AppHeader from "./components/app/Header";
import JobOffers from "./components/app/JobOffers";
import NewsEvents from "./components/app/NewsEvents";
import WeDo from "./components/app/WeDo";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <body className="js-byrefresh js-no-ajax en-lang">
        <div className="home-fullvideos-container">
          <div className="block-bg-cover full-video">
            <video className="element-cover">
              <source src="App.js" type="video/mp4" />
            </video>
          </div>
          <button className="elastic-btn">
            <svg viewBox="0 0 74 70">
              <path
                className="morph-bg"
                d="M.9 37.9C2.9 65 19.3 69 41.1 69 63 69 73.2 53.8 73.2 35S63 1 41.1 1C17.5 1-1.2 8.8.9 37.9z"
                data-hover="M1.9 37.9C3.9 65 19.3 66 41.1 66 63 66 72.2 53.8 72.2 35S63 4 41.1 4C17.5 4-.2 8.8 1.9 37.9z"
                data-original="M.9 37.9C2.9 65 19.3 69 41.1 69 63 69 73.2 53.8 73.2 35S63 1 41.1 1C17.5 1-1.2 8.8.9 37.9z"
              ></path>
              <path
                className="morph-element"
                d="M41.3 31.8c-.1-6.8-.7-7.5-3.5-7.5-3.4 0-4.1.7-4.3 7.5-7.8.1-7.8.9-7.8 4.2 0 2.9 1.2 3.5 7.8 3.6.2 6.5 1 6.9 4.2 6.9 2.9 0 3.5-.8 3.6-6.9 7.5-.1 8.1-.6 8.1-3.5.1-3.5-.3-4.2-8.1-4.3z"
                data-click="M37.2 31.8c-11.4 0-11.5.5-11.5 4.2 0 3.5 1.7 3.6 12.4 3.6 10.5 0 11.3-.3 11.3-3.5.1-4-.4-4.3-12.2-4.3z"
                data-original="M41.3 31.8c-.1-6.8-.7-7.5-3.5-7.5-3.4 0-4.1.7-4.3 7.5-7.8.1-7.8.9-7.8 4.2 0 2.9 1.2 3.5 7.8 3.6.2 6.5 1 6.9 4.2 6.9 2.9 0 3.5-.8 3.6-6.9 7.5-.1 8.1-.6 8.1-3.5.1-3.5-.3-4.2-8.1-4.3z"
              ></path>
            </svg>
          </button>
        </div>

        <div className="scroll-content-wrapper" data-scrollbar>
          <Header />
          {/*============= CONTENT =============*/}
          <div className="page-main page-current">
            <div className="page-toload home-page" data-bodyclass="home">
              <AppHeader />

              <main className="page-content" role="main">

                <WeDo />

                <CompanyNumbers />

                <JobOffers />

                <NewsEvents />

                <footer className="page-footer type-1">
                  <Brochure />

                  <Footer />
                  <div className="row expanded align-center apdc-member">
                    <div className="xxlarge-4 d-flex xsmall-7">
                      <div className="pt2020-logo">
                        <a
                          href="#"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/imgs/pt2020.png" alt="Portugal 2020" />
                        </a>
                      </div>
                      <div className="apdc-logo">
                        <a
                          href="#"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/imgs/apdc-logo.png" alt="APDC Logo" />
                        </a>
                      </div>
                    </div>
                  </div>
                </footer>
              </main>

              {/*preload */}
              <div className="preload" aria-hidden="true">
                <img src="/imgs/home/home-header-image.jpg" alt="" />
                <img src="/imgs/home/home-pictogram.png" alt="" />
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
        </div>
      </body>
    </div>
  );
}

export default App;
