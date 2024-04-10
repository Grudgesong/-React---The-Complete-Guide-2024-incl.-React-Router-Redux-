import { useState, useEffect } from "react";

import Places from "./Places.jsx"; // Importing Places component to display available places
import Error from "./Error.jsx"; // Importing Error component to display error messages
import { sortPlacesByDistance } from "../loc.js"; // Importing sortPlacesByDistance function from loc.js
import { fetchAvailablePlaces } from "../http.js"; // Importing fetchAvailablePlaces function from http.js

// Component for displaying available places
export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false); // State to track fetching status
  const [availablePlaces, setAvailablePlaces] = useState([]); // State to hold available places
  const [error, setError] = useState(); // State to hold error message if fetching fails

  // Effect to fetch available places and sort them by distance on component mount
  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true); // Set fetching status to true

      try {
        // Fetch available places from the server
        const places = await fetchAvailablePlaces();

        // Get user's current position using geolocation API
        navigator.geolocation.getCurrentPosition((position) => {
          // Sort places by distance from user's current location
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );
          // Update state with sorted available places and set fetching status to false
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        // If an error occurs during fetching, set error state and set fetching status to false
        setError({
          message:
            error.message || "Could not fetch places, please try again later.",
        });
        setIsFetching(false);
      }
    }

    fetchPlaces(); // Call the fetchPlaces function on component mount
  }, []);

  // Render error component if there's an error
  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  // Render the Places component with available places
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}

/*
Explanation:

useState:

isFetching: State variable to track the fetching status.
availablePlaces: State variable to hold the available places fetched from the server.
error: State variable to hold an error message if fetching fails.
useEffect:

This hook is used to perform side effects in the component, such as fetching data.
It runs once when the component mounts (due to the empty dependency array []).
Within the effect, fetchPlaces function is defined to fetch available places and sort them by distance.
Upon successful fetching, available places are sorted based on the user's current location obtained through the geolocation API.
If an error occurs during fetching, the error state is set.
Conditional Rendering:

If there's an error (error state is not null), the Error component is rendered with the error message.
Otherwise, the Places component is rendered with the sorted available places. Loading status and fallback text are provided as props to Places for better user experience during loading and when no places are available.
*/
