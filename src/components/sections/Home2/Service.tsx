"use client";
import React from "react";
import Link from "next/link";

interface ServiceItem {
  thumb: string;
  icon: string;
  title: string;
  link: string;
  text: string;
  delay: string;
}

const services: ServiceItem[] = [
  {
    thumb: "/assets/images/resource/service2-1.jpg",
    icon: "/assets/images/icons/service-icon2-1.png",
    title: "Emergency <br /> Animal Rescue",
    link: "/page-causes-details",
    text: "It is a long established fact that a reader will be distracted by the readable content",
    delay: ".2s",
  },
  {
    thumb: "/assets/images/resource/service2-2.jpg",
    icon: "/assets/images/icons/service-icon2-2.png",
    title: "Habitat <br /> Protection",
    link: "/page-causes-details",
    text: "It is a long established fact that a reader will be distracted by the readable content",
    delay: ".4s",
  },
  {
    thumb: "/assets/images/resource/service2-3.jpg",
    icon: "/assets/images/icons/service-icon2-3.png",
    title: "Education & <br /> Awareness",
    link: "/page-causes-details",
    text: "It is a long established fact that a reader will be distracted by the readable content",
    delay: ".6s",
  },
  {
    thumb: "/assets/images/resource/service2-4.jpg",
    icon: "/assets/images/icons/service-icon2-4.png",
    title: "Wildlife <br /> Rehabilitation",
    link: "/page-causes-details",
    text: "It is a long established fact that a reader will be distracted by the readable content",
    delay: ".8s",
  },
];

const ServiceSection = () => {
  return (
    <section
      className="service-section-2 fix section-padding section-padding bg-cover"
      style={{ backgroundImage: "url('/assets/images/resource/service-bg-shape-2-1.png')" }}>
        <div className="container">
            <div className="sec-title text-center">
            <div className="sec-sub-title color-2">
                <h6 className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">What We Do</h6>
            </div>
            <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                Our Rescue & <br /> Conservation Programs
            </h2>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
            {services.map((service, index) => (
                <div
                key={index}
                className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={service.delay}>
                <div className="service-block-items-2">
                    <div className="thumb">
                    <img src={service.thumb} alt="img" />
                    <img src={service.thumb} alt="img" />
                    </div>
                    <div className="content">
                    <div className="icon-area">
                        <div className="icon">
                        <img src={service.icon} alt="img" />
                        </div>
                        <h4
                        className="title"
                        dangerouslySetInnerHTML={{ __html: service.title }}
                        />
                    </div>
                    <p>{service.text}</p>
                    <Link href={service.link} className="link-btn">
                        Read More
                        <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.6 13.4L13.2 7.3 M15.1 6c-1.9 1.2-4.9 4.4-2.1 8.3 M15.1 6c-1.7 1.4-5.8 3.1-8.6-.8"
                            fill="none"
                            stroke="#FF7E1D"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        </svg>
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

export default ServiceSection;