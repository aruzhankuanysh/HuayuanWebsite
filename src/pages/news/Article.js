import React from "react";

function Article({ news }) {
  return (
    <div
    className="xxlarge-9 xxlarge-offset-1 medium-14 medium-offset-1 columns full-page-container"
    data-nextNews="true"
    data-activeNew={news.id}
  >
    <article className="full-page-article" data-id={news.id}>
      <header className="full-page-article-header">
        <h1>{news.title}</h1>
        <div className="full-page-article-social">
          <span className="social-title">Share</span>
          <ul>
            <li className="social-item">
              <a
                href="https://www.linkedin.com/shareArticle?mini=true&url=https://affinity.pt/en/news/a-data-driven-world-in-discussion-in-our-upcoming-affinity-live-event/"
                rel="external"
              >
                <svg viewBox="0 0 46 34">
                  <path d="M14.7 32H8.5V12h6.2v20zM11.6 9.2C9.6 9.2 8 7.6 8 5.6S9.6 2 11.6 2s3.6 1.6 3.6 3.6-1.6 3.6-3.6 3.6zM38 32h-6.2v-9.7c0-2.3 0-5.3-3.2-5.3s-3.7 2.5-3.7 5.1V32h-6.2V12h6v2.7h.1c.8-1.6 2.9-3.2 5.9-3.2 6.3 0 7.5 4.1 7.5 9.5v11z" />
                </svg>
              </a>
            </li>
            <li className="social-item">
              <a
                href="http://www.facebook.com/sharer.php?u=https://affinity.pt/en/news/a-data-driven-world-in-discussion-in-our-upcoming-affinity-live-event/&amp;t=14137‘A Data Driven World’ in discussion in our upcoming Affinity Live Event"
                rel="external"
              >
                <svg viewBox="0 0 46 34">
                  <path d="M25.6 33h-7.1V19H15v-6.2h3.5V9.1c0-5.1 2-8.1 7.7-8.1H31v6.2h-3c-2.2 0-2.4.9-2.4 2.5v3.1H31l-.6 6.2h-4.7v14z" />
                </svg>
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://twitter.com/intent/tweet?text=https://affinity.pt/en/news/a-data-driven-world-in-discussion-in-our-upcoming-affinity-live-event/"
                rel="external"
              >
                <svg
                  className="social-icons twitter-svg"
                  viewBox="0 0 17 15"
                >
                  <path d="M16.5 2.2c-.6.3-1.2.5-1.9.6.7-.4 1.2-1.1 1.4-2-.6.4-1.3.7-2.1.9C13.3 1 12.4.6 11.5.6 9.8.5 8.3 2.1 8.3 4c0 .3 0 .5.1.8-2.8-.1-5.2-1.5-6.8-3.7-.3.6-.4 1.2-.4 1.8 0 1.2.6 2.3 1.5 2.9-.5 0-1-.2-1.5-.4 0 1.7 1.1 3.1 2.6 3.5-.3.1-.6.2-.9.2-.2 0-.4-.1-.6-.1.4 1.4 1.6 2.4 3.1 2.5-1.2.9-2.6 1.5-4.1 1.5H.5c1.5 1 3.2 1.6 5 1.6 6 0 9.3-5.4 9.3-10.1V4c.7-.5 1.3-1.1 1.7-1.8"></path>
                </svg>
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://plus.google.com/share?url=https://affinity.pt/en/news/a-data-driven-world-in-discussion-in-our-upcoming-affinity-live-event/"
                rel="external"
              >
                <svg viewBox="0 0 46 34">
                  <path d="M1 16.3C.6 22 4.4 27.6 9.9 29.6c5.4 2 12.4.6 15.9-4.1 2.3-3 2.8-6.8 2.5-10.4H14.9v4.6c2.7.1 5.3 0 8 .1-1.2 5.7-9.2 7.6-13.5 3.8-4.4-3.3-4.2-10.4.4-13.5 3.2-2.4 7.7-1.8 10.9.3 1.2-1.1 2.4-2.3 3.5-3.5-2.6-2-5.9-3.5-9.3-3.3C7.8 3.3 1.2 9.4 1 16.3zm36-5.1v3.9h-4v3.8h4v3.8h4v-3.9h4V15h-4v-3.9c-1.3.1-2.7.1-4 .1z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </header>
      <div className="full-page-article-content">
        <div className="full-page-article-image">
          <div className="block-bg-cover">
            <img
              className="element-cover"
              src={news.imgpath}
              alt=""
            />
          </div>
        </div>

        <div className="row expanded xsmall-collapse">
          <div className="xxlarge-12 xxlarge-offset-2 small-16 small-offset-0 columns">
            <div className="full-page-article-time-category">
              <time className="full-page-article-date">
              {news.date}
              </time>
              <div className="full-page-article-category">{news.category}</div>
            </div>
            <div className="full-page-article-text">
  {news.description && news.description.map((paragraph, index) => (
    <div key={index}>
      <p dangerouslySetInnerHTML={{ __html: paragraph }}></p>
      <p>&nbsp;</p>
    </div>
  ))}
</div>
          </div>
        </div>
        <div className="full-page-article-social">
          <span className="social-title">Share</span>
          <ul>
            <li className="social-item">
              <a
                href="https://www.linkedin.com/shareArticle?mini=true&url=https://affinity.pt/en/news/a-data-driven-world-in-discussion-in-our-upcoming-affinity-live-event/"
                rel="external"
              >
                <svg viewBox="0 0 46 34">
                  <path d="M14.7 32H8.5V12h6.2v20zM11.6 9.2C9.6 9.2 8 7.6 8 5.6S9.6 2 11.6 2s3.6 1.6 3.6 3.6-1.6 3.6-3.6 3.6zM38 32h-6.2v-9.7c0-2.3 0-5.3-3.2-5.3s-3.7 2.5-3.7 5.1V32h-6.2V12h6v2.7h.1c.8-1.6 2.9-3.2 5.9-3.2 6.3 0 7.5 4.1 7.5 9.5v11z" />
                </svg>
              </a>
            </li>
            <li className="social-item">
              <a
                href="http://www.facebook.com/sharer.php?u=https://affinity.pt/en/news/a-data-driven-world-in-discussion-in-our-upcoming-affinity-live-event/&amp;t=‘A Data Driven World’ in discussion in our upcoming Affinity Live Event"
                rel="external"
              >
                <svg viewBox="0 0 46 34">
                  <path d="M25.6 33h-7.1V19H15v-6.2h3.5V9.1c0-5.1 2-8.1 7.7-8.1H31v6.2h-3c-2.2 0-2.4.9-2.4 2.5v3.1H31l-.6 6.2h-4.7v14z" />
                </svg>
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://plus.google.com/share?url=https://affinity.pt/en/news/a-data-driven-world-in-discussion-in-our-upcoming-affinity-live-event/"
                rel="external"
              >
                <svg viewBox="0 0 46 34">
                  <path d="M1 16.3C.6 22 4.4 27.6 9.9 29.6c5.4 2 12.4.6 15.9-4.1 2.3-3 2.8-6.8 2.5-10.4H14.9v4.6c2.7.1 5.3 0 8 .1-1.2 5.7-9.2 7.6-13.5 3.8-4.4-3.3-4.2-10.4.4-13.5 3.2-2.4 7.7-1.8 10.9.3 1.2-1.1 2.4-2.3 3.5-3.5-2.6-2-5.9-3.5-9.3-3.3C7.8 3.3 1.2 9.4 1 16.3zm36-5.1v3.9h-4v3.8h4v3.8h4v-3.9h4V15h-4v-3.9c-1.3.1-2.7.1-4 .1z" />
                </svg>
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://www.youtube.com/channel/UC4XVKfWFAGVObIMNHJYyyzA"
                rel="external"
              >
                <svg viewBox="0 0 46 34">
                  <path d="M40.6 9.8s-.4-2.5-1.4-3.6c-1.4-1.4-2.9-1.4-3.6-1.5-5-.4-12.6-.4-12.6-.4s-7.6 0-12.6.4c-.7.1-2.2.1-3.6 1.5-1.1 1.1-1.4 3.6-1.4 3.6S5 12.7 5 15.6v2.7c0 2.9.4 5.8.4 5.8s.4 2.5 1.4 3.6c1.4 1.4 3.2 1.4 4 1.5 2.9.3 12.2.4 12.2.4s7.6 0 12.6-.4c.7-.1 2.2-.1 3.6-1.5 1.1-1.1 1.4-3.6 1.4-3.6s.4-2.9.4-5.8v-2.7c0-2.9-.4-5.8-.4-5.8M19.3 21.7V11.6l9.7 5.1-9.7 5z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </article>

    <div className="next-new-mob">
      <p>Next article</p>
      <h2>
        Affinity supports the child-care association ‘Casa de Apoio à
        Criança de Guimarães’
      </h2>
      <a
        href="affinity-supports-the-child-care-association-casa-de-apoio-a-crianca-de-guimaraes/index.html"
        data-remote="true"
        data-targetClass="noticias"
        data-title="Affinity supports the child-care association ‘Casa de Apoio à Criança de Guimarães’"
        className="elastic-btn"
      >
        <svg viewBox="0 0 196 66">
          <path
            className="morph-bg"
            d="M1.3 35.8c2 25.9 17.7 29.7 38.6 29.7h124.5C185.3 65.4 195 50.8 195 33S185.2.6 164.4.5H39.9C17.2.5-.7 8 1.3 35.8z"
            data-hover="M3.3 35.8c2 25.9 15.6 25.7 36.6 25.7h124.5C185.3 61.4 193 50.8 193 33s-8-28.5-28.7-28.5H39.8C17.1 4.5 1.3 8 3.3 35.8z"
          />
        </svg>
        <span className="text">View article</span>
      </a>
    </div>
    <div className="load-next-wrapper">
      <span className="indicator-wrapper">
        <span className="indicator"></span>
      </span>
      <p>Scroll to load next article</p>
    </div>
  </div>
  );
}

export default Article;