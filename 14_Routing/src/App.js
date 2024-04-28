import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetail";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";

// Route definitions using JSX elements.
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

// Create a browser router instance with route configuration.
const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <RootLayout />, // Layout component to wrap the child routes
    errorElement: <ErrorPage />, // Error page component to display errors
    children: [
      { index: true, element: <HomePage /> }, // Child route for the home page
      { path: "products", element: <ProductsPage /> }, // Child route for the products page
      { path: "products/:productId", element: <ProductDetailPage /> }, // Child route for product detail page with dynamic parameter
    ],
  },
]);

// const router = createBrowserRouter(routeDefinitions);

// Top-level component for the application, providing the router context.
function App() {
  return <RouterProvider router={router} />; // Provide the router instance to the RouterProvider
}

export default App;

/*
In this code:

The application's routing configuration is defined using the createBrowserRouter function from 'react-router-dom'.
Inside the routing configuration:
The path property specifies the URL path.
The element property specifies the component to render when the URL matches the specified path.
The errorElement property specifies the component to render in case of an error.
The children property specifies child routes within the layout component defined by the element.
The index property is set to true for the root route, indicating it as the default route.
The createBrowserRouter function returns a router instance based on the provided route configuration.
The <RouterProvider> component is used to provide the router instance to the application, ensuring that routing functionality is available throughout the component tree.
The App component acts as the top-level component of the application, rendering the <RouterProvider> with the router instance provided. This makes routing functionality available to all components within the application.
*/
