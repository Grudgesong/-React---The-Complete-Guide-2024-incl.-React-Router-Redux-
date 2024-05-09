// Place component renders information about a specific place
export default function Place({ item }) {
  return (
    // Rendered as an article element with the "place" class
    <article className="place">
      {/* Display the image of the place */}
      <img src={item.image} alt={item.title} />
      <div>
        {/* Display the title of the place */}
        <h2>{item.title}</h2>
        {/* Display the description of the place */}
        <p>{item.description}</p>
      </div>
    </article>
  );
}

/*
Explanation:

The Place component is a functional component responsible for rendering information about a specific place.
It accepts a prop named item, which contains the details of the place to be displayed.
Inside the component:
The information about the place is rendered inside an <article> element with the class "place".
The image of the place is displayed using an <img> tag with the src attribute set to the item.image URL and the alt attribute set to the item.title.
The title of the place is displayed using an <h2> tag with the text obtained from item.title.
The description of the place is displayed using a <p> tag with the text obtained from item.description.
This component encapsulates the rendering logic for displaying details about a place and can be reused to display information about different places throughout the application.
*/
