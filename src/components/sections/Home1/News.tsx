"use client";
import React from "react";
import Link from "next/link";

interface NewsItem {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
  delay: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    image: "/assets/images/resource/news-1-1.jpg",
    title: "How Nutritious Meals Help Children Stay in School",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a",
    link: "/news-details",
    delay: ".3s",
  },
  {
    id: 2,
    image: "/assets/images/resource/news-1-2.jpg",
    title: "Why Education and Food Go for Children in Need",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a",
    link: "/news-details",
    delay: ".5s",
  },
  {
    id: 3,
    image: "/assets/images/resource/news-1-3.jpg",
    title: "How Your Donations Are Making a Real Difference",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a",
    link: "/news-details",
    delay: ".7s",
  },
];

const NewsSection = () => {
  return (
    <section className="news-section section-padding fix section-bg">
      <div className="news-shape-1 d-none d-xl-block">
        <img src="/assets/images/resource/news-1-shape-1.png" alt="img" />
      </div>
      <div className="news-shape-2 d-none d-xl-block">
        <img src="/assets/images/resource/news-1-shape-2.png" alt="img" />
      </div>
      <div className="news-shape-3 d-none d-xl-block">
        <img src="/assets/images/resource/news-1-shape-3.png" alt="img" />
      </div>
      <div className="news-shape-4 d-none d-xl-block">
        <img src="/assets/images/resource/news-1-shape-4.png" alt="img" />
      </div>
      <div className="container">
        <div className="sec-title text-center">
          <div className="sec-sub-title">
            <h6 className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">Our Blog</h6>
          </div>
          <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
            Latest Updates from <br /> Our Community
          </h2>
        </div>
        <div className="row">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={item.delay}>
              <div className="news-box-items">
                <div className="news-thumb">
                  <img src={item.image} alt={item.title} />
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="news-content">
                  <h4 className="title">
                    <Link href={item.link}>{item.title}</Link>
                  </h4>
                  <p>{item.description}</p>
                  <Link href={item.link} className="link-btn">
                    Read More
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg" >
                      <path
                        d="M4.6 13.4L13.2 7.3 M15.1 6c-1.9 1.2-4.9 4.4-2.1 8.3 M15.1 6c-1.7 1.4-5.8 3.1-8.6-.8"
                        fill="none"
                        stroke="#0E6539"
                        strokeWidth="1.5"
                        strokeLinecap="round"
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

export default NewsSection;