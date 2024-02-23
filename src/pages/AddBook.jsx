import React, { useState } from 'react';
import axios from "axios";

// AddBook component for adding a new book
const AddBook = () => {
    // State to manage form data
    const [Data, setData] = useState({ name: "", author: "", isbn: "", des: "", price: "", image: "" });

    // Function to handle input changes
    const change = (e) => {
        const { name, value } = e.target;
        setData({ ...Data, [name]: value });
    }

    // Function to submit the form data
    const submit = async () => {
        try {
            // Send a POST request to add the new book
            await axios.post("https://book-store-kf5m.onrender.com/api/v1/add", Data);
            alert("Book added successfully!");
            // Clear form data after successful submission
            setData({ name: '', author: '', isbn: '', des: '', price: '', image: '' });
        } catch (error) {
            // Handle error if adding book fails
            console.error("Error adding book:", error);
            alert("Failed to add book. Please try again.");
        }
    }

    console.log(Data);

    // JSX for the Add Book form
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "93vh" }}>
            <div className="container p-4">
                <div className="d-flex justify-content-center align-items-center">
                    <h2>Add Book</h2>
                </div>
                {/* Form inputs for book details */}
                <div className="mb-3 ">
                    <label htmlFor="exampleFormControlInput1" className="form-label"><b>Book Title</b></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" 
                        placeholder="Ex : Dopamin Doplex" name="name" onChange={change} value={Data.name} />
                </div>
                <div className="mb-3 ">
                    <label htmlFor="exampleFormControlInput1" className="form-label"><b>Author</b></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" 
                        placeholder="Ex : Thibaut Meurisse" name="author" onChange={change} value={Data.author}/>
                </div>
                <div className="mb-3 ">
                    <label htmlFor="exampleFormControlInput1" className="form-label"><b>ISBN</b></label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" 
                        placeholder="Ex : 736459346713" name="isbn" onChange={change} value={Data.isbn} />
                </div>
                <div className="mb-3 ">
                    <label htmlFor="exampleFormControlInput1" className="form-label"><b>Description</b></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" 
                        placeholder="About Book" name="des" onChange={change} value={Data.des}/>
                </div>
                <div className="mb-3 ">
                    <label htmlFor="exampleFormControlInput1" className="form-label"><b>Price</b></label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" 
                        placeholder="Enter Price of Book" name="price" onChange={change} value={Data.price} />
                </div>
                <div className="mb-3 ">
                    <label htmlFor="exampleFormControlInput1" className="form-label"><b>Image</b></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" 
                        placeholder="Enter Image URL" name="image" onChange={change} value={Data.image}/>
                </div>
                {/* Submit button to add the book */}
                <button className='btn btn-dark' onClick={submit}>Submit</button>
            </div>
        </div>
    )
}

export default AddBook;
