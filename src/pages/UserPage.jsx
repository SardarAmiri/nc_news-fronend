import React, { useState, useEffect } from "react";
import UserItem from "./UserItem";
import fetchApi from "../fetchApi";
import Loading from "../components/Loading";

function UserPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    async function fetchAllUsers() {
      const res = await fetchApi().get("api/users");
      setUsers(res.data.users);
      setIsLoading(false);
    }
    fetchAllUsers();
  }, []);
  return (
    <section className="user-section">
      <h2>
        Explore the contributions of our vibrant community of writers and
        readers!
      </h2>
      {isLoading ? (
        <Loading />
      ) : (
        <ul className="user-content">
          {users.map((user) => (
            <UserItem key={user.username} user={user} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default UserPage;
