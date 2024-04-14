import { useRef, useState, useCallback } from "react"; // Importing necessary hooks from React
import Places from "./components/Places.jsx"; // Importing the Places component
import Modal from "./components/Modal.jsx"; // Importing the Modal component
import DeleteConfirmation from "./components/DeleteConfirmation.jsx"; // Importing the DeleteConfirmation component
import logoImg from "./assets/logo.png"; // Importing the logo image
import AvailablePlaces from "./components/AvailablePlaces.jsx"; // Importing the AvailablePlaces component
import { fetchUserPlaces, updateUserPlaces } from "./http.js"; // Importing functions for fetching and updating user places from an API
import Error from "./components/Error.jsx"; // Importing the Error component
import { useFetch } from "./hooks/useFetch.js"; // Importing a custom hook for fetching data

function App() {
  // useRef hook to hold a reference to the currently selected place
  const selectedPlace = useRef();

  // useState hook to manage the state of whether the modal is open or not
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // useState hook to manage the state of any error that occurs during updating places
  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState();

  // Custom hook useFetch to fetch user places from the server
  const {
    isFetching,
    error,
    fetchedData: userPlaces,
    setFetchedData: setUserPlaces,
  } = useFetch(fetchUserPlaces, []); // Passing the fetchUserPlaces function and an empty dependency array

  // Function to handle starting the removal process of a place
  function handleStartRemovePlace(place) {
    setModalIsOpen(true); // Opening the modal
    selectedPlace.current = place; // Setting the selected place
  }

  // Function to handle stopping the removal process of a place
  function handleStopRemovePlace() {
    setModalIsOpen(false); // Closing the modal
  }

  // Function to handle selecting a place
  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try {
      await updateUserPlaces([selectedPlace, ...userPlaces]); // Updating the user places
    } catch (error) {
      setUserPlaces(userPlaces); // Reverting back to the previous state
      setErrorUpdatingPlaces({
        message: error.message || "Failed to update places.",
      });
    }
  }

  // Callback function to handle removing a place
  const handleRemovePlace = useCallback(
    async function handleRemovePlace() {
      setUserPlaces((prevPickedPlaces) =>
        prevPickedPlaces.filter(
          (place) => place.id !== selectedPlace.current.id
        )
      );

      try {
        await updateUserPlaces(
          userPlaces.filter((place) => place.id !== selectedPlace.current.id)
        ); // Updating the user places
      } catch (error) {
        setUserPlaces(userPlaces); // Reverting back to the previous state
        setErrorUpdatingPlaces({
          message: error.message || "Failed to delete place.",
        });
      }

      setModalIsOpen(false); // Closing the modal
    },
    [userPlaces, setUserPlaces]
  );

  // Function to handle clearing errors
  function handleError() {
    setErrorUpdatingPlaces(null);
  }

  return (
    <>
      {/* Modal for displaying error messages */}
      <Modal open={errorUpdatingPlaces} onClose={handleError}>
        {errorUpdatingPlaces && (
          <Error
            title="An error occurred!"
            message={errorUpdatingPlaces.message}
            onConfirm={handleError}
          />
        )}
      </Modal>

      {/* Modal for confirming place deletion */}
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      {/* Header section */}
      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>

      {/* Main content section */}
      <main>
        {/* Displaying error message if any */}
        {error && <Error title="An error occurred!" message={error.message} />}

        {/* Displaying user-selected places */}
        {!error && (
          <Places
            title="I'd like to visit ..."
            fallbackText="Select the places you would like to visit below."
            isLoading={isFetching}
            loadingText="Fetching your places..."
            places={userPlaces}
            onSelectPlace={handleStartRemovePlace}
          />
        )}

        {/* Displaying available places for selection */}
        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;

/*
Imports: The code imports necessary modules and components from various files. These include React hooks (useRef, useState, useCallback), components (Places, Modal, DeleteConfirmation, Error), images (logoImg), and functions (fetchUserPlaces, updateUserPlaces) for fetching and updating user places.

Functional Component App(): This is the main component of the application. It manages the state and functionality of the entire app.

State Management:

selectedPlace: This variable holds a reference to the currently selected place using the useRef hook.
modalIsOpen: Manages the state of whether the modal for deleting a place is open or closed.
errorUpdatingPlaces: Manages any error that occurs during the process of updating or deleting a place.
Data Fetching:

The useFetch custom hook is used to fetch user places from the server. It returns data about whether fetching is in progress (isFetching), any error that occurs (error), and the fetched data (userPlaces). This hook is used to fetch user places when the component mounts.
Event Handlers:

handleStartRemovePlace(): Opens the modal for confirming the deletion of a place and sets the selected place.
handleStopRemovePlace(): Closes the deletion confirmation modal.
handleSelectPlace(): Handles the selection of a place by adding it to the user's collection and updating it on the server.
handleRemovePlace(): Handles the removal of a place by removing it from the user's collection and updating it on the server.
Error Handling:

The handleError() function clears any error that occurs during the update or deletion process.
Rendering:

The App component renders:
Error modals for displaying error messages (Modal and Error components).
Modals for confirming place deletion (Modal and DeleteConfirmation components).
Header section with a logo and title.
Main content section:
Displays an error message if any error occurs during data fetching.
Displays user-selected places using the Places component.
Displays available places for selection using the AvailablePlaces component.
*/
