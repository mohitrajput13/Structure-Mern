import React from "react";
import { imagePath } from "../constants/imagePath";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="footer-section">
          <div className="container">
            <div className="footer-main-section">
              <div className="footer-content">
                <img src={imagePath.Logo} id="logo" />
                <p className="fontSize15_black" id="footer-content">
                  AngiesHelpers.com is a property management company for Airbnb
                  and long-term rentals, combining on-site support with 24/7
                  offshore assistance for seamless operations.
                </p>
                <div className="social-network-links">
                  <div className="social-background">
                    <a href="https://www.facebook.com/"><img src={imagePath.Facebook} /></a>
                  </div>
                  <div className="social-background">
                    <a href="https://x.com/"><img src={imagePath.Twitter} /></a>
                  </div>
                  <div className="social-background">
                    <a href="https://in.linkedin.com/"><img src={imagePath.Linkedin} /></a>
                  </div>
                  <div className="social-background">
                 <a href="https://www.instagram.com/"> <img src={imagePath.Instagram} /></a>
                  </div>
                </div>
              </div>

              <div className="footer-services">
                <h4 className="fontSize18_darkBlue">Services</h4>
                <div id="gap">
                  <ul className="fontSize14_blue">
                    <li>Airbnb Manangement</li>
                    <li>Long-Term Rentals</li>
                    <li>On-site Assistance</li>
                    <li>24/7 Offshore Support</li>
                    <li>Customize Services</li>
                  </ul>
                </div>
              </div>

              <div className="footer-services">
                <h4 className="fontSize18_darkBlue">Company</h4>
                <div id="gap">
                  <ul className="fontSize14_blue">
                    <Link to="/about">
                      <li>About Us</li>
                    </Link>
                    <Link to="">
                      <li>How it works</li>
                    </Link>
                    <Link to="/testimonials">
                      <li>Testimonials</li>
                    </Link>
                    <Link to="/contact">
                      <li>Contact Us</li>
                    </Link>
                    <Link to="/pricing">
                      <li>Our Pricing</li>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="footer-services">
                <h4 className="fontSize18_darkBlue">Other Links</h4>
                <div id="gap">
                  <ul className="fontSize14_blue">
                    <li>Client Portal</li>
                    <li>Blogs & News</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>FAQ’s</li>
                  </ul>
                </div>
              </div>

              <div className="footer-newsletter">
                <h4 className="fontSize18_darkBlue">Join our newsletter</h4>
                <div id="gap" className="newsletter">
                  <p className="fontSize14_blue">
                    Sign up for updates on property tips, deals, articles, and
                    more from AngiesHelpers.com!
                  </p>
                  <input placeholder="Enter email address" className="input" />
                  <button className="btn-style" id="form-button">
                    Send
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div className="copyright-section">
              <div className="fontSize14_brown">
                Copyright © 2024 AgiesHelpers. All rights reserved.
              </div>
              <div className="company-contact">
                <h5 className="fontSize15_bluish ">
                  <img src={imagePath.PhoneCall} /> 1-548-634-5896
                </h5>
                <hr className="vertical-line" />
                <h5 className="fontSize15_bluish ">
                  <img src={imagePath.Mail} /> angieshelpers@gmail.com
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
