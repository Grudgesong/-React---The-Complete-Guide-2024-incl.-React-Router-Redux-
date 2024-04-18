import { useContext } from "react"; // Import useContext hook

import { currencyFormatter } from "../util/formatting.js"; // Import currencyFormatter utility function
import Button from "./UI/Button.jsx"; // Import Button component
import CartContext from "../store/CartContext.jsx"; // Import CartContext for managing cart state

// Define MealItem component
export default function MealItem({ meal }) {
  // Access cart context using useContext hook
  const cartCtx = useContext(CartContext);

  // Function to handle adding the meal to the cart
  function handleAddMealToCart() {
    cartCtx.addItem(meal); // Call addItem function from CartContext to add the meal to the cart
  }

  // Render MealItem component
  return (
    <li className="meal-item">
      {" "}
      {/* Apply CSS class 'meal-item' to the list item */}
      <article>
        {" "}
        {/* Article containing meal information */}
        {/* Meal image */}
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          {/* Meal name */}
          <h3>{meal.name}</h3>
          {/* Meal price */}
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}{" "}
            {/* Format meal price using currencyFormatter */}
          </p>
          {/* Meal description */}
          <p className="meal-item-description">{meal.description}</p>
        </div>
        {/* Meal item actions */}
        <p className="meal-item-actions">
          {/* Button to add the meal to the cart */}
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}

/*
Explanation:

This code defines a functional component named MealItem, which represents an individual meal item displayed in a list.
It imports necessary dependencies including currencyFormatter, Button, and CartContext.
Inside the component, useContext hook is used to access the CartContext.
The handleAddMealToCart function is defined to handle adding the meal to the cart when the "Add to Cart" button is clicked.
JSX elements are returned to render the meal item:
The meal item is represented by a list item (<li>) with the CSS class meal-item.
Inside the list item, an article (<article>) element contains information about the meal, including an image, name, price, description, and an "Add to Cart" button.
The image source is dynamically generated using the meal.image property.
The meal name, price (formatted using currencyFormatter), and description are displayed.
The "Add to Cart" button triggers the handleAddMealToCart function when clicked, which adds the meal to the cart using the addItem function from the CartContext.
This MealItem component can be reused to display individual meal items throughout the application, providing a consistent and reusable UI element for displaying meals and allowing users to add them to their cart.
*/
