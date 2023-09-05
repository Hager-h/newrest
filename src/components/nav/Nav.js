import React from "react";
import logo from "./../../images/logo.png";
import { Link } from "react-router-dom";
import "./nav.css";
export default function Navs() {
  return (
    <>
      <div className={`sticky-top position-relative `}>
        <nav className={`navbar  navbar-expand-lg   bg-light `}>
          <div className="container">
            <img className="navbar-brand" src={logo} alt="" />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/
          "
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/explore">
                    Explore Foods
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/reviews">
                    Reviews
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/fAQ">
                    FAQ
                  </Link>
                </li>

                <button className="btn buttn nav-btn">1800 7900 400</button>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
