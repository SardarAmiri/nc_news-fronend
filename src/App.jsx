import "./style/App.css";
import "./style/Login.css";
import "./style/Navbar.css";
import "./style/Footer.css";
import "./style/Loading.css";
import "./style/HomePage.css";
import "./style/SingleArticle.css";
import "./style/CommendAdder.css";
import "./style/TopicPage.css";
import "./style/Users.css";
import "./style/Topic.css";
import React, { useState, useEffect } from "react";
import fetchApi from "./fetchApi";
import LoginPage from "./pages/LoginPage";
import ArticlePage from "./pages/ArticlePage";
import HomePage from "./pages/HomePage";
import TopicPage from "./pages/TopicPage";
import UserPage from "./pages/UserPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import SingleArticlePage from "./pages/SingleArticlePage";
import { Routes, Route } from "react-router-dom";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState([]);
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loginLoading, setLoginLoading] = useState(true);
  const [topicLoading, setTopicLoading] = useState(true);

  function handleLogin(logedInUser) {
    setUsers(logedInUser);
  }
  useEffect(function () {
    async function fetchArticles() {
      const res = await fetchApi().get("api/articles");
      setArticles(res.data.articles);
      setLoginLoading(false);
      setIsLoading(false);
    }
    fetchArticles();
  }, []);

  useEffect(function () {
    async function fetchAllTopics() {
      const res = await fetchApi().get("api/topics");
      setTopics(res.data.topics);
      setTopicLoading(false);
    }
    fetchAllTopics();
  }, []);
  return (
    <div>
      {isAuthenticated && (
        <>
          <Navbar users={users} />{" "}
        </>
      )}
      {loginLoading && <Loading />}
      <Routes>
        {!isAuthenticated ? (
          <Route
            path="*"
            element={
              <LoginPage
                onLogin={handleLogin}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />
        ) : (
          <>
            <Route
              exact
              path="/"
              element={
                <HomePage
                  articles={articles}
                  topics={topics}
                  isLoading={isLoading}
                />
              }
            />
            <Route path="/users" element={<UserPage />} />
            <Route
              path="/articles"
              element={<ArticlePage articles={articles} topics={topics} />}
            />
            <Route
              path="/articles/:article_id"
              element={<SingleArticlePage users={users} />}
            />
            <Route
              path="/topics"
              element={
                <TopicPage topics={topics} topicLoading={topicLoading} />
              }
            />
          </>
        )}
      </Routes>
      {isAuthenticated && <Footer />}
    </div>
  );
}

export default App;
