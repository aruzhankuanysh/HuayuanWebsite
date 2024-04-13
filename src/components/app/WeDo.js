import React from "react";

function WeDo() {
  return (
    <section className="we-do">
      <div className="row align-center expanded">
        <div className="xxlarge-10 text-center">
          <h2 className="js-title-element">We do</h2>
        </div>
        <div className="xxlarge-16 xlarge-16 medium-16 small-16 columns">
          <ul className="we-do-list row xxlarge-up-3 small-up-1">
            <li className="column">
              <a
                href="/Nearshore"
                data-remote="true"
                data-targetclass="single-service"
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
                href="/Outsourcing"
                data-remote="true"
                data-targetclass="single-service"
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
                href="/Software"
                data-remote="true"
                data-targetclass="single-service"
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
  );
}
export default WeDo;
