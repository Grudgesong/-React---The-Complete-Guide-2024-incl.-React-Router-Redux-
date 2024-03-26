import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import Cart from "./Cart.jsx";

const CartModal = forwardRef(function Modal(
  { title, actions }, // Props destructuring: title and actions are received as props
  ref // Forwarded ref for imperative usage
) {
  const dialog = useRef(); // Ref to access the dialog element

  // Exposing the open method to the parent component using useImperativeHandle
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal(); // Showing the modal dialog when open method is called
      },
    };
  });

  // Creating a portal to render the modal dialog outside the component's hierarchy
  return createPortal(
    <dialog id="modal" ref={dialog}>
      {" "}
      {/* Defining the dialog element with ref */}
      {/* Modal content including title, Cart component, and action buttons */}
      <h2>{title}</h2> {/* Displaying modal title */}
      <Cart /> {/* Rendering Cart component inside the modal */}
      <form method="dialog" id="modal-actions">
        {actions} {/* Rendering actions provided as props */}
      </form>
    </dialog>,
    document.getElementById("modal") // Mounting the portal inside the specified DOM element
  );
});

export default CartModal;

/*
Explanation:

forwardRef: It's a Higher Order Component (HOC) used to forward refs to child components, allowing parent components to access child's DOM nodes or component instances.
useRef: It's a hook used to create a mutable ref object. Here, it's used to access the dialog element.
useImperativeHandle: It's a hook used to expose specific functions or methods from a child component to its parent component. Here, it's used to expose the open method to open the modal dialog imperatively.
createPortal: It's a function provided by React for rendering children into a DOM node that exists outside the DOM hierarchy of the parent component. Here, it's used to render the modal dialog outside the component's hierarchy, typically at the end of the document body.
The CartModal component receives title and actions as props. It renders a modal dialog containing the title, a Cart component, and action buttons. The open method exposed via useImperativeHandle allows the parent component to open the modal imperatively.
*/
