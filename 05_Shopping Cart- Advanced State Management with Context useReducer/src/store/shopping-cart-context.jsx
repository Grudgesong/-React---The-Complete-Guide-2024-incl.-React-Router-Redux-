import { createContext, useReducer } from "react";

import { DUMMY_PRODUCTS } from "../dummy-products.js"; // Importing dummy product data

// Creating a context for the shopping cart
export const CartContext = createContext({
  items: [], // Initial state of items in the shopping cart
  addItemToCart: () => {}, // Function to add an item to the cart
  updateItemQuantity: () => {}, // Function to update the quantity of an item in the cart
});

// Reducer function to manage shopping cart state
function shoppingCartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items]; // Copying the existing items array

    // Finding the index of the existing item in the cart
    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );
    const existingCartItem = updatedItems[existingCartItemIndex]; // Fetching the existing item from the cart

    if (existingCartItem) {
      // If the item already exists in the cart, update its quantity
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // If the item is not in the cart, add it
      const product = DUMMY_PRODUCTS.find(
        (product) => product.id === action.payload
      );
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      ...state, // Not necessary because we only have one value in state
      items: updatedItems, // Updating the items array in state
    };
  }

  if (action.type === "UPDATE_ITEM") {
    const updatedItems = [...state.items]; // Copying the existing items array

    // Finding the index of the item to be updated
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex], // Copying the existing item
    };

    // Updating the quantity of the item based on the action payload
    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      // If the quantity becomes zero or negative, remove the item from the cart
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem; // Update the item in the array
    }

    return {
      ...state,
      items: updatedItems, // Updating the items array in state
    };
  }
  return state; // If no action matches, return the unchanged state
}

// Component to provide shopping cart context to the application
export default function CartContextProvider({ children }) {
  // Using useReducer hook to manage state with the shoppingCartReducer
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [], // Initial state with an empty items array
    }
  );

  // Function to handle adding an item to the cart
  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: id,
    });
  }

  // Function to handle updating the quantity of an item in the cart
  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        productId,
        amount,
      },
    });
  }

  // Context value to be provided to consumers
  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  // Providing the context value to children components
  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}

/*
Explanation:

CartContext: This is a context object created using createContext. It provides the initial structure of the context, including the items in the cart and functions to add items and update item quantities.
shoppingCartReducer: This is a reducer function responsible for managing the state of the shopping cart. It handles actions like adding items to the cart and updating item quantities based on the dispatched actions.
CartContextProvider: This component is responsible for providing the shopping cart context to the application. It uses useReducer hook to manage the state of the shopping cart and dispatch actions to the reducer function. It also defines functions to handle adding items to the cart and updating item quantities. Finally, it wraps its children with CartContext.Provider, passing down the context value. */
