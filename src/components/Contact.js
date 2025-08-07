import React, { useState } from 'react';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }
    setStatus('Sending...');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(data.error || 'Failed to send message.');
      }
    } catch {
      setStatus('Failed to send message.');
    }
  };

  return (
    <Container className="text-center my-5">
      <Fade duration={2000}>
        <h2>Contact Us</h2>
        <p>We would love to hear from you! Please fill out the form below and we’ll get back to you as soon as possible.</p>
        <div style={{ textAlign: 'left', margin: '30px auto', maxWidth: '600px', fontSize: '1.1rem' }}>
          <p><strong>Phone:</strong> +91-9876543210</p>
          <p><strong>Email:</strong> info@rlssenterprises.com</p>
          <p><strong>Address:</strong> 123, Business Park, Sector 21, New Delhi, India</p>
        </div>
        <div style={{ width: '100%', height: '300px', background: '#eee', marginBottom: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
          [Google Map Placeholder]
        </div>
      </Fade>

      <Fade duration={2500}>
        <Form onSubmit={handleSubmit}>
          <Row className="justify-content-center">
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Button variant="primary" type="submit" className="w-100">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Fade>

      <Fade duration={3000}>
        {status && <p className="mt-4">{status}</p>}
      </Fade>

      {/* Office Image */}
      <div className="my-5">
        <h2>Our Office</h2>
        <div style={{ width: '100%', height: '400px', marginBottom: '20px', overflow: 'hidden', borderRadius: '12px' }}>
          <a href="https://goo.gl/maps/4Q1v1Q1Q1Q1Q1Q1Q7" target="_blank" rel="noopener noreferrer">
            <img
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80"
              alt="Our Office"
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s', cursor: 'pointer' }}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
