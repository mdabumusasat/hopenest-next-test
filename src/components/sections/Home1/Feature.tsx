"use client";
import React from "react";

const features = [
  {
    icon: "/assets/images/icons/icon1-1.png",
    title: "Healthy Food",
    text: "It is a long established fact that a reader will be distracted by the readable content",
    delay: ".2s",
    bg: "",
  },
  {
    icon: "/assets/images/icons/icon1-2.png",
    title: "Medical Help",
    text: "It is a long established fact that a reader will be distracted by the readable content",
    delay: ".4s",
    bg: "bg-2",
  },
  {
    icon: "/assets/images/icons/icon1-3.png",
    title: "Education",
    text: "It is a long established fact that a reader will be distracted by the readable content",
    delay: ".6s",
    bg: "bg-3",
  },
  {
    icon: "/assets/images/icons/icon1-4.png",
    title: "Clean Water",
    text: "It is a long established fact that a reader will be distracted by the readable content",
    delay: ".8s",
    bg: "bg-4",
  },
];

const FeatureSection = () => {
  return (
    <section className="feature-section fix section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="sec-title text-center">
              <div className="sec-sub-title">
                <h6 className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                  What We Do
                </h6>
              </div>
              <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                A Trusted Charity Focused <br /> on Children’s Well-Being
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {features.map((feature, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={feature.delay}>
              <div className="feature-block-1">
                <div className={`icon ${feature.bg}`}>
                  <img
                    src={feature.icon}
                    alt={feature.title}
                  />
                </div>
                <div className="content">
                  <h4 className="title">{feature.title}</h4>
                  <p>{feature.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;