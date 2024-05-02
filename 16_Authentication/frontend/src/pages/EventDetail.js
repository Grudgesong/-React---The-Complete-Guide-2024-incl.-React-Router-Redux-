import { Suspense } from "react"; // Importing the Suspense component from React
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom"; // Importing necessary functions and hooks from react-router-dom

import EventItem from "../components/EventItem"; // Importing the EventItem component
import EventsList from "../components/EventsList"; // Importing the EventsList component
import { getAuthToken } from "../util/auth"; // Importing the getAuthToken function

// React component responsible for rendering the event detail page
function EventDetailPage() {
  // Using the useRouteLoaderData hook to access route loader data specific to the event detail
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <>
      {/* Suspense component to handle loading state for the EventItem component */}
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        {/* Await component to asynchronously resolve the loaded event */}
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      {/* Suspense component to handle loading state for the EventsList component */}
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        {/* Await component to asynchronously resolve the loaded events */}
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventDetailPage; // Exporting the EventDetailPage component as default

// Function to asynchronously load event details based on the event ID
async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    // Throwing an error if fetching event details fails
    throw json(
      { message: "Could not fetch details for selected event." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

// Function to asynchronously load events
async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // Throwing an error if fetching events fails
    throw json(
      { message: "Could not fetch events." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

// Loader function responsible for loading data before rendering the component
export async function loader({ request, params }) {
  const id = params.eventId;

  // Using defer to load event details and events asynchronously
  return defer({
    event: await loadEvent(id), // Loading event details
    events: loadEvents(), // Loading events
  });
}

// Action function responsible for handling actions related to the event detail page
export async function action({ params, request }) {
  const eventId = params.eventId;

  const token = getAuthToken(); // Retrieving authentication token
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method, // Using the HTTP method specified in the request
    headers: {
      Authorization: "Bearer " + token, // Adding authorization header with token
    },
  });

  if (!response.ok) {
    // Throwing an error if the request to delete the event fails
    throw json(
      { message: "Could not delete event." },
      {
        status: 500,
      }
    );
  }
  // Redirecting the user to the events page after successfully deleting the event
  return redirect("/events");
}

/*
Explanation:

The EventDetailPage component is a React functional component responsible for rendering the event detail page.
It imports necessary functions and components from react-router-dom, including useRouteLoaderData, json, redirect, defer, Await.
It imports the EventItem and EventsList components, as well as the getAuthToken function from the auth utility.
Inside the component, it uses the useRouteLoaderData hook to access route loader data specific to the event detail page, including event and events.
It renders the EventItem component and the EventsList component inside Suspense components to handle loading states while waiting for data to resolve.
The loader function is responsible for asynchronously loading data before rendering the component. It uses defer to load event details and events asynchronously.
The action function is responsible for handling actions related to the event detail page, such as deleting the event. It sends a request to the server to delete the event and redirects the user to the events page upon success.
Functions loadEvent and loadEvents are helper functions to asynchronously load event details and events from the server, respectively.
Error handling is implemented using json to throw JSON responses with error messages and status codes.
The use of defer, Await, and Suspense allows for efficient data loading and rendering, ensuring a smooth user experience while waiting for data to resolve.
*/
