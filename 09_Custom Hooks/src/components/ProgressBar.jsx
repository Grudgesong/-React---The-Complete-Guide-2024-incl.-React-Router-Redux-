import { useState, useEffect } from "react"; // Importing useState and useEffect hooks from React

// Component for displaying a progress bar
export default function ProgressBar({ timer }) {
  // State to track the remaining time
  const [remainingTime, setRemainingTime] = useState(timer);

  // useEffect hook to update the remaining time at regular intervals
  useEffect(() => {
    // Setting up an interval to decrement the remaining time
    const interval = setInterval(() => {
      // Updating the remaining time by decrementing it by 10 milliseconds
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(interval); // Clearing the interval to avoid memory leaks
    };
  }, []); // Dependency array is empty, so this effect runs only once when the component mounts

  // Rendering a progress element to display the progress bar
  return <progress value={remainingTime} max={timer} />; // Value represents the remaining time, and max represents the total duration
}

/*
Explanation:

State:

The component uses the useState hook to manage the state of remainingTime, which represents the remaining time for the progress bar.
Effect:

The useEffect hook is used to update the remaining time at regular intervals.
Inside the effect, an interval is set up using setInterval. It decrements the remaining time by 10 milliseconds every 10 milliseconds.
The effect runs once when the component mounts ([] as the dependency array), and it cleans up the interval when the component unmounts to prevent memory leaks.
Rendering:

The component returns a <progress> element to display the progress bar.
The value attribute of the progress element represents the current progress, which is set to remainingTime.
The max attribute represents the maximum value of the progress bar, which is set to timer, representing the total duration of the progress bar.
*/
