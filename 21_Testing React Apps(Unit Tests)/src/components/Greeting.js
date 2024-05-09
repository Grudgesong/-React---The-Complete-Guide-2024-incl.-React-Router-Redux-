import { useState } from "react"; // Importing the useState hook from React
import Output from "./Output"; // Importing the Output component

// Functional component Greeting
const Greeting = () => {
  // State to track whether text has been changed
  const [changedText, setChangedText] = useState(false);

  // Event handler to change text
  const changeTextHandler = () => {
    setChangedText(true); // Setting changedText to true
  };

  // Rendering JSX
  return (
    <div>
      <h2>Hello World!</h2>
      {/* Rendering Output component conditionally based on changedText state */}
      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}
      {/* Button to trigger text change */}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting; // Exporting the Greeting component as default

/*
Explanation:

import { useState } from 'react';: This line imports the useState hook from the React library. The useState hook allows functional components to use state.
import Output from './Output';: This line imports the Output component from the './Output' file. The Output component is assumed to be another React component.
const [changedText, setChangedText] = useState(false);: This line declares a state variable changedText and a function setChangedText to update it. The useState hook initializes changedText with a default value of false.
const changeTextHandler = () => { ... };: This is a function declaration for the changeTextHandler. It's an event handler for changing the text. When invoked, it sets the changedText state to true.
return (...): This is the JSX code returned by the Greeting component. It renders a <div> element containing a heading (<h2>) with the text "Hello World!", an Output component conditionally based on the changedText state, a button to trigger the text change, and the Output component to display "Changed!" after the text has been changed.
export default Greeting;: This line exports the Greeting component as the default export, allowing it to be imported and used in other files.
*/
