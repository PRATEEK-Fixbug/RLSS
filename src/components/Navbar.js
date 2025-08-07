import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedIn(localStorage.getItem('rlss_logged_in') === 'true');
    const handleStorage = () => {
      setLoggedIn(localStorage.getItem('rlss_logged_in') === 'true');
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('rlss_logged_in');
    setLoggedIn(false);
    navigate('/');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">RLSS ENTERPRISES</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          {!loggedIn && <Nav.Link as={Link} to="/login">Login</Nav.Link>}
          {loggedIn && <Nav.Link as={Link} to="/admin">Admin Dashboard</Nav.Link>}
          {loggedIn && <Nav.Link onClick={handleLogout}>Logout</Nav.Link>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
