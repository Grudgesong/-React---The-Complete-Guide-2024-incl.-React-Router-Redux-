import { Link, useNavigate } from "react-router-dom";

// This component represents the home page of the application.
function HomePage() {
  // useNavigate hook provides a function to navigate programmatically
  const navigate = useNavigate();

  // Function to handle navigation to the '/products' route
  function navigateHandler() {
    navigate("/products"); // Navigate to the '/products' route
  }

  return (
    <>
      {/* Title */}
      <h1>My Home Page</h1>
      {/* Link to navigate to the list of products */}
      <p>
        Go to <Link to="products">the list of products</Link>.
      </p>
      {/* Button to trigger navigation programmatically */}
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;

/*
In this code:

The HomePage component is defined as a functional component representing the home page of the application.
It imports Link and useNavigate from 'react-router-dom'. Link is used to create a link to another route within the application, and useNavigate hook is used to programmatically navigate to a different route.
Inside the HomePage component's JSX:
There's a title (`
My Home Page`) indicating the title of the page.

A <Link> component is used to create a link to the "products" route. When clicked, it will navigate the user to the list of products.
A <button> element is rendered with an onClick event handler attached to it. When clicked, it triggers the navigateHandler function, which uses the navigate function obtained from the useNavigate hook to navigate programmatically to the "/products" route.
Finally, the HomePage component is exported as the default export, making it available for use elsewhere in the application.
*/
