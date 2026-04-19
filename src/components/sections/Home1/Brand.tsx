"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const brands = [
    { img: "/assets/images/icons/brand1-1.png", hover: "/assets/images/icons/brand1-1-hover.png" },
    { img: "/assets/images/icons/brand1-2.png", hover: "/assets/images/icons/brand1-2-hover.png" },
    { img: "/assets/images/icons/brand1-3.png", hover: "/assets/images/icons/brand1-3-hover.png" },
    { img: "/assets/images/icons/brand1-4.png", hover: "/assets/images/icons/brand1-4-hover.png" },
    { img: "/assets/images/icons/brand1-5.png", hover: "/assets/images/icons/brand1-5-hover.png" },
    { img: "/assets/images/icons/brand1-6.png", hover: "/assets/images/icons/brand1-6-hover.png" },
    { img: "/assets/images/icons/brand1-2.png", hover: "/assets/images/icons/brand1-2-hover.png" },
    { img: "/assets/images/icons/brand1-3.png", hover: "/assets/images/icons/brand1-3-hover.png" },
];

const BrandSection = () => {
  return (
    <div className="brand-section wow fadeInUp" data-wow-delay=".3s">
      <Swiper
        className="brand-slider"
        loop={true}
        spaceBetween={30}
        slidesPerView={6}
        breakpoints={{
          0: { slidesPerView: 2 },
          576: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          992: { slidesPerView: 5 },
          1200: { slidesPerView: 6 },
        }}>
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="brand-box-1">
              <span className="brand-img-1">
                <img src={brand.img} alt="brand" />
              </span>
              <span className="brand-img-1">
                <img src={brand.hover} alt="brand hover" />
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandSection;