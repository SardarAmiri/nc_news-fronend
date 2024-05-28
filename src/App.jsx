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
import SingleArticlePage from "./pages/SingleArticlePage";
import Topic from "./pages/Topic";
import { Routes, Route } from "react-router-dom";

function App() {
  const [articleLoading, setArticlesLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState([]);
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function handleLogin(logedInUser) {
    setUsers(logedInUser);
  }
  useEffect(function () {
    async function fetchArticles() {
      const res = await fetchApi().get("api/articles");
      setArticles(res.data.articles);
      setArticlesLoading(false);
    }
    fetchArticles();
  }, []);

  useEffect(function () {
    async function fetchAllTopics() {
      const res = await fetchApi().get("api/topics");
      setTopics(res.data.topics);
      setIsLoading(false);
    }
    fetchAllTopics();
  }, []);
  return (
    <div>
      {isAuthenticated && (
        <>
          <Navbar users={users} />{" "}
          {/* <Topic topics={topics} isLoading={isLoading} /> */}
        </>
      )}
      {/* {loading && <Loading />} */}
      <Routes>
        {/* {!loading} */}
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
                  articleLoading={articleLoading}
                  topics={topics}
                  isLoading={isLoading}
                />
              }
            />
            <Route path="/users" element={<UserPage />} />
            <Route
              path="/articles"
              element={
                <ArticlePage
                  articles={articles}
                  articleLoading={articleLoading}
                  topics={topics}
                />
              }
            />
            <Route
              path="/articles/:article_id"
              element={<SingleArticlePage users={users} />}
            />
            <Route
              path="/topics"
              element={<TopicPage topics={topics} isLoading={isLoading} />}
            />
            {/* <Route path="/articles?topic=value" element={<ArticlePage />} /> */}
          </>
        )}
      </Routes>
      {isAuthenticated && <Footer />}
    </div>
  );
}

export default App;
