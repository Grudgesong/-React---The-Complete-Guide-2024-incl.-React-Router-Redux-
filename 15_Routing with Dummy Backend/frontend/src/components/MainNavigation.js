// Importing necessary dependencies
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css"; // Importing CSS module styles
import NewsletterSignup from "./NewsletterSignup"; // Importing the NewsletterSignup component

// Functional component for the main navigation bar
function MainNavigation() {
  return (
    // Header containing the navigation and newsletter signup
    <header className={classes.header}>
      {/* Navigation menu */}
      <nav>
        {/* Unordered list for navigation links */}
        <ul className={classes.list}>
          {/* Navigation link for the home page */}
          <li>
            {/* NavLink component for the 'Home' link */}
            <NavLink
              to="/" // Path for the link
              // Inline function to conditionally apply 'active' class
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end // 'end' prop ensures exact matching for the link
            >
              Home {/* Text content of the link */}
            </NavLink>
          </li>
          {/* Navigation link for the events page */}
          <li>
            {/* NavLink component for the 'Events' link */}
            <NavLink
              to="/events" // Path for the link
              // Inline function to conditionally apply 'active' class
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Events {/* Text content of the link */}
            </NavLink>
          </li>
          {/* Navigation link for the newsletter page */}
          <li>
            {/* NavLink component for the 'Newsletter' link */}
            <NavLink
              to="/newsletter" // Path for the link
              // Inline function to conditionally apply 'active' class
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Newsletter {/* Text content of the link */}
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* Newsletter signup component */}
      <NewsletterSignup />
    </header>
  );
}

// Exporting the component as the default export
export default MainNavigation;
