import React, { useState } from "react";
import Navigation from "./Navigation";
import "../styles/testerror.css";

const MAX_COUNT_ALLOWED = 5;

function TestError() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    try {
      if (count === MAX_COUNT_ALLOWED) {
        throw new Error("Count limit exceeded");
      } else {
        setCount((prev) => (prev = count + 1));
      }
    } catch (error) {
      console.log("Click Counter Error", error);
    }
  };

  return (
    <div id="test-container">
      <Navigation />
      <div id="test-content">
        <h1>Test the Error Boundary</h1>
        <div id="counter-container">
          <h1>Counter</h1>
          <input value={count} id="counter" readOnly />
          <button onClick={handleClick} id="counter-btn">
            Click
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestError;
