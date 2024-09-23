import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
<div>
  <footer className="footer">
    {/* End Footer Top */}
    {/* Start Footer Middle */}
    <div className="footer-middle">
      <div className="container">
        <div className="bottom-inner">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              {/* Single Widget */}
              <div className="single-footer f-contact">
                <h3>Get In Touch With Us</h3>
                <p className="phone">Phone: +1 (900) 33 169 7720</p>
                <ul>
                  <li><span>Monday-Friday: </span> 9.00 am - 8.00 pm</li>
                  <li><span>Saturday: </span> 10.00 am - 6.00 pm</li>
                </ul>
                <p className="mail">
                  <a href="mailto:support@shopgrids.com">shopgrids@gmail.com</a>
                </p>
              </div>
              {/* End Single Widget */}
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              {/* Single Widget */}
              <div className="single-footer f-link">
                <h3>Information</h3>
                <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/aboutUs'}>About Us</Link></li>
                  <li><Link to={'/faq'}>FAQ</Link></li>
                  <li><Link to={'/shopGrid'}>ShopGrid</Link></li>
                  <li><Link to={'/contact'}>Conatct</Link></li>
                </ul>
              </div>
              {/* End Single Widget */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Single Widget */}
              <div className="single-footer f-link">
                <h3>Shop Departments</h3>
                <ul>
                  <li><a href="javascript:void(0)">Computers &amp; Accessories</a></li>
                  <li><a href="javascript:void(0)">Smartphones &amp; Tablets</a></li>
                  <li><a href="javascript:void(0)">TV, Video &amp; Audio</a></li>
                  <li><a href="javascript:void(0)">Cameras, Photo &amp; Video</a></li>
                  <li><a href="javascript:void(0)">Headphones</a></li>
                </ul>
              </div>
              {/* End Single Widget */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>
  )
}
