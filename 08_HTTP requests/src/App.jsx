import { useRef, useState, useCallback, useEffect } from "react";

import Places from "./components/Places.jsx";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import AvailablePlaces from "./components/AvailablePlaces.jsx";
import { fetchUserPlaces, updateUserPlaces } from "./http.js";
import Error from "./components/Error.jsx";

function App() {
  // Ref to store selected place for deletion
  const selectedPlace = useRef();

  // State for user places, fetching status, and errors
  const [userPlaces, setUserPlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState();

  // State for modal open/close
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Effect to fetch user places on initial mount
  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const places = await fetchUserPlaces();
        setUserPlaces(places);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch user places." });
      }
      setIsFetching(false);
    }
    fetchPlaces();
  }, []);

  // Handler to start removing a place
  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place; // Store the selected place for deletion
  }

  // Handler to cancel place removal
  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  // Handler to select a place
  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      // If previous picked places array is null or undefined, initialize it as an empty array
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      // If the selected place already exists in the user places array, return the array without any change
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      // Otherwise, add the selected place to the beginning of the array
      return [selectedPlace, ...prevPickedPlaces];
    });

    try {
      await updateUserPlaces([selectedPlace, ...userPlaces]); // Update user places on server
    } catch (error) {
      // If an error occurs during update, revert user places and set error state
      setUserPlaces(userPlaces);
      setErrorUpdatingPlaces({
        message: error.message || "Failed to update places.",
      });
    }
  }

  // Handler to remove a place
  const handleRemovePlace = useCallback(
    async function handleRemovePlace() {
      // Filter out the selected place from user places
      setUserPlaces((prevPickedPlaces) =>
        prevPickedPlaces.filter(
          (place) => place.id !== selectedPlace.current.id
        )
      );

      try {
        // Update user places on server by removing the selected place
        await updateUserPlaces(
          userPlaces.filter((place) => place.id !== selectedPlace.current.id)
        );
      } catch (error) {
        // If an error occurs during deletion, revert user places and set error state
        setUserPlaces(userPlaces);
        setErrorUpdatingPlaces({
          message: error.message || "Failed to delete place.",
        });
      }

      setModalIsOpen(false); // Close the modal after deletion
    },
    [userPlaces]
  );

  // Handler to clear error state
  function handleError() {
    setErrorUpdatingPlaces(null);
  }

  return (
    <>
      {/* Modal for displaying update/delete errors */}
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

      {/* Main section */}
      <main>
        {/* Display error message if fetching user places fails */}
        {error && <Error title="An error occurred!" message={error.message} />}

        {/* Render user places */}
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

        {/* Render available places for selection */}
        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;

/*
Explanation:

Imports: The component imports necessary modules and components from various files.

State and Refs:

selectedPlace: A useRef hook to store the currently selected place for deletion.
userPlaces: State to hold the user's places.
isFetching: State to track whether user places are being fetched.
error and errorUpdatingPlaces: States to hold errors.
modalIsOpen: State to control the modal for place deletion confirmation.
useEffect: This hook fetches user places on initial component mount. If successful, it updates userPlaces state; otherwise, it sets the error state.

Event Handlers:

handleStartRemovePlace: Opens the modal for deleting a place and stores the selected place.
handleStopRemovePlace: Closes the delete confirmation modal.
handleSelectPlace: Adds a selected place to the user's places. It also sends an update request to the server. If an error occurs, it reverts userPlaces and sets an error.
handleRemovePlace: Removes the selected place from the user's places and sends a delete request to the server. If an error occurs, it reverts userPlaces and sets an error.
Error Handling:

The handleError function clears the errorUpdatingPlaces state.
Render:

Modals: Two modal components are rendered conditionally based on errorUpdatingPlaces and modalIsOpen state.
Header: Displays the header section with a title, logo, and description.
Main:
Displays an error message if fetching user places fails.
Renders the user places using the Places component if there's no error. This component also handles loading states.
Renders available places for selection using the AvailablePlaces component.






*/
