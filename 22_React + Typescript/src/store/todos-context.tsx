import React, { useState } from "react";

import Todo from "../models/todo"; // Importing the Todo model

// Defining the shape of the TodosContext
type TodosContextObj = {
  items: Todo[]; // An array of Todo objects
  addTodo: (text: string) => void; // Function to add a new Todo
  removeTodo: (id: string) => void; // Function to remove a Todo by its ID
};

// Creating a context with default values
export const TodosContext = React.createContext<TodosContextObj>({
  items: [], // Default empty array of Todo objects
  addTodo: () => {}, // Default function for adding a Todo (does nothing)
  removeTodo: (id: string) => {}, // Default function for removing a Todo (does nothing)
});

// Creating a provider component for the TodosContext
const TodosContextProvider: React.FC = (props) => {
  // State to manage the array of Todo objects
  const [todos, setTodos] = useState<Todo[]>([]);

  // Function to add a new Todo to the array
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText); // Creating a new Todo object

    // Updating the state with the new Todo added to the array
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  // Function to remove a Todo from the array based on its ID
  const removeTodoHandler = (todoId: string) => {
    // Updating the state by filtering out the Todo with the specified ID
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  // Creating the context value object with updated todos array and handler functions
  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  // Rendering the TodosContext.Provider with the context value and children components
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider; // Exporting the TodosContextProvider component
