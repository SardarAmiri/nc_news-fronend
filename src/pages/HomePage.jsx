import React from "react";
import Topic from "./Topic";
import ArticleList from "./ArticleList";
import Loading from "../components/Loading";
function HomePage({ articles, topics, isLoading }) {
  const topThreeArticles = articles
    .sort((a, b) => a.created_at + b.created_at)
    .slice(0, 3);

  return (
    <>
      <Topic topics={topics} />
      <section className="home-wrapper">
        {isLoading ? (
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
