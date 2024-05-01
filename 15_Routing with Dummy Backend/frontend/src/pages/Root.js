// Importing necessary dependencies
import { Outlet, useNavigation } from "react-router-dom"; // Importing Outlet and useNavigation from react-router-dom
import MainNavigation from "../components/MainNavigation"; // Importing MainNavigation component

// Functional component for the root layout of the application
function RootLayout() {
  // Uncomment the line below if you want to use useNavigation hook
  // const navigation = useNavigation();

  return (
    <>
      {/* Rendering MainNavigation component to display the main navigation */}
      <MainNavigation />
      {/* Main content area */}
      <main>
        {/* Uncomment the line below to display a loading message while navigation state is loading */}
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        {/* Outlet component to render the child routes */}
        <Outlet />
      </main>
    </>
  );
}

// Exporting the component as the default export
export default RootLayout;

/*
Explanation:

RootLayout Component:
The RootLayout component is a functional component responsible for providing the root layout for the entire application.
MainNavigation Component:
The MainNavigation component is rendered at the top of the layout to provide navigation links for the application.
Main Content Area:
The main element is used to contain the main content of the application.
Outlet Component:
The Outlet component is provided by React Router. It serves as a placeholder for child routes defined in the router configuration. Child routes are rendered within the Outlet based on the current URL.
UseNavigation Hook:
The useNavigation hook can be used to access navigation state and methods. In this code, it's currently commented out. If uncommented, you can use it to check the navigation state, such as whether it's in a loading state.
Loading Message:
If you uncomment the line {navigation.state === 'loading' && <p>Loading...</p>}, it will display a loading message while the navigation state is loading. This can be useful for showing a loading indicator until the routes are resolved.
*/
