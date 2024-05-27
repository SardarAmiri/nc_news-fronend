import React from "react";
import CommentList from "./CommentList";
import fetchApi from "../fetchApi";
import Loading from "../components/Loading";
import { useState, useEffect } from "react";
function CommentAdder({ article_id, currentUser, fetchSingleArticle }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [addComment, setAddComment] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchComments() {
    try {
      const res = await fetchApi().get(`/api/articles/${article_id}/comments`);
      setComments(res.data.comments);
      setIsLoading(false);
    } catch (error) {}
  }

  useEffect(
    function () {
      fetchComments();
    },
    [article_id]
  );
  async function postComment(newCommentData) {
    try {
      const res = await fetchApi().post(
        `/api/articles/${article_id}/comments`,
        newCommentData
      );
      fetchComments();
      setComments([res.data, ...comments]);

      fetchSingleArticle();
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!newComment) {
      return;
    }
    const commentToSend = {
      username: currentUser.username,
      body: newComment,
    };
    postComment(commentToSend);
    setNewComment("");
  };

  async function handleDeleteComment(commentId) {
    fetchApi()
      .delete(`/api/comments/${commentId}`)
      .then(() => {
        setComments((currentComments) => {
          return currentComments.filter(
            (comment) => comment.comment_id !== commentId
          );
        });
        fetchSingleArticle();
      });
  }

  return (
    <section className="comments-list">
      <form className="add-comment" onSubmit={handleOnSubmit}>
        <div className="comment-area">
          <p>{currentUser.username}</p>
          <textarea
            name="textarea"
            id="comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
          ></textarea>
        </div>

        <button className="comment-btn">Add Comment</button>
      </form>
      {addComment &&
        (isLoading ? (
          <Loading />
        ) : (
          <CommentList
            comments={comments}
            currentUser={currentUser}
            onDelete={handleDeleteComment}
          />
        ))}
    </section>
  );
}

export default CommentAdder;
