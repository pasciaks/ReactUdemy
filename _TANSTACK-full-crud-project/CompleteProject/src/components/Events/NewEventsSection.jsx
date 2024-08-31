import React, { useEffect, useState } from "react";

import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import EventItem from "./EventItem.jsx";
import { useQuery } from "@tanstack/react-query";
import { fetchEvents } from "../../util/http.js";

export default function NewEventsSection() {
  const { data, isPending, isError, error, refetch } = useQuery({
    queryFn: fetchEvents,
    queryKey: ["events"],
    config: {
      // retry: 3, // retry 3 times
      // retryDelay: 1000, // 1 second
      staleTime: 1000 * 60 * 5, // 5 minutes
      // gcTime: 1000 * 60 * 60, // garbage collection time
    },
  });
  // const [data, setData] = useState();
  // const [error, setError] = useState();
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  // async function fetchEvents() {
  //   setIsLoading(true);
  //   const response = await fetch("http://localhost:3000/events");
  //   if (!response.ok) {
  //     const error = new Error("An error occurred while fetching the events");
  //     error.code = response.status;
  //     error.info = await response.json();
  //     throw error;
  //   }
  //   const { events } = await response.json();
  //   return events;
  // }
  // fetchEvents()
  //   .then((events) => {
  //     setData(events);
  //   })
  //   .catch((error) => {
  //     setError(error);
  //   })
  //   .finally(() => {
  //     setIsLoading(false);
  //   });
  // }, []);

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="An error occurred"
        message={error?.info?.message || error.message || "Error"}
      />
    );
  }

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
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
