import React from "react";

function NewsEvents() {
  return (
    <section className="news-events container">
      <div className="rotate-title">
        <h4>Press, News & Events</h4>
      </div>
      <div className="row expanded">
        <div className="xxlarge-4 xxlarge-offset-3 medium-6 medium-offset-1 xsmall-14 columns meta-title-wrapper">
          <div
            className="morphing-letter"
            data-morphpath="M339.9,619.2c84,42.6,173.5,71.4,262.3,73.8c168.2,4.7,228.1-440.7,146.4-577.4 c-94-157.3-197.2,65.8-273.2,38c-79.8-29.2-223.9-142.1-344.5-64.7C8.5,167.6-20.2,630,153.4,674.8C255.1,701,262.5,580,339.9,619.2z"
          >
            <svg viewBox="0 0 800 750">
              <defs>
                <mask
                  id="newsMask"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="800"
                  height="750"
                >
                  <filter id="newsFilter" x="0" y="0">
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
                    d="M346.9,591c85.1,40.2,155.4,96.5,244.3,96.5c168.3,0,215.7-436.9,130.2-571.3 c-98.4-154.6-175.3,76.3-252,50.6c-80.6-27-217.8-150.8-336.2-70c-120.2,82-145.9,545,28.9,585C264.4,705.2,268.4,553.9,346.9,591z"
                  />
                </mask>

                <text
                  id="newsText"
                  x="660"
                  y="348"
                  fontSize="100"
                  letterSpacing="-4px"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  News & Events{" "}
                </text>
              </defs>

              <path
                className="letter shadow-letter"
                filter="url(#newsFilter)"
                fill="rgba(191, 0, 0, .5)"
                d="M346.9,591c85.1,40.2,155.4,96.5,244.3,96.5c168.3,0,215.7-436.9,130.2-571.3 c-98.4-154.6-175.3,76.3-252,50.6c-80.6-27-217.8-150.8-336.2-70c-120.2,82-145.9,545,28.9,585C264.4,705.2,268.4,553.9,346.9,591z"
              />
              <path
                className="letter main-letter"
                fill="#006cfc"
                d="M346.9,591c85.1,40.2,155.4,96.5,244.3,96.5c168.3,0,215.7-436.9,130.2-571.3 c-98.4-154.6-175.3,76.3-252,50.6c-80.6-27-217.8-150.8-336.2-70c-120.2,82-145.9,545,28.9,585C264.4,705.2,268.4,553.9,346.9,591z"
              />

              <use href="#newsText" fill="#006cfc" />
              <use href="#newsText" fill="white" mask="url(#newsMask)" />
            </svg>

            <h3 className="subtitle js-text-element">
              Updates and news from the Affinity World. We are always improving,
              growing and reinventing ourselves.
            </h3>
          </div>

          <a
            href="/News"
            className="view-all"
            data-remote="true"
            data-targetclass="noticias"
            data-ajaxurl="https://affinity.pt/en/ajax/noticias-ajax/?ajax-id=https://affinity.pt"
            data-title=""
          >
            View all{" "}
          </a>
        </div>
      </div>
      <div className="row expanded">
        <div className="xxlarge-10 xxlarge-offset-4 medium-12 medium-offset-2 small-14 small-offset-1 columns">
          <div className="row xxlarge-up-2 xsmall-up-1 news-list-wrapper">
            <div className="column news-link-wrapper">
              <a
                className="news-link"
                href="news/a-data-driven-world-in-discussion-in-our-upcoming-affinity-live-event/index.html"
                data-remote="true"
                data-targetclass="single-noticias"
                data-ajaxurl="https://affinity.pt/en/ajax/single-noticias-ajax/?ajax-id=https://affinity.pt"
                data-title=""
              >
                <div className="news-wrapper">
                  <div className="block-bg-cover">
                    <picture>
                      <img
                        className="element-cover"
                        src="./uploads/2023/08/MicrosoftTeams-image-40-1000x554.png"
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="block-wrapper">
                    <h3 className="post-time">
                      28 August, 2023 <span className="post-target">News </span>
                    </h3>
                    <h2>
                      ‘A Data Driven World’ in discussion in our upcoming
                      Affinity Live Event
                    </h2>
                    <button className="view-all">Read More</button>
                  </div>
                </div>
              </a>
            </div>
            <div className="column news-link-wrapper">
              <a
                className="news-link"
                href="news/affinity-supports-the-child-care-association-casa-de-apoio-a-crianca-de-guimaraes/index.html"
                data-remote="true"
                data-targetclass="single-noticias"
                data-ajaxurl="https://affinity.pt/en/ajax/single-noticias-ajax/?ajax-id=https://affinity.pt"
                data-title=""
              >
                <div className="news-wrapper">
                  <div className="block-bg-cover">
                    <picture>
                      <img
                        className="element-cover"
                        src="./uploads/2023/08/DSC_9747-1000x665.jpg"
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="block-wrapper">
                    <h3 className="post-time">
                      23 August, 2023{" "}
                      <span className="post-target">Highlights </span>
                    </h3>
                    <h2>
                      Affinity supports the child-care association ‘Casa de
                      Apoio à Criança de Guimarães’
                    </h2>
                    <button className="view-all">Read More</button>
                  </div>
                </div>
              </a>
            </div>
            <div className="column news-link-wrapper">
              <a
                className="news-link"
                href="news/blog-with-affinity-is-sharing-knowledge/index.html"
                data-remote="true"
                data-targetclass="single-noticias"
                data-ajaxurl="https://affinity.pt/en/ajax/single-noticias-ajax/?ajax-id=https://affinity.pt"
                data-title=""
              >
                <div className="news-wrapper">
                  <div className="block-bg-cover">
                    <picture>
                      <img
                        className="element-cover"
                        src="./uploads/2023/07/DSC_2337-1-1000x665.jpg"
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="block-wrapper">
                    <h3 className="post-time">
                      26 July, 2023{" "}
                      <span className="post-target">Highlights </span>
                    </h3>
                    <h2>Blog With Affinity, a space of sharing & knowledge</h2>
                    <button className="view-all">Read More</button>
                  </div>
                </div>
              </a>
            </div>
            <div className="column news-link-wrapper">
              <a
                className="news-link"
                href="news/achieved-the-goal-of-100k-followers-on-linkedin/index.html"
                data-remote="true"
                data-targetclass="single-noticias"
                data-ajaxurl="https://affinity.pt/en/ajax/single-noticias-ajax/?ajax-id=https://affinity.pt"
                data-title=""
              >
                <div className="news-wrapper">
                  <div className="block-bg-cover">
                    <picture>
                      <img
                        className="element-cover"
                        src="./uploads/2023/07/MicrosoftTeams-image-19-1000x523.png"
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="block-wrapper">
                    <h3 className="post-time">
                      17 July, 2023{" "}
                      <span className="post-target">Highlights </span>
                    </h3>
                    <h2>Achieved the goal of 100k followers on LinkedIn</h2>
                    <button className="view-all">Read More</button>
                  </div>
                </div>
              </a>
              <div className="plus-button-wrapper">
                <button
                  className="elastic-btn plus-button"
                  data-offset="4"
                  data-limit="2"
                >
                  <svg viewBox="0 0 74 70">
                    <path
                      className="morph-bg"
                      d="M.9 37.9C2.9 65 19.3 69 41.1 69 63 69 73.2 53.8 73.2 35S63 1 41.1 1C17.5 1-1.2 8.8.9 37.9z"
                      data-hover="M1.9 37.9C3.9 65 19.3 66 41.1 66 63 66 72.2 53.8 72.2 35S63 4 41.1 4C17.5 4-.2 8.8 1.9 37.9z"
                      data-original="M.9 37.9C2.9 65 19.3 69 41.1 69 63 69 73.2 53.8 73.2 35S63 1 41.1 1C17.5 1-1.2 8.8.9 37.9z"
                    ></path>
                    <path
                      className="morph-element"
                      d="M41.3 31.8c-.1-6.8-.7-7.5-3.5-7.5-3.4 0-4.1.7-4.3 7.5-7.8.1-7.8.9-7.8 4.2 0 2.9 1.2 3.5 7.8 3.6.2 6.5 1 6.9 4.2 6.9 2.9 0 3.5-.8 3.6-6.9 7.5-.1 8.1-.6 8.1-3.5.1-3.5-.3-4.2-8.1-4.3z"
                      data-click="M37.2 31.8c-11.4 0-11.5.5-11.5 4.2 0 3.5 1.7 3.6 12.4 3.6 10.5 0 11.3-.3 11.3-3.5.1-4-.4-4.3-12.2-4.3z"
                      data-original="M41.3 31.8c-.1-6.8-.7-7.5-3.5-7.5-3.4 0-4.1.7-4.3 7.5-7.8.1-7.8.9-7.8 4.2 0 2.9 1.2 3.5 7.8 3.6.2 6.5 1 6.9 4.2 6.9 2.9 0 3.5-.8 3.6-6.9 7.5-.1 8.1-.6 8.1-3.5.1-3.5-.3-4.2-8.1-4.3z"
                    ></path>
                  </svg>
                </button>
                <span>More News</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default NewsEvents;
