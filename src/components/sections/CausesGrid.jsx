"use client";
import React from "react";
import Link from "next/link";

const causes = [
  {
    id: 1,
    category: "Animals",
    title: "Emergency Wildlife Rescue & Medical Care",
    image: "/assets/images/resource/donate2-1.jpg",
    raised: "$4,599",
    goal: "$6,599",
    progress: 70,
  },
  {
    id: 2,
    category: "Animals",
    title: "Save Endangered Species from Extinction",
    image: "/assets/images/resource/donate2-2.jpg",
    raised: "$4,599",
    goal: "$6,599",
    progress: 70,
  },
  {
    id: 3,
    category: "Animals",
    title: "Protect Habitats for Future Generations",
    image: "/assets/images/resource/donate2-3.jpg",
    raised: "$4,599",
    goal: "$6,599",
    progress: 70,
  },
];

const CausesSection = () => {
  return (
    <section className="section-bg pt-90 pb-120">
      <div className="auto-container">
        <div className="row">
          {causes.map((item, index) => (
            <div
              key={item.id}
              className="col-xl-4 col-md-6 wow fadeInUp"
              data-wow-delay={`.${index + 1}s`}>
              <div className="donation-single-block2">
                <div className="thumb">
                  <img
                    src={item.image}
                    alt={item.title}/>
                  <img
                    src={item.image}
                    alt={item.title}/>
                </div>
                <div className="content">
                  <Link href="/page-causes-details" className="post-box">
                    {item.category}
                  </Link>
                  <h4 className="title">
                    <Link href="/page-causes-details">{item.title}</Link>
                  </h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when
                  </p>
                  <div className="fundraiser-card">
                    <div className="progress-wrapper">
                      <div className="progress-track">
                        <div
                          className="progress-fill">
                          <div className="progress-knob"></div>
                        </div>
                      </div>
                    </div>
                    <div className="stats-row">
                      <div className="stat-item">
                        <img
                          src="/assets/images/icons/donation2-1.png"
                          alt="raised"/>
                        <span className="label">Raised:</span>
                        <span className="value">{item.raised}</span>
                      </div>
                      <div className="stat-item">
                        <img
                          src="/assets/images/icons/donation2-2.png"
                          alt="goal"/>
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

export default CausesSection;