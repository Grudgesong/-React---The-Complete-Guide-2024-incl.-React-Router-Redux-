// Importing necessary modules from React and Redux
import { useSelector, useDispatch } from "react-redux";

// Importing CSS module for styling
import classes from "./Header.module.css";

// Importing authentication action creators from the Redux store
import { authActions } from "../store/auth";

// Header component definition
const Header = () => {
  // Accessing dispatch function from Redux store
  const dispatch = useDispatch();

  // Accessing authentication state from Redux store
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  // Handler function for logout button click
  const logoutHandler = () => {
    // Dispatching the logout action to update authentication state
    dispatch(authActions.logout());
  };

  // Rendering the header component
  return (
    <header className={classes.header}>
      {/* Header title */}
      <h1>Redux Auth</h1>

      {/* Conditional rendering of navigation links and logout button based on authentication status */}
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              {/* Logout button */}
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

// Exporting the Header component
export default Header;

/*
The useSelector and useDispatch hooks from React Redux are imported to access the Redux store state and dispatch actions, respectively.
The CSS module for styling is imported.
The authActions object, containing action creators related to authentication, is imported from the Redux store.
Inside the Header component:
useSelector hook is used to extract the isAuthenticated value from the authentication state in the Redux store.
useDispatch hook is used to access the dispatch function, which is then used to dispatch actions.
logoutHandler function is defined to dispatch the logout action when the logout button is clicked.
The header is rendered with a title (<h1>Redux Auth</h1>) and navigation links (My Products and My Sales) and a logout button (Logout). The logout button is conditionally rendered based on the authentication status (isAuth). When clicked, it triggers the logoutHandler function.
The Header component is exported as the default export.
*/
