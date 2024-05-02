import { redirect } from "react-router-dom"; // Importing the redirect function from react-router-dom

// Function to calculate the remaining duration of the authentication token
export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem("expiration"); // Retrieving the expiration date of the token from local storage
  const expirationDate = new Date(storedExpirationDate); // Parsing the expiration date string to a Date object
  const now = new Date(); // Getting the current date and time
  const duration = expirationDate.getTime() - now.getTime(); // Calculating the duration in milliseconds until the token expires
  return duration; // Returning the duration in milliseconds
}

// Function to retrieve the authentication token from local storage
export function getAuthToken() {
  const token = localStorage.getItem("token"); // Retrieving the authentication token from local storage

  if (!token) {
    // If no token is found
    return null; // Return null to indicate no token is available
  }

  const tokenDuration = getTokenDuration(); // Calculating the remaining duration of the token

  if (tokenDuration < 0) {
    // If the token has expired
    return "EXPIRED"; // Return a special string 'EXPIRED' to indicate the token has expired
  }

  return token; // Return the authentication token
}

// Function to load the authentication token
export function tokenLoader() {
  const token = getAuthToken(); // Retrieving the authentication token
  return token; // Returning the authentication token
}

// Function to check authentication status and redirect if not authenticated
export function checkAuthLoader() {
  const token = getAuthToken(); // Retrieving the authentication token

  if (!token) {
    // If no token is found (user is not authenticated)
    return redirect("/auth"); // Redirecting the user to the authentication page
  }
}

/*
Explanation:

getTokenDuration: This function calculates the remaining duration (in milliseconds) until the authentication token expires. It retrieves the expiration date of the token from local storage, converts it to a Date object, and subtracts the current date and time from it to get the remaining duration.
getAuthToken: This function retrieves the authentication token from local storage. If no token is found, it returns null. If a token is found but it has expired (based on the remaining duration calculated by getTokenDuration), it returns the special string 'EXPIRED' to indicate that the token has expired.
tokenLoader: This function is a loader function used to load the authentication token. It simply calls getAuthToken to retrieve the token and returns it.
checkAuthLoader: This function is a loader function used to check the authentication status. If the user is not authenticated (no token or expired token), it redirects the user to the authentication page using the redirect function from react-router-dom. Otherwise, it does nothing, allowing the user to proceed.
*/
