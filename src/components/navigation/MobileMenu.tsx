import React, { useState } from "react";
import Link from "next/link";

interface MenuState {
  status: boolean;
  key: string;
}

const MobileMenu: React.FC = () => {
  const [isSubActive, setSubIsActive] = useState<MenuState>({ status: false, key: "" });
  const [isActive, setIsActive] = useState<MenuState>({ status: false, key: "" });

  const handleClick = (key: string) => {
    setIsActive(prev =>
      prev.key === key ? { status: false, key: "" } : { status: true, key }
    );
  };

  const handleSubClick = (key: string) => {
    setSubIsActive(prev =>
      prev.key === key ? { status: false, key: "" } : { status: true, key }
    );
  };

  return (
    <ul className="navigation">
      <li className="dropdown">
        <Link href="#">Home</Link>
        <ul className={isActive.key === "home" ? "sub-menu d-block" : "d-none"}>
          <li><Link href="/">Home Page 1</Link></li>
          <li><Link href="/index-2">Home Page 2</Link></li>
        </ul>
        <div
          className={`dropdown-btn ${isActive.key === "home" ? "active" : ""}`}
          onClick={() => handleClick("home")}
          aria-expanded={isActive.key === "home"}
        >
          <i className="fa fa-angle-down" />
        </div>
      </li>
      <li className="dropdown">
        <Link href="#">Pages</Link>
        <ul className={isActive.key === "pages" ? "sub-menu d-block" : "d-none"}>
          <li><Link href="/page-about">About Us</Link></li>
          <li>
            <Link href="#">Team</Link>
            <ul className={isSubActive.key === "team" ? "d-block" : "d-none"}>
              <li><Link href="/page-team">Team Grid</Link></li>
              <li><Link href="/page-team-details">Team Details</Link></li>
            </ul>
            <div
              className={`dropdown-btn ${isSubActive.key === "team" ? "active" : ""}`}
              onClick={() => handleSubClick("team")}
              aria-expanded={isSubActive.key === "team"}
            >
              <i className="fa fa-angle-down" />
            </div>
          </li>
          <li><Link href="/page-testimonial">Testimonials</Link></li>
          <li><Link href="/page-faq">FAQ’s</Link></li>
          <li>
            <Link href="#">Shop</Link>
            <ul className={isSubActive.key === "shop" ? "d-block" : "d-none"}>
              <li><Link href="/shop-products">Shop Product</Link></li>
              <li><Link href="/shop-products-sidebar">Products Sidebar</Link></li>
              <li><Link href="/shop-product-details">Product Details</Link></li>
              <li><Link href="/shop-checkout">Checkout</Link></li>
              <li><Link href="/shop-cart">Cart</Link></li>
            </ul>
            <div
              className={`dropdown-btn ${isSubActive.key === "shop" ? "active" : ""}`}
              onClick={() => handleSubClick("shop")}
              aria-expanded={isSubActive.key === "shop"}
            >
              <i className="fa fa-angle-down" />
            </div>
          </li>
          <li><Link href="/page-404">404 Error</Link></li>
        </ul>
        <div
          className={`dropdown-btn ${isActive.key === "pages" ? "active" : ""}`}
          onClick={() => handleClick("pages")}
          aria-expanded={isActive.key === "pages"}
        >
          <i className="fa fa-angle-down" />
        </div>
      </li>
      <li className="dropdown">
        <Link href="#">Donation</Link>
        <ul className={isActive.key === "donation" ? "sub-menu d-block" : "d-none"}>
          <li><Link href="/page-causes">Donation Page</Link></li>
          <li><Link href="/page-causes-details">Donation Details</Link></li>
        </ul>
        <div
          className={`dropdown-btn ${isActive.key === "donation" ? "active" : ""}`}
          onClick={() => handleClick("donation")}
          aria-expanded={isActive.key === "donation"}
        >
          <i className="fa fa-angle-down" />
        </div>
      </li>
      <li className="dropdown">
        <Link href="#">Events</Link>
        <ul className={isActive.key === "events" ? "sub-menu d-block" : "d-none"}>
          <li><Link href="/page-events">Event Page</Link></li>
          <li><Link href="/page-event-details">Event Details</Link></li>
        </ul>
        <div
          className={`dropdown-btn ${isActive.key === "events" ? "active" : ""}`}
          onClick={() => handleClick("events")}
          aria-expanded={isActive.key === "events"}>
          <i className="fa fa-angle-down" />
        </div>
      </li>
      <li className="dropdown">
        <Link href="#">News</Link>
        <ul className={isActive.key === "blog" ? "sub-menu d-block" : "d-none"}>
          <li><Link href="/news-grid">News Grid</Link></li>
          <li><Link href="/news-details">News Details</Link></li>
        </ul>
        <div
          className={`dropdown-btn ${isActive.key === "blog" ? "active" : ""}`}
          onClick={() => handleClick("blog")}
          aria-expanded={isActive.key === "blog"}>
          <i className="fa fa-angle-down" />
        </div>
      </li>
      <li>
        <Link href="/page-contact">Contact</Link>
      </li>
    </ul>
  );
};

export default MobileMenu;