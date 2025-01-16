// Build a list component to display a list of items

import React from "react";

const DisplayList = () => {
  const items = ["item1", "item2", "item3", "item4", "item5"];
  return (
    <div>
    <p>Item Name and index</p>
      <ul>
        {items.map((items, index) => {
            return <li key={index}>{items} {index}</li>;
        })}
      </ul>
    </div>
  );
};

export default DisplayList;
