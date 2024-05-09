import React from "react";

// Importing the Card component for styling
import Card from "../UI/Card";

// Importing custom hook useStore from hooks-store
import { useStore } from "../../hooks-store/store";

// Importing CSS for styling
import "./ProductItem.css";

// ProductItem component using React.memo for performance optimization
const ProductItem = React.memo((props) => {
  console.log("RENDERING"); // Console log to indicate when this component is rendered

  // Extracting dispatch function from the custom hook useStore
  const dispatch = useStore(false)[1];

  // Function to handle toggling favorite status
  const toggleFavHandler = () => {
    // Dispatching an action to toggle the favorite status of the product
    dispatch("TOGGLE_FAV", props.id);
  };

  return (
    // Using the Card component for styling
    <Card style={{ marginBottom: "1rem" }}>
      {/* Container div for styling */}
      <div className="product-item">
        {/* Title of the product */}
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        {/* Description of the product */}
        <p>{props.description}</p>
        {/* Button to toggle favorite status */}
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {/* Text based on whether the product is currently a favorite or not */}
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem; // Exporting the ProductItem component
