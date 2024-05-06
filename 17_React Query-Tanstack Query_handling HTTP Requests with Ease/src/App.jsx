import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import Events from "./components/Events/Events.jsx";
import EventDetails from "./components/Events/EventDetails.jsx";
import NewEvent from "./components/Events/NewEvent.jsx";
import EditEvent, {
  loader as editEventLoader,
  action as editEventAction,
} from "./components/Events/EditEvent.jsx";
import { queryClient } from "./util/http.js";

// Create a browser router instance to handle routing.
const router = createBrowserRouter([
  // Define routes for different paths.
  {
    path: "/",
    // Redirect to the '/events' path if the root path is accessed.
    element: <Navigate to="/events" />,
  },
  {
    path: "/events",
    // Render the Events component when the '/events' path is accessed.
    element: <Events />,
    children: [
      {
        path: "/events/new",
        // Render the NewEvent component when the '/events/new' path is accessed.
        element: <NewEvent />,
      },
    ],
  },
  {
    path: "/events/:id",
    // Render the EventDetails component when a specific event is accessed.
    element: <EventDetails />,
    children: [
      {
        path: "/events/:id/edit",
        // Render the EditEvent component when editing a specific event.
        element: <EditEvent />,
        // Load data needed for editing the event using a loader function.
        loader: editEventLoader,
        // Define action to perform after editing the event.
        action: editEventAction,
      },
    ],
  },
]);

// Main App component that wraps the router with QueryClientProvider.
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;

/*
Router Setup: The code sets up a router using createBrowserRouter from react-router-dom. It defines different paths and their corresponding components to render.
Routes Definition: Each route object contains path and element properties. The element specifies the component to render when the path is matched. Additionally, child routes are defined using the children property for nested routing.
Components: Components like Events, EventDetails, NewEvent, and EditEvent are imported. These components are rendered based on the matched route.
QueryClientProvider: The App component wraps the router with QueryClientProvider from react-query. This provides the queryClient instance to manage queries and caching for the application.
Export: The App component is exported as the default export. This is typically the entry point of the application.
*/
