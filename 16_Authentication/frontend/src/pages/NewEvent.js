import EventForm from "../components/EventForm"; // Importing the EventForm component

// React component responsible for rendering the page for creating a new event
function NewEventPage() {
  return <EventForm method="post" />; // Rendering the EventForm component with method="post"
}

export default NewEventPage; // Exporting the NewEventPage component as default

/*
Explanation:

The NewEventPage component is a React functional component responsible for rendering the page for creating a new event in the application.
It imports the EventForm component from the '../components/EventForm' file. Presumably, the EventForm component provides a form interface for users to input information for creating a new event.
Inside the component, it renders the EventForm component with specific props:
method="post": Specifies the HTTP method to be used when submitting the form data. In this case, it indicates that the form will be submitted using the POST method, typically used for creating new resources.
By rendering the EventForm component with the method prop set to "post", the NewEventPage component ensures that the form is configured to create a new event when submitted.
The component is exported as the default export, making it available for use in other parts of the application where the page for creating new events needs to be rendered.
*/
