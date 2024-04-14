// Function to fetch available places from the server
export async function fetchAvailablePlaces() {
  // Sending a GET request to fetch available places
  const response = await fetch("http://localhost:3000/places");

  // Parsing the JSON response
  const resData = await response.json();

  // If the response is not successful (status code other than 2xx),
  // throw an error with a message
  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }

  // Return the array of places from the response data
  return resData.places;
}

// Function to fetch user places from the server
export async function fetchUserPlaces() {
  // Sending a GET request to fetch user places
  const response = await fetch("http://localhost:3000/user-places");

  // Parsing the JSON response
  const resData = await response.json();

  // If the response is not successful (status code other than 2xx),
  // throw an error with a message
  if (!response.ok) {
    throw new Error("Failed to fetch user places");
  }

  // Return the array of user places from the response data
  return resData.places;
}

// Function to update user places on the server
export async function updateUserPlaces(places) {
  // Sending a PUT request to update user places
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT", // Using the PUT method to update user places
    body: JSON.stringify({ places }), // Converting places array to JSON string
    headers: {
      "Content-Type": "application/json", // Specifying the content type as JSON
    },
  });

  // Parsing the JSON response
  const resData = await response.json();

  // If the response is not successful (status code other than 2xx),
  // throw an error with a message
  if (!response.ok) {
    throw new Error("Failed to update user data.");
  }

  // Return a message indicating that user data was successfully updated
  return resData.message;
}

/*
Explanation:

fetchAvailablePlaces():

This function sends a GET request to fetch available places from the server at the specified URL (http://localhost:3000/places).
It then parses the JSON response and checks if the response is successful (status code 2xx). If not, it throws an error.
If the response is successful, it returns the array of places from the response data.
fetchUserPlaces():

Similar to fetchAvailablePlaces(), this function sends a GET request to fetch user places from the server at http://localhost:3000/user-places.
It parses the JSON response, checks for errors, and returns the array of user places if the response is successful.
updateUserPlaces(places):

This function sends a PUT request to update user places on the server.
It includes the places array in the request body as JSON data.
It parses the JSON response, checks for errors, and returns a success message if the update is successful. If not, it throws an error.
*/
