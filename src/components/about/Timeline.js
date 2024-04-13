import React from "react";

function Timeline() {
  return (
    <section className="affinity-timeline js-height">
      <div className="row expanded">
        <div className="xxlarge-6 xxlarge-offset-3 medium-5 medium-offset-1 xsmall-12 columns meta-title-wrapper">
          <div
            className="morphing-letter"
            data-morphpath="M1.18,145.64C20.32,16,203.48-3.7,409.11,1,609,5.63,800,30.45,800,125.92c0,120.28-115.23,188-149,272.08-77.89,194-66.44,351.59-235.92,351.59S241.79,565.47,153,394C103.89,299.14-14.38,251.08,1.18,145.64Z"
          >
            <svg viewBox="0 0 800 750">
              <defs>
                <mask
                  id="timelineMask"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="800"
                  height="750"
                >
                  <filter id="timelineFilter" x="0" y="0">
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
                    d="M1.18,145.64C20.32,16,203.48-3.7,409.11,1,609,5.63,800,30.45,800,125.92c0,120.28-140.81,177.15-174.57,261.22-77.9,194-40.87,362.45-210.35,362.45S266,558.61,177.21,387.14C128.1,292.28-14.38,251.08,1.18,145.64Z"
                  />
                </mask>

                <text
                  id="timelineText"
                  x="670"
                  y="348"
                  fontSize="100"
                  letterSpacing="-4px"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  Affinity Timeline
                </text>
              </defs>

              <path
                className="letter shadow-letter"
                filter="url(#timelineFilter)"
                fill="rgba(191, 0, 0, .5)"
                d="M1.18,145.64C20.32,16,203.48-3.7,409.11,1,609,5.63,800,30.45,800,125.92c0,120.28-140.81,177.15-174.57,261.22-77.9,194-40.87,362.45-210.35,362.45S266,558.61,177.21,387.14C128.1,292.28-14.38,251.08,1.18,145.64Z"
              />
              <path
                className="letter main-letter"
                fill="#006cfc"
                d="M1.18,145.64C20.32,16,203.48-3.7,409.11,1,609,5.63,800,30.45,800,125.92c0,120.28-140.81,177.15-174.57,261.22-77.9,194-40.87,362.45-210.35,362.45S266,558.61,177.21,387.14C128.1,292.28-14.38,251.08,1.18,145.64Z"
              />

              <use href="#timelineText" fill="#006cfc" />
              <use
                href="#timelineText"
                fill="white"
                mask="url(#timelineMask)"
              />
            </svg>

            <h3 className="subtitle js-text-element">
              We take pride of our solid growth year after year.
            </h3>
          </div>
        </div>
      </div>

      <div className="affinity-timeline-wrapper">
        <svg id="svg" viewBox="0 0 900 200">
          <polyline points="" />
        </svg>
        <ul className="timeline-items">
          <li className="item">
            <div className="image">
              <figure className="block-bg-cover">
                <img
                  className="element-cover"
                  src="../uploads/2020/04/DSC_2689.jpg"
                  alt=""
                />
              </figure>
            </div>
            <span className="date">2012</span>
            <span className="point"></span>
            <ul>
              <li>
                <span className="label">Players</span>
                <span className="value">17</span>
              </li>
              <li>
                <span className="label">Partners</span>
                <span className="value">9</span>
              </li>
              <li>
                <span className="label">Revenue</span>
                <span className="value">80k€</span>
              </li>
              <li>
                <span className="label">New Office</span>
                <span className="value">Lisbon</span>
              </li>
            </ul>
          </li>
          <li className="item">
            <div className="image"></div>
            <span className="date">2013</span>
            <span className="point"></span>
            <ul>
              <li>
                <span className="label">Players</span>
                <span className="value">67</span>
              </li>
              <li>
                <span className="label">Partners</span>
                <span className="value">23</span>
              </li>
              <li>
                <span className="label">Revenue</span>
                <span className="value">1.5M€</span>
              </li>
            </ul>
          </li>
          <li className="item">
            <div className="image"></div>
            <span className="date">2014</span>
            <span className="point"></span>
            <ul>
              <li>
                <span className="label">Players</span>
                <span className="value">110</span>
              </li>
              <li>
                <span className="label">Partners</span>
                <span className="value">50</span>
              </li>
              <li>
                <span className="label">Revenue</span>
                <span className="value">3M€</span>
              </li>
            </ul>
          </li>
          <li className="item">
            <div className="image">
              <figure className="block-bg-cover">
                <img
                  className="element-cover"
                  src="../uploads/2020/03/tirar-fios-da-mesa-2.jpg"
                  alt=""
                />
              </figure>
            </div>
            <span className="date">2015</span>
            <span className="point"></span>
            <ul>
              <li>
                <span className="label">Players</span>
                <span className="value">160</span>
              </li>
              <li>
                <span className="label">Partners</span>
                <span className="value">80</span>
              </li>
              <li>
                <span className="label">Revenue</span>
                <span className="value">4.5M€</span>
              </li>
            </ul>
          </li>
          <li className="item">
            <div className="image">
              <figure className="block-bg-cover">
                <img
                  className="element-cover"
                  src="../uploads/2020/05/DSC_2218.jpg"
                  alt=""
                />
              </figure>
            </div>
            <span className="date">2016</span>
            <span className="point"></span>
            <ul>
              <li>
                <span className="label">Players</span>
                <span className="value">190</span>
              </li>
              <li>
                <span className="label">Partners</span>
                <span className="value">80</span>
              </li>
              <li>
                <span className="label">Revenue</span>
                <span className="value">5.1M€</span>
              </li>
              <li>
                <span className="label">New Office</span>
                <span className="value">Oporto</span>
              </li>
            </ul>
          </li>
          <li className="item">
            <div className="image"></div>
            <span className="date">2017</span>
            <span className="point"></span>
            <ul>
              <li>
                <span className="label">Players</span>
                <span className="value">210</span>
              </li>
              <li>
                <span className="label">Partners</span>
                <span className="value">90</span>
              </li>
              <li>
                <span className="label">Revenue</span>
                <span className="value">6.5M€</span>
              </li>
            </ul>
          </li>
          <li className="item">
            <div className="image"></div>
            <span className="date">2018</span>
            <span className="point"></span>
            <ul>
              <li>
                <span className="label">Players</span>
                <span className="value">280</span>
              </li>
              <li>
                <span className="label">Partners</span>
                <span className="value">100</span>
              </li>
              <li>
                <span className="label">Revenue</span>
                <span className="value">8.1M€</span>
              </li>
            </ul>
          </li>
          <li className="item">
            <div className="image">
              <figure className="block-bg-cover">
                <img
                  className="element-cover"
                  src="../uploads/2020/05/Tech-Hub-1.jpeg"
                  alt=""
                />
              </figure>
            </div>
            <span className="date">2019</span>
            <span className="point"></span>
            <ul>
              <li>
                <span className="label">Players</span>
                <span className="value">285</span>
              </li>
              <li>
                <span className="label">Partners</span>
                <span className="value">135</span>
              </li>
              <li>
                <span className="label">Revenue</span>
                <span className="value">11M€</span>
              </li>
              <li>
                <span className="label">New Tech Hub</span>
                <span className="value">Óbidos</span>
              </li>
            </ul>
          </li>
          <li className="item">
            <div className="image"></div>
            <span className="date">2020</span>
            <span className="point"></span>
            <ul>
              <li>
                <span className="label">Players</span>
                <span className="value">305</span>
              </li>
              <li>
                <span className="label">Partners</span>
                <span className="value">105</span>
              </li>
              <li>
                <span className="label">Revenue</span>
                <span className="value">11.5M€</span>
              </li>
            </ul>
          </li>
          <li className="item">
            <div className="image"></div>
            <span className="date">2021</span>
            <span className="point"></span>
            <ul>
              <li>
                <span className="label">Players</span>
                <span className="value">370</span>
              </li>
              <li>
                <span className="label">Partners</span>
                <span className="value">125</span>
              </li>
              <li>
                <span className="label">Revenue</span>
                <span className="value">14.5M€</span>
              </li>
            </ul>
          </li>
          <li className="item">
            <div className="image">
              <figure className="block-bg-cover">
                <img
                  className="element-cover"
                  src="../uploads/2023/01/7.png"
                  alt=""
                />
              </figure>
            </div>
            <span className="date">2022</span>
            <span className="point"></span>
            <ul>
              <li>
                <span className="label">Players</span>
                <span className="value">380</span>
              </li>
              <li>
                <span className="label">Partners</span>
                <span className="value">135</span>
              </li>
              <li>
                <span className="label">Revenue</span>
                <span className="value">16.5M€</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="timeline-helper">
        <svg viewBox="0 0 24.77 9.43">
          <path d="M20.35 9.08L24 5.48A1.07 1.07 0 0024 4L20.35.35M4.42 9.08L.81 5.48A1.09 1.09 0 01.81 4L4.42.35" />
        </svg>
        <span>
          Click
          <br />
          and drag
        </span>
        <span className="background"></span>
      </div>
    </section>
  );
}
export default Timeline;
