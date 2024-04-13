import React from "react";

function Team() {
  return (
    <section className="team js-height">
      <div className="row expanded">
        <div className="xxlarge-4 xxlarge-offset-3 medium-6 medium-offset-1 xsmall-14 columns meta-title-wrapper">
          <div
            className="morphing-letter"
            data-morphpath="M687.4,373.7c167.7,147.4,15.8,313.9-190.2,327.1C291.2,714,64.4,574.5,53,397.5 C39.3,184.2,247.7,35.9,454.1,30c132.9-3.8,203.1,85.1,221.4,130.4C716,260.3,644.9,336.3,687.4,373.7z"
          >
            <svg viewBox="0 0 800 750">
              <defs>
                <mask
                  id="teamMask"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="800"
                  height="750"
                >
                  <filter id="teamFilter" x="0" y="0">
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
                    d="M666.6,392c158,157.8-4.3,304.3-210.8,304.3S82,552.5,82,375.2C82,161.4,249.5,46.7,455.8,54.1 c132.9,4.7,197.2,78,212.6,124.4C702.4,280.8,596.4,321.9,666.6,392z"
                  />
                </mask>

                <text
                  id="teamText"
                  x="720"
                  y="348"
                  fontSize="100"
                  letterSpacing="-4px"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  Meet the team.{" "}
                </text>
              </defs>

              <path
                className="letter shadow-letter"
                filter="url(#teamFilter)"
                fill="rgba(191, 0, 0, .5)"
                d="M666.6,392c158,157.8-4.3,304.3-210.8,304.3S82,552.5,82,375.2C82,161.4,249.5,46.7,455.8,54.1 c132.9,4.7,197.2,78,212.6,124.4C702.4,280.8,596.4,321.9,666.6,392z"
              />
              <path
                className="letter main-letter"
                fill="#006cfc"
                d="M666.6,392c158,157.8-4.3,304.3-210.8,304.3S82,552.5,82,375.2C82,161.4,249.5,46.7,455.8,54.1 c132.9,4.7,197.2,78,212.6,124.4C702.4,280.8,596.4,321.9,666.6,392z"
              />

              <use href="#teamText" fill="#006cfc" />
              <use href="#teamText" fill="white" mask="url(#teamMask)" />
            </svg>

            <h3 className="subtitle js-text-element">
              We work as a team. We are made of intend, competence and ambition
              and we are driven by the will to exceed expectations and guarantee
              everybody's success.
            </h3>
          </div>
        </div>
      </div>

      <div className="row expanded">
        <div className="xxlarge-12 xxlarge-offset-2 small-14 small-offset-1 columns">
          <article className="persons-container">
            <div className="row expanded xxlarge-up-3 medium-up-2 xsmall-up-1">
              <div className="columns">
                <div className="team-person-container">
                  <div className="block-bg-cover color-photo">
                    <picture>
                      <img
                        className="element-cover"
                        src="../uploads/2017/11/team-6-over.jpg"
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="block-bg-cover black-photo">
                    <picture>
                      <img
                        className="element-cover"
                        src="../uploads/2017/11/team-6.jpg"
                        alt=""
                      />
                    </picture>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="689.712"
                    height="685.06"
                    viewBox="0 0 689.712 685.06"
                  >
                    <path
                      fill="none"
                      stroke="#006CFF"
                      strokeWidth="43.083"
                      strokeMiterlimit="10"
                      d="M604.874,359.519	c157.646,157.647-4.33,304-210.332,304s-373-143.637-373-320.823c0-213.562,167.128-328.153,373-320.823	c132.574,4.722,196.792,77.895,212.17,124.248C640.629,248.36,534.852,289.498,604.874,359.519z"
                    />
                  </svg>{" "}
                  <div className="team-info">
                    <h2>Carlos Correia</h2>
                    <h3>Partner & CEO</h3>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="team-person-container">
                  <div className="block-bg-cover color-photo">
                    <picture>
                      <img
                        className="element-cover"
                        src="../uploads/2023/01/team-10-over2.jpg"
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="block-bg-cover black-photo">
                    <picture>
                      <img
                        className="element-cover"
                        src="../uploads/2023/01/team-10-2.jpg"
                        alt=""
                      />
                    </picture>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="689.712"
                    height="685.06"
                    viewBox="0 0 689.712 685.06"
                  >
                    <path
                      fill="none"
                      stroke="#006CFF"
                      strokeWidth="43.083"
                      strokeMiterlimit="10"
                      d="M604.874,359.519	c157.646,157.647-4.33,304-210.332,304s-373-143.637-373-320.823c0-213.562,167.128-328.153,373-320.823	c132.574,4.722,196.792,77.895,212.17,124.248C640.629,248.36,534.852,289.498,604.874,359.519z"
                    />
                  </svg>{" "}
                  <div className="team-info">
                    <h2>Cristiana Vicente</h2>
                    <h3>Chief People Officer</h3>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="team-person-container">
                  <div className="block-bg-cover color-photo">
                    <picture>
                      <img
                        className="element-cover"
                        src="../uploads/2020/06/team-11-over-2.jpg"
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="block-bg-cover black-photo">
                    <picture>
                      <img
                        className="element-cover"
                        src="../uploads/2020/06/team-11.jpg"
                        alt=""
                      />
                    </picture>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="737"
                    height="628"
                    viewBox="0 0 511.6 678"
                  >
                    <path
                      fill="none"
                      stroke="#006CFF"
                      strokeWidth="43.083"
                      strokeMiterlimit="10"
                      d="M457.2,95.1c-29.5-51.6-82.6-73.6-177.5-73.6c-53.2,0-93.2,4-125.8,12.4c-36,9.4-63.4,24.6-83.7,46.5
c-24.3,26.3-38.6,61.7-44.8,111.5c-5.3,42.5-5,96.2,1.1,173.9c9.5,121.4,16.5,192.2,50.3,235.7c17.6,22.6,41.8,37,76.2,45.1
c28.7,6.8,65.4,9.7,122.6,9.7c51.2,0,89-5.9,118.8-18.5c30.9-13.1,53.1-33.7,68-62.9c26.5-52.2,27.8-126.4,27.8-243
C490.1,215.7,484.8,143.5,457.2,95.1z"
                    />
                  </svg>{" "}
                  <div className="team-info">
                    <h2>Inês Santos</h2>
                    <h3>Chief Marketing Officer</h3>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="team-person-container">
                  <div className="block-bg-cover color-photo">
                    <picture>
                      <img
                        className="element-cover"
                        src="../uploads/2023/01/team-7-3.jpg"
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="block-bg-cover black-photo">
                    <picture>
                      <img
                        className="element-cover"
                        src="../uploads/2023/01/team-7-over-1.jpg"
                        alt=""
                      />
                    </picture>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="689.712"
                    height="685.06"
                    viewBox="0 0 689.712 685.06"
                  >
                    <path
                      fill="none"
                      stroke="#006CFF"
                      strokeWidth="43.083"
                      strokeMiterlimit="10"
                      d="M604.874,359.519	c157.646,157.647-4.33,304-210.332,304s-373-143.637-373-320.823c0-213.562,167.128-328.153,373-320.823	c132.574,4.722,196.792,77.895,212.17,124.248C640.629,248.36,534.852,289.498,604.874,359.519z"
                    />
                  </svg>{" "}
                  <div className="team-info">
                    <h2>Carolina Simões</h2>
                    <h3>Corporate & Culture Manager</h3>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="team-person-container">
                  <div className="block-bg-cover color-photo">
                    <picture>
                      <img
                        className="element-cover"
                        src="../uploads/2017/11/team-8-over.jpg"
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="block-bg-cover black-photo">
                    <picture>
                      <img
                        className="element-cover"
                        src="../uploads/2017/11/team-8.jpg"
                        alt=""
                      />
                    </picture>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="743.119"
                    height="641.621"
                    viewBox="0 0 743.119 641.621"
                  >
                    <path
                      fill="none"
                      stroke="#006CFF"
                      strokeWidth="43.083"
                      strokeMiterlimit="10"
                      d="M319.762,564.834	c70.799,74.334,119.083-37.74,170.56-21.399c55.241,17.535,84.743,64.198,140.523,64.198c154.469,0,75.089-418.978,27.789-510.908	c-87.387-169.843-207.695-2.636-277.422,24.354c-72.787,28.173-180.199-139.267-269.933-45.052	c-63.1,66.252-163.907,505.01-3.493,541.665C201.766,639.168,264.798,507.125,319.762,564.834z"
                    />
                  </svg>{" "}
                  <div className="team-info">
                    <h2>Mafalda Inverno</h2>
                    <h3>Learning & Career Manager</h3>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="team-person-container">
                  <div className="block-bg-cover color-photo">
                    <picture>
                      <img
                        className="element-cover"
                        src="../uploads/2023/06/team-15-over.jpg"
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="block-bg-cover black-photo">
                    <picture>
                      <img
                        className="element-cover"
                        src="../uploads/2023/06/team-15.jpg"
                        alt=""
                      />
                    </picture>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="689.712"
                    height="685.06"
                    viewBox="0 0 689.712 685.06"
                  >
                    <path
                      fill="none"
                      stroke="#006CFF"
                      strokeWidth="43.083"
                      strokeMiterlimit="10"
                      d="M604.874,359.519	c157.646,157.647-4.33,304-210.332,304s-373-143.637-373-320.823c0-213.562,167.128-328.153,373-320.823	c132.574,4.722,196.792,77.895,212.17,124.248C640.629,248.36,534.852,289.498,604.874,359.519z"
                    />
                  </svg>{" "}
                  <div className="team-info">
                    <h2>Catarina Santos</h2>
                    <h3>Office Manager</h3>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="team-person-container">
                  <div className="block-bg-cover color-photo">
                    <picture>
                      <img
                        className="element-cover"
                        src="../uploads/2017/11/team-10-over.jpg"
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="block-bg-cover black-photo">
                    <picture>
                      <img
                        className="element-cover"
                        src="../uploads/2017/11/team-10.jpg"
                        alt=""
                      />
                    </picture>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="667.699"
                    height="702.557"
                    viewBox="0 0 667.699 702.557"
                  >
                    <path
                      fill="none"
                      stroke="#006CFF"
                      strokeWidth="43.083"
                      strokeMiterlimit="10"
                      d="M515.016,464.746	c245.133-57.651,141.312-531.97-267.068-428.493c-304.931,77.264-281.577,613.863-50.677,641.646	C446.834,707.926,312.814,512.301,515.016,464.746z"
                    />
                  </svg>{" "}
                  <div className="team-info">
                    <h2>Paulo Silva</h2>
                    <h3>Chief Financial Officer</h3>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
export default Team;
