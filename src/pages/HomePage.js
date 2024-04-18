// import "./App.css";
import Footer from "../components/Footer";
import Brochure from "../components/app/Brochure";
import CompanyNumbers from "../components/app/CompanyNumbers";
import AppHeader from "../components/app/Header";
import JobOffers from "../components/app/JobOffers";
import NewsEvents from "../components/app/NewsEvents";
import WeDo from "../components/app/WeDo";

function HomePage() {
  return (
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
                  <a href="#" target="_blank" rel="noreferrer">
                    <img src="./imgs/pt2020.png" alt="Portugal 2020" />
                  </a>
                </div>
                <div className="apdc-logo">
                  <a href="#" target="_blank" rel="noreferrer">
                    <img src="./imgs/apdc-logo.png" alt="APDC Logo" />
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </main>

        {/*preload */}
        <div className="preload" aria-hidden="true">
          <img src="./imgs/home/home-header-image.jpg" alt="" />
          <img src="./imgs/home/home-pictogram.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
