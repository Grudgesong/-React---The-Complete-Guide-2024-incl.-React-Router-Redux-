// Importing necessary dependencies
import { useRouteError } from "react-router-dom"; // Hook for accessing route errors
import MainNavigation from "../components/MainNavigation"; // Importing MainNavigation component
import PageContent from "../components/PageContent"; // Importing PageContent component

// Functional component for displaying an error page
function ErrorPage() {
  // Using useRouteError hook to access route error information
  const error = useRouteError();

  // Default title and message for the error page
  let title = "An error occurred!";
  let message = "Something went wrong!";

  // Updating title and message based on the error status
  if (error.status === 500) {
    message = error.data.message; // Extracting error message from the error data
  }

  if (error.status === 404) {
    title = "Not found!"; // Changing title for 404 errors
    message = "Could not find resource or page."; // Changing message for 404 errors
  }

  // Rendering the error page
  return (
    <>
      {/* Main navigation component */}
      <MainNavigation />
      {/* Page content component with dynamic title and message */}
      <PageContent title={title}>
        <p>{message}</p> {/* Displaying the error message */}
      </PageContent>
    </>
  );
}

// Exporting the component as the default export
export default ErrorPage;

/*
Explanation:

Imports:
The component imports useRouteError hook from react-router-dom for accessing route error information.
It also imports MainNavigation and PageContent components from their respective files.
Function Component Definition:
ErrorPage is a functional component responsible for rendering the error page.
Error Handling:
It uses the useRouteError hook to retrieve information about the error that occurred on the route.
Based on the error status, it updates the title and message variables to display appropriate information on the error page. For example, for a 404 error, it sets the title to "Not found!" and the message to "Could not find resource or page."
Rendering:
The component renders the MainNavigation component to display the main navigation menu.
It also renders the PageContent component, passing dynamic title and message props to display the error details.
Export:
The component is exported as the default export, making it available for import in other files.
*/
