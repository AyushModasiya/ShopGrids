import React from "react";

import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
    <Error404/>
    </>
  );
}

export function Error404() {
  return (
    <div>
      <div class="error-area">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="container">
              <div class="error-content">
              <div className="single-slider" style={{backgroundImage: 'url(assets/images/error/404-bg.jpg)'}}>
                <h1>404</h1>
                <h2>Oops! Page Not Found!</h2>
                <p>
                  The page you are looking for does not exist. It might have
                  been moved or deleted.
                </p>
                <div class="button">
                  <Link to={"/"} class="btn">
                    Back to Home
                  </Link>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

