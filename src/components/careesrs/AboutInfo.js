import React from "react";

function AboutCareers() {
  return (
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
            <img src="./uploads/2020/04/margaridaeines.jpg" alt="" />
          </picture>
          <div className="offset-text row">
            <div className="xxlarge-8 xxlarge-offset-6 medium-10 xsmall-14 xsmall-offset-0 columns">
              <p className="js-text-element">
                Our company keeps growing and so will you — that’s why we work
                on your very own Career Plan and strive to offer you many
                professional and personal benefits.
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
  );
}
export default AboutCareers;
