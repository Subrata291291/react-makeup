import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-dark.png'

const Header = () => {
  return (
    <header className="header_area w-100">
      <nav className="navbar navbar-expand-md shadow">
        <div className="container position-relative">
          {/* Logo */}
          <Link className="navbar-brand" to="/" title="Makeup" rel="home">
            <img src={logo} alt="" />
          </Link>

          {/* Toggle Button for Mobile */}
          <button className="navbar-toggler p-0 border-0" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            <div className="navbar_icon">
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </button>

          {/* Navbar Items */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-auto mb-lg-0 primary_nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Offcanvas for Mobile */}
          <div className="offcanvas offcanvas-start d-lg-none d-md-none d-block" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                <Link className="navbar-brand" to="/">
                  <img src={logo} alt="" />
                </Link>
              </h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav ms-auto me-auto mb-lg-0 primary_nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/portfolio">Portfolio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">Blog</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Menu */}
          <ul className="right_menu">
            <li className="position-relative">
              {/* <div className="serach_box">
                <Link to="#"><i className="fa fa-search" aria-hidden="true"></i></Link>
              </div>
              <div className="cart_area position-relative">
                <Link to="#"><i className="fa fa-shopping-basket"></i></Link>
                <span>0</span>
              </div> */}
              <button className='btn button appointment_btn position-relative'>Book Appointment</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
