import { useRef } from "react";

import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

// This component represents a form for adding a new project.

export default function NewProject({ onAdd, onCancel }) {
  // Ref for the modal component
  const modal = useRef();

  // Refs for input fields
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  // Function to handle saving the new project
  function handleSave() {
    // Extract values from input fields
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // Check if any of the required fields are empty
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      // If any required field is empty, open the modal indicating invalid input
      modal.current.open();
      return;
    }

    // If all required fields have valid values, call the onAdd function with the new project data
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      {/* Modal component for displaying invalid input message */}
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        {/* Form section */}
        <menu className="flex items-center justify-end gap-4 my-4">
          {/* Cancel button */}
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          {/* Save button */}
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        {/* Input fields */}
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}

/* 
Explanation:

The NewProject component is a form for adding a new project, including title, description, and due date.
It uses useRef to create refs for the modal and input fields.
When the "Save" button is clicked, it checks if all required fields are filled. If any required field is empty, it opens the modal displaying an invalid input message.
It utilizes the Modal component to display the modal message for invalid input.
The form includes input fields for title, description (as a textarea), and due date.
The "Cancel" button cancels the addition of a new project and calls the onCancel function passed from the parent component.
The "Save" button triggers the handleSave function to save the new project, calling the onAdd function passed from the parent component with the project data.
*/
