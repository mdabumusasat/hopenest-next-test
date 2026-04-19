"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    text: "Before joining this program, my child often missed school due to hunger. Now, she eats well, attends class regularly, and dreams of becoming a teacher",
    name: "Cameron Williamson",
    role: "Senior Project",
    image: "/assets/images/resource/testi1-1.jpg",
  },
  {
    id: 2,
    text: "Before joining this program, my child often missed school due to hunger. Now, she eats well, attends class regularly, and dreams of becoming a teacher",
    name: "Cameron Williamson",
    role: "Senior Project",
    image: "/assets/images/resource/testi1-1.jpg",
  },
  {
    id: 3,
    text: "Before joining this program, my child often missed school due to hunger. Now, she eats well, attends class regularly, and dreams of becoming a teacher",
    name: "Cameron Williamson",
    role: "Senior Project",
    image: "/assets/images/resource/testi1-1.jpg",
  },
  {
    id: 4,
    text: "Before joining this program, my child often missed school due to hunger. Now, she eats well, attends class regularly, and dreams of becoming a teacher",
    name: "Cameron Williamson",
    role: "Senior Project",
    image: "/assets/images/resource/testi1-1.jpg",
  },
  {
    id: 5,
    text: "Before joining this program, my child often missed school due to hunger. Now, she eats well, attends class regularly, and dreams of becoming a teacher",
    name: "Cameron Williamson",
    role: "Senior Project",
    image: "/assets/images/resource/testi1-1.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section fix section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="sec-title text-center">
              <div className="sec-sub-title">
                <h6 className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                  Testimonial
                </h6>
              </div>
              <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                Stories of Hope Shared by Families and Supporters
              </h2>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".array-prev",
            nextEl: ".array-next",
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="testimonial-slider wow fadeInUp">
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
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
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="array-button">
          <button className="array-prev">
            <img
              src="/assets/images/icons/arrow-1.svg"
              alt="prev"
            />
          </button>
          <button className="array-next">
            <img
              src="/assets/images/icons/arrow-2.svg"
              alt="next"
            />
          </button>
        </div>
        <div className="testi-text wow fadeInUp">
          <h5 className="testi-title">
            Your monthly <Link href="#">gift of $30</Link> helps provide
            nutritious meals and education to children in need.
          </h5>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;