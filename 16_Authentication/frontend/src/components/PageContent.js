import React from "react";
import classes from "./PageContent.module.css"; // Importing CSS styles

function PageContent({ title, children }) {
  return (
    // Rendering the page content container with CSS class from the imported module
    <div className={classes.content}>
      <h1>{title}</h1> {/* Rendering the title */}
      {children} {/* Rendering the children components */}
    </div>
  );
}

export default PageContent; // Exporting the PageContent component as default

/*
Explanation:

The PageContent component is a React functional component responsible for rendering the content of a page.
It imports CSS styles from an external file (PageContent.module.css).
Inside the component, it receives two props: title and children.
It renders a <div> element with a class content from the CSS module, which defines styles for the content container.
Inside the content container, it renders an <h1> element displaying the title prop.
It then renders the children prop, which represents the child components of the PageContent component. These children components are rendered within the content container.
Finally, the PageContent component is exported as the default export.

*/
