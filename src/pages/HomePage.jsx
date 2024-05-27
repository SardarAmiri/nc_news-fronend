import React from "react";

import ArticleList from "./ArticleList";
import Loading from "../components/Loading";

function HomePage({ articles, articleLoading }) {
  const topThreeArticles = articles
    .sort((a, b) => a.created_at + b.created_at)
    .slice(0, 3);

  return (
    <section className="home-wrapper">
      {articleLoading ? (
        <Loading />
      ) : (
        <ArticleList articles={topThreeArticles} />
      )}
    </section>
  );
}

export default HomePage;
