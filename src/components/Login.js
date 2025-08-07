import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem('rlss_logged_in', 'true');
        localStorage.setItem('rlss_jwt', data.token);
        window.dispatchEvent(new Event('storage'));
        setSuccess(true);
        setTimeout(() => {
          window.location.href = '/';
        }, 1000);
      } else {
        setError(data.error || 'Login failed');
      }
    } catch {
      setError('Login failed');
    }
  };

  return (
    <Container style={{ maxWidth: 400, marginTop: 60 }}>
      <h2 className="mb-4 text-center">Admin/User Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">Login successful! (Demo only)</Alert>}
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
            autoComplete="current-password"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
      </Form>
      <div className="mt-3 text-center">
        <span>Don't have an account? </span>
        <a href="/signup">Sign up</a>
      </div>
    </Container>
  );
};

export default Login; 