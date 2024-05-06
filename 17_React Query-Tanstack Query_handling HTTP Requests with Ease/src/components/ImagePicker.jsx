// This component represents an image picker used to select images from a list.
// It displays a list of images and allows the user to select one.
// The selected image is highlighted visually.
export default function ImagePicker({ images, selectedImage, onSelect }) {
  return (
    <div id="image-picker">
      {/* Instruction for the user */}
      <p>Select an image</p>
      {/* List of images */}
      <ul>
        {/* Mapping over each image to render them */}
        {images.map((image) => (
          <li
            key={image.path} // Using the image path as the unique key
            onClick={() => onSelect(image.path)} // Handling click to select image
            className={selectedImage === image.path ? "selected" : undefined} // Adding 'selected' class if image is selected
          >
            {/* Displaying the image */}
            <img
              src={`http://localhost:3000/${image.path}`} // Constructing the image URL
              alt={image.caption} // Providing alt text for accessibility
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

/*
The component is described, explaining its purpose and functionality.
An instruction is provided to guide the user on how to interact with the component.
The list of images is rendered inside an unordered list (<ul>).
Each image in the images array is mapped over to render them as list items (<li>).
For each image:
The key attribute is set to the image's path to ensure uniqueness.
An onClick event handler is set to call the onSelect function with the image's path when clicked.
The className is conditionally set to 'selected' if the current image is the selected one.
An <img> tag is used to display the image, with its src attribute constructed using the image's path and a base URL.
The alt attribute is set to the image's caption for accessibility.
*/
