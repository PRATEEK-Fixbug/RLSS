import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

const Home = () => {
  return (
    <Container className="text-center my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Fade duration={2000}>
            <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh', flexDirection: 'column' }}>
              <h1 className="display-3">WELCOME TO RLSS ENTERPRISES (OPC) Pvt Ltd</h1>
              <p className="lead">
                Your trusted partner in Consultancy and Manpower Recruitment. We specialize in providing
                high-quality manpower solutions for diverse industries.
              </p>
              <Button variant="primary" size="lg" href="/about">
                Learn More
              </Button>
            </div>
          </Fade>
        </Col>
      </Row>
      
      {/* Image Placeholder */}
      <div className="my-5">
        <h2>Our Vision</h2>
        <p>
          At RLSS Enterprises, we believe in providing strategic recruitment solutions that align with your business goals.
          Our experts carefully select candidates who bring value and innovation to your organization.
        </p>
        <div style={{ width: '100%', height: '400px', backgroundColor: '#ddd', marginBottom: '20px' }}>
          {/* Placeholder for an image */}
          <p className="text-center">[Image Placeholder - Vision Image]</p>
        </div>
      </div>
    </Container>
  );
};

export default Home;
