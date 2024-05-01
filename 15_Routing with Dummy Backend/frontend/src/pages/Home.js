// Importing necessary dependencies
import PageContent from "../components/PageContent"; // Importing PageContent component

// Functional component for the home page
function HomePage() {
  return (
    // Rendering PageContent component with a title and content
    <PageContent title="Welcome!">
      {/* Content of the home page */}
      <p>Browse all our amazing events!</p>
    </PageContent>
  );
}

// Exporting the component as the default export
export default HomePage;

/*
Explanation:

HomePage Component:
The HomePage component is a functional component responsible for rendering the content of the home page.
Rendering PageContent Component:
Inside the HomePage component, the PageContent component is rendered.
The PageContent component is passed a title prop with the value "Welcome!".
Content:
Inside the PageContent, there is a paragraph element containing the content of the home page, which states "Browse all our amazing events!".
Export:
The HomePage component is exported as the default export, making it available for import in other files.
*/
