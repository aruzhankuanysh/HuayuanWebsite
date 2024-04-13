import React from "react";

function AboutInfo() {
  return (
    <section className="about image-blocks js-height">
      <div
        className="letter-wrapper morphing-letter hide-mob"
        data-morphpath="M503.35,441.778 c245.134-57.651,156.38-488.477-252-385c-304.931,77.264-293.9,575.217-63,603C437.912,689.805,301.148,489.333,503.35,441.778z"
      >
        <div className="clip-letter">
          <img src="../imgs/home/about-letter.jpg" alt="" />
        </div>
        <svg viewBox="0 0 667.699 702.557">
          <defs>
            <clipPath id="letter-clip">
              <path
                className="letter main-letter"
                fill="#006CFF"
                stroke="none"
                d="M515.016,464.746 c245.133-57.651,141.312-531.97-267.068-428.493c-304.931,77.264-281.577,613.863-50.677,641.646 C446.834,707.926,312.814,512.301,515.016,464.746z"
              />
            </clipPath>
          </defs>
        </svg>
        <img
          className="alt-image"
          src="../imgs/home/about-letter-alt.jpg"
          alt=""
        />
      </div>
      <div className="letter-wrapper show-mob">
        <img src="../imgs/home/about-letter-alt.jpg" alt="" />
      </div>
      <div className="row expanded question-row">
        <div className="question-wrapper xxlarge-5 xxlarge-offset-2 medium-6 medium-offset-1 small-8 xsmall-14 background-lightGray">
          <h3>We develop powerful professional relationships.</h3>
          <h2>How?</h2>
        </div>
      </div>
      <div className="row expanded image-wrapper">
        <div className="xxlarge-13 xxlarge-offset-3 small-16 small-offset-0">
          <picture>
            <img src="../uploads/2020/04/DSC_1165.jpg" alt="" />
          </picture>
        </div>
      </div>
      <div className="row expanded answer-wrapper">
        <div className="xxlarge-6 xxlarge-offset-8 medium-offset-9 small-8 small-offset-7 xsmall-14 xsmall-offset-1 answer-wrapper-text">
          <h3>All decisions are guided by our core company values:</h3>
          <h4>Affinity. Ambition. Action. Apprenticeship.</h4>
        </div>
      </div>
    </section>
  );
}
export default AboutInfo;
