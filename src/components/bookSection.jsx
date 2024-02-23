import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const BookSection = ({ data }) => {
  // Function to delete a book by its ID
  const deleteNow = async (id) => {
    try {
      // Send a DELETE request to the server to delete the book
      await axios.delete(`https://book-store-kf5m.onrender.com/api/v1/delete/${id}`);
      // If successful, show an alert and reload the page to reflect changes
      alert("Book deleted successfully!");
      window.location.reload();
    } catch (error) {
      // If there's an error, log it to the console and show an alert to the user
      console.error("Error deleting book:", error);
      alert("Failed to delete book. Please try again.");
    }
  };

  return (
    <div className='d-flex flex-wrap justify-content-center align-items-start my-3'>
      {/* Map through the 'data' array to display each book */}
      {data && data.map((item, index) => (
        <div key={index} className='mb-5 me-4' style={{ width: "200px", height: "385px", backgroundColor: "black", borderRadius: "5px" }}>
          <div>
            {/* Link to view details of a specific book */}
            <Link to={`/books/${item._id}`}>
              {/* Book cover image */}
              <img
                style={{ width: "150px", height: "200px", margin: "23px", transition: "transform 0.3s ease-in-out" }}
                className="img-fluid"
                src={item.image}
                alt="Book Cover"
                onMouseOver={(e) => e.target.style.transform = "scale(1.1)"}
                onMouseOut={(e) => e.target.style.transform = "scale(1)"}
              />
            </Link>
          </div>
          {/* Book title */}
          <div className='text-white px-3'><h6>{item.name.slice(0, 19)}...</h6></div>
          {/* Book author */}
          <div className='text-white px-3'><h6>{item.author.slice(0, 19)}</h6></div>
          {/* Book price */}
          <div className='text-white px-3'><h5>₹ {item.price}</h5></div>
          {/* Buttons for updating and deleting the book */}
          <div className='d-flex justify-content-around align-items-center px-3'>
            {/* Button to update the book, linking to the update page */}
            <Link to={{ pathname: `/Updated/${item._id}`, state: { bookId: item._id } }} className='btn btn-primary'>Update</Link>
            {/* Button to delete the book, triggers 'deleteNow' function onClick */}
            <button className='btn btn-danger' onClick={() => deleteNow(item._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookSection;
