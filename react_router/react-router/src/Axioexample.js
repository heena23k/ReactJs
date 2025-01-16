import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosExample = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form submitted with:', name);
    setName('');
    axios.post('https://jsonplaceholder.typicode.com/users')
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter a name"
        />
        <button type="submit">Add item</button>
      </form>

      <h2>Fetched Data:</h2>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default AxiosExample;
