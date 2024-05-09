import React, { useContext } from "react";

// Importing the ProductItem component
import ProductItem from "../components/Products/ProductItem";

// Importing the custom hook useStore from '../hooks-store/store'
import { useStore } from "../hooks-store/store";

// Importing CSS for styling
import "./Products.css";

// Products component
const Products = (props) => {
  // Accessing the global state using the custom hook useStore
  const state = useStore()[0];

  return (
    // Rendering a list of products
    <ul className="products-list">
      {/* Mapping through products in the global state to render ProductItem components */}
      {state.products.map((prod) => (
        <ProductItem
          key={prod.id} // Unique key for each ProductItem component
          id={prod.id} // Passing the product id as props
          title={prod.title} // Passing the product title as props
          description={prod.description} // Passing the product description as props
          isFav={prod.isFavorite} // Passing the favorite status of the product as props
        />
      ))}
    </ul>
  );
};

export default Products; // Exporting the Products component
