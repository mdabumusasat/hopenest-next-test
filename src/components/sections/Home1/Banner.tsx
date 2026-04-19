"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const slides = [
  {
    bg: "/assets/images/banner/hero-bg-1-1.jpg",
  },
  {
    bg: "/assets/images/banner/hero-bg-1-2.jpg",
  },
  {
    bg: "/assets/images/banner/hero-bg-1-3.jpg",
  },
];

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Swiper className="banner-active">
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero-1">
              <div
                className="hero-bg bg-cover"
                style={{ backgroundImage: `url(${slide.bg})` }}/>
              <div className="circle-left">
                <img
                  src="/assets/images/banner/circle-left.png"
                  alt="shape"/>
              </div>
              <div className="object-shape">
                <img
                  src="/assets/images/banner/object-1-1.png"
                  alt="shape"/>
              </div>
              <div className="container">
                <div className="row g-4">
                  <div className="col-lg-8">
                    <div className="hero-content">
                      <h4 className="hero-sub wow fadeInUp">
                        Give a Helping Hand
                      </h4>
                      <h1 className="hero-title char-animation">
                        Help Children In Need Find Hope
                      </h1>
                      <p className="wow fadeInUp" data-wow-delay=".3s">
                        There are many variations of passages of lorem ipsum
                        avalab but the majority have suffered alteration in
                        some form, by injected humour, or randomised words
                        which don't.
                      </p>
                      <div className="hero-button wow fadeInUp" data-wow-delay=".5s">
                        <Link href="/page-causes" className="theme-btn">
                          <i className="fa-solid fa-heart"></i> Donate Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-image-items wow fadeInUp" data-wow-delay=".3s">
                <div className="thumb-1">
                  <img
                    src="/assets/images/banner/hero-image-1-1.jpg"
                    alt="hero"
                  />
                </div>
                <div className="thumb-2">
                  <img
                    src="/assets/images/banner/hero-image-1-2.jpg"
                    alt="hero"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;