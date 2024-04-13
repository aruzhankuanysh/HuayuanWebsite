import React from "react";

function CompanyNumbers() {
  return (
    <section className="company-numbers js-hashtag-scroll">
      <div className="row expanded align-center">
        <div className="xxlarge-16 xlarge-14 text-center">
          <h2 className="hashtag-title js-write-text">#2022</h2>
        </div>
        <div className="xxlarge-5 medium-5 small-14 text-center">
          <div className="number-container">
            <h2 className="statistics">135</h2>
            <span className="statistic-title">ACTIVE CUSTOMERS</span>
          </div>
        </div>
        <div className="xxlarge-5 medium-5 small-14 text-center">
          <div className="number-container">
            <h2 className="statistics">10</h2>
            <span className="statistic-title">YEARS OF EXPERIENCE</span>
          </div>
        </div>
        <div className="xxlarge-5 medium-5 small-14 text-center">
          <div className="number-container">
            <h2>
              <span className="statistics">16M</span>
            </h2>
            ;<span className="statistic-title">M€ BUSINESS VOLUME</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CompanyNumbers;
