"use client";
import React from "react";
import Link from "next/link";

const ProjectDetails = () => {
  return (
      <section className="project-details pt-120 pb-70">
        <div className="auto-container">
          <div className="row">
            <div className="col-xl-7 col-lg-8 mb-5 mb-lg-0">
              <div className="sec-title black mb-40">
                <div className="sec-sub-title">
                  <h6 className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">About The Project</h6>
                </div>
                <h2 className="title tx-title sec_title  tz-itm-title tz-itm-anim mb-20">Every Donation Becomes a Measurable Change</h2>
                <p className="text wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Sed ut perspiciatis unde omniste natus voluptatem accusantiume rem  aperia eaque ipsa quae abillo inventore veritatis quasi architecto beatae vitae dicta sunt explicabo. Nemo enim epsam voluptatem quia voluptas aspernatur odites sed quia consequunture</p>
              </div>
              <div className="project-details-btn">
                <Link className="theme-btn-main" href="/page-causes-details">
                  <span className="theme-btn">Donate Now</span>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 offset-xl-1 col-lg-4">
              <div className="project-details__content-right mt-0">
                <div className="project-details__details-box rounded-0">
                  <ul className="list-unstyled project-details__details-list">
                    <li>
                      <h4 className="project-details__name mb-2">Events</h4>
                      <p className="project-details__client">Beacon Hall, Boston</p>
                    </li>
                    <li>
                      <h4 className="project-details__name mb-2">Event Type</h4>
                      <p className="project-details__client">Pop-Up Awareness Event</p>
                    </li>
                    <li>
                      <h4 className="project-details__name mb-2">Date</h4>
                      <p className="project-details__client">25 October 2026</p>
                    </li>
                    <li>
                      <h4 className="project-details__name mb-2">Website</h4>
                      <p className="project-details__client"><Link href="#">yourdomain.com</Link></p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5 mb-lg-0">
            <div className="col-lg-4 col-md-6">
              <div className="project-details__top mt-5">
                <div className="project-details__img"> <img className="rounded-0" src="/assets/images/resource/project-details-1.jpg" alt=""/> </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="project-details__top mt-5">
                <div className="project-details__img"> <img className="rounded-0" src="/assets/images/resource/project-details-2.jpg" alt=""/> </div>
              </div>
            </div>
          </div>
          <div className="row align-items-lg-center">
            <div className="col-lg-6">
              <div className="sec-title black mb-40">
                <h2 className="title mb-30 wow splt-txt" data-splitting>1 hour of volunteering <br className="d-none d-lg-block"/> can change a life</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-details__top mt-lg-5">
                <div className="text mb-40">Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter</div>
                <ul className="project-list mb-5">
                  <li className="d-flex align-items-center"><i className="icon fa-classic fa-solid fa-check fa-fw"></i> Together, We Turn Ideas Into Action</li>
                  <li className="d-flex align-items-center"><i className="icon fa-classic fa-solid fa-check fa-fw"></i> Small Actions Add Up to Transform Lives</li>
                  <li className="d-flex align-items-center"><i className="icon fa-classic fa-solid fa-check fa-fw"></i> Your Support Makes Every Solution Possible</li>
                  <li className="d-flex align-items-center"><i className="icon fa-classic fa-solid fa-check fa-fw"></i> From Strategy to Stories of Change</li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="mt-4 mb-5 mb-lg-0"/>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="sec-title black mb-40">
                <h2 className="title mb-30 wow splt-txt" data-splitting>The Results of <br className="d-none d-lg-block"/> Our Event</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-details__top mt-lg-5">
                <div className="text mb-40">Will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness rejects, dislikes, or avoids pleasure </div>
                <div className="project-list-item mb-5">
                  <h5 className="title"><i className="icon fa-classic fa-solid fa-circle-check fa-fw mr-15"></i> Support Orphans</h5>
                  <div className="text">Sed ut perspiciatis unde omnis natus voluptatem accusantium doloremque laudantium, totam rem aperiam inventore</div>
                </div>
                <div className="project-list-item">
                  <h5 className="title"><i className="icon fa-classic fa-solid fa-circle-check fa-fw mr-15"></i> Solve problems</h5>
                  <div className="text">Sed ut perspiciatis unde omnis natus voluptatem accusantium doloremque laudantium, totam rem aperiam inventore</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="project-details__top mt-5">
                <div className="project-details__img"> <img className="rounded-0" src="/assets/images/resource/project-details-3.jpg" alt=""/> </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="project-details__top mt-5">
                <div className="project-details__img"> <img className="rounded-0" src="/assets/images/resource/project-details-4.jpg" alt=""/> </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="project-details__pagination-box">
                <ul className="project-details__pagination list-unstyled">
                  <li className="next text-start">
                    <div className="content">Previous</div>
                    <h4 className="title"> <Link href="#">Together, We Build Lasting Hope</Link> </h4>
                  </li>
                  <li className="count"><Link href="#"></Link></li>
                  <li className="count"><Link href="#"></Link></li>
                  <li className="count"><Link href="#"><img src="/assets/images/resource/pagination-bar.png" alt=""/></Link></li>
                  <li className="count"><Link href="#"></Link></li>
                  <li className="count"><Link href="#"></Link></li>
                  <li className="previous text-end">
                    <div className="content">Next</div>
                    <h4 className="title"> <Link href="#">Your Support Delivers Results That Matter</Link></h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ProjectDetails;