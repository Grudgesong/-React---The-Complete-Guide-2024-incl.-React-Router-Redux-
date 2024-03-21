import { useState, useRef } from "react";
// Importing the ResultModal component from the specified file path
import ResultModal from "./ResultModal.jsx";

// Define the TimerChallenge component
export default function TimerChallenge({ title, targetTime }) {
  // Creating a reference for the timer and dialog elements
  const timer = useRef();
  const dialog = useRef();

  // State to track the remaining time
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  // Boolean to check if the timer is active
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  // Handling when time runs out
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open(); // Opening the result modal dialog
  }

  // Function to reset the timer
  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  // Function to start the timer
  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  // Function to stop the timer
  function handleStop() {
    dialog.current.open(); // Opening the result modal dialog
    clearInterval(timer.current);
  }

  // Rendering the TimerChallenge component
  return (
    <>
      {/* Rendering the ResultModal component */}
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      {/* Rendering the challenge section */}
      <section className="challenge">
        <h2>{title}</h2>
        {/* Displaying the target time */}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        {/* Button to start or stop the challenge */}
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        {/* Displaying the timer status */}
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
