// build a search bar that filters a list items based on user input.
// using props 
import React, { useState } from 'react';

const SearchItems = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filterItem = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)} // Changed from `onClick` to `onChange`
      />
      <ul>
        {filterItem.map((item, index) => (
          <li key={index}>{item}</li> // Added `return` inside the `map` function
        ))}
      </ul>
    </div>
  );
};

export default SearchItems;
