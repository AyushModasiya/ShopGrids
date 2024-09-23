import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  let [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handelSearchproduct(event) {
    event.preventDefault(); 
    if (query.trim()) {
      navigate(`/searchResult?query=${query}`);
    }
  }

  return (
    <div>
      <header className="header navbar-area">
        {/* Start Header Middle */}
        <div className="header-middle">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-7">
                {/* Start Header Logo */}
                <Link className="navbar-brand" to={"/"}>
                  <img src="../assets/images/logo/logo.svg" alt="Logo" />
                </Link>
                {/* End Header Logo */}
              </div>
              <div className="col-lg-5 col-md-7 d-xs-none">
                {/* Start Main Menu Search */}
                <div className="main-menu-search">
                  <form onSubmit={handelSearchproduct}>
                    {/* navbar search start */}
                    <div className="navbar-search search-style-5">
                      <div className="search-select"></div>
                      <div className="search-input">
                        <input
                          type="text"
                          placeholder="Search"
                          onChange={(e) => setQuery(e.target.value)}
                          value={query} // Keep input controlled with query state
                        />
                      </div>
                      <div className="search-btn">
                        <button type="submit"> {/* Set type to "submit" */}
                          <i className="lni lni-search-alt" />
                        </button>
                      </div>
                    </div>
                    {/* navbar search Ends */}
                  </form>
                </div>
                {/* End Main Menu Search */}
              </div>
              <div className="col-lg-4 col-md-2 col-5">
                <div className="middle-right-area">
                  <div className="nav-hotline">
                    <i className="lni lni-phone" />
                    <h3>
                      Hotline:
                      <span>(+100) 123 456 7890</span>
                    </h3>
                  </div>
                  <div className="navbar-cart">
                    <div className="wishlist">
                      <a href="javascript:void(0)">
                        <i className="lni lni-heart" />
                      </a>
                    </div>
                    <div className="cart-items">
                      <a href="javascript:void(0)" className="main-btn">
                        <i className="lni lni-cart" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Header Middle */}
        {/* Start Header Bottom */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-6 col-12">
              <div className="nav-inner">
                {/* Start Mega Category Menu */}
                {/* End Mega Category Menu */}
                {/* Start Navbar */}
                <nav className="navbar navbar-expand-lg">
                  <button
                    className="navbar-toggler mobile-menu-btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                  </button>
                  <div
                    className="collapse navbar-collapse sub-menu-bar"
                    id="navbarSupportedContent"
                  >
                    <ul id="nav" className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <Link to={"/"} className="active" aria-label="Toggle navigation">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a
                          className="dd-menu collapsed"
                          href="javascript:void(0)"
                          data-bs-toggle="collapse"
                          data-bs-target="#submenu-1-2"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          Pages
                        </a>
                        <ul className="sub-menu collapse" id="submenu-1-2">
                          <li className="nav-item">
                            <Link to={"/aboutUs"}>About Us</Link>
                          </li>
                          <li className="nav-item">
                            <Link to={"/faq"}>Faq</Link>
                          </li>
                          <li className="nav-item">
                            <Link to={"/404Eror"}>404 Error</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a
                          className="dd-menu collapsed"
                          href="javascript:void(0)"
                          data-bs-toggle="collapse"
                          data-bs-target="#submenu-1-3"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          Shop
                        </a>
                        <ul className="sub-menu collapse" id="submenu-1-3">
                          <li className="nav-item">
                            <Link to={"/ShopGrid"}>Shop Grid</Link>
                          </li>
                          {/* <li className="nav-item"><Link to={'/shopSingle/:id'} >shop Single</Link></li> */}
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link to={"/contact"} aria-label="Toggle navigation">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>{" "}
                  {/* navbar collapse */}
                </nav>
                {/* End Navbar */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Nav Social */}
              <div className="nav-social">
                <ul>
                  <li className="nav-item">
                    <Link to={"/login"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/register"}>Register</Link>
                  </li>
                </ul>
              </div>
              {/* End Nav Social */}
            </div>
          </div>
        </div>
        {/* End Header Bottom */}
      </header>
    </div>
  );
}
