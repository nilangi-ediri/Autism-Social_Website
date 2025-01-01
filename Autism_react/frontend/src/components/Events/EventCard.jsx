import React, { useEffect, useState } from "react";
import EventImg from "./EventImg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import formatDate from "../../api/formatDate";
import getEventAddress from "../../api/getEventAddress";

function EventCard(event) {
  const [eventAddress, setEventAddress] = useState(null);

  useEffect(() => {
    const fetchEventAddress = async () => {
      try {
        if (event.event.online_event) return;
        const eventAddress = await getEventAddress(
          event.event.venue_id,
          "36E55PWIMNCZFEZWHE4I",
        );
        setEventAddress(eventAddress); // 将解析后的组织 ID 存储起来
      } catch (error) {
        console.error("Error fetching organisation ID:", error);
      }
    };

    fetchEventAddress();
  }, []);

  console.log("eventAddress:", eventAddress);
  if (eventAddress) {
    console.log("eventAddress:", eventAddress.address.address_1);
  }

  return (
    <div className="flex w-auto h-44 bg-slate-300 rounded-xl shadow-xl mt-5 mb-10 hover:bg-slate-400 hover:-translate-x-2 hover:-translate-y-2 cursor-pointer transition duration-300">
      <div className="flex-shrink-0 w-1/3  h-full p-5">
        <EventImg url={event.event.logo.url} />
      </div>

      <div className="flex-grow h-full p-5">
        <p className="text-md text-eventCardDate">
          {formatDate(event.event.start.local)}
        </p>
        <h1 className="text-2xl font-bold pt-0.5">{event.event.name.html}</h1>
        <h2 className="flex pt-12">
          <FontAwesomeIcon className="" icon={faLocationDot} />

          <p className="text-sm font-bold pl-2.5">
            {event.event.online_event
              ? "Online"
              : eventAddress
                ? eventAddress.address.address_1
                : "Loading..."}
          </p>
        </h2>
      </div>
    </div>
  );
}

export default EventCard;
