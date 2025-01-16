//create a component that displays random quote each time it is rendered

import React, { useState } from "react";

const RandomQuote = () => {
  const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
    "Whether you think you can or think you can't, you're right. - Henry Ford",
    "The best way to predict your future is to create it. - Abraham Lincoln",
  ];

  const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

  const [quote, setQuote] = useState(getRandomQuote());

  const handleNewQuote = () => {
    setQuote(getRandomQuote());
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <blockquote style={{ fontSize: "1.5em", fontStyle: "italic", margin: "20px 0" }}>
        "{quote}"
      </blockquote>
      <button
        onClick={handleNewQuote}
        style={{
          padding: "10px 20px",
          fontSize: "20px",
          cursor: "pointer",
          borderRadius: "5px",
          border: "1px solid #ccc",
          backgroundColor: "#f5f5f5",
        }}
      >
        Generate New Quote
      </button>
    </div>
  );
};

export default RandomQuote;

