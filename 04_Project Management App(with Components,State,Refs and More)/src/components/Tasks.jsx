import NewTask from "./NewTask.jsx"; // Importing the NewTask component

// This component represents a section displaying tasks associated with a project.

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      {/* Title for the tasks section */}
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      {/* Component to add a new task */}
      <NewTask onAdd={onAdd} />
      {/* Conditional rendering based on whether there are tasks or not */}
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        // List of tasks
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {/* Mapping through tasks and rendering each task */}
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              {/* Displaying task text */}
              <span>{task.text}</span>
              {/* Button to delete the task */}
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

/*
Explanation:

The Tasks component is responsible for displaying a list of tasks associated with a project.
It receives props such as tasks (array of tasks), onAdd (function to add a new task), and onDelete (function to delete a task).
It renders a title "Tasks" for the section.
It renders the NewTask component to allow adding a new task.
It conditionally renders a message if there are no tasks associated with the project.
If there are tasks, it renders them as a list with each task displayed along with a "Clear" button to delete the task.
The styles are applied using Tailwind CSS classes to achieve the desired layout and appearance.
 */
