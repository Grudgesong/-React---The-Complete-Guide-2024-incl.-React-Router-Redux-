import noProjectImage from "../assets/no-projects.png"; // Importing an image asset
import Button from "./Button.jsx"; // Importing a Button component

// This component represents a visual indication when no project is selected.

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      {/* Displaying an image */}
      <img
        src={noProjectImage} // Source of the image
        alt="An empty task list" // Alt text for the image
        className="w-16 h-16 object-contain mx-auto" // Styling for the image
      />
      {/* Heading indicating no project is selected */}
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      {/* Message suggesting action to be taken */}
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      {/* Button to create a new project */}
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}

/*
Explanation:

It imports an image (noProjectImage) to display when no projects are selected.
It imports a Button component, presumably used for creating a new project.
The component displays the image along with a message indicating that no project is selected.
It provides a button for creating a new project, which triggers the onStartAddProject function when clicked.
The styles are applied using Tailwind CSS classes to achieve the desired layout and appearance.
 */
