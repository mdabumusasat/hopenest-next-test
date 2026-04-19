"use client";
import React from "react";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <section
      className="hero-section-2 fix hero-2 bg-cover"
      style={{ backgroundImage: "url('/assets/images/banner/hero-bg-2-1.jpg')" }}>
      <div className="shape-1 wow fadeInUp">
        <img src="/assets/images/banner/shape2-1.png" alt="Shape" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-10">
            <div className="hero-content">
              <span className="hero-sub-text wow fadeInUp" data-wow-delay=".3s">
                Wildlife. Rescuing Lives
              </span>
              <h1 className="hero-title char-animation">
                Help Us Rescue & Protect Wildlife <br /> In Need
              </h1>
              <div className="content wow fadeInUp" data-wow-delay=".5s">
                <p>
                  There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by injected humour, or randomized words which don't
                </p>
                <Link href="/page-causes-details" className="theme-btn">
                  <i className="fa-solid fa-heart"></i> Donate Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;