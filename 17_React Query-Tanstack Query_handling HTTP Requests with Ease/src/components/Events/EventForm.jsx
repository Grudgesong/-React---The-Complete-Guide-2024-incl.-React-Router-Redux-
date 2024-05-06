import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import ImagePicker from "../ImagePicker.jsx";
import { fetchSelectableImages } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EventForm({ inputData, onSubmit, children }) {
  // State to manage the selected image
  const [selectedImage, setSelectedImage] = useState(inputData?.image);

  // Query to fetch selectable images
  const { data, isPending, isError } = useQuery({
    queryKey: ["events-images"],
    queryFn: fetchSelectableImages,
  });

  // Function to handle image selection
  function handleSelectImage(image) {
    setSelectedImage(image);
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    // Extract form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // Call the onSubmit function with form data and selected image
    onSubmit({ ...data, image: selectedImage });
  }

  return (
    <form id="event-form" onSubmit={handleSubmit}>
      {/* Input field for event title */}
      <p className="control">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={inputData?.title ?? ""}
        />
      </p>

      {/* Display loading message while fetching selectable images */}
      {isPending && <p>Loading selectable images...</p>}

      {/* Display error message if fetching selectable images fails */}
      {isError && (
        <ErrorBlock
          title="Failed to load selectable images"
          message="Please try again later."
        />
      )}

      {/* Display image picker component if data is available */}
      {data && (
        <div className="control">
          <ImagePicker
            images={data}
            onSelect={handleSelectImage}
            selectedImage={selectedImage}
          />
        </div>
      )}

      {/* Textarea for event description */}
      <p className="control">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          defaultValue={inputData?.description ?? ""}
        />
      </p>

      {/* Date and time input fields */}
      <div className="controls-row">
        <p className="control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            defaultValue={inputData?.date ?? ""}
          />
        </p>

        <p className="control">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            defaultValue={inputData?.time ?? ""}
          />
        </p>
      </div>

      {/* Input field for event location */}
      <p className="control">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          defaultValue={inputData?.location ?? ""}
        />
      </p>

      {/* Render children components (e.g., buttons) */}
      <p className="form-actions">{children}</p>
    </form>
  );
}

/*
The component defines a form for editing event details, including title, description, date, time, location, and image.
It manages the state of the selected image using useState.
It uses the useQuery hook to fetch selectable images asynchronously.
There are functions to handle image selection (handleSelectImage) and form submission (handleSubmit).
It renders input fields for event details, including title, description, date, time, and location.
It renders an image picker component (ImagePicker) if selectable images data is available.
It renders loading indicators or error messages based on the status of fetching selectable images.
The component is designed to be reusable and accepts inputData (initial event data), onSubmit (submission handler), and children (additional components like buttons) as props.
*/
