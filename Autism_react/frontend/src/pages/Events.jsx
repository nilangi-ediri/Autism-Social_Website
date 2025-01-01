import React from "react";
import NavBar from "../components/NavBar";
import EventsPageSection from "../components/Events/EventsPageSection";
import WhiteFooter from "../components/WhiteFooter";

function Events() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-between h-dvh">
        <EventsPageSection />
        <WhiteFooter />
      </div>
    </>
  );
}

export default Events;
