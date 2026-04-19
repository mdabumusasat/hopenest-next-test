"use client";
import React from "react";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  image: string;
  location: string;
  delay: string;
}

const projectsLeft: Project[] = [
  {
    id: 1,
    title: "Bella’s Rescue Story",
    image: "/assets/images/resource/project2-1.jpg",
    location: "Forest Reserve Area",
    delay: ".3s",
  },
  {
    id: 2,
    title: "Bella’s Rescue Story",
    image: "/assets/images/resource/project2-2.jpg",
    location: "Forest Reserve Area",
    delay: ".5s",
  },
  {
    id: 3,
    title: "Bella’s Rescue Story",
    image: "/assets/images/resource/project2-3.jpg",
    location: "Forest Reserve Area",
    delay: ".7s",
  },
];

const projectsRight: Project[] = [
  {
    id: 4,
    title: "Bella’s Rescue Story",
    image: "/assets/images/resource/project2-4.jpg",
    location: "Forest Reserve Area",
    delay: ".3s",
  },
  {
    id: 5,
    title: "Bella’s Rescue Story",
    image: "/assets/images/resource/project2-5.jpg",
    location: "Forest Reserve Area",
    delay: ".5s",
  },
];

const ProjectSection = () => {
  return (
    <section className="project-section-2 section-padding fix">
      <div className="container">
        <div className="row g-4 justify-content-between align-items-center">
          <div className="col-lg-8">
            <div className="sec-title mb-0">
              <div className="sec-sub-title">
                <h6 className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                  Our Case
                </h6>
              </div>
              <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                Real Rescue Stories. <br /> Real Lives Saved.
              </h2>
            </div>
          </div>
          <div
            className="col-lg-3 text-lg-end wow fadeInUp"
            data-wow-delay=".3s" >
            <Link href="/page-events" className="theme-btn">
              <i className="fa-solid fa-heart"></i> View All cases
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="project-top-items-2">
              <div className="row g-4">
                {projectsLeft.map((project, index) => (
                  <div
                    key={project.id}
                    className={
                      index === 2
                        ? "col-xl-12 wow fadeInUp"
                        : "col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                    }
                    data-wow-delay={project.delay}>
                    <div className="project-image-2">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="hover-img"
                      />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="hover-img"
                      />
                      <div className="content">
                        <h4 className="title">
                          <Link href="/page-events">{project.title}</Link>
                        </h4>
                        <p>
                          <img
                            src="/assets/images/icons/project2-icon-1.png"
                            alt="icon"
                          />
                          {project.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="project-top-items-2">
              <div className="row g-4">
                {projectsRight.map((project) => (
                  <div
                    key={project.id}
                    className="col-xl-12 wow fadeInUp"
                    data-wow-delay={project.delay}>
                    <div className="project-image-2">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="hover-img"
                      />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="hover-img"
                      />
                      <div className="content">
                        <h4 className="title">
                          <Link href="/page-events">{project.title}</Link>
                        </h4>
                        <p>
                          <img
                            src="/assets/images/icons/project2-icon-1.png"
                            alt="icon"
                          />
                          {project.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;