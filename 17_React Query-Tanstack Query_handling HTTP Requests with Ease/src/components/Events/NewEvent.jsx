import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { createNewEvent } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { queryClient } from "../../util/http.js";

export default function NewEvent() {
  // Hook to navigate programmatically
  const navigate = useNavigate();

  // Mutation hook to handle creating a new event
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewEvent,
    // Function to execute on successful mutation
    onSuccess: () => {
      // Invalidate the events query to trigger a refetch
      queryClient.invalidateQueries({ queryKey: ["events"] });
      // Navigate to the events page
      navigate("/events");
    },
  });

  // Function to handle form submission
  function handleSubmit(formData) {
    // Invoke the mutation with form data
    mutate({ event: formData });
  }

  return (
    <Modal onClose={() => navigate("../")}>
      {/* Event form component */}
      <EventForm onSubmit={handleSubmit}>
        {/* Display submission status */}
        {isPending && "Submitting..."}
        {!isPending && (
          <>
            {/* Cancel button */}
            <Link to="../" className="button-text">
              Cancel
            </Link>
            {/* Submit button */}
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
      </EventForm>
      {/* Error block displayed if mutation fails */}
      {isError && (
        <ErrorBlock
          title="Failed to create event"
          message={
            error.info?.message ||
            "Failed to create event. Please check your inputs and try again later."
          }
        />
      )}
    </Modal>
  );
}

/*
The component imports necessary dependencies from 'react-router-dom', '@tanstack/react-query', and other components like Modal, EventForm, and ErrorBlock.
It defines a component NewEvent responsible for creating a new event.
It uses the useNavigate hook from 'react-router-dom' to navigate programmatically.
It utilizes the useMutation hook from '@tanstack/react-query' to handle mutation operations, such as creating a new event.
Inside the useMutation hook, it defines a mutation function (mutationFn) to call the createNewEvent function, which sends a request to create a new event.
On successful mutation (onSuccess), it invalidates the events query to trigger a refetch and navigates to the events page.
It defines a handleSubmit function to handle form submission, which invokes the mutation with the form data.
It renders a modal component (Modal) containing the event form (EventForm) and an error block (ErrorBlock) if the mutation fails.
While the mutation is pending (isPending), it displays a "Submitting..." message.
If there is no pending mutation, it renders a cancel button (Link) and a submit button.
*/
