import React from "react";
import { Link, useRouteLoaderData, useSubmit } from "react-router-dom"; // Importing necessary components and hooks from react-router-dom
import classes from "./EventItem.module.css"; // Importing CSS styles

function EventItem({ event }) {
  // Using custom hooks provided by react-router-dom
  const token = useRouteLoaderData("root"); // Custom hook to access route loader data
  const submit = useSubmit(); // Custom hook to handle form submission

  // Function to handle delete button click
  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?"); // Asking for confirmation before deletion

    if (proceed) {
      submit(null, { method: "delete" }); // Submitting a delete request
    }
  }

  return (
    // Rendering event item
    <article className={classes.event}>
      <img src={event.image} alt={event.title} /> {/* Displaying event image */}
      <h1>{event.title}</h1> {/* Displaying event title */}
      <time>{event.date}</time> {/* Displaying event date */}
      <p>{event.description}</p> {/* Displaying event description */}
      {/* Displaying actions menu if token exists (user is authenticated) */}
      {token && (
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link> {/* Link to edit event */}
          <button onClick={startDeleteHandler}>Delete</button>{" "}
          {/* Button to delete event */}
        </menu>
      )}
    </article>
  );
}

export default EventItem; // Exporting the EventItem component as default

/*
Explanation:

The EventItem component is a React functional component responsible for rendering an individual event item.
It imports necessary dependencies from react-router-dom, including hooks for accessing route loader data and handling form submission.
It also imports CSS styles from an external file (EventItem.module.css).
Inside the component, it utilizes custom hooks provided by react-router-dom to access route loader data and handle form submission.
It defines a function startDeleteHandler to handle the delete button click, which prompts the user for confirmation before initiating the deletion.
The component renders an article containing details of the event, including its image, title, date, and description.
It conditionally renders an actions menu (containing edit and delete options) if a token exists, indicating that the user is authenticated.
The edit option is rendered as a link (Link component) to the edit page for the event.
The delete option is rendered as a button, triggering the startDeleteHandler function when clicked, which initiates the deletion process.
Finally, the EventItem component is exported as the default export.
*/
