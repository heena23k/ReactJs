import React, { useState } from "react";
import { useEffect } from "react";
import Use_Fetch from "./Use_Fetch";

const CustomHook = () => {
    const [user] = Use_Fetch(); 
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

export default CustomHook;
