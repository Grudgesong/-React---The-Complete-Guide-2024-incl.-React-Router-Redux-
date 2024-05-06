import { Link, Outlet } from "react-router-dom";

import Header from "../Header.jsx";
import EventsIntroSection from "./EventsIntroSection.jsx";
import FindEventSection from "./FindEventSection.jsx";
import NewEventsSection from "./NewEventsSection.jsx";

export default function Events() {
  return (
    <>
      {/* Outlet for rendering nested routes */}
      <Outlet />

      {/* Header component with a link to create a new event */}
      <Header>
        <Link to="/events/new" className="button">
          New Event
        </Link>
      </Header>

      {/* Main content section */}
      <main>
        {/* Section introducing events */}
        <EventsIntroSection />

        {/* Section displaying new events */}
        <NewEventsSection />

        {/* Section to find events */}
        <FindEventSection />
      </main>
    </>
  );
}

/*
The component imports necessary dependencies from 'react-router-dom' and other components like Header, EventsIntroSection, FindEventSection, and NewEventsSection.
The component serves as the parent component for the events page.
It uses the Outlet component from 'react-router-dom' to render nested routes. This allows child routes to be rendered within this component.
The Header component contains a link (Link from 'react-router-dom') that navigates to the "/events/new" route, allowing users to create a new event. The link is styled as a button.
The main section contains various sections related to events:
EventsIntroSection: A section introducing events.
NewEventsSection: A section displaying new events.
FindEventSection: A section to find events.
*/
