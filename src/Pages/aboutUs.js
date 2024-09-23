import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <>
      <Brandcrumbs />
      <AboutArea />
    </>
  );
}

export function Brandcrumbs() {
  return (
    <div>
      <div className="breadcrumbs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="breadcrumbs-content">
                <h1 className="page-title">About Us</h1>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <ul className="breadcrumb-nav">
                <li>
                  <Link to={"/"}>
                    <i className="lni lni-home" /> Home
                  </Link>
                </li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AboutArea() {
  return (
    <div>
      <section className="about-us section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="content-left">
                <img src="assets/images/about/images.jpg" alt="#" />
                <a
                  href="https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM"
                  className="glightbox video"
                >
                  <i className="lni lni-play" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              {/* content-1 start */}
              <div className="content-right">
                <h2>ShopGrids - Your Trusted &amp; Reliable Partner.</h2>
                <p>
                  Welcome to ShopGrid , your one-stop destination for all your
                  shopping needs! We pride ourselves on offering a vast
                  collection of high-quality products that cater to every taste,
                  style, and budget. Whether you're looking for the latest
                  electronics, fashionable apparel, home essentials, or unique
                  gifts, we have something for everyone.
                </p>
                <p>
                  At ShopGrid , our mission is to provide a seamless and
                  enjoyable shopping experience to customers around the world.
                  We strive to bring you the best products from top brands and
                  trusted suppliers at competitive prices, all while ensuring
                  the highest standards of customer service.n ullamco laboris
                  nisi aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
