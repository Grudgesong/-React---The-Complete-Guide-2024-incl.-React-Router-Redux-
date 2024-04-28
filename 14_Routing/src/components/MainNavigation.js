import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

// This component represents the main navigation bar of the application.
// It uses NavLink components from react-router-dom to navigate between different routes.
function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          {/* NavLink for the "Home" route */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end // 'end' prop ensures exact matching for the route
            >
              Home
            </NavLink>
          </li>
          {/* NavLink for the "Products" route */}
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

/*
This code defines a React functional component called MainNavigation, which represents the main navigation bar of the application. It uses the NavLink component from react-router-dom to create clickable links for navigating between different routes. The NavLink components are styled using CSS modules (imported as classes), allowing for scoped styles.

In the NavLink components:

The to prop specifies the destination route.
The end prop ensures exact matching for the route, which is useful for distinguishing between "/" and "/products".
The className prop conditionally applies the active class from the CSS module (MainNavigation.module.css) based on whether the link is currently active. This helps to visually indicate which route is currently active or selected.
*/
