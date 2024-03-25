import { useState } from "react";

// Importing necessary components
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  // State management for projects, tasks, and selected project
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, // Currently selected project ID
    projects: [], // List of projects
    tasks: [], // List of tasks
  });

  // Function to add a new task to the selected project
  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random(); // Generate a unique ID for the new task
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId, // Assign the task to the selected project
        id: taskId,
      };

      // Update state by adding the new task to the tasks list
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  // Function to delete a task
  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      // Filter out the task with the specified ID
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  // Function to handle selecting a project
  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      // Update state with the selected project ID
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  // Function to start adding a new project
  function handleStartAddProject() {
    setProjectsState((prevState) => {
      // Set the selected project ID to null to indicate the start of adding a new project
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  // Function to cancel adding a new project
  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      // Reset the selected project ID to undefined
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  // Function to add a new project
  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random(); // Generate a unique ID for the new project
      const newProject = {
        ...projectData,
        id: projectId,
      };

      // Update state by adding the new project to the projects list
      return {
        ...prevState,
        selectedProjectId: undefined, // Reset the selected project ID
        projects: [...prevState.projects, newProject],
      };
    });
  }

  // Function to delete a project
  function handleDeleteProject() {
    setProjectsState((prevState) => {
      // Filter out the project with the specified ID
      return {
        ...prevState,
        selectedProjectId: undefined, // Reset the selected project ID
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  // Find the selected project from the projects list
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  // Determine the content to render based on the selected project ID
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  // Render different components based on the selected project ID
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  // Render the main content with projects sidebar and selected content
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;

/*
Explanation:

App component manages the state of projects, tasks, and the selected project ID using useState hook.
Several functions (handleAddTask, handleDeleteTask, handleSelectProject, handleStartAddProject, handleCancelAddProject, handleAddProject, handleDeleteProject) are defined to handle various actions related to projects and tasks.
The ProjectsSidebar component displays a list of projects and provides options to select or add projects.
The main content (content) displayed on the right side of the screen depends on the selected project ID. It could be a SelectedProject, NewProject, or NoProjectSelected component based on different conditions.
SelectedProject, NewProject, and NoProjectSelected components are responsible for rendering the details of the selected project, adding a new project, and indicating when no project is selected, respectively.
 */
