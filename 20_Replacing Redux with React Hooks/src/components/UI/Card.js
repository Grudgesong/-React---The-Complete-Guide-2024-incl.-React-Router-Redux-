import React from "react";

// Importing CSS for styling
import "./Card.css";

// Card component
const Card = (props) => {
  // Rendering a div with the 'card' class and applying inline styles if provided
  return (
    <div className="card" style={props.style}>
      {props.children}
    </div>
  );
};

export default Card; // Exporting the Card component
