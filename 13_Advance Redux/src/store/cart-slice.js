import { createSlice } from "@reduxjs/toolkit";

// Creating a slice of the Redux store for managing cart state
const cartSlice = createSlice({
  name: "cart", // Unique name for the slice
  initialState: {
    // Initial state of the cart slice
    items: [], // Array to store cart items
    totalQuantity: 0, // Total quantity of items in the cart
    changed: false, // Flag to indicate if the cart has changed
  },
  reducers: {
    // Reducer function to replace the entire cart state with new data
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity; // Updating totalQuantity with new value
      state.items = action.payload.items; // Updating items array with new value
    },
    // Reducer function to add an item to the cart
    addItemToCart(state, action) {
      const newItem = action.payload; // Extracting the new item from the action payload
      const existingItem = state.items.find((item) => item.id === newItem.id); // Checking if the item already exists in the cart
      state.totalQuantity++; // Incrementing total quantity
      state.changed = true; // Marking the cart as changed
      if (!existingItem) {
        // If the item is not already in the cart
        state.items.push({
          // Add the new item to the cart
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        // If the item is already in the cart
        existingItem.quantity++; // Increment the quantity of the existing item
        existingItem.totalPrice = existingItem.totalPrice + newItem.price; // Update the total price of the existing item
      }
    },
    // Reducer function to remove an item from the cart
    removeItemFromCart(state, action) {
      const id = action.payload; // Extracting the ID of the item to be removed from the action payload
      const existingItem = state.items.find((item) => item.id === id); // Finding the existing item in the cart
      state.totalQuantity--; // Decrementing total quantity
      state.changed = true; // Marking the cart as changed
      if (existingItem.quantity === 1) {
        // If the quantity of the existing item is 1
        state.items = state.items.filter((item) => item.id !== id); // Remove the item from the cart
      } else {
        // If the quantity of the existing item is greater than 1
        existingItem.quantity--; // Decrement the quantity of the existing item
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price; // Update the total price of the existing item
      }
    },
  },
});

// Extracting action creators from the cart slice
export const cartActions = cartSlice.actions;

// Exporting the cart slice as the default export
export default cartSlice;

/*
Explanation:

createSlice function from @reduxjs/toolkit is used to create a slice of the Redux store named 'cart'.
The initialState object defines the initial state of the cart slice, including items, totalQuantity, and changed.
Inside the reducers object, there are three reducer functions:
replaceCart: Replaces the entire cart state with new data.
addItemToCart: Adds an item to the cart or updates the quantity and total price if the item already exists.
removeItemFromCart: Removes an item from the cart or updates the quantity and total price if the item quantity is greater than 1.
Action creators for each reducer function are automatically generated and can be accessed via cartSlice.actions.
The cartSlice object, containing the slice configuration and action creators, is exported as the default export.
*/
