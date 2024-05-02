import React from "react";
import {
  Form,
  Link,
  useSearchParams,
  useActionData,
  useNavigation,
} from "react-router-dom"; // Importing necessary components and hooks from react-router-dom
import classes from "./AuthForm.module.css"; // Importing CSS styles

function AuthForm() {
  // Using custom hooks provided by react-router-dom
  const data = useActionData(); // Custom hook to get action data
  const navigation = useNavigation(); // Custom hook to manage navigation state

  const [searchParams] = useSearchParams(); // Hook to access URL search parameters
  const isLogin = searchParams.get("mode") === "login"; // Checking if the mode is login
  const isSubmitting = navigation.state === "submitting"; // Checking if the form is in a submitting state

  return (
    <>
      {/* Rendering the form */}
      <Form method="post" className={classes.form}>
        {/* Displaying the title based on login or signup mode */}
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        {/* Displaying errors, if any */}
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li> // Mapping over errors and rendering them as list items
            ))}
          </ul>
        )}
        {/* Displaying a success message, if any */}
        {data && data.message && <p>{data.message}</p>}
        {/* Input fields for email and password */}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        {/* Actions section */}
        <div className={classes.actions}>
          {/* Link to toggle between login and signup mode */}
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create new user" : "Login"}
          </Link>
          {/* Button to submit the form */}
          <button disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Save"}
          </button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;

/*
Explanation:

The AuthForm component is a React functional component responsible for rendering a form for user authentication (login/signup).
It imports necessary dependencies from react-router-dom for handling routing and navigation.
It also imports CSS styles from an external file (AuthForm.module.css).
Inside the component, it utilizes custom hooks provided by react-router-dom to access URL search parameters and manage navigation state.
Based on the URL parameter mode, it determines whether the form is in login or signup mode.
It renders a form with input fields for email and password.
It displays error messages and success messages, if any, based on the data fetched from the action and navigation states.
It includes actions like toggling between login and signup mode using a link and submitting the form with a button, which is disabled during the submitting state.
Finally, it exports the AuthForm component as the default export.
*/
