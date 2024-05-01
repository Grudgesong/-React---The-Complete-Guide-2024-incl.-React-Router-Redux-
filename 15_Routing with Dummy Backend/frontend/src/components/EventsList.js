// Importing necessary dependencies
// Note: The useLoaderData hook is commented out, as it's not being used in this component
// import { useLoaderData } from 'react-router-dom';
import { Link } from "react-router-dom";

// Importing CSS module styles
import classes from "./EventsList.module.css";

// Functional component to display a list of events
function EventsList({ events }) {
  // Extracting events data from props using destructuring
  // Note: This line is commented out as useLoaderData hook is not being used here
  // const events = useLoaderData();

  return (
    // Container for the list of events
    <div className={classes.events}>
      {/* Heading to indicate the purpose of the list */}
      <h1>All Events</h1>
      {/* Unordered list to display individual events */}
      <ul className={classes.list}>
        {/* Mapping through the events array to create list items */}
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            {/* Link to the individual event page */}
            <Link to={`/events/${event.id}`}>
              {/* Image and content of the event */}
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Exporting the component as the default export
export default EventsList;
