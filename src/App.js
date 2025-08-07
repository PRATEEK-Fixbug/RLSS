import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import Signup from './components/Signup';
import './dark-theme.css'; // Make sure the CSS is included

function PrivateRoute({ children }) {
  const isAuth = localStorage.getItem('rlss_logged_in') === 'true';
  if (!isAuth) {
    window.location.href = '/login';
    return null;
  }
  return children;
}

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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          } />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
