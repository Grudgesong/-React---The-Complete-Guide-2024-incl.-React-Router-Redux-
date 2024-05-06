import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchEvents } from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import EventItem from "./EventItem.jsx";

export default function FindEventSection() {
  // Reference to the search input element
  const searchElement = useRef();
  // State to store the search term
  const [searchTerm, setSearchTerm] = useState();

  // Query to fetch events based on the search term
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["events", { searchTerm: searchTerm }],
    queryFn: ({ signal, queryKey }) => fetchEvents({ signal, ...queryKey[1] }),
    // Enable the query only when a search term is provided
    enabled: searchTerm !== undefined,
  });

  // Function to handle form submission and update search term
  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(searchElement.current.value);
  }

  // Define content based on query status
  let content = <p>Please enter a search term to find events.</p>;

  if (isLoading) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="An error occurred"
        message={error.info?.message || "Failed to fetch events."}
      />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {/* Render event items based on fetched data */}
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="all-events-section">
      <header>
        {/* Section header */}
        <h2>Find your next event!</h2>
        {/* Search form */}
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      {/* Render content based on query status */}
      {content}
    </section>
  );
}

/*
The component imports necessary dependencies from 'react' and '@tanstack/react-query', as well as components like LoadingIndicator, ErrorBlock, and EventItem.
It defines a section (content-section) to allow users to find events.
It utilizes a reference (searchElement) to the search input element to access its value.
It uses state (searchTerm) to store the search term entered by the user.
It fetches events based on the search term using the useQuery hook. The query is enabled only when a search term is provided.
It defines content to be displayed based on the query status: loading indicator, error message, or event items.
It renders the section header with a title and a search form.
It renders the content based on the query status. If data is available, it renders a list of event items using the EventItem component.
*/
