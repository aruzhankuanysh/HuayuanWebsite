import "./App.css";
import Brochure from "./components/app/Brochure";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <body className="js-byrefresh js-no-ajax en-lang">
        <div className="home-fullvideos-container">
          <div className="block-bg-cover full-video">
            <video className="element-cover">
              <source src="App.js" type="video/mp4" />
            </video>
          </div>
          <button className="elastic-btn">
            <svg viewBox="0 0 74 70">
              <path className="morph-bg"
                d="M.9 37.9C2.9 65 19.3 69 41.1 69 63 69 73.2 53.8 73.2 35S63 1 41.1 1C17.5 1-1.2 8.8.9 37.9z"
                data-hover="M1.9 37.9C3.9 65 19.3 66 41.1 66 63 66 72.2 53.8 72.2 35S63 4 41.1 4C17.5 4-.2 8.8 1.9 37.9z"
                data-original="M.9 37.9C2.9 65 19.3 69 41.1 69 63 69 73.2 53.8 73.2 35S63 1 41.1 1C17.5 1-1.2 8.8.9 37.9z">
              </path>
              <path className="morph-element"
                d="M41.3 31.8c-.1-6.8-.7-7.5-3.5-7.5-3.4 0-4.1.7-4.3 7.5-7.8.1-7.8.9-7.8 4.2 0 2.9 1.2 3.5 7.8 3.6.2 6.5 1 6.9 4.2 6.9 2.9 0 3.5-.8 3.6-6.9 7.5-.1 8.1-.6 8.1-3.5.1-3.5-.3-4.2-8.1-4.3z"
                data-click="M37.2 31.8c-11.4 0-11.5.5-11.5 4.2 0 3.5 1.7 3.6 12.4 3.6 10.5 0 11.3-.3 11.3-3.5.1-4-.4-4.3-12.2-4.3z"
                data-original="M41.3 31.8c-.1-6.8-.7-7.5-3.5-7.5-3.4 0-4.1.7-4.3 7.5-7.8.1-7.8.9-7.8 4.2 0 2.9 1.2 3.5 7.8 3.6.2 6.5 1 6.9 4.2 6.9 2.9 0 3.5-.8 3.6-6.9 7.5-.1 8.1-.6 8.1-3.5.1-3.5-.3-4.2-8.1-4.3z">
              </path>
            </svg>
          </button>
        </div>

        <div className="scroll-content-wrapper" data-scrollbar>
          <Header />
          {/* ============= CONTENT =============  */}
          <div className="page-main page-current">
            <div
              className="page-toload home-page"
              data-bodyclass="home"
            >
              <header className="page-header">
                <h1 style={{ pointerEvents: "none", position: "absolute" }}>
                  Affinity - Nearshore | IT Consulting | Software Development
                </h1>

                <div className="background-wrapper">
                  <div className="video-event-container">
                    <div className="video-block block-bg-cover people-teaser">
                      <video muted loop autoPlay playsInline className="element-cover" poster="App.js">
                        <source src="/video/people-teaser.mp4" type="video/mp4"/>
                      </video>
                    </div>
                    <div className="video-block block-bg-cover business-teaser">
                      <video muted loop playsInline className="element-cover" poster="App.js">
                        <source src="/video/business-teaser.mp4" type="video/mp4"/>
                      </video>
                    </div>
                    <div className="video-event-split active people" data-id="people" >
                      <span>People</span>
                      <svg viewBox="0 0 175 175">
                        <path className="line" d="M87 1c47.497 0 86 38.504 86 86s-38.503 86-86 86S1 134.496 1 87 39.503 1 87 1z"/>
                        <path d="M72 64.588c1.656-1.632 3.462-2.077 5.118-.446l35.616 20.469c1.656 1.631 1.656 4.277 0 5.906l-35.616 20.471c-1.656 1.631-3.462 1.185-5.118-.446V64.588z" />
                      </svg>
                    </div>
                    <div className="video-event-split business" data-id="business">
                      <span>Business</span>
                      <svg viewBox="0 0 175 175">
                        <path className="line" d="M87 1c47.497 0 86 38.504 86 86s-38.503 86-86 86S1 134.496 1 87 39.503 1 87 1z"/>
                        <path d="M72 64.588c1.656-1.632 3.462-2.077 5.118-.446l35.616 20.469c1.656 1.631 1.656 4.277 0 5.906l-35.616 20.471c-1.656 1.631-3.462 1.185-5.118-.446V64.588z" />
                      </svg>
                    </div>
                    <svg viewBox="0 0 201 188" className="hands">
                      <path d="M200.997 59.679c0-15.941-6.201-30.93-17.458-42.202C172.282 6.206 157.316-.002 141.395-.002c-15.241 0-29.599 5.7-40.673 16.075C89.691 5.901 75.472.321 60.388.321c-15.922 0-30.89 6.208-42.149 17.48-23.24 23.267-23.238 61.132 0 84.403l15.177 15.199c-1.516 2.243-2.334 4.887-2.334 7.649 0 3.655 1.419 7.09 4.002 9.671 2.578 2.584 6.007 4.007 9.659 4.007 1.063 0 2.102-.132 3.111-.369-.235 1.012-.369 2.051-.369 3.115 0 3.654 1.422 7.087 4.004 9.669 2.577 2.586 6.008 4.009 9.657 4.009 1.069 0 2.11-.136 3.123-.375-1.035 4.456.164 9.326 3.622 12.794 2.58 2.58 6.009 4.005 9.661 4.005 1.063 0 2.106-.138 3.117-.377-1.035 4.452.164 9.324 3.625 12.787 2.579 2.583 6.008 4.006 9.661 4.006 2.853 0 5.57-.878 7.852-2.495 2.21 1.461 4.797 2.246 7.505 2.246 3.654 0 7.083-1.419 9.663-4.001 2.983-2.99 4.296-7.029 3.936-10.939 1.722.773 3.609 1.172 5.553 1.172 3.648 0 7.085-1.423 9.662-4.004 3.453-3.458 4.664-8.318 3.641-12.766 1.005.23 2.044.352 3.099.352 3.643 0 7.077-1.425 9.661-4.004 2.579-2.584 4-6.022 4-9.674 0-1.926-.392-3.79-1.141-5.498 3.968.337 7.975-1.09 10.844-3.956 2.579-2.588 4-6.022 4-9.674 0-3.146-1.057-6.131-2.999-8.547l14.312-14.329c11.253-11.269 17.454-26.255 17.454-42.198zM50.883 131.208c-.641.637-1.378 1.126-2.158 1.535-1.22.64-2.571 1.014-3.988 1.014-2.323 0-4.503-.904-6.142-2.547-1.642-1.642-2.547-3.827-2.547-6.152 0-1.421.375-2.774 1.013-3.996.407-.783.893-1.516 1.534-2.154l1.671-1.675 13.367-13.385c1.64-1.644 3.822-2.548 6.142-2.548 2.32 0 4.504.904 6.146 2.548 3.389 3.391 3.389 8.911.004 12.305l-13.371 13.388-1.671 1.667zm16.403 16.421c-.638.642-1.379 1.131-2.162 1.542-1.221.631-2.566 1.008-3.986 1.008-2.322 0-4.504-.904-6.141-2.548-2.743-2.743-3.226-6.867-1.534-10.144.398-.776.883-1.517 1.534-2.164l1.667-1.668 18.752-18.776c1.639-1.642 3.823-2.548 6.146-2.548 2.32 0 4.502.906 6.142 2.548 1.641 1.642 2.544 3.826 2.544 6.15 0 2.324-.905 4.511-2.544 6.153l-18.752 18.776-1.666 1.671zm16.404 16.425c-.643.643-1.384 1.134-2.168 1.543-1.221.637-2.565 1.01-3.978 1.01-2.322 0-4.504-.904-6.146-2.547-2.739-2.74-3.221-6.86-1.533-10.141.398-.776.884-1.519 1.533-2.166l1.668-1.67 12.285-12.297 4.164-4.169.737-.736c1.64-1.643 3.824-2.548 6.142-2.548 2.322 0 4.504.905 6.142 2.548 3.387 3.395 3.387 8.918.004 12.307l-.739.729-4.164 4.17-12.286 12.307-1.661 1.66zm18.059 14.76l-1.66 1.662c-.642.641-1.385 1.134-2.168 1.545-1.219.628-2.562 1.002-3.973 1.002-2.327 0-4.505-.908-6.146-2.547-2.739-2.743-3.225-6.858-1.538-10.133.399-.779.885-1.527 1.538-2.172l1.661-1.665 12.288-12.3.266-.267c1.447-1.455 3.321-2.284 5.333-2.469.275-.029.537-.078.807-.078 2.322 0 4.506.904 6.148 2.547 1.9 1.901 2.692 4.468 2.46 6.961-.178 1.951-.971 3.857-2.46 5.345l-.266.268-12.29 12.301zm13.703 1.417c-1.638 1.642-3.82 2.544-6.146 2.544-1.283 0-2.518-.299-3.645-.83l11.503-11.518c1.481 3.214.932 7.152-1.712 9.804zm49.259-49.323c-1.644 1.64-3.824 2.548-6.144 2.548-2.322 0-4.504-.906-6.142-2.548L119.39 97.837c-.969-.973-2.545-.974-3.512-.005l-.598.596c-.469.465-.731 1.098-.731 1.761 0 .661.262 1.294.727 1.763l35.734 35.776c1.641 1.643 2.544 3.83 2.544 6.153 0 2.323-.903 4.512-2.544 6.151-1.642 1.642-3.822 2.548-6.144 2.548-2.32 0-4.502-.906-6.14-2.548l-35.742-36.417c-.466-.467-1.099-1.371-1.759-1.371h-.005c-.658 0-1.293.908-1.757 1.379l-.595.92c-.965.972-.963 2.708.004 3.676l35.732 35.858c3.384 3.388 3.384 8.952 0 12.345-1.639 1.64-3.823 2.564-6.144 2.564-2.322 0-4.5-.896-6.138-2.539l-1.431-1.432c1.88-4.888.867-10.654-3.069-14.597-2.582-2.586-6.014-4.007-9.663-4.007-.092 0-.186.014-.28.018 3.401-5.296 2.794-12.442-1.826-17.075-2.578-2.582-6.008-4.005-9.657-4.005-.651 0-1.295.06-1.932.15.492-1.421.761-2.921.761-4.47 0-3.652-1.424-7.089-4.002-9.669-2.581-2.583-6.01-4.008-9.659-4.008-2.973 0-5.794.96-8.132 2.706.014-3.525-1.313-7.052-3.992-9.734-2.582-2.582-6.012-4.005-9.661-4.005-3.647 0-7.081 1.423-9.659 4.005l-13.367 13.381-14.998-15.023C.448 77.353.448 42.647 21.749 21.321 32.071 10.989 45.79 5.298 60.381 5.298c13.738 0 26.692 5.057 36.776 14.271L52.522 64.265c-5.327 5.333-5.345 13.994-.04 19.304l2.366 2.367c2.549 2.552 5.962 3.957 9.612 3.957 3.649 0 7.08-1.423 9.657-4.005l28.961-28.993 61.633 61.711c1.639 1.641 2.544 3.825 2.544 6.149.002 2.322-.905 4.513-2.544 6.153zm1.295-18.512l-60.972-60.983c-.286-.283-.625-.459-.979-.578-.252-.084-.514-.152-.781-.152-.632 0-1.271.245-1.755.727l-1.958 1.963-28.96 28.996c-1.639 1.641-3.819 2.547-6.141 2.547-2.357 0-4.463-.864-6.096-2.499l-2.365-2.368c-3.367-3.369-3.347-8.87.042-12.265l42.249-42.31 4.474-4.478c.158-.163.328-.312.49-.471 10.266-10.028 23.773-15.552 38.141-15.552 14.592 0 28.317 5.69 38.63 16.023 10.322 10.333 16.004 24.069 16.004 38.681 0 14.612-5.682 28.348-16.004 38.681l-14.019 14.038z" />
                    </svg>
                  </div>

                  <div className="social-wrapper">
                    <h5>Follow Affinity</h5>
                    <ul className="social-links">
                      <li className="linkedin">
                        <a
                          href="https://www.linkedin.com/company/2701281/"
                          rel="external"
                        >
                          <svg viewBox="0 0 46 34">
                            <path d="M14.7 32H8.5V12h6.2v20zM11.6 9.2C9.6 9.2 8 7.6 8 5.6S9.6 2 11.6 2s3.6 1.6 3.6 3.6-1.6 3.6-3.6 3.6zM38 32h-6.2v-9.7c0-2.3 0-5.3-3.2-5.3s-3.7 2.5-3.7 5.1V32h-6.2V12h6v2.7h.1c.8-1.6 2.9-3.2 5.9-3.2 6.3 0 7.5 4.1 7.5 9.5v11z" />
                          </svg>
                        </a>
                      </li>
                      <li className="facebook">
                        <a
                          href="https://www.facebook.com/affinity.portugal/"
                          rel="external"
                        >
                          <svg viewBox="0 0 46 34">
                            <path d="M25.6 33h-7.1V19H15v-6.2h3.5V9.1c0-5.1 2-8.1 7.7-8.1H31v6.2h-3c-2.2 0-2.4.9-2.4 2.5v3.1H31l-.6 6.2h-4.7v14z" />
                          </svg>
                        </a>
                      </li>
                      <li className="twitter">
                        <a
                          href="https://twitter.com/WithAffinity"
                          rel="external"
                        >
                          <svg viewBox="0 0 200 162.54">
                            <path d="M200,19.24a82.12,82.12,0,0,1-23.57,6.46,41.15,41.15,0,0,0,18-22.7,82.16,82.16,0,0,1-26.05,10A41.07,41.07,0,0,0,98.5,50.38,116.49,116.49,0,0,1,13.92,7.51a41.09,41.09,0,0,0,12.7,54.78A40.86,40.86,0,0,1,8,57.16c0,.17,0,.34,0,.52A41.06,41.06,0,0,0,41,97.91a41,41,0,0,1-18.53.7,41.07,41.07,0,0,0,38.33,28.5,82.36,82.36,0,0,1-51,17.56A83.3,83.3,0,0,1,0,144.1a116.17,116.17,0,0,0,62.9,18.44c75.47,0,116.74-62.53,116.74-116.75,0-1.78,0-3.55-.11-5.31A83.35,83.35,0,0,0,200,19.24Z" />
                          </svg>
                        </a>
                      </li>
                      <li className="youtube">
                        <a
                          href="https://www.youtube.com/channel/UC4XVKfWFAGVObIMNHJYyyzA"
                          rel="external"
                        >
                          <svg viewBox="0 0 46 34">
                            <path d="M40.6 9.8s-.4-2.5-1.4-3.6c-1.4-1.4-2.9-1.4-3.6-1.5-5-.4-12.6-.4-12.6-.4s-7.6 0-12.6.4c-.7.1-2.2.1-3.6 1.5-1.1 1.1-1.4 3.6-1.4 3.6S5 12.7 5 15.6v2.7c0 2.9.4 5.8.4 5.8s.4 2.5 1.4 3.6c1.4 1.4 3.2 1.4 4 1.5 2.9.3 12.2.4 12.2.4s7.6 0 12.6-.4c.7-.1 2.2-.1 3.6-1.5 1.1-1.1 1.4-3.6 1.4-3.6s.4-2.9.4-5.8v-2.7c0-2.9-.4-5.8-.4-5.8M19.3 21.7V11.6l9.7 5.1-9.7 5z" />
                          </svg>
                        </a>
                      </li>
                      <li className="instagram">
                        <a
                          href="https://www.instagram.com/affinityportugal/"
                          rel="external"
                        >
                          <svg viewBox="0 0 16 16">
                            <path d="M16 4.7a5.87 5.87 0 0 0-.37-1.94 3.92 3.92 0 0 0-.92-1.42 3.91 3.91 0 0 0-1.42-.92A5.88 5.88 0 0 0 11.3 0H4.7a5.88 5.88 0 0 0-1.94.37A4.09 4.09 0 0 0 .42 2.76 5.87 5.87 0 0 0 0 4.7v6.6a5.87 5.87 0 0 0 .37 1.94 4.09 4.09 0 0 0 2.34 2.34A5.87 5.87 0 0 0 4.7 16h6.6a5.87 5.87 0 0 0 1.94-.37 4.09 4.09 0 0 0 2.34-2.34A5.87 5.87 0 0 0 16 11.3V8 4.7zm-1.44 6.53a4.43 4.43 0 0 1-.28 1.49 2.65 2.65 0 0 1-1.52 1.52 4.45 4.45 0 0 1-1.49.28H4.81a4.46 4.46 0 0 1-1.49-.28 2.65 2.65 0 0 1-1.52-1.52 4.43 4.43 0 0 1-.28-1.49V8 4.77a4.43 4.43 0 0 1 .28-1.49 2.65 2.65 0 0 1 1.48-1.52 4.43 4.43 0 0 1 1.49-.28h6.46a4.43 4.43 0 0 1 1.49.28 2.65 2.65 0 0 1 1.52 1.52 4.43 4.43 0 0 1 .28 1.49V8s.03 2.39-.01 3.23zM8 3.89A4.11 4.11 0 1 0 12.11 8 4.11 4.11 0 0 0 8 3.89zm0 6.77A2.67 2.67 0 1 1 10.67 8 2.67 2.67 0 0 1 8 10.67zm4.27-7.9a1 1 0 1 0 1 1 1 1 0 0 0-1-.99z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mouse-icon">
                  <span className="scroll-helper">Scroll</span>
                  <span className="wheel"></span>
                </div>

                <div className="deloitte-background">
                  <svg viewBox="0 0 396.12 688">
                    <path d="M396.12 0S39.37.83 3.12 255c-44 317.09 393 77.06 393 433z M398,1S41.25,1.83,5,256c-37,362,393,77.06,393,433Z M395,3S40.25-2.17,4,252c-34,260,391,79.06,391,435Z M396,1S42.25-.17,6,254c-34,260,389,75.06,389,431Z" />
                  </svg>
                </div>
                <div className="popup-link">
                  <h4>Should we get started?</h4>
                  <p>
                    Got a question? Want to start a new project? Want to be an
                    Affinity Player? This way to begin the conversation.
                  </p>
                  <a
                    href="contacts/index.html"
                    data-ajaxurl="https://affinity.pt/en/ajax/estamos-ajax/?ajax-id=92"
                    data-remote="true"
                    data-targetclass="estamos"
                    className="elastic-btn anchor"
                  >
                    <svg viewBox="0 0 164 69" preserveAspectRatio="xMidYMid meet">
                      <path
                        className="morph-bg"
                        d="M3.2 37.3C5.1 63.2 20.8 67 41.5 67h89c20.8-.1 30.4-14.7 30.4-32.5S151.3 2.1 130.6 2h-89C19 2 1.2 9.5 3.2 37.3z"
                        data-hover="M5.1 37.3C7.1 63.2 20.7 63 41.5 63s68.2.1 89 0S159 52.3 159 34.5 151.1 6 130.5 6h-89C18.9 6 3.2 9.5 5.1 37.3z"
                      />
                    </svg>
                    <span className="text">Start Now</span>
                  </a>
                </div>
              </header>

              <main className="page-content" role="main">
                <section className="we-do">
                  <div className="row align-center expanded">
                    <div className="xxlarge-10 text-center">
                      <h2 className="js-title-element">We do</h2>
                    </div>
                    <div className="xxlarge-16 xlarge-16 medium-16 small-16 columns">
                      <ul className="we-do-list row xxlarge-up-3 small-up-1">
                        <li className="column">
                          <a
                            href="solutions/nearshore/index.html"
                            data-remote="true"
                            data-targetclass="single-service"
                            data-ajaxurl="https://affinity.pt/en/ajax/nearshoring-ajax/?ajax-id=76"
                            data-title="Nearshore"
                          >
                            <img src="/imgs/home/nearshoring.png" alt="" />
                            <img
                              className="hover"
                              src="/imgs/home/nearshoring-hover.png"
                              alt=""
                            />
                            <h3>Nearshore</h3>
                          </a>
                        </li>
                        <li className="column">
                          <a
                            href="solutions/outsourcing/index.html"
                            data-remote="true"
                            data-targetclass="single-service"
                            data-ajaxurl="https://affinity.pt/en/ajax/outsourcing-ajax/?ajax-id=78"
                            data-title="Outsourcing"
                          >
                            <img src="/imgs/home/outsourcing.png" alt="" />
                            <img
                              className="hover"
                              src="/imgs/home/outsourcing-hover.png"
                              alt=""
                            />
                            <h3>Outsourcing</h3>
                          </a>
                        </li>
                        <li className="column">
                          <a
                            href="solutions/software/index.html"
                            data-remote="true"
                            data-targetclass="single-service"
                            data-ajaxurl="https://affinity.pt/en/ajax/software-ajax/?ajax-id=80"
                            data-title="Software"
                          >
                            <img src="/imgs/home/software.png" alt="" />
                            <img
                              className="hover"
                              src="/imgs/home/software-hover.png"
                              alt=""
                            />
                            <h3>Software</h3>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                {/* We do */}

                {/* <section
                  id="social-activity"
                  className="js-hashtag-scroll"
                  style={{ display: "none" }}
                >
                  <div className="row align-center">
                    <div className="xxlarge-16 small-14 xsmall-16 text-center">
                      <h2 className="hashtag-title js-write-text">
                        #alifetimeexperience
                      </h2>
                      <div className="row expanded lateral-padd">
                        <div className="xxlarge-8 small-16 columns">
                          <div className="social-container mt-negative">
                            <div className="row expanded align-middle">
                              <div className="xxlarge-8 xsmall-16 columns">
                                <div className="vertical-block background-lightGray">
                                  <h3>We create ambassadors from within.</h3>
                                  <h2>Everyday.</h2>
                                </div>
                              </div>
                              <div className="xxlarge-8 xsmall-16 columns">
                                <div className="google-container square-block">
                                  <div className=" social-block">
                                    <span className="icon">
                                      <svg viewBox="0 0 22 13.5">
                                        <path d="M7 5.75v2.3h4c-.59 2.85-4.6 3.78-6.73 1.91a4.23 4.23 0 0 1 .19-6.74 4.74 4.74 0 0 1 5.43.14 24.44 24.44 0 0 0 1.77-1.77A7.23 7.23 0 0 0 7 0a6.87 6.87 0 0 0-7 6.41 6.75 6.75 0 0 0 4.46 6.64c2.72 1 6.21.32 7.95-2a7.54 7.54 0 0 0 1.26-5.3H7zm13 0V3.82h-2v1.93h-2v2h2v1.92h2V7.74h2V5.75z" />
                                      </svg>
                                    </span>
                                    <ul className="gallery">
                                      <li className="google-wrapper">
                                        <a href="index.html" target="_blank">
                                          <h2></h2>
                                          <h3></h3>
                                        </a>
                                      </li>
                                      <li className="google-wrapper">
                                        <a href="index.html" target="_blank">
                                          <h2></h2>
                                          <h3></h3>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="insta-container square-block">
                                  <div className="social-block">
                                    <span className="icon">
                                      <svg viewBox="0 0 16 16">
                                        <path d="M16 4.7a5.87 5.87 0 0 0-.37-1.94 3.92 3.92 0 0 0-.92-1.42 3.91 3.91 0 0 0-1.42-.92A5.88 5.88 0 0 0 11.3 0H4.7a5.88 5.88 0 0 0-1.94.37A4.09 4.09 0 0 0 .42 2.76 5.87 5.87 0 0 0 0 4.7v6.6a5.87 5.87 0 0 0 .37 1.94 4.09 4.09 0 0 0 2.34 2.34A5.87 5.87 0 0 0 4.7 16h6.6a5.87 5.87 0 0 0 1.94-.37 4.09 4.09 0 0 0 2.34-2.34A5.87 5.87 0 0 0 16 11.3V8 4.7zm-1.44 6.53a4.43 4.43 0 0 1-.28 1.49 2.65 2.65 0 0 1-1.52 1.52 4.45 4.45 0 0 1-1.49.28H4.81a4.46 4.46 0 0 1-1.49-.28 2.65 2.65 0 0 1-1.52-1.52 4.43 4.43 0 0 1-.28-1.49V8 4.77a4.43 4.43 0 0 1 .28-1.49 2.65 2.65 0 0 1 1.48-1.52 4.43 4.43 0 0 1 1.49-.28h6.46a4.43 4.43 0 0 1 1.49.28 2.65 2.65 0 0 1 1.52 1.52 4.43 4.43 0 0 1 .28 1.49V8s.03 2.39-.01 3.23zM8 3.89A4.11 4.11 0 1 0 12.11 8 4.11 4.11 0 0 0 8 3.89zm0 6.77A2.67 2.67 0 1 1 10.67 8 2.67 2.67 0 0 1 8 10.67zm4.27-7.9a1 1 0 1 0 1 1 1 1 0 0 0-1-.99z" />
                                      </svg>
                                    </span>
                                    <span className="social-hashtag">
                                      #affinitylife
                                    </span>
                                    <ul className="gallery">
                                      <li className="insta-wrapper">
                                        <a href="index.html" target="_blank">
                                          <div className="block-bg-cover">
                                            <picture>
                                              <img
                                                className="element-cover"
                                                src="index.html"
                                                alt=""
                                              />
                                            </picture>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="insta-wrapper">
                                        <a href="index.html" target="_blank">
                                          <div className="block-bg-cover">
                                            <picture>
                                              <img
                                                className="element-cover"
                                                src="index.html"
                                                alt=""
                                              />
                                            </picture>
                                          </div>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="xxlarge-16 columns">
                                <div className="facebook-container social-block">
                                  <ul className="gallery gallery-images gallery-facebook">
                                    <li className="insta-wrapper">
                                      <a href="index.html" target="_blank">
                                        <div className="block-bg-cover">
                                          <picture>
                                            <img
                                              className="element-cover"
                                              src="index.html"
                                              alt=""
                                            />
                                          </picture>
                                        </div>
                                      </a>
                                    </li>
                                    <li className="insta-wrapper">
                                      <a href="index.html" target="_blank">
                                        <div className="block-bg-cover">
                                          <picture>
                                            <img
                                              className="element-cover"
                                              src="index.html"
                                              alt=""
                                            />
                                          </picture>
                                        </div>
                                      </a>
                                    </li>
                                  </ul>
                                  <div
                                    className="white-square-container"
                                    style={{ display: "none" }}
                                  >
                                    <span className="icon">
                                      <svg viewBox="0 0 16 16">
                                        <path d="M16 4.7a5.87 5.87 0 0 0-.37-1.94 3.92 3.92 0 0 0-.92-1.42 3.91 3.91 0 0 0-1.42-.92A5.88 5.88 0 0 0 11.3 0H4.7a5.88 5.88 0 0 0-1.94.37A4.09 4.09 0 0 0 .42 2.76 5.87 5.87 0 0 0 0 4.7v6.6a5.87 5.87 0 0 0 .37 1.94 4.09 4.09 0 0 0 2.34 2.34A5.87 5.87 0 0 0 4.7 16h6.6a5.87 5.87 0 0 0 1.94-.37 4.09 4.09 0 0 0 2.34-2.34A5.87 5.87 0 0 0 16 11.3V8 4.7zm-1.44 6.53a4.43 4.43 0 0 1-.28 1.49 2.65 2.65 0 0 1-1.52 1.52 4.45 4.45 0 0 1-1.49.28H4.81a4.46 4.46 0 0 1-1.49-.28 2.65 2.65 0 0 1-1.52-1.52 4.43 4.43 0 0 1-.28-1.49V8 4.77a4.43 4.43 0 0 1 .28-1.49 2.65 2.65 0 0 1 1.48-1.52 4.43 4.43 0 0 1 1.49-.28h6.46a4.43 4.43 0 0 1 1.49.28 2.65 2.65 0 0 1 1.52 1.52 4.43 4.43 0 0 1 .28 1.49V8s.03 2.39-.01 3.23zM8 3.89A4.11 4.11 0 1 0 12.11 8 4.11 4.11 0 0 0 8 3.89zm0 6.77A2.67 2.67 0 1 1 10.67 8 2.67 2.67 0 0 1 8 10.67zm4.27-7.9a1 1 0 1 0 1 1 1 1 0 0 0-1-.99z" />
                                      </svg>
                                    </span>
                                    <ul className="gallery gallery-square gallery-facebook-titles">
                                      <li className="insta-wrapper">
                                        <a href="index.html" target="_blank">
                                          <div className="block-bg-cover">
                                            <picture>
                                              <img
                                                className="element-cover"
                                                src="index.html"
                                                alt=""
                                              />
                                            </picture>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="insta-wrapper">
                                        <a href="index.html" target="_blank">
                                          <div className="block-bg-cover">
                                            <picture>
                                              <img
                                                className="element-cover"
                                                src="index.html"
                                                alt=""
                                              />
                                            </picture>
                                          </div>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="xxlarge-8 small-16 columns">
                          <div className="social-container mt-positive">
                            <div className="row expanded align-middle">
                              <div className="xxlarge-16 small-12 xsmall-16 columns">
                                <div className="news-container social-block">
                                  <span className="icon">
                                    <svg viewBox="0 0 28 18.5">
                                      <path d="M26.5 0h-25A1.5 1.5 0 0 0 0 1.5V17a1.5 1.5 0 0 0 1.5 1.5h25A1.5 1.5 0 0 0 28 17V1.5A1.5 1.5 0 0 0 26.5 0zm-.75 1L14.4 9.42a.57.57 0 0 1-.66 0L2 1zM27 17a.5.5 0 0 1-.5.5h-25A.5.5 0 0 1 1 17V1.51l12.14 8.7a1.53 1.53 0 0 0 .95.32 1.48 1.48 0 0 0 .92-.31l12-8.87a.49.49 0 0 1 0 .16z" />
                                    </svg>
                                  </span>
                                  <span className="social-hashtag">
                                    #moreaboutus
                                  </span>
                                  <h2>
                                    Want to know more about us? <br />
                                    Download our E-Brochure
                                  </h2>
                                </div>
                              </div>
                              <div className="xxlarge-16 columns">
                                <div className="facebook-container social-block">
                                  <ul className="gallery gallery-images gallery-facebook">
                                    <li className="insta-wrapper">
                                      <a href="index.html" target="_blank">
                                        <div className="block-bg-cover">
                                          <picture>
                                            <img
                                              className="element-cover"
                                              src="index.html"
                                              alt=""
                                            />
                                          </picture>
                                        </div>
                                      </a>
                                    </li>
                                    <li className="insta-wrapper">
                                      <a href="index.html" target="_blank">
                                        <div className="block-bg-cover">
                                          <picture>
                                            <img
                                              className="element-cover"
                                              src="index.html"
                                              alt=""
                                            />
                                          </picture>
                                        </div>
                                      </a>
                                    </li>
                                  </ul>
                                  <div
                                    className="white-square-container"
                                    style={{ display: "none" }}
                                  >
                                    <span className="icon">
                                      <svg viewBox="0 0 16 16">
                                        <path d="M16 4.7a5.87 5.87 0 0 0-.37-1.94 3.92 3.92 0 0 0-.92-1.42 3.91 3.91 0 0 0-1.42-.92A5.88 5.88 0 0 0 11.3 0H4.7a5.88 5.88 0 0 0-1.94.37A4.09 4.09 0 0 0 .42 2.76 5.87 5.87 0 0 0 0 4.7v6.6a5.87 5.87 0 0 0 .37 1.94 4.09 4.09 0 0 0 2.34 2.34A5.87 5.87 0 0 0 4.7 16h6.6a5.87 5.87 0 0 0 1.94-.37 4.09 4.09 0 0 0 2.34-2.34A5.87 5.87 0 0 0 16 11.3V8 4.7zm-1.44 6.53a4.43 4.43 0 0 1-.28 1.49 2.65 2.65 0 0 1-1.52 1.52 4.45 4.45 0 0 1-1.49.28H4.81a4.46 4.46 0 0 1-1.49-.28 2.65 2.65 0 0 1-1.52-1.52 4.43 4.43 0 0 1-.28-1.49V8 4.77a4.43 4.43 0 0 1 .28-1.49 2.65 2.65 0 0 1 1.48-1.52 4.43 4.43 0 0 1 1.49-.28h6.46a4.43 4.43 0 0 1 1.49.28 2.65 2.65 0 0 1 1.52 1.52 4.43 4.43 0 0 1 .28 1.49V8s.03 2.39-.01 3.23zM8 3.89A4.11 4.11 0 1 0 12.11 8 4.11 4.11 0 0 0 8 3.89zm0 6.77A2.67 2.67 0 1 1 10.67 8 2.67 2.67 0 0 1 8 10.67zm4.27-7.9a1 1 0 1 0 1 1 1 1 0 0 0-1-.99z" />
                                      </svg>
                                    </span>
                                    <ul className="gallery gallery-square gallery-facebook-titles">
                                      <li className="insta-wrapper">
                                        <a href="index.html" target="_blank">
                                          <div className="block-bg-cover">
                                            <picture>
                                              <img
                                                className="element-cover"
                                                src="index.html"
                                                alt=""
                                              />
                                            </picture>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="insta-wrapper">
                                        <a href="index.html" target="_blank">
                                          <div className="block-bg-cover">
                                            <picture>
                                              <img
                                                className="element-cover"
                                                src="index.html"
                                                alt=""
                                              />
                                            </picture>
                                          </div>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="xxlarge-8 xsmall-16 columns">
                                <div className="insta-container social-block">
                                  <a
                                    className="social-block"
                                    href="index.html"
                                    target="_blank"
                                  >
                                    <div className="block-bg-cover">
                                      <picture>
                                        <img
                                          className="element-cover"
                                          src="index.html"
                                          alt=""
                                        />
                                      </picture>
                                    </div>
                                    <span className="icon">
                                      <svg viewBox="0 0 16 16">
                                        <path d="M16 4.7a5.87 5.87 0 0 0-.37-1.94 3.92 3.92 0 0 0-.92-1.42 3.91 3.91 0 0 0-1.42-.92A5.88 5.88 0 0 0 11.3 0H4.7a5.88 5.88 0 0 0-1.94.37A4.09 4.09 0 0 0 .42 2.76 5.87 5.87 0 0 0 0 4.7v6.6a5.87 5.87 0 0 0 .37 1.94 4.09 4.09 0 0 0 2.34 2.34A5.87 5.87 0 0 0 4.7 16h6.6a5.87 5.87 0 0 0 1.94-.37 4.09 4.09 0 0 0 2.34-2.34A5.87 5.87 0 0 0 16 11.3V8 4.7zm-1.44 6.53a4.43 4.43 0 0 1-.28 1.49 2.65 2.65 0 0 1-1.52 1.52 4.45 4.45 0 0 1-1.49.28H4.81a4.46 4.46 0 0 1-1.49-.28 2.65 2.65 0 0 1-1.52-1.52 4.43 4.43 0 0 1-.28-1.49V8 4.77a4.43 4.43 0 0 1 .28-1.49 2.65 2.65 0 0 1 1.48-1.52 4.43 4.43 0 0 1 1.49-.28h6.46a4.43 4.43 0 0 1 1.49.28 2.65 2.65 0 0 1 1.52 1.52 4.43 4.43 0 0 1 .28 1.49V8s.03 2.39-.01 3.23zM8 3.89A4.11 4.11 0 1 0 12.11 8 4.11 4.11 0 0 0 8 3.89zm0 6.77A2.67 2.67 0 1 1 10.67 8 2.67 2.67 0 0 1 8 10.67zm4.27-7.9a1 1 0 1 0 1 1 1 1 0 0 0-1-.99z" />
                                      </svg>
                                    </span>
                                    <span className="social-hashtag">
                                      #affinitylife
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section> */}

                <section className="company-numbers js-hashtag-scroll">
                  <div className="row expanded align-center">
                    <div className="xxlarge-16 xlarge-14 text-center">
                      <h2 className="hashtag-title js-write-text">#2022</h2>
                    </div>
                    <div className="xxlarge-5 medium-5 small-14 text-center">
                      <div className="number-container">
                        <h2 className="statistics">135</h2>
                        <span className="statistic-title">
                          ACTIVE CUSTOMERS
                        </span>
                      </div>
                    </div>
                    <div className="xxlarge-5 medium-5 small-14 text-center">
                      <div className="number-container">
                        <h2 className="statistics">10</h2>
                        <span className="statistic-title">
                          YEARS OF EXPERIENCE
                        </span>
                      </div>
                    </div>
                    <div className="xxlarge-5 medium-5 small-14 text-center">
                      <div className="number-container">
                        <h2>
                          <span className="statistics">16M</span>
                        </h2>
                        ;
                        <span className="statistic-title">
                          M€ BUSINESS VOLUME
                        </span>
                      </div>
                    </div>
                  </div>
                </section>

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
                          <use
                            href="#jobText"
                            fill="white"
                            mask="url(#jobMask)"
                          />
                        </svg>

                        <h3 className="subtitle js-text-element">
                          Where success is more a consequence than a goal.
                        </h3>
                      </div>

                      {/* <h2>Job Offers</h2>
            <h3 className="subtitle js-text-element">Where success is more a consequence than a goal.</h3>

            <a className="elastic-btn" href="#">
              <svg viewBox="0 0 196 66">
                <path className="morph-bg" d="M1.3 35.8c2 25.9 17.7 29.7 38.6 29.7h124.5C185.3 65.4 195 50.8 195 33S185.2.6 164.4.5H39.9C17.2.5-.7 8 1.3 35.8z" data-hover="M3.3 35.8c2 25.9 15.6 25.7 36.6 25.7h124.5C185.3 61.4 193 50.8 193 33s-8-28.5-28.7-28.5H39.8C17.1 4.5 1.3 8 3.3 35.8z" data-original="M1.3 35.8c2 25.9 17.7 29.7 38.6 29.7h124.5C185.3 65.4 195 50.8 195 33S185.2.6 164.4.5H39.9C17.2.5-.7 8 1.3 35.8z"></path>
              </svg>
              <span className="text">Ver Ofertas</span>
            </a>  */}
                    </div>

                    {/* <div className="xxlarge-6 xxlarge-offset-1 columns">
            <img  className="keywork-image" src="/public/imgs/home/keywork.svg" alt="Keywork" >
          </div>  */}

                    {/* <div className="xxlarge-2 xxlarge-offset-5 medium-4 medium-offset-4 xsmall-14 xsmall-offset-1 columns text-right">
						<a href="https://affinity.pt/en/careers/1487/"
							 className="view-all"
							 data-remote="true"
							 data-targetclass="queremos"
           		 data-title="Careers"
							>View all <span className="quantity">(1)</span></a>
					</div>  */}
                  </div>
                  <div className="row expanded">
                    <div className="xxlarge-10 xxlarge-offset-4 medium-12 medium-offset-2 small-14 small-offset-1 columns">
                      <div className="row xxlarge-up-2 xsmall-up-1">
                        {/* <a className="columns job-link job-spontaneous"
                 	href="https://affinity.key.work/jobs/register/1"
                 	target="_blank"
                 	rel="noreferrer"
                >
                	<div className="job-wrapper block-wrapper" data-target="spontaneous">
                  		<h2>Can't wait <br>to see the <strong style="fontWeight:bold;">offers?</strong></h2>
                  		<h4>Click here and send us a spontaneous application.</h4>
                	</div>
              	</a>  */}

                        {/* <a className="columns job-link"
                 	href="https://affinity.key.work/jobs/"
                 	target="_blank"
                 	rel="noreferrer"
                 	>
                 	<div className="job-wrapper block-wrapper" data-target="it-consultant">
                  		<h3 className="post-time">Updated daily</h3>
                  		<h2 style="fontWeight:normal;">Click here to see<br>the <strong style="fontWeight:bold;">available offers.</strong></h2>
                  		<h4 className="post-local">
                    		<span>
								<svg viewBox="0 0 12 15.5">
									<path d="M6 0a6 6 0 0 0-6 6 5.54 5.54 0 0 0 2.18 4.5 11.28 11.28 0 0 1 3.49 4.74.35.35 0 0 0 .66 0 11.28 11.28 0 0 1 3.49-4.74A5.55 5.55 0 0 0 12 6.04 6 6 0 0 0 6 0zm0 4a2.11 2.11 0 1 1-2.12 2.12A2.12 2.12 0 0 1 6 4.01z"/>
								</svg>
                    		</span>
                    		Portugal
                  		</h4>
                	</div>
				  </a>  */}

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
                            <h4>
                              Click here and send a spontaneous application.
                            </h4>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

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
                          <use
                            href="#newsText"
                            fill="white"
                            mask="url(#newsMask)"
                          />
                        </svg>

                        <h3 className="subtitle js-text-element">
                          Updates and news from the Affinity World. We are
                          always improving, growing and reinventing ourselves.
                        </h3>
                      </div>

                      <a
                        href="news/index.html"
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
                                    src="/uploads/2023/08/MicrosoftTeams-image-40-1000x554.png"
                                    alt=""
                                  />
                                </picture>
                              </div>
                              <div className="block-wrapper">
                                <h3 className="post-time">
                                  28 August, 2023{" "}
                                  <span className="post-target">News </span>
                                </h3>
                                <h2>
                                  ‘A Data Driven World’ in discussion in our
                                  upcoming Affinity Live Event
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
                                    src="/uploads/2023/08/DSC_9747-1000x665.jpg"
                                    alt=""
                                  />
                                </picture>
                              </div>
                              <div className="block-wrapper">
                                <h3 className="post-time">
                                  23 August, 2023{" "}
                                  <span className="post-target">
                                    Highlights{" "}
                                  </span>
                                </h3>
                                <h2>
                                  Affinity supports the child-care association
                                  ‘Casa de Apoio à Criança de Guimarães’
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
                                    src="/uploads/2023/07/DSC_2337-1-1000x665.jpg"
                                    alt=""
                                  />
                                </picture>
                              </div>
                              <div className="block-wrapper">
                                <h3 className="post-time">
                                  26 July, 2023{" "}
                                  <span className="post-target">
                                    Highlights{" "}
                                  </span>
                                </h3>
                                <h2>
                                  Blog With Affinity, a space of sharing &
                                  knowledge
                                </h2>
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
                                    src="/uploads/2023/07/MicrosoftTeams-image-19-1000x523.png"
                                    alt=""
                                  />
                                </picture>
                              </div>
                              <div className="block-wrapper">
                                <h3 className="post-time">
                                  17 July, 2023{" "}
                                  <span className="post-target">
                                    Highlights{" "}
                                  </span>
                                </h3>
                                <h2>
                                  Achieved the goal of 100k followers on
                                  LinkedIn
                                </h2>
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

                <footer className="page-footer type-1">
                  <Brochure />

                  <div className="row expanded last-content-wrapper xsmall-collapse">
                    <div className="xxlarge-2 xxlarge-offset-1 medium-3 small-6 small-offset-0 xsmall-5 columns made-by">
                      <a
                        href="privacy-policy/index.html"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <h4>Privacy Policy </h4>
                      </a>

                      <a
                        href="https://whistleblowersoftware.com/secure/affinity"
                        target="_blank"
                        rel="noreferrer"
                        className="reporting"
                      >
                        <h4>Reporting Channel </h4>
                      </a>

                      {/* <h4>2023 &copy; Affinity</h4>  */}
                    </div>
                    <div className="xxlarge-10 medium-8 small-4 xsmall-16 columns text-center">
                      <svg className="main-logo" viewBox="0 0 1566.1 460.4">
                        <path d="M921 112.3c-35.5 0-56.1 19.7-71.9 41.4h-3.9l-1-36.9h-71.4c0 0 1 20.7 1 41.9v207.3h73.4V222.1c6.4-34 24.1-58.1 47.8-58.1 17.2 0 29.1 12.3 29.1 36.4v165.4h74.4v-163C998.3 133.9 959.4 112.3 921 112.3zM1047.6 116.7H1120.5V365.9H1047.6zM1083.5 4.9c-22.2 0-40.4 15.3-40.4 38.9 0 24.1 18.2 38.4 40.4 38.4 21.7 0 40.9-14.3 40.9-38.4C1124.4 20.2 1105.2 4.9 1083.5 4.9zM1496.2 116.7L1445.5 295c0 0 11.3-189.6-145.3-178.2l-34.4.7-1-77.5h-53.7l-18.2 76.8h-45.3v53.7h45.3v126.6c0 48.7 27.1 74.8 75.8 74.8 21.7 0 43.3-8.9 55.6-16.7l1-48.3c-11.8 4.4-25.6 8.9-39.9 8.9-12.8 0-20.2-7.9-20.2-20.2l.5-124.7 32.7-.4c113.6 0 87.8 175.8 87.8 175.8 17.2-1.6 28.8 5.3 28.8 19.7 0 8.4-2 15.3-5.9 21.2-7.9 11.8-22.2 18.2-38.9 18.2-7.9 0-19.2-1-27.6-2.5V456c13.3 3 28.6 4.4 39.4 4.4 42.3 0 77.8-19.7 93.1-65.5l91.1-278.2H1496.2zM122.3 9.3L0 365.8h73l23.7-76.9H216l24.2 76.9h76.9L190.4 9.3H122.3zM112.5 231.2l42.4-129.7h3.9l39.5 129.7H112.5zM572.9 116.7v-31c0-11.8 7.4-25.6 32-26.8 30.2-1.5 56.3 6.2 81.2 14.8l13.2-56.9C676.1 9.8 635.9-.4 592.7.9c-65.6 2-92.2 35-92.2 82.8v33h-87.6v-31c0-11.8 7.4-27.1 32-28.4 10.9-.6 20.7.8 31.2 3.1l12.5-54.3c-16.9-3.6-36.1-6.7-55.9-6.1-65.6 2-92.2 35.9-92.2 83.7v33h0-36.9v50.2h36.9v198.9h72.4V166.9h87.6v198.9h72.4V166.9h76.8v198.9h71.9V116.7H572.9z" />
                      </svg>
                    </div>
                    <div className="xxlarge-2 medium-3 small-6 xsmall-5 columns affinity-mark">
                      <ul>
                        <li>
                          <a
                            href="news/index.html"
                            className="underline-link"
                            data-remote="true"
                            data-targetclass="noticias"
                            data-ajaxurl="https://affinity.pt/en/ajax/noticias-ajax/?ajax-id=https://affinity.pt"
                            data-title=""
                          >
                            News
                          </a>
                        </li>
                        <li>
                          <a
                            href="contacts/index.html#affinity"
                            className="underline-link"
                            data-remote="true"
                            data-targetclass="estamos"
                            data-ajaxurl="https://affinity.pt/en/ajax/estamos-ajax/?ajax-id=92"
                            data-title="Contacts"
                          >
                            Contacts
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row expanded align-center apdc-member">
                    <div className="xxlarge-4 d-flex xsmall-7">
                      <div className="pt2020-logo">
                        <a
                          href="https://www.portugal2020.pt/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/imgs/pt2020.png" alt="Portugal 2020" />
                        </a>
                      </div>
                      <div className="apdc-logo">
                        <a
                          href="http://www.apdc.pt/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/imgs/apdc-logo.png" alt="APDC Logo" />
                        </a>
                      </div>
                    </div>
                  </div>
                </footer>
              </main>

              {/* preload   */}
              <div className="preload" aria-hidden="true">
                <img src="/imgs/home/home-header-image.jpg" alt="" />
                <img src="/imgs/home/home-pictogram.png" alt="" />
              </div>
            </div>
          </div>

          <div className="page-main page-next" aria-hidden="true"></div>
          <div className="page-main page-prev" aria-hidden="true"></div>

          <footer className="footer" role="contentinfo"></footer>

          <div className="morph-page-transition">
            <svg
              height="0"
              width="0"
              viewBox="0 0 745 642"
              data-morph-shape="M375.037-185.216
  C445.836-110.882,494.822,68.567,546.3,84.908c55.24,17.535,94.958-280.124,150.737-280.124c154.47,0,227.3-142.07,180-234
  c-87.387-169.843-395.272-56.301-465-29.311c-72.787,28.173-353,0-353,0S3.35,122.51,163.764,159.166
  C257.744,180.641,320.073-242.925,375.037-185.216z"
            >
              <defs>
                <clipPath
                  id="hero-clip"
                  clipPathUnits="objectBoundingBox"
                  transform="scale(0.002013 0.002336)"
                >
                  <path
                    fill="none"
                    transform="translate(-100 -95)"
                    d="M217.06,703.311l316,4l254,91l34-769L356.06,0
  c-6,0-353,0-353,0l-25,654.311L217.06,703.311z"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="bg-transition">
            <div className="row align-middle align-center">
              <div className="xxlarge-16 text-center">
                <h2 className="hashtag-title">#alifetimeexperience</h2>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-transition-new"
          data-phrases='[{"phrase":"We are united by Affinity."},{"phrase":"We grow pure Affinity."},{"phrase":"Great technology is always based on optimal relationships."},{"phrase":"We believe feedback loops to great things."},{"phrase":"Learning is a precondition."},{"phrase":"Affinity means cutting distance."}]'
        >
          <svg
            className="main-transition"
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

          {/* <!--first transition */}
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
          {/* <!--second transition */}
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

          {/* <!--third transition */}
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

          {/* <!--forth transition */}
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

          {/* <!--fifth transition */}
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

          <div className="row align-middle align-center">
            <div className="xxlarge-16 text-center">
              <h2 className="hashtag-title">#alifetimeexperience</h2>
            </div>
          </div>
        </div>
        {/* <!--Loading Blob 
<div className="loading-blob">
  <svg viewBox="0 0 62 58">
    <path d="M0,32.45C0,14.12,3.5,3.12,23.17.45c23.33-2.33,38.33,4,38.67,26.17C61.67,50,51,58.12,31.33,58.12S0,48,0,32.45Z" data-morph="M6.44,24.66C25.78,14,.44,3,20.11.32c23.33-2.33,53.76,17,34,26.5C28.44,39.16,47.94,58,28.28,58S-7.13,32.15,6.44,24.66Z"></path>
  </svg>
</div>  */}

        {/* MODAL  */}
        <div id="modal-bg"></div>
        <div id="modal-wrapper">
          {" "}
          <div
            id="modal-content"
            className="row align-middle align-center"
          ></div>
        </div>
        {/* TRANSITION  */}
        <div id="loading-page" aria-hidden="true"></div>

        {/* outdated browser   */}
        <div id="outdated">
          <h6>Your browser is out of date!</h6>
          <p>
            Update your browser to view this website correctly.{" "}
            <a id="btnUpdateBrowser" href="http://outdatedbrowser.com/">
              Update my browser now{" "}
            </a>
          </p>
          <p className="last">
            <a href="index.html#" id="btnCloseUpdateBrowser" title="Close">
              &times;
            </a>
          </p>
        </div>
      </body>
    </div>
  );
}

export default App;
