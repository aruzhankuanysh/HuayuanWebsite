import Header from "../components/header";

function SolutionsPage() {
  return (
    <>
      <body className="js-byrefresh js-no-ajax en-lang">
        <div className="scroll-content-wrapper" data-scrollbar>
          <Header />
          {/* ============= CONTENT ============= */}
          <div className="page-main page-current">
            <div className="page-toload fazemos-page" data-bodyclass="fazemos">
              <header className="page-header">
                <section className="we-do">
                  <div className="row align-center align-middle">
                    <div className="xxlarge-14 medium-15 small-16 columns">
                      <ul className="we-do-list row xxlarge-up-3 small-up-1">
                        <li className="column nearshoring-item">
                          <a
                            href="/Nearshore"
                            data-remote="true"
                            data-targetclass="single-service"
                            // data-ajaxurl="https://affinity.pt/en/ajax/nearshoring-ajax/?ajax-id=76"
                            data-title="Nearshore"
                          >
                            <img
                              // className="show-mob"
                              src="./imgs/home/nearshoring.png"
                              alt=""
                            />
                            <h3>Nearshore</h3>
                          </a>
                          <p>
                            With clients all over Europe, we provide
                            high-performance teams, 100% dedicated to remotely
                            develop your IT projects, maintenance and
                            application support. On-time, on-budget, goal-based
                            delivery!
                          </p>
                        </li>
                        <li className="column outsourcing-item">
                          <a
                            href="/Outsourcing"
                            data-remote="true"
                            // data-ajaxurl="https://affinity.pt/en/ajax/outsourcing-ajax/?ajax-id=78"
                            data-title="Outsourcing"
                          >
                            <img
                              className="show-mob"
                              src="./imgs/home/outsourcing.png"
                              alt=""
                            />
                            <h3>Outsourcing</h3>
                          </a>
                          <p>
                            Our secret is a multidisciplinary team created by
                            experts who have vast technological knowledge that
                            goes from Opensource, Microsoft, Java, IBM,
                            OutSystems to Oracle. Let’s talk about business?
                          </p>
                        </li>
                        <li className="column software-item">
                          <a
                            href="/Software"
                            data-remote="true"
                            // data-ajaxurl="https://affinity.pt/en/ajax/software-ajax/?ajax-id=80"
                            data-title="Software"
                          >
                            <img
                              className="show-mob"
                              src="./imgs/home/software.png"
                              alt=""
                            />
                            <h3>Software</h3>
                          </a>
                          <p>
                            We create products and clear and intuitive solutions
                            for the needs of your organization. With experienced
                            professionals and with agile methodologies, we
                            develop high technology for some of the biggest
                            companies, at a global level.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                {/*we-do*/}
              </header>

              <main className="page-content" role="main"></main>
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

export default SolutionsPage;
