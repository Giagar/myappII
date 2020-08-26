import React from "react";
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbarComponent">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-item nav-link active" to="/">
              Home <span class="sr-only">(current)</span>
            </Link>
            <Link class="nav-item nav-link" to="/about">
              About
            </Link>
            <Link class="nav-item nav-link" to="/form">
              Form
            </Link>
            <Link class="nav-item nav-link" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

