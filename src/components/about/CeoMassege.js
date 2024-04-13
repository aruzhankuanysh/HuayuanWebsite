import React from "react";

function CeoMessage() {
  return (
    <section className="ceo-message js-height">
      <div
        className="morphing-letter"
        data-morphpath="M687.4,373.7c167.7,147.4,15.8,313.9-190.2,327.1C291.2,714,64.4,574.5,53,397.5 C39.3,184.2,247.7,35.9,454.1,30c132.9-3.8,203.1,85.1,221.4,130.4C716,260.3,644.9,336.3,687.4,373.7z"
      >
        <svg viewBox="0 0 800 750">
          <defs>
            <mask
              id="ceoMask"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="800"
              height="750"
            >
              <filter id="ceoFilter" x="0" y="0">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
                <feOffset dx="10" dy="20" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <path
                className="mask"
                fill="white"
                d="M666.6,392c158,157.8-4.3,304.3-210.8,304.3S82,552.5,82,375.2C82,161.4,249.5,46.7,455.8,54.1 c132.9,4.7,197.2,78,212.6,124.4C702.4,280.8,596.4,321.9,666.6,392z"
              />
            </mask>

            <text
              id="ceoTextEN"
              className="show-en"
              x="595"
              y="348"
              fontSize="100"
              letterSpacing="-4px"
              fontWeight="bold"
              textAnchor="middle"
            >
              CEO Message
            </text>

            <text
              id="ceoTextPT"
              className="show-pt"
              x="720"
              y="348"
              fontSize="100"
              letterSpacing="-4px"
              fontWeight="bold"
              textAnchor="middle"
            >
              Mensagem do CEO
            </text>
          </defs>

          <path
            className="letter shadow-letter"
            filter="url(#ceoFilter)"
            fill="rgba(191, 0, 0, .5)"
            d="M666.6,392c158,157.8-4.3,304.3-210.8,304.3S82,552.5,82,375.2C82,161.4,249.5,46.7,455.8,54.1 c132.9,4.7,197.2,78,212.6,124.4C702.4,280.8,596.4,321.9,666.6,392z"
          />
          <path
            className="letter main-letter"
            fill="#006cfc"
            d="M666.6,392c158,157.8-4.3,304.3-210.8,304.3S82,552.5,82,375.2C82,161.4,249.5,46.7,455.8,54.1 c132.9,4.7,197.2,78,212.6,124.4C702.4,280.8,596.4,321.9,666.6,392z"
          />

          <use href="#ceoTextEN" fill="#006cfc" />
          <use href="#ceoTextEN" fill="white" mask="url(#ceoMask)" />

          <use href="#ceoTextPT" fill="#006cfc" />
          <use href="#ceoTextPT" fill="white" mask="url(#ceoMask)" />
        </svg>
        <h3 className="subtitle js-text-element">Welcome to Affinity</h3>
      </div>
      <div className="row expanded align-center align-bottom">
        <div className="xxlarge-6 medium-8 small-14 columns">
          <div className="ceo-image">
            <div>
              <figure className="block-bg-cover">
                <img
                  className="element-cover"
                  src="../uploads/2020/05/carlos-photoonwebsite2.jpg"
                  alt="CEO Photography"
                />
              </figure>
            </div>
          </div>
        </div>
        <div className="xxlarge-6 xxlarge-offset-1 small-14 small-offset-0 columns">
          <blockquote>
            "We invest in technological innovation and in quality experiences
            for all our stakeholders."
          </blockquote>
          <p>
            10 years later, we continue to look to the future with optimism and
            expectation.
            <br />
            <br />
            We continue to invest in technological innovation, in new working
            models, in a greater geographical expression in Portugal, and in the
            creation of valuable experiences for all our stakeholders.
            <br />
            <br />
            We underline our ambition and reinforce our offer of IT consulting
            services and quality Cloud products, at the national and
            international level, promoting and developing unique experiences
            that translate into a real commitment to the creation of
            reciprocally prosperous relationships with people, the market,
            society, and nature.
            <br />
            <br />
            My door will always remain open to all feedback.
            <br />
            <br />
            Shall we continue the experience?
          </p>
          <span className="ceo-name">Carlos Pais Correia</span>
          <span className="ceo-role">CEO</span>
        </div>
      </div>
    </section>
  );
}
export default CeoMessage;
