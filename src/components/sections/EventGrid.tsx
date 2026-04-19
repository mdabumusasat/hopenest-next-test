"use client";
import React from "react";
import Link from "next/link";

const events = [
  {
    id: 1,
    day: "25",
    month: "Nov",
    title: "Back-to-School Support Event",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    topic: "Children’s Education & Learning Resources",
    time: "09.00pm - 10.00pm",
    image: "/assets/images/resource/event1-1.jpg",
  },
  {
    id: 2,
    day: "27",
    month: "Nov",
    title: "Community Learning Center",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    topic: "Children’s Education & Learning Resources",
    time: "09.00pm - 10.00pm",
    image: "/assets/images/resource/event1-2.jpg",
  },
  {
    id: 3,
    day: "29",
    month: "Nov",
    title: "Volunteer & Child Care Session",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    topic: "Children’s Education & Learning Resources",
    time: "09.00pm - 10.00pm",
    image: "/assets/images/resource/event1-3.jpg",
  },
];

const EventSection = () => {
  return (
    <section className="event-section tp-project-5-2-area fix section-padding pt-60 pb-90">
      <div className="container">
        <div className="des-portfolio-wrap">
          {events.map((event) => (
            <div key={event.id} className="event-block-items1 des-portfolio-panel">
              <div className="event-date-box">
                <div className="date-icon">
                  <img
                    src="/assets/images/icons/calendar1-1.png"
                    alt="calendar"
                  />
                </div>
                <div className="date-info">
                  <span className="day">{event.day}</span>
                  <span className="month">{event.month}</span>
                </div>
              </div>
              <div className="event-content">
                <h3 className="event-title">
                  <Link href="/page-event-details">{event.title}</Link>
                </h3>
                <p className="event-desc">{event.description}</p>
                <div className="event-meta">
                  <p>
                    <span>Topic:</span> {event.topic}
                  </p>
                  <p>
                    <span>Time:</span> {event.time}
                  </p>
                </div>
                <Link href="/page-event-details" className="theme-btn">
                  <i className="fas fa-heart"></i> Join Now
                </Link>
              </div>
              <div className="event-thumb">
                <img
                  src={event.image}
                  alt={event.title}
                />
                <img
                  src={event.image}
                  alt={event.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;