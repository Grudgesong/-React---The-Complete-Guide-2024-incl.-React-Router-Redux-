// Importing necessary dependencies
import { useEffect } from "react";
import { useFetcher } from "react-router-dom";

// Importing CSS module styles
import classes from "./NewsletterSignup.module.css";

// Functional component for newsletter signup form
function NewsletterSignup() {
  // Fetcher hook to handle form submission
  const fetcher = useFetcher();
  const { data, state } = fetcher; // Destructuring data and state from fetcher

  // Effect hook to display an alert when the form submission is successful
  useEffect(() => {
    // Checking if the state is 'idle' and if there's a message in the data
    if (state === "idle" && data && data.message) {
      // Displaying an alert with the message
      window.alert(data.message);
    }
  }, [data, state]); // Dependencies for the effect

  return (
    // Form component from the fetcher hook
    <fetcher.Form
      method="post" // HTTP method for form submission
      action="/newsletter" // Action URL for form submission
      className={classes.newsletter} // CSS class for styling
    >
      {/* Input field for email address */}
      <input
        type="email"
        placeholder="Sign up for newsletter..." // Placeholder text
        aria-label="Sign up for newsletter" // ARIA label for accessibility
      />
      {/* Button to submit the form */}
      <button>Sign up</button>
    </fetcher.Form>
  );
}

// Exporting the component as the default export
export default NewsletterSignup;

/*
Imports:
useEffect: This is a React hook that allows performing side effects in function components. It's commonly used to perform actions in response to component lifecycle events.
useFetcher: This is a custom hook provided by react-router-dom for handling form submissions.
classes: This imports CSS module styles for styling the component.
Function Component Definition:
NewsletterSignup is a functional component responsible for rendering a newsletter signup form.
Hooks Initialization:
const fetcher = useFetcher();: This initializes the fetcher hook, which provides methods and properties for handling form submissions.
const { data, state } = fetcher;: This destructures data and state from the fetcher object. data contains the response data from form submissions, and state represents the current state of the form submission process.
Effect Hook:
useEffect(() => {...}, [data, state]);: This effect hook runs after every render if the data or state values change. It checks if the form submission is successful (state === 'idle' and data.message exists) and displays an alert with the message.
Return Statement:
<fetcher.Form ...>: This renders the form component provided by the fetcher hook. It sets the method to 'post' and the action to '/newsletter'. The className is set to apply CSS styles.
<input type="email" ...>: This renders an input field for entering the email address. It has a placeholder and an ARIA label for accessibility.
<button>Sign up</button>: This renders a submit button for the form.
*/
