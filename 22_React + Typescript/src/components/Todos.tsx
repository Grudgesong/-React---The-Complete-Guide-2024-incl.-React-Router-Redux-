import React, { useContext } from "react";

// Importing the TodoItem component
import TodoItem from "./TodoItem";

// Importing the TodosContext from the store directory
import { TodosContext } from "../store/todos-context";

// Importing CSS modules for styling
import classes from "./Todos.module.css";

// Define a new functional component called Todos
const Todos: React.FC = () => {
  // Accessing the TodosContext using the useContext hook
  const todosCtx = useContext(TodosContext);

  // Return the JSX for the Todos component
  return (
    <ul className={classes.todos}>
      {/* Mapping through the items array in the TodosContext */}
      {todosCtx.items.map((item) => (
        // Rendering TodoItem component for each item in the array
        <TodoItem
          key={item.id} // Unique key for each TodoItem
          text={item.text} // Text content of the TodoItem
          // Binding the removeTodo function from TodosContext with the item's id as argument
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

// Export the Todos component as the default export
export default Todos;

/*
import React, { useContext } from 'react';: Imports React and the useContext hook from the React library.
import TodoItem from './TodoItem';: Imports the TodoItem component from the current directory.
import { TodosContext } from '../store/todos-context';: Imports the TodosContext from the store directory.
import classes from './Todos.module.css';: Imports CSS modules for styling.
const todosCtx = useContext(TodosContext);: Uses the useContext hook to access the TodosContext.
<ul className={classes.todos}>...</ul>: Renders an unordered list with a class name for styling.
{todosCtx.items.map((item) => ... )}: Maps through the items array in the TodosContext.
<TodoItem ... />: Renders a TodoItem component for each item in the array.
key={item.id}: Provides a unique key for each TodoItem.
text={item.text}: Passes the text content of the TodoItem as a prop.
onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}: Binds the removeTodo function from TodosContext with the item's id as an argument.
export default Todos;: Exports the Todos component as the default export.
*/
