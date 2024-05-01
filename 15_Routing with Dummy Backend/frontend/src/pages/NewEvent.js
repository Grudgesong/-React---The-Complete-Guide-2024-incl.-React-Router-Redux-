// Importing necessary dependencies
import EventForm from "../components/EventForm"; // Importing EventForm component

// Functional component for creating a new event page
function NewEventPage() {
  return <EventForm method="post" />; // Rendering EventForm component with method 'post'
}

// Exporting the component as the default export
export default NewEventPage;

/*
Explanation:

NewEventPage Component:
The NewEventPage component is a functional component responsible for rendering the form to create a new event.
Rendering EventForm Component:
Inside the NewEventPage component, the EventForm component is rendered.
The EventForm component is passed a prop method with the value "post". This indicates that the form submission method should be "POST", typically used for creating new data entries.
Export:
The NewEventPage component is exported as the default export, making it available for import in other files
*/
