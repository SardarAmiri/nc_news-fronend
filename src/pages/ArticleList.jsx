import React from "react";
import ArticleItem from "./ArticleItem";

function ArticleList({ articles }) {
  return (
    <>
      <div className="title-text">
        <h2>The most recent articles</h2>
        <p>
          Reading the most recent articles keeps you updated with the latest
          developments and insights in your field of interest. It also helps you
          stay informed about current events and trends.
        </p>
      </div>
      <ul className="article-container">
        {articles.map((article) => (
          <ArticleItem key={article.article_id} article={article} />
        ))}
      </ul>
    </>
  );
}

export default ArticleList;
