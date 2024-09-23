import React from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
        <LBrandsCrumbs/>
        <LoginArea/>
    </>
  );
}

export function LBrandsCrumbs(){
    return(
<div>
  <div className="breadcrumbs">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="breadcrumbs-content">
            <h1 className="page-title">Login</h1>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <ul className="breadcrumb-nav">
            <li><Link to={'/'} ><i className="lni lni-home" /> Home</Link></li>
            <li>Login</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

    );
}

export function LoginArea(){
    return(
<div>
  <div className="account-login section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
          <form className="card login-form" method="post">
            <div className="card-body">
              <div className="title">
                <h3>Login Now</h3>
                <p>You can login using your social media account or email address.</p>
              </div>
              <div className="social-login">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12"><a className="btn facebook-btn" href="javascript:void(0)"><i className="lni lni-facebook-filled" /> Facebook
                      login</a></div>
                  <div className="col-lg-4 col-md-4 col-12"><a className="btn twitter-btn" href="javascript:void(0)"><i className="lni lni-twitter-original" /> Twitter
                      login</a></div>
                  <div className="col-lg-4 col-md-4 col-12"><a className="btn google-btn" href="javascript:void(0)"><i className="lni lni-google" /> Google login</a>
                  </div>
                </div>
              </div>
              <div className="alt-option">
                <span>Or</span>
              </div>
              <div className="form-group input-group">
                <label htmlFor="reg-fn">Email</label>
                <input className="form-control" type="email" id="reg-email" required />
              </div>
              <div className="form-group input-group">
                <label htmlFor="reg-fn">Password</label>
                <input className="form-control" type="password" id="reg-pass" required />
              </div>
              <div className="d-flex flex-wrap justify-content-between bottom-content">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input width-auto" id="exampleCheck1" />
                  <label className="form-check-label">Remember me</label>
                </div>
                <a className="lost-pass" href="account-password-recovery.html">Forgot password?</a>
              </div>
              <div className="button">
                <button className="btn" type="submit">Login</button>
              </div>
              <p className="outer-link">Don't have an account? <Link to={'/register'} >Register here </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    );
}