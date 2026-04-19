"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="footer-section bg-cover"
      style={{ backgroundImage: "url(/assets/images/background/footer-bg.jpg)" }}>
      <div className="container">
        <div className="footer-widget-wrapper">
          <div className="row g-4">
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="footer-content">
                <Link href="/" className="footer-logo">
                  <img
                    src="/assets/images/logo/white-logo.png"
                    alt="logo"
                  />
                </Link>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <Link href="/page-causes-details" className="theme-btn">
                  <i className="fas fa-heart"></i> Donate Now
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="footer-contact-info">
                <div className="contact-info">
                  <h3 className="number">
                    <Link href="#">(+123) 456789 00</Link>
                  </h3>
                  <p className="email">
                    <Link href="#">
                      needhelp@company.com
                    </Link>
                  </p>
                </div>
                <h4 className="location-title">
                  1901 Thornridge Cir. Shiloh Hawaii 81063
                </h4>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 wow fadeInUp" data-wow-delay=".7s">
              <ul className="footer-menu-list">
                {[
                  { name: "About Us", link: "/page-about" },
                  { name: "Donate", link: "/page-causes-details" },
                  { name: "Volunteer", link: "/page-team" },
                  { name: "Privacy Policy", link: "#" },
                  { name: "Contact", link: "/page-contact" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link href={item.link}>
                      <span>{item.name}</span>
                      <span className="icon">
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5.24221 15.2714L15.072 8.38849M17.2671 6.87033C15.1405 8.17373 11.6724 11.9019 14.8132 16.3874M17.2516 6.84808C15.2994 8.40067 10.6099 10.3845 7.46918 5.89903"
                            stroke="#FBC93E"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="let-connect-wrapper">
          <h2 className="title char-animation">
            Let’s Connect
            <span className="d-lg-block">& Work Together</span>
          </h2>
          <div className="form-items">
            <p>Get the latest inspiration & insights</p>
            <form action="#">
              <input type="text" placeholder="Enter your email" />
              <button className="email-btn" type="submit">
                <i className="fa-light fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-wrapper wow fadeInUp" data-wow-delay=".3s">
            <p>© Copyright 2026 by Company.com</p>
            <div className="social-icon">
              <Link href="#"><i className="fa-brands fa-x-twitter"></i> Twitter</Link>
              <Link href="#"><i className="fa-brands fa-facebook-f"></i> Facebook</Link>
              <Link href="#"><i className="fa-brands fa-pinterest"></i> Pinterest</Link>
              <Link href="#"><i className="fa-brands fa-instagram"></i> Instagram</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;