import { useContext } from "react"; // Import useContext hook

import Button from "./UI/Button.jsx"; // Import Button component
import logoImg from "../assets/logo.jpg"; // Import logo image
import CartContext from "../store/CartContext.jsx"; // Import CartContext for managing cart state
import UserProgressContext from "../store/UserProgressContext.jsx"; // Import UserProgressContext for managing user progress

// Define Header component
export default function Header() {
  // Access cart context using useContext hook
  const cartCtx = useContext(CartContext);
  // Access user progress context using useContext hook
  const userProgressCtx = useContext(UserProgressContext);

  // Calculate total number of items in the cart
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  // Function to handle showing the cart modal
  function handleShowCart() {
    userProgressCtx.showCart(); // Call showCart function from UserProgressContext
  }

  // Render Header component
  return (
    <header id="main-header">
      {" "}
      {/* Main header section */}
      <div id="title">
        {" "}
        {/* Logo and title section */}
        <img src={logoImg} alt="A restaurant" /> {/* Logo image */}
        <h1>ReactFood</h1> {/* Title */}
      </div>
      <nav>
        {" "}
        {/* Navigation section */}
        {/* Button to show the cart modal */}
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems}){" "}
          {/* Display total number of items in the cart */}
        </Button>
      </nav>
    </header>
  );
}

/*
Explanation:

This code defines a functional component named Header, which represents the header section of the application.
It imports necessary dependencies including Button, logoImg, CartContext, and UserProgressContext.
Inside the component, useContext hook is used to access the CartContext and UserProgressContext.
The totalCartItems variable is calculated by reducing the items in the cart to their total quantity.
The handleShowCart function is defined to handle showing the cart modal when the "Cart" button is clicked.
JSX elements are returned to render the header:
The header consists of a main header section (<header>), which contains a logo image, the title "ReactFood", and a navigation section.
The logo image is displayed using the logoImg imported from the assets folder.
The "Cart" button within the navigation section triggers the handleShowCart function when clicked. It displays the total number of items in the cart next to the text "Cart".
This Header component provides a consistent header for the application, allowing users to easily access the cart modal and view the total number of items in their cart.
*/
