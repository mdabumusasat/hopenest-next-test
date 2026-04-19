"use client";

import Link from "next/link";
import { useState } from "react";

interface Product {
  title: string;
  price: string;
  categories: string[];
  img: string;
}

export default function PortfolioFilter1() {
  const [filterKey, setFilterKey] = useState("*");

  const handleFilterKeyChange = (key: string) => setFilterKey(key);
  const getFilterClass = (value: string) => (value === filterKey ? "filter active" : "filter");

  const products: Product[] = [
    { title: "Fishing Reel", price: "$32.00", categories: ["cat-2"], img: "/assets/images/resource/products/1.jpg" },
    { title: "Leather Belt", price: "$52.00", categories: ["cat-1", "cat-2"], img: "/assets/images/resource/products/2.jpg" },
    { title: "Sunglasses", price: "$42.00", categories: ["cat-1", "cat-2", "cat-4"], img: "/assets/images/resource/products/3.jpg" },
    { title: "Backpack", price: "$22.00", categories: ["cat-1", "cat-3"], img: "/assets/images/resource/products/4.jpg" },
    { title: "Hand Watch", price: "$34.00", categories: ["cat-1", "cat-3", "cat-5"], img: "/assets/images/resource/products/5.jpg" },
    { title: "Party Bag", price: "$25.00", categories: ["cat-2", "cat-3", "cat-4"], img: "/assets/images/resource/products/6.jpg" },
    { title: "Coffee Mug", price: "$20.00", categories: ["cat-1", "cat-2", "cat-5"], img: "/assets/images/resource/products/7.jpg" },
    { title: "Smart Watch", price: "$40.00", categories: ["cat-1", "cat-4", "cat-5"], img: "/assets/images/resource/products/8.jpg" },
  ];

  // Filter products based on selected category
  const filteredProducts = filterKey === "*" 
    ? products 
    : products.filter((p) => p.categories.includes(filterKey));

  return (
    <>
      <div className="filters clearfix mb-4">
        <ul className="filter-tabs filter-btns clearfix">
          <li className={getFilterClass("*")} onClick={() => handleFilterKeyChange("*")}>All</li>
          <li className={getFilterClass("cat-1")} onClick={() => handleFilterKeyChange("cat-1")}>Compass</li>
          <li className={getFilterClass("cat-2")} onClick={() => handleFilterKeyChange("cat-2")}>Reel</li>
          <li className={getFilterClass("cat-3")} onClick={() => handleFilterKeyChange("cat-3")}>Steering</li>
          <li className={getFilterClass("cat-4")} onClick={() => handleFilterKeyChange("cat-4")}>Jacket</li>
          <li className={getFilterClass("cat-5")} onClick={() => handleFilterKeyChange("cat-5")}>Binocular</li>
        </ul>
      </div>

      <div className="items-container row">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className={`product-block masonry-item all ${product.categories.join(" ")} col-lg-4 col-md-6 col-sm-12`}
          >
            <div className="inner-box">
              <div className="image">
                <Link href="/shop-product-details">
                  <img className="w-100" src={product.img} alt={product.title} />
                </Link>
              </div>
              <div className="content">
                <h4>
                  <Link href="/shop-product-details">{product.title}</Link>
                </h4>
                <span className="price">{product.price}</span>
                <span className="rating">
                  {Array(5).fill(0).map((_, i) => (
                    <i key={i} className="fa fa-star" />
                  ))}
                </span>
              </div>
              <div className="icon-box">
                <Link href="/shop-product-details" className="ui-btn like-btn">
                  <i className="fa fa-heart" />
                </Link>
                <Link href="/shop-cart" className="ui-btn add-to-cart">
                  <i className="fa fa-shopping-cart" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}