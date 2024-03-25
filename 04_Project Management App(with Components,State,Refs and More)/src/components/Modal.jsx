import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import Button from "./Button.jsx";

// This is a forwardRef component named Modal, used to create a modal dialog box.

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  // useRef hook to reference the dialog element
  const dialog = useRef();

  // useImperativeHandle hook to expose custom methods to parent components via ref
  useImperativeHandle(ref, () => {
    return {
      // Method to open the modal
      open() {
        dialog.current.showModal();
      },
    };
  });

  // Create a portal to render the modal outside the main DOM hierarchy
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {/* Content of the modal */}
      {children}
      {/* Form inside the modal */}
      <form method="dialog" className="mt-4 text-right">
        {/* Button component used for modal action */}
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    // Target element where the portal content will be appended
    document.getElementById("modal-root")
  );
});

export default Modal;

/*
Explanation:

This component creates a modal dialog box that can be opened using a custom method exposed via ref.
It utilizes forwardRef to access the ref passed to it from the parent component.
useRef hook is used to create a reference to the <dialog> element.
useImperativeHandle hook is used to expose a custom method open() via ref, which allows opening the modal programmatically.
createPortal is used to render the modal content outside of the main DOM hierarchy, typically in a designated container (modal-root).
The modal content includes children (the content of the modal) and a form with a button (rendered using the Button component) typically used for modal actions.
The styles for the modal are applied using CSS classes.
*/
