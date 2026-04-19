"use client";
import React from "react";
import Link from "next/link";

const aboutItems = [
  {
    icon: "/assets/images/icons/about-icon2-1.png",
    title: "Our Mission.",
    text: "To ensure every child receives nutritious food and a safe learning environment, empowering them to build a healthier and more educated future.",
  },
  {
    icon: "/assets/images/icons/about-icon2-2.png",
    title: "Our Vision",
    text: "To ensure every child receives nutritious food and a safe learning environment, empowering them to build a healthier and more educated future.",
  },
];

const AboutSection = () => {
  return (
    <section className="about-section-2 fix section-padding">
      <div className="shape-2">
        <img src="/assets/images/icons/about-shape2-2.png" alt="" />
      </div>
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-7 col-lg-6">
            <div className="about-image-items-2">
              <div className="row g-4">
                <div className="col-md-5 col-sm-5">
                  <div className="thumb-1 fix">
                    <img
                      className="wow img-custom-anim-left"
                      src="/assets/images/resource/about2-1.jpg"
                      alt=""/>
                  </div>
                </div>
                <div className="col-md-7 col-sm-7">
                  <div className="thumb-2 fix">
                    <img
                      className="wow img-custom-anim-right"
                      src="/assets/images/resource/about2-2.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="about-shape1 d-none d-xl-block">
                <img src="/assets/images/icons/about-shape2-1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="about-content-2">
              <div className="sec-title mb-0">
                <div className="sec-sub-title color-2">
                  <h6 className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                    About Us
                  </h6>
                </div>
                <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                  A Community United for Animal Welfare
                </h2>
              </div>
              <ul className="about-icon-items wow fadeInUp" data-wow-delay=".3s">
                {aboutItems.map((item, index) => (
                  <li key={index}>
                    <div className="icon">
                      <img src={item.icon} alt="" />
                    </div>
                    <div className="content">
                      <h4 className="title">{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                href="/page-about"
                className="theme-btn wow fadeInUp"
                data-wow-delay=".5s">
                <i className="fa-solid fa-heart"></i> Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;