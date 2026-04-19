"use client";

import React from "react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "How Nutritious Meals Help Children Stay in School",
    image: "/assets/images/resource/news-1-1.jpg",
    delay: ".1s",
  },
  {
    id: 2,
    title: "Why Education and Food Go for Children in Need",
    image: "/assets/images/resource/news-1-2.jpg",
    delay: ".2s",
  },
  {
    id: 3,
    title: "How Your Donations Are Making a Real Difference",
    image: "/assets/images/resource/news-1-3.jpg",
    delay: ".3s",
  },
  {
    id: 4,
    title: "Why Education and Food Go for Children in Need",
    image: "/assets/images/resource/news-1-2.jpg",
    delay: ".4s",
  },
  {
    id: 5,
    title: "How Your Donations Are Making a Real Difference",
    image: "/assets/images/resource/news-1-3.jpg",
    delay: ".5s",
  },
  {
    id: 6,
    title: "How Nutritious Meals Help Children Stay in School",
    image: "/assets/images/resource/news-1-1.jpg",
    delay: ".6s",
  },
];

const BlogGrid = () => {
  return (
    <section className="blog-section section-bg pt-90 pb-120">
      <div className="auto-container">
        <div className="row">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="col-xl-4 col-sm-6 wow fadeInUp"
              data-wow-delay={post.delay}>
              <div className="news-box-items">
                <div className="news-thumb">
                  <img
                    src={post.image}
                    alt="blog"
                  />
                  <img
                    src={post.image}
                    alt="blog"
                  />
                </div>
                <div className="news-content">
                  <h4 className="title">
                    <Link href="/news-details">{post.title}</Link>
                  </h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a
                  </p>
                  <Link href="/news-details" className="link-btn">
                    Read More
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
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

export default BlogGrid;