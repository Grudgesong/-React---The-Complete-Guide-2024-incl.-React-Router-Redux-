import { useCallback, useEffect, useState } from "react";

// Function to send HTTP request using fetch API
async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);

  // Parse response body as JSON
  const resData = await response.json();

  // If response is not successful, throw an error
  if (!response.ok) {
    throw new Error(
      resData.message || "Something went wrong, failed to send request."
    );
  }

  // Return response data
  return resData;
}

// Custom hook for making HTTP requests
export default function useHttp(url, config, initialData) {
  // State to manage response data, loading status, and error
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  // Function to clear data
  function clearData() {
    setData(initialData);
  }

  // Callback function to send HTTP request
  const sendRequest = useCallback(
    async function sendRequest(data) {
      // Set loading state to true
      setIsLoading(true);
      try {
        // Send HTTP request and update data on success
        const resData = await sendHttpRequest(url, { ...config, body: data });
        setData(resData);
      } catch (error) {
        // Set error state if request fails
        setError(error.message || "Something went wrong!");
      }
      // Set loading state to false after request completion
      setIsLoading(false);
    },
    [url, config]
  );

  // Effect to send request on component mount or when config changes
  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);

  // Return data, loading status, error, sendRequest function, and clearData function
  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData,
  };
}

/*
Explanation:

sendHttpRequest Function:
This function is responsible for sending HTTP requests using the Fetch API.
It takes a URL and configuration object as parameters.
It sends a request to the specified URL with the provided configuration.
If the response is not successful (status code other than 2xx), it throws an error with the message received from the server.
If the response is successful, it parses the response body as JSON and returns it.
useHttp Custom Hook:
This custom hook is designed to simplify making HTTP requests in React components.
It takes three parameters: the URL to which the request will be sent, the configuration object for the request, and the initial data for the response.
It uses the useState hook to manage the response data (data), loading status (isLoading), and error (error).
It defines a clearData function to reset the data to its initial value.
It defines a sendRequest function using useCallback to memoize the function and prevent unnecessary re-renders.
Inside sendRequest, it sets the loading state to true, sends the HTTP request using sendHttpRequest, and updates the data state on success or sets the error state on failure.
It uses the useEffect hook to automatically send the request when the component mounts or when the config parameter changes (for GET requests or when config.method is not specified).
Finally, it returns an object containing the response data, loading status, error, sendRequest function to trigger a request manually, and clearData function to reset the data.
*/
