"use client";
import React, { useState } from "react";
import Link from "next/link";

const campaigns = [
  {
    id: 1,
    image: "/assets/images/resource/donate1-1.jpg",
    category: "Education",
    title: "Supporting Education for Underprivileged Children",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when",
    raised: "$4,599",
    goal: "$6,599",
    progress: 70,
    delay: ".3s",
  },
  {
    id: 2,
    image: "/assets/images/resource/donate1-2.jpg",
    category: "Food",
    title: "Providing Daily Nutritious Meals for Hungry Children",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when",
    raised: "$4,599",
    goal: "$6,599",
    progress: 70,
    delay: ".5s",
  },
  {
    id: 3,
    image: "/assets/images/resource/donate1-3.jpg",
    category: "Health & Nutrition",
    title: "Improving Child Health Through Food Programs",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when",
    raised: "$4,599",
    goal: "$6,599",
    progress: 70,
    delay: ".7s",
  },
];

const DonationSection = () => {
  const [activeIndex, setActiveIndex] = useState(1); // default active

  return (
    <section className="donation-section fix section-padding">
      <div className="container">

        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7">
            <div className="sec-title text-center">
              <div className="sec-sub-title">
                <h6 className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                  Campaigns
                </h6>
              </div>
              <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                Featured Campaigns You Can Help Today
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {campaigns.map((item, index) => (
            <div
              key={item.id}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={item.delay}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div
                className={`donation-single-block1 ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <div className="thumb">
                  <img src={item.image} alt={item.title} />
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="content">
                  <Link href="/page-causes-details" className="post-box">
                    {item.category}
                  </Link>

                  <h4 className="title">
                    <Link href="/page-causes-details">{item.title}</Link>
                  </h4>

                  <p>{item.text}</p>

                  <div className="fundraiser-card">
                    <div className="progress-wrapper">
                      <div className="progress-track">
                        <div
                          className="progress-fill"
                          style={
                            { "--target-width": `${item.progress}%` } as React.CSSProperties
                          }
                        >
                          <div className="progress-knob"></div>
                        </div>
                      </div>
                    </div>

                    <div className="stats-row">
                      <div className="stat-item">
                        <span className="label">Raised:</span>
                        <span className="value">{item.raised}</span>
                      </div>

                      <div className="stat-item">
                        <span className="label">Goal:</span>
                        <span className="value">{item.goal}</span>
                      </div>
                    </div>
                  </div>
                  <Link href="/page-causes-details" className="theme-btn">
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationSection;