import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-dark.png';

const Footer = () => {
  return (
    <footer className="footer_area aos-init aos-animate" data-aos="fade-up">
      <div className="container">
        <div className="row">
          {/* Logo and Social */}
          <div className="col-lg-3 col-md-12 col-12">
            <div className="footer_box">
              <Link to="/">
                <img
                  src={logo}
                  alt="Makeup"
                />
              </Link>
              <p>
                At Nandita Halder’s Makeup Studio, we believe that beauty is personal,
                and your makeup should reflect your unique style, personality, and occasion.
              </p>
              <ul className="d-flex align-items-center social_links mt-5">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61561602745165&amp;mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61561602745165&amp;mibextid=ZbWKwL"><i className="fab fa-instagram"></i></a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61561602745165&amp;mibextid=ZbWKwL"><i className="fab fa-youtube"></i></a>
                </li>
              </ul>
            </div>
          </div>

          {/* Work Time */}
          <div className="col-lg-4 col-md-12 col-12 offset-lg-1">
            <div className="work_time">
              <h3 className="footer-title">Work Time</h3>
              <ul>
                <li>
                  <div className="tit">Monday - Friday</div>
                  <div className="dots" /> <span>8:00 AM - 7:00 PM</span>
                </li>
                <li>
                  <div className="tit">Saturday</div>
                  <div className="dots" /> <span>9:00 AM - 6:00 PM</span>
                </li>
                <li>
                  <div className="tit">Sunday</div>
                  <div className="dots" /> <span style={{ color: '#db0f73' }}>Full Day</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Details */}
          <div className="col-lg-3 offset-lg-1">
            <div className="contact_details">
              <h3 className="footer-title">Contact Us</h3>
              <ul>
                <li><p>Kestopur, near Mridha Market, Kolkata - 700159</p></li>
                <li><p><a href="tel:7001906952">7001906952</a></p></li>
                <li><p><a href="mailto:nanditabagchi260@gmail.com">nanditabagchi260@gmail.com</a></p></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="col-12">
          <div className="copyright text-center mt-4">
            <p>
              Copyright <span style={{ color: '#db0f73' }}>@</span> 2024 Makeover By Nandita.
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
