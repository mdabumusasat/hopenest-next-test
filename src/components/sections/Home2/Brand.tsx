"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const brands = [
  "/assets/images/icons/brand2-1.png",
  "/assets/images/icons/brand2-2.png",
  "/assets/images/icons/brand2-3.png",
  "/assets/images/icons/brand2-4.png",
  "/assets/images/icons/brand2-5.png",
  "/assets/images/icons/brand2-6.png",
  "/assets/images/icons/brand2-2.png",
  "/assets/images/icons/brand2-3.png",
];

const BrandSection = () => {
  return (
    <section className="brand-section-2">
      <div className="container">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            576: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 5 },
            1200: { slidesPerView: 6 },
          }}
          className="brand-slider wow fadeInUp"
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="brand-box-2">
                <span className="brand-img-1">
                  <img src={brand} alt="brand" />
                </span>
                <span className="brand-img-1">
                  <img src={brand} alt="brand" />
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BrandSection;