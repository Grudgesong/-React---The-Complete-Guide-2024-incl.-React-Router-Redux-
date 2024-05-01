// Importing necessary dependencies
import { Outlet } from "react-router-dom";

import EventsNavigation from "../components/EventsNavigation"; // Importing EventsNavigation component

// Functional component for the root layout of events-related pages
function EventsRootLayout() {
  return (
    <>
      {/* Rendering the EventsNavigation component to display navigation specific to events */}
      <EventsNavigation />
      {/* Outlet component to render the child routes */}
      <Outlet />
    </>
  );
}

// Exporting the component as the default export
export default EventsRootLayout;

/*
EventsRootLayout Component:
The EventsRootLayout component is a functional component responsible for providing the root layout for all events-related pages.
It renders the EventsNavigation component and an Outlet.
EventsNavigation Component:
The EventsNavigation component renders navigation specific to events-related pages, such as links to view all events or create a new event.
Outlet Component:
The Outlet component is provided by React Router. It serves as a placeholder for child routes defined in the router configuration. Child routes are rendered within the Outlet based on the current URL.
Rendering:
Inside the EventsRootLayout, the EventsNavigation component is rendered first to provide navigation specific to events.
The Outlet component is then rendered to allow child routes to be rendered within the layout.
*/
