// Importing necessary module from React and Redux
import { useDispatch } from "react-redux";

// Importing CSS module for styling
import classes from "./Auth.module.css";

// Importing authentication action creators from the Redux store
import { authActions } from "../store/auth";

// Auth component definition
const Auth = () => {
  // Accessing dispatch function from Redux store
  const dispatch = useDispatch();

  // Handler function for handling login form submission
  const loginHandler = (event) => {
    // Preventing default form submission behavior
    event.preventDefault();

    // Dispatching the login action to update authentication state
    dispatch(authActions.login());
  };

  // Rendering the authentication form
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          {/* Email input field */}
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>

          {/* Password input field */}
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>

          {/* Login button */}
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

// Exporting the Auth component as the default export
export default Auth;

/*
The useDispatch hook from React Redux is imported to access the dispatch function of the Redux store.
The authActions object, containing action creators related to authentication, is imported from the Redux store.
Inside the Auth component:
The useDispatch hook is used to get the dispatch function from the Redux store.
The loginHandler function is defined to handle the form submission. It prevents the default form submission behavior and dispatches the login action using authActions.login() to update the authentication state.
JSX is used to render the authentication form with input fields for email and password, along with a login button. The onSubmit event of the form is set to loginHandler to handle form submission.
The Auth component is exported as the default export.
*/
