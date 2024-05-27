import React from "react";
import ArticleList from "./ArticleList";
import Loading from "../components/Loading";

function ArticlePage({ articles, articleLoading }) {
  return (
    <section className="home-wrapper">
      {articleLoading ? <Loading /> : <ArticleList articles={articles} />}
    </section>
  );
}

export default ArticlePage;
