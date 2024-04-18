import MealItem from "./MealItem.jsx"; // Import MealItem component
import useHttp from "../hooks/useHttp.js"; // Import custom hook useHttp for fetching data
import Error from "./Error.jsx"; // Import Error component

const requestConfig = {}; // Define request configuration object (currently empty)

// Define Meals component
export default function Meals() {
  // Use custom hook useHttp to fetch meals data from the server
  const {
    data: loadedMeals, // Fetched meals data
    isLoading, // Loading state while fetching data
    error, // Error object if fetching data fails
  } = useHttp("http://localhost:3000/meals", requestConfig, []); // Send GET request to 'http://localhost:3000/meals' with defined config

  // Display loading message while fetching data
  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  // Display error message if fetching data fails
  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  // Render meals if data is successfully loaded
  return (
    <ul id="meals">
      {" "}
      {/* Unordered list containing meal items */}
      {/* Map through loaded meals and render MealItem component for each meal */}
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} /> // Pass meal data as props to MealItem component
      ))}
    </ul>
  );
}

/*
Explanation:

This code defines a functional component named Meals, which represents a list of meal items.
It imports necessary dependencies including MealItem, useHttp, and Error.
Inside the component, the useHttp custom hook is used to fetch meal data from the server.
The requestConfig object is currently empty, which means no additional configuration is provided for the HTTP request.
The component conditionally renders different content based on the state of the HTTP request:
If isLoading is true, it displays a loading message indicating that meals are being fetched.
If error exists, it displays an error message indicating that fetching meals has failed.
If data is successfully loaded (loadedMeals is not null), it renders a list of meal items using the MealItem component.
Inside the ul element, the loadedMeals array is mapped through, and for each meal, a MealItem component is rendered with the meal data passed as props.
This Meals component manages the fetching and rendering of meal data, providing a dynamic way to display meals in the application based on the data received from the server.
*/
