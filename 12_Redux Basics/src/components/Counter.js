// Importing necessary modules from React and Redux
import { useSelector, useDispatch } from "react-redux";

// Importing action creators from the counter slice of the Redux store
import { counterActions } from "../store/counter";

// Importing CSS module for styling
import classes from "./Counter.module.css";

// Counter component definition
const Counter = () => {
  // Accessing dispatch function from Redux store
  const dispatch = useDispatch();

  // Accessing counter state from Redux store
  const counter = useSelector((state) => state.counter.counter);

  // Accessing showCounter state from Redux store
  const show = useSelector((state) => state.counter.showCounter);

  // Handler function for incrementing the counter
  const incrementHandler = () => {
    // Dispatching the increment action to update counter state
    dispatch(counterActions.increment());
  };

  // Handler function for increasing the counter by 10
  const increaseHandler = () => {
    // Dispatching the increase action with payload 10 to update counter state
    dispatch(counterActions.increase(10)); // Payload is 10
  };

  // Handler function for decrementing the counter
  const decrementHandler = () => {
    // Dispatching the decrement action to update counter state
    dispatch(counterActions.decrement());
  };

  // Handler function for toggling the visibility of the counter
  const toggleCounterHandler = () => {
    // Dispatching the toggleCounter action to update showCounter state
    dispatch(counterActions.toggleCounter());
  };

  // Rendering the counter component
  return (
    <main className={classes.counter}>
      {/* Counter title */}
      <h1>Redux Counter</h1>

      {/* Conditional rendering of counter value based on showCounter state */}
      {show && <div className={classes.value}>{counter}</div>}

      {/* Buttons for incrementing, decrementing, and toggling the counter */}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>

      {/* Button for toggling the visibility of the counter */}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// Exporting the Counter component as the default export
export default Counter;

/*
In this code:

The useSelector and useDispatch hooks from React Redux are imported to access the Redux store state and dispatch actions, respectively.
The counterActions object, containing action creators related to the counter slice, is imported from the Redux store.
Inside the Counter component:
useSelector hooks are used to extract the counter and showCounter values from the counter state in the Redux store.
useDispatch hook is used to access the dispatch function, which is then used to dispatch actions.
Handler functions (incrementHandler, increaseHandler, decrementHandler, toggleCounterHandler) are defined to dispatch corresponding actions when the buttons are clicked.
The counter component is rendered with a title (<h1>Redux Counter</h1>), the counter value (conditionally rendered based on showCounter), buttons for incrementing, decrementing, and toggling the counter, and a button for toggling the visibility of the counter.
The Counter component is exported as the default export.
*/

// -------------------------------------------------------------------------------------------------------------------------------------
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

/*
The Counter class component defines methods like incrementHandler, decrementHandler, and toggleCounterHandler for handling various actions.
Inside the render method, the component renders JSX to display the counter value and buttons for incrementing and decrementing the counter. The methods are bound to the component instance using bind(this) when passed as event handlers to the buttons.
mapStateToProps function is used to map the state from the Redux store to the props of the Counter component. In this case, it maps the counter state to this.props.counter.
mapDispatchToProps function is used to map action creators to the props of the Counter component. It maps the increment and decrement action creators to this.props.increment and this.props.decrement respectively.
The connect function connects the Counter component to the Redux store, mapping state and action creators to props, and exporting the connected component.
This approach is using the older class-based React component syntax along with the connect function from react-redux. The code provided earlier in the file utilizes functional components and hooks, which are the newer and more preferred way of working with React and Redux.
*/
