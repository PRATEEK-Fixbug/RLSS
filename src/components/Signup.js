import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({ username: '', password: '', confirm: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    if (!form.username || !form.password || !form.confirm) {
      setError('Please fill in all fields.');
      return;
    }
    if (form.password !== form.confirm) {
      setError('Passwords do not match.');
      return;
    }
    try {
      const res = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: form.username, password: form.password }),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess(true);
        setTimeout(() => navigate('/login'), 1500);
      } else {
        setError(data.error || 'Signup failed');
      }
    } catch {
      setError('Signup failed');
    }
  };

  return (
    <Container style={{ maxWidth: 400, marginTop: 60 }}>
      <h2 className="mb-4 text-center">Sign Up</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">Signup successful! Redirecting to login...</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Enter username"
            autoComplete="username"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
            autoComplete="new-password"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirm"
            value={form.confirm}
            onChange={handleChange}
            placeholder="Confirm password"
            autoComplete="new-password"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Sign Up
        </Button>
      </Form>
      <div className="mt-3 text-center">
        <span>Already have an account? </span>
        <a href="/login">Login</a>
      </div>
    </Container>
  );
};

export default Signup;
