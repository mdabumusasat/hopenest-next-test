"use client";
import React, { useState } from "react";
const donationAmounts = ["$50", "$60", "$70", "$80", "$90", "$100"];
const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState("$100");
  const [customAmount, setCustomAmount] = useState("");

  const handleAmountClick = (amount: string) => {
    if (amount === "") {
      setSelectedAmount("");
    } else {
      setSelectedAmount(amount);
      setCustomAmount("");
    }
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(e.target.value);
  };

  return (
    <section className="donation-section section-bg fix section-padding">
      <div className="donation-image fix">
        <img data-speed=".8" src="/assets/images/resource/donation-image.jpg" alt="Donation" />
      </div>
      <div className="shape-1 d-none d-xl-block">
        <img src="/assets/images/icons/shape1-1.png" alt="Shape" />
      </div>
      <div className="shape-2 d-none d-xl-block">
        <img src="/assets/images/icons/shape1-2.png" alt="Shape" />
      </div>
      <div className="shape-3 d-none d-xl-block">
        <img src="/assets/images/icons/shape1-3.png" alt="Shape" />
      </div>
      <div className="container">
        <div className="row g-0">
          <div className="col-xl-5 col-lg-6">
            <div className="donation-content-items">
              <div className="hand-shape">
                <img src="/assets/images/icons/hand-shape.png" alt="Hand" />
              </div>
              <div className="sec-title mb-0">
                <div className="sec-sub-title">
                  <h6 className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle color-2">
                    Help & Donate
                  </h6>
                </div>
                <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim text-white">
                  Your Small Contribution Can Change a Life
                </h2>
              </div>
              <p className="text wow fadeInUp" data-wow-delay=".3s">
                Your generous donations help us maintain our masjid, provide community services, and educate future generations. Every contribution counts and is greatly appreciated.
              </p>
              <div className="client-info-items wow fadeInUp" data-wow-delay=".5s">
                <div className="client-image">
                  <img src="/assets/images/resource/client-1-1.jpg" alt="img" className="icon-1" />
                  <img src="/assets/images/resource/client-1-2.jpg" alt="img" className="icon-2" />
                  <img src="/assets/images/resource/client-1-3.jpg" alt="img" className="icon-3" />
                  <img src="/assets/images/resource/client-1-4.jpg" alt="img" className="icon-4" />
                  <div className="plus-icon">
                    <i className="fa-regular fa-plus"></i>
                  </div>
                </div>
                <h3 className="price">$4,599</h3>
                <h6 className="supporter-text">$3,250 raised by supporters</h6>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="donation-form-box-items">
              <h3 className="donation-title char-animation">Make Donation</h3>
              <form className="wow fadeInUp" data-wow-delay=".3s">
                <div className="input-group-row">
                  <input type="text" placeholder="Enter Your Name" />
                  <input type="email" placeholder="Your Email" />
                </div>
                <input type="text" placeholder="Company Name (Optional)" className="full-width" />
                <input
                  type="text"
                  value={selectedAmount || customAmount}
                  id="selected-amount"
                  className="full-width amount-input"
                  onChange={handleCustomChange}
                  placeholder="$100"/>
                <div className="amount-selection">
                  {donationAmounts.map((amount) => (
                    <div
                      key={amount}
                      className={`amount-item ${selectedAmount === amount ? "active" : ""}`}
                      data-amount={amount}
                      onClick={() => handleAmountClick(amount)}>
                      {amount}
                    </div>
                  ))}
                  <div
                    className={`amount-item ${selectedAmount === "" ? "active" : ""}`}
                    data-amount=""
                    onClick={() => handleAmountClick("")}>
                    Custom
                  </div>
                </div>
                <button type="submit" className="theme-btn">
                  Submit Donation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;