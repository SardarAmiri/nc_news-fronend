import TopicItem from "./TopicItem";
import { Link } from "react-router-dom";

function Topic({ topics }) {
  return (
    <section className="topic-section">
      <h2>Topics</h2>
      <div className="gradient"></div>
      <ul>
        <li>
          <Link to="/articles">All</Link>
        </li>
        {topics.map((topic) => (
          <TopicItem key={topic.description} topic={topic} />
        ))}
      </ul>
    </section>
  );
}

export default Topic;
