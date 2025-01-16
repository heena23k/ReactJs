import React, { useState, useTransition } from "react";

function UseTransitionExample() {
  const [name, setName] = useState('');
  const [lists, setLists] = useState([]);
  const [isPending, startTransition] = useTransition();

  const LIST_SIZE = 20000;

  const handleChange = (e) => {
    const { value } = e.target;
    setName(value);

    startTransition(() => {
      const dataList = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        dataList.push(value);
      }
      setLists(dataList);
    });
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      {isPending ? (
        <div>Loading...</div>
      ) : (
        lists.map((list, index) => (
          <div key={index}>
            {list}
          </div>
        ))
      )}
    </div>
  );
}

export default UseTransitionExample;
