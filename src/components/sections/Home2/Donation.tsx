"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Campaign {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  raised: string;
  goal: string;
  progress: number; 
  link: string;
}

const campaigns: Campaign[] = [
  {
    id: 1,
    category: "Animals",
    title: "Emergency Wildlife Rescue & Medical Care",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when",
    image: "/assets/images/resource/donate2-1.jpg",
    raised: "$4,599",
    goal: "$6,599",
    progress: 70,
    link: "/page-causes-details",
  },
  {
    id: 2,
    category: "Animals",
    title: "Save Endangered Species from Extinction",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when",
    image: "/assets/images/resource/donate2-2.jpg",
    raised: "$4,599",
    goal: "$6,599",
    progress: 70,
    link: "/page-causes-details",
  },
  {
    id: 3,
    category: "Animals",
    title: "Protect Habitats for Future Generations",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when",
    image: "/assets/images/resource/donate2-3.jpg",
    raised: "$4,599",
    goal: "$6,599",
    progress: 70,
    link: "/page-causes-details",
  },
];

const DonationSection = () => {
  const [animatedProgress, setAnimatedProgress] = useState<number[]>(Array(campaigns.length).fill(0));

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    campaigns.forEach((campaign, index) => {
      timeouts.push(
        setTimeout(() => {
          setAnimatedProgress((prev) => {
            const copy = [...prev];
            copy[index] = campaign.progress;
            return copy;
          });
        }, 500 + index * 300)
      );
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section className="donation-section-2 section-padding fix">
      <div className="shape-1">
        <img src="/assets/images/icons/donation2-shape1.png" alt="img" />
      </div>
      <div className="container">
        <div className="sec-title text-center">
          <div className="sec-sub-title color-2">
            <h6 className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle text-white">Featured Campaigns</h6>
          </div>
          <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim text-white">
            Featured Rescue Campaigns <br /> Making a Real Impact
          </h2>
        </div>
        <div className="row">
          {campaigns.map((campaign, index) => (
            <div key={campaign.id} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`${0.3 + index * 0.2}s`}>
              <div className="donation-single-block2">
                <div className="thumb">
                  <img src={campaign.image} alt={campaign.title} />
                  <img src={campaign.image} alt={campaign.title} />
                </div>
                <div className="content">
                  <Link href={campaign.link} className="post-box">{campaign.category}</Link>
                  <h4 className="title"><Link href={campaign.link}>{campaign.title}</Link></h4>
                  <p>{campaign.description}</p>
                  <div className="fundraiser-card">
                    <div className="progress-wrapper">
                      <div className="progress-track">
                        <div
                          className="progress-fill"
                          style={{
                            width: `${animatedProgress[index]}%`,
                            transition: "width 2s ease-in-out"
                          }}>
                          <div className="progress-knob"></div>
                        </div>
                      </div>
                    </div>
                    <div className="stats-row">
                      <div className="stat-item">
                        <img src="/assets/images/icons/donation2-1.png" alt="Raised" />
                        <span className="label">Raised:</span>
                        <span className="value">{campaign.raised}</span>
                      </div>
                      <div className="stat-item">
                        <img src="/assets/images/icons/donation2-2.png" alt="Goal" />
                        <span className="label">Goal:</span>
                        <span className="value">{campaign.goal}</span>
                      </div>
                    </div>
                  </div>
                  <Link href={campaign.link} className="theme-btn">Donate Now</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationSection;