import { createSlice } from "@reduxjs/toolkit";

// Creating a slice of the Redux store for managing UI state
const uiSlice = createSlice({
  name: "ui", // Unique name for the slice
  initialState: {
    // Initial state of the UI slice
    cartIsVisible: false, // Flag to track visibility of the cart
    notification: null, // Object to store notification data
  },
  reducers: {
    // Reducer function to toggle visibility of the cart
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible; // Toggling the cartIsVisible flag
    },
    // Reducer function to show a notification
    showNotification(state, action) {
      // Updating notification object with data from the action payload
      state.notification = {
        status: action.payload.status, // Notification status (e.g., 'success', 'error')
        title: action.payload.title, // Notification title
        message: action.payload.message, // Notification message
      };
    },
  },
});

// Extracting action creators from the uiSlice
export const uiActions = uiSlice.actions;

// Exporting the uiSlice as the default export
export default uiSlice;

/*
Explanation:

The createSlice function from @reduxjs/toolkit is used to create a slice of the Redux store named 'ui'.
The initialState object defines the initial state of the UI slice, including cartIsVisible and notification.
Inside the reducers object, there are two reducer functions:
toggle: Toggles the visibility of the cart by flipping the value of cartIsVisible.
showNotification: Updates the notification object with data from the action payload, including status, title, and message.
Action creators for each reducer function are automatically generated and can be accessed via uiSlice.actions.
The uiSlice object, containing the slice configuration and action creators, is exported as the default export.
*/
