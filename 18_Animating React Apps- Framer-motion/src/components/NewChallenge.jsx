import { useContext, useRef, useState } from "react"; // Importing necessary hooks from React
import { motion, useAnimate, stagger } from "framer-motion"; // Importing motion-related components from Framer Motion library

import { ChallengesContext } from "../store/challenges-context.jsx"; // Importing ChallengesContext from context file
import Modal from "./Modal.jsx"; // Importing the Modal component
import images from "../assets/images.js"; // Importing images data

// Define the NewChallenge component
export default function NewChallenge({ onDone }) {
  // Refs for form inputs
  const title = useRef();
  const description = useRef();
  const deadline = useRef();

  // Hook for animation control
  const [scope, animate] = useAnimate();

  // State for selected image
  const [selectedImage, setSelectedImage] = useState(null);

  // Accessing addChallenge function from ChallengesContext
  const { addChallenge } = useContext(ChallengesContext);

  // Function to handle selecting an image
  function handleSelectImage(image) {
    setSelectedImage(image);
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    const challenge = {
      title: title.current.value,
      description: description.current.value,
      deadline: deadline.current.value,
      image: selectedImage,
    };

    // Checking if any input is empty
    if (
      !challenge.title.trim() ||
      !challenge.description.trim() ||
      !challenge.deadline.trim() ||
      !challenge.image
    ) {
      // Triggering animation for empty inputs
      animate(
        "input, textarea",
        { x: [-10, 0, 10, 0] },
        { type: "spring", duration: 0.2, delay: stagger(0.05) }
      );
      return;
    }

    // Calling onDone callback and adding the challenge
    onDone();
    addChallenge(challenge);
  }

  return (
    // Rendering a modal with the title "New Challenge" and onClose event handler
    <Modal title="New Challenge" onClose={onDone}>
      {/* Form for adding a new challenge */}
      <form id="new-challenge" onSubmit={handleSubmit} ref={scope}>
        {/* Input field for challenge title */}
        <p>
          <label htmlFor="title">Title</label>
          <input ref={title} type="text" name="title" id="title" />
        </p>

        {/* Textarea for challenge description */}
        <p>
          <label htmlFor="description">Description</label>
          <textarea ref={description} name="description" id="description" />
        </p>

        {/* Input field for challenge deadline */}
        <p>
          <label htmlFor="deadline">Deadline</label>
          <input ref={deadline} type="date" name="deadline" id="deadline" />
        </p>

        {/* List of images for selecting a challenge image */}
        <motion.ul
          id="new-challenge-images"
          variants={{
            visible: { transition: { staggerChildren: 0.05 } },
          }}
        >
          {images.map((image) => (
            <motion.li
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: [0.8, 1.3, 1] },
              }}
              exit={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring" }}
              key={image.alt}
              onClick={() => handleSelectImage(image)}
              className={selectedImage === image ? "selected" : undefined}
            >
              <img {...image} />
            </motion.li>
          ))}
        </motion.ul>

        {/* Buttons for canceling or adding the challenge */}
        <p className="new-challenge-actions">
          <button type="button" onClick={onDone}>
            Cancel
          </button>
          <button>Add Challenge</button>
        </p>
      </form>
    </Modal>
  );
}

/*

Explanation:

The component imports necessary hooks from React (useContext, useRef, useState) and motion-related components (motion, useAnimate, stagger) from Framer Motion library. It also imports the Modal component and image data.
Inside the component:
Refs are created for form inputs (title, description, deadline) to access their values.
useAnimate hook is used to control animations within a specific scope.
State is maintained for the selected image (selectedImage).
The addChallenge function is extracted from the ChallengesContext.
Functions are defined to handle selecting an image (handleSelectImage) and submitting the form (handleSubmit).
The modal component (<Modal>) is rendered with the title "New Challenge" and an onClose event handler.
Inside the modal, a form (<form>) is rendered with input fields for title, description, and deadline.
A list of images is rendered using motion.ul and motion.li components from Framer Motion for selecting a challenge image. Each image is animated using variants and transition properties.
Buttons for canceling or adding the challenge are provided with corresponding event handlers (onDone for canceling and handleSubmit for adding).
The onDone callback is called when the modal is closed or when the form is submitted with valid inputs. It is responsible for closing the modal or taking further actions after adding a challenge.*/
