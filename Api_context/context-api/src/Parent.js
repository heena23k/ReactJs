import React, { useRef } from 'react';
import Child from './Child';

const Parent = () => {
  const childRef = useRef(null);

  const handleOpenModal = (val) => {
    if (childRef.current) {
      childRef.current.openModal(val); // Call the method exposed by Child
    }
  };

  return (
    <div>
      <p>This is Parent</p>
      <Child ref={childRef} />
      <button onClick={() => handleOpenModal(true)}>Open Modal</button>
    </div>
  );
};

export default Parent;
