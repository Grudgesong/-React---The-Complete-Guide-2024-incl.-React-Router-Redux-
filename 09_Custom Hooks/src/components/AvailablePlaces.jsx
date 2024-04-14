import Places from "./Places.jsx"; // Importing the Places component
import Error from "./Error.jsx"; // Importing the Error component
import { sortPlacesByDistance } from "../loc.js"; // Importing the sortPlacesByDistance function from loc.js
import { fetchAvailablePlaces } from "../http.js"; // Importing the fetchAvailablePlaces function from http.js
import { useFetch } from "../hooks/useFetch.js"; // Importing the useFetch custom hook

// Function to fetch and sort available places by distance from the user's location
async function fetchSortedPlaces() {
  // Fetching available places from the server
  const places = await fetchAvailablePlaces();

  // Returning a Promise to sort places by distance using the user's geolocation
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      // Sorting places by distance using the sortPlacesByDistance function
      const sortedPlaces = sortPlacesByDistance(
        places,
        position.coords.latitude,
        position.coords.longitude
      );

      // Resolving the Promise with the sorted places
      resolve(sortedPlaces);
    });
  });
}

// Component to display available places sorted by distance
export default function AvailablePlaces({ onSelectPlace }) {
  // Using the useFetch hook to fetch and manage the state of available places
  const {
    isFetching, // Indicates if data is being fetched
    error, // Error object if an error occurs during fetching
    fetchedData: availablePlaces, // Fetched data of available places
  } = useFetch(fetchSortedPlaces, []); // Passing fetchSortedPlaces function and an empty dependency array

  // If an error occurs during fetching, display the error message
  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  // If no error, render the Places component with available places
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching} // Indicates if data is still being fetched
      loadingText="Fetching place data..." // Loading text while fetching data
      fallbackText="No places available." // Text to display if no places are available
      onSelectPlace={onSelectPlace} // Callback function for selecting a place
    />
  );
}

/*
Explanation:

Imports: The code imports necessary modules and functions from other files. These include the Places and Error components, the sortPlacesByDistance function from loc.js, the fetchAvailablePlaces function from http.js, and the useFetch custom hook.

fetchSortedPlaces Function: This asynchronous function fetches available places from the server and sorts them by distance from the user's current location using the navigator.geolocation.getCurrentPosition method. It returns a Promise that resolves with the sorted places.

AvailablePlaces Component: This functional component uses the useFetch hook to fetch and manage the state of available places. It renders the Places component with the fetched available places. If an error occurs during fetching, it displays the Error component with the error message.

Rendering: Inside the AvailablePlaces component, the Places component is rendered with the following props:

title: Title for the section displaying available places.
places: List of available places.
isLoading: Boolean indicating if data is still being fetched.
loadingText: Text displayed while fetching data.
fallbackText: Text displayed if no places are available.
onSelectPlace: Callback function for selecting a place. */
