import { RouterProvider, createBrowserRouter } from "react-router-dom";

import WelcomePage from "./pages/Welcome.jsx";
import ChallengesPage from "./pages/Challenges.jsx";

// Create a BrowserRouter instance with route configurations
const router = createBrowserRouter([
  { path: "/", element: <WelcomePage /> }, // Route for the WelcomePage component
  { path: "/challenges", element: <ChallengesPage /> }, // Route for the ChallengesPage component
]);

// Define the main App component
function App() {
  // Render the RouterProvider component with the created BrowserRouter
  return <RouterProvider router={router} />;
}

export default App;

/*
Explanation:

The code imports necessary modules from react-router-dom, including RouterProvider and createBrowserRouter.
It imports components for different pages of the application: WelcomePage and ChallengesPage from their respective files.
The createBrowserRouter function is used to create a BrowserRouter instance, which represents the router configuration for the application. It takes an array of route objects as its argument. Each route object specifies the path of the route and the element to render when that path is matched.
In this example, two routes are configured:
'/': This route matches the root path and renders the WelcomePage component.
'/challenges': This route matches the '/challenges' path and renders the ChallengesPage component.
The App component is defined, which serves as the main entry point of the application.
Inside the App component, the RouterProvider component is rendered. It is provided with the router instance created earlier as a prop. This RouterProvider component ensures that the routing context is available to all components within its subtree.
Finally, the App component is exported as the default export of this module, making it accessible for rendering in the application.
*/
