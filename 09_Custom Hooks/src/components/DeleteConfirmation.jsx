import { useEffect } from "react"; // Importing the useEffect hook
import ProgressBar from "./ProgressBar.jsx"; // Importing the ProgressBar component

const TIMER = 3000; // Constant defining the duration of the timer in milliseconds

// Component for displaying a delete confirmation modal
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  // useEffect hook to set up a timer for automatic confirmation after TIMER duration
  useEffect(() => {
    // Setting up a timer using setTimeout
    const timer = setTimeout(() => {
      onConfirm(); // Calling the onConfirm function after TIMER duration
    }, TIMER);

    // Cleanup function to clear the timer when the component unmounts or dependencies change
    return () => {
      clearTimeout(timer); // Clearing the timer to avoid memory leaks
    };
  }, [onConfirm]); // Dependency array containing the onConfirm function

  // JSX returned by the component
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
      {/* Progress bar component to visualize the remaining time */}
      <ProgressBar timer={TIMER} />
    </div>
  );
}

/*
Explanation:

useEffect Hook: It's used to perform side effects in function components. In this case, it sets up a timer to automatically confirm the deletion after a certain duration (TIMER).

Timer Setup: Inside the useEffect hook, a setTimeout function is used to schedule the onConfirm function to be called after the specified duration (TIMER).

Cleanup: The useEffect hook returns a cleanup function. This function is called when the component unmounts or when the onConfirm function changes (if it's dependent on any external variable). It clears the timer using clearTimeout to prevent memory leaks.

JSX: The component returns JSX that renders a delete confirmation modal:

It displays a message asking if the user is sure about deleting the place.
It provides buttons to confirm or cancel the deletion.
It includes a ProgressBar component to visualize the remaining time before automatic confirmation.
*/
