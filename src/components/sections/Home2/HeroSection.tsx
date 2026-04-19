"use client";
import React from "react";

const heroItems = [
  "Compassion for all living beings",
  "Environmental responsibility",
  "Community education & awareness",
  "Ethical wildlife care",
];

const HeroList = () => {
  return (
    <div className="hero-list-2 pt-50 pb-50 fix section-bg">
      <div className="container">
        <ul className="hero-list-wrap wow fadeInUp" data-wow-delay=".3s">
          {heroItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeroList;