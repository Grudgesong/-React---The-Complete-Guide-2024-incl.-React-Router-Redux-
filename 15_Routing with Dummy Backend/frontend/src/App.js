// Importing necessary dependencies
import { RouterProvider, createBrowserRouter } from "react-router-dom"; // Importing RouterProvider and createBrowserRouter from react-router-dom

// Importing page components and associated actions/loaders
import EditEventPage from "./pages/EditEvent"; // Importing EditEventPage component
import ErrorPage from "./pages/Error"; // Importing ErrorPage component
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetail"; // Importing EventDetailPage component, along with its loader and action functions
import EventsPage, { loader as eventsLoader } from "./pages/Events"; // Importing EventsPage component, along with its loader function
import EventsRootLayout from "./pages/EventsRoot"; // Importing EventsRootLayout component
import HomePage from "./pages/Home"; // Importing HomePage component
import NewEventPage from "./pages/NewEvent"; // Importing NewEventPage component
import RootLayout from "./pages/Root"; // Importing RootLayout component
import { action as manipulateEventAction } from "./components/EventForm"; // Importing manipulateEventAction from EventForm component
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter"; // Importing NewsletterPage component, along with its action function

// Creating a browser router configuration
const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <RootLayout />, // Rendering RootLayout component
    errorElement: <ErrorPage />, // Rendering ErrorPage component if there's an error
    children: [
      { index: true, element: <HomePage /> }, // Rendering HomePage component for the root path
      {
        path: "events", // Events path
        element: <EventsRootLayout />, // Rendering EventsRootLayout component
        children: [
          {
            index: true,
            element: <EventsPage />, // Rendering EventsPage component for the events path
            loader: eventsLoader, // Using eventsLoader function to load data for EventsPage
          },
          {
            path: ":eventId", // Event detail path with eventId parameter
            id: "event-detail", // Identifier for this route
            loader: eventDetailLoader, // Using eventDetailLoader function to load data for EventDetailPage
            children: [
              {
                index: true,
                element: <EventDetailPage />, // Rendering EventDetailPage component for event detail path
                action: deleteEventAction, // Using deleteEventAction function to handle action for EventDetailPage
              },
              {
                path: "edit", // Edit event path
                element: <EditEventPage />, // Rendering EditEventPage component
                action: manipulateEventAction, // Using manipulateEventAction function to handle action for EditEventPage
              },
            ],
          },
          {
            path: "new", // New event path
            element: <NewEventPage />, // Rendering NewEventPage component
            action: manipulateEventAction, // Using manipulateEventAction function to handle action for NewEventPage
          },
        ],
      },
      {
        path: "newsletter", // Newsletter path
        element: <NewsletterPage />, // Rendering NewsletterPage component
        action: newsletterAction, // Using newsletterAction function to handle action for NewsletterPage
      },
    ],
  },
]);

// App component
function App() {
  return <RouterProvider router={router} />; // Providing the router configuration to the RouterProvider
}

// Exporting the App component as the default export
export default App;

/*
Explanation:

Router Configuration:
The createBrowserRouter function is used to create a browser router configuration.
The configuration includes various paths and their associated components, loaders, and actions.
Root Path:
The root path (/) renders the RootLayout component and defines an error element as ErrorPage.
Nested Routes:
The nested routes include routes for handling events (/events), event details (/events/:eventId), editing events (/events/:eventId/edit), creating new events (/events/new), and newsletter (/newsletter).
Each route specifies an element to render, loader function for data loading (if applicable), and action function for handling actions (such as form submissions).
RouterProvider:
The RouterProvider component is used to provide the router configuration (router) created with createBrowserRouter.
App Component:
The App component renders the RouterProvider with the provided router configuration.
*/
