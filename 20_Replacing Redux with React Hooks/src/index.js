import React from "react";
import ReactDOM from "react-dom/client"; // Importing ReactDOM from 'react-dom/client' module
import { BrowserRouter } from "react-router-dom"; // Importing BrowserRouter for routing

import "./index.css"; // Importing CSS file
import App from "./App"; // Importing the main App component
import configureProductsStore from "./hooks-store/products-store"; // Importing store configuration for products
import configureCounterStore from "./hooks-store/counter-store"; // Importing store configuration for counter

// Configuring the products store
configureProductsStore();
// Configuring the counter store
configureCounterStore();

// Creating a React root for rendering the app
const root = ReactDOM.createRoot(document.getElementById("root"));
// Rendering the App component wrapped inside BrowserRouter for routing
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

/*
Explanation:

import ReactDOM from 'react-dom/client';: This imports ReactDOM from the react-dom/client module. It's a different way of importing ReactDOM, typically used in server-side rendering environments.
import { BrowserRouter } from 'react-router-dom';: This imports the BrowserRouter component from the react-router-dom library. It's used for client-side routing in React applications.
configureProductsStore(); and configureCounterStore();: These lines call functions to configure the products store and counter store respectively. These functions presumably set up the initial state and actions for the stores.
const root = ReactDOM.createRoot(document.getElementById('root'));: This creates a React root using ReactDOM.createRoot() method, specifying the HTML element with the id 'root' as the container for rendering the React app.
root.render(...): This renders the App component wrapped inside BrowserRouter. The App component is the main component of the application, and it's rendered within the BrowserRouter to enable routing functionality for the entire app.
*/
