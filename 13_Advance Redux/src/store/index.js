import { configureStore } from "@reduxjs/toolkit";

// Importing the uiSlice and cartSlice reducers
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

// Configuring the Redux store using configureStore from @reduxjs/toolkit
const store = configureStore({
  // Providing a reducer configuration object
  reducer: {
    // Defining reducers for each slice of the store
    ui: uiSlice.reducer, // Reducer for the UI slice
    cart: cartSlice.reducer, // Reducer for the cart slice
  },
});

// Exporting the configured store as the default export
export default store;

/*
Explanation:

The configureStore function is imported from @reduxjs/toolkit. It's used to configure a Redux store with options such as reducer configuration, middleware, and dev tools setup.
Two reducers, uiSlice.reducer and cartSlice.reducer, are imported from their respective files (ui-slice.js and cart-slice.js).
Inside the configureStore function, the reducer option is provided with an object where the keys represent the slice names (ui and cart), and the values represent the corresponding reducer functions.
Each reducer function (uiSlice.reducer and cartSlice.reducer) is assigned to its respective slice of the store.
The configured Redux store is stored in the store variable.
Finally, the configured store is exported as the default export, making it available for use in other parts of the application.
*/
