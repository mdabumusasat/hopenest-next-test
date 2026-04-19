"use client";
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";

const VolunteerSection = () => {
  const [count, setCount] = useState(0);
  const target = 54200;

  useEffect(() => {
    let start = 0;
    const duration = 3000;
    const increment = target / (duration / 30);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="volunteer-banner-section fix section-padding pb-0">
        <div className="shape-1">
            <img src="/assets/images/icons/shape1-4.png" alt="shape" />
        </div>
        <div className="vec-shape">
            <img src="/assets/images/icons/vec-1-1.png" alt="shape" />
        </div>
        <div className="frame-shape">
            <img src="/assets/images/icons/frame1-1.png" alt="shape" />
        </div>
        <div className="container">
            <div className="row g-4 justify-content-between align-items-end">
            <div className="col-lg-6 col-md-7">
                <div className="sec-title mb-0">
                <div className="sec-sub-title">
                    <h6 className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                    Volunteer
                    </h6>
                </div>
                <h2 className="title tx-title sec_title text-white tz-itm-title tz-itm-anim">
                    Volunteers Making a Difference Lives
                </h2>
                </div>
            </div>
            <div className="col-lg-4 col-md-4">
                <div className="counter-items">
                <h3 className="count-box">
                    {count.toLocaleString()}+
                </h3>
                <p>Volunteers Joined</p>
                </div>
            </div>
            </div>
        </div>
        <div className="volunteer-image">
            <div className="fix">
            <img
                src="/assets/images/resource/volunter-bg.jpg"
                alt="volunteer"
                style={{ width: "100%", height: "auto" }}/>
            </div>
            <div className="volunteer-btn">
            <Link href="/page-contact" className="theme-btn">
                <i className="fa-solid fa-heart"></i> Join Our Community Now
            </Link>
            </div>
        </div>
    </section>
  );
};

export default VolunteerSection;