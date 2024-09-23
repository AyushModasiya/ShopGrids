import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function SearchResult() {
  return (
    <>
      <Result />
    </>
  );
}

export function Result() {
  let query = new URLSearchParams(useLocation().search).get("query");
  let [products, setProducts] = useState([]);

  useEffect(() => {
    if (query) {
      fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
        })
        .catch((error) => console.error("Error fetching products:", error));
    }
  }, [query]); // Add 'query' as a dependency to refetch data on query change

  console.log(products);

  return (
    <div>
      <section className="trending-product section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Search Products</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {products.map((value) => (
              <div key={value.id} className="col-lg-3 col-md-6 col-12">
                {/* Start Single Product */}
                <div
                  className="single-product"
                  style={{
                    height: "450px", // Set a fixed height for each card
                    display: "flex",
                    flexDirection: "column", // Make the card a column container
                    justifyContent: "space-between", // Space the elements evenly
                  }}
                >
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
                        width: "auto",
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
                  <div
                    className="product-info"
                    style={{
                      padding: "15px", // Add padding to the product info
                      textAlign: "center", // Center align text
                    }}
                  >
                    <span className="category">{value.category}</span>
                    <h4 className="title">
                      <Link to={`/shopSingle/${value.id}`}>{value.title}</Link>
                    </h4>
                    <ul
                      className="review"
                      style={{ padding: 0, margin: 0, listStyle: "none" }}
                    >
                      {Array.from({ length: Math.round(value.rating) }).map(
                        (_, index) => (
                          <li
                            key={index}
                            style={{
                              display: "inline-block",
                              color: "#FFD700",
                            }}
                          >
                            <i className="lni lni-star-filled" />
                          </li>
                        )
                      )}
                      {Array.from({ length: 5 - Math.round(value.rating) }).map(
                        (_, index) => (
                          <li
                            key={index}
                            style={{
                              display: "inline-block",
                              color: "#D3D3D3",
                            }}
                          >
                            <i className="lni lni-star" />
                          </li>
                        )
                      )}
                      <li>
                        <span style={{ marginLeft: "5px" }}>
                          {value.rating} Review(s)
                        </span>
                      </li>
                    </ul>
                    <div className="price">
                      <span>${value.price}</span>
                    </div>
                  </div>
                </div>
                {/* End Single Product */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
