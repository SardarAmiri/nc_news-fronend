import React from "react";
import ArticleItem from "./ArticleItem";

function ArticleList({ articles }) {
  return (
    <>
      <div className="title-text">
        <h2>The most recent articles</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
          quisquam.
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
