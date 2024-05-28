import React from "react";
import { Link } from "react-router-dom";
function TopicPageItem({ topic }) {
  return (
    <Link
      className="topic-content"
      to={`${
        topic.slug === "coding"
          ? "/articles?topic=coding"
          : topic.slug === "football"
          ? "/articles?topic=football"
          : "/articles?topic=cooking"
      }`}
    >
      <h4>{topic.slug}</h4>
      <p>{topic.description}</p>
    </Link>
  );
}

export default TopicPageItem;
