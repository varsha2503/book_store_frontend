import React from 'react';
import "./home.css"; // Importing CSS file for styling
import { Link } from 'react-router-dom';

// Home component for the home page
const Home = () => {
    // Dynamically importing image for the home page
    const image = require("./lib.jpg");

    // JSX for rendering the Home component
    return (
        // Main container for the home page with styling
        <div className="Home-Page text-white container-fluid d-flex justify-content-center align-items-centre"
            style={{ paddingTop: "90px", paddingBottom: "90px" }}>
            <div className="row container">
                {/* Left column for text content */}
                <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column">
                    {/* Title */}
                    <h2 style={{ fontSize: "90px", color:"#2e38ad" }}>Book Store</h2>
                    {/* Subtitle */}
                    <h3 style={{ fontSize: "40px", color: "brown" }}>It's Fency For You</h3>
                    {/* Description */}
                    <p className="mb-0" style={{ color: "black", fontSize: "20px" }}><b>Checkout Out Books from Here</b></p>
                    {/* Link to Books page */}
                    <Link to="/Books" className="viewBook my-3">View Books</Link>
                </div>

                {/* Right column for the image */}
                <div className="col-lg-6 d-flex justify-content-center align-items-end flex-column">
                    <div>
                        {/* Image */}
                        <img className="img-fluid homeimg" src={image} alt="/" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
