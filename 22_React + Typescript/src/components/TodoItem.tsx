// Importing CSS modules for styling
import classes from "./TodoItem.module.css";

// Define a new functional component called TodoItem
const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (
  props
) => {
  // Return JSX for the TodoItem component
  return (
    // List item representing a todo item with a class from CSS module
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {/* Displaying the text content of the todo item */}
      {props.text}
    </li>
  );
};

// Export the TodoItem component as the default export
export default TodoItem;

/*
import classes from './TodoItem.module.css';: Imports CSS modules for styling the TodoItem component.
const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (props) => { ... }: Defines a new functional component called TodoItem. It takes props including text (string) and onRemoveTodo (a function that takes no arguments and returns void).
<li className={classes.item} onClick={props.onRemoveTodo}>...</li>: Renders a list item (<li>) representing a todo item. It applies a class from the CSS module for styling and attaches an onClick event handler that triggers the onRemoveTodo function when clicked.
{props.text}: Displays the text content of the todo item.
export default TodoItem;: Exports the TodoItem component as the default export, making it available for use in other files.
*/
