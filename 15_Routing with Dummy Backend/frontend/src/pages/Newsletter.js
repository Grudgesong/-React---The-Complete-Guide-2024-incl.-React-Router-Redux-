// Importing necessary dependencies
import NewsletterSignup from "../components/NewsletterSignup"; // Importing NewsletterSignup component
import PageContent from "../components/PageContent"; // Importing PageContent component

// Functional component for the newsletter page
function NewsletterPage() {
  return (
    // Rendering PageContent component with a title and NewsletterSignup component
    <PageContent title="Join our awesome newsletter!">
      {/* Rendering NewsletterSignup component */}
      <NewsletterSignup />
    </PageContent>
  );
}

// Exporting the component as the default export
export default NewsletterPage;

// Action function to handle form submission for newsletter signup
export async function action({ request }) {
  // Extracting form data from the request
  const data = await request.formData();
  const email = data.get("email"); // Extracting email from form data

  // Sending the email to the backend newsletter server (in a real application)
  console.log(email); // Logging the email for demonstration purposes

  // Returning a success message
  return { message: "Signup successful!" };
}

/*
Explanation:

NewsletterPage Component:
The NewsletterPage component is a functional component responsible for rendering the newsletter page.
It renders the PageContent component with a title "Join our awesome newsletter!" and the NewsletterSignup component.
Rendering PageContent Component:
Inside the NewsletterPage component, the PageContent component is rendered to provide a structured layout for the page.
The PageContent component is passed a title prop with the value "Join our awesome newsletter!".
Rendering NewsletterSignup Component:
Inside the PageContent, the NewsletterSignup component is rendered. This component typically contains a form for users to sign up for the newsletter.
Action Function:
The action function is an asynchronous function responsible for handling form submission when a user signs up for the newsletter.
It receives the request object, which contains form data submitted by the user.
In this example, it extracts the email from the form data and logs it to the console (for demonstration purposes).
It then returns a success message indicating that the signup was successful. In a real application, this function would likely send the email to a backend newsletter server for processing.
*/
