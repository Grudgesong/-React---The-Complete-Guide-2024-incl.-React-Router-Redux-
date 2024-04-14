// Component for displaying a list of places
export default function Places({
  title, // Title for the section displaying places
  places, // Array of places to display
  fallbackText, // Text to display if there are no places
  onSelectPlace, // Function to handle selection of a place
  isLoading, // Boolean indicating if data is still being fetched
  loadingText, // Text to display while data is being fetched
}) {
  // Logging the array of places to the console
  console.log(places);

  // Rendering the Places component
  return (
    <section className="places-category">
      {" "}
      {/* Container for the places */}
      <h2>{title}</h2> {/* Title for the section */}
      {/* Display loading text if data is still being fetched */}
      {isLoading && <p className="fallback-text">{loadingText}</p>}
      {/* Display fallback text if no places are available */}
      {!isLoading && places.length === 0 && (
        <p className="fallback-text">{fallbackText}</p>
      )}
      {/* Display places if not loading and places array is not empty */}
      {!isLoading && places.length > 0 && (
        <ul className="places">
          {" "}
          {/* List of places */}
          {/* Map through the array of places and render each place */}
          {places.map((place) => (
            <li key={place.id} className="place-item">
              {" "}
              {/* Place item */}
              {/* Button to select the place */}
              <button onClick={() => onSelectPlace(place)}>
                {/* Image of the place */}
                <img
                  src={`http://localhost:3000/${place.image.src}`} // Constructing the image URL
                  alt={place.image.alt} // Alternative text for the image
                />
                <h3>{place.title}</h3> {/* Title of the place */}
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

Props:

title: Title for the section displaying places.
places: Array of places to display.
fallbackText: Text to display if there are no places available.
onSelectPlace: Function to handle selection of a place.
isLoading: Boolean indicating if data is still being fetched.
loadingText: Text to display while data is being fetched.
Conditional Rendering:

If isLoading is true, a loading message (loadingText) is displayed.
If isLoading is false and places array is empty, a fallback message (fallbackText) is displayed.
If isLoading is false and places array is not empty, the list of places is displayed.
Mapping Through Places:

The places array is mapped using map() to render each place.
Each place is rendered as a list item (<li>) with a button inside.
Clicking the button triggers the onSelectPlace function with the selected place as an argument.
Image Rendering:

The image of each place is displayed using an <img> tag with the URL constructed based on the place.image.src property.
The alternative text for each image is specified using the place.image.alt property.
*/
