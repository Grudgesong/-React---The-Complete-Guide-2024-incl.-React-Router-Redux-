// Importing necessary dependencies
import { Suspense } from "react";
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";

import EventItem from "../components/EventItem"; // Importing EventItem component
import EventsList from "../components/EventsList"; // Importing EventsList component

// Functional component for displaying event details page
function EventDetailPage() {
  // Using useRouteLoaderData hook to access data loaded for the route with key 'event-detail'
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <>
      {/* Suspense component to handle loading state for EventItem */}
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        {/* Await component to wait for event data to resolve */}
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}{" "}
          {/* Rendering EventItem with loaded event data */}
        </Await>
      </Suspense>
      {/* Suspense component to handle loading state for EventsList */}
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        {/* Await component to wait for events data to resolve */}
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}{" "}
          {/* Rendering EventsList with loaded events data */}
        </Await>
      </Suspense>
    </>
  );
}

export default EventDetailPage;

// Function to asynchronously load event details
async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    // Handling error if response is not okay
    throw json(
      { message: "Could not fetch details for selected event." },
      {
        status: 500,
      }
    );
  } else {
    // Parsing response data and returning event details
    const resData = await response.json();
    return resData.event;
  }
}

// Function to asynchronously load list of events
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

// Loader function for loading data required by the route
export async function loader({ request, params }) {
  const id = params.eventId;

  // Deferring loading of event and events data using defer function
  return defer({
    event: await loadEvent(id), // Loading event data asynchronously
    events: loadEvents(), // Loading list of events asynchronously
  });
}

// Action function to handle actions on the route
export async function action({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method, // Using request method for the fetch request
  });

  if (!response.ok) {
    // Handling error if response is not okay
    throw json(
      { message: "Could not delete event." },
      {
        status: 500,
      }
    );
  }
  return redirect("/events"); // Redirecting to '/events' route after successful action
}

/*
Suspense and Await Components:
Suspense component is used to handle the loading state while waiting for asynchronous data to resolve.
Await component waits for the resolution of a promise and then renders the children with the resolved value.
Loader Function:
The loader function is responsible for loading data required by the route. It defers loading of event and events data asynchronously using the defer function.
Action Function:
The action function handles actions on the route, such as deleting an event. It performs a fetch request based on the request method and handles errors by throwing a JSON response with an appropriate error message.
Load Event and Load Events Functions:
loadEvent and loadEvents functions are responsible for asynchronously fetching event details and a list of events from the server, respectively. They handle errors by throwing a JSON response with an appropriate error message if the fetch request fails.
*/
