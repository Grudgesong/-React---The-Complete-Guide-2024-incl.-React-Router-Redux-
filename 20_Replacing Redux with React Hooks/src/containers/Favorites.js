import React, { useContext } from "react";

// Importing the FavoriteItem component
import FavoriteItem from "../components/Favorites/FavoriteItem";

// Importing the custom hook useStore from '../hooks-store/store'
import { useStore } from "../hooks-store/store";

// Importing CSS for styling
import "./Products.css";

// Favorites component
const Favorites = (props) => {
  // Accessing the global state using the custom hook useStore
  const state = useStore()[0];

  // Filtering out favorite products from the global state
  const favoriteProducts = state.products.filter((p) => p.isFavorite);

  // Placeholder content if there are no favorite products
  let content = <p className="placeholder">Got no favorites yet!</p>;

  // Displaying favorite products if there are any
  if (favoriteProducts.length > 0) {
    content = (
      // Rendering a list of favorite products
      <ul className="products-list">
        {/* Mapping through favoriteProducts array to render FavoriteItem components */}
        {favoriteProducts.map((prod) => (
          <FavoriteItem
            key={prod.id} // Unique key for each FavoriteItem component
            id={prod.id} // Passing the product id as props
            title={prod.title} // Passing the product title as props
            description={prod.description} // Passing the product description as props
          />
        ))}
      </ul>
    );
  }

  return content; // Returning the content to be rendered
};

export default Favorites; // Exporting the Favorites component
