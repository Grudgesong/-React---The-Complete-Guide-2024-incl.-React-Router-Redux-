// Component for displaying an error message
export default function Error({ title, message, onConfirm }) {
  return (
    <div className="error">
      {" "}
      {/* Container for the error message */}
      <h2>{title}</h2> {/* Title of the error message */}
      <p>{message}</p> {/* Body text of the error message */}
      {/* Conditional rendering of confirmation actions */}{" "}
      {onConfirm && (
        <div id="confirmation-actions">
          {" "}
          {/* Container for confirmation actions */}
          {/* Button to confirm or dismiss the error */}
          <button onClick={onConfirm} className="button">
            Okay
          </button>
        </div>
      )}
    </div>
  );
}

/*
Explanation:

Functional Component: This is a simple functional component named Error which takes three props: title, message, and onConfirm.

JSX Structure:

The component returns JSX, which renders an error message.
It uses a <div> with a class name of "error" as a container for the error message.
Inside this container, it displays the error title as an <h2> element and the error message as a <p> paragraph element.
Conditional Rendering:

It checks if the onConfirm function is provided as a prop.
If onConfirm is provided (i.e., not undefined or null), it renders a confirmation action section.
Inside this section, it displays a button labeled "Okay" which, when clicked, triggers the onConfirm function.
Props:

title: The title of the error message.
message: The body text of the error message.
onConfirm: A function to handle confirmation action. It's optional, and the confirmation action section is only rendered if this prop is provided.
*/
