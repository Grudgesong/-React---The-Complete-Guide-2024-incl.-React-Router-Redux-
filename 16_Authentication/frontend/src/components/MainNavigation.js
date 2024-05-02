import React from "react";
import { Form, NavLink, useRouteLoaderData } from "react-router-dom"; // Importing necessary components and hooks from react-router-dom
import classes from "./MainNavigation.module.css"; // Importing CSS styles
import NewsletterSignup from "./NewsletterSignup"; // Importing the NewsletterSignup component

function MainNavigation() {
  // Using custom hook provided by react-router-dom to access route loader data
  const token = useRouteLoaderData("root");

  return (
    // Rendering the main navigation header
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          {/* Navigation link to home page */}
          <li>
            <NavLink
              to="/"
              className={
                ({ isActive }) => (isActive ? classes.active : undefined) // Applying active class if the link is active
              }
              end // Setting the 'end' prop to only match when the URL is an exact match
            >
              Home
            </NavLink>
          </li>
          {/* Navigation link to events page */}
          <li>
            <NavLink
              to="/events"
              className={
                ({ isActive }) => (isActive ? classes.active : undefined) // Applying active class if the link is active
              }
            >
              Events
            </NavLink>
          </li>
          {/* Navigation link to newsletter page */}
          <li>
            <NavLink
              to="/newsletter"
              className={
                ({ isActive }) => (isActive ? classes.active : undefined) // Applying active class if the link is active
              }
            >
              Newsletter
            </NavLink>
          </li>
          {/* Navigation link to authentication page, only displayed if the user is not authenticated */}
          {!token && (
            <li>
              <NavLink
                to="/auth?mode=login"
                className={
                  ({ isActive }) => (isActive ? classes.active : undefined) // Applying active class if the link is active
                }
              >
                Authentication
              </NavLink>
            </li>
          )}
          {/* Logout form, only displayed if the user is authenticated */}
          {token && (
            <li>
              <Form action="/logout" method="post">
                <button>Logout</button>
              </Form>
            </li>
          )}
        </ul>
      </nav>
      {/* Rendering the NewsletterSignup component */}
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation; // Exporting the MainNavigation component as default

/*
Explanation:

The MainNavigation component is a React functional component responsible for rendering the main navigation menu.
It imports necessary dependencies from react-router-dom, including the NavLink component for navigation and the useRouteLoaderData hook for accessing route loader data.
It also imports CSS styles from an external file (MainNavigation.module.css) and the NewsletterSignup component.
Inside the component, it uses the useRouteLoaderData hook to access route loader data, specifically the token which may indicate whether the user is authenticated.
It renders a <header> element with a class header to contain the navigation and newsletter signup.
Within the header, it renders a <nav> element to contain the navigation links.
It renders an unordered list (<ul>) with a class list to contain the individual navigation items (<li>).
It renders navigation links for "Home", "Events", and "Newsletter", each wrapped inside a NavLink component. The isActive function is used to dynamically apply the active class from the CSS module (classes.active) if the link is active. The end prop is set for the "Home" link to ensure it only matches when the URL is an exact match.
The "Authentication" link is only rendered if the token is falsy (indicating the user is not authenticated). It redirects to the authentication page with a query parameter indicating the login mode.
The logout form is only rendered if the token is truthy (indicating the user is authenticated). It submits a POST request to the /logout endpoint when the "Logout" button is clicked.
The NewsletterSignup component is rendered below the navigation links.
Finally, the MainNavigation component is exported as the default export.
*/
