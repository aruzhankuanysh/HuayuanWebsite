import Header from "../components/header";

function ContactsPage() {
  return (
    <>
      <body className="js-byrefresh js-no-ajax    en-lang">
        <div className="scroll-content-wrapper" data-scrollbar>
          <Header />
          {/*  ============= CONTENT ============= */}
          <div className="page-main page-current">
            <div className="page-toload estamos-page" data-bodyClass="estamos">
              <header className="page-header">
                <div className="background-wrapper">
                  <div className="webGL-main">
                    <div id="webGL-container"></div>
                  </div>
                  <div className="header-image-wrapper">
                    <div className="block-bg-cover">
                      <picture>
                        {/*  <source srcset="" type="image/webp"> */}
                        <source
                          srcset="/imgs/estamos/contacts-header-image-phone.jpg"
                          media="(max-width: 414px)"
                        />
                        <source
                          srcset="/imgs/estamos/contacts-header-image-small.jpg"
                          media="(max-width: 768px)"
                        />
                        <img
                          className="background-image element-cover"
                          src="../imgs/estamos/contacts-header-image.jpg"
                          alt="Affinity Instalations"
                        />
                      </picture>
                    </div>
                  </div>

                  <div className="header-pictogram-wrapper">
                    <picture>
                      <source
                        srcset="/imgs/estamos/contacts-pictogram-phone.png"
                        media="(max-width: 414px)"
                      />
                      <img
                        className="header-pictogram"
                        src="../imgs/estamos/contacts-pictogram.png"
                        alt=""
                      />
                    </picture>
                  </div>

                  <div className="row expanded align-middle medium-collapse">
                    <div className="xxlarge-8 xxlarge-offset-5 xlarge-offset-5 large-9 large-offset-4 medium-10 medium-offset-4 small-14 small-offset-1 columns">
                      <div className="header-text">
                        <h1>
                          In case you need to find us.
                          <br />
                        </h1>
                        <h2>
                          These are the coordinates for your biggest adventure
                          yet.
                        </h2>
                      </div>
                    </div>
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
                      <li className="google">
                        <a
                          href="https://plus.google.com/+AFFINITYLisboa"
                          rel="external"
                        >
                          <svg viewBox="0 0 46 34">
                            <path d="M1 16.3C.6 22 4.4 27.6 9.9 29.6c5.4 2 12.4.6 15.9-4.1 2.3-3 2.8-6.8 2.5-10.4H14.9v4.6c2.7.1 5.3 0 8 .1-1.2 5.7-9.2 7.6-13.5 3.8-4.4-3.3-4.2-10.4.4-13.5 3.2-2.4 7.7-1.8 10.9.3 1.2-1.1 2.4-2.3 3.5-3.5-2.6-2-5.9-3.5-9.3-3.3C7.8 3.3 1.2 9.4 1 16.3zm36-5.1v3.9h-4v3.8h4v3.8h4v-3.9h4V15h-4v-3.9c-1.3.1-2.7.1-4 .1z" />
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
              </header>

              <main className="page-content" role="main">
                <div className="hero-text row text-center align-center small-collapse">
                  <div className="xxlarge-10 medium-12 small-14 columns">
                    <h3 className="js-bigText-element first-title">
                      We strive to be the reference in technology consulting
                      services. Put us to the test.
                    </h3>
                  </div>
                </div>

                <section className="contacts" id="affinity">
                  <div id="map" data-lat="38.733888" data-lng="-9.153371"></div>
                  <a
                    href="https://goo.gl/maps/KRtRsXHxhr82"
                    className="map-marker"
                    target="_blank"
                  >
                    <img
                      src="../imgs/map_pin_en.png"
                      alt="Affinity"
                    />
                  </a>
                  <div className="row info-wrapper">
                    <div className="xxlarge-8 xxlarge-offset-1 medium-9 small-14 columns contacts-wrapper background-white">
                      <ul className="city-selector">
                        <li className="active" data-target="lisboa">
                          Lisboa
                        </li>
                        <li className="" data-target="obidos">
                          Obidos
                        </li>
                        <li className="" data-target="porto">
                          Porto
                        </li>
                      </ul>

                      <div className="contacts-info-wrapper">
                        <div
                          className="contacts-info lisboa active"
                          data-latlng="38.733874656442346,-9.153070449829102"
                          data-googleLink="https://goo.gl/maps/KRtRsXHxhr82"
                        >
                          <h3>
                            Av. 5 de Outubro
                            <br />
                            125, 1º Piso <br />
                            1050-052 Lisboa
                          </h3>

                          <p>
                            <a href="tel:351 213 160 443">351 213 160 443</a>
                          </p>
                          <p>
                            <a href="mailto:info@affinity.pt">
                              info@affinity.pt
                            </a>
                          </p>
                        </div>
                        <div
                          className="contacts-info obidos "
                          data-latlng="39.37954369105331,-9.144516638713867"
                          data-googleLink="https://goo.gl/maps/Cyndy6PfSaTB3NJQ8"
                        >
                          <h3>
                            Parque Tecnológico de Óbidos 1.40
                            <br />
                            Rua da Criatividade
                            <br />
                            N.º 216, Óbidos
                          </h3>

                          <p>
                            <a href="tel:+351 213 160 443">+351 213 160 443</a>
                          </p>
                          <p>
                            <a href="mailto:info@affinity.pt">
                              info@affinity.pt
                            </a>
                          </p>
                        </div>
                        <div
                          className="contacts-info porto "
                          data-latlng="41.1529374,-8.610170100000005"
                          data-googleLink="https://goo.gl/maps/beNg9DRLAvF2"
                        >
                          <h3>
                            Rua de Camões - Edifício Camões
                            <br />
                            N.º 117, 3º piso
                            <br />
                            4000-144 Porto
                          </h3>

                          <p>
                            <a href="tel:+351 22 205 80 15">
                              +351 22 205 80 15
                            </a>
                          </p>
                          <p>
                            <a href="mailto:info@affinity.pt">
                              info@affinity.pt
                            </a>
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://goo.gl/maps/KRtRsXHxhr82"
                        target="_blank"
                        className="btn google-link elastic-btn"
                      >
                        <svg className="morph-shape" viewBox="0 0 337 95.27">
                          <path
                            className="morph-bg"
                            d="M0,0V95H337V0S.6-.6,0,0Z"
                            data-hover="M4,4.25V91c0-3.16,329-3.16,329,0V4.25C333,6.8,4,6.8,4,4.25Z"
                          />
                        </svg>
                        <span className="text">See on Google Maps</span>
                      </a>
                    </div>
                  </div>
                  <div className="cities-hashs">
                    <h2 className="hashtag-title city-hashtag lisboa-hash active">
                      #affinitylisbon
                    </h2>
                    <h2 className="hashtag-title city-hashtag obidos-hash ">
                      #affinityobidos
                    </h2>
                    <h2 className="hashtag-title city-hashtag porto-hash ">
                      #affinityporto
                    </h2>
                  </div>
                </section>
                {/* contacts*/}

                <section className="we-do container">
                  <div className="rotate-title">
                    <h4></h4>
                  </div>

                  <div className="drag-helper">
                    <h4>Swipe</h4>
                    <svg viewBox="0 0 124.51 8.51">
                      <path
                        d="M124.51 3.51H6.86A6.36 6.36 0 0 0 8.33 0C6.17 2.12 3.38 3.22 0 4.25a20.4 20.4 0 0 1 8.33 4.26 7.36 7.36 0 0 0-1.5-3.61h117.68z"
                        fill="#7c3d3d"
                        fill-rule="evenodd"
                      />
                    </svg>
                    <svg className="right" viewBox="0 0 124.51 8.51">
                      <path
                        d="M124.51 3.51H6.86A6.36 6.36 0 0 0 8.33 0C6.17 2.12 3.38 3.22 0 4.25a20.4 20.4 0 0 1 8.33 4.26 7.36 7.36 0 0 0-1.5-3.61h117.68z"
                        fill="#7c3d3d"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="map-wrapper" id="map-affinity">
                    <svg className="fake-shadow" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                    <svg className="svg-scale" viewBox="0 0 1250 620">
                      <g>
                        <path
                          d="M151.8,225.6c-23,12.5-8.5,53.5,13.3,32.4c6.3-6.1,15.3-1.8,14.5,5.9c-0.5,5.6-6.2,13.5-2.3,18.4
								c5.3,6.4,19.6-7.1,18.7,7.3c-0.7,11.7,3.4,23.9,12.4,19.1c8.4-4.5,13.4,8.4,18.9,3.9c29.8-23.3,93.1-2.6,102,21.1
								c8.9,23.6,38.6,33,38.6,33c65.1,19.9,22.3,33.6,20.1,52.2c-2.2,18.5-2.2,27.1-20.6,43.6c-18.4,16.4-1.5,22.8-44.7,64.9
								c-40.2,39.1,2.7,70.2-5.2,79.9c-1.1,1.3-2.9,1.8-4.5,1.3c-50.9-15.6-52.4-78.5-55.1-120.5c-2.8-42.5-3.1-47.1-21.3-59.2
								c-18.2-12.1-18.8-23.9-18.8-23.9s-18.5-38.2-9.9-52.5s11.8-19.2,8.8-31.7c-1.4-5.7-10.2-3.5-12.3-2c-5.5,4-15.5,3-19.8-0.5
								c-4.3-3.5-6.4-6.4-12.1-17.5c-5.8-11.1-13.7-19.1-28.2-18.7s-37.8-3.4-38.6-18.9c-1-21.1-19.3-42.2-19.3-42.2S56.1,199.1,72,153.8
								s7.7-65.4-8.1-71.1c-12.1-4.4-30.6-0.8-38.5,1.1c-3.6,0.9-7.4-0.2-10-3c-4.2-4.5-5.1-13.3,20.2-27.4c40.4-22.6,73.8-11.6,73.8-11.6
								c15.9,3.6,68.3,11.2,113.3-9s131.5-16.3,139,22.2c0.1,0.6,0.2,1.2,0.3,1.8c7,37.6-14.5,74.6-49.6,86c-12.8,4.2-25.9,9.7-36,16.7
								c-33,23-35.5,63.5-60.9,69.4C190.2,234.7,174.8,213.1,151.8,225.6z"
                        />
                      </g>
                      <g>
                        <path
                          d="M1172.4,568.6c0,0-15.1-0.9,4.8-11.4c19.9-10.6,25-14.4,25-14.4s12.6-0.7-1.6,8.7
								C1186.3,560.8,1172.4,568.6,1172.4,568.6z"
                        />
                      </g>
                      <g>
                        <path
                          d="M1211.9,543.3c-0.1-0.8,0.1-1.6,0.4-2.4c0.6-1.5,1.9-4.4,4.6-6.9c3.9-3.5,6.1-7.9,6-13.1
								c-0.1-4.3,1.9-7.5,4.5-1.4c2.6,6.1,2.9,9.4,5.5,9.7c2.6,0.2,4.4,4.8-2.9,7.8C1223.1,540,1212.4,549.7,1211.9,543.3z"
                        />
                      </g>
                      <g>
                        <path
                          d="M722.3,414.9c-0.5,1.4-3.2,3.3-4,4.5c-1.9,3.2-3.6,7.6-8.2,6.8c-6.9-1.2-9.5,7.4-9.4,10.1
								c0.1,2.6,1.2,11-1.2,17.1c-2,5.3-4.4,13.9,2.4,17.7c6.9,3.8,22.3-10.8,26.7-44.7C730.6,411.2,724.7,408,722.3,414.9z"
                        />
                      </g>
                      <g>
                        <path
                          d="M940.1,343.7c-3.5,7.8,18.6,49.1,65.6,52.9c14.4,1.2,9.1-6.1,0-9.7c-11.1-4.4-24.9-12.4-31.7-18.1
								C959.8,357.2,943.3,336.4,940.1,343.7z"
                        />
                      </g>
                      <g>
                        <path
                          d="M1014.6,347.2c-10.3-6.3-22.2-8.7-25.5-1.6c-4.6,9.9-0.6,25.5,18.5,27.6c17.2,1.9,20.1-1.7,20.1-9.6
								C1027.7,358.7,1026.2,354.3,1014.6,347.2z"
                        />
                      </g>
                      <g>
                        <path
                          d="M1122.9,366.9c0,0-41.4-21-39.6-5.9c1.3,10.7,14.9,10.7,27.5,21.9c3.1,2.8,9.2,16.7,15.4,15.1
								c6.2-1.6,11.9-4.1,21.2,0.5c9.3,4.6,16.5-12.7-4-22.1C1122.9,366.9,1122.9,366.9,1122.9,366.9z"
                        />
                      </g>
                      <g>
                        <path
                          d="M1079.7,145.3c-10.6,8.9,3.6,24.2-4.2,35.9c-8.2,12.3-25.1,13.1-20.6,28.9c3.6,12.3,28.5,0.1,37.3-17.6
								C1102.2,172,1088.2,138,1079.7,145.3z"
                        />
                      </g>
                      <g>
                        <path
                          d="M494.6,100.9c-4.9-1.2-11.6,3.8-13.2,7.9c-1.7,4.1-2,8.2,2,8.3c3.9,0.1,10.7-0.9,12.4-3.9
								C497.5,110.2,498.2,101.9,494.6,100.9z"
                        />
                      </g>
                      <g>
                        <path
                          d="M505.2,124.2c6.3,0.7,10.7-0.3,15-2.3c6.7-3,11.1-9.9,2.5-15.7c-6.3-4.3-8.8-6.3-10.1-9.7
								c-1.1-3,0.9-8-2.4-11.2c-2.1-2.1-9.4-1.1-11.7,6c-2.5,7.8,7.7,10.4,0.4,23.2C495.1,121.1,500.6,123.6,505.2,124.2z"
                        />
                      </g>
                      <g>
                        <path
                          d="M1010.6,179c10.8-14.7,19.3,20.5,31.9,15.1c11.6-4.9-5.9-33.8,6-43.7c36.5-30.1,68.3-32.1,78.4-55.1
								c20.7-47.2-31.4-48.9-31.4-48.9c-71.3-7.7-214.7-19-238.3-23.8c-23.6-4.8-36.5-12.4-65.5-1.5c-29.1,10.9-45.9,17.3-77.7,25.8
								c-15.7,4.2-35.7,5.6-51.7,4.5c-14.9-1-62.6-33.2-92.4-4.1C555.1,61.9,533,74,541.3,83.9c8.5,10.2,14.2,11,20.1,10.5
								c14.3-1.3,43.7-35.8,43.7-8.6c0,11-15.3,20.4-38.1,19.1c-3.9-0.2-10,0.8-15.6,0.3c-13.2-1.1-23.2,15.8-28.6,19.5
								c-5.4,3.6-20.3,6.3-21.8,9.1c-3.5,6.4,22.6,28.3-3.3,22.1c-25.1-6-18,14.4-19.9,19.3c-1.2,3.1,0.4,9.7,7.3,9.4
								c4.5-0.1,3.3,4.1,3.5,6l0.5,3.9c0.1,1.1,0,2.1-0.5,3.1c0,0,0,0,0,0c-0.6,1.2-1.7,2.1-2.8,2.7c-17.5,9.2-33.5,23.5-40.7,45.8
								c-20.3,62.4,19.2,89.3,60.8,86.2c41.5-3.1,69,25.8,58.5,92.4s50.8,113.6,74.8,73.4s21.4-52.2,35.6-62.8c14.3-10.5,16.2-23,5.5-53.5
								c-10.7-30.5,40.7-40.7,44.6-57.6c3.9-16.9-12.7-14.8-26-26.5c-13.3-11.7-53.2-71.3-44.5-69.4c8.7,1.9,39,50.8,40.7,55.3
								c1.7,4.5,17.4,12.4,30.2,4.2s64.2-30.3,20.1-47.9s-29-25.8-13.1-17c15.9,8.8,50.8,15.5,56.3,16.3c5.5,0.8,28.3,7.7,37.1,37.6
								c8.9,29.9,25.2,59.6,35.8,26.4s29.9-54.9,47.1-44.7c9.9,5.8,14.4,20.2,17.7,30.9c8.6,27.6,24.8,57.8,39.3,59.3
								c15.2,1.5-4.3-62.5,6-78c7.1-10.7,13.4-12.3,32.7-18C1066.3,234.7,996.1,198.8,1010.6,179z M634.3,211.7c-41.3-3.7-76,2-78.4-12.9
								v0c-1.4-8.7-9.1-14.8-17.6-13.8c-8.7,1-20.3,3.1-32.5,7c-3.2,1-6.5,1.1-9.7,0.3c-1-0.3-1.8-0.6-2.4-1c-0.8-0.6-0.8-1.4-0.5-2.1
								c0.4-0.9,1.2-1.4,2.1-1.6c1.6-0.3,3.3-0.8,5.2-1.7c6.5-2.9,11.1-7.5,14.7-12c4.8-6,14.2-13.3,23.6-16.3c6.8-2.2,11.3-2.1,18.5,0.8
								c4.5,1.8,7.4,3.9,10.9,8.2c5.6,6.9,8.8,14,13,12.2c6.3-2.7-9-23.6-4.2-24.9c9.7-2.6,17.2,27.3,26.3,31.3c8.2,3.5,6.4-12.1,12-12.5
								c5.8-0.4,8.3,17,18.4,15c7-1.3,22.2,1,25.6,7.4C663.8,203.4,660.7,214,634.3,211.7z"
                        />
                      </g>
                      <g>
                        <path
                          d="M1075.8,416.5c6.3-5.2,14.9-6.2,22.2-2.8c8.4,4,18.8,8,23.4,4.9c20.7-13.5,37.9,53.6,35.3,67.9
								c-2.6,14.4-25.6,30.3-44.8,43.6c-19.1,13.3-31.4-11.9-46.2-26.5s-56.4,11-60.2,12.4c-3.8,1.3-16.2-0.9-14.9-8.4s0.9-24.1,1.9-39.4
								c1-15.4,28.6-21.1,42.9-30.3c9.4-6.1,11.9-14.8,18.2-17.1C1059.1,418.9,1071.3,420.2,1075.8,416.5L1075.8,416.5z"
                        />
                      </g>
                    </svg>

                    <svg
                      viewBox="0 0 1250 620"
                      className="map-svg"
                      data-activecountries='["portugal","espanha","franca","dinamarca","luxemburgo","belgica","inglaterra","eua","holanda","suecia","noruega","finlandia","italia","tunisia","kuwait","dubai","oma","qatar","azerbaijao","arabia_saudita"]'
                    >
                      <path
                        className="map"
                        d="M730.3,425.2c-4.5,34.2-20,48.9-26.9,45c-6.9-3.9-4.5-12.5-2.4-17.8c2.4-6.2,1.3-14.6,1.2-17.3  c-0.1-2.6,2.5-11.4,9.5-10.1c4.7,0.8,6.3-3.6,8.3-6.8c0.8-1.3,3.5-3.2,4-4.6C726.4,406.7,732.3,409.9,730.3,425.2z M213.1,226.1 c25.6-5.9,28.2-46.8,61.4-70c10.2-7.1,23.3-12.6,36.2-16.8c35.4-11.5,57.1-48.8,50-86.7c-0.1-0.6-0.2-1.2-0.3-1.8 C352.8,12,265.8,8,220.3,28.4s-98.2,12.7-114.2,9.1c0,0-33.7-11.1-74.4,11.7C6.3,63.5,7.2,72.3,11.4,76.9c2.6,2.8,6.5,3.9,10.1,3  c7.9-1.9,26.6-5.5,38.8-1.1c15.9,5.7,24.1,25.9,8.2,71.6S83.1,218,83.1,218s18.4,21.3,19.4,42.5c0.8,15.6,24.3,19.5,38.9,19.1 c14.6-0.4,22.6,7.7,28.4,18.9c5.8,11.2,7.8,14.1,12.2,17.6c4.4,3.5,14.4,4.5,20,0.5c2.1-1.5,11-3.8,12.4,2c3,12.6-0.2,17.5-8.9,32 s10,53,10,53s0.5,11.9,18.9,24.1s18.7,16.9,21.5,59.7c2.8,42.3,4.3,105.7,55.6,121.4c1.6,0.5,3.4,0,4.6-1.3 c8-9.8-35.2-41.1,5.3-80.5c43.5-42.4,26.5-48.8,45-65.4s18.5-25.2,20.7-43.9c2.2-18.7,45.4-32.5-20.2-52.6c0,0-29.9-9.4-38.9-33.2 s-72.8-44.7-102.8-21.2c-5.5,4.5-10.6-8.4-19.1-3.9c-9.1,4.8-13.2-7.5-12.5-19.3c0.9-14.5-13.6-0.9-18.9-7.4  c-4-4.9,1.7-12.9,2.3-18.5c0.7-7.8-8.3-12.1-14.7-5.9c-22,21.2-36.5-20-13.4-32.6S187.6,232,213.1,226.1z M1148.3,374.7 c20.6,9.5,13.5,27,4,22.3s-15.2-2.1-21.4-0.5c-6.2,1.6-12.3-12.4-15.5-15.2c-12.7-11.2-26.4-11.3-27.7-22.1 c-1.8-15.2,39.9,5.9,39.9,5.9S1127.7,365.2,1148.3,374.7z M1080.2,415.3c6.4-5.2,15-6.3,22.4-2.8c8.5,4,19,8,23.6,5 c20.8-13.6,38.2,54,35.5,68.5c-2.6,14.5-25.8,30.5-45.1,44s-31.7-12-46.6-26.7c-14.9-14.7-56.8,11.1-60.6,12.5  c-3.8,1.4-16.3-0.9-15-8.5c1.3-7.6,1-24.2,1.9-39.7c1-15.5,28.8-21.2,43.2-30.5c9.5-6.1,12-14.9,18.4-17.2  C1063.4,417.7,1075.7,419,1080.2,415.3L1080.2,415.3z M498.8,110.8c7.4-12.9-3-15.5-0.4-23.4c2.3-7.1,9.6-8.1,11.8-6  c3.3,3.2,1.3,8.4,2.4,11.3c1.3,3.5,3.8,5.5,10.2,9.8c8.7,5.8,4.3,12.7-2.5,15.8c-4.3,2-8.8,3-15.1,2.3  C500.5,120,494.9,117.5,498.8,110.8z M1014.5,175.8c10.8-14.8,19.4,20.7,32.1,15.3c11.7-5-6-34.1,6.1-44  c36.8-30.3,68.8-32.3,79-55.5c20.8-47.6-31.6-49.2-31.6-49.2c-71.8-7.8-216.4-19.1-240.2-23.9c-23.8-4.8-36.8-12.5-66-1.6 c-29.3,11-46.2,17.4-78.3,26c-15.8,4.2-35.9,5.6-52.1,4.6c-15-1-63.1-33.5-93.1-4.1C555.4,57.9,533.2,70,541.5,80 c8.6,10.3,14.3,11.1,20.2,10.6c14.4-1.3,44-36,44-8.7c0,11.1-15.4,20.6-38.4,19.3c-3.9-0.2-10,0.8-15.7,0.3 c-13.3-1.1-23.4,16-28.8,19.6c-5.4,3.6-20.5,6.3-22,9.2c-3.5,6.4,22.7,28.5-3.3,22.2c-25.3-6.1-18.2,14.5-20,19.5 c-1.2,3.1,0.5,9.7,7.4,9.5c4.5-0.1,3.3,4.1,3.5,6l0.5,3.9c0.1,1.1,0,2.1-0.5,3.1c0,0,0,0,0,0c-0.6,1.2-1.7,2.1-2.9,2.7  c-17.6,9.3-33.7,23.7-41.1,46.2c-20.5,62.9,19.4,90,61.2,86.8s69.5,26,59,93.1c-10.5,67.1,51.2,114.5,75.4,74 c24.1-40.5,21.5-52.7,35.9-63.3s16.3-23.2,5.6-53.9c-10.8-30.7,41-41,44.9-58c3.9-17-12.8-14.9-26.2-26.7 c-13.4-11.8-53.7-71.9-44.9-70c8.8,1.9,39.4,51.2,41,55.7s17.5,12.5,30.5,4.3s64.7-30.5,20.3-48.3s-29.2-26-13.2-17.2 c16.1,8.9,51.2,15.6,56.7,16.4c5.6,0.8,28.5,7.8,37.4,37.9c8.9,30.1,25.4,60.1,36.1,26.6c10.7-33.5,30.2-55.3,47.4-45.1 c9.9,5.9,14.5,20.4,17.9,31.2c8.6,27.8,25,58.3,39.7,59.8c15.3,1.6-4.3-63,6.1-78.7c7.1-10.8,13.5-12.4,32.9-18.1 C1070.6,232,999.9,195.8,1014.5,175.8z M635.2,208.8c-41.6-3.7-76.6,2-79-13v0c-1.4-8.8-9.2-14.9-17.7-13.9 c-8.8,1-20.5,3.1-32.7,7.1c-3.2,1-6.6,1.2-9.8,0.3c-1-0.3-1.9-0.6-2.4-1.1c-0.8-0.6-0.8-1.4-0.5-2.1c0.4-0.9,1.2-1.5,2.1-1.6  c1.6-0.3,3.4-0.8,5.2-1.7c6.5-2.9,11.2-7.5,14.8-12.1c4.8-6.1,14.3-13.4,23.8-16.4c6.8-2.2,10.3-3,12.8-2.4 c4.8,1.1,6.4,8.2,11.1,11.3c15.7,10.5,15,16.3,18.3,15.9c5.5-0.7-0.2-6.8,1.6-8.5c1.9-1.9,5.1,1.9,5.8-1c1-4-34.3-21-21.9-21.9  c10.1-0.8,34,33.8,43.2,37.8c8.3,3.6,2.9-17.1,8.4-17.5c5.9-0.4,6.3,18.5,16.5,16.6c7-1.3,22.3,1,25.8,7.5  C665,200.5,661.8,211.1,635.2,208.8z M1177.6,568.5c0,0-15.2-0.9,4.8-11.5c20-10.7,25.2-14.6,25.2-14.6s12.7-0.7-1.7,8.8  S1177.6,568.5,1177.6,568.5z M1217.4,543c-0.1-0.8,0.1-1.6,0.4-2.4c0.6-1.5,1.9-4.4,4.7-6.9c3.9-3.6,6.1-7.9,6-13.2 c-0.1-4.3,1.9-7.6,4.5-1.4s2.9,9.5,5.6,9.7c2.6,0.3,4.5,4.9-2.9,7.9C1228.7,539.7,1217.9,549.5,1217.4,543z M495.6,109.5  c-1.7,3-8.6,4-12.5,3.9c-4.1-0.1-3.7-4.2-2-8.4s8.4-9.2,13.3-7.9C498.1,98.1,497.3,106.5,495.6,109.5z M1096.7,189.4  c-8.8,17.8-34,30.2-37.6,17.8c-4.6-15.9,12.4-16.8,20.7-29.2c7.9-11.8-6.4-27.2,4.3-36.2C1092.8,134.6,1106.9,168.8,1096.7,189.4z M977.5,367.2c6.9,5.7,20.8,13.8,32,18.2c9.2,3.7,14.6,11,0,9.8c-47.4-3.9-69.6-45.5-66.1-53.4C946.7,334.5,963.3,355.4,977.5,367.2  z M1031.7,361.9c0,8-2.9,11.6-20.2,9.6c-19.2-2.1-23.3-17.8-18.7-27.8c3.3-7.1,15.3-4.7,25.7,1.6 C1030.2,352.5,1031.7,356.9,1031.7,361.9z"
                      />
                      <path
                        id="inglaterra"
                        className="point js-tooltip"
                        d="M512.7,103.2c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8  C507,105.8,509.6,103.2,512.7,103.2z"
                        title="United Kingdom"
                      />
                      <path
                        id="franca"
                        className="point js-tooltip"
                        d="M520.3,137.7c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8  C514.5,140.3,517.1,137.7,520.3,137.7z"
                        title="France"
                      />
                      <path
                        id="portugal"
                        className="point js-tooltip"
                        d="M482,163.8c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8  C476.3,166.4,478.8,163.8,482,163.8z"
                        title="Portugal"
                      />
                      <path
                        id="espanha"
                        className="point js-tooltip"
                        d="M497.5,158.8c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8s-5.8-2.6-5.8-5.8 C491.7,161.4,494.3,158.8,497.5,158.8z"
                        title="Spain"
                      />
                      <path
                        id="dubai"
                        className="point js-tooltip"
                        d="M751.6,239.3c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8 C745.9,241.8,748.4,239.3,751.6,239.3z"
                        title="Dubai"
                      />
                      <path
                        id="arabia_saudita"
                        className="point js-tooltip"
                        d="M706.7,243.9c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8 C700.9,246.5,703.5,243.9,706.7,243.9z"
                        title="Saudi Arabia"
                      />
                      <path
                        id="qatar"
                        className="point js-tooltip"
                        d="M736.1,232.8c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8 C730.4,235.3,732.9,232.8,736.1,232.8z"
                        title="Qatar"
                      />
                      <path
                        id="oma"
                        className="point js-tooltip"
                        d="M755.6,253.4c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8 C749.9,256,752.4,253.4,755.6,253.4z"
                        title="Oman"
                      />
                      <path
                        id="kuwait"
                        className="point js-tooltip"
                        d="M709.4,213.9c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8  C703.7,216.5,706.3,213.9,709.4,213.9z"
                        title="Kuwait"
                      />
                      <path
                        id="azerbaijao"
                        className="point js-tooltip"
                        d="M710.5,165.5c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8  C704.7,168.1,707.3,165.5,710.5,165.5z"
                        title="Azerbaijan"
                      />
                      <path
                        id="tunisia"
                        className="point js-tooltip"
                        d="M549.6,194.5c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8 C543.8,197,546.4,194.5,549.6,194.5z"
                        title="Tunisia"
                      />
                      <path
                        id="italia"
                        className="point js-tooltip"
                        d="M572,158c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8  C566.3,160.6,568.8,158,572,158z"
                        title="Italy"
                      />
                      <path
                        id="suecia"
                        className="point js-tooltip"
                        d="M577.8,65.7c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8 C572,68.3,574.6,65.7,577.8,65.7z"
                        title="Sweden"
                      />
                      <path
                        id="finlandia"
                        className="point js-tooltip"
                        d="M617,74.6c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8  C611.3,77.2,613.9,74.6,617,74.6z"
                        title="Finland"
                      />
                      <path
                        id="noruega"
                        className="point js-tooltip"
                        d="M553.2,67.2c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8  C547.4,69.8,550,67.2,553.2,67.2z"
                        title="Norway"
                      />
                      <path
                        id="dinamarca"
                        className="point js-tooltip"
                        d="M552,99.8c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8  C546.3,102.4,548.9,99.8,552,99.8z"
                        title="Denmark"
                      />
                      <path
                        id="luxemburgo"
                        className="point js-tooltip"
                        d="M539.2,127.9c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8  C533.4,130.5,536,127.9,539.2,127.9z"
                        title="Luxembourg"
                      />
                      <path
                        id="holanda"
                        className="point js-tooltip"
                        d="M539.2,108.1c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8 C533.4,110.6,536,108.1,539.2,108.1z"
                        title="Netherlands"
                      />
                      <path
                        id="belgica"
                        className="point js-tooltip"
                        d="M528.5,119.1c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8 C522.7,121.7,525.3,119.1,528.5,119.1z"
                        title="Belgium"
                      />
                      <path
                        id="eua"
                        className="point js-tooltip"
                        d="M144.1,174c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.2,0-5.8-2.6-5.8-5.8 C138.3,176.6,140.9,174,144.1,174z"
                        title="USA"
                      />
                    </svg>
                  </div>
                </section>
                {/* we-do*/}

                <section className="company-numbers">
                  <div className="row expanded align-center">
                    <div className="xxlarge-5 medium-5 small-14 text-center">
                      <div className="number-container">
                        <h2>
                          <span className="statistics">135</span>
                          <sup>+</sup>
                        </h2>
                        <span className="statistic-title">ACTIVE CLIENTS</span>
                      </div>
                    </div>
                    <div className="xxlarge-5 medium-5 small-14 text-center">
                      <div className="number-container">
                        <h2>
                          <span className="statistics">9</span>
                          <sup>+</sup>
                        </h2>
                        <span className="statistic-title">YEARS OF EXPERIENCE</span>
                      </div>
                    </div>
                    <div className="xxlarge-5 medium-5 small-14 text-center">
                      <div className="number-container">
                        <h2>
                          <span className="statistics">370</span>
                          <sup>+</sup>
                        </h2>
                        <span className="statistic-title">PLAYERS</span>
                      </div>
                    </div>
                  </div>
                </section>
                {/*  company-numbers */}

                <section className="form-container container">
                  <div className="rotate-title">
                    <h4>Get in Touch</h4>
                  </div>
                  <div className="row expanded">
                    <div className="xxlarge-4 xxlarge-offset-3 medium-6 medium-offset-1 xsmall-14 columns meta-title-wrapper">
                      <div
                        className="morphing-letter"
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
                                className="mask"
                                fill="white"
                                d="M666.6,392c158,157.8-4.3,304.3-210.8,304.3S82,552.5,82,375.2C82,161.4,249.5,46.7,455.8,54.1 c132.9,4.7,197.2,78,212.6,124.4C702.4,280.8,596.4,321.9,666.6,392z"
                              />
                            </mask>

                            <text
                              id="contactText"
                              x="575"
                              y="348"
                              font-size="100"
                              letter-spacing="-4px"
                              font-weight="bold"
                              text-anchor="middle"
                            >
                              Contact us{" "}
                            </text>
                          </defs>

                          <path
                            className="letter shadow-letter"
                            filter="url(#contactFilter)"
                            fill="rgba(191, 0, 0, .5)"
                            d="M666.6,392c158,157.8-4.3,304.3-210.8,304.3S82,552.5,82,375.2C82,161.4,249.5,46.7,455.8,54.1 c132.9,4.7,197.2,78,212.6,124.4C702.4,280.8,596.4,321.9,666.6,392z"
                          />
                          <path
                            className="letter main-letter"
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

                        <h3 className="subtitle js-text-element">
                          Let’s cut the distance today.
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="row expanded">
                    <div className="xxlarge-10 xxlarge-offset-4 medium-12 medium-offset-2 small-14 small-offset-1 columns">
                      <div className="xxlarge-16 columns">
                        <div className="form-options">
                          <span>I want to</span>
                          <ul>
                            <li
                              className="active"
                              data-target="know-about-affinity"
                            >
                              <button className="elastic-btn">
                                <svg viewBox="0 0 292.44 65">
                                  <path
                                    className="morph-bg"
                                    d="M.16,35.3C2.25,61.2,18.64,65,40.47,65h220c21.83-.1,32-14.7,32-32.5S282.2.1,260.48,0h-220C16.76,0-1.93,7.5.16,35.3Z"
                                    data-hover="M9.49,35.3c2,25.9,15.6,25.7,36.6,25.7h211.5c20.9-.1,28.6-10.7,28.6-28.5S278.19,4,257.49,4H46C23.29,4,7.49,7.5,9.49,35.3Z"
                                  />
                                </svg>
                                <span className="text">
                                  Know more about Affinity
                                </span>
                              </button>
                            </li>
                            <li data-target="affinity-player">
                              <button className="elastic-btn">
                                <svg viewBox="0 0 292.44 65">
                                  <path
                                    className="morph-bg"
                                    d="M.16,35.3C2.25,61.2,18.64,65,40.47,65h220c21.83-.1,32-14.7,32-32.5S282.2.1,260.48,0h-220C16.76,0-1.93,7.5.16,35.3Z"
                                    data-hover="M9.49,35.3c2,25.9,15.6,25.7,36.6,25.7h211.5c20.9-.1,28.6-10.7,28.6-28.5S278.19,4,257.49,4H46C23.29,4,7.49,7.5,9.49,35.3Z"
                                  />
                                </svg>
                                <span className="text">
                                  Become an affinity player
                                </span>
                              </button>
                            </li>
                            <li data-target="start-project">
                              <button className="elastic-btn">
                                <svg viewBox="0 0 292.44 65">
                                  <path
                                    className="morph-bg"
                                    d="M.16,35.3C2.25,61.2,18.64,65,40.47,65h220c21.83-.1,32-14.7,32-32.5S282.2.1,260.48,0h-220C16.76,0-1.93,7.5.16,35.3Z"
                                    data-hover="M9.49,35.3c2,25.9,15.6,25.7,36.6,25.7h211.5c20.9-.1,28.6-10.7,28.6-28.5S278.19,4,257.49,4H46C23.29,4,7.49,7.5,9.49,35.3Z"
                                  />
                                </svg>
                                <span className="text">Start a project</span>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <form
                        action="https://affinity.pt/"
                        method="post"
                        className="row contact-form xsmall-collapse"
                        data-type="know-about-affinity"
                        enctype="multipart/form-data"
                      >
                        <input
                          type="hidden"
                          id="affinity_nonce"
                          name="affinity_nonce"
                          value="7904a8c66c"
                        />
                        <input
                          type="hidden"
                          name="_wp_http_referer"
                          value="/en/contacts/"
                        />{" "}
                        <input
                          type="hidden"
                          value="en"
                          name="language"
                          id="language"
                        />
                        <input
                          type="hidden"
                          value="marketing@affinity.pt"
                          name="mail_to"
                          id="mail-to"
                        />
                        <div className="xxlarge-5 small-16 columns">
                          <div className="input-area">
                            <label for="name">Name</label>
                            <div className="wrapper-input input">
                              <input
                                type="text"
                                className="form-input text name required visible"
                                name="name"
                                id="name"
                                autocomplete="off"
                              />
                            </div>
                          </div>

                          <div className="input-area">
                            <label for="email">E-mail</label>
                            <div className="wrapper-input input">
                              <input
                                type="text"
                                className="form-input email required visible"
                                id="email"
                                name="email"
                                autocomplete="off"
                              />
                            </div>
                          </div>
                          <div className="input-area">
                            <label for="phone">Phone</label>
                            <div className="wrapper-input input">
                              <input
                                type="text"
                                className="form-input phone no-value required visible"
                                id="phone"
                                maxlength="20"
                                name="phone"
                                autocomplete="off"
                              />
                            </div>
                          </div>

                          <div className="input-area affinity-player">
                            <label for="linkedin">LinkedIn Profile</label>
                            <div className="wrapper-input input">
                              <input
                                type="text"
                                className="form-input linkedin"
                                id="linkedin"
                                name="linkedin"
                                autocomplete="off"
                              />
                            </div>
                          </div>

                          <div className="input-area start-project">
                            <label for="company">Company Name</label>
                            <div className="wrapper-input input">
                              <input
                                type="text"
                                className="form-input company"
                                id="company"
                                name="company"
                                autocomplete="off"
                              />
                            </div>
                          </div>

                          <div className="input-area start-project">
                            <label for="collaborators">
                              Number of Employees
                            </label>
                            <div className="wrapper-input input">
                              <input
                                type="text"
                                className="form-input collaborators"
                                id="collaborators"
                                name="collaborators"
                                autocomplete="off"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="xxlarge-11 small-16 columns mt-negative pos-rel">
                          <div className="project-management start-project">
                            <span className="label">
                              Preferred Project Management
                            </span>
                            <ul className="options-main-wrapper">
                              <li className="option-wrapper" data-city="Porto">
                                <svg className="check" viewBox="0 0 34 34">
                                  <path
                                    className="stroke"
                                    d="M18.8 5.1C28 5.1 29 13.4 29 17s-1 11.9-10.2 11.9c-9.1 0-13.1-1.5-13.7-10.8-.3-4.4.5-7.6 2.4-9.6 2-2.3 5.9-3.4 11.3-3.4m0-4C8.4 1.1.2 4.8 1.1 18.4 2 31.1 9.2 32.9 18.8 32.9S33 25.8 33 17 28.4 1.1 18.8 1.1z"
                                  />
                                  <path
                                    className="full"
                                    d="M1.1 18.4C2 31.1 9.2 32.9 18.8 32.9S33 25.8 33 17 28.4 1.1 18.8 1.1C8.4 1.1.2 4.8 1.1 18.4z"
                                  />
                                  <path
                                    className="dash"
                                    d="M9.7 17l5.9 5 8.1-12.1"
                                  />
                                </svg>
                                <span className="option">Oporto</span>
                              </li>
                              <li className="option-wrapper" data-city="Lisboa">
                                <svg className="check" viewBox="0 0 34 34">
                                  <path
                                    className="stroke"
                                    d="M18.8 5.1C28 5.1 29 13.4 29 17s-1 11.9-10.2 11.9c-9.1 0-13.1-1.5-13.7-10.8-.3-4.4.5-7.6 2.4-9.6 2-2.3 5.9-3.4 11.3-3.4m0-4C8.4 1.1.2 4.8 1.1 18.4 2 31.1 9.2 32.9 18.8 32.9S33 25.8 33 17 28.4 1.1 18.8 1.1z"
                                  />
                                  <path
                                    className="full"
                                    d="M1.1 18.4C2 31.1 9.2 32.9 18.8 32.9S33 25.8 33 17 28.4 1.1 18.8 1.1C8.4 1.1.2 4.8 1.1 18.4z"
                                  />
                                  <path
                                    className="dash"
                                    d="M9.7 17l5.9 5 8.1-12.1"
                                  />
                                </svg>
                                <span className="option">Lisbon</span>
                              </li>
                              <li className="option-wrapper" data-city="Leiria">
                                <svg className="check" viewBox="0 0 34 34">
                                  <path
                                    className="stroke"
                                    d="M18.8 5.1C28 5.1 29 13.4 29 17s-1 11.9-10.2 11.9c-9.1 0-13.1-1.5-13.7-10.8-.3-4.4.5-7.6 2.4-9.6 2-2.3 5.9-3.4 11.3-3.4m0-4C8.4 1.1.2 4.8 1.1 18.4 2 31.1 9.2 32.9 18.8 32.9S33 25.8 33 17 28.4 1.1 18.8 1.1z"
                                  />
                                  <path
                                    className="full"
                                    d="M1.1 18.4C2 31.1 9.2 32.9 18.8 32.9S33 25.8 33 17 28.4 1.1 18.8 1.1C8.4 1.1.2 4.8 1.1 18.4z"
                                  />
                                  <path
                                    className="dash"
                                    d="M9.7 17l5.9 5 8.1-12.1"
                                  />
                                </svg>
                                <span className="option">Leiria</span>
                              </li>
                            </ul>
                          </div>

                          <div className="attach-cv start-project affinity-player">
                            <span className="label affinity-player">Attach CV</span>
                            <span className="label start-project">
                              Something you would like us to know? Upload your
                              files
                            </span>
                            <div className="file-container">
                              <label for="file-upload">
                                <button className="elastic-btn">
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
                                <span>
                                  Max. file size 5mb. Allowed format: PDF
                                </span>
                              </label>
                              <input
                                type="file"
                                id="file-upload"
                                name="fileUpload"
                                multiple
                                accept=".pdf"
                              />
                            </div>
                          </div>

                          <div className="input-area input">
                            <label for="message">Message</label>
                            <div className="wrapper-input">
                              <textarea
                                className="form-input textarea visible"
                                id="message"
                                name="message"
                                autocomplete="off"
                              ></textarea>
                            </div>
                          </div>

                          {/*  <div className="know-about-affinity">
									<span className="label">Download our e-brochure</span>
									<a href="" download target="_blank">
										<button className="elastic-btn">
											<svg viewBox="0 0 74 70">
												<path className="morph-bg" d="M.9 37.9C2.9 65 19.3 69 41.1 69 63 69 73.2 53.8 73.2 35S63 1 41.1 1C17.5 1-1.2 8.8.9 37.9z" data-hover="M1.9 37.9C3.9 65 19.3 66 41.1 66 63 66 72.2 53.8 72.2 35S63 4 41.1 4C17.5 4-.2 8.8 1.9 37.9z" data-original="M.9 37.9C2.9 65 19.3 69 41.1 69 63 69 73.2 53.8 73.2 35S63 1 41.1 1C17.5 1-1.2 8.8.9 37.9z"></path>
											</svg>
											<svg viewBox="0 0 62.39 61.12" className="arrow">
												<path d="M4.29,35.73A73.4,73.4,0,0,0,27.84,56.3a7.26,7.26,0,0,0,6.71,0A73.4,73.4,0,0,0,58.1,35.73c.56-.8.25-2.17-.52-2.13-1.38.09-8.61.14-10,.2a1.17,1.17,0,0,1-1.06-1.3A179.83,179.83,0,0,0,44.93,7.2a3.86,3.86,0,0,0-3.75-2.95c-10.55-.33-9.43-.33-20,0a3.87,3.87,0,0,0-3.74,2.94A177,177,0,0,0,15.87,32.5a1.18,1.18,0,0,1-1.07,1.3c-1.38-.06-8.61-.11-10-.2C4,33.56,3.72,34.93,4.29,35.73Z"/>
											</svg>
										</button>
									</a>
									<span className="label">What means to become an Affinity Player?</span>
									<a href="" download target="_blank">
										<button className="elastic-btn">
											<svg viewBox="0 0 74 70">
												<path className="morph-bg" d="M.9 37.9C2.9 65 19.3 69 41.1 69 63 69 73.2 53.8 73.2 35S63 1 41.1 1C17.5 1-1.2 8.8.9 37.9z" data-hover="M1.9 37.9C3.9 65 19.3 66 41.1 66 63 66 72.2 53.8 72.2 35S63 4 41.1 4C17.5 4-.2 8.8 1.9 37.9z" data-original="M.9 37.9C2.9 65 19.3 69 41.1 69 63 69 73.2 53.8 73.2 35S63 1 41.1 1C17.5 1-1.2 8.8.9 37.9z"></path>
											</svg>
											<svg viewBox="0 0 62.39 61.12" className="arrow">
												<path d="M4.29,35.73A73.4,73.4,0,0,0,27.84,56.3a7.26,7.26,0,0,0,6.71,0A73.4,73.4,0,0,0,58.1,35.73c.56-.8.25-2.17-.52-2.13-1.38.09-8.61.14-10,.2a1.17,1.17,0,0,1-1.06-1.3A179.83,179.83,0,0,0,44.93,7.2a3.86,3.86,0,0,0-3.75-2.95c-10.55-.33-9.43-.33-20,0a3.87,3.87,0,0,0-3.74,2.94A177,177,0,0,0,15.87,32.5a1.18,1.18,0,0,1-1.07,1.3c-1.38-.06-8.61-.11-10-.2C4,33.56,3.72,34.93,4.29,35.73Z"/>
											</svg>
										</button>
									</a>
								</div> */}
                          {/*  
								<div className="affinity-player">
									<span className="label">What means to become an Affinity Player?</span>
									<a href="" download target="_blank">
										<button className="elastic-btn">
											<svg viewBox="0 0 74 70">
												<path className="morph-bg" d="M.9 37.9C2.9 65 19.3 69 41.1 69 63 69 73.2 53.8 73.2 35S63 1 41.1 1C17.5 1-1.2 8.8.9 37.9z" data-hover="M1.9 37.9C3.9 65 19.3 66 41.1 66 63 66 72.2 53.8 72.2 35S63 4 41.1 4C17.5 4-.2 8.8 1.9 37.9z" data-original="M.9 37.9C2.9 65 19.3 69 41.1 69 63 69 73.2 53.8 73.2 35S63 1 41.1 1C17.5 1-1.2 8.8.9 37.9z"></path>
											</svg>
											<svg viewBox="0 0 62.39 61.12" className="arrow">
												<path d="M4.29,35.73A73.4,73.4,0,0,0,27.84,56.3a7.26,7.26,0,0,0,6.71,0A73.4,73.4,0,0,0,58.1,35.73c.56-.8.25-2.17-.52-2.13-1.38.09-8.61.14-10,.2a1.17,1.17,0,0,1-1.06-1.3A179.83,179.83,0,0,0,44.93,7.2a3.86,3.86,0,0,0-3.75-2.95c-10.55-.33-9.43-.33-20,0a3.87,3.87,0,0,0-3.74,2.94A177,177,0,0,0,15.87,32.5a1.18,1.18,0,0,1-1.07,1.3c-1.38-.06-8.61-.11-10-.2C4,33.56,3.72,34.93,4.29,35.73Z"/>
											</svg>
										</button>
									</a>
								</div> */}

                          {/*  <div className="start-project">
									<span className="label">Download our e-brochure</span>
									<a href="" download target="_blank">
										<button className="elastic-btn">
											<svg viewBox="0 0 74 70">
												<path className="morph-bg" d="M.9 37.9C2.9 65 19.3 69 41.1 69 63 69 73.2 53.8 73.2 35S63 1 41.1 1C17.5 1-1.2 8.8.9 37.9z" data-hover="M1.9 37.9C3.9 65 19.3 66 41.1 66 63 66 72.2 53.8 72.2 35S63 4 41.1 4C17.5 4-.2 8.8 1.9 37.9z" data-original="M.9 37.9C2.9 65 19.3 69 41.1 69 63 69 73.2 53.8 73.2 35S63 1 41.1 1C17.5 1-1.2 8.8.9 37.9z"></path>
											</svg>
											<svg viewBox="0 0 62.39 61.12" className="arrow">
												<path d="M4.29,35.73A73.4,73.4,0,0,0,27.84,56.3a7.26,7.26,0,0,0,6.71,0A73.4,73.4,0,0,0,58.1,35.73c.56-.8.25-2.17-.52-2.13-1.38.09-8.61.14-10,.2a1.17,1.17,0,0,1-1.06-1.3A179.83,179.83,0,0,0,44.93,7.2a3.86,3.86,0,0,0-3.75-2.95c-10.55-.33-9.43-.33-20,0a3.87,3.87,0,0,0-3.74,2.94A177,177,0,0,0,15.87,32.5a1.18,1.18,0,0,1-1.07,1.3c-1.38-.06-8.61-.11-10-.2C4,33.56,3.72,34.93,4.29,35.73Z"/>
											</svg>
										</button>
									</a>
								</div> */}

                          <div className="rgpd-wrapper">
                            <svg
                              x="0"
                              y="0"
                              viewBox="0 0 21.1 18.1"
                              space="preserve"
                              enable-background="new 0 0 21.1 18.1"
                            >
                              {/* <style type="text/css">
                                        .st0 {
                                            fill-rule: evenodd;
                                            clip-rule: evenodd;
                                            fill: none;
                                            stroke: #9fa6b6;
                                            stroke-width: 3;
                                            stroke-miterlimit: 10;
                                        }
                                        </style> */}
                              <path
                                className="st0"
                                d="M1 11l6 5L20 1"
                                style={{
                                  fillRule: "evenodd",
                                  clipRule: "evenodd",
                                  fill: "none",
                                  stroke: "#9fa6b6",
                                  strokeWidth: 3,
                                  strokeMiterlimit: 10,
                                }}
                              ></path>
                            </svg>
                            {/*  <input id="rgpd-check" type="checkbox">   */}
                            <span className="rgpd-text">
                              I accept the processing of my{" "}
                              <a
                                href="../privacy-policy/index.html"
                                target="_blank"
                              >
                                personal data
                              </a>
                            </span>
                            <input
                              type="text"
                              className="hidden check-policy required"
                            />
                          </div>

                          <button type="submit" className="elastic-btn">
                            <svg viewBox="0 0 196 66">
                              <path
                                className="morph-bg"
                                d="M1.3 35.8c2 25.9 17.7 29.7 38.6 29.7h124.5C185.3 65.4 195 50.8 195 33S185.2.6 164.4.5H39.9C17.2.5-.7 8 1.3 35.8z"
                                data-hover="M3.3 35.8c2 25.9 15.6 25.7 36.6 25.7h124.5C185.3 61.4 193 50.8 193 33s-8-28.5-28.7-28.5H39.8C17.1 4.5 1.3 8 3.3 35.8z"
                              />
                            </svg>
                            <span className="text">Send Message</span>

                            {/*  Loader */}
                            <div className="loader-wrapper">
                              <div className="blobs">
                                <div className="blob-center"></div>
                                <div className="blob"></div>
                                <div className="blob"></div>
                                <div className="blob"></div>
                                <div className="blob"></div>
                                <div className="blob"></div>
                                <div className="blob"></div>
                              </div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                              >
                                <defs>
                                  <filter id="goo">
                                    <feGaussianBlur
                                      in="SourceGraphic"
                                      stdDeviation="10"
                                      result="blur"
                                    />
                                    <feColorMatrix
                                      in="blur"
                                      mode="matrix"
                                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                                      result="goo"
                                    />
                                    <feBlend in="SourceGraphic" in2="goo" />
                                  </filter>
                                </defs>
                              </svg>
                            </div>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </section>
                {/*  form container */}

                <footer className="page-footer type-2">
                  <div className="rolling-letters">
                    <ul className="slides">
                      <li></li>
                      <li className="spacer">
                        <svg viewBox="0 0 710 670" className="js-letter-anime">
                          <image
                            width="1451"
                            height="1349"
                            href="/imgs/somos/footer-letters/W_shadow.png"
                            transform="translate(-370.5 -339.5)"
                            overflow="visible"
                            opacity=".25"
                          />
                          <path d="M618.6 28c160.4 36.7 59.6 475.4-3.5 541.7-89.7 94.2-197.1-73.2-269.9-45.1-69.7 27-190 194.2-277.4 24.4C20.4 457.1-58.9 38.1 95.5 38.1c55.8 0 85.3 46.7 140.5 64.2 51.5 16.3 99.8-95.7 170.6-21.4 55 57.7 118-74.3 212-52.9z" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          viewBox="0 0 590 670"
                          className="js-letter-anime e-letter"
                        >
                          <image
                            width="1326"
                            height="1366"
                            href="/imgs/somos/footer-letters/E_shadow.png"
                            transform="translate(-368.094 -348)"
                            overflow="visible"
                            opacity=".25"
                          />
                          <path d="M7.6 346c0 220.1 29.1 255.7 188.7 275.6 121.4 15.2 312.6 23.9 370.8-47.3 61.9-75.9-91.6-117.9-44.6-189.5 60.4-91.9-73-103.9 9.7-191.1 56.3-59.4 87.8-176.3-255.8-176C53.6 17.9 7.6 86.7 7.6 346z" />
                        </svg>
                      </li>
                      <li className="spacer">
                        <svg
                          viewBox="0 0 720 670"
                          className="spacer js-letter-anime"
                        >
                          <image
                            width="1453"
                            height="1344"
                            href="/imgs/somos/footer-letters/A_shadow.png"
                            transform="translate(-366.5 -337.5)"
                            overflow="visible"
                            opacity=".25"
                          />
                          <path d="M709.7 522.4c21 210.7-228.3 19.3-363 19.3S8.6 697 8.6 538.6c0-188.2 203.1-510.1 337.8-510.1s343.7 296.6 363.3 493.9z" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          viewBox="0 0 620 670"
                          className="js-letter-anime r-letter"
                        >
                          <image
                            width="1350"
                            height="1361"
                            href="/imgs/somos/footer-letters/R_shadow.png"
                            transform="translate(-364.944 -335.568)"
                            overflow="visible"
                            opacity=".25"
                          />
                          <path
                            className="st0"
                            d="M188 639.6c-12.3 0-25.4-2-39.4-6.9-44.2-15.2-80.6-51.2-105.1-104.1-21.8-46.7-33.5-106-32.9-166.8.6-68.1 16.4-135 44.5-188.4C87.4 112 134.8 69.7 192.2 51.1c54.2-17.6 116.6-24.3 175.6-18.9 61.6 5.6 116.2 23.4 158 51.6 50.5 34.1 79.3 81.6 83.3 137.3 3.5 49.2-15.6 92.4-31 127.2-11.2 25.3-20.9 47.1-19 63.2 3 25.7 11.6 49.8 20 73.1 7.5 20.9 14.6 40.6 16.8 59.7 2.7 23.9-2.7 43.6-16.6 60.1-18.5 22-40.2 31.7-66.4 29.7-21.4-1.7-42.7-10.7-67.4-21.2C418 601.1 387 588 351 583.8c-25.1-2.9-47.3 9.8-73 24.5-26.2 14.9-54.9 31.3-90 31.3z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg viewBox="0 0 590 670" className="js-letter-anime">
                          <image
                            width="1326"
                            height="1366"
                            href="/imgs/somos/footer-letters/E_shadow.png"
                            transform="translate(-368.094 -348)"
                            overflow="visible"
                            opacity=".25"
                          />
                          <path d="M7.6 346c0 220.1 29.1 255.7 188.7 275.6 121.4 15.2 312.6 23.9 370.8-47.3 61.9-75.9-91.6-117.9-44.6-189.5 60.4-91.9-73-103.9 9.7-191.1 56.3-59.4 87.8-176.3-255.8-176C53.6 17.9 7.6 86.7 7.6 346z" />
                        </svg>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="../about/index.html"
                    data-remote="true"
                    data-targetClass="somos"
                    data-title="About"
                  >
                    <div className="row expanded align-center align-middle content-wrapper">
                      <div className="xxlarge-14 xxlarge-offset-2 medium-15 medium-offset-1 xsmall-14 xsmall-offset-0 columns">
                        <div className="row expanded pos-rel">
                          <div className="xxlarge-14 medium-16 columns">
                            <h3>We are</h3>
                            <h2>Affinity</h2>
                            <svg viewBox="0 0 280.5 22.5">
                              <path
                                d="M4.75,13H267c-2.51-3.65-3.76-6-3.89-9.28,5.71,5.59,13.13,8.51,22.1,11.25-9,2.62-16.06,5.83-22.1,11.25.38-3.53,1.43-5.66,4-9.54H4.75Z"
                                transform="translate(-4.75 -3.75)"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>

                  <div className="row expanded last-content-wrapper xsmall-collapse">
                    <div className="xxlarge-2 xxlarge-offset-1 medium-3 small-6 small-offset-0 xsmall-5 columns made-by">
                      <a href="../privacy-policy/index.html" target="_blank">
                        <h4>Privacy Policy </h4>{" "}
                      </a>
                      {/*  <h4>2023 &copy; Affinity</h4> */}
                    </div>
                    <div className="xxlarge-10 medium-8 small-4 xsmall-16 columns text-center">
                      <a
                        href="../index.html"
                        data-remote="true"
                        data-targetClass="home"
                        data-ajaxUrl="https://affinity.pt/en/ajax/home-ajax/?ajax-id=74"
                        data-title="Home"
                        className="link-logo-footer"
                      >
                        <svg className="main-logo" viewBox="0 0 1566.1 460.4">
                          <path d="M921 112.3c-35.5 0-56.1 19.7-71.9 41.4h-3.9l-1-36.9h-71.4c0 0 1 20.7 1 41.9v207.3h73.4V222.1c6.4-34 24.1-58.1 47.8-58.1 17.2 0 29.1 12.3 29.1 36.4v165.4h74.4v-163C998.3 133.9 959.4 112.3 921 112.3zM1047.6 116.7H1120.5V365.9H1047.6zM1083.5 4.9c-22.2 0-40.4 15.3-40.4 38.9 0 24.1 18.2 38.4 40.4 38.4 21.7 0 40.9-14.3 40.9-38.4C1124.4 20.2 1105.2 4.9 1083.5 4.9zM1496.2 116.7L1445.5 295c0 0 11.3-189.6-145.3-178.2l-34.4.7-1-77.5h-53.7l-18.2 76.8h-45.3v53.7h45.3v126.6c0 48.7 27.1 74.8 75.8 74.8 21.7 0 43.3-8.9 55.6-16.7l1-48.3c-11.8 4.4-25.6 8.9-39.9 8.9-12.8 0-20.2-7.9-20.2-20.2l.5-124.7 32.7-.4c113.6 0 87.8 175.8 87.8 175.8 17.2-1.6 28.8 5.3 28.8 19.7 0 8.4-2 15.3-5.9 21.2-7.9 11.8-22.2 18.2-38.9 18.2-7.9 0-19.2-1-27.6-2.5V456c13.3 3 28.6 4.4 39.4 4.4 42.3 0 77.8-19.7 93.1-65.5l91.1-278.2H1496.2zM122.3 9.3L0 365.8h73l23.7-76.9H216l24.2 76.9h76.9L190.4 9.3H122.3zM112.5 231.2l42.4-129.7h3.9l39.5 129.7H112.5zM572.9 116.7v-31c0-11.8 7.4-25.6 32-26.8 30.2-1.5 56.3 6.2 81.2 14.8l13.2-56.9C676.1 9.8 635.9-.4 592.7.9c-65.6 2-92.2 35-92.2 82.8v33h-87.6v-31c0-11.8 7.4-27.1 32-28.4 10.9-.6 20.7.8 31.2 3.1l12.5-54.3c-16.9-3.6-36.1-6.7-55.9-6.1-65.6 2-92.2 35.9-92.2 83.7v33h0-36.9v50.2h36.9v198.9h72.4V166.9h87.6v198.9h72.4V166.9h76.8v198.9h71.9V116.7H572.9z" />
                        </svg>
                      </a>
                    </div>
                    <div className="xxlarge-2 medium-3 small-6 xsmall-5 columns affinity-mark">
                      <ul>
                        <li>
                          <a
                            href="../news/index.html"
                            className="underline-link"
                            data-remote="true"
                            data-targetClass="noticias"
                            data-ajaxUrl="https://affinity.pt/en/ajax/noticias-ajax/?ajax-id=https://affinity.pt"
                            data-title=""
                          >
                            News
                          </a>
                        </li>
                        <li>
                          <a
                            href="index.html#affinity"
                            className="underline-link"
                            data-remote="true"
                            data-targetClass="estamos"
                            data-ajaxUrl="https://affinity.pt/en/ajax/estamos-ajax/?ajax-id=92"
                            data-title="Contacts"
                          >
                            Contacts
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </footer>
              </main>

              {/*  preload  */}
              <div className="preload" aria-hidden="true">
                <img
                  src="../imgs/estamos/contacts-header-image.jpg"
                  alt=""
                />
                <img
                  src="../imgs/estamos/contacts-pictogram.png"
                  alt=""
                />
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
        {/* scroll-content-wrapper*/}

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

          {/* first transition*/}
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
          {/* second transition*/}
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

          {/* third transition*/}
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

          {/* forth transition*/}
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

          {/* fifth transition*/}
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
        {/* Loading Blob */}
        {/*  <div className="loading-blob">
  <svg viewBox="0 0 62 58">
    <path d="M0,32.45C0,14.12,3.5,3.12,23.17.45c23.33-2.33,38.33,4,38.67,26.17C61.67,50,51,58.12,31.33,58.12S0,48,0,32.45Z" data-morph="M6.44,24.66C25.78,14,.44,3,20.11.32c23.33-2.33,53.76,17,34,26.5C28.44,39.16,47.94,58,28.28,58S-7.13,32.15,6.44,24.66Z"></path>
  </svg>
</div> */}

        {/*  MODAL */}
        <div id="modal-bg"></div>
        <div id="modal-wrapper">
          {" "}
          <div id="modal-content" className="row align-middle align-center"></div>
        </div>
        {/*  TRANSITION */}
        <div id="loading-page" aria-hidden="true"></div>

        {/*  outdated browser  */}
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
          {/*  end #outdated browser  */}
          {/*  */}
        </div>
      </body>
    </>
  );
}

export default ContactsPage;
