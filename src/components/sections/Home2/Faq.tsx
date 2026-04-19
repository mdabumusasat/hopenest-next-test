"use client";
import React, { useState } from "react";
import Link from "next/link";

interface FAQ {
  id: number;
  question: string;
  answer: string;
  delay?: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "Is my donation secure and transparent?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more readable structure.",
  },
  {
    id: 2,
    question: "How can I report an injured or abandoned animal?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    delay: ".2s",
  },
  {
    id: 3,
    question: "Do you work with endangered species?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    delay: ".4s",
  },
  {
    id: 4,
    question: "Can I make recurring or monthly donations?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    delay: ".6s",
  },
  {
    id: 5,
    question: "Are donations tax-deductible?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    delay: ".8s",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section-2 fix section-padding section-bg">
      <div className="faq-shape">
        <img src="/assets/images/icons/faq-shape2-1.png" alt="shape" />
      </div>
      <div className="faq-shape2">
        <img src="/assets/images/icons/faq-shape2-2.png" alt="shape" />
      </div>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-5">
            <div className="faq-left-items-2">
              <div className="sec-title mb-0">
                <div className="sec-sub-title color-2">
                  <h6 className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                    Faqs
                  </h6>
                </div>
                <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                  Have Questions In <br /> Your Mind? Get the Answers Now
                </h2>
              </div>
              <div
                className="question-box wow fadeInUp"
                data-wow-delay=".3s">
                <h4 className="title">Still Have a questions?</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout
                </p>
                <Link href="/page-contact" className="theme-btn">
                  <i className="fa-solid fa-heart"></i> Send Mail
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="faq-items-2">
              <ul className="accordion-box">
                {faqs.map((faq, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <li
                      key={faq.id}
                      className={`accordion block wow fadeInUp ${
                        isActive ? "active-block" : ""
                      }`}
                      data-wow-delay={faq.delay}>
                      <div
                        className={`acc-btn ${isActive ? "active" : ""}`}
                        onClick={() => toggleFAQ(index)}>
                        {faq.question}
                        <div className="icon fa-regular fa-plus"></div>
                      </div>
                      <div
                        className={`acc-content ${isActive ? "current" : ""}`}
                        style={{ display: isActive ? "block" : "none" }}>
                        <div className="content">
                          <div className="text">{faq.answer}</div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;