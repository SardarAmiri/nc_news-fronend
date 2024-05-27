import React from "react";
import CommentCard from "./CommentCard";
function CommentList({ comments, onDelete, currentUser }) {
  return (
    <ul className="comment-list">
      {comments.map((comment) => (
        <CommentCard
          key={comment.comment_id}
          comment={comment}
          onDelete={onDelete}
          currentUser={currentUser}
        />
      ))}
    </ul>
  );
}

export default CommentList;
