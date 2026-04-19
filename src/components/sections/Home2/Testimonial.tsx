"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface Testimonial {
  id: number;
  title: string;
  text: string;
  clientName: string;
  clientRole: string;
  clientImg: string;
}
const testimonials: Testimonial[] = [
  {
    id: 1,
    title: "Every rescue is handled with care and compassion",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    clientName: "Cameron Williamson",
    clientRole: "Senior Project",
    clientImg: "/assets/images/resource/testi1-1.jpg",
  },
  {
    id: 2,
    title: "Every rescue is handled with care and compassion",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    clientName: "Cameron Williamson",
    clientRole: "Senior Project",
    clientImg: "/assets/images/resource/testi1-1.jpg",
  },
  {
    id: 3,
    title: "Every rescue is handled with care and compassion",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    clientName: "Cameron Williamson",
    clientRole: "Senior Project",
    clientImg: "/assets/images/resource/testi1-1.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section-2 fix section-bg">
      <div className="layer-shape">
        <img src="/assets/images/icons/layer-2-1.png" alt="layer" />
      </div>
      <div className="row align-items-center">
        <div className="col-xl-6 col-lg-6">
          <div className="testimonial-left-image-2 fix">
            <img data-speed=".8" src="/assets/images/resource/testimonial-2-1.jpg" alt="testimonial" />
          </div>
        </div>
        <div className="col-xl-5 col-lg-6">
          <div className="testimonial-content-2">
            <div className="sec-title mb-0">
              <div className="sec-sub-title color-2">
                <h6 className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">Testimonial</h6>
              </div>
              <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                What Our Community <br className="d-none d-xxl-block" /> Says About Our Work
              </h2>
            </div>
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".array-next",
                prevEl: ".array-prev",
              }}
              autoplay={{ delay: 5000 }}
              loop={true}
              className="testimonial-slider-2" >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="testimonial-content-items-2">
                    <h3 className="title">“{item.title}”</h3>
                    <p>{item.text}</p>
                    <div className="client-info">
                      <div className="client-img">
                        <img src={item.clientImg} alt={item.clientName} />
                      </div>
                      <div className="info-content">
                        <h5 className="name">{item.clientName}</h5>
                        <span>{item.clientRole}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="array-button">
              <button className="array-prev">
                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.3818 8.00008L3.38184 8.00008M0.0457001 8.01939C3.15775 7.82927 9.38184 9.16017 9.38184 16.0048M0.0457001 7.98545C3.15775 8.17558 9.38184 6.84467 9.38184 0" stroke="#FF7E1D" strokeWidth="1.5"/>
                </svg>
              </button>
              <button className="array-next">
                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 8.00008L15 8.00008M18.3361 8.01939C15.2241 7.82927 9 9.16017 9 16.0048M18.3361 7.98545C15.2241 8.17558 9 6.84467 9 0" stroke="#FF7E1D" strokeWidth="1.5"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;