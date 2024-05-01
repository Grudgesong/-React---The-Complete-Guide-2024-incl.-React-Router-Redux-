// Importing necessary dependencies
import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";

import EventsList from "../components/EventsList"; // Importing EventsList component

// Functional component for displaying events page
function EventsPage() {
  // Using useLoaderData hook to access data loaded for the route
  const { events } = useLoaderData();

  return (
    // Suspense component to handle loading state while waiting for events data to resolve
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      {/* Await component to wait for events data to resolve */}
      <Await resolve={events}>
        {/* Rendering EventsList component with loaded events data */}
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

// Function to asynchronously load events data
async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // Handling error if response is not okay
    throw json(
      { message: "Could not fetch events." },
      {
        status: 500,
      }
    );
  } else {
    // Parsing response data and returning list of events
    const resData = await response.json();
    return resData.events;
  }
}

// Loader function to load data required by the route
export function loader() {
  // Deferring loading of events data using defer function
  return defer({
    events: loadEvents(), // Loading events data asynchronously
  });
}

/*
Suspense and Await Components:
The Suspense component is used to handle the loading state while waiting for events data to resolve.
The Await component waits for the resolution of a promise and then renders the children with the resolved value.
Loader Function:
The loader function is responsible for loading data required by the route. It defers loading of events data asynchronously using the defer function.
EventsPage Component:
The EventsPage component uses the useLoaderData hook to access data loaded for the route.
It renders the EventsList component inside a Suspense component, ensuring that the loading state is displayed while waiting for events data to resolve.
The Await component waits for the events data to resolve and then renders the EventsList component with the loaded events data.
Load Events Function:
The loadEvents function is responsible for asynchronously fetching events data from the server.
It handles errors by throwing a JSON response with an appropriate error message if the fetch request fails.
*/
