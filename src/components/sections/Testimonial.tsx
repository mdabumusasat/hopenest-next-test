"use client";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Cameron Williamson",
    role: "Senior Project",
    image: "/assets/images/resource/testi1-1.jpg",
    text: "Before joining this program, my child often missed school due to hunger. Now, she eats well, attends class regularly, and dreams of becoming a teacher",
  },
  {
    id: 2,
    name: "Cameron Williamson",
    role: "Senior Project",
    image: "/assets/images/resource/testi1-1.jpg",
    text: "Before joining this program, my child often missed school due to hunger. Now, she eats well, attends class regularly, and dreams of becoming a teacher",
  },
  {
    id: 3,
    name: "Cameron Williamson",
    role: "Senior Project",
    image: "/assets/images/resource/testi1-1.jpg",
    text: "Before joining this program, my child often missed school due to hunger. Now, she eats well, attends class regularly, and dreams of becoming a teacher",
  },
  {
    id: 4,
    name: "Cameron Williamson",
    role: "Senior Project",
    image: "/assets/images/resource/testi1-1.jpg",
    text: "Before joining this program, my child often missed school due to hunger. Now, she eats well, attends class regularly, and dreams of becoming a teacher",
  },
  {
    id: 5,
    name: "Cameron Williamson",
    role: "Senior Project",
    image: "/assets/images/resource/testi1-1.jpg",
    text: "Before joining this program, my child often missed school due to hunger. Now, she eats well, attends class regularly, and dreams of becoming a teacher",
  },
  {
    id: 6,
    name: "Cameron Williamson",
    role: "Senior Project",
    image: "/assets/images/resource/testi1-1.jpg",
    text: "Before joining this program, my child often missed school due to hunger. Now, she eats well, attends class regularly, and dreams of becoming a teacher",
  },
];

const TestimonialGrid = () => {
  return (
    <section className="testimonial-section-two pt-90 pb-120">
      <div className="auto-container">
        <div className="row">
          {testimonials.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <div className="testimonial-block-1">
                <div className="star">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>
                <p>{item.text}</p>
                <div className="client-info">
                  <div className="client-img">
                    <img
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div className="info-content">
                    <h5 className="name">{item.name}</h5>
                    <span>{item.role}</span>
                  </div>
                </div>
                <div className="quote-icon">
                  <img
                    src="/assets/images/icons/quote1-1.png"
                    alt="quote"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialGrid;