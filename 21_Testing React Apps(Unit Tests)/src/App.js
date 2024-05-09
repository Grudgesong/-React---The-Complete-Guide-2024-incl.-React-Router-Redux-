import Greeting from "./components/Greeting"; // Importing the Greeting component
import Async from "./components/Async"; // Importing the Async component
import "./App.css"; // Importing the CSS file for styling

// Functional component App
function App() {
  return (
    // Wrapping components inside a div with class 'App' for styling purposes
    <div className="App">
      {/* Rendering the Async component */}
      <Async />
      {/* Rendering the Greeting component */}
      <Greeting />
    </div>
  );
}

export default App; // Exporting the App component as default

/*
Explanation:

import Greeting from './components/Greeting';: This line imports the Greeting component from the ./components/Greeting file. The Greeting component is assumed to be a React component that displays a greeting message.
import Async from './components/Async';: This line imports the Async component from the ./components/Async file. The Async component is assumed to be a React component that demonstrates asynchronous behavior, such as fetching data from an API.
import './App.css';: This line imports the CSS file App.css for styling purposes. The styles defined in this CSS file will be applied to the elements within the App component.
function App() { ... }: This is a functional component named App. It returns JSX code representing the structure of the app.
<div className='App'>...</div>: This div element has a class name of 'App'. It acts as a container for the Async and Greeting components, allowing them to be styled collectively.
<Async /> and <Greeting />: These are JSX elements representing the Async and Greeting components, respectively. They are rendered inside the div element with the class name 'App'.
*/
