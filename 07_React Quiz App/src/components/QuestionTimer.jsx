import { useState, useEffect } from "react";

// Component for displaying and managing the question timer
export default function QuestionTimer({ timeout, onTimeout, mode }) {
  // State to track the remaining time on the timer
  const [remainingTime, setRemainingTime] = useState(timeout);

  // Effect to handle the countdown timer
  useEffect(() => {
    // Create a timer that calls the onTimeout callback after the specified timeout duration
    const timer = setTimeout(onTimeout, timeout);

    // Cleanup function to clear the timer when the component unmounts or when the timeout changes
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  // Effect to update the remaining time every 100 milliseconds
  useEffect(() => {
    // Create an interval to decrement the remaining time every 100 milliseconds
    const interval = setInterval(() => {
      // Update the remaining time by decrementing it by 100 milliseconds
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Render a progress bar to visually represent the remaining time
  return (
    <progress
      id="question-time"
      max={timeout} // Set the maximum value of the progress bar to the timeout duration
      value={remainingTime} // Set the current value of the progress bar to the remaining time
      className={mode} // Apply additional class names based on the mode (e.g., 'correct', 'wrong')
    />
  );
}

/*
Explanation:

useState: Used to manage the state of the remaining time on the timer.
useEffect: Used to perform side effects related to the timer.
The first useEffect is responsible for setting up a timer using setTimeout. It triggers the onTimeout callback function after the specified timeout duration. It also clears the timer when the component unmounts or when the timeout duration changes.
The second useEffect is responsible for updating the remaining time every 100 milliseconds. It creates an interval to decrement the remaining time and clears the interval when the component unmounts.
The progress element is used to visually represent the remaining time as a progress bar. The max attribute is set to the timeout duration, and the value attribute is set to the remaining time. Additional class names (mode) can be applied to customize the appearance of the progress bar based on the current mode (e.g., 'correct', 'wrong').
*/
