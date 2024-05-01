// Importing necessary dependencies
import { NavLink } from "react-router-dom";

// Importing CSS module styles
import classes from "./EventsNavigation.module.css";

// Functional component to display navigation links for events
function EventsNavigation() {
  return (
    // Header containing the navigation
    <header className={classes.header}>
      {/* Navigation menu */}
      <nav>
        {/* Unordered list for navigation links */}
        <ul className={classes.list}>
          {/* Navigation link to display all events */}
          <li>
            {/* NavLink component to handle navigation with active state */}
            <NavLink
              to="/events" // Path for the link
              // Inline function to conditionally apply 'active' class
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end // 'end' prop ensures exact matching for the link
            >
              All Events {/* Text content of the link */}
            </NavLink>
          </li>
          {/* Navigation link to create a new event */}
          <li>
            {/* NavLink component for the 'New Event' link */}
            <NavLink
              to="/events/new" // Path for the link
              // Inline function to conditionally apply 'active' class
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              New Event {/* Text content of the link */}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// Exporting the component as the default export
export default EventsNavigation;
