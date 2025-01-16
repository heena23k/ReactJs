import React, { useEffect, useLayoutEffect } from 'react';

const UseLayoutExample = () => {
  // useLayoutEffect runs synchronously before the DOM is painted
  useLayoutEffect(() => {
    console.log("UseLayoutEffect part");
  }, []);

  // useEffect runs asynchronously after the DOM is painted
  useEffect(() => {
    console.log("UseEffect part");
  }, []);

  return (
    <div>
      <h1>Check the console for the order of execution</h1>
    </div>
  );
};

export default UseLayoutExample;
