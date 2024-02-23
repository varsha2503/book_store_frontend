import React from 'react';
import { Link } from 'react-router-dom';

// Navbar component for navigation links
const Navbar = ({ handleSearch }) => {
  const image = require("./fav.png");

  return (
    // Navbar with a light background and border at the bottom
    <nav className="navbar navbar-expand-lg navbar-light " style={{ borderBottom: "2px solid black" }}>
      <div className="container">
        <Link className="navbar-brand  d-flex align-items-center" to="/">
          {/* Brand/logo on the left side, linking to the home page */}
          <img style={{ width: "70px", height: "60px" }} src={image} alt="" />
          {/* Book Store title with bold font and large size */}
          <h3 style={{ fontSize: "40px" }}><b>Book Store</b></h3>
        </Link>
        {/* Toggle button for collapsing navigation links on small screens */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Collapsible navigation links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* Search bar */}
            <li className="nav-item" style={{marginTop : "5px"}}>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={handleSearch}
                  />
                </form>
              </li>
            {/* Home link */}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                {/* Text for Home link */}
                <h4>Home</h4>
              </Link>
            </li>
            {/* Books link */}
            <li className="nav-item">
              <Link className="nav-link" to="/Books">
                {/* Text for Books link */}
                <h4>Books</h4>
              </Link>
            </li>
            {/* Add Book link */}
            <li className="nav-item">
              <Link className="nav-link" to="/AddBook">
                {/* Text for Add Book link */}
                <h4>Add Book</h4>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



