import React from "react";
import { useState, useEffect } from "react";
import fetchApi from "../fetchApi";

function LoginPage({ onLogin, setIsAuthenticated, setLoading }) {
  const [users, setUsers] = useState([]);
  const [curUsername, setCurUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validUser, setValidUser] = useState(true);

  useEffect(function () {
    async function fetchAllUsers() {
      const res = await fetchApi().get("api/users");
      setUsers(res.data.users);
      setLoading(false);
    }
    fetchAllUsers();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const result = users.find((user) => user.username === curUsername);
    // console.log(result);

    if (result) {
      setIsAuthenticated(true);
      onLogin(result);
    } else {
      // console.log("hello");
      setValidUser(false);
      setCurUsername("");
      setPassword("");
    }
  }
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            required
            value={curUsername}
            onChange={(e) => setCurUsername(e.target.value)}
            onMouseDown={() => setValidUser(true)}
          />
          {!validUser && <p style={{ color: "red" }}>Invalid Username</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
      <div className="demo-data">
        <p>Username : cooljmessy</p>
        <p>Passowrd: try anything 😍</p>
      </div>
    </div>
  );
}

export default LoginPage;
