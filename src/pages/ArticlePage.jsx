import React, { useState, useEffect } from "react";
import fetchApi from "../fetchApi";
import ArticleList from "./ArticleList";
import Loading from "../components/Loading";
import { useLocation } from "react-router-dom";
import Topic from "./Topic";
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
function ArticlePage({ articles, articleLoading, topics }) {
  const query = useQuery();
  const topic = query.get("topic");
  const result = articles.filter((article) => article.topic === topic);
  return (
    <>
      <Topic topics={topics} />
      <section className="home-wrapper">
        {topic ? (
          articleLoading ? (
            <Loading />
          ) : (
            <ArticleList articles={result} />
          )
        ) : articleLoading ? (
          <Loading />
        ) : (
          <ArticleList articles={articles} />
        )}
      </section>
    </>
  );
}

export default ArticlePage;
