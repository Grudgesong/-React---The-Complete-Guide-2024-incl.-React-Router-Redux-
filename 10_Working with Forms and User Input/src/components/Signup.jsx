import { useState } from "react";

// Signup component
export default function Signup() {
  // State to manage whether passwords are equal or not
  const [passwordsAreNotEqual, setPasswordsAreNotEqual] = useState(false);

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Create a new FormData object from the form
    const fd = new FormData(event.target);

    // Get the values of the acquisition channel checkboxes
    const acquisitionChannel = fd.getAll("acquisition");

    // Convert FormData object to a plain object
    const data = Object.fromEntries(fd.entries());

    // Assign the acquisition channel array to the data object
    data.acquisition = acquisitionChannel;

    // Check if the passwords match
    if (data.password !== data["confirm-password"]) {
      // If passwords don't match, set passwordsAreNotEqual state to true and return
      setPasswordsAreNotEqual(true);
      return;
    }

    // Log the form data (not implemented in this example)
    console.log(data);
  }

  // Render the signup form
  return (
    <form onSubmit={handleSubmit}>
      {" "}
      {/* Form with onSubmit event handler */}
      <h2>Welcome on board!</h2> {/* Form title */}
      <p>
        We just need a little bit of data from you to get you started 🚀
      </p>{" "}
      {/* Form description */}
      <div className="control">
        {" "}
        {/* Email input field */}
        <label htmlFor="email">Email</label>{" "}
        {/* Label for the email input field */}
        <input id="email" type="email" name="email" required />{" "}
        {/* Email input field */}
      </div>
      <div className="control-row">
        {" "}
        {/* Password and confirm password input fields */}
        <div className="control">
          {" "}
          {/* Password input field */}
          <label htmlFor="password">Password</label>{" "}
          {/* Label for the password input field */}
          <input
            id="password"
            type="password"
            name="password"
            required
            minLength={6}
          />{" "}
          {/* Password input field */}
        </div>
        <div className="control">
          {" "}
          {/* Confirm password input field */}
          <label htmlFor="confirm-password">Confirm Password</label>{" "}
          {/* Label for the confirm password input field */}
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            required
          />{" "}
          {/* Confirm password input field */}
          <div className="control-error">
            {" "}
            {/* Error message for password mismatch */}
            {passwordsAreNotEqual && <p>Passwords must match.</p>}
          </div>
        </div>
      </div>
      <hr /> {/* Horizontal line separator */}
      <div className="control-row">
        {" "}
        {/* First name and last name input fields */}
        <div className="control">
          {" "}
          {/* First name input field */}
          <label htmlFor="first-name">First Name</label>{" "}
          {/* Label for the first name input field */}
          <input type="text" id="first-name" name="first-name" required />{" "}
          {/* First name input field */}
        </div>
        <div className="control">
          {" "}
          {/* Last name input field */}
          <label htmlFor="last-name">Last Name</label>{" "}
          {/* Label for the last name input field */}
          <input type="text" id="last-name" name="last-name" required />{" "}
          {/* Last name input field */}
        </div>
      </div>
      <div className="control">
        {" "}
        {/* Role selection dropdown */}
        <label htmlFor="role">What best describes your role?</label>{" "}
        {/* Label for the role selection dropdown */}
        <select id="role" name="role" required>
          {" "}
          {/* Role selection dropdown */}
          <option value="student">Student</option> {/* Student option */}
          <option value="teacher">Teacher</option> {/* Teacher option */}
          <option value="employee">Employee</option> {/* Employee option */}
          <option value="founder">Founder</option> {/* Founder option */}
          <option value="other">Other</option> {/* Other option */}
        </select>
      </div>
      <fieldset>
        {" "}
        {/* Fieldset for acquisition channel checkboxes */}
        <legend>How did you find us?</legend> {/* Legend for the fieldset */}
        <div className="control">
          {" "}
          {/* Checkbox for Google */}
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />{" "}
          {/* Checkbox input for Google */}
          <label htmlFor="google">Google</label>{" "}
          {/* Label for Google checkbox */}
        </div>
        <div className="control">
          {" "}
          {/* Checkbox for friend referral */}
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />{" "}
          {/* Checkbox input for friend referral */}
          <label htmlFor="friend">Referred by friend</label>{" "}
          {/* Label for friend referral checkbox */}
        </div>
        <div className="control">
          {" "}
          {/* Checkbox for other acquisition channel */}
          <input
            type="checkbox"
            id="other"
            name="acquisition"
            value="other"
          />{" "}
          {/* Checkbox input for other acquisition channel */}
          <label htmlFor="other">Other</label>{" "}
          {/* Label for other acquisition channel checkbox */}
        </div>
      </fieldset>
      <div className="control">
        {" "}
        {/* Checkbox for terms and conditions */}
        <label htmlFor="terms-and-conditions">
          {" "}
          {/* Label for terms and conditions checkbox */}
          <input
            type="checkbox"
            id="terms-and-conditions"
            name="terms"
            required
          />{" "}
          {/* Checkbox input for terms and conditions */}I agree to the terms
          and conditions {/* Text for terms and conditions */}
        </label>
      </div>
      <p className="form-actions">
        {" "}
        {/* Form actions (buttons) */}
        <button type="reset" className="button button-flat">
          Reset
        </button>{" "}
        {/* Reset button */}
        <button type="submit" className="button">
          Sign up
        </button>{" "}
        {/* Submit button */}
      </p>
    </form>
  );
}

/*
Explanation:

useState:

The useState hook is used to manage the state of passwordsAreNotEqual, which tracks whether the entered password and confirm password fields match.
handleSubmit:

This function is called when the form is submitted.
It prevents the default form submission behavior.
It retrieves the form data using FormData and checks if the passwords match.
If the passwords don't match, it sets passwordsAreNotEqual to true.
If the passwords match, it logs the form data (not implemented in this example).
Form Structure:

The form collects various user details such as email, password, name, role, acquisition channel, and terms agreement.
Basic validation is applied to fields such as email, password, confirm password, and terms agreement.
The user can select a role from a dropdown and acquisition channels using checkboxes.
Buttons for reset and signup actions are provided at the bottom of the form.
*/
