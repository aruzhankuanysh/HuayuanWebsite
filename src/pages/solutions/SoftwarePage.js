import Footer from "../../components/Footer";
import Header from "../../components/header";
import Navbar from "./Navbar";
import MorphPage from "../../components/MorphPage";

function SoftwarePage() {
  return (
    <>
      <body class="js-byrefresh js-no-ajax    en-lang">
        <div class="scroll-content-wrapper" data-scrollbar>
          <Header />

          {/* ============= CONTENT ============= */}
          <div class="page-main page-current">
            <div
              class="page-toload single-service-page software-page"
              data-bodyClass="single-service software"
            >
              <header class="page-header">
                <div class="background-wrapper">
                  <div class="webGL-main">
                    <div id="webGL-container"></div>
                  </div>
                  <div class="block-bg-cover">
                    <picture>
                      <source
                        srcset="/imgs/software/software-header-phone.jpg"
                        media="(max-width: 414px)"
                      />
                      <source
                        srcset="/imgs/software/software-header-small.jpg"
                        media="(max-width: 768px)"
                      />
                      <source
                        srcset="/imgs/software/software-header.webp"
                        type="image/webp"
                      />
                      <img
                        class="background-image element-cover"
                        src="../imgs/software/software-header.jpg"
                        alt=""
                      />
                    </picture>
                  </div>

                  <div class="title row expanded align-center align-middle">
                    <div class="xxlarge-16 columns text-center">
                      <h1>Software</h1>
                    </div>
                  </div>

                  <div class="letter-wrapper">
                    <picture>
                      <source
                        srcset="/imgs/alphabeth_3d/headerS_phone.png"
                        media="(max-width: 414px)"
                      />
                      <source
                        srcset="/imgs/alphabeth_3d/headerS.webp 1x, /imgs/alphabeth_3d/headerS@2x.webp 2x"
                        type="image/webp"
                      />
                      <source srcset="/imgs/alphabeth_3d/headerS.png 1x, /imgs/alphabeth_3d/headerS@2x.png 2x" />
                      <img
                        class="letter"
                        src="../imgs/alphabeth_3d/headerS.png"
                        alt=""
                      />
                    </picture>
                  </div>
                  <div class="image-wrapper">
                    <picture>
                      <source
                        srcset="/imgs/software/software-hands-new-phone.png"
                        media="(max-width: 414px)"
                      />
                      <img
                        class="hands show-mob"
                        src="../imgs/software/software-hands-new.png"
                        alt=""
                      />
                    </picture>
                  </div>
                </div>
                <div class="mouse-icon">
                  <span class="scroll-helper">Scroll</span>
                  <span class="wheel"></span>
                </div>
              </header>

              <main class="page-content" role="main">
                <div class="vertical-menu-wrapper">
                  <ul>
                    <li data-target="cases-studies">
                      Keywork <span class="container-height"></span>
                    </li>
                    <li data-target="why-portugal">
                      Why Software<span class="container-height"></span>
                    </li>
                    <li data-target="image-blocks">
                      We like it<span class="container-height"></span>
                    </li>
                  </ul>
                </div>
                {/*.vertical-menu-wrapper*/}

                <Navbar />

                <section class="introduction">
                  <div class="hero-text row text-center align-center small-collapse">
                    <div class="xxlarge-10 medium-12 small-14 columns">
                      <h3 class="js-bigText-element">
                        We develop smart and intuitive solutions tailored to the
                        needs of our clients. With experienced professionals and
                        agile methodologies, we efficiently overcome the
                        expectations of key companies worldwide. Ready to
                        Improve your Business Performance?
                      </h3>
                    </div>
                  </div>
                </section>

                <section class="image-blocks   js-height">
                  <div class="row expanded question-row">
                    <div class="question-wrapper xxlarge-7 xxlarge-offset-2 medium-6 medium-offset-1 small-8 xsmall-14 background-lightGray">
                      <h3>
                        <a href="http://www.key.work">Keywork</a> is a high
                        performing platform that enables agile Human Resources
                        Management.
                      </h3>
                      <h2>A better, faster, smarter solution.</h2>
                    </div>
                  </div>
                  <div class="row expanded image-wrapper">
                    <div class="xxlarge-13 xxlarge-offset-3 small-16 small-offset-0">
                      <picture>
                        <img
                          src="../../../uploads/2020/04/20170911_AFINITY-114-2.jpg"
                          alt=""
                        />
                      </picture>

                      <div class="offset-text row">
                        <div class="xxlarge-8 xxlarge-offset-8 medium-9 xsmall-14 xsmall-offset-0 columns">
                          <p class="js-text-element">
                            Intuitive, flexible and user-friendly experience to
                            increase productivity and boost your business.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row expanded answer-wrapper">
                    <div class="xxlarge-6 xxlarge-offset-8 medium-offset-9 small-8 small-offset-7 xsmall-14 xsmall-offset-1 answer-wrapper-text">
                      <h3>
                        Sourcing & screening, opportunities management, staffing
                        and monitoring done right. Our goal is to create
                        ever-evolving, long-lasting, sustainable systems.
                      </h3>
                    </div>
                  </div>
                </section>
                {/*image-blocks*/}

                <section class="why-portugal question-list  js-height">
                  <div class="row expanded">
                    <div class="xxlarge-5 xxlarge-offset-3 medium-offset-2 small-12 small-offset-1 xsmall-14 columns">
                      <h2 class="js-title-element">We guarantee</h2>
                      <p class="js-text-element">
                        Long-term win-win-win relationships, ensuring the best
                        experience for our customers and employees at all levels
                        of the process.
                      </p>
                    </div>
                    <div class="xxlarge-6 medium-offset-2 small-14 small-offset-1 columns reasons-list-wrapper">
                      <ul class="row xxlarge-up-3 xsmall-up-2">
                        <li class="column">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 174 166"
                          >
                            <path
                              d="M65.6 5.6C34.8 4.8 9.4 30.2 10.1 61.1c.7 28.5 24.5 51.5 53 51.2 8.6-.1 16.8-2.2 24-5.9 2.3-1.2 5-.6 6.7 1.3 13.3 15.4 32.4 44.5 37.4 48.8 7.6 6.9 18.7 3.3 25.1-3.2l1.7-1.7c6.4-6.4 10.1-17.5 3.2-25.1-4.3-4.9-33.3-24-48.8-37.3-1.9-1.7-2.5-4.5-1.3-6.7 3.7-7.2 5.8-15.4 5.9-24 .1-28.4-22.8-52.2-51.4-52.9z"
                              fill="none"
                              stroke="#06f"
                              stroke-width="7"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                            />
                          </svg>{" "}
                          <p>
                            Efficient talent
                            <br />
                            sourcing & screening
                          </p>
                        </li>
                        <li class="column">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 174 166"
                          >
                            <path
                              d="M127.5 41.1l9.7-2.5c4.6-1.2 9.4.8 11.7 5l4.2 7.4c2.3 4.1 1.6 9.3-1.8 12.6l-7.2 7c-2 1.9-3.1 4.6-3.1 7.4v11.7c0 2.8 1.1 5.5 3 7.4l7.1 7.2c3.3 3.4 4 8.6 1.6 12.7l-4.3 7.3c-2.4 4.1-7.3 6-11.8 4.8l-9.7-2.7c-2.7-.7-5.5-.4-8 1l-10.2 5.8c-2.4 1.4-4.2 3.6-4.9 6.3l-2.7 9.7c-1.3 4.6-5.4 7.7-10.2 7.7l-8.5-.1c-4.7 0-8.9-3.3-10-7.8l-2.5-9.7c-.7-2.7-2.4-5-4.8-6.4L55 127c-2.4-1.4-5.3-1.8-7.9-1.1l-9.7 2.5c-4.6 1.2-9.4-.8-11.7-5l-4.2-7.4c-2.3-4.1-1.6-9.3 1.8-12.6l7.2-7c2-1.9 3.1-4.6 3.1-7.4l.1-11.7c0-2.8-1.1-5.5-3-7.4l-7.1-7.2c-3.3-3.4-4-8.6-1.6-12.7l4.3-7.3c2.4-4.1 7.3-6 11.8-4.8l9.7 2.7c2.7.7 5.5.4 8-1L66 33.8c2.4-1.4 4.2-3.6 4.9-6.3l2.7-9.7c1.3-4.6 5.4-7.7 10.2-7.7l8.5.1c4.7 0 8.9 3.3 10 7.8l2.5 9.7c.7 2.7 2.4 5 4.8 6.4l10.1 5.9c2.3 1.4 5.2 1.8 7.8 1.1z"
                              fill="none"
                              stroke="#06f"
                              stroke-width="7"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                            />
                          </svg>{" "}
                          <p>
                            Agile management <br />
                            of business opportunities
                          </p>
                        </li>
                        <li class="column">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 174 166"
                          >
                            <path
                              d="M39.4 73C51 58.7 58.7 49 61.7 23.9 64.5.6 92-.8 94.4 21.5c2.3 21.1-2.5 38.7-2.5 38.7s13.4-1 29.4-2.4c48.9-4.1 47.1 86.4-11.9 97.7C50.3 167 3.1 117.7 39.4 73z"
                              fill="none"
                              stroke="#06f"
                              stroke-width="7"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                            />
                          </svg>{" "}
                          <p>
                            Smart and intuitive tools <br />
                            for an attractive navigation
                          </p>
                        </li>
                        <li class="column">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 174 166"
                          >
                            <path
                              d="M87.4 151.6H77.1c-6.4-.2-9.6-.5-11.7-3.9-3.2-5.3 1.9-16.4 2.5-19.1.6-3-.5-4.8-3.9-4.8-8.1 0-31.8-1.1-37.4-2.3s-10.2-3.6-13.4-7.9c-2.6-3.4-4.3-7.3-5-11.7-.3-2-.6-4-.7-6-.3-24.4-.3-34.3 1.3-58.6.6-9.1 6.5-18.2 15.7-20.5 2-.6 4.2-.9 6.2-1C50 14.6 68.1 14.1 87.4 14c19.3 0 37.4.5 56.6 1.7 2.1.1 4.2.4 6.2 1 9.2 2.3 15.1 11.4 15.7 20.5 1.6 24.3 1.6 34.2 1.4 58.6-.1 2-.4 4-.7 6-.7 4.4-2.4 8.3-5 11.7-3.3 4.3-7.8 6.8-13.4 7.9-5.6 1.1-29.3 2.2-37.4 2.3-3.5 0-4.5 1.9-3.9 4.8.5 2.7 5.7 13.7 2.5 19.1-2.1 3.4-5.3 3.7-11.7 3.9-3.1.1-7 .1-10.3.1z"
                              fill="none"
                              stroke="#06f"
                              stroke-width="7"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                            />
                          </svg>{" "}
                          <p>
                            Easy reporting and <br />
                            KPI monitoring
                          </p>
                        </li>
                        <li class="column">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 174 166"
                          >
                            <path
                              d="M148.3 121.1c-1.6-19.1-12.9-34.3-31.1-42.2-3.7-1.6-4.5-6.6-1.4-9.2 5.5-4.6 9-12.1 9.9-24.2 2.2-29.1-15-41-38.7-40.9-23.6 0-40.8 11.8-38.7 40.9.9 12.2 4.4 19.7 9.9 24.2 3.1 2.6 2.3 7.6-1.4 9.2-18.1 7.8-29.5 23-31.1 42.2-2.5 30.6 10.3 40.4 61.3 40.3 51 .1 63.8-9.7 61.3-40.3z"
                              fill="none"
                              stroke="#06f"
                              stroke-width="7"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                            />
                          </svg>{" "}
                          <p>
                            Teamwork and <br />
                            increased productivity
                          </p>
                        </li>
                        <li class="column">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 174 166"
                          >
                            <path
                              d="M100.7 158.9c8.5 0 15.4-6.6 15.4-15.4 0-35.7 33.2-32 33.2-74.1C149.3 35 121.4 7.1 87 7.1S24.7 35 24.7 69.4c0 42.1 33.2 38.4 33.2 74.1 0 8.7 6.9 15.4 15.4 15.4h27.4z"
                              fill="none"
                              stroke="#06f"
                              stroke-width="7"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                            />
                          </svg>{" "}
                          <p>
                            Adaptability to any <br />
                            business type or field
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                {/*why-portugal*/}

                <section class="cases-studies js-height ">
                  <div class="row expanded">
                    <div class="xxlarge-4 xxlarge-offset-3 medium-6 medium-offset-1 xsmall-14 columns meta-title-wrapper">
                      <div
                        class="morphing-letter"
                        data-morphPath="M687.4,373.7c167.7,147.4,15.8,313.9-190.2,327.1C291.2,714,64.4,574.5,53,397.5 C39.3,184.2,247.7,35.9,454.1,30c132.9-3.8,203.1,85.1,221.4,130.4C716,260.3,644.9,336.3,687.4,373.7z"
                      >
                        <svg viewBox="0 0 800 750">
                          <defs>
                            <mask
                              id="contactMask"
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="800"
                              height="750"
                            >
                              <filter id="contactFilter" x="0" y="0">
                                <feGaussianBlur
                                  in="SourceGraphic"
                                  stdDeviation="10"
                                />
                                <feOffset dx="10" dy="20" />
                                <feMerge>
                                  <feMergeNode />
                                  <feMergeNode in="SourceGraphic" />
                                </feMerge>
                              </filter>
                              <path
                                class="mask"
                                fill="white"
                                d="M666.6,392c158,157.8-4.3,304.3-210.8,304.3S82,552.5,82,375.2C82,161.4,249.5,46.7,455.8,54.1 c132.9,4.7,197.2,78,212.6,124.4C702.4,280.8,596.4,321.9,666.6,392z"
                              />
                            </mask>

                            <text
                              id="contactText"
                              x="475"
                              y="348"
                              font-size="100"
                              letter-spacing="-4px"
                              font-weight="bold"
                              text-anchor="middle"
                            >
                              Keywork
                            </text>
                          </defs>

                          <path
                            class="letter shadow-letter"
                            filter="url(#contactFilter)"
                            fill="rgba(191, 0, 0, .5)"
                            d="M666.6,392c158,157.8-4.3,304.3-210.8,304.3S82,552.5,82,375.2C82,161.4,249.5,46.7,455.8,54.1 c132.9,4.7,197.2,78,212.6,124.4C702.4,280.8,596.4,321.9,666.6,392z"
                          />
                          <path
                            class="letter main-letter"
                            fill="#006cfc"
                            d="M666.6,392c158,157.8-4.3,304.3-210.8,304.3S82,552.5,82,375.2C82,161.4,249.5,46.7,455.8,54.1 c132.9,4.7,197.2,78,212.6,124.4C702.4,280.8,596.4,321.9,666.6,392z"
                          />

                          <use href="#contactText" fill="#006cfc" />
                          <use
                            href="#contactText"
                            fill="white"
                            mask="url(#contactMask)"
                          />
                        </svg>

                        <h3 class="subtitle js-text-element">
                          Keywork is an All-in-One Talent Management Platform
                          that simplifies and foster processes ensuring great
                          team and business performance.{" "}
                        </h3>
                      </div>

                      {/* <h2 class="title">Cases Studies</h2>
              <h3 class="subtitle js-text-element">Equipa são todos os que vestem a camisola e também os que nos ajudam a querer mantê-la.</h3> */}
                    </div>
                    <div class="xxlarge-16 columns">
                      <div class="case-slider-wrapper">
                        <div class="next-prev-slider-helper row expanded collapse align-middle">
                          <div
                            class="prev-slide slider-helper xxlarge-2 small-14 columns"
                            data-id="-1"
                          >
                            <div class="slide-handler-wrapper">
                              <div class="slide-handler-content">
                                <span>Previous Case Study</span>
                                <h3></h3>
                              </div>

                              <div class="clip-case-image block-bg-cover">
                                <img
                                  class="element-cover"
                                  src="../imgs/home/metro-station.jpg"
                                  alt=""
                                />
                              </div>

                              <svg viewBox="0 0 180 191" class="clip-svg">
                                <defs>
                                  <clipPath id="prev-case-clip">
                                    <path
                                      fill="#006CFF"
                                      d="M77.674 145.632c19.767 9.338 36.083 22.387 56.704 22.387 39.056 0 50.062-101.385 30.219-132.57-22.834-35.881-40.686 17.705-58.498 11.74-18.714-6.265-50.554-35.004-78.041-16.251C.156 49.973-5.799 157.422 34.76 166.689c23.763 5.431 24.693-29.664 42.914-21.057z"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <div
                            class="next-slide slider-helper xxlarge-2 columns xxlarge-offset-12"
                            data-id="1"
                          >
                            <div class="slide-handler-wrapper">
                              <div class="slide-handler-content">
                                <span>Next Case Study</span>
                                <h3></h3>
                              </div>

                              <div class="clip-case-image block-bg-cover">
                                <img
                                  class="element-cover"
                                  src="../imgs/home/metro-station.jpg"
                                  alt=""
                                />
                              </div>

                              <svg viewBox="0 0 180 191" class="clip-svg">
                                <defs>
                                  <clipPath id="next-case-clip">
                                    <path
                                      fill="#006CFF"
                                      d="M146.78 82.323c10.574 21.13 25.353 38.572 25.353 60.614 0 41.75-114.827 53.517-150.146 32.304-40.638-24.408 20.053-43.492 13.298-62.533C28.188 92.705-4.36 58.669 16.878 29.286 38.438-.54 160.131-6.907 170.628 36.451c6.15 25.401-33.597 26.395-23.848 45.872z"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <ul class="case-slider">
                          <li class="active" data-id="0" data-slug="n-a">
                            <div class="row expanded align-middle">
                              <div class="xxlarge-9 xxlarge-offset-3 medium-12 medium-offset-2 small-14 small-offset-1 columns">
                                <div class="case-study-container">
                                  <div class="case-study-image">
                                    <svg
                                      class="case-letter"
                                      viewBox="0 0 713 689"
                                    >
                                      <path
                                        fill="#006CFF"
                                        stroke="#006CFF"
                                        stroke-width="43"
                                        stroke-miterlimit="10"
                                        d="M616.138,277.301 c-27.726,85.28,128.196,120.557,43.869,279.919c-51.173,96.707-175.748,105.261-271.62,105.261 c-198.095,0-358.683-20.332-358.683-315.48c0-295.147,160.588-315.48,358.683-315.48C586.481,31.52,672.393,104.267,616.138,277.301 z"
                                      />
                                    </svg>
                                    <div class="block-bg-cover">
                                      <picture>
                                        <img
                                          class="element-cover"
                                          src="../../../uploads/2018/01/keywork-intro-7.png"
                                          alt=""
                                        />
                                      </picture>

                                      <svg
                                        class="case-background-morph"
                                        viewBox="0 0 3000 3000"
                                        preserveAspectRatio="xMidYMin slice"
                                      >
                                        <path
                                          class="letter-morph"
                                          fill="#006CFF"
                                          d="M7194.102,2377.678 c0,0,227.955,1001.8-707.857,1073.785c-935.812,71.986-1445.711-395.921-1913.618-395.921s-1757.647,527.895-1847.63-191.962 c-89.982-719.855,419.914-1097.781,389.921-1631.674S2365.07-393.771,3444.854-483.751 c1079.781-89.98,1301.738,359.929,2177.562,203.96C6498.241-435.76,7062.129-639.594,7176.105-36.777 S6978.145,1483.856,7194.102,2377.678z"
                                        />
                                        <path
                                          class="background-rect"
                                          fill="#006CFF"
                                          d="M-662.206,585.545 c0,0-227.954-1001.799,707.858-1073.785S1491.363-92.319,1959.271-92.319S3716.918-620.214,3806.9,99.642 s-419.914,1097.782-389.921,1631.674s749.847,1625.677-329.936,1715.657s-1301.739-359.929-2177.564-203.96 S-530.233,3602.816-644.209,3000S-446.249,1479.366-662.206,585.545z"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <div class="case-study-info">
                                    <span class="case-subject">ESM</span>
                                    <h2 class="case-title"></h2>
                                    <p class="case-text">
                                      Discover Keywork, an Enterprise Sourcing
                                      Management tool that provides a digital...{" "}
                                    </p>
                                    <button class="view-all">
                                      Discover More
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <ul class="case-studies-lightbox-content">
                    <li class="case-item" data-id="0" data-slug="n-a">
                      <ul class="slider">
                        <li class="slide">
                          <div class="block-bg-cover">
                            <picture>
                              <img
                                class="element-cover"
                                src="../../../uploads/2018/01/keywork-intro-7.png"
                                alt=""
                              />
                            </picture>
                          </div>
                        </li>
                        <li class="slide">
                          <div class="block-bg-cover">
                            <picture>
                              <img
                                class="element-cover"
                                src="../../../uploads/2018/07/mockup@2x-1.png"
                                alt=""
                              />
                            </picture>
                          </div>
                        </li>
                      </ul>
                      <div class="case-info-container" data-scrollBar>
                        <img
                          class="case-logo"
                          src="../../../uploads/2018/01/keywork-logo.png"
                          alt="Case logo"
                        />

                        <div class="case-info">
                          <div class="case-info-wrapper">
                            <span class="case-subject">ESM</span>
                            <h2 class="case-title"></h2>
                            <h3>
                              How to create a software for recruitment in the
                              digital era?
                            </h3>
                            <p>
                              The starting point for recruiting in large
                              companies is ATS solutions. ATS platforms reduce
                              the time spent in routine, manual and inefficient
                              processes allowing professionals to be able to
                              dedicate themselves more to the human aspects of
                              recruitment.
                            </p>
                            <p>
                              The ATS demised extensive Excel
                              &#8220;databases&#8221;, e-mails with heavy
                              attachments, and possible communication losses
                              during the processes. These tools guarantee
                              centralized detailed information, accessible from
                              everyone, anywhere, and updated in real-time.
                            </p>
                            <p>
                              However, in an increasingly dynamic and
                              ever-changing world, companies are commonly
                              overwhelmed with a large volume of routine
                              recruitment tasks that would be better off
                              automatized. The next step is to apply AI over
                              ATS.
                            </p>
                            <p>
                              In short, accelerating business recruitment
                              through automated processes will reduce
                              time-to-hire, which in turn will reduce the
                              likelihood of losing talents to the competition.
                            </p>
                            <p>&nbsp;</p>
                            <h3>
                              How does Affinity make sense to the word
                              disruptive?
                            </h3>
                            <p>
                              Keywork emerged from Affinity&#8217;s internal
                              need to improve its human resources management
                              processes. There were already several competent
                              ATS platforms in the market, but none that
                              completely fulfilled Affinity’s growing
                              necessities. Keywork’s features go much far and
                              beyond a regular ATS.
                            </p>
                            <p>
                              Keywork is an ESM Enterprise Sourcing Management
                              Tool that ensures increased efficiency and better
                              articulation of all phases of human resources
                              management, from the first stage of recruitment,
                              to employee career monitoring and development
                              processes.
                            </p>
                            <p>
                              Discover everything in{" "}
                              <a href="http://www.key.work">www.key.work</a> or
                              get in contact with us at keywork@affinity.pt
                            </p>
                          </div>
                        </div>
                      </div>

                      <p class="case-text">
                        {" "}
                        Discover Keywork, an Enterprise Sourcing Management tool
                        that provides a digital transformation for companies
                        with extensive recruitment needs.
                      </p>
                      <button class="view-all">Discover More</button>

                      <div class="morph-letter"></div>
                    </li>
                  </ul>
                </section>
                {/*cases-studies*/}

                <section class="company-numbers">
                  <div class="row expanded align-center">
                    <div class="xxlarge-16 xlarge-14 text-center">
                      <h2 class="title js-write-text">#development</h2>
                    </div>
                    <div class="xxlarge-5 medium-5 small-14 text-center">
                      <div class="number-container">
                        <h2 class="statistics">12</h2>
                        <span class="statistic-title">Clients</span>
                      </div>
                    </div>
                    <div class="xxlarge-5 medium-5 small-14 text-center">
                      <div class="number-container">
                        <h2 class="statistics">400</h2>
                        <span class="statistic-title">Users</span>
                      </div>
                    </div>
                    <div class="xxlarge-5 medium-5 small-14 text-center">
                      <div class="number-container">
                        <h2 class="statistics">5</h2>
                        <span class="statistic-title">Countries</span>
                      </div>
                    </div>
                  </div>
                </section>
                {/* company-numbers */}

                <footer class="page-footer type-1">
                  <div class="row expanded align-center align-middle text-center content-wrapper">
                    <div class="xxlarge-16 columns text-center">
                      <h5>#seewhatsnext</h5>
                      <h2>Nearshore</h2>
                      <div class="alphabeth-wrapper">
                        <picture>
                          <source
                            srcset="/imgs/alphabeth_3d/footerN.webp 1x, /imgs/alphabeth_3d/footerN@2x.webp 2x"
                            type="image/webp"
                          />
                          <source srcset="/imgs/alphabeth_3d/footerN.png 1x, /imgs/alphabeth_3d/footerN@2x.png 2x" />
                          <img
                            class="alphabeth-image"
                            src="../imgs/alphabeth_3d/footerN.png"
                            alt=""
                          />
                        </picture>

                        <picture>
                          <source
                            srcset="/imgs/alphabeth_3d/footerN_shadow.webp 1x, /imgs/alphabeth_3d/footerN_shadow@2x.webp 2x"
                            type="image/webp"
                          />
                          <source srcset="/imgs/alphabeth_3d/footerN_shadow.png 1x, /imgs/alphabeth_3d/footerN_shadow@2x.png 2x" />
                          <img
                            class="alphabeth-shadow"
                            src="../imgs/alphabeth_3d/footerN_shadow.png"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div class="image-wrapper">
                        <picture>
                          <source
                            srcset="/imgs/nearshoring/nearshoring-owl.webp"
                            type="image/webp"
                          />
                          <img
                            class="image owl"
                            src="../imgs/nearshoring/nearshoring-owl.png"
                            alt=""
                          />
                        </picture>
                      </div>

                      <div class="row expanded align-center text-center btn-wrapper">
                        <a
                          href="../nearshore/index.html"
                          data-remote="true"
                          data-targetClass="single-service"
                          data-title="Nearshore"
                          class="btn elastic-btn"
                        >
                          <svg viewBox="0 0 196 66">
                            <path
                              class="morph-bg"
                              d="M1.3 35.8c2 25.9 17.7 29.7 38.6 29.7h124.5C185.3 65.4 195 50.8 195 33S185.2.6 164.4.5H39.9C17.2.5-.7 8 1.3 35.8z"
                              data-hover="M3.3 35.8c2 25.9 15.6 25.7 36.6 25.7h124.5C185.3 61.4 193 50.8 193 33s-8-28.5-28.7-28.5H39.8C17.1 4.5 1.3 8 3.3 35.8z"
                            />
                          </svg>
                          <span class="text">Get to know</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <Footer />
                </footer>

                {/* preload  */}
                <div class="preload" aria-hidden="true">
                  <img
                    src="../imgs/software/software-header.jpg"
                    alt=""
                  />
                  <img
                    src="../imgs/alphabeth_3d/headerS.png"
                    alt=""
                  />
                  <img
                    src="../imgs/software/software-hands-new.png"
                    alt=""
                  />
                </div>
              </main>
            </div>
          </div>

          <MorphPage />
        </div>
        {/*scroll-content-wrapper*/}

        <div
          class="bg-transition-new"
          data-phrases='[{"phrase":"We are united by Affinity."},{"phrase":"We grow pure Affinity."},{"phrase":"Great technology is always based on optimal relationships."},{"phrase":"We believe feedback loops to great things."},{"phrase":"Learning is a precondition."},{"phrase":"Affinity means cutting distance."}]'
        >
          <svg
            class="main-transition"
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

          <div class="row align-middle align-center">
            <div class="xxlarge-16 text-center">
              <h2 class="hashtag-title">#alifetimeexperience</h2>
            </div>
          </div>
        </div>
        {/*Loading Blob */}
        {/* <div class="loading-blob">
  <svg viewBox="0 0 62 58">
    <path d="M0,32.45C0,14.12,3.5,3.12,23.17.45c23.33-2.33,38.33,4,38.67,26.17C61.67,50,51,58.12,31.33,58.12S0,48,0,32.45Z" data-morph="M6.44,24.66C25.78,14,.44,3,20.11.32c23.33-2.33,53.76,17,34,26.5C28.44,39.16,47.94,58,28.28,58S-7.13,32.15,6.44,24.66Z"></path>
  </svg>
</div> */}

        {/* MODAL */}
        <div id="modal-bg"></div>
        <div id="modal-wrapper">
          {" "}
          <div id="modal-content" class="row align-middle align-center"></div>
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
          <p class="last">
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

export default SoftwarePage;
