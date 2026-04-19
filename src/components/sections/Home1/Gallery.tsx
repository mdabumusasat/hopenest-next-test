"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

interface GalleryItem {
  id: number;
  image: string;
  link?: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, image: "/assets/images/resource/gallery-1-1.jpg", link: "#" },
  { id: 2, image: "/assets/images/resource/gallery-1-2.jpg", link: "#" },
  { id: 3, image: "/assets/images/resource/gallery-1-3.jpg", link: "#" },
  { id: 4, image: "/assets/images/resource/gallery-1-4.jpg", link: "#" },
  { id: 5, image: "/assets/images/resource/gallery-1-5.jpg", link: "#" },
  { id: 6, image: "/assets/images/resource/gallery-1-2.jpg", link: "#" },
  { id: 7, image: "/assets/images/resource/gallery-1-3.jpg", link: "#" },
];

const GallerySection = () => {
  return (
    <section className="gallery-section section-padding pb-0 fix">
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={5}
          breakpoints={{
            320: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 5 },
          }}
          className="gallery-slide wow fadeInUp"
          data-wow-delay=".3s">
          {galleryItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="gallery-card-item">
                <div className={`gallery-image ${item.id !== 1 ? "style-height" : ""}`}>
                  <img src={item.image} alt={`Gallery ${item.id}`} />
                  {item.link && (
                    <Link href={item.link} className="icon">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GallerySection;