import React, { useState } from "react";
import { useEffect } from "react";

const Fetch = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch(error=> console.log(error))
  }, []);
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {user.map((user) => {
          return <li key={user.id}>
          <a href={user.html_url}> {user.login}</a>
         </li>;
        })}
      </ul>
    </div>
  );
};

export default Fetch;
