import './App.css'; 
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import Books from './pages/Books';
import AddBook from './pages/AddBook';
import Updated from './pages/Updated';
import View from './pages/view';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Router>
      <Navbar handleSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Books" element={<Books searchQuery={searchQuery} />} />
        <Route path="/AddBook" element={<AddBook />} />
        <Route path="/Updated/:id" element={<Updated />} />
        <Route path="/Books/:id" element={<View />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

