import { Link } from "react-router-dom";

import meetupImg from "../../assets/meetup.jpg";

export default function EventsIntroSection() {
  return (
    <section
      className="content-section"
      id="overview-section"
      style={{ backgroundImage: `url(${meetupImg})` }}
    >
      {/* Title and description */}
      <h2>
        Connect with amazing people <br />
        or <strong>find a new passion</strong>
      </h2>
      <p>Anyone can organize and join events on React Event!</p>

      {/* Link to create a new event */}
      <p>
        <Link to="/events/new" className="button">
          Create your first event
        </Link>
      </p>
    </section>
  );
}

/*
The component imports necessary dependencies from 'react-router-dom'.
It imports an image (meetupImg) from the assets directory.
The component serves as an introductory section for events.
It renders a section element with the class "content-section" and the id "overview-section".
The section's background image is set dynamically using inline styles, with the image imported earlier.
Inside the section:
There's a title (h2) with a line break (<br />) and a strong element for emphasis.
A description (p) about organizing and joining events on React Event.
A Link component (Link from 'react-router-dom') styled as a button. This link navigates to the "/events/new" route, inviting users to create their first event.
*/
