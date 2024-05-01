import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
  json,
  redirect,
} from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  // Extracting necessary hooks from react-router-dom
  const data = useActionData(); // Custom hook to access data from the action
  const navigate = useNavigate(); // Hook to navigate to different routes
  const navigation = useNavigation(); // Hook to track navigation state

  // Check if the form is currently submitting
  const isSubmitting = navigation.state === "submitting";

  // Function to handle cancel button click
  function cancelHandler() {
    navigate(".."); // Navigate to the parent route
  }

  return (
    // Form component from react-router-dom
    <Form method={method} className={classes.form}>
      {/* Displaying errors if any */}
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      {/* Form inputs */}
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
      {/* Form actions */}
      <div className={classes.actions}>
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

export default EventForm;

// Action function to handle form submission
export async function action({ request, params }) {
  const method = request.method; // HTTP method (GET, POST, PATCH, DELETE, etc.)
  const data = await request.formData(); // Form data from the request

  // Extracting form data
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  let url = "http://localhost:8080/events";

  // If the method is PATCH (updating an existing event), update the URL accordingly
  if (method === "PATCH") {
    const eventId = params.eventId;
    url = "http://localhost:8080/events/" + eventId;
  }

  // Sending the form data to the server
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  // Handling validation errors
  if (response.status === 422) {
    return response; // Return the validation error response
  }

  // Handling other server errors
  if (!response.ok) {
    throw json({ message: "Could not save event." }, { status: 500 }); // Throw an error with a custom message
  }

  // Redirecting to the events page after successful form submission
  return redirect("/events");
}
