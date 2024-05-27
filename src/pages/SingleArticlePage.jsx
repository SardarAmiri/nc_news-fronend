import React, { useState, useEffect } from "react";
import fetchApi from "../fetchApi";
import { useParams } from "react-router-dom";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { TfiComments } from "react-icons/tfi";
import Loading from "../components/Loading";
import CommentAdder from "./CommentAdder";

function SingleArticlePage({ users }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showComment, setShowComment] = useState(true);
  const [singleArticle, setSingleArticle] = useState([]);
  const [likeBtn, setLikeBtn] = useState(false);
  const [disLikeBtn, setDisLikeBtn] = useState(false);

  const { article_id } = useParams();
  const id = Number(article_id);
  const date = singleArticle.created_at?.split("T").at(0);

  function increaseVote() {
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
  function decreaseVote() {
    setDisLikeBtn(true);
    setLikeBtn(false);
    try {
      fetchApi().patch(`/api/articles/${id}`, { inc_votes: -1 });
      setSingleArticle((singleArticle) => ({
        ...singleArticle,
        votes: singleArticle.votes - 1,
      }));
    } catch (error) {
      setSingleArticle((singleArticle) => ({
        ...singleArticle,
        votes: singleArticle.votes + 1,
      }));
    }
  }

  async function fetchSingleArticle() {
    const res = await fetchApi().get(`api/articles/${id}`);
    setSingleArticle(res.data.articles);
    setIsLoading(false);
  }
  useEffect(function () {
    fetchSingleArticle();
  }, []);

  function handleShowComment() {
    setShowComment(false);
  }
  return (
    <div className="main-container">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="single-article-container">
          <div className="info">
            <div>Topic: {singleArticle.topic}</div>
            <div className="author">Written By: {singleArticle.author}</div>
            <div className="date">Created: {date}</div>
          </div>
          <div className="article-image">
            <img src={singleArticle.article_img_url} alt="article-image" />
          </div>
          <h1>{singleArticle.title}</h1>
          <div id="content">{singleArticle.body}</div>
          <div className="icon">
            <div>
              <button
                disabled={likeBtn}
                style={likeBtn ? {} : { color: "red" }}
                className="voteClick"
                onClick={() => increaseVote()}
              >
                {<SlLike />}
              </button>
              <span id="num-vote">{singleArticle.votes}</span>
              <button
                disabled={disLikeBtn}
                style={disLikeBtn ? {} : { color: "red" }}
                className="voteClick"
                onClick={() => decreaseVote()}
              >
                {<SlDislike />}
              </button>
            </div>
            <div>
              <button className="commentClick">
                {<TfiComments />}
                <span id="num-vote-comment">{singleArticle.comment_count}</span>
              </button>
            </div>
          </div>
          {showComment ? (
            <div className="add-comment">
              <button className="comment-btn" onClick={handleShowComment}>
                Add Comment
              </button>
            </div>
          ) : (
            <CommentAdder
              currentUser={users}
              article_id={id}
              fetchSingleArticle={fetchSingleArticle}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default SingleArticlePage;
