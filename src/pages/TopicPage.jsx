import React from "react";
import fetchApi from "../fetchApi";
import TopicPageItem from "./TopicPageItem";
import Loading from "../components/Loading";
import { useState, useEffect } from "react";

function TopicPage() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(function () {
    async function fetchAllTopics() {
      const res = await fetchApi().get("api/topics");
      setTopics(res.data.topics);
      setIsLoading(false);
    }
    fetchAllTopics();
  }, []);
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
