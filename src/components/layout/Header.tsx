"use client";
import React, { useState } from "react";
import Link from 'next/link';
import NavLinks from '../navigation/NavLinks';
import MobileMenu from '../navigation/MobileMenu';

interface HeaderProps {
  handleOpen: () => void;
  handleRemove: () => void;
  handleRemove2: () => void;
  scroll: boolean;
  handleToggle?: () => void;
  searchToggle?: boolean;
}

const Header: React.FC<HeaderProps> = ({ handleOpen, handleRemove, searchToggle, scroll }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const handleToggle = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <>
    <div className="mouseCursor cursor-outer"></div>
    <div className="mouseCursor cursor-inner"></div>
    <header className={`main-header header-style-one header-1 ${scroll ? "fixed-header" : ""} ${searchToggle ? "moblie-search-active" : ""}`}>
      <Link href="#" className="main-logo"><img src="assets/images/logo/white-logo.png" alt="img"/></Link>
      <Link href="/page-contact" className="link-btn">Become a Volunteer</Link>
      {/* <!-- Header Lower --> */}
      <div className="container d-none d-lg-block">
        <div className="header-top-wrapper">
          <ul>
            <li><i className="fa-solid fa-location-dot"></i> 1901 Thornridge Shiloh, Hawaii 81063</li>
            <li><i className="fa-solid fa-envelope"></i> <Link href="#">needhelp@company.com</Link></li>
          </ul>
          <div className="social-icon">
            <span>Visit Our Social Pages:</span>
            <div className="social-icon">
              <Link href="#"><i className="fa-brands fa-x-twitter"></i></Link>
              <Link href="#"><i className="fa-brands fa-facebook-f"></i></Link>
              <Link href="#"><i className="fa-brands fa-pinterest"></i></Link>
              <Link href="#"><i className="fa-brands fa-instagram"></i></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="header-lower">
        {/* <!-- Main box --> */}
        <div className="container">
          <div className="main-box">
            {/* <!--Nav Box--> */}
            <div className="nav-outer">
              <div className="logo d-none">
                <Link href="#"><img src="assets/images/logo/white-logo3.png" alt="img"/></Link>
              </div>
              <nav className="nav main-menu">
                  <NavLinks/>
              </nav>
              <div className="outer-box">
                <div className="ui-btn-outer">
                  <div className="ui-btn-search" onClick={handleToggle}>
                    <button className="ui-btn ui-btn search-btn main-header__search search-toggler"><i className="fa-regular fa-magnifying-glass"></i></button>
                    <Link href="/page-causes" className="theme-btn"><i className="fa-solid fa-heart"></i> Donate Now</Link>
                  </div>
                  {/* <!-- Mobile Nav toggler --> */}
                </div>
                <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars"></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Header Lower --> */}

      {/* <!-- Mobile Menu  --> */}
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleRemove}/>
        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <Link href="#"><img src="assets/images/logo/white-logo.png" alt=""/></Link>
            </div>
            <div className="close-btn" onClick={handleRemove}><i className="icon fa fa-times"></i></div>
          </div>
          <ul className="navigation clearfix">
            <MobileMenu/>
          </ul>
          <ul className="contact-list-one">
            <li>
              {/* <!-- Contact Info Box --> */}
              <div className="contact-info-box">
                <i className="icon lnr-icon-phone-handset"></i>
                <span className="title">Call Now</span>
                <Link href="#">+92 (8800) - 98670</Link>
              </div>
            </li>
            <li>
              {/* <!-- Contact Info Box --> */}
              <div className="contact-info-box">
                <span className="icon lnr-icon-envelope1"></span>
                <span className="title">Send Email</span>
                <Link href="#">help@company.com</Link>
              </div>
            </li>
            <li>
              {/* <!-- Contact Info Box --> */}
              <div className="contact-info-box">
                <span className="icon lnr-icon-clock"></span>
                <span className="title">Send Email</span>
                Mon - Sat 8:00 - 6:30, Sunday - CLOSED
              </div>
            </li>
          </ul>
          <ul className="social-links">
            <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
            <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
            <li><Link href="#"><i className="fab fa-pinterest"></i></Link></li>
            <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
          </ul>
        </nav>
      </div>
      {/* <!-- End Mobile Menu --> */}

      {/* <!-- Header Search --> */}
      <div className={`search-popup ${isSearchActive ? "active" : ""}`}>
        <span className="search-back-drop" onClick={handleToggle}/>
        <button className="close-search" onClick={handleToggle}><span className="fa fa-times"></span></button>
        <div className="search-inner">
          <form method="post" action="#">
            <div className="form-group">
              <input type="search" name="search-field" placeholder="Search..."/>
              <button type="submit"><i className="fa fa-search"></i></button>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- End Header Search --> */}

      {/* <!-- Sticky Header  --> */}
      <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
        <div className="auto-container">
          <div className="inner-container">
            {/* <!--Logo--> */}
            <div className="logo">
              <Link href="#"><img src="assets/images/logo/black-logo.png" alt="img"/></Link>
            </div>

            {/* <!--Right Col--> */}
            <div className="nav-outer">
              {/* <!-- Main Menu --> */}
              <nav className="main-menu">
                <div className="navbar-collapse show collapse clearfix">
                  <ul className="navigation clearfix">
                    <NavLinks/>
                  </ul>
                </div>
              </nav>
              {/* <!-- Main Menu End--> */}

              {/* <!--Mobile Navigation Toggler--> */}
             <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars"></span></div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Sticky Menu --> */}
    </header>
    </>
  );
};

export default Header;