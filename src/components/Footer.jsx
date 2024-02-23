import React from 'react';

// Footer component to display developer information
const Footer = () => {
    return (
        // Container div with flex properties to center content vertically and horizontally
        <div className='d-flex justify-content-center align-items-center vh-50 p-3' style={{borderTop:"2px solid white"}}>
            <div className="text-center">
                {/* Developer name */}
                <p style={{fontSize: "20px", color: "white", textDecoration:"underline"}} >Developed By</p>
                <h3 style={{fontSize: "50px", color: "Yellow"}}>VARSHA</h3>
                {/* Additional information */}
                <p style={{fontSize: "20px", color: "white"}}>Student At IIT GUWAHATI</p>
            </div>
        </div>
    )
}

export default Footer;
