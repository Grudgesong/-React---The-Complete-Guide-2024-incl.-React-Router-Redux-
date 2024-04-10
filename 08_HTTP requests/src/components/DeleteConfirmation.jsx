import { useEffect } from "react";

import ProgressBar from "./ProgressBar.jsx"; // Importing ProgressBar component

const TIMER = 3000; // Timer duration in milliseconds

// Component for displaying a delete confirmation modal
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    // Set a timer to automatically confirm deletion after TIMER duration
    const timer = setTimeout(() => {
      onConfirm(); // Call the onConfirm callback function
    }, TIMER);

    // Clean up function to clear the timer when component unmounts or dependencies change
    return () => {
      clearTimeout(timer); // Clear the timer to avoid memory leaks
    };
  }, [onConfirm]); // Run effect only when onConfirm callback changes

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        {/* Button to cancel deletion */}
        <button onClick={onCancel} className="button-text">
          No
        </button>
        {/* Button to confirm deletion */}
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      {/* Progress bar component to indicate remaining time before automatic confirmation */}
      <ProgressBar timer={TIMER} />
    </div>
  );
}

/*
Explanation:

useEffect Hook:

This hook is used to perform side effects in the component.
In this component, it sets up a timer to automatically confirm deletion after a specified duration (TIMER).
The effect runs only once on component mount because it has an empty dependency array ([]), meaning it doesn't depend on any props or state changes.
Timer Setup:

Inside the useEffect, a setTimeout function is used to trigger the onConfirm callback after the specified time (TIMER).
The onConfirm function is passed as a dependency to the useEffect, so if it changes, the effect will run again with the updated callback.
Cleanup Function:

The useEffect returns a cleanup function to clear the timer when the component unmounts or when the onConfirm callback changes.
This prevents memory leaks and ensures that the timer is properly cleaned up.
Rendering:

The component renders a delete confirmation message with "Yes" and "No" buttons to confirm or cancel deletion.
It also renders a ProgressBar component to visually indicate the remaining time before automatic confirmation. The timer prop is passed to the ProgressBar component to indicate the total duration of the timer.
*/
