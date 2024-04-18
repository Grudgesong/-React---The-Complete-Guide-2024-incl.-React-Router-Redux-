import { createContext, useReducer } from "react";

// Create a context with initial values for cart items and actions
const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

// Reducer function to handle cart actions
function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    // Find index of existing item in cart
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    // Create a copy of current cart items
    const updatedItems = [...state.items];

    // If item already exists in cart, update its quantity
    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // If item doesn't exist, add it to cart with quantity 1
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    // Return updated state with new cart items
    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    // Find index of item to be removed
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    // Create a copy of current cart items
    const updatedItems = [...state.items];

    // If item quantity is 1, remove it from cart
    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      // If item quantity > 1, decrease its quantity
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    // Return updated state with new cart items
    return { ...state, items: updatedItems };
  }

  if (action.type === "CLEAR_CART") {
    // Clear cart by setting items to an empty array
    return { ...state, items: [] };
  }

  // If action type is not recognized, return current state
  return state;
}

// Cart Context Provider component
export function CartContextProvider({ children }) {
  // Use reducer to manage cart state
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  // Action to add an item to cart
  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  // Action to remove an item from cart
  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }

  // Action to clear the entire cart
  function clearCart() {
    dispatchCartAction({ type: "CLEAR_CART" });
  }

  // Cart context object with current items and actions
  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart,
  };

  // Provide cart context to children components
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

// Export the CartContext and CartContextProvider
export default CartContext;

/*
Imports:
The code imports createContext and useReducer from the React library. These are necessary for creating a context and managing state using reducers, respectively.
CartContext Creation:
A context named CartContext is created using createContext().
Initial values for the context are provided, including an empty items array and placeholder functions (addItem, removeItem, clearCart).
Reducer Function (cartReducer):
cartReducer is a function that specifies how the cart state should be updated based on dispatched actions.
It takes the current state and an action as input and returns the new state.
The reducer handles actions like adding an item, removing an item, and clearing the cart.
CartContextProvider Component:
CartContextProvider is a component responsible for managing the cart state and providing it to its children via context.
It uses the useReducer hook to manage the cart state with the cartReducer.
Functions (addItem, removeItem, clearCart) are defined inside CartContextProvider to dispatch corresponding actions to update the cart state.
The cartContext object is created, containing the current items and action functions.
The CartContext.Provider component wraps its children and provides the cartContext value to them.
Export:
The CartContext and CartContextProvider components are exported to be used in other parts of the application.
*/
