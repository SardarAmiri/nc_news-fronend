import React, { useState } from "react";

function CommentCard({ comment, onDelete, currentUser, addNewComment }) {
  const [likeBtn, setLikeBtn] = useState(false);
  const [disLikeBtn, setDisLikeBtn] = useState(false);
  const date = comment.created_at?.split("T").at(0);
  function handleVoteUp(commentId) {
    setLikeBtn(() => !likeBtn);
    setDisLikeBtn(false);
    try {
      fetchApi().patch(`/api/articles/${id}`, { inc_votes: 1 });
      setSingleArticle((singleArticle) => ({
        ...singleArticle,
        votes: singleArticle.votes + 1,
      }));
    } catch (error) {
      setSingleArticle((singleArticle) => ({
        ...singleArticle,
        votes: singleArticle.votes - 1,
      }));
    }
  }
  function handleVoteDown(id) {
    console.log(id);
  }
  return (
    <li className="comment-card">
      <div className="comment-text">
        <p>{comment.author}</p>
        <p>{date}</p>
      </div>
      <div>
        <p>{comment.body}</p>
      </div>
      <div className="comment-icon">
        <div className="like-dislike">
          <button
            className="btn"
            onClick={() => handleVoteUp(comment.comment_id)}
          >
            <i className="fa-regular fa-thumbs-up"></i>
          </button>
          <p>{comment.votes}</p>
          <button
            className="btn"
            onClick={() => handleVoteDown(comment.comment_id)}
          >
            <i className="fa-regular fa-thumbs-down"></i>
          </button>
        </div>
        {currentUser.username === comment.author && (
          <button className="btn" onClick={() => onDelete(comment.comment_id)}>
            <i className="fa-regular fa-trash-can"></i>
          </button>
        )}
      </div>
    </li>
  );
}

export default CommentCard;
