"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer-section-2">
      <div className="shape-2">
        <img src="/assets/images/icons/tree-2-1.png" alt="Tree" />
      </div>
      <div className="flower-shape float-bob-x">
        <img src="/assets/images/icons/flower-2-1.png" alt="Flower" />
      </div>
      <div className="container">
        <div className="footer-widget-wrapper-2 wow fadeInUp" data-wow-delay=".3s">
          <div className="shape-1 float-bob-x">
            <img src="/assets/images/icons/footer-shape-2-1.png" alt="Shape" />
          </div>
          <div className="row g-4 justify-content-between">
            <div className="col-lg-5">
              <div className="footer-content">
                <Link href="/" className="footer-logo">
                  <img src="/assets/images/logo/white-logo-2.png" alt="Logo" />
                </Link>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="footer-right-items">
                <Link href="/page-causes" className="theme-btn">
                  <i className="fa-solid fa-heart"></i> Donate Now
                </Link>
                <ul className="footer-list">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/page-about">About</Link></li>
                  <li><Link href="/page-causes">Donate</Link></li>
                  <li><Link href="#">Volunteer</Link></li>
                  <li><Link href="/page-contact">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-info-wrapper">
            <div className="info-content">
              <h4 className="title">Say hello!</h4>
              <p><Link href="#">demo@example.com</Link></p>
            </div>
            <div className="info-content">
              <h4 className="title">Phone Number</h4>
              <p><Link href="#">+017 500-50088</Link></p>
            </div>
            <div className="info-content">
              <h4 className="title">Location</h4>
              <p>410 Sandtown, California 94001, USA</p>
            </div>
            <div className="social-icon">
              <Link href="#"><i className="fa-brands fa-x-twitter"></i></Link>
              <Link href="#"><i className="fa-brands fa-facebook-f"></i></Link>
              <Link href="#"><i className="fa-brands fa-pinterest"></i></Link>
              <Link href="#"><i className="fa-brands fa-instagram"></i></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-2">
        <div className="container">
          <div className="footer-bottom-wrapper-2 wow fadeInUp" data-wow-delay=".3s">
            <p>© Copyright 2026 by Company.com</p>
            <ul className="footer-menu">
              <li><Link href="#">Privacy Policy</Link></li>
              <li> | </li>
              <li><Link href="#">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;