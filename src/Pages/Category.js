import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";

export function Categoty(){
    return(
        <>
        <SBrandCrumbs/>
        <ItemDetails/>
        </>
    );
}

export function SBrandCrumbs(){
    return(
<div>
  <div className="breadcrumbs">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="breadcrumbs-content">
            <h1 className="page-title">Single Product</h1>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <ul className="breadcrumb-nav">
            <li><Link to={'/'} ><i className="lni lni-home" /> Home</Link></li>
            <li><Link to={'/'} >Shop</Link></li>
            <li>Single Product</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

    );
}

export function ItemDetails(){
    let cate = useLocation().pathname.split('/')[2];
    console.log(cate);

    let [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${cate}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data["products"]);
      });
  }, []);
    return(
<div>
  {/* Start Product Grids */}
  <section className="product-grids section">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-12">
          {/* Start Product Sidebar */}
          <div className="product-sidebar">
            {/* Start Single Widget */}
            <div className="single-widget search">
              <h3>Search Product</h3>
              <form action="#">
                <input type="text" placeholder="Search Here..." />
                <button type="submit"><i className="lni lni-search-alt" /></button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-12">
          <div className="product-grids-head">
            <div className="product-grid-topbar">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-8 col-12">
                  <div className="product-sorting">
                    <label htmlFor="sorting">Sort by:</label>
                    {/* <select className="form-control" id="sorting">
                      <option>Popularity</option>
                      <option>Low - High Price</option>
                      <option>High - Low Price</option>
                      <option>Average Rating</option>
                      <option>A - Z Order</option>
                      <option>Z - A Order</option>
                    </select> */}
                    {/* <h3 className="total-show-product">Showing: <span>1 - 12 items</span></h3> */}
                  </div>
                </div>
                <div className="col-lg-5 col-md-4 col-12">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button className="nav-link active" id="nav-grid-tab" data-bs-toggle="tab" data-bs-target="#nav-grid" type="button" role="tab" aria-controls="nav-grid" aria-selected="true"><i className="lni lni-grid-alt" /></button>
                      <button className="nav-link" id="nav-list-tab" data-bs-toggle="tab" data-bs-target="#nav-list" type="button" role="tab" aria-controls="nav-list" aria-selected="false"><i className="lni lni-list" /></button>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-grid" role="tabpanel" aria-labelledby="nav-grid-tab">
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
          <ul className="review" style={{ padding: 0, margin: 0, listStyle: "none" }}>
            {Array.from({ length: Math.round(value.rating) }).map((_, index) => (
              <li key={index} style={{ display: "inline-block", color: "#FFD700" }}>
                <i className="lni lni-star-filled" />
              </li>
            ))}
            {Array.from({ length: 5 - Math.round(value.rating) }).map((_, index) => (
              <li key={index} style={{ display: "inline-block", color: "#D3D3D3" }}>
                <i className="lni lni-star" />
              </li>
            ))}
            <li>
              <span style={{ marginLeft: "5px" }}>{value.rating} Review(s)</span>
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

                <div className="row">
                  <div className="col-12">
                    {/* Pagination */}
                    <div className="pagination left">
                      <ul className="pagination-list">
                        <li><a href="javascript:void(0)">1</a></li>
                        <li className="active"><a href="javascript:void(0)">2</a></li>
                        <li><a href="javascript:void(0)">3</a></li>
                        <li><a href="javascript:void(0)">4</a></li>
                        <li><a href="javascript:void(0)"><i className="lni lni-chevron-right" /></a></li>
                      </ul>
                    </div>
                    {/*/ End Pagination */}
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-list" role="tabpanel" aria-labelledby="nav-list-tab">
                <div className="row">
                {products.map((value) => {
                return (
                  <div className="col-lg-12 col-md-12 col-12">
                    {/* Start Single Product */}
                    <div className="single-product">
                      <div className="row align-items-center">
                        <div className="col-lg-4 col-md-4 col-12">
                          <div className="product-image">
                            <img src={value.images[0]} alt={value.title}  />
                            <div className="button">
                              <a href="product-details.html" className="btn"><i className="lni lni-cart" /> Add to
                                Cart</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-12">
                          <div className="product-info">
                            <span className="category">{value.category}</span>
                            <h4 className="title">
                              <a href="product-grids.html">{value.title}</a>
                            </h4>
                            <ul className="review">
                              <li><i className="lni lni-star-filled" /></li>
                              <li><i className="lni lni-star-filled" /></li>
                              <li><i className="lni lni-star-filled" /></li>
                              <li><i className="lni lni-star-filled" /></li>
                              <li><i className="lni lni-star" /></li>
                              <ul className="review">
                      {Array.from({ length: Math.round(value.rating) }).map((_, index) => (
                        <li key={index}><i className="lni lni-star-filled" /></li>
                      ))}
                      {Array.from({ length: 5 - Math.round(value.rating) }).map((_, index) => (
                        <li key={index}><i className="lni lni-star" /></li>
                      ))}
                      <li><span>{value.rating} Review(s)</span></li>
                    </ul>
                            </ul>
                            <div className="price">
                              <span>${value.price}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Product */}
                  </div>
                  );
                })}
                </div>
                <div className="row">
                  <div className="col-12">
                    {/* Pagination */}
                    <div className="pagination left">
                      <ul className="pagination-list">
                        <li><a href="javascript:void(0)">1</a></li>
                        <li className="active"><a href="javascript:void(0)">2</a></li>
                        <li><a href="javascript:void(0)">3</a></li>
                        <li><a href="javascript:void(0)">4</a></li>
                        <li><a href="javascript:void(0)"><i className="lni lni-chevron-right" /></a></li>
                      </ul>
                    </div>
                    {/*/ End Pagination */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Product Grids */}
</div>

    );
}