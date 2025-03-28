import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import './dark-theme.css'; // Make sure the CSS is included

function App() {
  return (
    <Router>
      <Navbar />
      <Container
        className="my-5"
        style={{
          backgroundColor: '#121212',  /* Dark background */
          color: '#e0e0e0',  /* Light text color */
          padding: '40px',
          borderRadius: '8px',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
