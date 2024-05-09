import React from "react";
import { NavLink } from "react-router-dom";

// Importing CSS for styling
import "./Navigation.css";

// Navigation component
const Navigation = (props) => {
  return (
    // Header section containing navigation
    <header className="main-header">
      {/* Navigation menu */}
      <nav>
        <ul>
          {/* Navigation link for displaying all products */}
          <li>
            {/* NavLink component ensures active styling for the current route */}
            <NavLink to="/" exact>
              All Products
            </NavLink>
          </li>
          {/* Navigation link for displaying favorite products */}
          <li>
            {/* NavLink component for navigating to the favorites page */}
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation; // Exporting the Navigation component
