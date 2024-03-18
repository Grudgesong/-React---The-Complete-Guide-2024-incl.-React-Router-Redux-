import { useState } from "react";

// Importing necessary components
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

// Main App component
function App() {
  // State variable for user input data
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  // Function to handle changes in user input
  function handleChange(inputIdentifier, newValue) {
    // Update user input state with new value
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, // Convert newValue to number and update
      };
    });
  }

  // Check if input duration is valid
  const inputIsValid = userInput.duration >= 1;

  // Render components based on input validity
  return (
    <>
      {/* Render Header component */}
      <Header />
      {/* Render UserInput component to take user input */}
      <UserInput userInput={userInput} onChange={handleChange} />
      {/* Display error message if input duration is not valid */}
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {/* Render Results component if input duration is valid */}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

// Export the App component as the default export
export default App;
