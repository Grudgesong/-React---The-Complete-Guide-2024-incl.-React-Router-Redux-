import { useState } from "react"; // Importing useState hook from React
import { AnimatePresence, motion } from "framer-motion"; // Importing AnimatePresence and motion components from Framer Motion

import NewChallenge from "./NewChallenge.jsx"; // Importing the NewChallenge component

// Define the Header component
export default function Header() {
  // State variable to track whether a new challenge is being created
  const [isCreatingNewChallenge, setIsCreatingNewChallenge] = useState();

  // Function to handle starting the process of adding a new challenge
  function handleStartAddNewChallenge() {
    setIsCreatingNewChallenge(true);
  }

  // Function to handle when adding a new challenge is done
  function handleDone() {
    setIsCreatingNewChallenge(false);
  }

  return (
    <>
      {/* AnimatePresence for handling presence animations */}
      <AnimatePresence>
        {/* Render NewChallenge component if isCreatingNewChallenge is true */}
        {isCreatingNewChallenge && <NewChallenge onDone={handleDone} />}
      </AnimatePresence>

      {/* Main header section */}
      <header id="main-header">
        {/* Title */}
        <h1>Your Challenges</h1>
        {/* Button to add a new challenge */}
        <motion.button
          whileHover={{ scale: 1.1 }} // Scale animation on hover
          transition={{ type: "spring", stiffness: 500 }} // Spring animation transition
          onClick={handleStartAddNewChallenge} // Handler for clicking the button
          className="button" // CSS class for styling
        >
          Add Challenge
        </motion.button>
      </header>
    </>
  );
}

/*
Explanation:

The component uses the useState hook to manage state. isCreatingNewChallenge state variable tracks whether the user is in the process of creating a new challenge.
Two functions, handleStartAddNewChallenge and handleDone, are defined to handle starting the process of adding a new challenge and indicating when the addition is done, respectively.
Inside the component:
An AnimatePresence component is used to handle presence animations. This allows for smooth entrance and exit animations when components appear or disappear from the DOM.
If isCreatingNewChallenge is true, the NewChallenge component is rendered. This component likely represents a form or interface for adding a new challenge. The onDone prop is passed to the NewChallenge component to handle when the addition process is done.
The main header section (<header id="main-header">) contains:
A title (<h1>Your Challenges</h1>) representing the heading of the header.
An "Add Challenge" button (<motion.button>) which triggers the handleStartAddNewChallenge function when clicked. This button uses Framer Motion's motion.button component to apply animations (whileHover and transition) for a more interactive user experience.
This component provides a user-friendly interface for managing challenges, allowing users to easily add new challenges and view existing ones.
*/
