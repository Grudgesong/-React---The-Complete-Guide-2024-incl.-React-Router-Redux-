import { Link, useSubmit } from "react-router-dom";

import classes from "./EventItem.module.css";

function EventItem({ event }) {
  // Hook to handle form submission
  const submit = useSubmit();

  // Function to handle delete button click
  function startDeleteHandler() {
    // Display a confirmation dialog before proceeding with deletion
    const proceed = window.confirm("Are you sure?");

    // If user confirms, initiate the deletion
    if (proceed) {
      submit(null, { method: "delete" }); // Trigger form submission with DELETE method
    }
  }

  return (
    <article className={classes.event}>
      {/* Display event details */}
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      {/* Actions menu */}
      <menu className={classes.actions}>
        {/* Link to edit the event */}
        <Link to="edit">Edit</Link>
        {/* Button to delete the event */}
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
