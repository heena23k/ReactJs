// create a form that takes user input and display it in real-time;
import React, { useState } from "react";

const UserInputForm = () => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
       onChange={handleInput}
        
      />
      <p>User Input:{input}</p>
     
    </div>
  );
};

export default UserInputForm;
