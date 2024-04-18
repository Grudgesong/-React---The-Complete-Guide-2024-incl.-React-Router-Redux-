import { useContext } from "react"; // Import useContext hook

import Modal from "./UI/Modal.jsx"; // Import Modal component
import CartContext from "../store/CartContext.jsx"; // Import CartContext for managing cart state
import { currencyFormatter } from "../util/formatting.js"; // Import currencyFormatter utility function
import Input from "./UI/Input.jsx"; // Import Input component
import Button from "./UI/Button.jsx"; // Import Button component
import UserProgressContext from "../store/UserProgressContext.jsx"; // Import UserProgressContext for managing user progress
import useHttp from "../hooks/useHttp.js"; // Import custom hook for HTTP requests
import Error from "./Error.jsx"; // Import Error component

// Define request configuration for sending order data
const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

// Define Checkout component
export default function Checkout() {
  // Access cart context using useContext hook
  const cartCtx = useContext(CartContext);
  // Access user progress context using useContext hook
  const userProgressCtx = useContext(UserProgressContext);

  // Use custom hook useHttp to handle HTTP requests for submitting orders
  const {
    data, // Response data from HTTP request
    isLoading: isSending, // Loading state while sending request
    error, // Error object if request fails
    sendRequest, // Function to send HTTP request
    clearData, // Function to clear response data
  } = useHttp("http://localhost:3000/orders", requestConfig); // Send POST request to 'http://localhost:3000/orders' with defined config

  // Calculate total price of items in the cart
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  // Function to close the checkout modal
  function handleClose() {
    userProgressCtx.hideCheckout(); // Call hideCheckout function from UserProgressContext
  }

  // Function to handle finishing the checkout process
  function handleFinish() {
    userProgressCtx.hideCheckout(); // Close the checkout modal
    cartCtx.clearCart(); // Clear the cart
    clearData(); // Clear response data from HTTP request
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    // Extract form data
    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    // Send order data to the server
    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      })
    );
  }

  // Define actions to be displayed in the modal
  let actions = (
    <>
      {/* Button to close the modal */}
      <Button type="button" textOnly onClick={handleClose}>
        Close
      </Button>
      {/* Button to submit the order */}
      <Button>Submit Order</Button>
    </>
  );

  // Display a message while order data is being sent
  if (isSending) {
    actions = <span>Sending order data...</span>;
  }

  // Render success message if order is successfully submitted
  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={handleFinish}
      >
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes.
        </p>
        {/* Button to close the modal */}
        <p className="modal-actions">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  // Render checkout form and error message if applicable
  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      {/* Checkout form */}
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

        {/* Form inputs for customer details */}
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        {/* Display error message if order submission fails */}
        {error && <Error title="Failed to submit order" message={error} />}

        {/* Display modal actions */}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}

/*
Explanation:

This code defines a functional component named Checkout, which represents the checkout process in the application.
It imports necessary dependencies including Modal, CartContext, currencyFormatter, Input, Button, UserProgressContext, useHttp, and Error.
Inside the component, useContext hook is used to access the CartContext and UserProgressContext.
The useHttp custom hook is used to handle HTTP requests for submitting orders.
The requestConfig object defines the configuration for sending POST requests to the server.
The component calculates the total price of items in the cart.
Event handler functions (handleClose, handleFinish, handleSubmit) are defined to handle closing the checkout modal, finishing the checkout process, and submitting the order, respectively.
JSX elements are returned to render the checkout modal:
The modal displays a form with input fields for customer details and buttons for closing the modal and submitting the order.
Conditional rendering is applied to display loading messages, success messages, and error messages based on the state of the HTTP request.
This Checkout component facilitates the checkout process by allowing users to enter their details and submit their orders, providing a seamless experience for completing purchases in the application.
*/
