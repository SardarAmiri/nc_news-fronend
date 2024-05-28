import React from "react";

import TopicPageItem from "./TopicPageItem";
import Loading from "../components/Loading";

function TopicPage({ topics, isLoading }) {
  return (
    <section className="topic-page">
      {isLoading ? (
        <Loading />
      ) : (
        <ul className="topic-container">
          {topics.map((topic) => (
            <TopicPageItem key={topic.slug} topic={topic} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default TopicPage;
