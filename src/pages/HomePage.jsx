import React from "react";
import Topic from "./Topic";
import ArticleList from "./ArticleList";
import Loading from "../components/Loading";
function HomePage({ articles, articleLoading, topics, isLoading }) {
  const topThreeArticles = articles
    .sort((a, b) => a.created_at + b.created_at)
    .slice(0, 3);

  return (
    <>
      <Topic topics={topics} isLoading={isLoading} />
      <section className="home-wrapper">
        {articleLoading ? (
          <Loading />
        ) : (
          <>
            <ArticleList articles={topThreeArticles} />
          </>
        )}
      </section>
    </>
  );
}

export default HomePage;
