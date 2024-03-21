// Importing necessary hooks and functions from React
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

// Defining ResultModal component using forwardRef
const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset }, // Props passed to the component
  ref // Forwarded ref
) {
  // Creating a reference for the dialog element
  const dialog = useRef();

  // Checking if the user lost based on remaining time
  const userLost = remainingTime <= 0;
  // Formatting remaining time for display
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  // Calculating score based on remaining time and target time
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  // Using useImperativeHandle to expose a function to open the modal using the forwarded ref
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal(); // Showing the modal dialog
      },
    };
  });

  // Rendering the ResultModal component outside the main DOM tree using createPortal
  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {/* Displaying appropriate message based on whether the user lost */}
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      {/* Displaying information about target time and remaining time */}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      {/* Form for resetting the timer */}
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal") // Rendering portal into the element with id 'modal'
  );
});

// Exporting the ResultModal component
export default ResultModal;
