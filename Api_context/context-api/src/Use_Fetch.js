import React from 'react'
import {useState, useEffect } from 'react';

const Use_Fetch = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch("https://api.github.com/users")
          .then((response) => response.json())
          .then((data) => setUser(data))
          .catch(error=> console.log(error))
      }, []);

  return [user];
}

export default Use_Fetch