import { Outlet } from "react-router-dom"; // Importing the Outlet component from react-router-dom

import EventsNavigation from "../components/EventsNavigation"; // Importing the EventsNavigation component

// React component responsible for defining the layout structure for the events-related pages
function EventsRootLayout() {
  return (
    <>
      <EventsNavigation /> {/* Rendering the EventsNavigation component */}
      <Outlet /> {/* Rendering the nested child routes */}
    </>
  );
}

export default EventsRootLayout; // Exporting the EventsRootLayout component as default

/*
Explanation:

The EventsRootLayout component is a React functional component responsible for defining the layout structure for the events-related pages.
It imports the Outlet component from react-router-dom. The Outlet component serves as a placeholder for rendering nested child routes defined in the parent route component.
It imports the EventsNavigation component, which presumably provides navigation links for events-related pages.
Inside the component, it renders the EventsNavigation component, which typically includes navigation links to different sections or pages related to events.
It also renders the Outlet component, which serves as a placeholder for rendering nested child routes defined in the parent route component. This allows child routes to be rendered within the layout defined by the EventsRootLayout component.
By using the EventsRootLayout component as a layout wrapper for events-related pages, you can ensure consistent navigation and layout structure across those pages.
The component is exported as the default export, making it available for use in other parts of the application where events-related pages need to be rendered with the specified layout structure.
*/
