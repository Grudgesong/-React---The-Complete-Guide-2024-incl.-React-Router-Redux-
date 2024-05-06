import { Link } from "react-router-dom";

export default function EventItem({ event }) {
  // Format the event date
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  // Render the event item
  return (
    <article className="event-item">
      {/* Display the event image */}
      <img src={`http://localhost:3000/${event.image}`} alt={event.title} />

      {/* Event item content */}
      <div className="event-item-content">
        <div>
          {/* Display the event title */}
          <h2>{event.title}</h2>

          {/* Display the formatted date */}
          <p className="event-item-date">{formattedDate}</p>

          {/* Display the event location */}
          <p className="event-item-location">{event.location}</p>
        </div>

        {/* Link to view event details */}
        <p>
          <Link to={`/events/${event.id}`} className="button">
            View Details
          </Link>
        </p>
      </div>
    </article>
  );
}

/*
The component receives an event object as a prop.
It extracts the date from the event object and formats it using toLocaleDateString.
Inside the JSX, it renders an article element with the class "event-item".
It displays the event image using an img element, with the source constructed based on the event.image property.
The event title, formatted date, and location are displayed within a div with the class "event-item-content".
The event title is rendered as an h2 element.
The formatted date is rendered as a paragraph element with the class "event-item-date".
The event location is rendered as a paragraph element with the class "event-item-location".
Finally, it renders a Link component from react-router-dom to navigate to the event details page. The "to" prop of the Link is constructed dynamically based on the event.id property. The Link is styled as a button using the class "button".
*/
