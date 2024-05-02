import { RouterProvider, createBrowserRouter } from "react-router-dom"; // Importing necessary components and functions from react-router-dom

// Importing page components and associated actions and loaders
import EditEventPage from "./pages/EditEvent";
import ErrorPage from "./pages/Error";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetail";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventsRootLayout from "./pages/EventsRoot";
import HomePage from "./pages/Home";
import NewEventPage from "./pages/NewEvent";
import RootLayout from "./pages/Root";
import { action as manipulateEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";
import AuthenticationPage, {
  action as authAction,
} from "./pages/Authentication";
import { action as logoutAction } from "./pages/Logout";
import { checkAuthLoader, tokenLoader } from "./util/auth"; // Importing authentication-related utility functions

// Creating a browser router configuration
const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <RootLayout />, // Root layout component
    errorElement: <ErrorPage />, // Error page component
    id: "root", // Identifier for the root route
    loader: tokenLoader, // Loader function to load authentication token
    children: [
      { index: true, element: <HomePage /> }, // Homepage route
      {
        path: "events", // Events route
        element: <EventsRootLayout />, // Events root layout component
        children: [
          {
            index: true,
            element: <EventsPage />, // Events page component
            loader: eventsLoader, // Loader function to load events data
          },
          {
            path: ":eventId", // Event detail route with parameter eventId
            id: "event-detail", // Identifier for the event detail route
            loader: eventDetailLoader, // Loader function to load event detail data
            children: [
              {
                index: true,
                element: <EventDetailPage />, // Event detail page component
                action: deleteEventAction, // Action function for deleting an event
              },
              {
                path: "edit", // Edit event route
                element: <EditEventPage />, // Edit event page component
                action: manipulateEventAction, // Action function for manipulating event data
                loader: checkAuthLoader, // Loader function to check authentication
              },
            ],
          },
          {
            path: "new", // New event route
            element: <NewEventPage />, // New event page component
            action: manipulateEventAction, // Action function for manipulating event data
            loader: checkAuthLoader, // Loader function to check authentication
          },
        ],
      },
      {
        path: "auth", // Authentication route
        element: <AuthenticationPage />, // Authentication page component
        action: authAction, // Action function for authentication
      },
      {
        path: "newsletter", // Newsletter route
        element: <NewsletterPage />, // Newsletter page component
        action: newsletterAction, // Action function for newsletter
      },
      {
        path: "logout", // Logout route
        action: logoutAction, // Action function for logout
      },
    ],
  },
]);

// App component wrapping the RouterProvider with the configured router
function App() {
  return <RouterProvider router={router} />;
}

export default App; // Exporting the App component as default

/*
Explanation:

Various page components are imported, representing different routes and layouts in the application.
Utility functions for handling authentication (tokenLoader and checkAuthLoader) and actions related to events and authentication are imported from the util/auth module.
A browser router configuration is created using createBrowserRouter, defining the structure of the application's routes.
Each route is specified with a path, an element representing the component to render, and optionally, a loader function to load data, an action function to handle actions, and an id for identification purposes.
Nested routes are defined using the children property, allowing for hierarchical routing.
The App component wraps the RouterProvider component with the configured router, providing the routing context to the application.
Finally, the App component is exported as the default export, making it the entry point for the application.
*/
