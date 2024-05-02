import { useEffect } from "react"; // Importing the useEffect hook from React
import { Outlet, useLoaderData, useSubmit } from "react-router-dom"; // Importing necessary hooks from react-router-dom

import MainNavigation from "../components/MainNavigation"; // Importing the MainNavigation component
import { getTokenDuration } from "../util/auth"; // Importing the getTokenDuration function from the auth utility

// React component responsible for defining the root layout structure of the application
function RootLayout() {
  const token = useLoaderData(); // Retrieving loader data using the useLoaderData hook
  const submit = useSubmit(); // Obtaining the submit function using the useSubmit hook

  // useEffect hook to handle side effects
  useEffect(() => {
    // Checking if there's no token
    if (!token) {
      return; // If there's no token, return early
    }

    // Handling expired token scenario
    if (token === "EXPIRED") {
      // If the token is 'EXPIRED', submit a logout action
      submit(null, { action: "/logout", method: "post" });
      return; // Return early after submitting logout action
    }

    // Handling token duration scenario
    const tokenDuration = getTokenDuration(); // Getting the token duration from the auth utility
    console.log(tokenDuration); // Logging the token duration

    // Setting a timeout to automatically logout the user after token duration
    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" }); // Submitting a logout action after token duration
    }, tokenDuration); // The timeout duration is equal to the token duration

    // The useEffect hook dependencies include 'token' and 'submit'
  }, [token, submit]);

  return (
    <>
      <MainNavigation /> {/* Rendering the MainNavigation component */}
      <main>
        {/* Rendering the nested child routes */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout; // Exporting the RootLayout component as default

/*
Explanation:

The RootLayout component is a React functional component responsible for defining the root layout structure of the application.
It imports necessary hooks from react-router-dom, including useLoaderData and useSubmit, as well as the MainNavigation component and the getTokenDuration function from the auth utility.
Inside the component, it retrieves loader data using the useLoaderData hook and obtains the submit function using the useSubmit hook.
It uses the useEffect hook to perform side effects when the component mounts or when its dependencies change.
Inside the useEffect hook, it checks if there's no token. If there's no token, it returns early.
If the token is 'EXPIRED', it submits a logout action using the submit function with the action set to '/logout' and the method set to 'post'.
If the token is valid, it retrieves the token duration using the getTokenDuration function and sets a timeout to automatically logout the user after the token duration.
The component renders the MainNavigation component and provides a placeholder for rendering nested child routes using the Outlet component.
The RootLayout component is exported as the default export, making it available for use as the root layout structure of the application.
*/
