import React from "react";

function UserItem({ user }) {
  return (
    <li className="user-item">
      <img src={user.avatar_url} alt={user.username} />

      <p>{user.username}</p>
    </li>
  );
}

export default UserItem;
