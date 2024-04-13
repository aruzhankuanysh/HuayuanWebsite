import React from "react";

function SocialRespons() {
  return (
    <section className="social-responsability-section js-height">
      <div className="row expanded">
        <div className="xxlarge-5 xxlarge-offset-3 medium-6 medium-offset-1 xsmall-14 columns meta-title-wrapper">
          <div
            className="morphing-letter"
            data-morphpath="M593.65,604.08c40.81-48.76-41-107.25-50.64-190.62-6.07-52.6,72.77-132.61,66.44-221.92C597.28,19.82,366.37-36.24,187,22-40.32,99.19-40.51,561.81,139.15,629.48,230.86,661.17,281.32,565,359,574.07,471.16,587.18,537,671.78,593.65,604.08Z"
          >
            <svg viewBox="0 0 800 750">
              <defs>
                <mask
                  id="socialResponsabilityMask"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="800"
                  height="750"
                >
                  <filter id="socialResponsabilityFilter" x="0" y="0">
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
                    d="M593.65,604.08c40.81-48.76-17.34-115.47-27-198.84-6.07-52.61,61.65-123,55.31-212.33C609.84,21.19,366.37-36.24,187,22c-240.25,78-241,540.7-47.82,607.45C230.86,661.17,281.32,565,359,574.07,471.16,587.18,537,671.78,593.65,604.08Z"
                  />
                </mask>

                <text
                  id="socialResponsabilityTextEN"
                  className="show-en"
                  x="780"
                  y="348"
                  fontSize="100"
                  letterSpacing="-4px"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  Social Responsabilility
                </text>

                <text
                  id="socialResponsabilityTextPT"
                  className="show-pt"
                  x="820"
                  y="348"
                  fontSize="100"
                  letterSpacing="-4px"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  Responsabilidade Social
                </text>
              </defs>

              <path
                className="letter shadow-letter"
                filter="url(#socialResponsabilityFilter)"
                fill="rgba(191, 0, 0, .5)"
                d="M593.65,604.08c40.81-48.76-17.34-115.47-27-198.84-6.07-52.61,61.65-123,55.31-212.33C609.84,21.19,366.37-36.24,187,22c-240.25,78-241,540.7-47.82,607.45C230.86,661.17,281.32,565,359,574.07,471.16,587.18,537,671.78,593.65,604.08Z"
              />
              <path
                className="letter main-letter"
                fill="#006cfc"
                d="M593.65,604.08c40.81-48.76-17.34-115.47-27-198.84-6.07-52.61,61.65-123,55.31-212.33C609.84,21.19,366.37-36.24,187,22c-240.25,78-241,540.7-47.82,607.45C230.86,661.17,281.32,565,359,574.07,471.16,587.18,537,671.78,593.65,604.08Z"
              />

              <use href="#socialResponsabilityTextEN" fill="#006cfc" />
              <use
                href="#socialResponsabilityTextEN"
                fill="white"
                mask="url(#socialResponsabilityMask)"
              />

              <use href="#socialResponsabilityTextPT" fill="#006cfc" />
              <use
                href="#socialResponsabilityTextPT"
                fill="white"
                mask="url(#socialResponsabilityMask)"
              />
            </svg>
            <h3 className="subtitle js-text-element">
              Nature inspires the way we do things.
            </h3>
          </div>
        </div>
        <div className="xxlarge-5 xxlarge-offset-1 medium-6 medium-offset-2 small-9 small-offset-1 xsmall-14 pos-rel">
          <h4>Main Areas of Action:</h4>
          <ul className="filters" role="list">
            <li>
              <span className="circle purple"></span>
              <span>Animal</span>
            </li>
            <li>
              <span className="circle red"></span>
              <span>Children</span>
            </li>
            <li>
              <span className="circle green"></span>
              <span>Environment</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="social-responsability-section-articles">
        <div className="social-articles-wrapper">
          <ul role="list">
            <li className="article Environment" data-id="0">
              <div className="block-bg-cover">
                <picture>
                  <img
                    className="element-cover"
                    src="../uploads/2020/10/1.jpg"
                    alt="Article Image"
                  />
                </picture>
              </div>
              <div className="article-content">
                <span className="article-title">
                  Hands Dirty & Affinity in the air! (2020 & 2021)
                </span>
                <p>
                  We got some of Affinity volunteers together and headed to an
                  ecologically degraded area in Serra de Sintra for a
                  reforestation experience. The initiative stated with the
                  control of exotic infesting species, followed by a Tree
                  Planting activity in partnership with Plantar Uma Árvore
                  Association.
                </p>
                <button role="button" aria-label="Read the full article">
                  Read More
                </button>
              </div>
            </li>
            <li className="article Environment" data-id="1">
              <div className="block-bg-cover">
                <picture>
                  <img
                    className="element-cover"
                    src="../uploads/2020/09/edition-praia-1.jpg"
                    alt="Article Image"
                  />
                </picture>
              </div>
              <div className="article-content">
                <span className="article-title">
                  Love for the Big Blue (2020)
                </span>
                <p>
                  As part of the International Coastal Cleanup Day, Affinity
                  joined Bandeira Azula and Oceano Azul Foundation for a beach
                  clean up at Costa da Caparica. As summer got to an end,
                  beaches were left with waste and plastics that will end up
                  polluting our oceans. We decided to take part of the solution,
                  getting our hands into work and giving our small contribution
                  towards a cleaner ocean.
                </p>
                <button role="button" aria-label="Read the full article">
                  Read More
                </button>
              </div>
            </li>
            <li className="article Environment" data-id="2">
              <div className="block-bg-cover">
                <picture>
                  <img
                    className="element-cover"
                    src="../uploads/2020/06/DSC_4361-3.jpg"
                    alt="Article Image"
                  />
                </picture>
              </div>
              <div className="article-content">
                <span className="article-title">
                  Small Gestures, Big Affinity (2020)
                </span>
                <p>
                  The intention to preserve our environment is present in every
                  decision we make. In the week we returned to our office we
                  offered a 'welcome kit' to our employees with all the COVID-19
                  protection taking this opportunity to also make a stand of
                  affinity for the environment. Our cotton bags will carry out
                  the message!
                </p>
                <button role="button" aria-label="Read the full article">
                  Read More
                </button>
              </div>
            </li>
            <li className="article Animal" data-id="3">
              <div className="block-bg-cover">
                <picture>
                  <img
                    className="element-cover"
                    src="../uploads/2020/04/UPPA.jpg"
                    alt="Article Image"
                  />
                </picture>
              </div>
              <div className="article-content">
                <span className="article-title">
                  Love for Paws (2020 & 2022)
                </span>
                <p>
                  During the first weeks of February, Affinity employees
                  contributed with donations that could bring comfort to the
                  lives of the dogs hosted by UPPA. For this initiative to be
                  complete, on a Saturday morning, not only did we deliver the
                  donations, but we spent our morning walking the dogs around
                  Sintra and sharing some beautiful and enjoyable moments with
                  them!
                </p>
                <button role="button" aria-label="Read the full article">
                  Read More
                </button>
              </div>
            </li>
            <li className="blue-block">
              <h3>
                We take sustainability and social responsibility in
                consideration when evaluating our business performance.
              </h3>
              <p>
                We believe that real growth inevitably encompasses a true
                understanding of the surrounding world and a positive
                involvement on the main issues and challenges happening around
                us.
              </p>
            </li>
            <li className="article Children" data-id="5">
              <div className="block-bg-cover">
                <picture>
                  <img
                    className="element-cover"
                    src="../uploads/2020/04/believe-association.jpg"
                    alt="Article Image"
                  />
                </picture>
              </div>
              <div className="article-content">
                <span className="article-title">
                  Affinity is to Believe (Acreditar) (2019)
                </span>
                <p>
                  After being proposed to choose a Christmas gift of their
                  choice thinking on a child up to 12 years old, Affinity
                  players were turn into the Secret Santa of the children from
                  Associação Acreditar
                </p>
                <button role="button" aria-label="Read the full article">
                  Read More
                </button>
              </div>
            </li>
            <li className="article Environment" data-id="6">
              <div className="block-bg-cover">
                <picture>
                  <img
                    className="element-cover"
                    src="../uploads/2020/04/no-to-plastic.jpg"
                    alt="Article Image"
                  />
                </picture>
              </div>
              <div className="article-content">
                <span className="article-title">
                  Reusable Water Bottles for All (2018)
                </span>
                <p>
                  All Affinity employees, are welcomed to the company with a kit
                  that includes a reusable water bottle. Our aim is to inspire
                  and promote the fight against plastic contamination in their
                  professional and personal lives.
                </p>
                <button role="button" aria-label="Read the full article">
                  Read More
                </button>
              </div>
            </li>
            <li className="gray-block">
              <p>
                We assume an active approach towards the protection of our
                environment and our communities.
              </p>
              <h3>
                Affinity is our Nature and Action is one of our core values.
              </h3>
            </li>
            <li className="article Children" data-id="8">
              <div className="block-bg-cover">
                <picture>
                  <img
                    className="element-cover"
                    src="../uploads/2020/04/berco-ajuda.jpg"
                    alt="Article Image"
                  />
                </picture>
              </div>
              <div className="article-content">
                <span className="article-title">Ajuda de berço (2016)</span>
                <p>
                  Affinity players collected essential goods for the babies from
                  Ajuda de Berço, a non-profit organization that protects and
                  cares for babies and young children in need.
                </p>
                <button role="button" aria-label="Read the full article">
                  Read More
                </button>
              </div>
            </li>
            <li className="article Children" data-id="9">
              <div className="block-bg-cover">
                <picture>
                  <img
                    className="element-cover"
                    src="../uploads/2020/04/ardina-house.jpg"
                    alt="Article Image"
                  />
                </picture>
              </div>
              <div className="article-content">
                <span className="article-title">Casa do Ardina (2015)</span>
                <p>
                  Time & love are the best things we can offer one another.
                  Affinity players took some gifts and essential goods to Casa
                  do Ardina and shared their love and time with the children in
                  an evening full of games & smiles.
                </p>
                <button role="button" aria-label="Read the full article">
                  Read More
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default SocialRespons;
