import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [clicked, setClicked] = useState("");
  const [count, setCount] = useState(0);

  // Proper useEffect
  useEffect(() => {
    alert("We are in useEffect");
  }, []);
  // Empty dependency array ensures it runs only once when the component mounts.
  // using the dependecy ant without dependency
  return (
    <div>
      <button onClick={() => setClicked("Subscribed")}>Subscribe</button>
      <br />
      <hr />
      <button onClick={() => setClicked("To")}>To</button>
      <br />
      <hr />
      <button onClick={() => setClicked("DropXOut")}>Drop X Out</button>
      <h1>{clicked}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <h1>{count}</h1>
    </div>
  );
};

export default UseEffect;
