import React from "react";

function Brochure() {
  return (
    <div className="row expanded align-center align-middle text-center content-wrapper">
      <div className="webGL-main">
        <div id="webGL-container"></div>
      </div>
      <div className="xxlarge-16 columns">
        <div className="row expanded align-center">
          <div className="xxlarge-14 xlarge-16 small-12 xsmall-14 columns">
            <h5>#moreaboutus</h5>
            <h2>Download our E-Brochure</h2>

            <div className="alphabeth-wrapper">
              <picture>
                <img
                  className="alphabeth-image"
                  src="./imgs/alphabeth_3d/headerA.png"
                  alt=""
                />
              </picture>
            </div>
          </div>
          <div className="xxlarge-12 medium-14 columns">
            <form>
              <input type="hidden" name="language" value="en" />
              <input
                type="hidden"
                name="file_url"
                value="https://affinity.pt/public/uploads/2023/01/Affinity-Corporate-Brochure-2023-EN.pdf"
              />
              <div className="elastic-input">
                <label htmlFor="email">email address</label>
                <svg viewBox="0 0 370 76">
                  <path
                    className="morph-bg"
                    d="M5.2 40.8c2 25.9 17.7 29.7 38.6 29.7h290.6C355.2 70.4 365 55.8 365 38s-9.8-32.4-30.6-32.5H43.8C21.1 5.5 3.1 13 5.2 40.8z"
                    data-hover="M7.3 40.8c2 25.9 15.6 25.7 36.6 25.7h290.5C355.3 66.4 363 55.8 363 38s-8-28.5-28.7-28.5H43.8C21.2 9.5 5.3 13 7.3 40.8z"
                  />
                </svg>
                <input
                  type="text"
                  className="email required"
                  name="email"
                  autoComplete="off"
                />
                <span className="error-text">Please insert your email.</span>
              </div>
              <button className="elastic-btn">
                <svg viewBox="0 0 164 69">
                  <path
                    className="morph-bg"
                    d="M3.2 37.3C5.1 63.2 20.8 67 41.5 67h89c20.8-.1 30.4-14.7 30.4-32.5S151.3 2.1 130.6 2h-89C19 2 1.2 9.5 3.2 37.3z"
                    data-hover="M5.1 37.3C7.1 63.2 20.7 63 41.5 63s68.2.1 89 0S159 52.3 159 34.5 151.1 6 130.5 6h-89C18.9 6 3.2 9.5 5.1 37.3z"
                  />
                </svg>
                <span className="text">Submit</span>
                {/* Loader  */}
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// Экспорт компонента для использования в других частях приложения
export default Brochure;
