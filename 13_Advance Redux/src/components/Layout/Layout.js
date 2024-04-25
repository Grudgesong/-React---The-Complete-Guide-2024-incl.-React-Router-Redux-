// Importing Fragment component from React
import { Fragment } from "react";
// Importing the MainHeader component
import MainHeader from "./MainHeader";

// Functional component for the layout of the application
const Layout = (props) => {
  return (
    // Using Fragment to group multiple children without adding extra nodes to the DOM
    <Fragment>
      {/* Rendering the MainHeader component */}
      <MainHeader />
      {/* Rendering the main content */}
      <main>{props.children}</main>
    </Fragment>
  );
};

// Exporting the Layout component as the default export
export default Layout;

/*
Explanation:

The Fragment component is imported from the React library. Fragments allow you to group multiple children elements without adding extra nodes to the DOM. It's a common pattern used in React when you need to return multiple elements adjacent to each other.
The Layout component is a functional component that takes props as its argument.
Inside the component's JSX, a Fragment is used to encapsulate the two main elements: MainHeader and the main content.
The MainHeader component is rendered first, providing a header for the layout.
The {props.children} expression is used to render the main content of the layout. This special prop allows the Layout component to wrap around other components or elements passed as children to it. It ensures that whatever is rendered within the Layout component in the application hierarchy will be rendered inside the <main> tag.
Finally, the Layout component is exported as the default export, allowing it to be imported and used in other parts of the application.
*/
