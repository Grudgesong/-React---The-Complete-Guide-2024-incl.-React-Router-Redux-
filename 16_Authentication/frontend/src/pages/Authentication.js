import { json, redirect } from "react-router-dom"; // Importing necessary functions from react-router-dom
import AuthForm from "../components/AuthForm"; // Importing the AuthForm component

// React component responsible for rendering the authentication page
function AuthenticationPage() {
  return <AuthForm />; // Rendering the AuthForm component
}

export default AuthenticationPage; // Exporting the AuthenticationPage component as default

// Asynchronous function responsible for handling actions related to authentication
export async function action({ request }) {
  // Parsing the URL search parameters to extract the 'mode' parameter (defaulting to 'login')
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  // Validating the 'mode' parameter
  if (mode !== "login" && mode !== "signup") {
    // Throwing an error with a message if the mode is unsupported
    throw json({ message: "Unsupported mode." }, { status: 422 });
  }

  // Parsing form data from the request body
  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  // Sending a POST request to the server endpoint based on the authentication mode
  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  // Handling different response statuses
  if (response.status === 422 || response.status === 401) {
    // Returning the response if there's a validation error or unauthorized access
    return response;
  }

  if (!response.ok) {
    // Throwing an error if the response is not OK (status code other than 200-299)
    throw json({ message: "Could not authenticate user." }, { status: 500 });
  }

  // Parsing the response data
  const resData = await response.json();
  const token = resData.token;

  // Storing the token and its expiration in the local storage
  localStorage.setItem("token", token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString());

  // Redirecting the user to the home page after successful authentication
  return redirect("/");
}

/*
Explanation:

The AuthenticationPage component is a React functional component responsible for rendering the authentication page. It simply renders the AuthForm component, which contains the form for user authentication.
The action function is an asynchronous function that handles actions related to authentication. It is invoked when the authentication form is submitted.
It extracts the authentication mode (either 'login' or 'signup') from the URL search parameters. If the mode is unsupported, it throws an error with a status code of 422.
It parses form data from the request body to obtain the user's email and password.
It sends a POST request to the server endpoint based on the authentication mode ('/login' or '/signup') with the user's credentials.
It handles different response statuses: if there's a validation error or unauthorized access, it returns the response; if the response is not OK (status code other than 200-299), it throws an error with a status code of 500.
If the authentication is successful (response status is OK), it parses the response data to obtain the authentication token.
It stores the token and its expiration time in the local storage.
Finally, it redirects the user to the home page after successful authentication.
This approach of handling authentication allows for communication with the server, validation of user credentials, and storage of authentication tokens for subsequent user interactions.
*/
