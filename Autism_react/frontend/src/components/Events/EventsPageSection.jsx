import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { request } from "graphql-request";
import EventCard from "./EventCard";
import getOrganisationId from "../../api/getOrganisationId";
import getEventDetail from "../../api/getEventDetail";

const EventsPageSection = () => {
  const [organisationId, setOrganisationId] = useState(null);
  const [events, setEvents] = useState(null);

  // 异步函数获取组织 ID
  useEffect(() => {
    const fetchOrganisationId = async () => {
      try {
        const id = await getOrganisationId("36E55PWIMNCZFEZWHE4I");
        setOrganisationId(id); // 将解析后的组织 ID 存储起来
      } catch (error) {
        console.error("Error fetching organisation ID:", error);
      }
    };

    fetchOrganisationId();
  }, []);
  console.log("organisationId:", organisationId);

  useEffect(() => {
    if (organisationId) {
      // 只有在有了 organisationId 之后才执行
      const fetchEventDetail = async (organisationId, apiToken) => {
        try {
          const data = await getEventDetail(organisationId, apiToken);
          console.log("Organization data:", data);
          setEvents(data.events);
          console.log("event data:", events);
        } catch (error) {
          console.error("Error fetching event detail:", error);
        }
      };

      fetchEventDetail(organisationId, "36E55PWIMNCZFEZWHE4I");
    }
  }, [organisationId]);

  // if(!events){
  //   return <div>Loading...</div>
  // }

  return (
    <div className="bg-white py-24 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The Events
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Join our upcoming events and activities designed to support the
            autism community.
          </p>

          <Link to="/CreateBlog">
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Create
            </button>
          </Link>
          {events &&
            events.map((event, index) => {
              return <EventCard key={event.id} event={event} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default EventsPageSection;
