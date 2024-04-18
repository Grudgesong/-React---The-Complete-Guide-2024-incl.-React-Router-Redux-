import { currencyFormatter } from "../util/formatting.js"; // Import currencyFormatter utility function

// Define CartItem component
export default function CartItem({
  name,
  quantity,
  price,
  onIncrease,
  onDecrease,
}) {
  // Render CartItem component
  return (
    <li className="cart-item">
      {" "}
      {/* Apply CSS class 'cart-item' to the list item */}
      {/* Display item name, quantity, and formatted price */}
      <p>
        {name} - {quantity} x {currencyFormatter.format(price)}
      </p>
      {/* Render cart item actions */}
      <p className="cart-item-actions">
        {/* Button to decrease item quantity */}
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span> {/* Display item quantity */}
        {/* Button to increase item quantity */}
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}

/*
Explanation:

This code defines a functional component named CartItem, which represents an individual item in the cart.
The component accepts props: name (item name), quantity (quantity of the item in the cart), price (price of the item), onIncrease (callback function to handle increasing item quantity), and onDecrease (callback function to handle decreasing item quantity).
Inside the component, JSX elements are returned to render the cart item:
The cart item is represented by a list item (<li>) with the CSS class cart-item.
The item name, quantity (with 'x' separator), and formatted price are displayed in a paragraph (<p>) element.
Cart item actions, such as increasing and decreasing quantity, are rendered in a paragraph with the CSS class cart-item-actions.
A button with the text '-' is rendered to decrease the item quantity. It triggers the onDecrease callback function when clicked.
The current quantity of the item is displayed inside a <span> element.
Another button with the text '+' is rendered to increase the item quantity. It triggers the onIncrease callback function when clicked.
The currencyFormatter utility function is imported from the util/formatting.js file and used to format the item price with currency symbol and decimal precision.
This CartItem component can be reused to display individual items in the cart, providing a consistent and reusable UI element for displaying cart items throughout the application.
*/
