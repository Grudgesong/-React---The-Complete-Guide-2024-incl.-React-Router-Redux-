import { useEffect, useState } from "react"; // Importing useEffect and useState hooks from React

// Custom hook for fetching data from an API
export function useFetch(fetchFn, initialValue) {
  // State variables to manage fetching status, fetched data, and errors
  const [isFetching, setIsFetching] = useState(); // Indicates if data is being fetched
  const [error, setError] = useState(); // Stores any error that occurs during fetching
  const [fetchedData, setFetchedData] = useState(initialValue); // Stores the fetched data, initialized with a default value

  // useEffect hook to perform the data fetching operation
  useEffect(() => {
    // Function to fetch data asynchronously
    async function fetchData() {
      setIsFetching(true); // Set isFetching to true to indicate that data fetching is in progress

      try {
        const data = await fetchFn(); // Fetch data using the provided fetch function
        setFetchedData(data); // Set the fetched data
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." }); // Set error state if an error occurs during fetching
      }

      setIsFetching(false); // Set isFetching to false after data fetching is completed or failed
    }

    fetchData(); // Call the fetchData function to initiate data fetching
  }, [fetchFn]); // useEffect runs whenever fetchFn changes

  // Return an object containing state variables and setter functions
  return {
    isFetching, // Indicates if data is being fetched
    fetchedData, // Stores the fetched data
    setFetchedData, // Setter function to update the fetched data
    error, // Stores any error that occurs during fetching
  };
}

/*
Explanation:

State Variables:

isFetching: Indicates whether data is currently being fetched.
error: Stores any error that occurs during data fetching.
fetchedData: Stores the fetched data from the API. It's initialized with a default value provided as initialValue.
Effect:

The useEffect hook is used to perform the data fetching operation when the component mounts or when the fetchFn dependency changes.
Inside the effect, the fetchData function is defined, which handles the asynchronous fetching of data.
Within the fetchData function:
isFetching is set to true to indicate that data fetching is in progress.
The provided fetchFn is called to fetch data asynchronously.
If the fetching is successful, the fetched data is stored in fetchedData.
If an error occurs during fetching, the error is stored in the error state.
isFetching is set to false after data fetching is completed or fails.
Return Value:

The hook returns an object containing:
isFetching: Indicates if data is being fetched.
fetchedData: The fetched data from the API.
setFetchedData: A setter function to update the fetched data.
error: Any error that occurs during fetching.
*/
