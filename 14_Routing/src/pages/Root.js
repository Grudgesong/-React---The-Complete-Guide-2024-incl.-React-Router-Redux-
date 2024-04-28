import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

// This component represents the root layout of the application.
function RootLayout() {
  return (
    <>
      {/* Include the MainNavigation component for consistent navigation */}
      <MainNavigation />
      {/* Main content area */}
      <main>
        {/* Outlet component renders the child route components */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;

/*
In this code:

The RootLayout component is defined as a functional component representing the root layout of the application.
It imports Outlet from 'react-router-dom'. The Outlet component is used to render the child route components defined in the application's routing configuration.
Inside the RootLayout component's JSX:
The <MainNavigation> component is included to ensure consistent navigation across all pages of the application.
The main content area is represented by the <main> element.
The <Outlet> component is used to render the child route components. This allows child components defined in the routing configuration to be rendered within the RootLayout. The actual content of the current route will be rendered in place of the <Outlet> component.
Finally, the RootLayout component is exported as the default export, making it available for use as the top-level layout component in the application.
*/
