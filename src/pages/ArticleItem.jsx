import React from "react";
import { Link } from "react-router-dom";

function ArticleItem({ article }) {
  return (
    <li>
      <figure className="article-item">
        <div className="article-img">
          <img src={article.article_img_url} alt={article.title} />
          <span>
            <i className="fa-regular fa-heart"> {article.votes}</i>
          </span>
        </div>
        <figcaption className="article-title">
          <div>
            <p>written by: {article.author}</p>
            <p>{article.created_at.split("T").at(0)}</p>
          </div>
          <h3>{article.title}</h3>
          {/* <Link to={`/articles/${article.article_id}`}>Read more</Link> */}
        </figcaption>
        <div className="learnmore">
          <Link to={`/articles/${article.article_id}`}>Read more</Link>
        </div>
      </figure>
    </li>
  );
}

export default ArticleItem;
