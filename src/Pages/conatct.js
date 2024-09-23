import { Link } from 'react-router-dom';

export default function Conatct() {
  return (
    <>
      <CBrandCrumbs/>
      <ContactArea/>
    </>
  );
}

export function CBrandCrumbs(){
    return(
<div>
  <div className="breadcrumbs">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="breadcrumbs-content">
            <h1 className="page-title">Contact Us</h1>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <ul className="breadcrumb-nav">
            <li><Link to={'/'} ><i className="lni lni-home" /> Home</Link></li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
    );
}

export function ContactArea(){
    return(
        <div>
  <section id="contact-us" className="contact-us section">
    <div className="container">
      <div className="contact-head">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Contact Us</h2>
              <p>There are many variations of passages of Lorem
                Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
          </div>
        </div>
        <div className="contact-info">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
              <div className="single-info-head">
                {/* Start Single Info */}
                <div className="single-info">
                  <i className="lni lni-map" />
                  <h3>Address</h3>
                  <ul>
                    <li>India , Gujarat ,<br /> GJ, 380009, AHM.</li>
                  </ul>
                </div>
                {/* End Single Info */}
                {/* Start Single Info */}
                <div className="single-info">
                  <i className="lni lni-phone" />
                  <h3>Call us on</h3>
                  <ul>
                    <li><a href="tel:+18005554400">+1 234 567 89 00 (Toll free)</a></li>
                    <li><a href="tel:+321556667890">+123 45 678 9000</a></li>
                  </ul>
                </div>
                {/* End Single Info */}
                {/* Start Single Info */}
                <div className="single-info">
                  <i className="lni lni-envelope" />
                  <h3>Mail at</h3>
                  <ul>
                    <li><a href="mailto:support@shopgrids.com">eshop@gmail.com</a>
                    </li>
                    <li><a href="mailto:career@shopgrids.com">shopgrids@gmail.com</a></li>
                  </ul>
                </div>
                {/* End Single Info */}
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12">
              <div className="contact-form-head">
                <div className="form-main">
                  <form className="form" method="post" action="assets/mail/mail.php">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <input name="name" type="text" placeholder="Your Name" required="required" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <input name="subject" type="text" placeholder="Your Subject" required="required" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <input name="email" type="email" placeholder="Your Email" required="required" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <input name="phone" type="text" placeholder="Your Phone" required="required" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group message">
                          <textarea name="message" placeholder="Your Message" defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group button">
                          <button type="submit" className="btn ">Submit Message</button>
                        </div>
                      </div>
                    </div>
                  </form>
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