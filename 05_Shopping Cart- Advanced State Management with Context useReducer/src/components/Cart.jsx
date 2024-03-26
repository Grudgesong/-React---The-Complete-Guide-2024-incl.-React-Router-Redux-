import { useContext } from "react";

import { CartContext } from "../store/shopping-cart-context.jsx";

export default function Cart() {
  // Accessing the cart context using useContext hook
  const { items, updateItemQuantity } = useContext(CartContext);

  // Calculating total price of items in the cart
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  // Formatting total price to display with currency symbol
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {/* Display a message if cart is empty */}
      {items.length === 0 && <p>No items in cart!</p>}
      {/* Display items in the cart if there are any */}
      {items.length > 0 && (
        <ul id="cart-items">
          {items.map((item) => {
            // Formatting price of each item to display with currency symbol
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  {/* Display name and price of the item */}
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  {/* Button to decrease quantity of the item */}
                  <button onClick={() => updateItemQuantity(item.id, -1)}>
                    -
                  </button>
                  {/* Display quantity of the item */}
                  <span>{item.quantity}</span>
                  {/* Button to increase quantity of the item */}
                  <button onClick={() => updateItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      {/* Display total price of items in the cart */}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}

/*
Explanation:

useContext Hook: It is used to consume the CartContext created in the shopping-cart-context.jsx file. This hook allows components to access the context values provided by the context provider.
items: It holds the array of items in the cart obtained from the context.
updateItemQuantity: It is a function obtained from the context, which is used to update the quantity of an item in the cart.
totalPrice: It calculates the total price of all items in the cart by multiplying the price of each item with its quantity and summing them up.
formattedTotalPrice: It formats the total price to display it with a currency symbol.
The component then renders the list of items in the cart, allowing users to increase or decrease the quantity of each item using buttons. It also displays the total price of all items in the cart. If the cart is empty, it displays a message indicating that there are no items in the cart.
*/
