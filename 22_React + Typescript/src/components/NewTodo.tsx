import { useRef, useContext } from "react";

// Importing the TodosContext from the store directory
import { TodosContext } from "../store/todos-context";

// Importing CSS modules for styling
import classes from "./NewTodo.module.css";

// Define a new functional component called NewTodo
const NewTodo: React.FC = () => {
  // Accessing the TodosContext using the useContext hook
  const todosCtx = useContext(TodosContext);

  // useRef hook to create a reference to the input element
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  // Function to handle form submission
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Extracting the value of the input element
    const enteredText = todoTextInputRef.current!.value;

    // Check if the entered text is empty
    if (enteredText.trim().length === 0) {
      // If it is empty, return early (do nothing)
      return;
    }

    // Call the addTodo function from the TodosContext with the entered text as argument
    todosCtx.addTodo(enteredText);
  };

  // Return the JSX for the NewTodo component
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      {/* Input element with a ref pointing to todoTextInputRef */}
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

// Export the NewTodo component as the default export
export default NewTodo;

/*
import { useRef, useContext } from 'react';: Imports the useRef and useContext hooks from the React library.
import { TodosContext } from '../store/todos-context';: Imports the TodosContext from the store directory.
import classes from './NewTodo.module.css';: Imports CSS modules for styling.
const NewTodo: React.FC = () => { ... }: Defines a functional component called NewTodo.
const todosCtx = useContext(TodosContext);: Uses the useContext hook to access the TodosContext.
const todoTextInputRef = useRef<HTMLInputElement>(null);: Creates a reference to the input element using the useRef hook.
const submitHandler = (event: React.FormEvent) => { ... }: Defines a function to handle form submission.
event.preventDefault();: Prevents the default form submission behavior.
const enteredText = todoTextInputRef.current!.value;: Retrieves the value of the input element.
if (enteredText.trim().length === 0) { ... }: Checks if the entered text is empty.
todosCtx.addTodo(enteredText);: Calls the addTodo function from the TodosContext with the entered text as an argument.
return ( ... );: Returns the JSX for the NewTodo component, including a form with a label, input, and button.
export default NewTodo;: Exports the NewTodo component as the default export.
*/
