// Importing necessary hooks and actions from libraries and files
import { useDispatch } from "react-redux"; // Importing useDispatch hook from react-redux
import classes from "./CartItem.module.css"; // Importing CSS module
import { cartActions } from "../../store/cart-slice"; // Importing cartActions from the cart-slice slice

// Functional component for rendering each item in the cart
const CartItem = (props) => {
  // Initializing useDispatch hook to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Destructuring props to extract item details
  const { title, quantity, total, price, id } = props.item;

  // Event handler for removing an item from the cart
  const removeItemHandler = () => {
    // Dispatching the removeItemFromCart action from cartActions with the item id
    dispatch(cartActions.removeItemFromCart(id));
  };

  // Event handler for adding an item to the cart
  const addItemHandler = () => {
    // Dispatching the addItemToCart action from cartActions with item details
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    // Rendering each cart item as a list item with custom styling
    <li className={classes.item}>
      {/* Displaying item details */}
      <header>
        <h3>{title}</h3>
        {/* Displaying total price and price per item */}
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      {/* Displaying item quantity and actions */}
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        {/* Buttons for removing and adding items */}
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

// Exporting the CartItem component as the default export
export default CartItem;

/*
Explanation:

The useDispatch hook is used to get a reference to the dispatch function provided by Redux. It allows you to dispatch actions to the Redux store.
The CartItem component receives props containing details of a single item in the cart.
Inside the component, two event handlers are defined: removeItemHandler and addItemHandler. These functions dispatch actions to modify the cart state when the respective buttons are clicked.
The JSX code renders each cart item as a list item (<li>) with custom styling obtained from the CSS module.
Item details such as title, quantity, total price, and price per item are displayed within the list item.
Buttons for removing and adding items are included with onClick event handlers set to the corresponding event handler functions defined earlier.
*/
