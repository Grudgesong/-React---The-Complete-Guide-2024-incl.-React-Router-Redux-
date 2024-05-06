// Define a functional component named ErrorBlock
export default function ErrorBlock({ title, message }) {
  return (
    // Render a div with the class "error-block"
    <div className="error-block">
      {/* Render an icon for the error block */}
      <div className="error-block-icon">!</div>
      {/* Render text content for the error block */}
      <div className="error-block-text">
        {/* Render the error title */}
        <h2>{title}</h2>
        {/* Render the error message */}
        <p>{message}</p>
      </div>
    </div>
  );
}

/*
This component is a functional component named ErrorBlock, which accepts two props: title and message.
It renders a div element with the class "error-block", which serves as the container for the error block.
Inside the error block container, it renders two child elements:
An icon represented by a div with the class "error-block-icon", displaying an exclamation mark symbol.
Text content represented by another div with the class "error-block-text", containing the error title (title) and message (message).
The error title is rendered as an h2 element.
The error message is rendered as a p element.
This component is designed to be reusable and can be used to display error messages with a consistent format throughout the application.
*/
