import { useRef, useEffect } from "react"; // Importing useRef and useEffect hooks from React
import { createPortal } from "react-dom"; // Importing createPortal function from ReactDOM

// Component for creating a modal dialog
function Modal({ open, children, onClose }) {
  // useRef hook to reference the dialog element
  const dialog = useRef();

  // useEffect hook to manage the modal state
  useEffect(() => {
    // If the modal is open, show it using showModal() method
    if (open) {
      dialog.current.showModal();
    } else {
      // If the modal is closed, close it using close() method
      dialog.current.close();
    }
  }, [open]); // Dependency array containing the open state

  // Rendering the modal using createPortal to append it to a different DOM node
  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {/* Render children inside the dialog only if the modal is open */}
      {open ? children : null}
    </dialog>,
    document.getElementById("modal") // Target DOM node where the modal is appended
  );
}

export default Modal; // Exporting the Modal component

/*
Explanation:

Dependencies:

The useRef hook is used to create a reference to the <dialog> element, which is used to control the modal.
The useEffect hook is used to handle the opening and closing of the modal based on the open prop.
Effect Handling:

Inside the useEffect, when the open prop changes:
If the modal is set to be open (open is true), the showModal() method is called on the dialog element, making the modal visible.
If the modal is set to be closed (open is false), the close() method is called on the dialog element, closing the modal.
Rendering with createPortal:

The createPortal function is used to render the modal outside of the component hierarchy and directly into the specified DOM node.
It takes two arguments: the JSX content of the modal and the DOM node where it should be rendered.
Inside the dialog, the children are rendered only if the modal is open (open is true). This allows the modal to dynamically render its content based on its open/closed state.
Props:

open: Boolean indicating whether the modal is open or closed.
children: The content to be rendered inside the modal.
onClose: Function to be called when the modal is closed.
*/
