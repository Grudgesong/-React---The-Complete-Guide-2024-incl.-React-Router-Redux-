import { useContext } from "react";

import Modal from "./UI/Modal.jsx"; // Import Modal component
import CartContext from "../store/CartContext.jsx"; // Import CartContext for managing cart state
import Button from "./UI/Button.jsx"; // Import Button component
import { currencyFormatter } from "../util/formatting.js"; // Import currencyFormatter utility function
import UserProgressContext from "../store/UserProgressContext.jsx"; // Import UserProgressContext for managing user progress
import CartItem from "./CartItem.jsx"; // Import CartItem component

// Define Cart component
export default function Cart() {
  // Access cart context using useContext hook
  const cartCtx = useContext(CartContext);
  // Access user progress context using useContext hook
  const userProgressCtx = useContext(UserProgressContext);

  // Calculate total price of items in the cart
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  // Function to close the cart modal
  function handleCloseCart() {
    userProgressCtx.hideCart(); // Call hideCart function from UserProgressContext
  }

  // Function to navigate to checkout
  function handleGoToCheckout() {
    userProgressCtx.showCheckout(); // Call showCheckout function from UserProgressContext
  }

  // Render Cart component
  return (
    <Modal
      className="cart" // Apply custom CSS class 'cart' to the modal
      open={userProgressCtx.progress === "cart"} // Set modal open state based on user progress
      onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null} // Set onClose event handler to close the cart modal
    >
      <h2>Your Cart</h2>
      {/* Render list of cart items using CartItem component */}
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartCtx.addItem(item)} // Handle increase item quantity event
            onDecrease={() => cartCtx.removeItem(item.id)} // Handle decrease item quantity event
          />
        ))}
      </ul>
      {/* Display total price of items in the cart */}
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      {/* Render modal actions */}
      <p className="modal-actions">
        {/* Render 'Close' button */}
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {/* Render 'Go to Checkout' button if cart is not empty */}
        {cartCtx.items.length > 0 && (
          <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}

/*
Explanation:

This code defines a functional component named Cart, which represents a modal displaying the items in the user's cart.
It imports necessary dependencies including Modal, CartContext, Button, currencyFormatter, UserProgressContext, and CartItem.
Inside the component, useContext hook is used to access the CartContext and UserProgressContext.
The total price of items in the cart is calculated using the reduce method.
Event handler functions (handleCloseCart and handleGoToCheckout) are defined to handle closing the cart modal and navigating to checkout, respectively.
JSX elements are returned to render the cart modal:
The Modal component is used to display the cart content.
Cart items are rendered using the CartItem component.
The total price of items in the cart is displayed.
Modal actions, such as 'Close' and 'Go to Checkout' buttons, are rendered using the Button component.
Conditional rendering is applied to display the 'Go to Checkout' button only if the cart is not empty.
*/
