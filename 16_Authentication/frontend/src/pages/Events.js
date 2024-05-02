import { Suspense } from "react"; // Importing the Suspense component from React
import { useLoaderData, json, defer, Await } from "react-router-dom"; // Importing necessary functions and hooks from react-router-dom

import EventsList from "../components/EventsList"; // Importing the EventsList component

// React component responsible for rendering the events page
function EventsPage() {
  // Using the useLoaderData hook to access loader data
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      {/* Await component to asynchronously resolve the loaded events */}
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}{" "}
        {/* Rendering the EventsList component */}
      </Await>
    </Suspense>
  );
}

export default EventsPage; // Exporting the EventsPage component as default

// Function to asynchronously load events from the server
async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // Throwing an error if fetching events fails
    throw json(
      { message: "Could not fetch events." }, // Error message
      {
        status: 500, // Error status code
      }
    );
  } else {
    const resData = await response.json(); // Parsing response data
    return resData.events; // Returning the loaded events
  }
}

// Loader function responsible for loading data before rendering the component
export function loader() {
  // Using defer to load events asynchronously
  return defer({
    events: loadEvents(), // Loading events
  });
}

/*
Explanation:

The EventsPage component is a React functional component responsible for rendering the events page.
It imports necessary functions and hooks from react-router-dom, including useLoaderData, json, defer, Await.
It imports the EventsList component, which presumably displays a list of events.
Inside the component, it uses the useLoaderData hook to access loader data, specifically the events data.
It renders the EventsList component inside a Suspense component to handle loading states while waiting for data to resolve.
The Await component is used to asynchronously resolve the loaded events data before rendering the EventsList component.
The loadEvents function is responsible for asynchronously loading events from the server. It sends a request to fetch events data from a specified URL.
Error handling is implemented using json to throw JSON responses with error messages and status codes if fetching events fails.
The loader function is responsible for loading data before rendering the component. It uses defer to load events asynchronously.
By using defer, the loader function ensures that the events are loaded asynchronously before rendering the component, improving performance and user experience.
*/
