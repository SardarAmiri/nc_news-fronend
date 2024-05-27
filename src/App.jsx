import "./style/App.css";
import "./style/Login.css";
import "./style/Navbar.css";
import "./style/Footer.css";
import "./style/Loading.css";
import "./style/HomePage.css";
import "./style/SingleArticle.css";
import "./style/CommendAdder.css";
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
  const [loading, setLoading] = useState(true);
  const [articleLoading, setArticlesLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState([]);
  const [articles, setArticles] = useState([]);

  function handleLogin(logedInUser) {
    setUsers(logedInUser);
  }
  useEffect(function () {
    async function fetchArticles() {
      const res = await fetchApi().get("api/articles");
      console.log(res.data);
      setArticles(res.data.articles);
      setArticlesLoading(false);
    }
    fetchArticles();
  }, []);

  return (
    <div>
      {isAuthenticated && <Navbar users={users} />}
      {loading && <Loading />}
      <Routes>
        {!loading}
        {!isAuthenticated ? (
          <Route
            path="*"
            element={
              <LoginPage
                onLogin={handleLogin}
                setIsAuthenticated={setIsAuthenticated}
                setLoading={setLoading}
              />
            }
          />
        ) : (
          <>
            <Route
              exact
              path="/"
              element={
                <HomePage articles={articles} articleLoading={articleLoading} />
              }
            />
            <Route path="/users" element={<UserPage />} />
            <Route
              path="/articles"
              element={
                <ArticlePage
                  articles={articles}
                  articleLoading={articleLoading}
                />
              }
            />
            <Route
              path="/articles/:article_id"
              element={<SingleArticlePage users={users} />}
            />
            <Route path="/topics/" element={<TopicPage />} />
          </>
        )}
      </Routes>
      {isAuthenticated && <Footer />}
    </div>
  );
}

export default App;
