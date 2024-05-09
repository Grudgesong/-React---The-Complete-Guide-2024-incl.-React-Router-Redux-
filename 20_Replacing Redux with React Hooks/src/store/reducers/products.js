import { TOGGLE_FAV } from "../actions/products"; // Importing the action type TOGGLE_FAV

// Initial state for the products
const initialState = {
  products: [
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ],
};

// Reducer function for managing state related to products
const productReducer = (state = initialState, action) => {
  // Switch statement to handle different action types
  switch (action.type) {
    // Case for handling the TOGGLE_FAV action
    case TOGGLE_FAV:
      // Find the index of the product in the current state
      const prodIndex = state.products.findIndex(
        (p) => p.id === action.productId
      );
      // Toggle the favorite status of the product
      const newFavStatus = !state.products[prodIndex].isFavorite;
      // Create a copy of the products array with the updated favorite status
      const updatedProducts = [...state.products];
      updatedProducts[prodIndex] = {
        ...state.products[prodIndex],
        isFavorite: newFavStatus,
      };
      // Return the updated state with the modified products array
      return {
        ...state,
        products: updatedProducts,
      };
    // Default case for returning the current state if the action type doesn't match
    default:
      return state;
  }
};

export default productReducer; // Exporting the productReducer function

/*
import { TOGGLE_FAV } from '../actions/products';: This line imports the action type TOGGLE_FAV from the products actions file. This action type is used to identify the action of toggling the favorite status of a product.
const initialState = { ... }: This constant defines the initial state for the products. It includes an array of product objects, each containing an id, title, description, and isFavorite property.
const productReducer = (state = initialState, action) => { ... }: This function is the reducer for managing state related to products. It takes the current state and an action as parameters and returns the updated state based on the action type.
switch (action.type) { ... }: This switch statement handles different action types. In this case, it checks if the action type is TOGGLE_FAV.
case TOGGLE_FAV: ...: This case handles the TOGGLE_FAV action. It finds the index of the product in the current state, toggles its isFavorite property, creates a copy of the products array with the updated favorite status, and returns the updated state.
default: return state;: This default case returns the current state if the action type doesn't match any of the cases.
export default productReducer;: This line exports the productReducer function, allowing it to be imported and used in other parts of the application.
*/
