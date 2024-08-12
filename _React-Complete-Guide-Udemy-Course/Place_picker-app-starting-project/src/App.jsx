import { useRef, useState, useCallback, useEffect } from "react";

import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import { sortPlacesByDistance } from "./loc.js";

let storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
let storedPlaces = storedIds.map((id) =>
  AVAILABLE_PLACES.find((place) => place.id === id)
);

function App() {
  // const modal = useRef();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  const [position, setPosition] = useState([]);

  // Runs after each Component Execution on state change
  useEffect(() => {
    // Promise-based Geolocation API
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition(position);
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );
      setAvailablePlaces(sortedPlaces);
    });
  }, []); // only runs once because empty dependency array

  function handleStartRemovePlace(id) {
    setModalIsOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    if (storedIds.includes(id)) {
      return;
    }
    localStorage.setItem("selectedPlaces", JSON.stringify([id, ...storedIds]));
  }

  const handleRemovePlace = useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );

    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    const updatedStoredIds = storedIds.filter(
      (id) => id !== selectedPlace.current
    );
    localStorage.setItem(
      "selectedPlaces",
      JSON.stringify([...updatedStoredIds])
    );

    setModalIsOpen(false);
  }, []); // <-- prop or state dependencies used in the function should be added to the dependency array
  // browser API's, setTimeout, setInterval, and event listeners do not need to be added to the dependency array

  return (
    <>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>{JSON.stringify(position, 0, 2)}</p>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText={"Sorting places by distance"}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
