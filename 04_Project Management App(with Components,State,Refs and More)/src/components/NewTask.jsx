import { useState } from "react";

// This component represents a form for adding a new task.

export default function NewTask({ onAdd }) {
  // State for managing the entered task
  const [enteredTask, setEnteredTask] = useState("");

  // Function to handle changes in the input field
  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  // Function to handle adding a new task
  function handleClick() {
    // Check if the entered task is not empty
    if (enteredTask.trim() === "") {
      return; // If empty, do nothing
    }
    // If not empty, call the onAdd function with the entered task
    onAdd(enteredTask);
    // Clear the input field after adding the task
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      {/* Input field for entering the task */}
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      {/* Button for adding the task */}
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}

/*
Explanation:

The NewTask component is a form for adding a new task.
It uses the useState hook to manage the state of the entered task.
When the input field value changes, the handleChange function updates the enteredTask state accordingly.
When the "Add Task" button is clicked, the handleClick function checks if the entered task is not empty. If it's not empty, it calls the onAdd function passed from the parent component with the entered task and clears the input field.
The input field is controlled using the value prop, which is set to the enteredTask state, and the onChange event handler updates the state when the input value changes.
The button triggers the handleClick function when clicked to add the task.
 */
