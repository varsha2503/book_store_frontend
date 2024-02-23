import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

// View component to display details of a single book
const View = ({ data }) => {
  // Getting the book ID from the URL params
  const { id } = useParams();
  
  // State to store the book data
  const [Data, setData] = useState({ name: "", author: "", isbn: "", des: "", price: "", image: "" });

  // useEffect hook to fetch book data when component mounts
  useEffect(() => {
    const fetchBookById = async () => {
      try {
        // Fetch book data by ID
        const response = await axios.get(`https://book-store-kf5m.onrender.com/api/v1/books/${id}`);
        setData(response.data); // Set fetched data to state
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };

    fetchBookById(); // Call the fetchBookById function
  }, [id]);

  // JSX for rendering the View component
  return (
    <div className="container" style={{ padding: "60px 0" }}> {/* Container with padding */}
      <div className="row">
        {/* Left column for book image */}
        <div className="col-lg-5 col-md-12 d-flex justify-content-center align-items-center" style={{ paddingBottom: "20px" }}> {/* Added paddingBottom */}
          {/* Display book image */}
          <img className='img-fluid ' style={{ height: "550px", width: "auto", borderRadius: "5px", boxShadow: "0 0 0 5px rgba(255, 255, 255, 0.5), 0 0 0 10px rgba(255, 255, 255, 0.3)",
            outline: "1px solid transparent"}} src={Data.image} alt='Book Cover' />
        </div>

        {/* Right column for book details */}
        <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-start flex-column py-2" style={{ paddingLeft: "60px" }}>
          {/* Book details */}
          <h2 style={{ fontSize: "40px" }}>{Data.name}</h2>
          <h3 style={{ fontSize: "30px", color: "blueviolet" }}>By {Data.author}</h3>
          <h3 style={{ fontSize: "30px", color: "black" }}>₹ {Data.price}</h3>
          <p className="mb-0" style={{ color: "black" }}>{Data.des.slice(0, 800)}...</p> {/* Displaying part of the description */}
          <p className="my-4" style={{ color: "black" }}>{Data.isbn}</p> {/* Displaying the ISBN */}

          {/* Update button to navigate to the Update page */}
          <div className='d-flex justify-content-around align-items-center '>
            {/* Link to the Update page with the book ID */}
            <Link to={{ pathname: `/Updated/${Data._id}`, state: { bookId: Data._id } }} className='btn btn-primary' style={{ padding: "7px 15px 7px 15px" }}>Update</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
