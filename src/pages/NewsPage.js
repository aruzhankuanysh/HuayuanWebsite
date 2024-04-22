import React, { useState } from "react";
import newsData from "./news/NewsData";
import Sidebar from "./news/Sidebar";
import Article from "./news/Article";

function NewsPage() {
  
  const [selectedNews, setSelectedNews] = useState(newsData[0]);

  const handleNewsSelect = (news) => {
    setSelectedNews(news);
  };

  return (
    <div className="page-main page-current">
      <div className="page-toload noticias-page" data-bodyClass="noticias">
        <main className="page-content" role="main">
          <div className="row expanded container medium-collapse">
            <div className="rotate-title">
              <h4>Press, News &amp; Events</h4>
            </div>
            <Sidebar news={newsData} onSelect={handleNewsSelect}/>
            <Article news={selectedNews} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default NewsPage;