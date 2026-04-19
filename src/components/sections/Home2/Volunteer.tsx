"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import CounterUp from "../../elements/CounterUp";

const counters = [
  {
    value: 54200,
  },

];

const VolunteerSection = () => {
  const [count, setCount] = useState(0);
  const target = 54200;

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = Math.ceil(target / (duration / 20));
    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(start);
    }, 20);

    return () => clearInterval(counter);
  }, []);

  return (
    <section className="volunteer-section-2 fix instagram-area section-padding">
      <div className="container">
        <div className="become-volunteer-wrapper">
          <div className="thumb-1 float-bob-x">
            <img src="/assets/images/resource/volunter2-1.jpg" alt="img" />
          </div>
          <div className="thumb-2 float-bob-y">
            <img src="/assets/images/resource/volunter2-2.jpg" alt="img" />
          </div>
          <div className="thumb-3 float-bob-x">
            <img src="/assets/images/resource/volunter2-3.jpg" alt="img" />
          </div>
          <div className="thumb-4 float-bob-y">
            <img src="/assets/images/resource/volunter2-4.jpg" alt="img" />
          </div>
          <div className="content">
            <h5 className="sub-text wow fadeInUp">
              Join the fight to protect the vulnerable! Lend your support to rescue injured wildlife and give them a second chance at life in the wild.
            </h5>
            <div className="counter-content wow fadeInUp" data-wow-delay=".3s">
              <h3 className="count-box">
                <span className="count-text"><CounterUp end={counters[0].value} /></span>+
              </h3>
              <p>Successful rescues & rehabilitations.</p>
            </div>
            <Link href="/page-contact" className="theme-btn wow fadeInUp" data-wow-delay=".5s">
              <i className="fa-solid fa-heart"></i> Become a Volunteer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;