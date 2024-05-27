import React from "react";
import { Link } from "react-router-dom";

function Navbar({ users }) {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">NC NEWS</Link>
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/topics">Topics</Link>
          <Link to="/users">Users</Link>
          <div className="user-profile">
            <img
              src={users.avatar_url}
              alt={users.name}
              className="profile-pic"
            />
            <span>{users.username}</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
