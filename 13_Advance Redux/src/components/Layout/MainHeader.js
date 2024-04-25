// Importing the CartButton component
import CartButton from "../Cart/CartButton";
// Importing CSS module for styling
import classes from "./MainHeader.module.css";

// Functional component for rendering the main header of the application
const MainHeader = (props) => {
  return (
    // Header element with custom styling obtained from the CSS module
    <header className={classes.header}>
      {/* Application title */}
      <h1>ReduxCart</h1>
      {/* Navigation section */}
      <nav>
        <ul>
          {/* Rendering the CartButton component within a list item */}
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Exporting the MainHeader component as the default export
export default MainHeader;

/*
Explanation:

The MainHeader component is a functional component responsible for rendering the main header of the application.
It imports the CartButton component from the '../Cart/CartButton' file to include a button for accessing the shopping cart.
The header element has a class name header applied to it, which is defined in the CSS module (MainHeader.module.css).
Inside the header, there is an <h1> element displaying the title of the application, which is "ReduxCart".
Following the title, there's a <nav> element for navigation purposes.
Inside the <nav> element, there's an unordered list <ul>, containing a single list item <li>.
Within the list item, the CartButton component is rendered, allowing users to access the shopping cart.
The MainHeader component is exported as the default export, making it available for use in other parts of the application.
*/
