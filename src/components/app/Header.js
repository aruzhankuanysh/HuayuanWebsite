import React from "react";
import SocialLinks from "../SocialLinks";
import { useTranslation } from "react-i18next";

function AppHeader() {
  const { t } = useTranslation();
  return (
    <header className="page-header">
      <h1 style={{ pointerEvents: "none", position: "absolute" }}>
        Affinity - Nearshore | IT Consulting | Software Development
      </h1>

      <div className="background-wrapper">
        <div className="video-event-container">
          <div className="video-block block-bg-cover people-teaser">
            <video
              muted
              loop
              autoPlay
              playsInline
              className="element-cover"
              poster="App.js"
            >
              <source src="/video/people-teaser.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="video-block block-bg-cover business-teaser">
            <video
              muted
              loop
              playsInline
              className="element-cover"
              poster="App.js"
            >
              <source src="/video/business-teaser.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="video-event-split active people" data-id="people">
            <span>{t("people")}</span>
            <svg viewBox="0 0 175 175">
              <path
                className="line"
                d="M87 1c47.497 0 86 38.504 86 86s-38.503 86-86 86S1 134.496 1 87 39.503 1 87 1z"
              />
              <path d="M72 64.588c1.656-1.632 3.462-2.077 5.118-.446l35.616 20.469c1.656 1.631 1.656 4.277 0 5.906l-35.616 20.471c-1.656 1.631-3.462 1.185-5.118-.446V64.588z" />
            </svg>
          </div>
          <div className="video-event-split business" data-id="business">
            <span>{t("business")}</span>
            <svg viewBox="0 0 175 175">
              <path
                className="line"
                d="M87 1c47.497 0 86 38.504 86 86s-38.503 86-86 86S1 134.496 1 87 39.503 1 87 1z"
              />
              <path d="M72 64.588c1.656-1.632 3.462-2.077 5.118-.446l35.616 20.469c1.656 1.631 1.656 4.277 0 5.906l-35.616 20.471c-1.656 1.631-3.462 1.185-5.118-.446V64.588z" />
            </svg>
          </div>
          <svg viewBox="0 0 201 188" className="hands">
            <path d="M200.997 59.679c0-15.941-6.201-30.93-17.458-42.202C172.282 6.206 157.316-.002 141.395-.002c-15.241 0-29.599 5.7-40.673 16.075C89.691 5.901 75.472.321 60.388.321c-15.922 0-30.89 6.208-42.149 17.48-23.24 23.267-23.238 61.132 0 84.403l15.177 15.199c-1.516 2.243-2.334 4.887-2.334 7.649 0 3.655 1.419 7.09 4.002 9.671 2.578 2.584 6.007 4.007 9.659 4.007 1.063 0 2.102-.132 3.111-.369-.235 1.012-.369 2.051-.369 3.115 0 3.654 1.422 7.087 4.004 9.669 2.577 2.586 6.008 4.009 9.657 4.009 1.069 0 2.11-.136 3.123-.375-1.035 4.456.164 9.326 3.622 12.794 2.58 2.58 6.009 4.005 9.661 4.005 1.063 0 2.106-.138 3.117-.377-1.035 4.452.164 9.324 3.625 12.787 2.579 2.583 6.008 4.006 9.661 4.006 2.853 0 5.57-.878 7.852-2.495 2.21 1.461 4.797 2.246 7.505 2.246 3.654 0 7.083-1.419 9.663-4.001 2.983-2.99 4.296-7.029 3.936-10.939 1.722.773 3.609 1.172 5.553 1.172 3.648 0 7.085-1.423 9.662-4.004 3.453-3.458 4.664-8.318 3.641-12.766 1.005.23 2.044.352 3.099.352 3.643 0 7.077-1.425 9.661-4.004 2.579-2.584 4-6.022 4-9.674 0-1.926-.392-3.79-1.141-5.498 3.968.337 7.975-1.09 10.844-3.956 2.579-2.588 4-6.022 4-9.674 0-3.146-1.057-6.131-2.999-8.547l14.312-14.329c11.253-11.269 17.454-26.255 17.454-42.198zM50.883 131.208c-.641.637-1.378 1.126-2.158 1.535-1.22.64-2.571 1.014-3.988 1.014-2.323 0-4.503-.904-6.142-2.547-1.642-1.642-2.547-3.827-2.547-6.152 0-1.421.375-2.774 1.013-3.996.407-.783.893-1.516 1.534-2.154l1.671-1.675 13.367-13.385c1.64-1.644 3.822-2.548 6.142-2.548 2.32 0 4.504.904 6.146 2.548 3.389 3.391 3.389 8.911.004 12.305l-13.371 13.388-1.671 1.667zm16.403 16.421c-.638.642-1.379 1.131-2.162 1.542-1.221.631-2.566 1.008-3.986 1.008-2.322 0-4.504-.904-6.141-2.548-2.743-2.743-3.226-6.867-1.534-10.144.398-.776.883-1.517 1.534-2.164l1.667-1.668 18.752-18.776c1.639-1.642 3.823-2.548 6.146-2.548 2.32 0 4.502.906 6.142 2.548 1.641 1.642 2.544 3.826 2.544 6.15 0 2.324-.905 4.511-2.544 6.153l-18.752 18.776-1.666 1.671zm16.404 16.425c-.643.643-1.384 1.134-2.168 1.543-1.221.637-2.565 1.01-3.978 1.01-2.322 0-4.504-.904-6.146-2.547-2.739-2.74-3.221-6.86-1.533-10.141.398-.776.884-1.519 1.533-2.166l1.668-1.67 12.285-12.297 4.164-4.169.737-.736c1.64-1.643 3.824-2.548 6.142-2.548 2.322 0 4.504.905 6.142 2.548 3.387 3.395 3.387 8.918.004 12.307l-.739.729-4.164 4.17-12.286 12.307-1.661 1.66zm18.059 14.76l-1.66 1.662c-.642.641-1.385 1.134-2.168 1.545-1.219.628-2.562 1.002-3.973 1.002-2.327 0-4.505-.908-6.146-2.547-2.739-2.743-3.225-6.858-1.538-10.133.399-.779.885-1.527 1.538-2.172l1.661-1.665 12.288-12.3.266-.267c1.447-1.455 3.321-2.284 5.333-2.469.275-.029.537-.078.807-.078 2.322 0 4.506.904 6.148 2.547 1.9 1.901 2.692 4.468 2.46 6.961-.178 1.951-.971 3.857-2.46 5.345l-.266.268-12.29 12.301zm13.703 1.417c-1.638 1.642-3.82 2.544-6.146 2.544-1.283 0-2.518-.299-3.645-.83l11.503-11.518c1.481 3.214.932 7.152-1.712 9.804zm49.259-49.323c-1.644 1.64-3.824 2.548-6.144 2.548-2.322 0-4.504-.906-6.142-2.548L119.39 97.837c-.969-.973-2.545-.974-3.512-.005l-.598.596c-.469.465-.731 1.098-.731 1.761 0 .661.262 1.294.727 1.763l35.734 35.776c1.641 1.643 2.544 3.83 2.544 6.153 0 2.323-.903 4.512-2.544 6.151-1.642 1.642-3.822 2.548-6.144 2.548-2.32 0-4.502-.906-6.14-2.548l-35.742-36.417c-.466-.467-1.099-1.371-1.759-1.371h-.005c-.658 0-1.293.908-1.757 1.379l-.595.92c-.965.972-.963 2.708.004 3.676l35.732 35.858c3.384 3.388 3.384 8.952 0 12.345-1.639 1.64-3.823 2.564-6.144 2.564-2.322 0-4.5-.896-6.138-2.539l-1.431-1.432c1.88-4.888.867-10.654-3.069-14.597-2.582-2.586-6.014-4.007-9.663-4.007-.092 0-.186.014-.28.018 3.401-5.296 2.794-12.442-1.826-17.075-2.578-2.582-6.008-4.005-9.657-4.005-.651 0-1.295.06-1.932.15.492-1.421.761-2.921.761-4.47 0-3.652-1.424-7.089-4.002-9.669-2.581-2.583-6.01-4.008-9.659-4.008-2.973 0-5.794.96-8.132 2.706.014-3.525-1.313-7.052-3.992-9.734-2.582-2.582-6.012-4.005-9.661-4.005-3.647 0-7.081 1.423-9.659 4.005l-13.367 13.381-14.998-15.023C.448 77.353.448 42.647 21.749 21.321 32.071 10.989 45.79 5.298 60.381 5.298c13.738 0 26.692 5.057 36.776 14.271L52.522 64.265c-5.327 5.333-5.345 13.994-.04 19.304l2.366 2.367c2.549 2.552 5.962 3.957 9.612 3.957 3.649 0 7.08-1.423 9.657-4.005l28.961-28.993 61.633 61.711c1.639 1.641 2.544 3.825 2.544 6.149.002 2.322-.905 4.513-2.544 6.153zm1.295-18.512l-60.972-60.983c-.286-.283-.625-.459-.979-.578-.252-.084-.514-.152-.781-.152-.632 0-1.271.245-1.755.727l-1.958 1.963-28.96 28.996c-1.639 1.641-3.819 2.547-6.141 2.547-2.357 0-4.463-.864-6.096-2.499l-2.365-2.368c-3.367-3.369-3.347-8.87.042-12.265l42.249-42.31 4.474-4.478c.158-.163.328-.312.49-.471 10.266-10.028 23.773-15.552 38.141-15.552 14.592 0 28.317 5.69 38.63 16.023 10.322 10.333 16.004 24.069 16.004 38.681 0 14.612-5.682 28.348-16.004 38.681l-14.019 14.038z" />
          </svg>
        </div>

        <SocialLinks />
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
        <h4>{t("shouldwegetstarted")}</h4>
        <p>
          {t("gotaquestion")}
        </p>
        <a
          href="/Contacts"
          // data-ajaxurl="https://affinity.pt/en/ajax/estamos-ajax/?ajax-id=92"
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
          <span className="text">{t("startnow")}</span>
        </a>
      </div>
    </header>
  );
}

export default AppHeader;
