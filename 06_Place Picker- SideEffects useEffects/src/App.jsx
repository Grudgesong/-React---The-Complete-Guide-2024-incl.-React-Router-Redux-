import { useRef, useState, useEffect, useCallback } from "react";

import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import { sortPlacesByDistance } from "./loc.js";

// Retrieve selected places from localStorage or initialize an empty array if not present
const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
// Map stored place IDs to actual place objects from the available places data
const storedPlaces = storedIds.map((id) =>
  AVAILABLE_PLACES.find((place) => place.id === id)
);

function App() {
  // Ref to store the ID of the selected place for deletion
  const selectedPlace = useRef();
  // State to manage the visibility of the modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // State to store the available places sorted by distance
  const [availablePlaces, setAvailablePlaces] = useState([]);
  // State to manage the list of picked places
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);

  // Fetch available places and sort them by distance upon component mount
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      // Sort available places by distance from the user's current location
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );
      // Update the state with the sorted places
      setAvailablePlaces(sortedPlaces);
    });
  }, []);

  // Handler to initiate the removal of a selected place
  function handleStartRemovePlace(id) {
    setModalIsOpen(true); // Open the modal
    selectedPlace.current = id; // Store the ID of the selected place
  }

  // Handler to stop the removal of a place (close the modal)
  function handleStopRemovePlace() {
    setModalIsOpen(false); // Close the modal
  }

  // Handler to select a place (add to pickedPlaces)
  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      // Check if the place is already picked
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces; // If picked, return the current state
      }
      // If not picked, find the place by ID and add it to the list of picked places
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    // Update localStorage with the selected place's ID
    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem(
        "selectedPlaces",
        JSON.stringify([id, ...storedIds])
      );
    }
  }

  // Handler to remove a place from pickedPlaces and localStorage
  const handleRemovePlace = useCallback(function handleRemovePlace() {
    // Filter out the place with the selected ID from pickedPlaces
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    // Close the modal
    setModalIsOpen(false);

    // Remove the selected place's ID from localStorage
    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    localStorage.setItem(
      "selectedPlaces",
      JSON.stringify(storedIds.filter((id) => id !== selectedPlace.current))
    );
  }, []);

  return (
    <>
      {/* Modal for confirmation before deleting a place */}
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
      {/* Main content */}
      <main>
        {/* Places user wants to visit */}
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        {/* Available places sorted by distance */}
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText="Sorting places by distance..."
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;

/*
Explanation:

localStorage: It's used to persist the selected places across page reloads. The IDs of selected places are stored in localStorage.
useRef: It's used to store the ID of the place selected for deletion temporarily.
useEffect: It's used to fetch available places and sort them by distance upon component mount. The sorting is based on the user's current geolocation.
useState: It's used to manage various states like the visibility of the modal, available places, and picked places.
Callbacks: Callback functions are defined to handle actions like initiating and stopping place removal, selecting a place, and removing a place.
Modal: The modal component is used to display a confirmation dialog before deleting a place.
Header and Main Content: The header section displays the application logo, title, and a brief description. The main content section displays two instances of the Places component: one for picked places and another for available places.
*/
