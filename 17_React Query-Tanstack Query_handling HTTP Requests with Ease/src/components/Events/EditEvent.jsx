import {
  Link,
  redirect,
  useNavigate,
  useParams,
  useSubmit,
  useNavigation,
} from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { fetchEvent, updateEvent, queryClient } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  // Using react-router-dom hooks to access routing functionalities
  const navigate = useNavigate();
  const { state } = useNavigation();
  const submit = useSubmit();
  const params = useParams();

  // Fetching event data using react-query hook
  const { data, isError, error } = useQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
    staleTime: 10000,
  });

  // const { mutate } = useMutation({
  //   mutationFn: updateEvent,
  //   onMutate: async (data) => {
  //     const newEvent = data.event;

  //     await queryClient.cancelQueries({ queryKey: ['events', params.id] });
  //     const previousEvent = queryClient.getQueryData(['events', params.id]);

  //     queryClient.setQueryData(['events', params.id], newEvent);

  //     return { previousEvent };
  //   },
  //   onError: (error, data, context) => {
  //     queryClient.setQueryData(['events', params.id], context.previousEvent);
  //   },
  //   onSettled: () => {
  //     queryClient.invalidateQueries(['events', params.id]);
  //   },
  // });

  // Function to handle form submission
  function handleSubmit(formData) {
    submit(formData, { method: "PUT" });
  }

  // Function to handle closing the modal
  function handleClose() {
    navigate("../");
  }

  let content;

  // Display error message if data fetching fails
  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="Failed to load event"
          message={
            error.info?.message ||
            "Failed to load event. Please check your inputs and try again later."
          }
        />
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    );
  }

  // Display event form if data is available
  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        {state === "submitting" ? (
          <p>Sending data...</p>
        ) : (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Update
            </button>
          </>
        )}
      </EventForm>
    );
  }

  // Render a modal with the content
  return <Modal onClose={handleClose}>{content}</Modal>;
}

// Loader function for react-router-dom's server-side rendering
export function loader({ params }) {
  return queryClient.fetchQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });
}

// Action function for handling form submission on the server
export async function action({ request, params }) {
  const formData = await request.formData();
  const updatedEventData = Object.fromEntries(formData);
  await updateEvent({ id: params.id, event: updatedEventData });
  await queryClient.invalidateQueries(["events"]);
  return redirect("../");
}

/*
Explanation:

The component imports necessary dependencies from React, react-router-dom, and '@tanstack/react-query'.
It defines a functional component EditEvent responsible for editing an event. Inside this component:
It uses react-router-dom hooks (useNavigate, useParams, useNavigation) to handle routing and navigation.
It utilizes the useQuery hook from '@tanstack/react-query' to fetch event data.
There are functions to handle form submission (handleSubmit) and modal closure (handleClose).
It renders different content based on whether there's an error fetching data or if the data is available.
Finally, it returns a modal component wrapping the content.
There are two additional functions:
loader: This is a loader function for server-side rendering using react-router-dom. It fetches event data.
action: This function handles form submission on the server. It updates event data and invalidates event-related queries.
*/
