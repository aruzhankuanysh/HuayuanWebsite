import React from "react";

function PlaceImage() {
  return (
    <section className="place-images">
      <svg viewBox="0 0 737 628">
        <path
          fill="none"
          stroke="#006CFF"
          strokeWidth="43.083"
          strokeMiterlimit="10"
          d="M712.287 505.453c20.438 205.087-222.192 18.76-353.367 18.76-131.173 0-329.07 151.154-329.07-3.06 0-183.157 197.666-496.506 328.84-496.506s334.457 288.74 353.597 480.806z"
        />
      </svg>
      <div className="row align-center">
        <div className="xxlarge-14">
          <div className="row expanded">
            <div className="xxlarge-8 small-16 columns">
              <div className="top-left-image">
                <div
                  className="block-bg-cover js-parallax-image"
                  data-friction=".6"
                >
                  <picture>
                    <img
                      className="element-cover"
                      src="../uploads/2020/04/caneca-1500x998.jpg"
                      alt=""
                    />
                  </picture>
                </div>
              </div>
              <div className="bottom-left-image">
                <div
                  className="block-bg-cover js-parallax-image"
                  data-friction=".3"
                >
                  <picture>
                    <img
                      className="element-cover"
                      src="../uploads/2020/03/tirar-fios-da-mesa-2-1500x998.jpg"
                      alt=""
                    />
                  </picture>
                </div>
              </div>
            </div>
            <div className="xxlarge-8 small-16 columns">
              <div className="top-right-image">
                <div
                  className="block-bg-cover js-parallax-image"
                  data-friction="1"
                >
                  <picture>
                    <img
                      className="element-cover"
                      src="../uploads/2020/04/affinity-office4.jpg"
                      alt=""
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PlaceImage;
