import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="brand-logo">
        <div className="brand-circle">
          PS
        </div>

        <div>
          <h2>PARASHAR</h2>
          <div className="brand-sub">
            S I G N A T U R E
          </div>
          <small>PURE VEG | FINE DINING</small>
        </div>
      </div>

      <div className="nav-links">

        {/* <Link to="/">HOME</Link> */}
        <Link to="/menu">MENU</Link>
        <Link to="/about">ABOUT US</Link>
        <Link to="/gallery">GALLERY</Link>
        <Link to="/reservation">RESERVATION</Link>
        <Link to="/contact">CONTACT</Link>

      </div>

      <Link
        to="/reservation"
        className="book-btn"
      >
        📅 &nbsp; BOOK A TABLE
      </Link>

    </nav>
  );
}

export default Navbar;