import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

// Component for displaying a modal dialog
function Modal({ open, children, onClose }) {
  const dialog = useRef(); // Ref to access the modal dialog element in the DOM

  // Effect to show or hide the modal dialog based on the 'open' prop
  useEffect(() => {
    if (open) {
      dialog.current.showModal(); // Show the modal dialog
    } else {
      dialog.current.close(); // Close the modal dialog
    }
  }, [open]); // Run effect whenever the 'open' prop changes

  // Create portal to render the modal dialog outside of the component's DOM hierarchy
  return createPortal(
    // Dialog element with ref to control its visibility and onClose event handler
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {/* Render children inside the dialog only if the modal is open */}
      {open ? children : null}
    </dialog>,
    // Render the portal inside the element with id 'modal' in the DOM
    document.getElementById("modal")
  );
}

export default Modal;

/*
Explanation:

Modal Component:

This functional component represents a modal dialog that can be opened or closed based on the open prop.
It renders a <dialog> element that serves as the modal dialog.
useRef Hook:

The useRef hook is used to create a reference (dialog) to the <dialog> element in the DOM. This allows us to access and control the modal dialog imperatively.
useEffect Hook:

The useEffect hook is used to handle the opening and closing of the modal dialog based on changes to the open prop.
When the component mounts or when the open prop changes, the effect either shows or hides the modal dialog by calling the showModal() or close() methods on the dialog.current element.
createPortal Function:

The createPortal function is used to render the modal dialog outside of the component's DOM hierarchy.
It takes two arguments: the JSX element representing the modal dialog and the DOM element where the portal should be rendered.
In this case, the modal dialog is rendered inside the element with the id modal in the DOM.
Rendering Children:

The children of the <Modal> component are rendered inside the <dialog> element only when the modal is open (open prop is true). This ensures that the children are only rendered when the modal is visible.
*/
