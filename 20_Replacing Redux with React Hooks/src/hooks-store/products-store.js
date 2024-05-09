import { initStore } from "./store";

// Function to configure the store
const configureStore = () => {
  // Define actions to be handled by the store
  const actions = {
    // Action to toggle the favorite status of a product
    TOGGLE_FAV: (curState, productId) => {
      // Find the index of the product in the current state
      const prodIndex = curState.products.findIndex((p) => p.id === productId);
      // Toggle the favorite status of the product
      const newFavStatus = !curState.products[prodIndex].isFavorite;
      // Create a copy of the products array with the updated favorite status
      const updatedProducts = [...curState.products];
      updatedProducts[prodIndex] = {
        ...curState.products[prodIndex],
        isFavorite: newFavStatus,
      };
      // Return the updated state with the modified products array
      return { products: updatedProducts };
    },
  };

  // Initialize the store with the defined actions and initial state
  initStore(actions, {
    products: [
      // Initial list of products with their properties
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
  });
};

export default configureStore; // Exporting the configureStore function
