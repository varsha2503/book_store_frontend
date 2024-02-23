import React, { useEffect, useState } from 'react';
import axios from "axios";
import BookSection from "../components/bookSection";
import { FaSpinner } from 'react-icons/fa'; // Import FaSpinner from react-icons/fa

const Books = ({ searchQuery }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("https://book-store-kf5m.onrender.com/api/v1/books");
        setBooks(response.data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false on error as well
      }
    };
    fetchBooks();
  }, []);

  // Filter books based on search query
  const filteredBooks = books.filter(book =>
    book.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="" style={{ minHeight: "100vh" }}>
      <div className="d-flex justify-content-center align-items-center py-3">
        <h1>Book Section</h1>
      </div>
      <div>
        {/* Conditional rendering for loading spinner */}
        {loading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "50vh" }}>
            <FaSpinner className="text-primary" style={{ fontSize: "3rem" }} />
          </div>
        ) : (
          <div className='text-white'>
            <BookSection data={filteredBooks} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;