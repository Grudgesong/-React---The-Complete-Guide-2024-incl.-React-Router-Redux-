import { useState } from "react";

// Custom hook for managing form input state and validation
export function useInput(defaultValue, validationFn) {
  // State to manage the entered value of the input field
  const [enteredValue, setEnteredValue] = useState(defaultValue);

  // State to track whether the input has been edited by the user
  const [didEdit, setDidEdit] = useState(false);

  // Validation function to check if the entered value is valid
  const valueIsValid = validationFn(enteredValue);

  // Function to handle input change events
  function handleInputChange(event) {
    // Update the entered value with the new value from the input field
    setEnteredValue(event.target.value);
    // Reset the didEdit state to false when the input value changes
    setDidEdit(false);
  }

  // Function to handle input blur events
  function handleInputBlur() {
    // Set didEdit to true when the input field loses focus
    setDidEdit(true);
  }

  // Return an object containing input state and event handlers
  return {
    value: enteredValue, // Current value of the input field
    handleInputChange, // Function to handle input change events
    handleInputBlur, // Function to handle input blur events
    hasError: didEdit && !valueIsValid, // Boolean indicating whether there is a validation error
  };
}

/*
Explanation:

useState:

The useState hook is used to manage the state of the entered value (enteredValue) and whether the input has been edited (didEdit).
Validation:

The validationFn parameter is a function passed to the hook for validating the input value. It's called to check if the entered value is valid.
valueIsValid stores the result of the validation function for the current input value.
Event Handlers:

handleInputChange: This function is called when the value of the input field changes. It updates the enteredValue state with the new value and resets the didEdit state to false.
handleInputBlur: This function is called when the input field loses focus. It sets the didEdit state to true, indicating that the user has interacted with the input.
Return Object:

The hook returns an object containing:
value: The current value of the input field.
handleInputChange: Function to handle input change events.
handleInputBlur: Function to handle input blur events.
hasError: A boolean indicating whether there is a validation error. It's true if the input has been edited (didEdit is true) and the entered value is not valid according to the validation function.
*/
