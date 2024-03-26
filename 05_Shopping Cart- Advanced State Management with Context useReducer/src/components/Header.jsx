import { useRef, useContext } from "react";

import CartModal from "./CartModal.jsx"; // Importing the CartModal component
import { CartContext } from "../store/shopping-cart-context.jsx"; // Importing the CartContext from the shopping cart context file

export default function Header() {
  const modal = useRef(); // Creating a ref to access the CartModal component imperatively
  const { items } = useContext(CartContext); // Accessing cart items from the CartContext

  const cartQuantity = items.length; // Getting the quantity of items in the cart

  function handleOpenCartClick() {
    modal.current.open(); // Opening the cart modal when the "Cart" button is clicked
  }

  // Determining the actions to be displayed in the modal based on the cart quantity
  let modalActions = <button>Close</button>; // Default action to close the modal

  if (cartQuantity > 0) {
    // If there are items in the cart, add additional action buttons
    modalActions = (
      <>
        <button>Close</button> {/* Close button */}
        <button>Checkout</button> {/* Checkout button */}
      </>
    );
  }

  return (
    <>
      {/* Rendering the CartModal component with ref to access it imperatively, title, and actions */}
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
      {/* Header section */}
      <header id="main-header">
        {/* Logo and title section */}
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" /> {/* Logo */}
          <h1>Elegant Context</h1> {/* Title */}
        </div>
        {/* Cart button section */}
        <p>
          {/* Button to open the cart modal with the current cart quantity */}
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}

/*
Explanation:

useRef: It's used to create a reference to the CartModal component instance. This reference is used to access the imperative methods of the CartModal component, such as opening the modal.
useContext: It's used to consume the CartContext, providing access to the cart items stored in the context.
handleOpenCartClick: This function is triggered when the "Cart" button is clicked. It opens the cart modal by calling the open method of the CartModal component through the modal ref.
modalActions: This variable determines the actions to be displayed in the cart modal. It defaults to a "Close" button, but if there are items in the cart, it includes both "Close" and "Checkout" buttons.
The Header component renders the header section of the application. It includes a logo, title, and a "Cart" button. Clicking the "Cart" button opens the cart modal, which displays the cart items and provides options for further actions like checkout.
*/
