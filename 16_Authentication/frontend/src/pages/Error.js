import { useRouteError } from "react-router-dom"; // Importing the useRouteError hook from react-router-dom
import PageContent from "../components/PageContent"; // Importing the PageContent component

// React component responsible for rendering an error page
function ErrorPage() {
  // Using the useRouteError hook to access error information related to the current route
  const error = useRouteError();

  // Initializing variables for the error title and message
  let title = "An error occurred!";
  let message = "Something went wrong!";

  // Modifying the title and message based on the error status
  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  // Rendering the error page content using the PageContent component
  return (
    <>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage; // Exporting the ErrorPage component as default

/*
The ErrorPage component is a React functional component responsible for rendering an error page.
It imports the useRouteError hook from react-router-dom, which is used to access error information related to the current route.
It also imports the PageContent component, which presumably provides a consistent layout for page content, including titles and messages.
Inside the component, it uses the useRouteError hook to obtain error information such as status code and any associated data.
It initializes variables title and message with default values for the error title and message.
It modifies the title and message variables based on the error status:
If the error status is 500 (Internal Server Error), it updates the message variable with the error message from the error data.
If the error status is 404 (Not Found), it updates both the title and message variables to indicate that the requested resource or page was not found.
It renders the error page content using the PageContent component, passing the error title as the title prop and the error message as the child content.
Finally, the ErrorPage component is exported as the default export.
*/
