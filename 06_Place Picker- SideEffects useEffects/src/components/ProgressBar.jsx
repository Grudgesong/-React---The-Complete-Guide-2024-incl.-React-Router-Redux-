import { useState, useEffect } from "react";

// Component for displaying a progress bar indicating the remaining time
export default function ProgressBar({ timer }) {
  // State to store the remaining time
  const [remainingTime, setRemainingTime] = useState(timer);

  // Effect to decrement the remaining time at regular intervals
  useEffect(() => {
    // Set up an interval to decrement the remaining time
    const interval = setInterval(() => {
      // Update the remaining time by decrementing it
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10); // Interval of 10 milliseconds

    // Clean up function to clear the interval when the component unmounts or when the timer ends
    return () => {
      clearInterval(interval); // Clear the interval to prevent memory leaks
    };
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  // Render a progress bar element with the current remaining time and the maximum timer value
  return <progress value={remainingTime} max={timer} />;
}

/*
Explanation:

timer: The total duration of the progress bar, in milliseconds.
useState: Hook to manage the state of the remaining time.
useEffect: Hook to perform side effects. It's used here to decrement the remaining time at regular intervals.
remainingTime: State variable to hold the current remaining time.
setRemainingTime: Function to update the value of the remaining time.
Interval: Inside the useEffect, an interval is set up using setInterval to decrement the remaining time by 10 milliseconds.
Clearing Interval: The useEffect returns a cleanup function that clears the interval when the component unmounts or when the timer ends.
Progress Bar: The component renders a <progress> element, where the value attribute represents the current remaining time, and the max attribute represents the total duration specified by the timer prop.
Rendering Logic: The progress bar continuously updates as the remaining time decreases until it reaches zero.
*/
