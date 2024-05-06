import { useQuery } from "@tanstack/react-query";

import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import EventItem from "./EventItem.jsx";
import { fetchEvents } from "../../util/http.js";

export default function NewEventsSection() {
  // Query to fetch recently added events
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", { max: 3 }], // Unique query key with additional query parameters
    queryFn: ({ signal, queryKey }) => fetchEvents({ signal, ...queryKey[1] }), // Function to fetch events
    staleTime: 5000, // Stale time for cache
    // gcTime: 1000 // Optional garbage collection time
  });

  let content;

  // Display loading indicator while fetching data
  if (isPending) {
    content = <LoadingIndicator />;
  }

  // Display error block if there is an error fetching data
  if (isError) {
    content = (
      <ErrorBlock
        title="An error occurred"
        message={error.info?.message || "Failed to fetch events."}
      />
    );
  }

  // Render event items if data is available
  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        {/* Section header */}
        <h2>Recently added events</h2>
      </header>
      {/* Render content based on query status */}
      {content}
    </section>
  );
}

/*
The component imports necessary dependencies from '@tanstack/react-query' and other components like LoadingIndicator, ErrorBlock, and EventItem.
It defines a component NewEventsSection responsible for displaying recently added events.
It uses the useQuery hook from '@tanstack/react-query' to fetch data.
The query key ['events', { max: 3 }] is used to uniquely identify the query and specify additional query parameters. In this case, it limits the number of returned events to 3.
The queryFn parameter specifies a function to fetch events, utilizing the fetchEvents function from the http.js utility file.
staleTime defines the stale time for cache, ensuring the data remains fresh for 5000 milliseconds.
Inside the component, it defines content to render based on the query status (loading, error, or data).
If data is available, it renders event items (EventItem) in a list (ul) using the data.map method.
The component renders a section with the class "content-section" and the id "new-events-section", containing a header with the title "Recently added events" and the content to display the event items.
*/
