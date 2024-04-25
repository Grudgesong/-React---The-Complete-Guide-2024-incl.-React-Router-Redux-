// Importing the ProductItem component
import ProductItem from "./ProductItem";
// Importing CSS module for styling
import classes from "./Products.module.css";

// Dummy data for products
const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "The first book I ever wrote",
  },
  {
    id: "p2",
    price: 5,
    title: "My Second Book",
    description: "The second book I ever wrote",
  },
];

// Functional component for rendering the products section
const Products = (props) => {
  return (
    // Rendering the products section with custom styling
    <section className={classes.products}>
      {/* Heading for the products section */}
      <h2>Buy your favorite products</h2>
      {/* Rendering a list of products */}
      <ul>
        {/* Mapping through the DUMMY_PRODUCTS array to render each product */}
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            // Setting a unique key for each product
            key={product.id}
            // Passing product details as props to the ProductItem component
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

// Exporting the Products component as the default export
export default Products;

/*
Explanation:

The Products component is a functional component responsible for rendering the section containing the list of products.
It imports the ProductItem component to render each individual product.
The DUMMY_PRODUCTS array contains dummy data for the products, each with an id, price, title, and description.
Inside the component's JSX, the products section is rendered with custom styling obtained from the CSS module (Products.module.css).
The <h2> element displays a heading for the products section.
A list (<ul>) is rendered to contain the products.
The DUMMY_PRODUCTS.map() function iterates over each product in the dummy data array and returns a ProductItem component for each product.
Each ProductItem component receives props containing details of the respective product, including id, title, price, and description.
The key prop is set to a unique identifier for each product, ensuring efficient rendering and updating of the list.
Finally, the Products component is exported as the default export, making it available for use in other parts of the application.

*/
