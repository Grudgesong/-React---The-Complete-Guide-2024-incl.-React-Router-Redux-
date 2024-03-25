import Button from "./Button.jsx"; // Importing a Button component

// This component represents a sidebar displaying a list of projects.

export default function ProjectsSidebar({
  onStartAddProject, // Function to start adding a new project
  projects, // Array of projects
  onSelectProject, // Function to select a project
  selectedProjectId, // ID of the currently selected project
}) {
  return (
    // Sidebar container with specified styles
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      {/* Heading for the list of projects */}
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      {/* Button to add a new project */}
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      {/* List of projects */}
      <ul className="mt-8">
        {/* Mapping over projects to display each */}
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          // Applying different styles based on whether the project is selected or not
          if (project.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            // Rendering each project as a button
            <li key={project.id}>
              <button
                className={cssClasses} // Applying computed CSS classes
                onClick={() => onSelectProject(project.id)} // Function to select the project
              >
                {project.title} {/* Displaying project title */}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

/*
Explanation:

The component displays a sidebar with a list of projects.
It includes a heading "Your Projects" and a button to add a new project.
Each project in the list is displayed as a button.
The button for the currently selected project has different styling to differentiate it from others.
Clicking on a project button triggers the onSelectProject function with the project's ID.
The styles are applied using Tailwind CSS classes to achieve the desired layout and appearance.
 */
