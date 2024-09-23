import React from "react";
import { Link } from "react-router-dom";

export default function Faq() {
  return (
    <>
      <FBrandCrumbs />
      <FAQArea />
    </>
  );
}

export function FBrandCrumbs() {
  return (
    <div>
      <div className="breadcrumbs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="breadcrumbs-content">
                <h1 className="page-title">FAQ</h1>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <ul className="breadcrumb-nav">
                <li>
                  <Link to={"/"}>
                    <i className="lni lni-home" /> Home
                  </Link>
                </li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FAQArea() {
  return (
    <div>
      <section className="faq section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>
                  Haven't found the answer?
                  <br /> Ask us your question.
                </h2>
                <p>
                  We normally respond within 2 business days. Most popular
                  questions will appear on this page.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-md-12 col-12">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span className="title">
                        What types of products do you offer?
                      </span>
                      <i className="lni lni-plus" />
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        We offer a wide variety of products across multiple
                        categories, including electronics, fashion, home
                        essentials, beauty products, sports equipment, and much
                        more. Our goal is to provide a diverse selection that
                        caters to all your shopping needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <span className="title">
                        How can I find a specific product?
                      </span>
                      <i className="lni lni-plus" />
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        You can use the search bar located at the top of our
                        website to look for specific products by name, category,
                        or brand. Additionally, you can browse through our
                        categories and use the filters to narrow down your
                        search results.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <span className="title">
                        Are the products on your website genuine?
                      </span>
                      <i className="lni lni-plus" />
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes, we only source products from trusted suppliers and
                        reputable brands to ensure authenticity and quality. We
                        stand behind the quality of our products and aim to
                        provide a satisfying shopping experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <span className="title">
                        What should I do if I receive a defective or incorrect
                        product?
                      </span>
                      <i className="lni lni-plus" />
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        We apologize for any inconvenience this may cause. If
                        you receive a defective or incorrect product, please
                        contact our customer service team immediately. We will
                        assist you in returning the product and arranging for a
                        replacement or refund.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      <span className="title">How do I create an account?</span>
                      <i className="lni lni-plus" />
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Creating an account is easy! Click on the "Sign Up"
                        button at the top of the page and fill in the required
                        information. Having an account allows you to track your
                        orders, save your favorite products, and enjoy a faster
                        checkout process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
