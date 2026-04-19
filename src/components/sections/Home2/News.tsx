"use client";
import React from "react";
import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  image: string;
  description: string;
  delay: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "How Your Donations Help Save Endangered Animals",
    image: "/assets/images/resource/news-2-1.jpg",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a",
    delay: ".3s",
  },
  {
    id: 2,
    title: "What to Do If You Find an Injured Wild Animal",
    image: "/assets/images/resource/news-2-2.jpg",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a",
    delay: ".5s",
  },
  {
    id: 3,
    title: "From Rescue to Release A Wildlife Survival",
    image: "/assets/images/resource/news-2-3.jpg",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a",
    delay: ".7s",
  },
];

const NewsSection = () => {
  return (
    <section className="news-section2 section-padding fix">
      <div className="container">
        <div className="sec-title text-center">
          <div className="sec-sub-title color-2">
            <h6 className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
              Our Blog
            </h6>
          </div>
          <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
            Latest Updates from <br /> Our Community
          </h2>
        </div>
        <div className="row">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={blog.delay}>
              <div className="news-box-items-2">
                <div className="news-thumb">
                  <img src={blog.image} alt={blog.title} />
                  <img src={blog.image} alt={blog.title} />
                </div>
                <div className="news-content">
                  <h4 className="title">
                    <Link href="/news-details">{blog.title}</Link>
                  </h4>
                  <p>{blog.description}</p>
                  <Link href="/news-details" className="link-btn">
                    Read More
                    <svg
                      width="12"
                      height="11"
                      viewBox="0 0 12 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0.429834 8.63124L9.03093 2.60869M10.9516 1.28029C9.09084 2.42077 6.05627 5.68292 8.80443 9.60769M10.938 1.26083C9.22989 2.61935 5.12659 4.35519 2.37843 0.430413"
                        stroke="#FF7E1D"
                        strokeWidth="1.5"
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