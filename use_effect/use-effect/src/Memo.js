import React, { useState } from 'react';
import NewComp from './NewComp';
import Use_Memo from './Use_Memo';

const Memo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  function handleInput(e) {
    setInput(e.target.value);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <br />
      <input type="text" onChange={handleInput} value={input} />
      <h1>Input: {input}</h1>
      <hr />
      {/* <NewComp newCount = {count}/> */}
      
    </div>
  );
};

export default Memo;
