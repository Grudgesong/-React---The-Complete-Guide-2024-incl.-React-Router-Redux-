// Define a reusable Button component
export default function Button({ children, textOnly, className, ...props }) {
  // Determine the CSS classes for the button based on the 'textOnly' prop
  // If 'textOnly' is true, use 'text-button' class; otherwise, use 'button' class
  let cssClasses = textOnly ? "text-button" : "button";

  // Append the 'className' prop to the CSS classes
  cssClasses += " " + className;

  // Return a button element with the calculated CSS classes and spread any additional props
  return (
    <button className={cssClasses} {...props}>
      {children} {/* Render the content (children) inside the button */}
    </button>
  );
}
/*
Explanation:

This code defines a functional component named Button, which is exported as the default export of the module.
The component accepts props: children (representing the content of the button), textOnly (a boolean indicating whether the button should have text-only styling), className (additional CSS classes for styling), and any other props (collected using the rest parameter ...props).
Based on the textOnly prop, the component dynamically determines the CSS classes for the button: if textOnly is true, it applies the 'text-button' class; otherwise, it applies the 'button' class.
The className prop is appended to the calculated CSS classes to allow for further customization.
The component returns a button element with the calculated CSS classes applied using the className attribute, and it spreads any additional props onto the button element.
The content (children) passed to the Button component is rendered inside the button element. This allows the button to be used with any content, such as text, icons, or other components.
*/
