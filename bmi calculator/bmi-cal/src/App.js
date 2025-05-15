import React, { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70);

  function onWeightChange(e) {
    setWeight(e.target.value);
  }

  function onHeightChange(e) {
    setHeight(e.target.value);
  }

  const bmi = useMemo(() => {
    const h = height / 100;
    return (weight / (h * h)).toFixed(1);
  }, [weight, height]);

  // Get BMI category and related color class
  const { category, colorClass } = useMemo(() => {
    const value = parseFloat(bmi);
    if (value < 18.5) return { category: "Underweight", colorClass: "underweight" };
    else if (value < 25) return { category: "Normal weight", colorClass: "normal" };
    else if (value < 30) return { category: "Overweight", colorClass: "overweight" };
    else return { category: "Obese", colorClass: "obese" };
  }, [bmi]);

  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className="input-section">
        <p className="slider-output">Weight: {weight} kg</p>
        <input
          className="input-slider"
          type="range"
          min="40"
          max="200"
          value={weight}
          onChange={onWeightChange}
        />
      </div>

      <div className="input-section">
        <p className="slider-output">Height: {height} cm</p>
        <input
          className="input-slider"
          type="range"
          min="140"
          max="220"
          value={height}
          onChange={onHeightChange}
        />
      </div>

      <div className="output-section">
        <p>Your BMI is:</p>
        <p className={`output ${colorClass}`}>{bmi}</p>
        <p className="category">Category: {category}</p>
      </div>
    </main>
  );
}

export default App;
