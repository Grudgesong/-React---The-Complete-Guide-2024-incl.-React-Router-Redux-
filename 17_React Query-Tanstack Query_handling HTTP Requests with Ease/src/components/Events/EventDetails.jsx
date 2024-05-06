import { useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";

import Header from "../Header.jsx";
import { fetchEvent, deleteEvent, queryClient } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import Modal from "../UI/Modal.jsx";

export default function EventDetails() {
  // State to manage the deletion confirmation modal
  const [isDeleting, setIsDeleting] = useState(false);

  // Hooks to access routing functionalities and URL parameters
  const params = useParams();
  const navigate = useNavigate();

  // Query to fetch event data
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });

  // Mutation hook to delete an event
  const {
    mutate,
    isPending: isPendingDeletion,
    isError: isErrorDeleting,
    error: deleteError,
  } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      // Invalidate events query and navigate to events page on successful deletion
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      });
      navigate("/events");
    },
  });

  // Function to show deletion confirmation modal
  function handleStartDelete() {
    setIsDeleting(true);
  }

  // Function to hide deletion confirmation modal
  function handleStopDelete() {
    setIsDeleting(false);
  }

  // Function to handle event deletion
  function handleDelete() {
    mutate({ id: params.id });
  }

  let content;

  // Display loading message while fetching event data
  if (isPending) {
    content = (
      <div id="event-details-content" className="center">
        <p>Fetching event data...</p>
      </div>
    );
  }

  // Display error message if fetching event data fails
  if (isError) {
    content = (
      <div id="event-details-content" className="center">
        <ErrorBlock
          title="Failed to load event"
          message={
            error.info?.message ||
            "Failed to fetch event data, please try again later."
          }
        />
      </div>
    );
  }

  // Display event details if data is available
  if (data) {
    // Format event date
    const formattedDate = new Date(data.date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    // Render event details
    content = (
      <>
        <header>
          <h1>{data.title}</h1>
          <nav>
            {/* Button to start deletion */}
            <button onClick={handleStartDelete}>Delete</button>
            {/* Link to edit event */}
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
          <div id="event-details-info">
            <div>
              {/* Display event location and date/time */}
              <p id="event-details-location">{data.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>
                {formattedDate} @ {data.time}
              </time>
            </div>
            {/* Display event description */}
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
      </>
    );
  }

  // Render the component
  return (
    <>
      {/* Modal for confirming event deletion */}
      {isDeleting && (
        <Modal onClose={handleStopDelete}>
          <h2>Are you sure?</h2>
          <p>
            Do you really want to delete this event? This action cannot be
            undone.
          </p>
          <div className="form-actions">
            {isPendingDeletion && <p>Deleting, please wait...</p>}
            {!isPendingDeletion && (
              <>
                {/* Button to cancel deletion */}
                <button onClick={handleStopDelete} className="button-text">
                  Cancel
                </button>
                {/* Button to confirm deletion */}
                <button onClick={handleDelete} className="button">
                  Delete
                </button>
              </>
            )}
          </div>
          {/* Error message if deletion fails */}
          {isErrorDeleting && (
            <ErrorBlock
              title="Failed to delete event"
              message={
                deleteError.info?.message ||
                "Failed to delete event, please try again later."
              }
            />
          )}
        </Modal>
      )}
      {/* Outlet for nested routes */}
      <Outlet />
      {/* Header with link to view all events */}
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {/* Render event details */}
      <article id="event-details">{content}</article>
    </>
  );
}

/*
The component manages the state for the deletion confirmation modal using useState.
It utilizes various hooks from 'react-router-dom' and '@tanstack/react-query' to handle routing, URL parameters, data fetching, and mutations.
It fetches event data using useQuery and deletes events using useMutation.
Depending on the state (isPending, isError, data), different content is rendered, including loading indicators, error messages, and event details.
It renders a modal for confirming event deletion, with options to cancel or confirm the deletion.
It includes an outlet for rendering nested routes.
The header contains a link to navigate back to the events page.
Overall, the component provides a detailed view of an event, allowing users to delete the event with confirmation and navigate to edit the event.
*/
