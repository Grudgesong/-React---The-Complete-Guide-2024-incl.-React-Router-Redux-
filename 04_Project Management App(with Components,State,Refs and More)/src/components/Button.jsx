// This is a React functional component named Button, which serves as a customizable button element.

// The function takes in props as its argument, specifically, it expects a 'children' prop which represents the content of the button,
// and it also accepts any other additional props which will be spread onto the button element.

export default function Button({ children, ...props }) {
  return (
    // The component returns a <button> element with the following properties:
    <button
      // className sets the CSS classes for styling the button.
      className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      // Spread operator {...props} spreads any additional props passed to the component onto the <button> element.
      {...props}
    >
      {/* The content of the button, passed as children to the component */}
      {children}
    </button>
  );
}

/*
Explanation of CSS classes:

px-4: Padding on the x-axis (horizontal) with a size of 4.
py-2: Padding on the y-axis (vertical) with a size of 2.
text-xs: Text size extra small.
md:text-base: Text size medium (base) on medium-sized screens and larger.
rounded-md: Rounded corners with a medium radius.
bg-stone-700: Background color with a stone shade (700).
text-stone-400: Text color with a stone shade (400).
hover:bg-stone-600: Background color changes to a darker stone shade (600) on hover.
hover:text-stone-100: Text color changes to a lighter stone shade (100) on hover.


 */
