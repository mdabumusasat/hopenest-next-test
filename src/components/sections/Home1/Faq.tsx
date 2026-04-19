"use client";
import React, { useState } from "react";
interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    id: 1,
    question: "How long does turf installation take?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is",
  },
  {
    id: 2,
    question: "Can I volunteer or partner with your organization?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is",
  },
  {
    id: 3,
    question: "Where does your organization operate?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is",
  },
  {
    id: 4,
    question: "Can I volunteer or partner with your organization?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is",
  },
  {
    id: 5,
    question: "Is this property ready to move in?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is",
  },
];
const FaqSection = () => {
  const [activeId, setActiveId] = useState<number>(1);

  const toggleFaq = (id: number) => {
    setActiveId((prev) => (prev === id ? 0 : id));
  };

  return (
    <section className="faq-section fix section-padding">
      <div className="container">
        <div className="sec-title text-center">
          <div className="sec-sub-title">
            <h6 className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">Faqs</h6>
          </div>
          <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
            Have Questions in your mind?
          </h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="faq-content-1">
              <ul className="accordion-box">
                {faqItems.map((item, index) => (
                  <li
                    key={item.id}
                    className={`accordion block wow fadeInUp ${
                      activeId === item.id ? "active-block" : ""
                    }`}
                    data-wow-delay={`${index * 0.2}s`}>
                    <div
                      className={`acc-btn ${activeId === item.id ? "active" : ""}`}
                      onClick={() => toggleFaq(item.id)}>
                      <span className="number">{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                      {item.question}
                      <div className="icon fa-regular fa-plus"></div>
                    </div>
                    <div
                      className={`acc-content ${activeId === item.id ? "current" : ""}`}>
                      <div className="content">
                        <div className="text">{item.answer}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;