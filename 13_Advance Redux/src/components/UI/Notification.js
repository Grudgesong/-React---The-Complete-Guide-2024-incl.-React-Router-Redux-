// Importing CSS module for styling
import classes from "./Notification.module.css";

// Functional component for rendering a notification with custom styling
const Notification = (props) => {
  // Variable to store special classes based on the notification status
  let specialClasses = "";

  // Checking the status of the notification and assigning appropriate classes
  if (props.status === "error") {
    specialClasses = classes.error; // Assigning the 'error' class from the CSS module
  }
  if (props.status === "success") {
    specialClasses = classes.success; // Assigning the 'success' class from the CSS module
  }

  // Combining base and special classes for the notification
  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    // Rendering a section element with combined classes for the notification
    <section className={cssClasses}>
      {/* Rendering the title of the notification */}
      <h2>{props.title}</h2>
      {/* Rendering the message of the notification */}
      <p>{props.message}</p>
    </section>
  );
};

// Exporting the Notification component as the default export
export default Notification;

/*
Explanation:

The Notification component is a functional component responsible for rendering a notification with custom styling based on its status.
It imports a CSS module (Notification.module.css) which contains styling rules for the notification.
Inside the component's function body, a variable specialClasses is declared to store additional classes based on the notification status.
Conditional statements are used to check the status prop passed to the component. If the status is 'error', the specialClasses variable is assigned the value of the 'error' class from the CSS module. If the status is 'success', the specialClasses variable is assigned the value of the 'success' class from the CSS module.
The cssClasses variable combines the base class (notification) with any special classes (specialClasses) using string interpolation. This results in a string containing all classes to be applied to the notification element.
The JSX code renders a <section> element with the combined classes for the notification element.
Within the <section> element, the title and message of the notification are rendered dynamically using props (props.title and props.message).
Finally, the Notification component is exported as the default export, making it available for use in other parts of the application.
*/
