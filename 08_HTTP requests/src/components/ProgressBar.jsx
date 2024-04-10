import { useState, useEffect } from "react";

// Component for displaying a progress bar indicating remaining time
export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer); // State to track remaining time

  // Effect to decrement remaining time at regular intervals
  useEffect(() => {
    const interval = setInterval(() => {
      // Decrement remaining time by 10 milliseconds
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10); // Interval of 10 milliseconds

    // Clean up function to clear the interval when component unmounts or dependencies change
    return () => {
      clearInterval(interval); // Clear the interval to avoid memory leaks
    };
  }, []); // Run effect only once on component mount

  // Render a progress element representing the remaining time
  return <progress value={remainingTime} max={timer} />;
}

/*
Explanation:

ProgressBar Component:

This functional component represents a progress bar indicating the remaining time.
It accepts a timer prop, which specifies the total duration of the progress bar.
useState Hook:

The useState hook is used to create state (remainingTime) to track the remaining time.
The initial value of remainingTime is set to the timer value passed as a prop.
useEffect Hook:

The useEffect hook is used to set up a timer to decrement the remaining time at regular intervals.
The effect runs once when the component mounts (due to the empty dependency array []), setting up the timer.
Inside the effect, a setInterval function is used to decrement the remainingTime state by 10 milliseconds at intervals of 10 milliseconds.
Clean Up:

The effect returns a cleanup function to clear the interval when the component unmounts or when the timer prop changes.
This cleanup function prevents memory leaks by ensuring that the interval is properly cleared when it's no longer needed.
Rendering:

The component renders a <progress> element representing the remaining time.
The value attribute of the progress element is set to remainingTime, indicating the current progress.
The max attribute is set to timer, representing the total duration of the progress bar.
*/
