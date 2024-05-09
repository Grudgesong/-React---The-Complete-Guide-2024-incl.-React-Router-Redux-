import { useState, useEffect } from "react";

// Global variables to hold the state, listeners, and actions
let globalState = {};
let listeners = [];
let actions = {};

// Custom hook useStore for managing state and dispatching actions
export const useStore = (shouldListen = true) => {
  // Get the state and setState function from useState hook
  const setState = useState(globalState)[1];

  // Dispatch function to dispatch actions
  const dispatch = (actionIdentifier, payload) => {
    // Get the new state from the action and current global state
    const newState = actions[actionIdentifier](globalState, payload);
    // Update the global state
    globalState = { ...globalState, ...newState };

    // Notify all listeners about the state change
    for (const listener of listeners) {
      listener(globalState);
    }
  };

  // Register/unregister listeners based on shouldListen flag
  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState); // Add setState function to listeners array
    }

    return () => {
      if (shouldListen) {
        listeners = listeners.filter((li) => li !== setState); // Remove setState function from listeners array
      }
    };
  }, [setState, shouldListen]); // Dependencies for useEffect hook

  // Return the global state and dispatch function
  return [globalState, dispatch];
};

// Function to initialize the store with actions and initial state
export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState }; // Set initial state to global state
  }
  actions = { ...actions, ...userActions }; // Merge user-defined actions with existing actions
};

/*
useStore is a custom hook that returns the global state and a dispatch function for updating the state. It also registers/unregisters listeners based on the shouldListen flag.
initStore is a function for initializing the store with user-defined actions and an initial state. It updates the global state and actions accordingly.
*/
