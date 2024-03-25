import { forwardRef } from "react";

// This is a forwardRef component named Input, used to render either an input or a textarea element.

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  // Define classes for styling the input/textarea element
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    // Container element for the input/textarea along with its label
    <p className="flex flex-col gap-1 my-4">
      {/* Label for the input/textarea */}
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {/* Render either a textarea or an input based on the 'textarea' prop */}
      {textarea ? (
        // If 'textarea' prop is true, render a textarea element
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        // If 'textarea' prop is false or not provided, render an input element
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});

export default Input;

/*
Explanation:

The component Input is created using forwardRef, allowing it to receive a ref that can be attached to the underlying DOM element (input or textarea).
It takes in several props: label, textarea, and any other additional props which will be spread onto the input/textarea element.
It conditionally renders either a textarea or an input element based on the value of the textarea prop.
The label prop is used to render a label element for the input/textarea.
The classes variable contains a string of CSS classes for styling the input/textarea element.
The ref is forwarded to the input/textarea element using the ref attribute.
The ...props spread operator is used to pass any additional props to the input/textarea element.

*/
