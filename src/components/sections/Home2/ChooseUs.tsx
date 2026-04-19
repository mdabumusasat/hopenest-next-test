"use client";
import React from "react";
import Link from "next/link";
import CounterUp from "../../elements/CounterUp";

const counters = [
  {
    value: 320,
  },
  {
    value: 85,
  },
  {
    value: 1250,
  },
  {
    value: 40,
  },
];



const chooseList = [
  { text: "Expert-Led Rescue & Medical Care", icon: "/assets/images/icons/vec-2-1.png" },
  { text: "Proven Impact in Wildlife Conservation", icon: "/assets/images/icons/vec-2-1.png" },
  { text: "Transparent & Responsible Use of Donations", icon: "/assets/images/icons/vec-2-1.png" },
  { text: "Rapid Emergency Response", icon: "/assets/images/icons/vec-2-1.png" },
];

const ChooseUsSection = () => {
  return (
    <section className="choose-us-section-2 fix section-padding">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="choose-us-left-items-2">
              <div className="sec-title mb-0">
                <div className="sec-sub-title color-2">
                  <h6 className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">Why Choose Us</h6>
                </div>
                <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                  Why Thousands Trust <br /> Us to Protect Animals
                </h2>
              </div>
              <p className="text wow fadeInUp" data-wow-delay=".3s">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is
              </p>
              <ul className="choose-list-items wow fadeInUp" data-wow-delay=".5s">
                {chooseList.map((item, index) => (
                  <li key={index}>
                    <img src={item.icon} alt="" />
                    {item.text}
                  </li>
                ))}
              </ul>
              <div className="support-mission-items wow fadeInUp" data-wow-delay=".3s">
                <h6 className="support-title">
                  Your trust helps us continue our mission to protect wildlife.
                </h6>
                <p>
                  <i className="fa-solid fa-heart"></i>
                  <Link href="/page-contact"> Support Our Mission</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="choose-us-right-image-2">
              <div className="fix">
                <img data-speed=".8" src="/assets/images/resource/choose-us2-1.jpg" alt="" />
              </div>
                <div className="choose-us-counter-wrap float-bob-y">
                    <div className="choose-us-counter-items bb-bottom">
                      <div className="counter-content">
                        <h3 className="count-box"><span className="count-text"><CounterUp end={counters[0].value} /></span>+</h3>
                        <p>Wildlife Rehabilitation Missions</p>
                      </div>
                      <div className="counter-content">
                        <h3 className="count-box"><span className="count-text"><CounterUp end={counters[1].value} /></span>%</h3>
                        <p>Wildlife Rehabilitation Missions</p>
                      </div>
                    </div>
                    <div className="choose-us-counter-items mb-0 pb-0">
                      <div className="counter-content">
                        <h3 className="count-box"><span className="count-text"><CounterUp end={counters[2].value} /></span> +</h3>
                        <p>We Helped Animals to Rescue</p>
                      </div>
                      <div className="counter-content">
                        <h3 className="count-box"><span className="count-text"><CounterUp end={counters[3].value} /></span> +</h3>
                        <p>Conservation Areas Protected</p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSection;