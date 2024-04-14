import Input from "./Input.jsx"; // Import custom Input component
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js"; // Import validation utility functions
import { useInput } from "../hooks/useInput.js"; // Import custom useInput hook

// Login component
export default function Login() {
  // Use custom useInput hook to manage email input state and validation
  const {
    value: emailValue, // Current value of the email input
    handleInputChange: handleEmailChange, // Function to handle email input change events
    handleInputBlur: handleEmailBlur, // Function to handle email input blur events
    hasError: emailHasError, // Boolean indicating whether there is a validation error for email
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value)); // Initial value for email is an empty string

  // Use custom useInput hook to manage password input state and validation
  const {
    value: passwordValue, // Current value of the password input
    handleInputChange: handlePasswordChange, // Function to handle password input change events
    handleInputBlur: handlePasswordBlur, // Function to handle password input blur events
    hasError: passwordHasError, // Boolean indicating whether there is a validation error for password
  } = useInput("", (value) => hasMinLength(value, 6)); // Initial value for password is an empty string

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Check if there are validation errors for email or password
    if (emailHasError || passwordHasError) {
      return; // If there are errors, do not proceed with form submission
    }

    // If there are no errors, log the email and password values
    console.log(emailValue, passwordValue);
  }

  // Render the login form
  return (
    <form onSubmit={handleSubmit}>
      {" "}
      {/* Form with onSubmit event handler */}
      <h2>Login</h2> {/* Form title */}
      <div className="control-row">
        {" "}
        {/* Container for email and password inputs */}
        {/* Email input */}
        <Input
          label="Email" // Label for the email input
          id="email" // ID for the email input
          type="email" // Type of the email input
          name="email" // Name of the email input
          onBlur={handleEmailBlur} // onBlur event handler for the email input
          onChange={handleEmailChange} // onChange event handler for the email input
          value={emailValue} // Value of the email input
          error={emailHasError && "Please enter a valid email!"} // Error message for invalid email
        />
        {/* Password input */}
        <Input
          label="Password" // Label for the password input
          id="password" // ID for the password input
          type="password" // Type of the password input
          name="password" // Name of the password input
          onChange={handlePasswordChange} // onChange event handler for the password input
          onBlur={handlePasswordBlur} // onBlur event handler for the password input
          value={passwordValue} // Value of the password input
          error={passwordHasError && "Please enter a valid password!"} // Error message for invalid password
        />
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

The useState hook is not directly used in this component. Instead, the state management and validation logic are handled by the custom useInput hook.
useInput:

Two instances of the useInput hook are used to manage the state and validation of the email and password inputs.
The useInput hook returns an object containing the current input value, event handlers for input changes and blur events, and a boolean indicating whether there is a validation error.
handleSubmit:

This function is called when the form is submitted.
It prevents the default form submission behavior.
It checks if there are any validation errors for the email or password inputs. If there are, it does not proceed with the form submission.
If there are no errors, it logs the email and password values to the console.
Form Structure:

The form contains input fields for email and password, wrapped in a control-row container.
Each input field is rendered using the custom Input component, which receives props such as label, id, type, name, value, error message, and event handlers.
Buttons for reset and login actions are provided at the bottom of the form.
*/
