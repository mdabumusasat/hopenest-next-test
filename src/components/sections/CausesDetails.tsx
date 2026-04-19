"use client";
import React from "react";
import Link from "next/link";

const servicesSidebar = [
  "Education Support",
  "Medical Aid",
  "Food & Hunger Relief",
  "Orphan & Child Welfare",
  "Disaster & Emergency Relief",
  "Clean Water & Sanitation",
];

const ServicesDetails = () => {
  return (
    <>
		<section className="services-details pt-120 pb-60">
			<div className="container">
			<div className="row">
				<div className="col-xl-4 col-lg-4">
				<div className="service-sidebar">
					<div className="sidebar-widget service-sidebar-single">
					<div className="sidebar-service-list">
						<ul>
						{servicesSidebar.map((service, idx) => (
							<li key={idx} className={idx === 1 ? "current" : ""}>
							<Link href="/page-causes-details">
								<i className="fas fa-angle-right"></i>
								<span>{service}</span>
							</Link>
							</li>
						))}
						</ul>
					</div>
					<div className="service-details-help">
						<div className="help-shape-1"></div>
						<div className="help-shape-2"></div>
						<h2 className="help-title">
						Contact with <br /> us for any <br /> advice
						</h2>
						<div className="help-icon">
						<span className="lnr-icon-phone-handset"></span>
						</div>
						<div className="help-contact">
						<p>Need help? Talk to an expert</p>
						<Link href="#">+892 (123) 112-9999</Link>
						</div>
					</div>
					</div>
				</div>
				</div>
				<div className="col-xl-8 col-lg-8">
				<div className="services-details__content">
					<img
					src="/assets/images/resource/service-details.jpg"
					alt="Service Details"
					className="w-100"
					/>
					<h3 className="mt-4 font-weight-700">Donation Causes Overview</h3>
					<p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
					<p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged Lorem ipsum dolor sit amet consec tetur adipis icing elit</p>
					<div className="content mt-40">
					<div className="text">
						<h3 className="font-weight-700">Donation Causes Center</h3>
                      <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                      <blockquote className="blockquote-one">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod remaining essentially unchanged Lorem ipsum dolor sit amet consec tetur</blockquote>
					</div>
					</div>
				</div>
				</div>
			</div>
			</div>
		</section>
		<section className="help-donation-section-2 section-bg fix pb-120 pt-80">
			<div className="container">
			<div className="help-donation-wrapper">
				<div className="row g-0">
				<div className="col-xl-5 col-lg-6 order-2 order-lg-1 wow fadeIn" data-wow-duration="1500ms">
					<div className="help-donation-image fix">
					<img
						src="/assets/images/resource/help-donation-image-2-1.jpg"
						alt="Help Donation"
					/>
					</div>
				</div>
				<div className="col-xl-7 col-lg-6 order-1 order-lg-2">
					<div className="donation-form-box-items2 wow fadeIn" data-wow-duration="1500ms">
					<div className="sec-title mb-0">
						<div className="sec-sub-title color-2">
						<h6 className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">Help & Donate</h6>
						</div>
						<h2 className="title tx-title sec_title">
						Your Small Contribution <br /> Can Save a Life
						</h2>
					</div>
					<form>
						<div className="input-group-row">
						<input type="text" placeholder="Enter Your Name" />
						<input type="email" placeholder="Your Email" />
						</div>
						<div className="amount-selection">
						{["$50", "$60", "$70", "$80", "$90", "$100", "Custom"].map((amt) => (
							<button
							key={amt}
							type="button"
							className={`amount-item ${amt === "$100" ? "active" : ""}`}
							data-amount={amt}>
							{amt}
							</button>
						))}
						</div>
						<button type="submit" className="theme-btn">Submit Donation</button>
					</form>
					</div>
				</div>
				</div>
			</div>
			</div>
		</section>
    </>
  );
};

export default ServicesDetails;