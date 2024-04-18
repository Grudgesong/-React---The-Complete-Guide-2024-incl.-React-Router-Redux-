import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// Define a reusable Modal component
export default function Modal({ children, open, onClose, className = "" }) {
  // Create a reference to the dialog element
  const dialog = useRef();

  // Effect to manage the modal's open/close state
  useEffect(() => {
    const modal = dialog.current;

    // If 'open' prop is true, show the modal
    if (open) {
      modal.showModal();
    }

    // Clean-up function to close the modal when component unmounts or 'open' prop changes
    return () => modal.close();
  }, [open]);

  // Render the modal using createPortal to mount it to a specific DOM element outside the component hierarchy
  return createPortal(
    // The modal is represented by a dialog element
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children} {/* Render the modal content passed as children */}
    </dialog>,
    // Mount the modal to a DOM element with the id 'modal'
    document.getElementById("modal")
  );
}

/*
Explanation:

This code defines a functional component named Modal, which is exported as the default export of the module.
The component accepts props: children (content of the modal), open (boolean indicating whether the modal should be open), onClose (callback function to handle modal close event), and className (additional CSS classes for styling the modal).
Inside the component, a reference (dialog) to the dialog element is created using the useRef hook. This reference will be used to access the dialog element in the DOM.
The useEffect hook is used to manage the modal's open/close state. When the open prop changes, the modal is either shown or closed using the showModal() and close() methods of the dialog element.
The createPortal function from react-dom is used to render the modal outside of the component hierarchy, allowing it to be placed in a specific DOM element (document.getElementById('modal')). This is useful for ensuring that the modal is not affected by CSS styles or JavaScript behavior from parent components.
The modal itself is represented by a <dialog> element with the specified className and an onClose event handler to call the onClose function when the modal is closed.
The children prop is rendered inside the modal, allowing any content to be displayed within the modal.
This Modal component can be used to create modal dialogs in React applications, providing a flexible and reusable way to display content on top of other content in the application.
*/
