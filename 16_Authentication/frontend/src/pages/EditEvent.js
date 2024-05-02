import { useRouteLoaderData } from "react-router-dom"; // Importing the useRouteLoaderData hook from react-router-dom
import EventForm from "../components/EventForm"; // Importing the EventForm component

// React component responsible for rendering the page for editing an event
function EditEventPage() {
  // Accessing route loader data using the useRouteLoaderData hook with the 'event-detail' key
  const data = useRouteLoaderData("event-detail");

  // Rendering the EventForm component for editing the event
  return <EventForm method="patch" event={data.event} />;
}

export default EditEventPage; // Exporting the EditEventPage component as default

/*
Explanation:

The EditEventPage component is a React functional component responsible for rendering the page for editing an event.
It imports the useRouteLoaderData hook from react-router-dom, which is used to access data loaded by the router for a specific route.
It also imports the EventForm component, which presumably provides a form for editing event details.
Inside the component, it uses the useRouteLoaderData hook with the key 'event-detail' to access route loader data specific to the event being edited.
It renders the EventForm component, passing the necessary props:
method="patch": Indicates that the form submission will be a PATCH request, typically used for updating existing resources.
event={data.event}: Passes the event data obtained from the route loader data as a prop to the EventForm component. This data likely includes details of the event being edited.
Finally, the EditEventPage component is exported as the default export
*/
