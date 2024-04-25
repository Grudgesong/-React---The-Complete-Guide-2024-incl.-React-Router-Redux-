// Importing action creators from the ui-slice and cart-slice slices
import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

// Async action creator to fetch cart data from the server
export const fetchCartData = () => {
  return async (dispatch) => {
    // Async function to fetch data from the server
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-23a90-default-rtdb.firebaseio.com/cart.json"
      );

      // Handling error if fetching data fails
      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      // Parsing response data to JSON format
      const data = await response.json();

      return data;
    };

    try {
      // Fetching cart data from the server
      const cartData = await fetchData();

      // Dispatching action to update the cart state with fetched data
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [], // Extracting cart items from fetched data
          totalQuantity: cartData.totalQuantity, // Extracting total quantity from fetched data
        })
      );
    } catch (error) {
      // Dispatching action to show notification in case of error
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

// Async action creator to send cart data to the server
export const sendCartData = (cart) => {
  return async (dispatch) => {
    // Dispatching action to show pending notification before sending data
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    // Async function to send cart data to the server
    const sendRequest = async () => {
      const response = await fetch(
        "https://redux-23a90-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT", // Using PUT method to update data on the server
          body: JSON.stringify({
            items: cart.items, // Sending cart items data
            totalQuantity: cart.totalQuantity, // Sending total quantity data
          }),
        }
      );

      // Handling error if sending data fails
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      // Sending cart data to the server
      await sendRequest();

      // Dispatching action to show success notification after sending data
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      // Dispatching action to show error notification in case of failure
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};

/*
Explanation:

The fetchCartData function is an async action creator responsible for fetching cart data from the server. It uses the fetch API to make an HTTP request to the server endpoint where the cart data is stored.
Inside the fetchCartData function, an inner async function named fetchData is defined to handle the actual fetching of data from the server. This function is called within the try block.
If fetching data is successful, the action cartActions.replaceCart is dispatched with the fetched cart data to update the cart state.
If an error occurs during the fetching process, a notification with an error status is shown using uiActions.showNotification.
The sendCartData function is an async action creator responsible for sending cart data to the server. It also dispatches actions to show pending, success, or error notifications based on the outcome of sending data.
Inside the sendCartData function, an inner async function named sendRequest is defined to handle the actual sending of data to the server. This function is called within the try block.
If sending data is successful, a success notification is shown using uiActions.showNotification.
If an error occurs during the sending process, an error notification is shown using uiActions.showNotification.
*/
