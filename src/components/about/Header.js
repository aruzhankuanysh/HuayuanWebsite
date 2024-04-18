import React from "react";
import SocialLinks from "../SocialLinks";

function AboutHaeder() {
  return (
    <header className="page-header">
      <div className="background-wrapper">
        <div className="webGL-main">
          <div id="webGL-container"></div>
        </div>
        <div className="header-image-wrapper">
          <div className="block-bg-cover">
            <picture>
              <source
                srcSet="./imgs/somos/about-header-image-phone.jpg"
                media="(max-width: 414px)"
              />
              <source
                srcSet="./imgs/somos/about-header-image-small.jpg"
                media="(max-width: 768px)"
              />
              <img
                className="background-image element-cover"
                src="./imgs/somos/about-header-image.jpg"
                alt=""
              />
            </picture>
          </div>
        </div>

        <div className="header-pictogram-wrapper">
          <picture>
            <source
              srcSet="./imgs/somos/about-pictogram-phone.png"
              media="(max-width: 414px)"
            />
            <img
              className="header-pictogram"
              src="../imgs/somos/about-pictogram.png"
              alt=""
            />
          </picture>
        </div>

        <div className="row expanded align-middle medium-collapse">
          <div className="xxlarge-8 xxlarge-offset-5 xlarge-offset-5 large-9 large-offset-4 medium-10 medium-offset-4 small-14 small-offset-1 columns">
            <div className="header-text">
              <h1>Our nature is effortless technology.</h1>
              <h2>We make things run as smooth as nature.</h2>
            </div>
          </div>
        </div>
        <SocialLinks />
      </div>
    </header>
  );
}
export default AboutHaeder;
