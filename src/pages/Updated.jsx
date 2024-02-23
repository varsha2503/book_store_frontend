import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

// Updated component for updating book details
const Updated = ({ data }) => {
  // Get the id from the URL params
  const { id } = useParams();

  // State to store the book data for updating
  const [bookData, setBookData] = useState({
    name: '',
    author: '',
    isbn: '',
    des: '',
    price: '',
    image: '',
  });

  // State for live alert message
  const [liveAlert, setLiveAlert] = useState('');

  // Fetch book data by id when component mounts
  useEffect(() => {
    const fetchBookById = async () => {
      try {
        // Send a GET request to fetch book data by id
        const response = await axios.get(`https://book-store-kf5m.onrender.com/api/v1/books/${id}`);
        setBookData(response.data); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };

    fetchBookById(); // Call the fetchBookById function
  }, [id]); // Dependency on id to fetch data when id changes

  // Function to handle input changes
  const change = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  // Function to submit the updated book data
  const submit = async (e) => {
    e.preventDefault();
    try {
      // Send a PUT request to update book data
      await axios.put(`https://book-store-kf5m.onrender.com/api/v1/update/${id}`, bookData);
      setLiveAlert("Book updated successfully!"); // Set success alert message
    } catch (error) {
      console.error("Error updating book:", error);
      alert("Failed to update book. Please try again.");
    }
  };

  console.log(bookData); // Log the bookData to the console

  // JSX for rendering the Updated component
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "93vh" }}>
      {/* Mapping over data */}
      {data &&
        data.map((item, index) => (
          <>
            <div className='text-white'>{item.id}</div>
          </>
        ))}
      <div className="container p-4">
        {/* Live alert for success message */}
        {liveAlert && (
          <div className="alert alert-success alert-dismissible fade show mt-3" role="alert">
            <div className="d-flex justify-content-between align-items-center">
              <div>{liveAlert}</div>
              <div className="d-flex align-items-center">
                <div id="liveAlertPlaceholder"></div>
                {/* Button to view updated book */}
                <button type="button" className="btn btn-primary me-2">
                  <Link to={`/Books/${id}`} className="btn btn-primary me-2">View</Link>
                </button>
                {/* Close button for alert */}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
            </div>
          </div>
        )}
        {/* Form for updating book details */}
        <div class="d-flex justify-content-center align-items-center">
          <h2>Update Book</h2>
        </div>
        {/* Form inputs */}
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label"><b>Book Title</b></label>
          <input type="text" className="form-control" id="exampleFormControlInput1"
            placeholder="Ex : Dopamin Doplex" name="name" onChange={change} value={bookData.name} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label"><b>Author</b></label>
          <input type="text" className="form-control" id="exampleFormControlInput1"
            placeholder="Ex : Thibaut Meurisse" name="author" onChange={change} value={bookData.author} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label"><b>ISBN</b></label>
          <input type="number" className="form-control" id="exampleFormControlInput1"
            placeholder="Ex : 736459346713" name="isbn" onChange={change} value={bookData.isbn} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label"><b>Description</b></label>
          <input type="text" className="form-control" id="exampleFormControlInput1"
            placeholder="About Book" name="des" onChange={change} value={bookData.des} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label"><b>Price</b></label>
          <input type="number" className="form-control" id="exampleFormControlInput1"
            placeholder="Enter Price of Book" name="price" onChange={change} value={bookData.price} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label"><b>Image</b></label>
          <input type="text" className="form-control" id="exampleFormControlInput1"
            placeholder="Enter Image URL" name="image" onChange={change} value={bookData.image} />
        </div>
        {/* Submit button */}
        <button className='btn btn-dark' onClick={submit}>Submit</button>
      </div>
    </div>
  )
}

export default Updated;
