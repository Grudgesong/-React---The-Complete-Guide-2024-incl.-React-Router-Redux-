// Importing CSS module styles
import classes from "./PageContent.module.css";

// Functional component to display page content
function PageContent({ title, children }) {
  return (
    // Container for page content with a CSS class from the imported styles
    <div className={classes.content}>
      {/* Page title */}
      <h1>{title}</h1>
      {/* Children components, typically passed as props */}
      {children}
    </div>
  );
}

// Exporting the component as the default export
export default PageContent;
