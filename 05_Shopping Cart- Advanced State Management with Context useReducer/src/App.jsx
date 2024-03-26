import Header from "./components/Header.jsx"; // Importing the Header component
import Shop from "./components/Shop.jsx"; // Importing the Shop component
import Product from "./components/Product.jsx"; // Importing the Product component
import { DUMMY_PRODUCTS } from "./dummy-products.js"; // Importing dummy product data
import CartContextProvider from "./store/shopping-cart-context.jsx"; // Importing the CartContextProvider component

function App() {
  return (
    // Wrapping the entire application with the CartContextProvider to provide shopping cart context
    <CartContextProvider>
      {/* Rendering the Header component */}
      <Header />
      {/* Rendering the Shop component */}
      <Shop>
        {/* Mapping over the dummy product data and rendering each product */}
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            {/* Rendering the Product component with product data */}
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;

/*Explanation:

CartContextProvider: The <CartContextProvider /> component is wrapped around the entire application. It ensures that any component within its hierarchy can access the shopping cart context provided by this context provider.
Header Component: The <Header /> component is rendered at the top of the application. It usually contains branding information, navigation links, or other global elements.
Shop Component: The <Shop /> component represents the main shopping section of the application, where products are displayed.
Product Component: Inside the <Shop /> component, each product from the DUMMY_PRODUCTS array is mapped and rendered using the <Product /> component. The spread operator ({...product}) is used to pass all properties of each product as props to the <Product /> component. */
