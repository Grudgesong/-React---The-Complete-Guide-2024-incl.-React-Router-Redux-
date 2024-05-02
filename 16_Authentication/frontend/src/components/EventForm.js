import React from "react";
import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
} from "react-router-dom"; // Importing necessary components and hooks from react-router-dom
import { getAuthToken } from "../util/auth"; // Importing a utility function for getting authentication token
import classes from "./EventForm.module.css"; // Importing CSS styles

function EventForm({ method, event }) {
  // Using custom hooks provided by react-router-dom
  const data = useActionData(); // Custom hook to get action data
  const navigate = useNavigate(); // Custom hook for navigation
  const navigation = useNavigation(); // Custom hook to manage navigation state

  const isSubmitting = navigation.state === "submitting"; // Checking if the form is in a submitting state

  // Function to handle cancel button click
  function cancelHandler() {
    navigate(".."); // Navigating back one level
  }

  return (
    // Rendering the form
    <Form method={method} className={classes.form}>
      {/* Displaying error messages, if any */}
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li> // Mapping over errors and rendering them as list items
          ))}
        </ul>
      )}
      {/* Input fields for event details */}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.date : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ""}
        />
      </p>
      {/* Actions section */}
      <div className={classes.actions}>
        {/* Button to cancel and navigate back */}
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        {/* Button to submit the form */}
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
      </div>
    </Form>
  );
}

export default EventForm; // Exporting the EventForm component as default

/*
Explanation:

The EventForm component is a React functional component responsible for rendering a form for creating or editing events.
It imports necessary dependencies from react-router-dom, including hooks for navigation and action data.
It also imports a utility function getAuthToken from ../util/auth for retrieving the authentication token.
Inside the component, it utilizes custom hooks provided by react-router-dom to access action data and manage navigation state.
It defines a function cancelHandler to handle the cancel button click, which navigates back one level.
The component renders a form with input fields for event title, image URL, date, and description.
It displays error messages, if any, retrieved from the action data.
The form includes buttons for canceling and saving the event details, with the save button disabled during submission.
Finally, it exports the EventForm component as the default export.
*/
