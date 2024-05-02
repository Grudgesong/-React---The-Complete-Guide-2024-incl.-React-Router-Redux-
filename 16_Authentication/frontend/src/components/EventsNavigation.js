import React from "react";
import { NavLink, useRouteLoaderData } from "react-router-dom"; // Importing necessary components and hooks from react-router-dom
import classes from "./EventsNavigation.module.css"; // Importing CSS styles

function EventsNavigation() {
  // Using custom hook provided by react-router-dom to access route loader data
  const token = useRouteLoaderData("root");

  return (
    // Rendering the navigation header
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          {/* Link to display all events */}
          <li>
            <NavLink
              to="/events"
              className={
                ({ isActive }) => (isActive ? classes.active : undefined) // Applying active class if the link is active
              }
              end // Setting the 'end' prop to only match when the URL is an exact match
            >
              All Events
            </NavLink>
          </li>
          {/* Link to create a new event, only displayed if the user is authenticated */}
          {token && (
            <li>
              <NavLink
                to="/events/new"
                className={
                  ({ isActive }) => (isActive ? classes.active : undefined) // Applying active class if the link is active
                }
              >
                New Event
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation; // Exporting the EventsNavigation component as default

/*
Explanation:

The EventsNavigation component is a React functional component responsible for rendering navigation links related to events.
It imports necessary dependencies from react-router-dom, including the NavLink component for navigation and the useRouteLoaderData hook for accessing route loader data.
It also imports CSS styles from an external file (EventsNavigation.module.css).
Inside the component, it uses the useRouteLoaderData hook to access route loader data, specifically the token which may indicate whether the user is authenticated.
It renders a <header> element with a class header to contain the navigation.
Within the header, it renders a <nav> element to contain the navigation links.
It renders an unordered list (<ul>) with a class list to contain the individual navigation items (<li>).
The first navigation item is a NavLink component leading to the route /events displaying "All Events". The end prop is set to ensure this link only matches when the URL is an exact match. It dynamically applies the active class from the CSS module (classes.active) if the link is active.
The second navigation item, "New Event", is only rendered if the token is truthy (indicating the user is authenticated). It is also a NavLink component leading to the route /events/new.
CSS classes are applied using CSS modules to style the navigation items.
Finally, the EventsNavigation component is exported as the default export.
*/
