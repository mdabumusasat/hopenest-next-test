"use client";
import  React, { useState } from "react";
import Link from "next/link";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("mission");
  return (
    <section className="about-section section-padding fix section-bg">
      <div className="object-shape float-bob-y d-none d-xxl-block">
        <img src="/assets/images/icons/object1-1.png" alt="shape" />
      </div>
      <div className="layer-shape1 float-bob-x d-none d-xxl-block">
        <img src="/assets/images/icons/layer1-1.png" alt="shape" />
      </div>
      <div className="layer-shape2 float-bob-y d-none d-xxl-block">
        <img src="/assets/images/icons/layer1-2.png" alt="shape" />
      </div>
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-6 col-lg-8">
            <div className="about-left-thumb-items">
              <div className="row">
                <div
                  className="col-lg-4 col-md-4 col-sm-5 col-5 wow fadeInUp"
                  data-wow-delay=".3s">
                  <div className="uni-icon">
                    <img
                      src="/assets/images/resource/about-1-uni-icon.png"
                      alt="icon"/>
                  </div>
                  <div className="thumb-1">
                    <img
                      src="/assets/images/resource/about-1-1.jpg"
                      alt="about"/>
                  </div>
                </div>
                <div
                  className="col-lg-8 col-md-8 col-sm-7 col-7 wow fadeInUp"
                  data-wow-delay=".5s">
                  <div className="thumb-2">
                    <img
                      src="/assets/images/resource/about-1-2.jpg"
                      alt="about"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-8 wow fadeInUp"
            data-wow-delay=".3s">
            <div className="about-right-content">
              <div className="sec-title mb-0">
                <div className="sec-sub-title">
                  <h6 className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                    Who We Are
                  </h6>
                </div>
                <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                  A Charity Dedicated to Education, Nutrition, and Childhood
                  Dignity
                </h2>
              </div>
              <ul className="nav">
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === "mission" ? "active" : ""}`}
                    onClick={() => setActiveTab("mission")}>
                    Our Mission.
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === "vision" ? "active" : ""}`}
                    onClick={() => setActiveTab("vision")}>
                    Our Vision.
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                {activeTab === "mission" && (
                  <div className="tab-pane fade show active">
                    <p className="about-text">
                      To ensure every child receives nutritious food and a safe
                      learning environment, empowering them to build a healthier
                      and more educated future.
                    </p>
                    <div className="about-bottom-area">
                      <Link href="/page-about" className="theme-btn">
                        <i className="fa-solid fa-heart"></i> Explore More
                      </Link>
                      <div className="text-area">
                        <h3 className="title">100%</h3>
                        <p>
                          Non-Profit <br /> & Transparent
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "vision" && (
                  <div className="tab-pane fade show active">
                    <p className="about-text">
                      To ensure every child receives nutritious food and a safe
                      learning environment, empowering them to build a healthier
                      and more educated future.
                    </p>
                    <div className="about-bottom-area">
                      <Link href="/page-about" className="theme-btn">
                        <i className="fa-solid fa-heart"></i> Explore More
                      </Link>
                      <div className="text-area">
                        <h3 className="title">100%</h3>
                        <p>
                          Non-Profit <br /> & Transparent
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;