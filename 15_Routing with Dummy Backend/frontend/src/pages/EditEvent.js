// Importing necessary dependencies
import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm"; // Importing the EventForm component

// Functional component for editing an event page
function EditEventPage() {
  // Using useRouteLoaderData hook to access data loaded for the route with key 'event-detail'
  const data = useRouteLoaderData("event-detail");

  // Rendering the EventForm component with method 'patch' and event data obtained from route loader data
  return <EventForm method="patch" event={data.event} />;
}

// Exporting the component as the default export
export default EditEventPage;

/*
Explanation:

Importing Dependencies:
The component imports the useRouteLoaderData hook from react-router-dom, which allows accessing data loaded for a specific route.
It also imports the EventForm component from the '../components/EventForm' file.
Function Component Definition:
EditEventPage is a functional component responsible for rendering the page for editing an event.
Inside the component, it uses the useRouteLoaderData hook to retrieve data loaded for the route with the key 'event-detail'. This hook provides access to data that was preloaded for the route.
Rendering:
The component renders the EventForm component, passing props:
method="patch": Indicates that the form submission method should be 'PATCH', typically used for updating existing data.
event={data.event}: Passes the event data obtained from the route loader data as a prop to the EventForm component. This allows the form to be pre-filled with the details of the event being edited.
Export:
The component is exported as the default export, making it available for import in other files.
*/
