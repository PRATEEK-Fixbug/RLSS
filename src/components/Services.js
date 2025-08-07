import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Spinner, Alert } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/services')
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load services.');
        setLoading(false);
      });
  }, []);

  return (
    <Container className="my-5">
      <Row className="text-center">
        <Col>
          <Fade duration={2000}>
            <h2>Our Services</h2>
            <p>
              RLSS Enterprises provides top-tier recruitment and consultancy services tailored to meet the unique needs of your business.
            </p>
          </Fade>
        </Col>
      </Row>
      {loading && <div className="text-center my-5"><Spinner animation="border" /></div>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Row className="my-5">
        {services.map((service, idx) => (
          <Col md={4} key={service._id || idx} className="mb-4">
            <Fade duration={2000}>
              <Card style={{ transition: 'transform 0.2s', cursor: 'pointer' }}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  {service.details && service.details.length > 0 && (
                    <ul style={{ textAlign: 'left', fontSize: '0.95rem' }}>
                      {service.details.map((d, i) => <li key={i}>{d}</li>)}
                    </ul>
                  )}
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
        ))}
      </Row>
      <div className="my-5">
        <h2>Service Implementation</h2>
        <div style={{ width: '100%', height: '400px', marginBottom: '20px', overflow: 'hidden', borderRadius: '12px' }}>
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
            alt="Service Implementation"
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s', cursor: 'pointer' }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>
      </div>
    </Container>
  );
};

export default Services;
