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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }

    // Simulate a form submission
    setTimeout(() => {
      setStatus('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <Container className="text-center my-5">
      <Fade duration={2000}>
        <h2>Contact Us</h2>
        <p>We would love to hear from you! Please fill out the form below and we’ll get back to you as soon as possible.</p>
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

      {/* Image Placeholder */}
      <div className="my-5">
        <h2>Our Office</h2>
        <div style={{ width: '100%', height: '400px', backgroundColor: '#ddd', marginBottom: '20px' }}>
          {/* Placeholder for an office image */}
          <p className="text-center">[Image Placeholder - Office Image]</p>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
