
function SolutionsPage() {
  return (
    <>
      {/* ============= CONTENT ============= */}
      <div className="page-main page-current">
        <div className="page-toload fazemos-page" data-bodyclass="fazemos">
          <header className="page-header">
            <section className="we-do">
              <div className="row align-center align-middle">
                <div className="xxlarge-14 medium-15 small-16 columns">
                  <ul className="we-do-list row xxlarge-up-3 small-up-1">
                    <li className="column nearshoring-item">
                      <a
                        href="/Nearshore"
                        data-remote="true"
                        data-targetclass="single-service"
                        // data-ajaxurl="https://affinity.pt/en/ajax/nearshoring-ajax/?ajax-id=76"
                        data-title="Nearshore"
                      >
                        <img
                          // className="show-mob"
                          src="./imgs/home/nearshoring.png"
                          alt=""
                        />
                        <h3>Nearshore</h3>
                      </a>
                      <p>
                        With clients all over Europe, we provide
                        high-performance teams, 100% dedicated to remotely
                        develop your IT projects, maintenance and application
                        support. On-time, on-budget, goal-based delivery!
                      </p>
                    </li>
                    <li className="column outsourcing-item">
                      <a
                        href="/Outsourcing"
                        data-remote="true"
                        // data-ajaxurl="https://affinity.pt/en/ajax/outsourcing-ajax/?ajax-id=78"
                        data-title="Outsourcing"
                      >
                        <img
                          className="show-mob"
                          src="./imgs/home/outsourcing.png"
                          alt=""
                        />
                        <h3>Outsourcing</h3>
                      </a>
                      <p>
                        Our secret is a multidisciplinary team created by
                        experts who have vast technological knowledge that goes
                        from Opensource, Microsoft, Java, IBM, OutSystems to
                        Oracle. Let’s talk about business?
                      </p>
                    </li>
                    <li className="column software-item">
                      <a
                        href="/Software"
                        data-remote="true"
                        // data-ajaxurl="https://affinity.pt/en/ajax/software-ajax/?ajax-id=80"
                        data-title="Software"
                      >
                        <img
                          className="show-mob"
                          src="./imgs/home/software.png"
                          alt=""
                        />
                        <h3>Software</h3>
                      </a>
                      <p>
                        We create products and clear and intuitive solutions for
                        the needs of your organization. With experienced
                        professionals and with agile methodologies, we develop
                        high technology for some of the biggest companies, at a
                        global level.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            {/*we-do*/}
          </header>

          <main className="page-content" role="main"></main>
        </div>
      </div>
    </>
  );
}

export default SolutionsPage;
