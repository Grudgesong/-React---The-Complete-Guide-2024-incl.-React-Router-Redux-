import { useIsFetching } from "@tanstack/react-query";

// This component represents the header of the application.
// It displays a loading indicator if there are ongoing data fetches,
// and renders a common header layout including a title and navigation.
export default function Header({ children }) {
  // Using the useIsFetching hook provided by React Query
  // to get the number of ongoing fetches.
  const fetching = useIsFetching();

  // Returning the JSX for the Header component.
  return (
    <>
      {/* Rendering the loading indicator if there are ongoing fetches */}
      <div id="main-header-loading">{fetching > 0 && <progress />}</div>
      {/* Main header section */}
      <header id="main-header">
        {/* Title section */}
        <div id="header-title">
          <h1>React Events</h1>
        </div>
        {/* Navigation section */}
        <nav>{children}</nav>
      </header>
    </>
  );
}

/*
The purpose of the component is described.
The useIsFetching hook is used to monitor ongoing fetches.
JSX elements are rendered to display the loading indicator, header title, and navigation.
Each section of the header (loading indicator, title, navigation) is explained.
*/
