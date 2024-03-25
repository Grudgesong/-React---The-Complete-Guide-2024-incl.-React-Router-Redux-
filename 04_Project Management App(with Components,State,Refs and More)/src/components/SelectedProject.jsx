import Tasks from "./Tasks.jsx"; // Importing the Tasks component

// This component represents the view for a selected project, displaying its details and tasks.

export default function SelectedProject({
  project, // Details of the selected project
  onDelete, // Function to handle project deletion
  onAddTask, // Function to handle adding a new task
  onDeleteTask, // Function to handle task deletion
  tasks, // List of tasks associated with the project
}) {
  // Formatting the due date of the project
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16">
      {/* Header section */}
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          {/* Title of the project */}
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          {/* Button to delete the project */}
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        {/* Due date of the project */}
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        {/* Description of the project */}
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      {/* Rendering the tasks associated with the project using the Tasks component */}
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}

/*
Explanation:

The SelectedProject component is responsible for displaying the details of a selected project and rendering its associated tasks.
It receives props such as project, onDelete (function to handle project deletion), onAddTask (function to handle adding a new task), onDeleteTask (function to handle task deletion), and tasks (list of tasks associated with the project).
It formats the due date of the project using JavaScript's toLocaleDateString method.
The component renders the project's title, due date, and description in the header section.
It renders the tasks associated with the project using the Tasks component.
The styles are applied using Tailwind CSS classes to achieve the desired layout and appearance.
 */
