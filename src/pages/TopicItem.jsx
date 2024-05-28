import React from "react";
import { Link } from "react-router-dom";
function TopicItem({ topic }) {
  return (
    <>
      <li>
        <Link
          to={`${
            topic.slug === "coding"
              ? "/articles?topic=coding"
              : topic.slug === "football"
              ? "/articles?topic=football"
              : "/articles?topic=cooking"
          }`}
        >
          {topic.slug}
        </Link>
      </li>
    </>
  );
}

export default TopicItem;
