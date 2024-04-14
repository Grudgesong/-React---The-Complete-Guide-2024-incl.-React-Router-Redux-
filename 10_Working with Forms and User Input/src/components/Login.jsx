import { useRef, useState } from "react";

// Login component
export default function Login() {
  // State to manage the validation of the email input
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  // Refs for the email and password input fields
  const email = useRef();
  const password = useRef();

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the values of the email and password fields from the refs
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    // Basic email validation: check if the entered email includes '@'
    const emailIsValid = enteredEmail.includes("@");

    // If email is not valid, set emailIsInvalid state to true and return
    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }

    // If email is valid, reset emailIsInvalid state to false
    setEmailIsInvalid(false);

    // Perform further actions such as sending HTTP request (not implemented in this example)
    console.log("Sending HTTP request...");
  }

  // Render the login form
  return (
    <form onSubmit={handleSubmit}>
      {" "}
      {/* Form with onSubmit event handler */}
      <h2>Login</h2> {/* Form title */}
      <div className="control-row">
        {" "}
        {/* Container for input fields */}
        <div className="control no-margin">
          {" "}
          {/* Email input field */}
          <label htmlFor="email">Email</label>{" "}
          {/* Label for the email input field */}
          <input id="email" type="email" name="email" ref={email} />{" "}
          {/* Email input field */}
          <div className="control-error">
            {" "}
            {/* Error message for invalid email */}
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>
        <div className="control no-margin">
          {" "}
          {/* Password input field */}
          <label htmlFor="password">Password</label>{" "}
          {/* Label for the password input field */}
          <input
            id="password"
            type="password"
            name="password"
            ref={password}
          />{" "}
          {/* Password input field */}
        </div>
      </div>
      <p className="form-actions">
        {" "}
        {/* Form actions (buttons) */}
        <button className="button button-flat">Reset</button>{" "}
        {/* Reset button */}
        <button className="button">Login</button> {/* Submit button */}
      </p>
    </form>
  );
}

/*
Explanation:

useState:

The useState hook is used to manage the state of emailIsInvalid, which tracks whether the entered email is invalid.
useRef:

Two refs (email and password) are created to access the values of the email and password input fields.
handleSubmit:

This function is called when the form is submitted.
It prevents the default form submission behavior.
It retrieves the values of the email and password fields from the refs.
It performs basic email validation by checking if the entered email includes '@'.
If the email is invalid, it sets emailIsInvalid to true.
If the email is valid, it resets emailIsInvalid to false.
Additional actions like sending an HTTP request can be performed here.
Form Structure:

The form contains input fields for email and password.
Each input field has a label, an input element, and an optional error message for invalid input.
There are buttons for reset and login actions.
*/
