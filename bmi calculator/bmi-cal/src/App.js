import "./App.css";
import React, { useState,useMemo } from "react";
function App() {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70);
  function onWeightChange(e) {
    setWeight(e.target.value);
    console.log(weight);
  }
  function onHeightChange(e) {
    setHeight(e.target.value);
    console.log(height);
  }
  const output = useMemo(() => {
    // convrt height into meter
    const calculateHeight = height/100
    return(weight/(calculateHeight*calculateHeight)).toFixed(1)


   } ,[weight,height])

  return (
    <main>
      <h1> BMI Calculator</h1>
      <div className="input-section">
        <p className="slider-output"> Weight:{weight}</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="40"
          max="200"
          onChange={onWeightChange}
        />
      </div>
      <div>
        <p className="slider-output"> Height:{height}cm</p>
        <input
          className="input-slider"
          type="range"
          onChange={onHeightChange}
          step="1"
          min="140"
          max="220"
        />
      </div>
      <div className="output-section">
        <p>Your BMI is:</p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
}

export default App;
