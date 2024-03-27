import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

// Component for a modal dialog
function Modal({ open, children, onClose }) {
  // Ref to the <dialog> element
  const dialog = useRef();

  // Effect hook to handle modal open/close state
  useEffect(() => {
    // If the modal is open, show the dialog
    if (open) {
      dialog.current.showModal();
    } else {
      // If the modal is closed, close the dialog
      dialog.current.close();
    }
  }, [open]); // Re-run effect when the open state changes

  // Return a portal for rendering the dialog outside of the component's DOM hierarchy
  return createPortal(
    // Render the <dialog> element with provided children
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {open ? children : null} {/* Render children only if modal is open */}
    </dialog>,
    document.getElementById("modal") // Mount the portal under the 'modal' root element
  );
}

export default Modal;

/*
Explanation:

useRef: This hook is used to create a reference to the <dialog> element. It allows accessing the DOM node imperatively.
useEffect: The effect hook is used to manage the modal's open/close state. When the open prop changes, the effect updates the modal accordingly. If open is true, the dialog is shown using dialog.current.showModal(), and if open is false, the dialog is closed using dialog.current.close().
createPortal: This function from react-dom is used to render the modal's content outside of the component's DOM hierarchy. It creates a portal where the modal content will be rendered.
<dialog> element: The modal is represented by a <dialog> element. Its ref is set to the dialog ref created using useRef(), allowing access to the dialog's DOM node. The onClose prop is used to handle the modal close event.
Children Rendering: The children provided to the Modal component are rendered inside the <dialog> element. They are only rendered if the modal is open (open === true). This ensures that the children are only displayed when the modal is visible.
CSS Class: The <dialog> element is given the CSS class modal, which can be used for styling purposes.
*/
