import { useContext } from "react";

import { CartContext } from "../store/shopping-cart-context.jsx"; // Importing the CartContext from the shopping cart context file

export default function Product({ id, image, title, price, description }) {
  const { addItemToCart } = useContext(CartContext); // Accessing the addItemToCart function from the CartContext

  return (
    <article className="product">
      <img src={image} alt={title} /> {/* Product image */}
      <div className="product-content">
        <div>
          <h3>{title}</h3> {/* Product title */}
          <p className="product-price">${price}</p> {/* Product price */}
          <p>{description}</p> {/* Product description */}
        </div>
        {/* Add to Cart button with onClick event to call addItemToCart function */}
        <p className="product-actions">
          <button onClick={() => addItemToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}

/*
Explanation:

useContext: It's used to consume the CartContext, providing access to the addItemToCart function stored in the context.
addItemToCart: This function is obtained from the CartContext and is used to add the current product to the shopping cart.
The Product component renders a single product item. It displays the product image, title, price, and description. It also includes an "Add to Cart" button, which when clicked, invokes the addItemToCart function with the product ID as an argument, adding the corresponding product to the shopping cart.
*/
