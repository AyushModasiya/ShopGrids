import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Example category; adjust as needed
export default function Home() {
  return (
    <>
      <HeroArea />
      <Product />
    </>
  );
}

export function HeroArea() {
  return (
    <div>
      {/* Start Hero Area */}
      <section className="hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 custom-padding-right">
              <div className="slider-head">
                {/* Start Hero Slider */}
                <div className="hero-slider">
                  {/* Start Single Slider */}
                  <div
                    className="single-slider"
                    style={{
                      backgroundImage: "url(assets/images/hero/slider-bg1.jpg)",
                    }}
                  >
                    <div className="content">
                      <h2>
                        <span>No restocking fee ($35 savings)</span>
                        M75 Sport Watch
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur elit, sed do
                        eiusmod tempor incididunt ut labore dolore magna aliqua.
                      </p>
                      <h3>
                        <span>Now Only</span> $320.99
                      </h3>
                      <div className="button">
                        <a href="product-grids.html" className="btn">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* End Single Slider */}
                </div>
                {/* End Hero Slider */}
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="row">
                <div className="col-lg-12 col-md-6 col-12 md-custom-padding">
                  {/* Start Small Banner */}
                  <div
                    className="hero-small-banner"
                    style={{
                      backgroundImage:
                        'url("assets/images/hero/slider-bnr.jpg")',
                    }}
                  >
                    <div className="content">
                      <h2>
                        <span>New line required</span>
                        iPhone 12 Pro Max
                      </h2>
                      <h3>$259.99</h3>
                    </div>
                  </div>
                  {/* End Small Banner */}
                </div>
                <div className="col-lg-12 col-md-6 col-12">
                  {/* Start Small Banner */}
                  <div className="hero-small-banner style2">
                    <div className="content">
                      <h2>Weekly Sale!</h2>
                      <p>
                        Saving up to 50% off all online store items this week.
                      </p>
                      <div className="button">
                        <a className="btn" href="product-grids.html">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Start Small Banner */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Area */}
    </div>
  );
}

export function Product() {
  let [product1, setProduct1] = useState([]);
  let [product2, setProduct2] = useState([]);
  let [product3, setProduct3] = useState([]);
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/smartphones")
      .then((res) => res.json())
      .then((data) => {
        setProduct1(data.products);
      });
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/laptops")
      .then((res) => res.json())
      .then((data) => {
        setProduct2(data.products);
      });
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/tablets")
      .then((res) => res.json())
      .then((data) => {
        setProduct3(data.products);
      });
  }, []);

  useEffect(() => {
    // Merge all categories data into the products array
    setProducts([...product1, ...product2, ...product3]);
  }, [product1, product2, product3]);

  return (
    <div>
      <section className="trending-product section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Trending Products</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {products.map((value) => {
              return (
                <div key={value.id} className="col-lg-3 col-md-6 col-12">
                  {/* Start Single Product */}
                  <div className="single-product">
                    <div
                      className="product-image"
                      style={{
                        height: "300px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden",
                        backgroundColor: "transparent", // Set to transparent
                      }}
                    >
                      <img
                        src={value.images[0]}
                        alt={value.title}
                        style={{
                          width: "auto", // Maintain image width
                          height: "100%", // Make sure image fills the height
                          objectFit: "contain", // Contain image within the container
                          backgroundColor: "transparent", // Ensure image has no background
                        }}
                      />
                      <div className="button">
                        <Link to={`/shopSingle/${value.id}`} className="btn">
                          <i className="lni lni-cart" /> Quick View
                        </Link>
                      </div>
                    </div>
                    <div className="product-info">
                      <span className="category">{value.category}</span>
                      <h4 className="title">
                        <a href="product-grids.html">{value.title}</a>
                      </h4>
                      <ul className="review">
                        {Array.from({ length: Math.round(value.rating) }).map(
                          (_, index) => (
                            <li key={index}>
                              <i className="lni lni-star-filled" />
                            </li>
                          )
                        )}
                        {Array.from({
                          length: 5 - Math.round(value.rating),
                        }).map((_, index) => (
                          <li key={index}>
                            <i className="lni lni-star" />
                          </li>
                        ))}
                        <li>
                          <span>{value.rating} Review(s)</span>
                        </li>
                      </ul>
                      <div className="price">
                        <span>${value.price}</span>
                      </div>
                    </div>
                  </div>
                  {/* End Single Product */}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
