// Component for displaying a list of places
export default function Places({
  title, // Title of the places category
  places, // Array of places to display
  fallbackText, // Text to display if no places are available
  onSelectPlace, // Callback function to handle selection of a place
  isLoading, // Boolean indicating whether data is still loading
  loadingText, // Text to display while data is loading
}) {
  console.log(places); // Log the list of places to the console for debugging

  return (
    <section className="places-category">
      <h2>{title}</h2>

      {/* Display loading text if data is still loading */}
      {isLoading && <p className="fallback-text">{loadingText}</p>}

      {/* Display fallback text if no places are available */}
      {!isLoading && places.length === 0 && (
        <p className="fallback-text">{fallbackText}</p>
      )}

      {/* Display list of places if not loading and places are available */}
      {!isLoading && places.length > 0 && (
        <ul className="places">
          {/* Map through the array of places and render each place as a list item */}
          {places.map((place) => (
            <li key={place.id} className="place-item">
              {/* Button to select a place, onClick calls onSelectPlace callback with the selected place */}
              <button onClick={() => onSelectPlace(place)}>
                {/* Display place image and title */}
                <img
                  src={`http://localhost:3000/${place.image.src}`}
                  alt={place.image.alt}
                />
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

Places Component:

This functional component represents a section containing a list of places.
It accepts several props to customize its behavior and appearance: title, places, fallbackText, onSelectPlace, isLoading, and loadingText.
Conditional Rendering:

The component conditionally renders different content based on the isLoading and places props.
If isLoading is true, it displays the loadingText.
If isLoading is false and places array is empty, it displays the fallbackText.
If isLoading is false and places array has items, it renders the list of places.
List Rendering:

The list of places is mapped through using the map function to generate a list of <li> elements.
Each place is rendered as a list item containing a button to select the place.
Clicking on the button triggers the onSelectPlace callback function with the selected place as an argument.
Logging:

The list of places is logged to the console using console.log for debugging purposes. This can help developers inspect the data passed to the component.
*/
