import { QueryClient } from '@tanstack/react-query';

// Initialize a new instance of QueryClient to manage queries and caching.
export const queryClient = new QueryClient();

// Function to fetch events from the server.
export async function fetchEvents({ signal, searchTerm, max }) {
  // Construct the URL for fetching events based on search term and max.
  let url = 'http://localhost:3000/events';
  if (searchTerm && max) {
    url += `?search=${searchTerm}&max=${max}`;
  } else if (searchTerm) {
    url += `?search=${searchTerm}`;
  } else if (max) {
    url += `?max=${max}`;
  }

  // Fetch events data from the server.
  const response = await fetch(url, { signal });

  // Handle errors if response is not okay.
  if (!response.ok) {
    const error = new Error('An error occurred while fetching the events');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  // Parse the JSON response and return the events.
  const { events } = await response.json();
  return events;
}

// Function to create a new event on the server.
export async function createNewEvent(eventData) {
  // Make a POST request to create a new event.
  const response = await fetch(`http://localhost:3000/events`, {
    method: 'POST',
    body: JSON.stringify(eventData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Handle errors if response is not okay.
  if (!response.ok) {
    const error = new Error('An error occurred while creating the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  // Parse the JSON response and return the created event.
  const { event } = await response.json();
  return event;
}

// Function to fetch selectable images from the server.
export async function fetchSelectableImages({ signal }) {
  // Fetch selectable images data from the server.
  const response = await fetch(`http://localhost:3000/events/images`, { signal });

  // Handle errors if response is not okay.
  if (!response.ok) {
    const error = new Error('An error occurred while fetching the images');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  // Parse the JSON response and return the images.
  const { images } = await response.json();
  return images;
}

// Function to fetch a single event from the server by its ID.
export async function fetchEvent({ id, signal }) {
  // Fetch event data from the server.
  const response = await fetch(`http://localhost:3000/events/${id}`, { signal });

  // Handle errors if response is not okay.
  if (!response.ok) {
    const error = new Error('An error occurred while fetching the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  // Parse the JSON response and return the event.
  const { event } = await response.json();
  return event;
}

// Function to delete an event from the server by its ID.
export async function deleteEvent({ id }) {
  // Make a DELETE request to delete the event.
  const response = await fetch(`http://localhost:3000/events/${id}`, {
    method: 'DELETE',
  });

  // Handle errors if response is not okay.
  if (!response.ok) {
    const error = new Error('An error occurred while deleting the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  // Parse the JSON response and return the result.
  return response.json();
}

// Function to update an event on the server by its ID.
export async function updateEvent({ id, event }) {
  // Make a PUT request to update the event.
  const response = await fetch(`http://localhost:3000/events/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ event }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Handle errors if response is not okay.
  if (!response.ok) {
    const error = new Error('An error occurred while updating the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  // Parse the JSON response and return the result.
  return response.json();
}
