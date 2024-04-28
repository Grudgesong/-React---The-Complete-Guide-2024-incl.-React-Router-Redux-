import MainNavigation from "../components/MainNavigation";

// This component represents the error page of the application.
// It displays an error message indicating that the requested page could not be found.
function ErrorPage() {
  return (
    <>
      {/* Include the MainNavigation component for consistent navigation */}
      <MainNavigation />
      <main>
        {/* Error message */}
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
}

export default ErrorPage;

/*
In this code:

The ErrorPage component is defined as a functional component.
It imports and includes the MainNavigation component from '../components/MainNavigation'. This ensures that the navigation bar is displayed consistently across different pages of the application.
Inside the ErrorPage component's JSX:
The MainNavigation component is included at the top, ensuring that the navigation bar appears before the error message.
The <main> element contains the error message, indicating that an error occurred and the requested page could not be found.
Finally, the ErrorPage component is exported as the default export, making it available for use elsewhere in the application.
*/
