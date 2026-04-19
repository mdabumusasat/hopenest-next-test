"use client";

import React, { useEffect, useState } from "react";
import BackToTop from "../components/elements/BackToTop";
import Footer from "../components/layout/Footer";
import Footer2 from "../components/layout/Footer2";
import Header from "../components/layout/Header";
import Header2 from "../components/layout/Header2";
import PageHead from "../components/layout/PageHead";

interface LayoutProps {
  children: React.ReactNode;
  HeaderStyle?: "two";
  FooterStyle?: "two";
}

const Layout: React.FC<LayoutProps> = ({
  children,
  HeaderStyle,
  FooterStyle,
}) => {
  const [searchToggle, setSearchToggled] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleToggle = () => setSearchToggled((prev) => !prev);

  // Scroll Header
  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY > 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile Menu
  const handleOpen = () => {
    document.body.classList.add("mobile-menu-visible");
  };

  const handleRemove = () => {
    document.body.classList.remove("mobile-menu-visible");
  };

  return (
    <>
      <PageHead />

      <div className="page-wrapper" id="top">
        {/* Header */}
        {HeaderStyle === "two" ? (
          <Header2
            handleOpen={handleOpen}
            handleRemove={handleRemove}
            searchToggle={searchToggle}
            handleToggle={handleToggle}
            scroll={scroll}
          />
        ) : (
          <Header
            handleOpen={handleOpen}
            handleRemove={handleRemove}
            searchToggle={searchToggle}
            handleToggle={handleToggle}
            scroll={scroll}
          />
        )}

        {/* Content */}
        {children}

        {/* Footer */}
        {FooterStyle === "two" ? <Footer2 /> : <Footer />}
      </div>

      <BackToTop />
    </>
  );
};

export default Layout;