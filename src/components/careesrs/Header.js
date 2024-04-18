import React from "react";
import SocialLinks from "../SocialLinks";

function CareersHeader() {
  return (
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
                srcSet="./imgs/queremos/careers-header-image-phone.jpg"
                media="(max-width: 414px)"
              />
              <source
                srcSet="./imgs/queremos/careers-header-image-small.jpg"
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
              srcSet="./imgs/queremos/careers-pictogram-phone.png"
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
        <SocialLinks />
      </div>

      <div className="mouse-icon left-side">
        <span className="scroll-helper">Scroll</span>
        <span className="wheel"></span>
      </div>
    </header>
  );
}
export default CareersHeader;
