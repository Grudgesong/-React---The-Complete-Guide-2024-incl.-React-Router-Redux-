import { initStore } from "./store";

// Function to configure the store
const configureStore = () => {
  // Define actions to be handled by the store
  const actions = {
    // Action to increment the counter
    ADD: (state, amount) => ({ counter: state.counter + amount }),
    // Action to decrement the counter
    SUB: (state, amount) => ({ counter: state.counter - amount }),
  };

  // Initialize the store with the defined actions and initial state
  initStore(actions, { counter: 0 });
};

export default configureStore; // Exporting the configureStore function
