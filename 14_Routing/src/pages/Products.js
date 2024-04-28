import { Link } from "react-router-dom";

// Array of products
const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

// This component represents the products page of the application.
function ProductsPage() {
  return (
    <>
      {/* Title */}
      <h1>The Products Page</h1>
      {/* List of products */}
      <ul>
        {/* Map through the array of products */}
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            {/* Link to each individual product detail page */}
            <Link to={prod.id}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;

/*
In this code:

The ProductsPage component is defined as a functional component representing the products page of the application.
It imports Link from 'react-router-dom', which is used to create links to navigate to different routes within the application.
The PRODUCTS constant is an array of objects, where each object represents a product with an id and a title.
Inside the ProductsPage component's JSX:
There's a title (The Products Page) indicating the title of the page.
A list (`
<ul>`) is rendered to display the products.
  - The `PRODUCTS.map()` method is used to iterate over each product in the array.
  - For each product, a `<li>` element is rendered with a `key` attribute set to the product's `id`. Inside the `<li>`, a `<Link>` component is used to create a link to the individual product detail page. The `to` prop of the `<Link>` component is set to the `id` of the product, which will be used as part of the URL path.
  - The text content of the `<Link>` is set to the product's `title`, which will be displayed as the clickable text for navigating to the product detail page.
- Finally, the `ProductsPage` component is exported as the default export, making it available for use elsewhere in the application.
 
 */
