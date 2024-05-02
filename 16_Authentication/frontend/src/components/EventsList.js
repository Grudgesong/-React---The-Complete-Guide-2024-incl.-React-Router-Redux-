import React from "react";
// import { useLoaderData } from 'react-router-dom'; // Unused import
import { Link } from "react-router-dom"; // Importing necessary components from react-router-dom
import classes from "./EventsList.module.css"; // Importing CSS styles

function EventsList({ events }) {
  // const events = useLoaderData(); // Unused hook

  return (
    // Rendering the events list
    <div className={classes.events}>
      <h1>All Events</h1> {/* Displaying the title */}
      <ul className={classes.list}>
        {/* Mapping over the events array and rendering each event as a list item */}
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            <Link to={`/events/${event.id}`}>
              {/* Link to individual event page */}
              <img src={event.image} alt={event.title} />{" "}
              {/* Displaying event image */}
              <div className={classes.content}>
                {/* Displaying event title and date */}
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

export default EventsList; // Exporting the EventsList component as default

/*
Explanation:

The EventsList component is a React functional component responsible for rendering a list of events.
It imports necessary dependencies from react-router-dom, including the Link component for navigation.
It also imports CSS styles from an external file (EventsList.module.css).
Inside the component, it receives the events array as a prop.
It renders a <div> element with a class events to contain the list of events.
It displays the title "All Events" using an <h1> element.
It renders an <ul> element with a class list to contain the individual event items.
It maps over the events array using the map function and renders each event as a list item (<li>).
Each event is wrapped inside a Link component, linking to the individual event page (/events/${event.id}).
Each event item contains an image (<img>) representing the event, its title (<h2>), and date (<time>).
The key attribute is set to the event.id to ensure uniqueness for each event item.
CSS classes are applied to style the list and its items using CSS modules.
Finally, the EventsList component is exported as the default export.
*/
