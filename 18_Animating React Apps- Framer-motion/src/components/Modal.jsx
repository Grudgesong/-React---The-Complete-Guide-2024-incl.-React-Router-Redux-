import { createPortal } from "react-dom"; // Importing createPortal function from react-dom
import { motion } from "framer-motion"; // Importing motion component from Framer Motion library

// Define the Modal component
export default function Modal({ title, children, onClose }) {
  // Using createPortal to render the modal content outside of the root React DOM node
  return createPortal(
    <>
      {/* Backdrop for the modal, clicking on which closes the modal */}
      <div className="backdrop" onClick={onClose} />

      {/* Modal dialog */}
      <motion.dialog
        // Variants for animating the modal
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden" // Initial animation state
        animate="visible" // Animation state when the modal appears
        exit="hidden" // Animation state when the modal exits
        open // Attribute indicating that the dialog is open
        className="modal" // CSS class for styling the modal
      >
        {/* Modal title */}
        <h2>{title}</h2>
        {/* Modal content */}
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal") // Rendering the modal content inside the element with id 'modal'
  );
}

/*
Explanation:

The component imports createPortal function from react-dom and the motion component from the Framer Motion library.
The Modal component is defined, which takes props such as title, children, and onClose.
Inside the component:
The createPortal function is used to render the modal content outside of the root React DOM node. This is useful for creating modal dialogs that appear over the main content of the application.
The modal consists of two main parts:
A backdrop (<div className="backdrop">) behind the modal, which, when clicked, triggers the onClose function to close the modal.
The modal dialog itself (<motion.dialog>), which contains the title (<h2>{title}</h2>) and the children passed to the component ({children}). The modal dialog is styled using CSS class modal.
The motion.dialog component from Framer Motion is used to add animations to the modal. It accepts variants for defining different animation states (hidden and visible), along with initial, animate, and exit props to specify the initial, animation, and exit states respectively.
The modal content is rendered inside the motion.dialog component, and its animation is controlled by the specified variants.
The modal content is rendered inside an element with the id 'modal', which should be present in the HTML document. This ensures that the modal is rendered at the desired location in the DOM hierarchy, typically outside of the main content area.
*/
