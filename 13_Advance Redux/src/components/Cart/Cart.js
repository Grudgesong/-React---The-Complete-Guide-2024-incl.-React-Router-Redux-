// Importing the useSelector hook from the 'react-redux' library
import { useSelector } from "react-redux";

// Importing necessary components and styles
import Card from "../UI/Card";
import classes from "./Cart.module.css"; // Importing CSS module
import CartItem from "./CartItem"; // Importing the CartItem component

// Functional component for displaying the shopping cart
const Cart = (props) => {
  // Using useSelector hook to extract the 'items' array from the Redux store's 'cart' state
  const cartItems = useSelector((state) => state.cart.items);

  return (
    // Wrapping the content in a Card component with custom styling
    <Card className={classes.cart}>
      {/* Displaying the heading */}
      <h2>Your Shopping Cart</h2>
      {/* Rendering a list of cart items */}
      <ul>
        {/* Mapping through the 'cartItems' array to render each CartItem component */}
        {cartItems.map((item) => (
          <CartItem
            // Assigning a unique 'key' to each CartItem component
            key={item.id}
            // Passing props to the CartItem component
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

// Exporting the Cart component as the default export
export default Cart;

/*
Explanation:

The useSelector hook from react-redux is used to extract data from the Redux store. It takes a selector function as an argument, which returns the desired part of the Redux state.
The cartItems variable stores the array of items from the Redux store's cart state.
Inside the JSX, the Card component is used to wrap the content of the shopping cart with custom styling defined in the Cart.module.css file.
The <h2> element displays the heading "Your Shopping Cart".
The <ul> element is used to render a list of cart items.
The map() function is used to iterate over the cartItems array and render a CartItem component for each item in the cart.
Each CartItem component is passed props containing information about the item such as id, title, quantity, total price, and price.
The key prop is assigned a unique identifier for each CartItem component to help React efficiently update the UI when the list changes.
*/
