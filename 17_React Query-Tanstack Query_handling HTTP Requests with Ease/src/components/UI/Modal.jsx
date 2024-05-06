import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, onClose }) {
  // Ref to store a reference to the dialog element
  const dialog = useRef();

  useEffect(() => {
    // Using useEffect to interact with the DOM when the component is mounted
    const modal = dialog.current; // Access the dialog element

    // Show the modal using its built-in API
    modal.showModal();

    // Cleanup function to execute when the component is unmounted
    return () => {
      modal.close(); // Close the modal to prevent potential memory leaks
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  // Render the dialog element as a portal, allowing it to be appended outside of the component's DOM hierarchy
  return createPortal(
    // Dialog element with the modal class, ref set to dialog, and onClose event handler
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {/* Render children inside the dialog */}
      {children}
    </dialog>,
    // Specify the target container where the dialog should be appended
    document.getElementById("modal") // Assuming there's an element with the id 'modal' in the document
  );
}

/*
This component is a modal component used for rendering modal dialogs.
It utilizes the useRef hook to create a reference (dialog) to the dialog element.
The useEffect hook is used with an empty dependency array ([]), ensuring its callback runs only once after the initial render. This effect is responsible for showing the modal when the component mounts and closing it when the component unmounts.
Inside the effect, it accesses the dialog element using the dialog.current reference and calls showModal() to display the modal.
The return statement uses createPortal to render the dialog element as a portal. This allows the dialog to be appended to a target container (document.getElementById('modal')) outside of the component's DOM hierarchy. This is commonly done to ensure modals are not affected by CSS styles or JavaScript events of their parent components.
The dialog element has the className "modal", a ref set to dialog, and an onClose event handler passed as a prop.
The children of the Modal component are rendered inside the dialog element.
*/
