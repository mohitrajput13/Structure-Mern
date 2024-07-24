import React from "react";
import { imagePath } from "../constants/imagePath";
import "../styles/commonStyles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="navbar-main-section">
          <div className="container">
            <div className="navbar">
              <div className="logo">
                <img src={imagePath.Logo} alt="" />
              </div>
              <div className="navbar-list d-flex align-items-center">
                <ul className="fontSize15_bluishBlack">
                  <Link to="/about">
                    <li>About Us</li>
                  </Link>
                  <Link to="/services">
                    <li>Services</li>
                  </Link>
                  <Link to="/working">
                    <li>How it works</li>
                  </Link>
                  <Link to="/pricing">
                    <li>Pricing</li>
                  </Link>
                  <Link to="/testimonials">
                    <li>Testimonials</li>
                  </Link>
                  <Link to="/blog">
                    <li>Blog</li>
                  </Link>
                  <Link to="/contact">
                    <li>Contact Us</li>
                  </Link>
                </ul>

                <div className="navbar-buttons">
                  <a href="">
                    <p className="fontSize16_Green">Sign up</p>
                  </a>
                  <button className="btn-style">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
