// This function fetches available places from the server.
export async function fetchAvailablePlaces() {
  // Send a GET request to the server to fetch available places
  const response = await fetch("http://localhost:3000/places");

  // Parse the response body as JSON
  const resData = await response.json();

  // If the response status is not OK (200), throw an error
  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }

  // Return the array of available places from the response data
  return resData.places;
}

// This function fetches user places from the server.
export async function fetchUserPlaces() {
  // Send a GET request to the server to fetch user places
  const response = await fetch("http://localhost:3000/user-places");

  // Parse the response body as JSON
  const resData = await response.json();

  // If the response status is not OK (200), throw an error
  if (!response.ok) {
    throw new Error("Failed to fetch user places");
  }

  // Return the array of user places from the response data
  return resData.places;
}

// This function updates user places on the server.
export async function updateUserPlaces(places) {
  // Send a PUT request to the server to update user places
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }), // Convert places array to JSON string
    headers: {
      "Content-Type": "application/json", // Set request content type to JSON
    },
  });

  // Parse the response body as JSON
  const resData = await response.json();

  // If the response status is not OK (200), throw an error
  if (!response.ok) {
    throw new Error("Failed to update user data.");
  }

  // Return a success message from the response data
  return resData.message;
}

/*
Explanation:

fetchAvailablePlaces:

Sends a GET request to fetch available places from the server.
Parses the response body as JSON.
Throws an error if the response status is not OK (200).
Returns the array of available places from the response data.
fetchUserPlaces:

Sends a GET request to fetch user places from the server.
Parses the response body as JSON.
Throws an error if the response status is not OK (200).
Returns the array of user places from the response data.
updateUserPlaces:

Sends a PUT request to update user places on the server.
Converts the places array to a JSON string and includes it in the request body.
Sets the request content type to JSON.
Parses the response body as JSON.
Throws an error if the response status is not OK (200).
Returns a success message from the response data.
*/
