import React from "react";

import TopicPageItem from "./TopicPageItem";
import Loading from "../components/Loading";

function TopicPage({ topics, topicLoading }) {
  return (
    <section className="topic-page">
      {topicLoading ? (
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
