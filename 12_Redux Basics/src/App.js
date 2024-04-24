// Importing necessary modules from React and Redux
import { Fragment } from "react";
import { useSelector } from "react-redux";

// Importing components used in the App
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

// Defining the main component of the application
function App() {
  // Accessing the authentication state from Redux store
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  // Rendering the components based on authentication status
  return (
    <Fragment>
      {/* Rendering the Header component */}
      <Header />

      {/* Rendering the Auth component only if user is not authenticated */}
      {!isAuth && <Auth />}

      {/* Rendering the UserProfile component only if user is authenticated */}
      {isAuth && <UserProfile />}

      {/* Rendering the Counter component */}
      <Counter />
    </Fragment>
  );
}

// Exporting the App component to be used in other parts of the application
export default App;

/*
This code represents a typical React application structure with Redux integration. It renders different components based on the authentication status stored in the Redux state. If the user is authenticated, it displays the user profile, otherwise, it displays the authentication form. Additionally, it always displays a header component and a counter component.
*/
