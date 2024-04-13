import React from "react";

function JobOffers() {
  return (
    <section className="job-offers container">
      <div className="rotate-title">
        <h4>Job Offers</h4>
      </div>
      <div className="row expanded">
        <div className="xxlarge-4 xxlarge-offset-3 medium-6 medium-offset-1 xsmall-14 columns meta-title-wrapper">
          <div
            className="morphing-letter"
            data-morphpath="M221.2,362.4C-40,422.8,187.3,781.7,478.7,711.5C770.9,641,751.9,65.9,533.4,31.6 C297.2-5.6,414.4,317.7,221.2,362.4z"
          >
            <svg viewBox="0 0 800 750">
              <defs>
                <mask
                  id="jobMask"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="800"
                  height="750"
                >
                  <filter id="jobFilter" x="0" y="0">
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
                    d="M220.9,396.8c-259.7,66.7-53.6,390.1,235.9,312.7c290.4-77.6,267.4-641,48.1-670 C268,8.1,413,347.4,220.9,396.8z"
                  />
                </mask>

                <text
                  id="jobText"
                  x="560"
                  y="348"
                  fontSize="100"
                  letterSpacing="-4px"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  Job Offers{" "}
                </text>
              </defs>

              <path
                className="letter shadow-letter"
                filter="url(#jobFilter)"
                fill="rgba(191, 0, 0, .5)"
                d="M220.9,396.8c-259.7,66.7-53.6,390.1,235.9,312.7c290.4-77.6,267.4-641,48.1-670 C268,8.1,413,347.4,220.9,396.8z"
              />
              <path
                className="letter main-letter"
                fill="#006cfc"
                d="M220.9,396.8c-259.7,66.7-53.6,390.1,235.9,312.7c290.4-77.6,267.4-641,48.1-670 C268,8.1,413,347.4,220.9,396.8z"
              />

              <use href="#jobText" fill="#006cfc" />
              <use href="#jobText" fill="white" mask="url(#jobMask)" />
            </svg>

            <h3 className="subtitle js-text-element">
              Where success is more a consequence than a goal.
            </h3>
          </div>
        </div>
      </div>
      <div className="row expanded">
        <div className="xxlarge-10 xxlarge-offset-4 medium-12 medium-offset-2 small-14 small-offset-1 columns">
          <div className="row xxlarge-up-2 xsmall-up-1">
            <a
              className="columns job-link"
              href="https://affinity.key.work/jobs"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="job-wrapper block-wrapper"
                data-target="it-consultant"
              >
                <h2>
                  Can't wait to see
                  <br />
                  the<strong> tech</strong> offers?{" "}
                </h2>
                <h4>Click here to see the available offers.</h4>
              </div>
            </a>

            <a
              className="columns job-link"
              href="https://corporate.key.work/jobs/"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="job-wrapper block-wrapper"
                data-target="spontaneous"
              >
                <h2>
                  Can't wait to see
                  <br />
                  the<strong> corporate</strong> offers?{" "}
                </h2>
                <h4>Click here and send a spontaneous application.</h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobOffers;
