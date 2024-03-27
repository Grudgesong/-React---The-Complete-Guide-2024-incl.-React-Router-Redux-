// Component for displaying a list of places
export default function Places({ title, places, fallbackText, onSelectPlace }) {
  return (
    <section className="places-category">
      {/* Render the title of the places category */}
      <h2>{title}</h2>

      {/* Render fallback text if there are no places */}
      {places.length === 0 && <p className="fallback-text">{fallbackText}</p>}

      {/* Render places if there are any */}
      {places.length > 0 && (
        <ul className="places">
          {/* Map through each place and render a list item */}
          {places.map((place) => (
            <li key={place.id} className="place-item">
              {/* Button to select a place, triggering onSelectPlace */}
              <button onClick={() => onSelectPlace(place.id)}>
                {/* Display the place's image and title */}
                <img src={place.image.src} alt={place.image.alt} />
                <h3>{place.title}</h3>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

/*
Explanation:

title: This prop is used to display the title of the places category.
places: An array containing the list of places to be displayed.
fallbackText: Text to be displayed if there are no places available.
onSelectPlace: Function to be called when a place is selected. It typically handles the logic for selecting a place.
Rendering Logic:
The component renders a section element with the class "places-category".
It renders the title of the category using the provided title prop.
If there are no places available (places array is empty), it renders the fallbackText.
If there are places available, it renders them as a list inside a ul element with the class "places".
For each place in the places array, it renders a list item (li) with the class "place-item".
Each place is represented by a button, clicking on which triggers the onSelectPlace function with the place's id as an argument.
Inside the button, the place's image and title are displayed.
Key Prop: Each list item (<li>) rendered within a loop is provided with a unique key prop, which is set to the place's id. This helps React efficiently update the list when items are added, removed, or reordered.
Event Handling: The onClick event of each button is set to call the onSelectPlace function with the id of the corresponding place when clicked.
*/
