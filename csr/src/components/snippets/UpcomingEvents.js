import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Card from "../layouts/Card";
import axios from "axios";
import { Link } from "react-router-dom";

const UpcomingEvents = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/events/api/v1/").then((res) => {
      setUpcomingEvents(res.data.slice(0, 3));
    });
  }, []);

  return (
    <div>
      <div>
        <div id="fh5co-services" className="fh5co-bg-section border-bottom">
          <div className="container">
            <div className="row row-pb-md">
              <div className="col-md-8 col-md-offset-2 text-left">
                <div className="fh5co-heading">
                  <ScrollAnimation animateIn="fadeIn">
                    <h2>Upcoming Events</h2>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
            <ScrollAnimation animateIn="fadeIn">
              <div className="row">
                {/* Row1 */}

                {upcomingEvents.map((event) => (
                  <Link to={`/events/${event.slug}`} key={event.slug}>
                    <Card
                      key={event.id}
                      name={event.title}
                      image={event.image}
                      company={event.company}
                      date={event.dateOfEvent}
                    />
                  </Link>
                ))}
              </div>
            </ScrollAnimation>
          </div>
          <hr />
          <span id="showEvents">
            <Link to="/events">Show more events</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
