import PageContent from "../components/PageContent"; // Importing the PageContent component

// React component responsible for rendering the home page
function HomePage() {
  return (
    // Rendering the PageContent component with a title and content
    <PageContent title="Welcome!">
      <p>Browse all our amazing events!</p> {/* Content of the home page */}
    </PageContent>
  );
}

export default HomePage; // Exporting the HomePage component as default

/*
Explanation:

The HomePage component is a React functional component responsible for rendering the home page of the application.
It imports the PageContent component from the '../components/PageContent' file. Presumably, the PageContent component provides a consistent layout for page content, including titles and content sections.
Inside the component, it renders the PageContent component with specific props:
title="Welcome!": Specifies the title of the page as "Welcome!". This title will be displayed prominently on the home page.
<p>Browse all our amazing events!</p>: Provides the content of the home page, which includes a paragraph inviting users to browse the amazing events offered by the application.
By encapsulating the content of the home page within the PageContent component, the HomePage component can ensure consistency in the layout and presentation of content across different pages of the application.
The component is exported as the default export, making it available for use in other parts of the application where the home page needs to be rendered.
*/
