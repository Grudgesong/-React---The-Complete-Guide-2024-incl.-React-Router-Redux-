// Component for displaying an error message
export default function Error({ title, message, onConfirm }) {
  return (
    <div className="error">
      <h2>{title}</h2>
      <p>{message}</p>
      {/* Render confirmation button only if onConfirm callback is provided */}
      {onConfirm && (
        <div id="confirmation-actions">
          {/* Button to confirm acknowledgment of error */}
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

Error Component:

This functional component renders an error message with a title and a message.
It optionally renders a confirmation button to acknowledge the error.
The component accepts three props: title, message, and onConfirm.
Conditional Rendering:

The onConfirm prop is used to determine whether to render the confirmation button.
If onConfirm is provided (i.e., it's not undefined or null), the confirmation button is rendered.
If onConfirm is not provided, the confirmation button is not rendered, ensuring flexibility in component usage.
Confirmation Button:

If onConfirm is provided, a confirmation button with the text "Okay" is rendered.
Clicking on this button triggers the onConfirm callback, allowing the user to acknowledge the error and dismiss the error message.
*/
