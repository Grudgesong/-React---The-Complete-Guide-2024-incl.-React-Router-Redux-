import { createContext, useState } from "react";

// Create a context with initial values for user progress and actions
const UserProgressContext = createContext({
  progress: "", // 'cart', 'checkout'
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

// User Progress Context Provider component
export function UserProgressContextProvider({ children }) {
  // State to manage user progress
  const [userProgress, setUserProgress] = useState("");

  // Function to set user progress to 'cart'
  function showCart() {
    setUserProgress("cart");
  }

  // Function to reset user progress
  function hideCart() {
    setUserProgress("");
  }

  // Function to set user progress to 'checkout'
  function showCheckout() {
    setUserProgress("checkout");
  }

  // Function to reset user progress
  function hideCheckout() {
    setUserProgress("");
  }

  // Context object with current user progress and actions
  const userProgressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  // Provide user progress context to children components
  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}

// Export the UserProgressContext and UserProgressContextProvider
export default UserProgressContext;

/*
Imports:
The code imports createContext and useState from React.
UserProgressContext Creation:
A context named UserProgressContext is created using createContext().
Initial values for the context are provided, including the current progress (initially empty) and functions to show/hide the cart and checkout steps.
UserProgressContextProvider Component:
UserProgressContextProvider is a component responsible for managing the user's progress and providing it to its children via context.
It uses the useState hook to manage the user's progress state.
Functions (showCart, hideCart, showCheckout, hideCheckout) are defined inside UserProgressContextProvider to update the user's progress state.
The userProgressCtx object is created, containing the current progress and functions to update it.
The UserProgressContext.Provider component wraps its children and provides the userProgressCtx value to them.
Export:
The UserProgressContext and UserProgressContextProvider components are exported to be used in other parts of the application.
*/
