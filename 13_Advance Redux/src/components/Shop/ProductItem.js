// Importing the useDispatch hook from react-redux for dispatching actions
import { useDispatch } from "react-redux";
// Importing cartActions from the cart-slice slice for updating the cart state
import { cartActions } from "../../store/cart-slice";
// Importing the Card component for styling
import Card from "../UI/Card";
// Importing CSS module for styling
import classes from "./ProductItem.module.css";

// Functional component for rendering each product item
const ProductItem = (props) => {
  // Initializing useDispatch hook to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Destructuring props to extract product details
  const { title, price, description, id } = props;

  // Event handler for adding a product to the cart
  const addToCartHandler = () => {
    // Dispatching the addItemToCart action from cartActions with product details
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    // Rendering each product item as a list item with custom styling
    <li className={classes.item}>
      {/* Wrapping the product item in a Card component for styling */}
      <Card>
        <header>
          {/* Displaying product title */}
          <h3>{title}</h3>
          {/* Displaying product price */}
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        {/* Displaying product description */}
        <p>{description}</p>
        {/* Button for adding the product to the cart */}
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

// Exporting the ProductItem component as the default export
export default ProductItem;

/*
Explanation:

The ProductItem component is a functional component responsible for rendering each product item.
It imports the useDispatch hook from react-redux to dispatch actions to the Redux store.
The cartActions object is imported from the cart-slice slice, which contains action creators for updating the cart state.
Inside the component, useDispatch hook is used to get a reference to the dispatch function provided by Redux.
The addToCartHandler function is defined as an event handler for adding a product to the cart. When the "Add to Cart" button is clicked, this function dispatches the addItemToCart action with the product details (id, title, price).
JSX code renders each product item as a list item (<li>) with custom styling obtained from the CSS module (ProductItem.module.css).
The product details such as title, price, and description are displayed within the Card component.
The "Add to Cart" button is included with an onClick event handler set to the addToCartHandler function, allowing users to add the product to the cart.
*/
