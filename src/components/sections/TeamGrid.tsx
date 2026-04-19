"use client";
import React from "react";
import Link from "next/link";

const teamMembers = [
  {
    id: 1,
    name: "David Michael Reynolds",
    role: "CEO & Founder",
    image: "/assets/images/resource/team1-1.jpg",
    delay: "200ms",
  },
  {
    id: 2,
    name: "David Jonathan Hayes",
    role: "Senior Volunteer",
    image: "/assets/images/resource/team1-2.jpg",
    delay: "400ms",
  },
  {
    id: 3,
    name: "Joshua Benjamin",
    role: "Junior Volunteer",
    image: "/assets/images/resource/team1-3.jpg",
    delay: "600ms",
  },
  {
    id: 4,
    name: "Junior Volunteer",
    role: "Junior Volunteer",
    image: "/assets/images/resource/team1-4.jpg",
    delay: "800ms",
  },
];

const TeamSection = () => {
  return (
    <section className="team-section pt-120 pb-90">
      <div className="auto-container">
        <div className="row">
          {teamMembers.map((member) => (
            <div key={member.id} className="col-xl-3 col-sm-6">
              <div
                className="team-block wow fadeInUp"
                data-wow-delay={member.delay}>
                <div className="inner-block">
                  <div className="image">
                    <Link href="/page-team-details">
                      <img
                        src={member.image}
                        alt={member.name}
                      />
                    </Link>
                  </div>
                  <div className="content">
                    <h5 className="title">
                      <Link href="/page-team-details">{member.name}</Link>
                    </h5>
                    <div className="designation">{member.role}</div>
                    <ul className="social-icon">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fa-brands fa-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fa-brands fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fa-brands fa-whatsapp"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;