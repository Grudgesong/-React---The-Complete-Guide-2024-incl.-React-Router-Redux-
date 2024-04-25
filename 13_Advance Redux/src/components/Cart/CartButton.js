// Importing necessary hooks and actions from libraries and files
import { useDispatch, useSelector } from "react-redux"; // Importing hooks from react-redux
import { uiActions } from "../../store/ui-slice"; // Importing uiActions from the ui-slice slice
import classes from "./CartButton.module.css"; // Importing CSS module

// Functional component for rendering the cart button
const CartButton = (props) => {
  // Initializing useDispatch hook to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Extracting the total quantity of items in the cart from the Redux store
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  // Event handler for toggling the cart visibility
  const toggleCartHandler = () => {
    // Dispatching the toggle action from uiActions to update the UI slice in the Redux store
    dispatch(uiActions.toggle());
  };

  return (
    // Button element with custom styling and onClick event handler
    <button className={classes.button} onClick={toggleCartHandler}>
      {/* Text label for the button */}
      <span>My Cart</span>
      {/* Displaying the total quantity of items in the cart */}
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

// Exporting the CartButton component as the default export
export default CartButton;

/*
Explanation:

The useDispatch hook is used to get a reference to the dispatch function provided by Redux. It allows you to dispatch actions to the Redux store.
The useSelector hook is used to extract data from the Redux store. Here, it retrieves the totalQuantity property from the cart slice of the Redux store's state.
Inside the component, an event handler named toggleCartHandler is defined. This function dispatches the toggle action from uiActions to update the UI state in the Redux store, toggling the visibility of the cart.
The JSX code renders a <button> element with a class name obtained from the CSS module. It also includes two <span> elements: one for displaying the text label "My Cart" and another for showing the total quantity of items in the cart (cartQuantity). The onClick event is set to the toggleCartHandler function, so clicking the button triggers the toggle action.
*/
