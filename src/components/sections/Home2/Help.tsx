"use client";
import React, { useState } from "react";

const donationAmounts = [50, 60, 70, 80, 90, 100];
const HelpDonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | string>(100);
  const [customAmount, setCustomAmount] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = selectedAmount === "custom" ? customAmount : selectedAmount;
    console.log({
      amount,
    });
  };

  return (
    <section className="help-donation-section-2 fix">
      <div className="container">
        <div className="help-donation-wrapper">
          <div className="row g-0">
            <div className="col-xl-5 col-lg-6 order-2 order-lg-1">
              <div className="help-donation-image fix">
                <img
                  className="wow img-custom-anim-left"
                  src="/assets/images/resource/help-donation-image-2-1.jpg"
                  alt="donation"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 order-1 order-lg-2">
              <div className="donation-form-box-items2">
                <div className="sec-title mb-0">
                  <div className="sec-sub-title color-2">
                    <h6 className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                      Help & Donate
                    </h6>
                  </div>
                  <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                    Your Small Contribution <br />
                    Can Save a Life
                  </h2>
                </div>
                <form
                  className="wow fadeInUp"
                  data-wow-delay=".3s"
                  onSubmit={handleSubmit}>
                  <div className="input-group-row">
                    <input type="text" placeholder="Enter Your name" required />
                    <input type="email" placeholder="Your Email" required />
                  </div>
                  <div className="amount-selection">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        className={`amount-item ${
                          selectedAmount === amount ? "active" : ""
                        }`}
                        onClick={() => setSelectedAmount(amount)} >
                        ${amount}
                      </button>
                    ))}
                    <button
                      type="button"
                      className={`amount-item ${
                        selectedAmount === "custom" ? "active" : ""
                      }`}
                      onClick={() => setSelectedAmount("custom")}>
                      Custom
                    </button>
                  </div>
                  {selectedAmount === "custom" && (
                    <input
                      type="number"
                      placeholder="Enter Custom Amount"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      style={{ marginTop: "15px" }}
                    />
                  )}
                  <button type="submit" className="theme-btn">
                    Submit Donation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpDonationSection;