import { useParams, Link } from "react-router-dom";

// This component represents the product detail page of the application.
function ProductDetailPage() {
  // useParams hook to access the parameters from the URL
  const params = useParams();

  return (
    <>
      {/* Title */}
      <h1>Product Details!</h1>
      {/* Display the product ID obtained from the URL parameters */}
      <p>{params.productId}</p>
      {/* Link to navigate back to the previous page */}
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}

export default ProductDetailPage;

/*
In this code:

The ProductDetailPage component is defined as a functional component representing the product detail page of the application.
It imports useParams and Link from 'react-router-dom'. useParams is a hook used to access the parameters from the URL, and Link is used to create a link to another route within the application.
Inside the ProductDetailPage component's JSX:
There's a title (Product Details!) indicating the title of the page.
The product ID is displayed using {params.productId}. This value is obtained from the URL parameters using the useParams hook.
A <Link> component is rendered with a to prop set to ".." to navigate back to the previous page. The relative='path' prop ensures that the link is relative to the current path.
Finally, the ProductDetailPage component is exported as the default export, making it available for use elsewhere in the application.
*/
