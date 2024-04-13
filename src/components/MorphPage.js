import React from "react";

function MorphPage() {
  return (
    <>
      <div className="page-main page-next" aria-hidden="true"></div>
      <div className="page-main page-prev" aria-hidden="true"></div>

      <footer className="footer" role="contentinfo"></footer>

      <div className="morph-page-transition">
        <svg
          height="0"
          width="0"
          viewBox="0 0 745 642"
          data-morph-shape="M375.037-185.216 C445.836-110.882,494.822,68.567,546.3,84.908c55.24,17.535,94.958-280.124,150.737-280.124c154.47,0,227.3-142.07,180-234 c-87.387-169.843-395.272-56.301-465-29.311c-72.787,28.173-353,0-353,0S3.35,122.51,163.764,159.166 C257.744,180.641,320.073-242.925,375.037-185.216z"
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
                d="M217.06,703.311l316,4l254,91l34-769L356.06,0 c-6,0-353,0-353,0l-25,654.311L217.06,703.311z"
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
    </>
  );
}

export default MorphPage;
