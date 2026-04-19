import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/css/bootstrap.min.css";
import "../styles/css/style-2.css";
import "../styles/css/style.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div id="preloader" className="preloader">
          <div className="animation-preloader">
            <div className="spinner"></div>
            <div className="txt-loading">
              <span data-text-preloader="H" className="letters-loading">H</span>
              <span data-text-preloader="O" className="letters-loading">O</span>
              <span data-text-preloader="P" className="letters-loading">P</span>
              <span data-text-preloader="E" className="letters-loading">E</span>
              <span data-text-preloader="N" className="letters-loading">N</span>
              <span data-text-preloader="E" className="letters-loading">E</span>
              <span data-text-preloader="S" className="letters-loading">S</span>
              <span data-text-preloader="T" className="letters-loading">T</span>
            </div>
            <p className="text-center">Loading</p>
          </div>

          <div className="loader">
            <div className="row">
              <div className="col-3 loader-section section-left">
                <div className="bg"></div>
              </div>
              <div className="col-3 loader-section section-left">
                <div className="bg"></div>
              </div>
              <div className="col-3 loader-section section-right">
                <div className="bg"></div>
              </div>
              <div className="col-3 loader-section section-right">
                <div className="bg"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;