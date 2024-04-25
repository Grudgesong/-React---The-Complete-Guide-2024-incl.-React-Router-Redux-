import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";

// Variable to track whether it's the initial render of the component
let isInitial = true;

function App() {
  const dispatch = useDispatch(); // Hook to dispatch actions to the Redux store
  const showCart = useSelector((state) => state.ui.cartIsVisible); // Selecting cart visibility state from the Redux store
  const cart = useSelector((state) => state.cart); // Selecting cart state from the Redux store
  const notification = useSelector((state) => state.ui.notification); // Selecting notification state from the Redux store

  // Effect hook to fetch cart data from the server when the component mounts
  useEffect(() => {
    dispatch(fetchCartData()); // Dispatching the fetchCartData action
  }, [dispatch]); // Dependency array with dispatch to ensure the effect runs only once when the component mounts

  // Effect hook to send cart data to the server when the cart changes
  useEffect(() => {
    // Checking if it's not the initial render
    if (isInitial) {
      isInitial = false; // Updating the isInitial flag
      return; // Exiting early from the effect
    }

    // Checking if the cart has changed
    if (cart.changed) {
      dispatch(sendCartData(cart)); // Dispatching the sendCartData action with updated cart data
    }
  }, [cart, dispatch]); // Dependency array with cart and dispatch to run the effect when either changes

  return (
    <Fragment>
      {/* Rendering the notification component if there is a notification */}
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      {/* Rendering the layout with cart and products components */}
      <Layout>
        {/* Rendering the cart component if showCart is true */}
        {showCart && <Cart />}
        {/* Rendering the products component */}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;

/*
Explanation:

The useDispatch hook is used to get a reference to the dispatch function from the Redux store, which is used to dispatch actions.
The useSelector hook is used to select specific pieces of state from the Redux store.
In the first useEffect hook, the fetchCartData action is dispatched when the component mounts. This action fetches cart data from the server and updates the Redux store accordingly.
In the second useEffect hook, the sendCartData action is dispatched whenever the cart state changes and cart.changed is true. This action sends the updated cart data to the server.
The isInitial flag is used to prevent the second useEffect hook from running during the initial render of the component.
The Fragment component is used to group multiple children without adding extra nodes to the DOM.
Conditional rendering is used to render the Notification, Cart, and Products components based on the respective states (notification and showCart).
*/
