import { useEffect } from "react";

import ProgressBar from "./ProgressBar.jsx";

// Duration of the timer in milliseconds
const TIMER = 3000;

// Component for displaying a confirmation dialog before deleting a place
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  // Effect hook to handle the timer for auto-confirming deletion
  useEffect(() => {
    // Log message indicating timer setup
    console.log("TIMER SET");

    // Set up a timer to automatically confirm deletion after TIMER milliseconds
    const timer = setTimeout(() => {
      onConfirm(); // Invoke the onConfirm callback after the timer expires
    }, TIMER);

    // Clean-up function to clear the timer when the component unmounts or the dependencies change
    return () => {
      // Log message indicating timer cleanup
      console.log("Cleaning up timer");
      clearTimeout(timer); // Clear the timer to prevent memory leaks
    };
  }, [onConfirm]); // Dependency array: useEffect runs only when onConfirm changes

  // JSX for rendering the delete confirmation dialog
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        {/* Button to cancel the deletion */}
        <button onClick={onCancel} className="button-text">
          No
        </button>
        {/* Button to confirm the deletion */}
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      {/* Progress bar component to visually indicate the remaining time */}
      <ProgressBar timer={TIMER} />
    </div>
  );
}
/*
Explanation:

useEffect: It's used to handle the timer for auto-confirming deletion. This hook is executed after the component mounts and whenever the onConfirm function changes.
Timer Setup: Inside the effect, a timer is set using setTimeout() to automatically invoke the onConfirm callback after the specified duration (TIMER).
Clean-up Function: The useEffect hook returns a clean-up function. This function is responsible for clearing the timer to prevent memory leaks when the component unmounts or when the dependencies change.
Dependency Array: The useEffect hook has a dependency array [onConfirm]. This ensures that the effect runs only when the onConfirm function changes, preventing unnecessary re-renders.
JSX: The component renders a confirmation dialog with "Yes" and "No" buttons for confirming or canceling the deletion. It also includes a progress bar component (ProgressBar) to visually indicate the remaining time before auto-confirmation.
*/
