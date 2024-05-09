import React from "react";

// Importing the Card component
import Card from "../UI/Card";

// Importing the CSS file for styling
import "./FavoriteItem.css";

// FavoriteItem component
const FavoriteItem = (props) => {
  return (
    // Using the Card component to wrap the favorite item
    <Card style={{ marginBottom: "1rem" }}>
      {/* Container div for styling purposes */}
      <div className="favorite-item">
        {/* Displaying the title of the favorite item */}
        <h2>{props.title}</h2>
        {/* Displaying the description of the favorite item */}
        <p>{props.description}</p>
      </div>
    </Card>
  );
};

export default FavoriteItem; // Exporting the FavoriteItem component
