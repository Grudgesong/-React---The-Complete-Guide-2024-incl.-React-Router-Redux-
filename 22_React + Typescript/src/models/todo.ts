// Define a class called Todo
class Todo {
  // Properties of the Todo class
  id: string; // Unique identifier for the todo item
  text: string; // Text content of the todo item

  // Constructor method for creating instances of the Todo class
  constructor(todoText: string) {
    // Initialize the text property with the provided todoText
    this.text = todoText;
    // Generate a unique identifier for the todo item using the current date and time
    this.id = new Date().toISOString();
  }
}

// Export the Todo class as the default export
export default Todo;

/*
class Todo { ... }: Defines a class called Todo.
id: string; and text: string;: Declares two properties for the Todo class: id for the unique identifier of the todo item and text for the text content of the todo item.
constructor(todoText: string) { ... }: Defines a constructor method for the Todo class. The constructor takes a parameter todoText of type string, representing the text content of the todo item.
this.text = todoText;: Sets the text property of the todo item to the value provided in the todoText parameter.
this.id = new Date().toISOString();: Generates a unique identifier for the todo item using the current date and time converted to a string in ISO format.
export default Todo;: Exports the Todo class as the default export, allowing it to be imported and used in other files.
*/
