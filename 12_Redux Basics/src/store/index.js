// Importing the configureStore function from '@reduxjs/toolkit' package
import { configureStore } from "@reduxjs/toolkit";

// Importing the reducers for the counter and authentication states
import counterReducer from "./counter";
import authReducer from "./auth";

// Configuring the Redux store by combining reducers and creating the store
const store = configureStore({
  // Specifying reducers for different parts of the state
  reducer: {
    // Assigning the counterReducer to handle the 'counter' state
    counter: counterReducer,
    // Assigning the authReducer to handle the 'auth' state
    auth: authReducer,
  },
});

// Exporting the configured Redux store to be used throughout the application
export default store;

/*
The configureStore function from Redux Toolkit is imported to set up the Redux store.
Reducers for the counter and authentication states are imported. Reducers are functions that specify how the application's state changes in response to actions sent to the store.
The configureStore function is called with an object as an argument. Inside this object:
The reducer property is set, which is an object containing key-value pairs. Each key represents a slice of the state, and each value is a reducer function responsible for managing that slice of the state.
Finally, the configured Redux store is exported to be used throughout the application.
*/
