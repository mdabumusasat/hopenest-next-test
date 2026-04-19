"use client";
import React from "react";
import Link from "next/link";

interface EventItem {
  id: number;
  day: string;
  month: string;
  title: string;
  desc: string;
  topic: string;
  time: string;
  thumb: string;
}

const events: EventItem[] = [
  {
    id: 1,
    day: "25",
    month: "Nov",
    title: "Back-to-School Support Event",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    topic: "Children’s Education & Learning Resources",
    time: "09.00pm - 10.00pm",
    thumb: "/assets/images/resource/event1-1.jpg",
  },
  {
    id: 2,
    day: "27",
    month: "Nov",
    title: "Community Learning Center",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    topic: "Children’s Education & Learning Resources",
    time: "09.00pm - 10.00pm",
    thumb: "/assets/images/resource/event1-2.jpg",
  },
  {
    id: 3,
    day: "29",
    month: "Nov",
    title: "Volunteer & Child Care Session",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    topic: "Children’s Education & Learning Resources",
    time: "09.00pm - 10.00pm",
    thumb: "/assets/images/resource/event1-3.jpg",
  },
];

const EventSection = () => {
  return (
    <section className="event-section tp-project-5-2-area fix section-padding pt-0">
      <div className="container">
        <div className="row g-4 justify-content-between align-items-center">
          <div className="col-lg-8">
            <div className="sec-title mb-0">
              <div className="sec-sub-title">
                <h6 className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                  Our Event
                </h6>
              </div>
              <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                Be Part of Our Upcoming Events
              </h2>
            </div>
          </div>
          <div className="col-lg-3 text-lg-end">
            <Link href="/page-events" className="theme-btn">
              <i className="fa-solid fa-heart"></i> View All Event
            </Link>
          </div>
        </div>
        <div className="des-portfolio-wrap">
          {events.map((event) => (
            <div key={event.id} className="event-block-items1 des-portfolio-panel">
              <div className="event-date-box">
                <div className="date-icon">
                  <img src="/assets/images/icons/calendar1-1.png" alt="calendar" />
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
                <p className="event-desc">{event.desc}</p>
                <div className="event-meta">
                  <p><span>Topic:</span> {event.topic}</p>
                  <p><span>Time:</span> {event.time}</p>
                </div>
                <Link href="/page-contact" className="theme-btn">
                  <i className="fas fa-heart"></i> Join Now
                </Link>
              </div>
              <div className="event-thumb">
                <img src={event.thumb} alt={event.title} />
                <img src={event.thumb} alt={event.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;