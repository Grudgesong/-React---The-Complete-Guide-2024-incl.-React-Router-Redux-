import React from "react";

// Importing the custom hook useStore from '../hooks-store/store'
import { useStore } from "../hooks-store/store";

// Importing CSS for styling
import "./Counter.css";

// Counter component
const Counter = (props) => {
  // Using the custom hook useStore to access state and dispatch function
  const [state, dispatch] = useStore();

  return (
    // Container div for styling
    <div className="counter">
      {/* Text indicating the purpose of this component */}
      <p>Only there to prove that you can have multiple state slices.</p>
      {/* Displaying the value of the counter from the state */}
      <p>Counter: {state.counter}</p>
      {/* Button to increment counter by 1 */}
      <button onClick={() => dispatch("ADD", 1)}>Add 1</button>
      {/* Button to increment counter by 5 */}
      <button onClick={() => dispatch("ADD", 5)}>Add 5</button>
      {/* Button to decrement counter by 1 */}
      <button onClick={() => dispatch("SUB", 1)}>Subtract 1</button>
      {/* Button to decrement counter by 5 */}
      <button onClick={() => dispatch("SUB", 5)}>Subtract 5</button>
    </div>
  );
};

export default Counter; // Exporting the Counter component
